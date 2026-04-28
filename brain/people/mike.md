# Mike Choi

**Role:** Senior Engineer (Platform), Motion
**Relationship:** Vamsi's primary engineering partner — owned MCP server, now back on platform full-time
**Email:** mike@motionapp.com — `U0A8JQ0BT7E` in Slack
**Timezone:** America/New_York

## How He Works

- **Pragmatic builder.** Built the original MCP as a "security side project" before it became a company priority.
- **Stability gatekeeper.** Manages Datadog dashboards, pushes back when things look risky. Apr 27 thread on jeffbot72 signup: "yeah the name gave me pause." Apr 27 inspo rate limit: confirmed "we have rate limiting but we made it generous… maybe too generous."
- **Long horizon thinker.** Apr 27 DM to Vamsi: *"10 years from now I think lots of people are going to be unemployed… because natural language to sql queries is solved now."* Sees Motion's "data is our moat" as the durable wedge.
- **Confident but measured.** "Why wouldn't we be able to do this?" energy without bravado.
- **Owns the hard plumbing.** Org-scoped tokens, API credentials encryption, codex-context-runner infrastructure. The kind of work that makes the rest of the team's velocity possible.

## What He Owns (current)

- **TikTok endpoints** — leading the v3 sprint with Ali pairing as of Apr 28. Draft PR up. Kyra needs his estimate to commit to Meta on diversity/fatigue test timing.
- **Codex bot infra** — `apps/codex-context-runner` (codex CLI + Azure Service Bus consumer). Apr 28 floated extending the same pattern for `#mcp-feedback` → PR generation.
- **Anthropic submission backlog** — PRs #8106, 8110, 8119, 8148, 8149, 8150, 8151 shipped. Tickets PDEC-5961/5962/5963 still in Backlog status pending his transition.
- **API credentials + RBAC** — supporting Samuel's app config / RBAC migration.

## Working Dynamic with Vamsi

- **Released back to platform work** post-MCP-stays decision (Apr 22). MCP went into maintenance, Mike got his bandwidth back.
- **High-trust, low-ceremony partnership.** Vamsi DMs him directly with questions ("how you doing with the tiktok work?") and gets unfiltered answers.
- **Philosophical sparring partner.** Apr 27 long DM thread covered: Anthropic acquisition daydreams, Apple's AI strategy, where SaaS ends up, killing Stackadapt as a stretch goal. Mike reflects ideas back; Vamsi tests positioning out loud.
- **Vamsi defers to Mike on risk calls.** Rate limiting numbers, when to ship vs hold, when staging is unstable. Mike's "maybe too generous" carries weight.
- **Mike admires Vamsi's velocity.** Has watched him go from PM-tier code reviews to shipping his own PRs against the MCP server.

## Recent Working Threads (2026-04-21 → 2026-04-28)

- **Apr 21:** Mike's 3 Anthropic blocker PRs landed. Vamsi shipped 4 of his own that night without Mike on-call.
- **Apr 22:** Mike encrypts client-ID secrets, reviews Vamsi's PRs.
- **Apr 27 11:00 (#mcp-feedback):** Mike posted "🙌" tagging Vamsi+Maya — celebration of a shipped milestone (probably feedback bot going live).
- **Apr 27 15:11–15:28 (DM):** The big philosophical DM. Mike: *"natural language to sql queries is solved now"* + *"we can always provide [chat] as an option ¯\\_(ツ)_/¯"* + *"would also be very cool if we kept growing and like killed stackadapt."*
- **Apr 27 17:48 (#project-cli):** Confirmed inspo rate-limiting in place but "maybe too generous"; backed up Vamsi's first-organic-signup observation.
- **Apr 27 23:06 (thread):** Reza, Kyra, Mike all chiming on whether jeffbot72 looks like a clawbot. Mike: "yeah the name gave me pause."
- **Apr 28 09:35 (#mcp-feedback):** Replied to Vamsi's "can we set Claude up to push PRs?" with: *"I wonder if we can get runneth to do it lol"* and *"we also have a codex bot that reads the admin-requests so maybe that can also take a stab at things too."* — pointed at the existing pattern.
- **Apr 28 09:30 (Platform Standup):** Discussed TikTok API draft PR + transcription/summarizer meeting next.
- **Apr 28 10:35 (DM, pending):** Vamsi pinged for TikTok estimate; not replied at sync time.

## Key Quotes

- *"natural language to sql queries is solved now"* (Apr 27 — re: where the moat actually is)
- *"yeah the data part is special… everyone's using copilot 💀"* (Apr 27)
- *"would also be very cool if we kept growing and like killed stackadapt"* (Apr 27 — stretch ambition)
- *"we have rate limiting but we made it generous… maybe too generous"* (Apr 27 — risk pragmatism)
- *"we also have a codex bot that reads admin-requests so maybe that can also take a stab"* (Apr 28 — pointed Vamsi at the existing infra to extend)

## How to Work With Him

- **DM directly with specific asks** — "what's your estimate?" not "any thoughts on TikTok?" He responds well to scoped questions.
- **Don't sit on risk concerns he raises** — when he flags rate limits or naming weirdness, treat as a real signal even if low-volume.
- **Float architecture ideas to him before formalizing** — he'll rapidly tell you if there's an existing pattern or precedent (Apr 28 was a perfect example: "we have a codex bot for admin-requests").
- **Match his philosophical openness in DMs** — he wants to think about where Motion is going 5–10 years out, not just this sprint.
- **Don't burn his bandwidth on MCP-only work** — he's back on platform; MCP needs to stay maintenance unless something's broken.

## Last Updated
2026-04-28 — refreshed from sync logs covering 2026-04-21 → 2026-04-28.
