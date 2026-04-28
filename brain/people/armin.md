# Armin Karimi

**Role:** Engineering Lead — Platform, Motion
**Relationship:** Architecture authority for platform-wide decisions. Vamsi needs his sign-off for production-impacting changes.
**Email:** armin@motionapp.com — `U06AA9S80BY` in Slack
**Timezone:** America/New_York

## How He Works

- **Architecture-first thinker.** Frames decisions in terms of long-term system shape, not short-term ticket throughput.
- **Won the API composition debate (Apr 23).** Position: atomic REST endpoints + skills/agents handle business logic. Kyra's agent-first consolidated-API approach didn't win. Trade-off accepted: higher initial cost + slower perf, faster iteration + cleaner debugging.
- **Pulse-checks the team's energy.** Apr 24 09:42 DM to Vamsi after sensing low energy in standup: *"hey… how you doing?… wanted to make sure I am not losing the most energetic guy in the room."* That's not noise — that's leadership pattern.
- **Pushes shared-review discipline.** Apr 28 Platform Standup: emphasized everyone reviewing schema/data-migration PRs related to MongoDB → Elastic migration; doesn't want it siloed.
- **Delegates first-pass review.** Asks Itay to do first reviews on Vamsi's PRs ("FYI I asked Itay to do the first pass on this") — keeps himself unblocked while ensuring code is seen.

## What He Owns (current)

- **Platform architecture.** API design, schema decisions, data migration (MongoDB → Elastic). David Murphy works closely on the migration; Itay reviews + merges Elastic-related PRs.
- **Production deployment coordination.** Samuel pings him to organize prod deploys; Armin coordinates dependency unblocks across teams.
- **Live deployment incidents.** Apr 24: leading investigation on a recent live-deploy issue.
- **Builder data storage decision.** Pending architectural call (mentioned Apr 24).
- **Monitoring + alerting infrastructure** — dashboard setup, alert creation, demo coordination.

## Working Dynamic with Vamsi

- **Vamsi runs architecture decisions past Armin before commit.** Apr 22 API composition debate ran through Armin and was unresolved until the Thu PM sync.
- **Vamsi's PRs go through Itay first, then Armin.** Established pattern from March; still in effect.
- **Armin's energy-pulse-check is rare and meaningful.** Apr 24 was the first one in months — worth treating as a "he sees you" signal, not a routine wellness check.
- **They're not in deep daily collaboration.** Armin is at platform architect altitude; Vamsi is in MCP feature space. The interaction is gates-and-checkpoints, not pair programming.
- **Vamsi defers to Armin on what's ready for prod.** Skills move to MCP server (Apr 24) was deployable because Armin had already approved the architecture pattern.

## His Product/Engineering Instincts

- **Atomic over consolidated.** APIs should do one thing each; orchestration belongs in skills/agents — not in the API layer.
- **Don't over-engineer monitoring.** Apr 23 PM sync locked in "MCP monitoring stays minimal." Armin signed off on this even though he runs platform monitoring discipline.
- **Migration discipline matters.** Treat Elastic PRs as team-shared work, not Itay-and-David's. Cross-review prevents knowledge silos.
- **Bias toward shipping.** "We're not doing easy things" is Kyra's quote, but Armin practices it — Apr 24 standup ended with "well wishes for a good Friday and weekend" with several PRs still pending. He doesn't drag things to perfection.

## Recent Working Threads (2026-04-21 → 2026-04-28)

- **Apr 21 (Platform Standup):** Co-discussed Mike's 3 PRs for Anthropic marketplace blockers; org-scoped tokens plan.
- **Apr 22 (Platform Standup):** Reviewed Vamsi's PRs; client-ID secret encryption decisions.
- **Apr 23 (Platform Standup):** Standup wrap with RCA template discussion; Kyra wants RCAs for recurring data-discrepancy bugs.
- **Apr 23 (Wed PM sync, async input):** API design debate locked in atomic REST; skills/agents own logic.
- **Apr 24 09:29 (Standup):** Coordinated production deployment; cited Pierre-Karl's critical issue fix; gave Samuel coverage assignments.
- **Apr 24 09:42 (DM to Vamsi):** Energy pulse-check. *"wanted to make sure I am not losing the most energetic guy in the room."*
- **Apr 28 09:30 (Standup):** Investigating live-deploy issue; emphasized cross-team review on schema/data-migration PRs; coordinated infrastructure work with Samuel (Key Vault 2, app config, db ES key vault move).

## Key Quotes

- *"hey… how you doing?… wanted to make sure I am not losing the most energetic guy in the room"* (Apr 24 — pulse check)
- *"there is no such thing as competitors"* (Feb 27 — re: workspace-following design simplification)
- (Apr 23, Wed PM sync, paraphrased): *atomic REST + skills handle business logic.* — the position that won the architecture debate.

## How to Work With Him

- **Bring him decisions, not options.** "Here's the architecture I'm thinking, here's the trade-off, can you sign off?" — not "what should we do?"
- **Run PRs through Itay first** unless Armin has explicitly asked for direct review.
- **Don't ask him about MCP feature priorities** — he'll defer to Kyra. Ask him about platform/architecture.
- **Pulse-check him back.** When he extends care, return the temperature. He notices.
- **Cite the atomic-REST decision** when designing new endpoint shapes — mirrors his thinking.

## Last Updated
2026-04-28 — refreshed from sync logs covering 2026-04-21 → 2026-04-28.
