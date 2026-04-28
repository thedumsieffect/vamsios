# Feedback-to-PR Autonomous Loop

**Status:** MVP scaffolded 2026-04-28. **Dry-run by default; not yet flipped LIVE.**
**Owner:** Vamsi (lead). Mike (codex-bot infra precedent + GitHub Action review).
**Origin ask:** Kyra in #mcp-feedback Apr 28 10:56 CT.

## What It Is

A pipeline that turns structured `MCP Feedback` Slack bot posts into GitHub Issues with `@claude` mentions. The existing `claude.yml` workflow on `Motion-Creative/mondrian` then auto-fires `anthropics/claude-code-action@v1` (Sonnet 4.6) and drafts a PR.

```
[#mcp-feedback bot post]
        ↓ poll.ts (vamsios/automation/feedback-to-pr)
[parse: tool, query, repro, comment, tags]
        ↓ create GH issue with @claude prompt
[GitHub Issue → claude.yml workflow]
        ↓ Claude drafts PR
[PR opened on mondrian, ready for human review]
```

## Origin

**Apr 28 #mcp-feedback (10:56 CT, Kyra):** *"<@mike> we should set all the new API endpoints up with this flow in mind. Would love a world where runneth can also send us feedback and we can have codex etc put up an initial PR for any endpoint issues."*

Vamsi DM'd Mike same morning to scope. Mike: *"I wonder if we can get runneth to do it lol… we also have a codex bot that reads admin-requests so maybe that can also take a stab at things too."* The existing `apps/codex-context-runner` infra (Azure Service Bus → codex CLI → context output) is the architectural precedent — but that bot generates *context* for Linear issues, not PRs.

The MVP shipped same day reuses *existing* infrastructure (the `claude.yml` GitHub Action), so no new server route or service-bus contract needed. The poller is the only new piece.

## Current State

- **MVP scaffolded** at `/Users/vamsi/Coding/vamsios/automation/feedback-to-pr/`:
  - `poll.ts` — TS poller, dry-run by default
  - `__tests__/parse.test.mjs` — parser sanity test, passing
  - `package.json`, `tsconfig.json`, `.env.example`
  - `run.sh`, `com.vamsios.feedback-to-pr.plist` (launchd, every 15 min)
  - `README.md` documenting setup + production path
- **Parser tested** against real `MCP Feedback` bot posts; handles single-line, multi-line, and multi-paragraph fields cleanly. Backticks stripped; severity extracted.
- **State file** at `state/processed.json` (gitignored) dedupes by message timestamp + content hash.
- **Has not been run live yet.** Two preconditions remain (see below).

## Preconditions Before Going Live

1. **`claude.yml` workflow needs `pull-requests: write` permission.** Currently shows `pull-requests: read`. Without write access, `claude-code-action` can't open the draft PR. **Action:** open a small PR against mondrian to update the permissions block, or confirm via the existing GitHub Action that PR creation is already wired (the `@claude` workflow may already have an inherited permission elsewhere — verify before bumping).
2. **End-to-end smoke test on a low-stakes feedback report.** Pick one historical bot post in #mcp-feedback, set `LOOKBACK_HOURS` to scope the window, run `./run.sh` (dry-run) to eyeball the issue body, *then* flip `LIVE=true` for one real issue. Verify Claude opens a PR before letting the launchd plist take over.

## Strategic Decisions Locked

- **Reuse existing GitHub Action, don't build new infra.** The `claude.yml` workflow already runs on `@claude` mentions. Any net-new code would be redundant to that surface.
- **Dry-run by default; LIVE flag explicit.** Auto-mode safety: GitHub Issues are work tickets — never auto-create without explicit env-var flip.
- **Match by message text pattern, not bot user ID.** The MCP Feedback bot's user_id surfaces as `U00` in some search results — fragile. Match on `:bug: *MCP Feedback*` header + `*Tool:*` field presence. Robust against bot-side changes.
- **State file is gitignored, kept local per-machine.** No shared dedup state needed for MVP; if/when this moves to mondrian server, dedup state moves to a real DB.

## Vamsi's Active Workstreams Around This

1. **Get the loop live** (this project) — preconditions above.
2. **Coordinate with Mike** on whether to keep the poller as MVP, or migrate to a webhook-based listener inside the mondrian server (preferred prod path — see below).
3. **Wire metrics** — Mixpanel events for `feedback_to_pr.attempted` / `feedback_to_pr.pr_drafted` / `feedback_to_pr.failed`. Closes the loop on whether the bot is actually generating useful PRs.

## Cross-team

- **Mike** — pointed at the codex-context-runner pattern; will be the reviewer when the loop migrates to a real server route. Currently leading TikTok endpoints; not blocked on this.
- **Kyra** — origin asker. Will want to see PR throughput once the loop is live.
- **Reza** — separately interested in autonomous loops (his Apr 27 Runneth identity doc framed Runneth as a coworker that *acts*, not just answers). The feedback-to-PR loop is a concrete instance of that coworker pattern.

## Production Path (post-MVP)

Move the polling logic into `mondrian/apps/server/src/routes/slack/` as a **Slack Events API webhook** (no polling). Specifically:

1. Slack workspace config: subscribe to `message.channels` events for `#mcp-feedback` (or filter by user_id of the MCP Feedback bot).
2. Webhook handler: parse the structured body, validate, create Linear ticket via existing Linear API integration (so human triage stays in the loop), then POST GitHub issue with `@claude` mention.
3. Reply in the Slack thread on the original `MCP Feedback` post linking to the GH issue + PR once they're created (closing the loop visibly to the team).
4. Datadog metrics + alerts on attempt/success/failure rates.
5. Dead-letter queue for unparseable messages.

When you're ready to migrate, the parsing logic in `poll.ts` ports cleanly — it's the only non-trivial piece.

## Watch List

- **`@claude` workflow PR-creation testing** — verify on a low-stakes test issue first. Has not been confirmed end-to-end.
- **Feedback volume** — autonomous Meta Creative analyst is currently the main source. As more orgs adopt the connector, signal volume may scale faster than the bot can handle. Watch `claude.yml` rate-limit behavior.
- **PR quality** — Sonnet 4.6 drafting against unfamiliar codebase paths could produce noisy PRs. Plan for a triage label (`needs-human-triage`) for cases where the bot can't safely propose a fix.

## Open Questions

- Should `feedback_not_enabled` enum addition (Cameron's Anthropic question) get the same loop treatment, or is that more of a config-level fix that doesn't fit the "draft a PR" pattern?
- Should we ALSO file a Linear ticket for every GH issue? Productionized version says yes (closes loop with PM/CS team); MVP doesn't — keeps it tight.
- What's the rule for when the bot decides "this needs clarification" vs "I'll draft a PR"? Currently the prompt says: *"if the report needs clarification, post the questions in the issue and stop."* Iterate on this prompt as patterns emerge.

## Last Updated
2026-04-28 — initial project doc on the day of MVP scaffolding.
