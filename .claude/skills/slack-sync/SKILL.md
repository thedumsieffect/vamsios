---
name: slack-sync
description: Deep Slack scanning methodology for daily brain sync. Defines search strategy, verification patterns, signal taxonomy, and output structure. Use during daily sync or when asked to check Slack.
allowed-tools: mcp__claude_ai_Slack__slack_search_public_and_private mcp__claude_ai_Slack__slack_search_users mcp__claude_ai_Slack__slack_read_channel mcp__claude_ai_Slack__slack_read_thread Read Edit
---

# Slack Sync Methodology

You are a world-class executive assistant scanning Slack for a PM/engineer who may have been offline, traveling, or in back-to-back meetings. Your job is not to summarize — it is to catch every signal that matters and verify every claim before logging it.

## Three Laws of the Sync

1. **Never trust search alone.** Slack search returns truncated/empty results for DMs and group DMs. Always read channels directly with `slack_read_channel` using user IDs.
2. **Never mark an item open without checking.** If someone asked Vamsi to do X, check whether he did X before logging it as open.
3. **Never call a day quiet without reading the actual channels.** Bot-only messages in search results does not mean no human activity happened.

---

## Signal Taxonomy

Capture these eight signal types:

| Category | Definition | Example |
|---|---|---|
| **Action Items (on Vamsi)** | Something Vamsi needs to do, was asked to do, or committed to doing | Kyra: "share evals with Reza" |
| **Waiting On Others** | Something Vamsi is blocked on or waiting for someone else to deliver | Waiting for Armin sign-off on rollout |
| **Commitments I Made** | Promises Vamsi made in conversation that need follow-through tracking | "I'll send Jose a Loom walkthrough" |
| **Decisions Made** | Decisions that affect MCP, product direction, or process — whether Vamsi was present or not | New meeting cadence from Kyra |
| **Cross-Product Signals** | Activity in adjacent products (Runneth, Analyst, Builder) that affects MCP | Jose finding custom conversions hallucination in Runneth |
| **Customer/GTM Signals** | Customer feedback, onboarding friction, sales asks, feature requests | Jose needing setup instructions for alpha clients |
| **Incidents and Bugs** | Engineering incidents, deploy failures, bug reports that could affect MCP UX | PDEC-5391 chat refresh issue |
| **Org and People Signals** | Process changes, scheduling changes, praise/recognition, frustration signals | Giselle moving the evals meeting time |

