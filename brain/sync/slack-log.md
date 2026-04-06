# Slack Sync Log

Tracks action items, decisions, and asks extracted from Slack DMs and channels. Updated by daily sync pipeline.

## Last Sync
2026-04-06

## Open Action Items

| Date | From | Channel/DM | Item | Status |
|------|------|------------|------|--------|
| 2026-04-06 | Kyra | DM | Respond to Monday DM — acknowledge new meetings + jet lag question | open |
| 2026-04-06 | Kyra | DM | Week goal: Get MCP to general release + keep Kyra proactively aware of progress/blockers | open |
| 2026-04-06 | Maya | GDM: Kyra, Maya | Maya asked Kyra to set up Datadog MCP for Claude (not admin) — may involve Vamsi later | watch |
| 2026-04-06 | Jose | DM | Jose may need a Loom walkthrough for visual-learner clients — Vamsi sent screenshots + text instructions, check if that was sufficient | watch |
| 2026-04-06 | self | #project-cli | Alpha orgs flagged in. Monitor for client issues once they start connecting | open |
| 2026-04-06 | Mike | GDM: Armin, Itay, Mike | fb-user bug fix shipped (users without fb user were blocked from data). False positive confirmed. Watch for regressions | watch |
| 2026-04-06 | self | GDM: Vishaal, Jose, Fábio | LD gating: 3 access states designed (available / gated-upgrade / hidden). Sales-led flag flip for upgrades. Needs implementation | open |

## Resolved Action Items (Apr 6)

| Date | From | Item | Resolution |
|------|------|------|------------|
| 2026-04-03 | Mike | Run evals and have ready for Monday 9am | Done. Mike merged to main, Vamsi ran evals — oauth works, evals passing |
| 2026-04-06 | Mike | Mike updating branch to point towards main | Done. Merged, deployed, released (r783 + r784) |
| 2026-04-01 | Kyra | Run evals after Mike merges V3 endpoint PRs | Done. V3 merged, evals ran successfully, orgs flagged in |

## Decisions

| Date | Channel/DM | Decision | Participants |
|------|------------|----------|-------------|
| 2026-04-06 | Kyra DM | New meeting cadence: daily PM standup (Linear tickets + blockers), Friday PM meeting (milestones + goals), Friday admin root cause review (optional for Vamsi) | Kyra |
| 2026-04-06 | GDM: Vishaal, Jose, Fábio | MCP access gating via LD: use org ID segments (not billingPlan context). 3 states: available, gated (upgrade CTA), hidden (legacy). Sales-led flag flip when agency upgrades | Vamsi, Fábio, Vishaal, Jose |
| 2026-04-01 | GDM: Armin, Itay, Mike | Classes over functions for services, no static methods, pass deps via DI (no self-importing deps) | Armin, Itay, Mike |

## Asks & Requests

| Date | From | Channel/DM | Ask | Responded |
|------|------|------------|-----|-----------|
| 2026-04-06 | Jose | DM | Send setup process + Loom for MCP onboarding | yes — sent text instructions + plugin steps + screenshots |
| 2026-04-06 | Giselle | DM | Move tomorrow's evals meeting — standup always runs long | yes — moved to 1pm Eastern |
| 2026-04-06 | Kyra | DM | How's the jet lag? + acknowledge new meetings | pending |
| 2026-04-04 | Maya | #engineering-platform | Asked about ES sync delay impact on MCP data + customer workarounds | Rui replied: no customers affected, just slower big report loads |
| 2026-04-03 | Kyra | #engineering-platform | Review cursor PR #7816 (Intercom bug) + cut release before weekend | unknown |

## Key Channel Activity (Apr 6)

### #project-cli (MCP launch day)
- Vamsi posted alpha customer list by tier: Novice (Printfresh), Average (1v1me, Eucalyptus, Escargot), Advanced (HVAC Launch, Bilt, Huel), Later (ManyChat — OOO until next week)
- Kyra announced release is out, Vamsi deployed + ran evals — oauth flow works
- Mike shipped one more fix: fb-user check was blocking Huel users without fb user from getting data
- Jose flagged in — provided HVAC Launch org ID, Vamsi flagged all alpha orgs
- Vamsi sent Jose onboarding instructions via DM (MCP setup + Claude plugin install)
- Kyra confirmed merge landed: "letss gooo!!"
- Production releases r783 and r784 deployed

### #engineering-platform
- Mike: PR #7820 — mcp-server fix for compaction after v3 endpoint migration
- Maya + Rui discussing ES sync impact on customers — Rui says no customer impact, just slower big reports
- Tiago asking about storybook being down

### #admin-requests
- Multiple Monstache staging deploys (David debugging ES sync)
- Production releases r783 + r784 deployed
- Rabia hitting same workspace issue
- Vishaal picking up admin requests

### GDM: Armin, Itay, Mike
- Mike got PRs #7820 and #7843 approved by Itay (quick approvals)
- fb-user bug: was preventing users in org from getting data if they didn't have fb user attached — false positive, now fixed

### GDM: Vishaal, Jose, Fábio (MCP gating)
- Fábio outlined 3 LD approaches for agency access gating
- Team landed on org ID segments as simplest approach
- Vamsi defined 3 access states (available / gated / hidden)
- Jose confirmed sales-led flag flip is fine for upgrades

## Sync History

| Date | Messages Scanned | Items Extracted | Notes |
|------|-----------------|-----------------|-------|
| 2026-04-06 (full) | ~120 | 18 | Full day re-scan with on: filter. MCP shipped to prod, evals passing, alpha orgs flagged in, Jose onboarding clients, LD gating design landed, Giselle moved evals meeting. |
| 2026-04-06 | ~80 | 12 | Morning sync. New meeting cadence from Kyra, MCP GA goal, sales calls streaming MCP mentions, ES sync issues ongoing. |
| 2026-04-02 | ~40 | 3 | Initial sync. Mostly engineering DI/v3 endpoint threads + MCP launch coordination. |
