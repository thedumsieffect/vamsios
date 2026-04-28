# Alicia

**Role:** Creative Strategist (external/consulting)
**Relationship:** Key user persona for MCP — Vamsi's north star for chat-first UX. Foundational to skill design.

## Why She Matters

- **The chat-first proxy.** Uses Claude in conversational chat (not Code, not Cowork). Vamsi's personal bias is toward code, so Alicia is the litmus test for whether MCP works for people who *aren't* like him.
- **Authored the original creative strategy skills** that Motion's MCP plugin layered on. Skills like analyze-ad, performance-analysis, write-hooks, qa-feedback all trace back to her domain knowledge.
- **Doesn't generate HTML dashboards** — works in conversation. Outputs are insights and recommendations, not visualizations.

## Why She's Foundational, Not Operational

- **No Apr 21–28 sync signal.** No Slack DMs in window, no Roam meetings. Vamsi is interacting with her work product (skills now living server-side) but not with her directly.
- **Her skills shipped April 24** — Vamsi's "moved skills server-side" milestone is her work being permanently absorbed into the MCP. The skills compendium under `.claude/skills/` (analyze-ad, performance-analysis, write-hooks, etc.) is essentially canonized Alicia methodology.
- **The "skills via connector" workstream (PDEC-6285)** carries her contribution forward: customers no longer install/update plugins; they get her methodology automatically.

## Her Skills (now server-side)

These all moved into the MCP server (prompts, methodology references, server instructions) on Apr 24:

- analyze-ad
- audience-research
- build-brief
- competitor-watch
- concept-engine
- create-concepts
- creative-strategist (root reference)
- find-iterations
- industry-trends
- morning-briefing
- performance-analysis
- qa-feedback
- ugc-scripts
- weekly-performance
- write-hooks

## How She'd Use the MCP (Vamsi's mental model)

When Vamsi designs an MCP feature, the test is: *"would Alicia type this in chat and get a useful answer?"*

- **Not:** "Pull metrics, group by demographic_breakdown.gender, filter by spendThreshold > 1000…"
- **Yes:** "Why did our Hexclad ads stop working last week?" → MCP runs the right tool chain, Alicia gets a strategic answer.

The connector going live (Apr 27) means real Alicia-shaped users are now the audience. The first organic MCP signup (jeffbot72) is the first concrete data point on whether this works for non-Vamsi users.

## What's Open

- **Has Alicia herself moved over to the live MCP yet?** Open question. Vamsi should ask. Apr 24 #project-cli post about skills moving server-side didn't tag her.
- **Feedback loop from Alicia to MCP changes.** Currently no formal channel; she's interacted with through Kyra. As the autonomous Meta Creative analyst (in #mcp-feedback) gets richer, Alicia may not be the only signal source — but she's still the canonical "is this usable" tester.

## How to Work With (Around) Her

- **Frame MCP UX questions through her** — "Would Alicia find this discoverable?" "Would she know which tool to call?"
- **Treat her skills as canonical** — they shipped to server; they're the methodology. Don't second-guess unless data says otherwise.
- **When the user (Vamsi) drifts toward technical or code-shaped UX**, push back with "is this Alicia-friendly?"

## Last Updated
2026-04-28 — light refresh; no direct Apr signal in syncs. Foundational role + skill-canonization context updated.
