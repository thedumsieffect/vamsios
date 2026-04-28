# MCP Product

**Status:** **LIVE** in Anthropic marketplace as of 2026-04-27. Renamed to ConnectAI in sidebar.
**Team:** Vamsi (lead), Mike (server, now back on platform/TikTok), Maya (onboarding, permissions, fin), Kyra (strategy)

## What It Is

Motion's official Claude marketplace connector. Lets marketers connect ad performance data + creative intelligence to Claude conversationally — analytics, taxonomy, transcripts, demographics, inspo, all queryable in one loop.

## Origin Story

- Started as Mike's security side project (Q1 2026).
- Became company priority in the Porto off-site sprint week (2026-03-23–26): "can we make this work?" → "5 brands on Tuesday."
- Initial rollout 2026-03-29 to 5 hand-picked brands.
- Anthropic marketplace submission entered 2026-04 with iterative feedback loops with Cameron at Anthropic.
- **2026-04-21 (Tuesday):** Kyra floated discontinuing MCP and going all-in on Runneth. Vamsi pushed back. Agreed on a 1-week "proof window."
- **2026-04-22 14:56 CDT:** **Anthropic approved Motion's MCP as the official Claude marketplace connector.** Closed the proof window 3 days early. Kyra publicly reframed in #customer-success: *"Keeping MCP for now, revisit at Runneth 1.0 GA, MCP as Runneth upsell pool."*
- **2026-04-27 ~09:00 CT:** Connector LIVE in marketplace.

## Current State (as of 2026-04-28)

- **Connector live in Anthropic marketplace** — discoverable + one-click install for Claude users.
- **~80 first-seen MCP users in 24h post-launch.** Big jump in usage; Datadog confirmed.
- **First organic Motion signup driven by MCP** Mon 2026-04-27 night (jeffbot72@gmail.com — possible scraper, watching).
- **Skills moved server-side** (2026-04-24). No more customer-managed plugin install/update.
- **Anthropic submission backlog cleared.** All 8 tickets shipped or in review. Polish PRs in staging.
- **Autonomous Meta Creative analyst** (external user) is filing detailed `MCP Feedback` bot reports in #mcp-feedback — already surfaced 2 material bugs in `get_creative_insights`.

## Strategic Decisions Locked

- **MCP stays.** Officially the Anthropic marketplace connector. Coexists with Runneth until Runneth 1.0 GA.
- **MCP = Runneth upsell pool.** Customers who pick up MCP are the prequalified pool for Runneth — not a competing track.
- **API design: atomic REST endpoints + skills/agents handle business logic** (Armin's position; Apr 22 Kyra 1:1 + Apr 23 PM sync).
- **MCP monitoring stays minimal.** No elaborate Datadog. Low-maintenance is the priority.
- **Root-cause meetings retired** → async weekly roundup.
- **MCP permissions stay at workspace level** (Apr 20–21). Alexander Sloan signed off; no per-connection scoping.
- **MCP access scoped to agencies on in-market pricing.** Custom uncapped agencies excluded; Jose compiles list.
- **Rename to ConnectAI in sidebar** (Apr 22). Focus on Claude integration; deprioritize non-Claude connectors.
- **Hold on ad launching** — Motion's moat is creative intelligence, not media-buying actions.

## Vamsi's Active Workstreams

1. **Skills via the connector — drop the plugin.** PDEC-6285 (In Progress). Server-side move shipped Apr 24; ticket needs polish + ship. Customers should never have to install/update a plugin.
2. **Feedback-to-PR autonomous loop** (NEW Apr 28). Kyra's ask: every new API endpoint should be wired so Codex/Claude can auto-tackle incoming `MCP Feedback` bot reports and push initial PRs. Scoping with Mike. The autonomous Meta Creative analyst is already generating high-fidelity bug reports — close the loop and the platform absorbs scale.
3. **MCP onboarding flow polish.** Joint with Maya. Confirmation screens, ad-account-sync notifications (email/Slack), in-product FAQ. First organic signup made this concrete. Linear ticket TBD.

## Cross-team

- **Mike is back on platform full-time.** Leading TikTok endpoints with Ali; new v3 endpoints from Kyra. Estimate pending — Kyra needs it to commit to Meta on diversity/fatigue test timing.
- **Runneth team may add limited MCP client support next week** (Yann/Lukasz, per Reza Apr 24 thread). Cohley is the named customer.
- **PK out** soon — front-end coverage plan needed.

## Key Metrics

- Mixpanel: MCP usage events. New event tracking added pre-launch; Vamsi to chat with Faye on attribution for connector-driven signups.
- Datadog: tool-call latency, payload sizes, sessions by user. Stability sustained 95–97%+ through Anthropic submission.
- Qualitative: Bilt, WellWithAll, Clearoute saves are the customer-success proof points that backed the MCP-stays decision.

## Watch List

- **jeffbot72@gmail.com** — first organic MCP signup; possibly a scraper.
- **Inspo library rate limiting** — Reza flagged Apr 27; Mike says "maybe too generous." Needs concrete numbers.
- **Two `get_creative_insights` bugs** filed Apr 27–28 by autonomous analyst — per-creative tag join + filters param; both need Linear tickets.
- **PDEC-5345** Anthropic approval — work landed Apr 22, ticket still open. Hygiene.
- **PDEC-5848** MCP setup flow simplification — Kyra's ticket since Apr 15, still in Backlog.

## Open Questions

- Codex bot vs Claude vs Runneth as the auto-PR generator — pattern undecided.
- "Prove the lift" attribution — connector-driven signup tracking design.
- Cross-workspace querying (still a request from agencies; not in active scope).

## Last Updated
2026-04-28 — sourced from sync logs (Slack, Roam, Linear, Calendar) covering Apr 23 → Apr 28.
