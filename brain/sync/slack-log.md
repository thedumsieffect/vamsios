# Slack Sync Log

Tracks action items, decisions, and asks extracted from Slack DMs and channels. Updated by daily sync pipeline.

## Last Sync
2026-04-06

## Open Action Items

| Date | From | Channel/DM | Item | Status |
|------|------|------------|------|--------|
| 2026-04-06 | Kyra | DM | Respond to Monday DM — acknowledge new meetings + jet lag question | open |
| 2026-04-06 | Kyra | DM | Week goal: Get MCP to general release + keep Kyra proactively aware of progress/blockers | open |
| 2026-04-03 | Mike | GDM: Armin, Itay, Mike | Run evals and have ready for Monday 9am — Mike said "if you're free" over long weekend | open |
| 2026-04-06 | Mike | DM | Mike updating branch to point towards main — may need follow-up on merge readiness | open |
| 2026-04-06 | Maya | GDM: Kyra, Maya | Maya asked Kyra to set up Datadog MCP for Claude (not admin) — may involve Vamsi later | watch |
| 2026-04-01 | Kyra | GDM: Kyra, Maya, Mike | Run evals after Mike merges V3 endpoint PRs (insights, breakdown, reports, orgs context) | open |

## Decisions

| Date | Channel/DM | Decision | Participants |
|------|------------|----------|-------------|
| 2026-04-06 | Kyra DM | New meeting cadence: daily PM standup (Linear tickets + blockers), Friday PM meeting (milestones + goals), Friday admin root cause review (optional for Vamsi) | Kyra |
| 2026-04-01 | GDM: Armin, Itay, Mike | Classes over functions for services, no static methods, pass deps via DI (no self-importing deps) | Armin, Itay, Mike |

## Asks & Requests

| Date | From | Channel/DM | Ask | Responded |
|------|------|------------|-----|-----------|
| 2026-04-06 | Kyra | DM | How's the jet lag? + acknowledge new meetings | pending |
| 2026-04-03 | Kyra | #engineering-platform | Review cursor PR #7816 (Intercom bug) + cut release before weekend | unknown |
| 2026-04-04 | Maya | #engineering-platform | Asked about ES sync delay impact on MCP data + customer workarounds (Calm, Keiki) | pending |
| 2026-04-01 | Kyra | GDM: Kyra, Maya, Mike | Mike to notify Vamsi when V3 PRs merge so evals can run | pending |

## Key Channel Activity (Apr 2-6)

### #stream-mcp
- Gong stream is live — 10+ sales calls mentioning MCP in the last week (Zillow, Orca Brands, Vuori, Whatnot, Mejuri, Babel Group, Kings Loot, HIMS, High Rider, Product Madness, betterwild)
- Sales team actively positioning MCP as "releasing in a week or two" — urgency to ship
- Kyra asked Maya and Vamsi which Gong format they prefer (recap vs key points); Maya prefers key points

### #mcp-feedback
- Feedback loop integration to Slack is live (Mike set up Apr 1)
- First automated feedback: feature request for predictive ad performance before launch
- Maya excited about feedback loop in chat

### #engineering-platform
- David Murphy investigating Monstache ES sync — Apr 3 data at ~50% expected, urgent investigation
- Kyra flagged Intercom bug Friday, asked for PR review (#7816)
- Vishaal: updated ads caching broken due to full ad comment queue

### #admin-requests
- New high-pri admin request today: PDEC-5357 (comparative report by naming convention not working) — filed by Aashay
- Heavy Monstache staging deploys over weekend (David debugging ES sync)

## Sync History

| Date | Messages Scanned | Items Extracted | Notes |
|------|-----------------|-----------------|-------|
| 2026-04-06 | ~80 | 12 | Monday sync. New meeting cadence from Kyra, MCP GA goal, sales calls streaming MCP mentions, ES sync issues ongoing. |
| 2026-04-06 (eve) | 0 | 0 | Evening re-sync. No new channel or DM activity since morning. |
| 2026-04-02 | ~40 | 3 | Initial sync. Mostly engineering DI/v3 endpoint threads + MCP launch coordination. |
