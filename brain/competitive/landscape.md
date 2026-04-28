# Competitive Intelligence

## Atria — primary competitor

- **Named the primary competitor** in the slack-sync skill: *"any mention of their API/CLI/product moves is high signal."*
- Direct creative-strategy MCP competitor space; specifics on their offering still light in the brain. Worth a deliberate scan.
- **Action:** ask Evan (BD) and Reza for current read on Atria's recent moves; flag any Atria mentions in #random or sales calls (#stream-mcp).

## Foreplay

- **Has an MCP** (confirmed Mar 24 by Kyra).
- Routes through **ActivePieces** (third-party MCP-as-a-service).
- Tool descriptions feel mechanical — "it can access the data" but no strategic guidance, no dimension navigation.
- Gets data by page, by ad — basic structure.
- **Motion's edge over Foreplay:** tool design that guides analysis through dimensions, visual formats, creative strategy. The whole "compound data workflows" framing of the pricing brainstorm (Full Creative Autopsy, Transcript-Powered Script Factory, etc.) is the differentiator.

## Manus

- Has MCP connectors — Motion MCP can be brought into Manus.
- **Acquired by Meta** in Q1 — Kyra previously nervous about cannibalization risk.
- **Apr 24:** Linear ticket PDEC-5344 *"Manus on the MCP instructions"* was **Cancelled.** Suggests Motion has decided not to formally integrate against Manus as a target environment.
- **Watch:** has Meta started rebuilding Motion-adjacent functionality post-Manus acquisition? Evan/Reza-territory question.

## Meta (partner + risk)

- Happy about Motion's analytics-flavored MCP features.
- Cautious about inspo / scraping (TOS risk for unauthorized ad-library data).
- **Apr 28:** Kyra had a direct call with Meta about new **creative diversity score** + **creative fatigue score** endpoints they're releasing. Vamsi joined as backup brainpower. Open questions: how are scores computed, can Motion use them as factors in our own scoring, where do they live (ad-set vs creative level).
- **Direct Kyra ↔ Meta line** appears established for the new metrics conversation; not clear if Evan is looped on it.
- Risk: Meta could ban ad accounts if scraping is flagged. Motion doesn't scrape directly.
- **Apr 27 (#project-cli):** Reza flagged inspo rate-limiting concern after first organic MCP signup — concern is partly about scraping risk, partly about Motion-side abuse.

## ActivePieces

- Third-party MCP routing service used by Foreplay (and likely others).
- Pre-built connectors for platforms that don't ship native MCPs.
- **Likely irrelevant once platforms ship native.** Anthropic marketplace going live (Apr 27) is the broader signal here — the "MCP-as-a-service" middle layer is being eaten from both sides.

## Adnova

- Mentioned as a competitor in the slack-sync skill alongside Atria, Foreplay, Manus, ActivePieces.
- Specifics light. Worth a deliberate scan to learn what they ship.

## HubSpot

- **Reference (not competitor):** Strong MCP onboarding flow with AI-guided setup. Worth studying as Maya + Vamsi scope the MCP onboarding workstream (PDEC-5848 + the joint Maya/Vamsi flow).

## Stackadapt — stretch ambition

- **Apr 27 (Mike DM):** *"would also be very cool if we kept growing and like killed stackadapt."* Not a current competitor, but a directional ambition signal — Mike sees Motion eventually playing in the broader ad ops + buying control surface, not just creative analytics.

## Anthropic (partner, post-Apr-27)

- **Approved Motion's MCP as the official Claude marketplace connector** 2026-04-22.
- **Connector live** 2026-04-27.
- Cameron at Anthropic is the primary contact. Vamsi addressed his 3 high-priority issues Apr 22; left one open question on `feature_not_enabled` enum addition.
- Marketplace listing creates a new BD surface — does this change anything in Motion's posture with Meta? (Open question for Evan/Reza.)

## Cohley

- **Apr 24 (#team-runneth):** Jose flagged Cohley as a customer that needs MCP for creator-matching workflow. Used as the evidence point pushing Yann/Lukasz to add limited MCP client support to Runneth "next week if all goes well."
- Not a competitor; useful as a customer reference for MCP-driven workflow needs.

## General Landscape

- Multiple ad-launch MCPs exist — not Motion's differentiator.
- **Creative intelligence/strategy MCPs are rare** — Motion's opportunity.
- The "MCP-as-coworker" framing (Reza Apr 27, applied to Runneth) extends to MCP positioning — Motion isn't selling data access, it's selling reasoning across creative dimensions.

## Last Updated
2026-04-28 — refreshed for Anthropic approval, Manus ticket cancellation, Apr 28 Meta diversity/fatigue conversation, Cohley signal.
