#!/usr/bin/env node
// Poll Slack #mcp-feedback for structured `MCP Feedback` bot posts and create
// GitHub issues that trigger the existing claude.yml workflow.
//
// Run: `LIVE=true tsx poll.ts` (or via run.sh)

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// --------------------------------------------------------------------------
// Config

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATE_PATH = join(__dirname, 'state', 'processed.json');

const env = (key: string, fallback?: string): string => {
  const v = process.env[key] ?? fallback;
  if (v === undefined) throw new Error(`missing required env var ${key}`);
  return v;
};

const SLACK_BOT_TOKEN = env('SLACK_BOT_TOKEN');
const GITHUB_PAT = env('GITHUB_PAT');
const LIVE = (process.env.LIVE ?? 'false').toLowerCase() === 'true';
const CHANNEL_ID = env('CHANNEL_ID', 'C0APWNUR4DS'); // #mcp-feedback
const REPO = env('REPO', 'Motion-Creative/mondrian');
const LOOKBACK_HOURS = Number(env('LOOKBACK_HOURS', '2'));

// --------------------------------------------------------------------------
// Types

type SlackMessage = {
  type: string;
  ts: string;
  text?: string;
  bot_id?: string;
  user?: string;
  subtype?: string;
};

type SlackHistoryResponse = {
  ok: boolean;
  messages?: SlackMessage[];
  has_more?: boolean;
  error?: string;
};

type ParsedFeedback = {
  ts: string;
  permalink: string;
  severity: string;
  tool: string;
  intent: string;
  userQuery: string;
  comment: string;
  user?: string;
  orgs?: string;
  tags: string[];
};

type ProcessedEntry = {
  ts: string;
  sha: string;
  ghIssueNumber?: number;
  ghIssueUrl?: string;
  processedAt: string;
};

type ProcessedState = {
  lastRunAt: string;
  entries: ProcessedEntry[];
};

// --------------------------------------------------------------------------
// State

function loadState(): ProcessedState {
  if (!existsSync(STATE_PATH)) {
    return { lastRunAt: '0', entries: [] };
  }
  return JSON.parse(readFileSync(STATE_PATH, 'utf8')) as ProcessedState;
}

function saveState(state: ProcessedState): void {
  mkdirSync(dirname(STATE_PATH), { recursive: true });
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

function sha256(s: string): string {
  return createHash('sha256').update(s).digest('hex').slice(0, 16);
}

// --------------------------------------------------------------------------
// Slack

async function slackHistory(opts: { oldest: string }): Promise<SlackMessage[]> {
  const url = new URL('https://slack.com/api/conversations.history');
  url.searchParams.set('channel', CHANNEL_ID);
  url.searchParams.set('oldest', opts.oldest);
  url.searchParams.set('limit', '200');
  url.searchParams.set('inclusive', 'false');

  const res = await fetch(url, { headers: { Authorization: `Bearer ${SLACK_BOT_TOKEN}` } });
  const body = (await res.json()) as SlackHistoryResponse;
  if (!body.ok) throw new Error(`slack history failed: ${body.error}`);
  return body.messages ?? [];
}

async function slackPermalink(ts: string): Promise<string> {
  const url = new URL('https://slack.com/api/chat.getPermalink');
  url.searchParams.set('channel', CHANNEL_ID);
  url.searchParams.set('message_ts', ts);
  const res = await fetch(url, { headers: { Authorization: `Bearer ${SLACK_BOT_TOKEN}` } });
  const body = (await res.json()) as { ok: boolean; permalink?: string; error?: string };
  if (!body.ok) throw new Error(`slack permalink failed: ${body.error}`);
  return body.permalink ?? '';
}

// --------------------------------------------------------------------------
// Parse

const FEEDBACK_HEADER_RE = /^(?::\w+:\s*)?\*MCP Feedback\*/m;

function isMcpFeedbackPost(msg: SlackMessage): boolean {
  if (!msg.text) return false;
  if (!FEEDBACK_HEADER_RE.test(msg.text)) return false;
  // Require at least the Tool field — distinguishes structured bot posts from
  // human discussion that mentions "MCP Feedback" in passing.
  return msg.text.includes('*Tool:*');
}

function extractField(text: string, label: string): string {
  // Captures lines like  *Tool:* `get_creative_insights`
  // or                    *Comment:* multi-paragraph body until next *Capitalized:* field.
  // No `m` flag — we want `$` to mean end-of-string so multi-paragraph fields capture fully.
  // The lookahead either lands on a `\n*Capitalized:*` marker or the very end of the message.
  const re = new RegExp(
    `\\*${label}:\\*\\s*([\\s\\S]*?)(?=\\n\\*[A-Z][^*]*:\\*|$)`,
  );
  const m = text.match(re);
  const captured = m?.[1];
  return captured ? captured.trim().replace(/^`|`$/g, '') : '';
}

function parseFeedback(msg: SlackMessage, permalink: string): ParsedFeedback {
  const text = msg.text ?? '';

  // Header pattern: ":bug: *MCP Feedback* — `bug`" or ":warning: *MCP Feedback* — `feature-request`"
  const sevMatch = text.match(/\*MCP Feedback\*\s*[—–-]\s*`?([\w-]+)`?/);
  const severity = sevMatch?.[1] ?? 'unknown';

  const tool = extractField(text, 'Tool');
  const intent = extractField(text, 'Intent');
  const userQuery = extractField(text, 'User Query');
  const comment = extractField(text, 'Comment');
  const user = extractField(text, 'User') || undefined;
  const orgs = extractField(text, 'Orgs') || undefined;
  const tagsRaw = extractField(text, 'Tags');
  const tags = tagsRaw
    ? tagsRaw.split(',').map((t) => t.trim()).filter(Boolean)
    : [];

  return { ts: msg.ts, permalink, severity, tool, intent, userQuery, comment, user, orgs, tags };
}

// --------------------------------------------------------------------------
// GitHub

function buildIssueTitle(f: ParsedFeedback): string {
  const head = f.tool ? `${f.tool} — ` : '';
  const tail = (f.intent || f.userQuery || f.comment || 'see body').slice(0, 80).replace(/\s+/g, ' ');
  return `[MCP Feedback] ${head}${tail}`;
}

function buildIssueBody(f: ParsedFeedback): string {
  return `@claude please investigate this MCP feedback report and draft a PR if you can identify a clear, safe fix. If the report needs clarification, post the questions in this issue and stop.

## Report

- **Severity:** \`${f.severity}\`
- **Tool:** \`${f.tool || '(not specified)'}\`
- **Source:** [Slack #mcp-feedback](${f.permalink})${f.user ? `\n- **Reporter user:** \`${f.user}\`` : ''}${f.orgs ? `\n- **Org(s):** \`${f.orgs}\`` : ''}
- **Tags:** ${f.tags.length ? f.tags.map((t) => `\`${t}\``).join(', ') : '(none)'}

## Intent
${f.intent || '_(not specified)_'}

## User Query
${f.userQuery || '_(not specified)_'}

## Detail / Repro / Diagnosis
${f.comment || '_(not specified)_'}

---

<sub>Auto-filed by \`automation/feedback-to-pr\` from \`vamsios\`. Slack message ts: \`${f.ts}\`. Re-runs are deduped by message TS — re-opening this issue won't trigger a duplicate.</sub>
`;
}