Also note but don't table:
- **Praise/Recognition** — track for performance review context (e.g., Kyra's "letss gooo!!")
- **Competitive Intel** — mentions of Foreplay, Manus, ActivePieces, or other MCP competitors

---

## Phase 1: Direct Channel Reads (Primary Source of Truth)

This is the most critical phase. Search is unreliable for DMs and group DMs.

### Priority 1 — Inner Circle DMs (always read)

Use `slack_search_users` to resolve user IDs, then `slack_read_channel` with each user ID. Read last 24-48h of messages.

| Person | Role | Why every message matters |
|---|---|---|
| Kyra Richards | PM lead / manager | Direct asks, decisions, goal-setting, process changes |
| Mike Choi | Eng partner | Code commits, PR updates, deploy status, technical decisions |
| Maya | PM partner | Stability, support, shared PM surface, MCP events |
| Jose Garcia | GTM / Sales | Alpha rollout, customer issues, onboarding, feedback |
| Reza Khadjavi | CEO | Strategic direction, high-level asks |
| Armin Karimi | Eng lead | Architecture decisions, release approvals |
| Giselle | Mentor | Evals, quality bar, methodology |

For each DM, look for:
- **Unanswered asks**: Did they ask Vamsi something he hasn't replied to?
- **Commitments Vamsi made**: Did he say "I'll do X" or "let me grab that"? Did he follow through? **Check the recipient's DM to verify delivery.**
- **Decisions or context**: Did they share something Vamsi needs to know?
- **Tone shifts**: Is someone frustrated, waiting, or escalating?

### Priority 2 — Core Product Channels (always read)

Use `slack_read_channel` with channel IDs. If you don't have channel IDs, use `slack_search_channels` to find them.

| Channel | Why |
|---|---|
| #project-cli | MCP product channel — launches, bugs, alpha status |
| #project-mcp | MCP work coordination |
| #mcp-feedback | Customer feedback — always capture every item |
| #engineering | Incidents, releases, e2e test failures |
| #engineering-platform | Platform-specific: PRs, ES sync, stability |
| #admin-requests | Bug reports, deploy requests, production issues |

### Priority 3 — Adjacent Channels (conditional)

Read these when Phase 2 search shows activity from key people in them:

| Channel | When to Read |
|---|---|
| #team-runneth | When Jose or Lukasz are active, or "MCP" / "custom conversions" / "hallucination" appears |
| #ask-analyst | When Jose, Alysha, or Reza are discussing analyst behavior |
| #project-chat | When cross-product decisions are being made |
| #project-analytics | When metrics work intersects with MCP |
| #stream-mcp | Gong recordings mentioning MCP in sales calls — check for real content, skip empty bot posts |

### Group DMs — The Hardest Part

Group DMs have no names and are hard to discover.

**Discovery strategy:**
1. Search `to:me on:YYYY-MM-DD` with `channel_types: "mpim"` to find group DMs where Vamsi was mentioned
2. Search `from:me on:YYYY-MM-DD` with `channel_types: "mpim"` to find group DMs Vamsi participated in
3. For known recurring group DMs, use the Group DM Registry in slack-log.md to read directly by channel ID

**Known recurring group DMs** (update as discovered):
- Armin/Itay/Mike — engineering decisions, PR approvals
- Vishaal/Jose/Fábio — MCP gating, LD design, agency access
- Kyra/Maya — PM coordination

When you discover a new group DM, add it to the Group DM Registry in slack-log.md.

---

## Phase 2: Search Sweep (Gap-Filling)

After direct reads, use search to catch signals in channels you didn't read directly.

**People-centric searches (run for each key person):**
```
from:<Kyra_ID> on:YYYY-MM-DD     — Everything Kyra said anywhere
from:<Mike_ID> on:YYYY-MM-DD     — Everything Mike said anywhere
from:<Jose_ID> on:YYYY-MM-DD     — Jose's cross-channel activity
from:<Maya_ID> on:YYYY-MM-DD     — Maya's activity
from:<Armin_ID> on:YYYY-MM-DD    — Armin's activity
```

**Self searches:**
```
from:me on:YYYY-MM-DD            — Commitments Vamsi made today
to:me on:YYYY-MM-DD              — Messages directed at Vamsi (filter out bots)
```

**Keyword searches (when relevant):**
```
MCP on:YYYY-MM-DD                — MCP mentions across all channels
"custom conversions" on:YYYY-MM-DD — Known pain point
blocker on:YYYY-MM-DD            — Blockers anyone surfaced
```

**Multi-day gaps:** When last sync was 2+ days ago, use `after:YYYY-MM-DD before:YYYY-MM-DD` ranges. Scan each day's DM reads with `oldest`/`latest` timestamps.

---

## Phase 3: Thread Deep-Dives

For any message that has a thread (reply count > 0 or `thread_ts`):

1. Use `slack_read_thread` to get the full thread
2. Focus on the last 3-5 messages in long threads — earlier context is usually stale
3. Check if the thread was **resolved** (someone replied with a fix, answer, or "done")
4. Check if Vamsi was **mentioned in the thread** even if he didn't start it
5. **Parent messages are often misleading** — the real decision or outcome is in the replies

---

## Verification Patterns

**Rule: Never log an "open" action item without attempting verification.**

| Signal Type | How to Verify |
|---|---|
| "Vamsi needs to send X to Y" | Check Vamsi's DM with Y — did he send it? Look for links/attachments |
| "Vamsi committed to doing X" | Check git log, Linear status, or follow-up messages |
| "Bug reported that affects MCP" | Check #admin-requests and Linear for ticket status |
| "Meeting was scheduled/moved" | Cross-reference with calendar sync |
| "PR needs review" | Search for PR number — check if already reviewed/merged |
| "Customer needs onboarding" | Check if Vamsi DM'd Jose or the customer with setup instructions |

**Cross-reference sources:**
- For code commitments: search for PR numbers in #engineering-platform or the eng GDM
- For Linear tickets: note the ID and verify in the Linear sync step
- For "share X with Y": read the DM between Vamsi and Y, look for links/files/forwarded messages

---

## Noise Filtering

### Always skip:
- GitHub bot notifications (PR opened/merged/CI status) — unless they contain human comments
- Google Calendar bot reminders
- Linear bot notifications (handled by Linear sync)
- Deploy bot messages in #admin-requests (unless indicating failure)
- Emoji-only reactions or messages
- Slack workflow notifications
- Channel join/leave messages
- Gong bot posts with no content (empty text field)

### Sometimes read (conditional):
- Motion-ops bot — read if indicating e2e test failures or production errors
- Monstache deploy messages — only if human replies indicate issues
- Bot messages with human thread replies — **always read the thread**

### Escalation rules (watch → action):
A "watch" item should escalate to "action" if:
- It has been open for more than 2 business days
- Someone follows up asking about it
- It blocks someone else's work
- A customer is affected

---

## Time and Timezone Handling

1. **Compute timestamps in UTC.** The `oldest`/`latest` params for `slack_read_channel` use Unix timestamps. Convert from sync date using Vamsi's current timezone.
2. **Multi-day gaps:** When syncing after 2+ days, scan each day individually. Use `oldest` set to last sync date, `latest` set to now.
3. **Weekend/holiday handling:** If syncing Monday, scan Fri + Sat + Sun. Weekend DMs often contain real commitments hidden in casual chat.
4. **Late-night activity:** Jose, Mike, and Reza are documented as sometimes active late at night. Always include timestamps up to 6am the following day.

---

## Output Structure

Update `brain/sync/slack-log.md` with these sections:

### Group DM Registry (top of file, after Last Sync)
| Channel ID | Participants | Last Active | Nickname |
|-----------|-------------|-------------|----------|

Log discovered group DMs here so future syncs can read them directly.

### Open Action Items
| Date | From | Channel/DM | Item | Status |
Statuses: `open`, `watch`, `stale` (>3 days), `escalate` (>7 days)

### Waiting On Others
| Date | Who | What | Last Checked | Status |
Track things where Vamsi is blocked on someone else.

### Commitments I Made
| Date | To | Channel/DM | Commitment | Delivered | Verified |
Track promises Vamsi made. "Verified" means Claude checked whether the commitment was fulfilled.

### Resolved Action Items
| Date | From | Item | Resolution |

### Decisions
| Date | Channel/DM | Decision | Participants |

### Asks & Requests
| Date | From | Channel/DM | Ask | Responded |

### Key Channel Activity
Brief summaries per channel — not transcripts, just what happened and why it matters.

### Sync History
| Date | Messages Scanned | Items Extracted | Notes |

---

## Quality Checklist (Run Before Saving)

Before writing to `slack-log.md`, verify:

- [ ] Every inner-circle DM was **read directly** (not just searched)
- [ ] Every "open" action item was **checked for resolution**
- [ ] Every commitment Vamsi made was **verified for delivery**
- [ ] Group DMs were discovered and read (not just individual DMs)
- [ ] At least one adjacent channel was checked for cross-product signals
- [ ] No items logged as "open" that were actually completed
- [ ] Overnight activity was included (up to 6am next day)
- [ ] Bot-only channels were still checked for human thread replies
- [ ] Thread replies were read for any message with a thread
- [ ] Previous sync's open items were re-checked for updates
- [ ] `from:me` search was run to capture commitments Vamsi made
