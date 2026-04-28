# Roam Meeting Log

Last synced: 2026-04-28 (covers Thu 2026-04-23 PM → Tue 2026-04-28 AM)

---

## Meeting timeline since last sync

| When (CT) | Meeting | Participants | Key outputs |
|-----------|---------|--------------|-------------|
| Thu 2026-04-23 15:36 | Jose + Vamsi (1:1, ad-hoc) | Jose, Vamsi | MCP skills upload to a new account; lack of folder support in Cloud Code; need a Roam-cloud → RunIt migration tool. Aside: Toronto offsite skydiving plans (May). |
| Thu 2026-04-23 15:43 | Jose + Vamsi (cloud-code clarification) | Jose, Vamsi | Confirmed: agent should pull skills from the location Vamsi pointed to; ignore the rest of the plugin. |
| **Fri 2026-04-24 09:46** | **Platform PM Weekly (Kyra + Maya + Vamsi)** | Kyra, Maya, Vamsi | **HEADLINE meeting of the window.** See full notes below. |
| Fri 2026-04-24 09:29 | Platform Standup | Kyra, Armin, Maya, Mike, Samuel, Ali, PK, Itay, David, Vamsi | Vamsi: deploying MCP skills work; live on marketplace pending Anthropic. Mike: API credentials PR + foundational Meta/TikTok ticket. Samuel: blocked on RBAC reviews. PK: critical issue fix recognized. |
| Fri 2026-04-24 11:00 | CS Feedback + Trends | Ale, Kyra, Maya, Quinn, Joel, Sophia, Ed, Josh, Rabia, Elliott, Vamsi | Inspo PLG roadmap (image upload, partner shared boards, algo update). Custom metrics + Pinterest data source asks. **TikTok integration prioritized over attribution improvements.** MCP framed as advanced-user play; Runneth 1.0 as broader story. |
| Mon 2026-04-27 09:30 | Platform Standup | Itay, Maya, Mike, Vamsi, Samuel, Ali | Vamsi: cleaning up MCP feedback PRs; live on marketplace; updating one-click add instructions. Mike: org-scope token PR needs review; new v3 endpoint from Kyra. Samuel: large app-config PRs merged, staging unstable briefly. |
| Mon 2026-04-27 09:46 | Maya + Vamsi (copy-instructions decision) | Maya, Vamsi | Decision: keep "copy instructions" button in MCP error states. Maya wanted to remove for design consistency; Vamsi pushed for usability since users are already confused. |
| **Tue 2026-04-28 09:21** | **Platform PM sync (Maya + Vamsi)** | Maya, Vamsi | MCP transitioning to maintenance + first organic signup means **onboarding flow needs a real PM treatment** — confirmation screens, email/Slack notifications on ad-account sync, in-product FAQ. Maya extending meta permissions to TikTok next. |
| Tue 2026-04-28 09:30 | Platform Standup | Maya, Mike, Ali, PK, Alex, Armin, David, Itay, Vamsi | Vamsi: no major updates. Mike: TikTok API draft PR + transcription/summarizer meeting next. Armin: live-deploy issue investigation; pushing schema/data-migration PR reviews team-wide. David: feed algo, sharding, monthly index pre-creation, db user cleanup. |
| **Tue 2026-04-28 10:27** | **Kyra + Vamsi (TikTok API + Meta integration planning)** | Kyra, Vamsi | **Direction-setting 1:1.** See full notes below. |

---

## Headline narrative

The marketplace connector went live Mon 2026-04-27 ~09:00 CT — by Tuesday morning the platform was fielding **a >2x jump in first-seen MCP users**, the first **organic Motion signup driven by the MCP** (jeffbot72@gmail.com), and surfacing **two material per-creative tag-join bugs** via the autonomous Meta Creative analyst.

Kyra's framing pivoted in two ways within the window:

1. **Apr 24 Platform PM Weekly:** "MCP is for advanced AI users; Runneth 1.0 + Slack integration is the broader story; let's bias to TikTok integration over attribution improvements." MCP stays in maintenance, but Vamsi takes ownership of the **skills workstream** + **endpoint cleanup for Meta + TikTok**.

2. **Apr 28 Kyra 1:1 + her #mcp-feedback message:** "Set every new API endpoint up with the feedback-to-PR loop in mind." This is the next phase — autonomous customer-signal-to-merged-fix. Vamsi pinged Mike same morning to scope.