async function createGhIssue(f: ParsedFeedback): Promise<{ number: number; url: string }> {
  const url = `https://api.github.com/repos/${REPO}/issues`;
  const body = {
    title: buildIssueTitle(f),
    body: buildIssueBody(f),
    labels: ['mcp-feedback', 'automated', 'agent:claude'],
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${GITHUB_PAT}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`github issue create failed (${res.status}): ${text}`);
  }
  const json = (await res.json()) as { number: number; html_url: string };
  return { number: json.number, url: json.html_url };
}

// --------------------------------------------------------------------------
// Main

async function main(): Promise<void> {
  const state = loadState();
  const seenTs = new Set(state.entries.map((e) => e.ts));

  const lookbackSeconds = LOOKBACK_HOURS * 3600;
  const fallbackOldest = (Date.now() / 1000 - lookbackSeconds).toFixed(6);
  const oldest = state.lastRunAt && state.lastRunAt !== '0' ? state.lastRunAt : fallbackOldest;

  console.log(`[feedback-to-pr] mode=${LIVE ? 'LIVE' : 'DRY-RUN'} channel=${CHANNEL_ID} oldest=${oldest} repo=${REPO}`);

  const messages = await slackHistory({ oldest });
  const candidates = messages.filter(isMcpFeedbackPost);

  console.log(`[feedback-to-pr] fetched ${messages.length} msgs, ${candidates.length} look like feedback`);

  let newestTs = state.lastRunAt;
  const newEntries: ProcessedEntry[] = [];

  for (const msg of candidates.reverse()) {
    if (seenTs.has(msg.ts)) {
      console.log(`[feedback-to-pr] skip ${msg.ts} (already processed)`);
      continue;
    }

    const sha = sha256(msg.text ?? '');
    const dupBySha = state.entries.find((e) => e.sha === sha);
    if (dupBySha) {
      console.log(`[feedback-to-pr] skip ${msg.ts} (content duplicate of ${dupBySha.ts})`);
      continue;
    }

    const permalink = await slackPermalink(msg.ts);
    const parsed = parseFeedback(msg, permalink);

    console.log(`[feedback-to-pr] ${LIVE ? 'CREATE' : 'WOULD CREATE'} issue: ${buildIssueTitle(parsed)}`);
    if (!LIVE) {
      console.log(`  body preview (first 200 chars): ${buildIssueBody(parsed).slice(0, 200).replace(/\n/g, ' / ')}…`);
      newEntries.push({ ts: msg.ts, sha, processedAt: new Date().toISOString() });
    } else {
      const issue = await createGhIssue(parsed);
      console.log(`  → opened #${issue.number}: ${issue.url}`);
      newEntries.push({
        ts: msg.ts,
        sha,
        ghIssueNumber: issue.number,
        ghIssueUrl: issue.url,
        processedAt: new Date().toISOString(),
      });
    }

    if (Number(msg.ts) > Number(newestTs)) newestTs = msg.ts;
  }

  state.entries.push(...newEntries);
  state.lastRunAt = newestTs || state.lastRunAt;
  saveState(state);

  console.log(`[feedback-to-pr] done. processed ${newEntries.length} new posts. lastRunAt=${state.lastRunAt}`);
}

main().catch((err) => {
  console.error('[feedback-to-pr] FAILED:', err);
  process.exit(1);
});
