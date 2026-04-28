# Feedback-to-PR Loop (MVP)

Pipes structured `MCP Feedback` bot posts from Slack `#mcp-feedback` into GitHub Issues on `Motion-Creative/mondrian` with an `@claude` mention. The existing `claude.yml` workflow then auto-fires the `anthropics/claude-code-action` and drafts a PR.

```
[#mcp-feedback bot post]
        ↓ poll.ts (this dir)
[parse structured fields: tool, query, repro, comment, tags]
        ↓ create GH issue with @claude prompt
[GitHub Issue → claude.yml workflow]
        ↓ Claude drafts PR
[PR opened on mondrian, ready for human review]
```

This is the **Vamsi-side MVP** of Kyra's Apr 28 ask:
> *"Set all the new API endpoints up with this flow in mind. Would love a world where runneth can also send us feedback and we can have codex etc put up an initial PR for any endpoint issues."*

## Status

- [x] Slack ingestion + bot-post detection
- [x] Structured-field parsing
- [x] Dedup state file (only processes new messages)
- [x] GitHub issue body templated with `@claude` mention
- [x] **Dry-run by default** — set `LIVE=true` to actually create issues
- [ ] Hardening: error backoff, dead-letter for unparseable messages
- [ ] Productionize: move into mondrian server with a webhook listener instead of polling

## Setup

```sh
cd automation/feedback-to-pr
cp .env.example .env
# Fill in SLACK_BOT_TOKEN and GITHUB_PAT
pnpm install   # or npm install
```

Required env vars (see `.env.example`):
- `SLACK_BOT_TOKEN` — `xoxb-…` with `channels:history`, `groups:history`, `users:read` scopes for the workspace
- `GITHUB_PAT` — fine-grained PAT with `Issues: Read and write` on `Motion-Creative/mondrian`
- `LIVE` — `false` (default, dry run) or `true` (actually creates GH issues)
- `CHANNEL_ID` — defaults to `C0APWNUR4DS` (#mcp-feedback)
- `REPO` — defaults to `Motion-Creative/mondrian`
- `LOOKBACK_HOURS` — defaults to `2` (only process posts newer than this on first run)

## Run

```sh
# Dry run (logs what it would create, doesn't touch GitHub)
./run.sh

# Real run
LIVE=true ./run.sh
```

State is kept at `state/processed.json` (gitignored). Each entry: `{ ts, ghIssueNumber, sha }` so duplicates from re-runs are skipped.

## How feedback posts are detected

Messages in `#mcp-feedback` whose text starts with one of:
- `:bug: *MCP Feedback*`
- `:warning: *MCP Feedback*`
- `*MCP Feedback*`

…and contain the structured `*Tool:*`, `*User Query:*`, `*Comment:*` fields. Anything else is ignored (human discussion, Datadog alerts, etc.).

## How issues get created

For each new feedback post we POST to `https://api.github.com/repos/Motion-Creative/mondrian/issues` with:

- **title:** `[MCP Feedback] {tool} — {first 60 chars of intent or comment}`
- **body:** templated; opens with `@claude please investigate this MCP feedback report and draft a PR if you can identify a clear, safe fix…`
- **labels:** `mcp-feedback`, `automated`, `agent:claude` (created on first use; ignored if missing)

The `@claude` mention triggers `.github/workflows/claude.yml` → `anthropics/claude-code-action@v1` → Claude (Sonnet 4.6) opens a worktree, investigates, and drafts a PR.

## Production path

This poller is the MVP. The production version should:

1. Live in `mondrian/apps/server/src/routes/slack/` as a **Slack Events API webhook** (no polling).
2. Use the existing `codexContext` JWT pattern + Linear API to *also* file a Linear ticket for human triage.
3. Include a Linear-issue ID in the GH issue body so the PR can auto-link the ticket.
4. Add a Slack thread reply on the original `MCP Feedback` post linking to the GH issue + PR once they're created (closing the loop visibly to the team).
5. Have observability: Datadog metric `feedback_to_pr.attempted` / `feedback_to_pr.pr_drafted` / `feedback_to_pr.failed`.

When you're ready to migrate, the parsing logic in `poll.ts` ports cleanly — it's the only non-trivial piece.

## Known gaps / things to validate before flipping `LIVE=true`

- The `@claude` workflow has not been tested with auto-generated issue bodies — verify on a low-stakes test issue first.
- `claude.yml` runs `claude-sonnet-4-6` with default permissions (`contents: read, pull-requests: read, issues: read`). Drafting a PR may need write permissions added. **Check `.github/workflows/claude.yml` permissions block before relying on PR creation.**
- Rate limit on Slack history API: `tier 3` (50/min). Single-channel poll is fine; if you expand to multiple channels, batch.
- The `MCP Feedback` bot user-ID is currently surfaced as `U00` in search results — fragile. We match on the structured-text pattern instead, which is robust.
