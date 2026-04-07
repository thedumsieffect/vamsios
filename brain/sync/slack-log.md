# Slack Sync Log

Tracks action items, decisions, and asks extracted from Slack DMs and channels. Updated by daily sync pipeline.

## Last Sync
2026-04-07

## Group DM Registry

| Channel ID | Participants | Last Active | Nickname |
|-----------|-------------|-------------|----------|
| — | Armin, Itay, Mike | 2026-04-06 | Eng GDM |
| — | Vishaal, Jose, Fábio | 2026-04-06 | MCP Gating GDM |
| — | Kyra, Maya | 2026-04-06 | PM GDM |

_Note: Channel IDs to be populated on next direct read._

## Open Action Items

| Date | From | Channel/DM | Item | Status |
|------|------|------------|------|--------|
| 2026-04-07 | Mike | #project-cli | Group by ad + ad level data merging today — major GR unlock, was a non-negotiable for general release | done |
| 2026-04-07 | self | DM Kyra | Sent full MCP status update — alpha smooth, evals today, gating starting, Anthropic review Wed | done |
| 2026-04-06 | Kyra | DM | Week goal: Get MCP to general release + keep Kyra proactively aware of progress/blockers | open |
| 2026-04-06 | Kyra | DM | Week goal: Get MCP to general release + keep Kyra proactively aware of progress/blockers | open |
| 2026-04-06 | Maya | GDM: Kyra, Maya | Maya asked Kyra to set up Datadog MCP for Claude (not admin) — may involve Vamsi later | watch |
| 2026-04-06 | Jose | DM | Jose may need a Loom walkthrough for visual-learner clients — Vamsi sent screenshots + text instructions, check if that was sufficient | watch |
| 2026-04-06 | self | #project-cli | Alpha orgs flagged in. Monitor for client issues once they start connecting | open |
| 2026-04-06 | Mike | GDM: Armin, Itay, Mike | fb-user bug fix shipped (users without fb user were blocked from data). False positive confirmed. Watch for regressions | watch |
| 2026-04-07 | Jose | #team-runneth | MCP custom conversions hallucination — agent says it doesn't have access even when told. Lukasz says ongoing issue tracked, cc'd Ioana. Could affect Motion MCP too | watch |
| 2026-04-07 | Quinn | #admin-requests | PDEC-5391: After sending AI chat, need to refresh to send another. Loom attached. Low-pri admin request — could affect copilot/MCP UX | watch |
| 2026-04-06 | self | GDM: Vishaal, Jose, Fábio | LD gating: 3 access states designed (available / gated-upgrade / hidden). Sales-led flag flip for upgrades. Now in implementation (PDEC-5377/5378) | open |

## Waiting On Others

| Date | Who | What | Last Checked | Status |
|------|-----|------|-------------|--------|
| 2026-04-06 | Mike | Datadog MCP monitors sync (PDEC-5362) | 2026-04-07 | waiting — ask in standup |
| 2026-04-06 | Ioana/Lukasz | Custom conversions hallucination fix in Runneth (could affect MCP) | 2026-04-07 | watching |

## Commitments I Made

| Date | To | Channel/DM | Commitment | Delivered | Verified |
|------|-----|-----------|------------|-----------|----------|
| 2026-04-06 | Kyra | DM | Compile Anthropic approval answers in Notion doc | pending | meeting scheduled Apr 8 noon |
| 2026-04-06 | Reza | DM (via Kyra) | Share evals | yes | Verified — sent shippedbyvamsi.lol/v6eval, Reza replied "nice very cool" |
| 2026-04-06 | Jose | DM | Send MCP setup instructions + plugin zip | yes | Verified — sent text instructions + screenshots + zip |
| 2026-04-06 | Fábio | GDM | Define LD gating access states | yes | Verified — 3 states designed, now in implementation (PDEC-5377/5378) |

## Resolved Action Items (Apr 6–7)

| Date | From | Item | Resolution |
|------|------|------|------------|
| 2026-04-07 | Kyra | Respond to Monday DM — acknowledge new meetings + jet lag question | Done. Vamsi replied Apr 6 12:28pm with full week plan + acknowledged new cadence |
| 2026-04-07 | Kyra | Share evals with Reza | Done. Sent Apr 6 8:23pm via shippedbyvamsi.lol/v6eval. Reza acknowledged |
| 2026-04-07 | Jose | Flag additional alpha orgs (3 more: pierre@beainibrands, 62dee5..., 68ee61...) | Done. Vamsi flagged all three evening Apr 6 |
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
| 2026-04-06 | Kyra | DM | Share evals with Reza | yes — sent Apr 6 8:23pm via shippedbyvamsi.lol/v6eval, Reza replied "nice very cool" |
| 2026-04-04 | Maya | #engineering-platform | Asked about ES sync delay impact on MCP data + customer workarounds | Rui replied: no customers affected, just slower big report loads |
| 2026-04-03 | Kyra | #engineering-platform | Review cursor PR #7816 (Intercom bug) + cut release before weekend | unknown |

## Key Channel Activity (Apr 7)

### #admin-requests
- PDEC-5391 filed by Quinn: AI chat requires page refresh after sending — Loom attached. Low-pri.
- Fábio working on CR board migration (LOF workspace) — not MCP-related
- Rui fixed report loading issue (YouTube ad processing edge case). Maya asked for root cause + prevention notes
- Monstache deployed to staging

### #team-runneth (Jose active late night)
- Jose flagged: Runneth hallucinating it doesn't have custom conversions access even when explicitly told. Lukasz says ongoing issue tracked, Ioana cc'd
- Jose reported JSON schema rendering bug in Runneth — Roberto pushed fix (agent-builder PR #1591), Lukasz will review tomorrow
- Jose got Runneth working on Alysha's workspace after some prompting

### #ask-analyst
- Alysha tested Analyst bot on campaign analysis — found ad with no tags that can't be analyzed, planning admin request
- Jose suggested hooking Analyst with Motion MCP/CLI to Reza — adoption signal
- Reza asked Jose to investigate where Runneth got campaign data wrong

### #engineering
- motion-ops bot flagged failing e2e tests overnight

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
| 2026-04-07 | ~80 | 6 | Deeper sweep: Kyra jet lag DM resolved, evals-for-Reza still pending, 3 more alpha orgs flagged, Quinn chat refresh bug, Jose found MCP custom conversions hallucination in Runneth, e2e tests failing overnight. |
| 2026-04-06 (full) | ~120 | 18 | Full day re-scan with on: filter. MCP shipped to prod, evals passing, alpha orgs flagged in, Jose onboarding clients, LD gating design landed, Giselle moved evals meeting. |
| 2026-04-06 | ~80 | 12 | Morning sync. New meeting cadence from Kyra, MCP GA goal, sales calls streaming MCP mentions, ES sync issues ongoing. |
| 2026-04-02 | ~40 | 3 | Initial sync. Mostly engineering DI/v3 endpoint threads + MCP launch coordination. |