Mike is back on platform work full-time, leading TikTok endpoints with Ali. Vamsi's primary forward priorities by end of window:
1. **Skills via the connector** (drop the plugin) — PDEC-6285 In Progress.
2. **Feedback-to-PR pipeline** — undefined, scoping with Mike.
3. **MCP onboarding flow polish** — joint with Maya.

---

## 2026-04-24 09:46 CT — Platform PM Weekly (Kyra + Maya + Vamsi)

Most load-bearing meeting of the window. First PM Weekly post-Anthropic-approval; first PM Weekly post-public-MCP-stays decision.

### Engineering update (Vamsi)
- Healthcare PR done.
- Skills invocation pattern changed — moving from "client uploads plugin" to "MCP server holds skills."
- System-design tickets queued.
- Event tracking tightening up.
- Anthropic feedback PRs through; awaiting marketplace go-live.

### Strategic decisions
- **Meta vs TikTok endpoint cleanup priority: TikTok first.**
- **MCP cannibalization vs Runneth:** acknowledged, accepted. MCP is upsell pool / nurture.
- **AI output style:** generic AI styling clashes with Motion's brand; need a deliberate style improvement pass — "the AI is generating ugly reports."
- **Slack as primary interface:** the team is converging on this as the surface for Runneth + MCP outputs. Microsoft Teams expansion floated.
- **Inspo growth:** bootcamp driving usage; Meta partnership has gray-area limitations Maya is navigating.
- **PK out of office** soon — front-end coverage plan needed.
- **Admin-request handling:** root-cause analyses retained as discipline; Ali + Fabio cited as best practice for release testing.
- **Automating ticket creation:** evals + dev reviews should auto-create tickets; encourage triage tickets; tooling to streamline.
- **Endpoint sprints:** TikTok + Meta this week; Meta metrics announcement coming; campaign/ad-set endpoints important for Reza's "one-pager methodology" for Runneth.
- **API data storage vs live calls:** trade-off discussed but no resolution; TikTok creative-preview caching is a known issue.
- **Notion review process:** Maya/Kyra will revisit comments on the in-flight doc.
- **All Hands demos:** Maya progressing on permissions + invite flow improvements.
- **Anthropic marketplace status:** still waiting on Anthropic to flip the switch (note: this happened the following Monday).

### Personal/cultural
- Offsite + retreat planning. Vamsi missing the big retreat (wedding prep). Tattoos, farmer's market, factor meal plans, Miguel-at-the-gym anecdotes.

---

## 2026-04-28 10:27 CT — Kyra + Vamsi (TikTok API + Meta integration planning)

Direction-setting 1:1. Sets the next-week sprint shape.

### Decisions
- **TikTok endpoints lead.** Mike + Ali pairing. Kyra wants an estimate from Mike to commit to Meta on diversity/fatigue test timing. *Vamsi DM'd Mike same day; pending response.*
- **Diversity score → ad-set level integration.** Fatigue score → creative level. Storage complexity acknowledged but additive endpoints likely OK.
- **New Meta endpoints sprint:** campaign + ad-set endpoints, including grouping and budget allocation — separate from Michelle's bulk API work.
- **MCP user limitations:** new "what can I do?" guidance / FAQ needed for users signing up directly via MCP.

### Open
- Diversity score "black box" concern — both agree fatigue is a more interesting score; diversity has to be explained for it to feel useful.
- Mike's availability for Meta campaign endpoints: TBD; possibly ping Armin if Mike is fully on TikTok.

### Tone
- Kyra was sick (parent illness flag from Apr 27 night DM — "finally coming back to life a bit") so kept it short.

---

## Per-meeting follow-ups Claude is tracking

- **Mon 2026-04-27 09:46 (copy instructions):** decision recorded; no further action needed.
- **Tue 2026-04-28 09:21 (Maya/Vamsi PM sync):** **MCP onboarding flow improvements** is now an active workstream with Maya — confirmation, notifications, FAQ. Needs a Linear ticket.
- **Fri 2026-04-24 11:00 (CS Feedback):** No direct Vamsi action items; signal logged into customer-signal stream.

---

## Sync History

| Date | Coverage | Notes |
|------|----------|-------|
| 2026-04-28 | 2026-04-23 PM → 2026-04-28 AM | 10 meetings; 2 Kyra 1:1s; 2 Platform PM syncs; 3 standups; 2 Jose ad-hocs; 1 CS feedback; 1 Maya copy decision. |
| 2026-04-23 | 2026-04-21 → 2026-04-23 morning | Proof-window → MCP-stays pivot; ConnectAI rename; API atomic-REST decision. |
