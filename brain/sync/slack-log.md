# Slack Sync Log

Last synced: 2026-04-28 (covers 2026-04-23 mid-morning CT → 2026-04-28 11:10 CT)

---

## Group DM Registry

| Channel ID | Participants | Notes |
|-----------|--------------|-------|
| (none discovered new this sync) | — | Search of `to:me` and `from:me` with `channel_types: mpim` returned no group DMs in window. Existing GDMs (Armin/Itay/Mike, Vishaal/Jose/Fábio) had no traffic visible to the search. |

---

## Headline of the window

**Anthropic marketplace connector went LIVE Mon 2026-04-27 ~09:00 CT.** Within 24 hours: ~80 first-seen MCP users (62 if just counting Monday); first organic user signup *into Motion via the MCP* (jeffbot72@gmail.com Mon 20:25 CT — Reza flagged as possible scraper-bot, Mike confirmed rate limiting is set "but maybe too generous").

**Kyra's framing for next phase landed in two asks:**
1. Apr 24 14:55 (DM): *"Go through the Meta MCP Launch project, figure out what's left for initial launch and what can move to MCP ideas/backlog. Want to mark this complete!"* — Vamsi delivered same day; project ready to close once the in-progress Anthropic-polish PRs merge.
2. Apr 28 10:56 (#mcp-feedback): *"<@mike> we should set all the new API endpoints up with this flow in mind. Would love a world where Runneth can also send us feedback and we can have codex etc put up an initial PR for any endpoint issues."* — this is the **autonomous feedback-to-PR loop** — Vamsi pinged Mike same morning to scope; Mike floated Codex bot reading admin-requests as a starting point.

**The MCP product motion has shifted from "ship Anthropic feedback" to "ingest live customer signal at scale."** The autonomous Meta Creative analyst (user `6983b8e83d31decc9cbc3471` in workspace `695e8440c5212d42684358c3`) is filing detailed bug reports through the `MCP Feedback` bot — three this window, two material.

---

## 1. Open Action Items

| # | Ask | From | Where | Due | Status |
|---|-----|------|-------|-----|--------|
| 1 | **Build feedback-to-PR pipeline** — Claude/Codex auto-tackles incoming `MCP Feedback` reports and pushes initial PRs | Kyra (echoed Vamsi's question to Mike) | #mcp-feedback (2026-04-28 09:35 + 10:56) | This week | open — Vamsi DM'd Mike on TikTok progress same day; haven't talked codex/Claude scoping yet |
| 2 | **Triage two new material `get_creative_insights` bugs** filed by autonomous analyst | Bot (`MCP Feedback`) | #mcp-feedback (2026-04-28 09:15 + 10:15) | This week | open — Bug A: per-creative `glossaryByCategoryName` always null + `categoryValues: []` even though `get_glossary_values` shows 1,509 tagged creatives (workspace-level glossarySchema fix landed; per-creative join didn't). Bug B: `filters` param on `campaignId`/`campaignName` returns empty insights, no Linear ticket yet |
| 3 | ~~Close PDEC-5345~~ | — | — | — | ✅ Already Done (closed 2026-04-23 15:43 CT — caught after a deeper pull). Sync log earlier in this run misclassified it. |
| 4 | **Drive PDEC-6285 → done** — Ship Motion skills via MCP connector (drop Claude Code plugin) | Kyra (skills workstream from Apr 22 1:1) | Linear | This week | open — In Progress, last updated Apr 25. The Apr 24 #project-cli post "Moved our skills from their separate MD files into the MCP server under prompts, methodology reference files, and server instructions" is the work; ticket needs the polish-and-close pass. |
| 5 | **Drive PDEC-5848 forward** — MCP setup flow simplification | Kyra (created 2026-04-15) | Linear | This week | **stale — still in Backlog despite repeated mentions.** Customers signing up via marketplace connector is a fresh proof point that this matters. |
| 6 | **Get TikTok endpoint estimate from Mike** so Kyra can commit to Meta on diversity/fatigue test timing | Kyra (1:1 2026-04-28 10:27) | Tue 1:1 | Today | open — Vamsi DM'd Mike 10:35 ("how you doing with the tiktok work?"); Mike hadn't responded by sync time |
| 7 | **Set up rate limiting review** for inspo library scraping | Reza (#project-cli 2026-04-27 16:34) | #project-cli | This week | open — Vamsi confirmed limits exist but Mike said "maybe too generous"; concrete numbers/threshold not set |
| 8 | **Reply to Maya's UI feedback iteration loop** (Apr 27 13:38 — "feel like nothing was good") | Maya | DM | Closed | watch — Vamsi replied warmly ("error messages are hard, great problem to stew on"); not actionable but worth pulse-check tomorrow |
| 9 | **Dial in Mixpanel attribution for MCP signups** | Self → Faye (Apr 27 20:26) | #project-cli thread | This week | open — Vamsi committed to "chat with faye to figure out how to correctly track and attribute" after the jeffbot72 signup; no follow-up yet |

### Resolved during the window
- ✅ Apr 24 ask on Meta MCP Launch project audit — done same afternoon, Kyra reacted with tada
- ✅ Connector lives in marketplace (Apr 27) — closes the "Anthropic approval" deliverable in spirit
- ✅ Skills moved server-side (Apr 24 — see #project-cli post): "Moved our skills from their separate MD files into the MCP server under prompts, methodology reference files, and server instructions. Ran the evals, and responses are looking good."
- ✅ Maya's All Hands callout slide added Apr 27 11:36 — verified delivered (screenshot confirmed)
- ✅ Parker Gilpin Deel expense follow-up (Apr 28 11:06) — resolved in DM, "already approved, just do for next time"

---

## 2. Waiting On Others

| # | Who | What | Since | Notes |
|---|-----|------|-------|-------|
| 1 | Mike | TikTok endpoint completion estimate | 2026-04-28 10:35 (DM) | Kyra needs this to commit to Meta on diversity/fatigue test timing. Mike was at the 9:30 standup talking about TikTok API work + new v3 endpoint, draft PR up. |
| 2 | Mike | Linear transitions for PDEC-5961, 5962, 5963 (Backlog → Done) | Carryover from Apr 21 | Still not transitioned. Linear pull confirms these tickets were not touched in the last 5 days under his name. |
| 3 | Faye | Mixpanel attribution chat re: MCP-driven signups | 2026-04-27 evening | Vamsi committed to it; Faye not pinged yet that's visible |
| 4 | Mike + Codex bot wiring | Initial scoping for feedback-to-PR pipeline | 2026-04-28 09:35 | Mike floated "we have a codex bot that reads admin-requests" — needs a real scope conversation |
| 5 | Yann/Lukasz/Ioana (Runneth team) | MCP client support inside Runneth | 2026-04-24 (Reza thread in #team-runneth) | Yann said "I guess we could have that next week if all goes well." Cohley is the named customer. Doesn't block Vamsi but worth tracking — affects positioning. |

---

## 3. Commitments Vamsi Made

| Date | To | Where | Commitment | Verified |
|------|-----|-------|-----------|----------|
| 2026-04-24 | Kyra | DM | Audit Meta MCP Launch project, identify what's left for initial launch | ✅ Same day, 30 min later |
| 2026-04-24 | Reza | #project-cli | "Set up a mixpanel dash" for top MCP orgs | ✅ Done same day (Reza acked) |
| 2026-04-27 | Mike | #project-cli thread | Confirm rate limiting is in place for inspo pull-through-MCP | ✅ Verified — but Mike flagged as "maybe too generous" → not closed |
| 2026-04-27 | Faye | Self-stated | "gonna chat with faye to figure out how to correctly track and attribute" | ❌ Not yet started |
| 2026-04-27 | Maya | DM | Help iterate on permissions error UI copy | ✅ Iterated, landed on revised copy |
| 2026-04-28 | Mike | DM | "how you doing with the tiktok work? sounds like we're making crazy progress?" — really a Kyra-on-behalf nudge | ✅ Sent; awaiting reply |

---

## 4. Decisions in the window

- **2026-04-27** — Marketplace connector LIVE. ~80 first-seen MCP users in 24h.
- **2026-04-28 (Kyra 1:1)** — TikTok endpoints are the next platform sprint focus. Diversity score → ad-set level. Fatigue score → creative level. Sprint also covers campaign/ad-set endpoints + grouping/budget allocation. Mike leads, Ali pairs.
- **2026-04-28 (Kyra public ask)** — All new API endpoints should be wired with feedback-to-PR loop in mind from day one. *Don't ship endpoints without an autonomous feedback path.*
- **2026-04-28 (Maya/Vamsi PM sync)** — MCP onboarding needs first-class flow improvements: confirmation screens, email/Slack notifications on ad account sync, in-product FAQ. This is now a real first-time experience (jeffbot72 proves it).
- **2026-04-27 (Maya/Vamsi)** — Keep "copy instructions" button in MCP error states despite design preference for icon — usability over consistency for confused users.
- **2026-04-24 (Reza thread, #team-runneth)** — Runneth team will likely add limited MCP client support next week. Yann owns. Cohley is the named customer.

---

## 5. Cross-product / GTM signals

- **Apr 27 night — first organic MCP-driven Motion signup.** jeffbot72@gmail.com created an org and was sent straight to MCP auth. Reza skeptical ("does this sound like a clawbot email"); Mike: "yeah the name gave me pause." Worth watching: do scrapers find us via the Anthropic marketplace listing? FullStory link in #project-cli (msg ts 1777339523).
- **Apr 24 #project-cli (analyst bot output)** — Huel = effective on-Runneth-1.0 from ~Mar 12 (big step Apr 16); Monarch Money = effective from Apr 22. Useful as comparison cohort if doing MCP-vs-no-MCP behavior splits.
- **Apr 24 #team-runneth thread (Reza)** — Pushed Yann/Lukasz on why Runneth doesn't support MCP. Lukasz: protocol mismatch with build-apps/routine-scripts, would only make sense if Runneth itself becomes an MCP server. Yann committed to "next week if all goes well." Jose: Cohley is the customer ask.
- **Apr 27 #team-runneth (Reza)** — Identity/positioning rewrite for Runneth: *"A 24/7 creative strategy coworker for performance marketing teams."* Ioana updated. Echo of "creative strategy hub" framing from Apr 22 Kyra 1:1.

---

## 6. Customer/feedback signals (#mcp-feedback bot reports)

| TS | Tool | Severity | Status |
|----|------|----------|--------|
| 2026-04-28 09:15 | `get_creative_insights` | bug — `datePreset=CUSTOM` returns reportPercentCompletion: 0 indefinitely | **self-resolved** in retest 1h later. Note as flake. |
| 2026-04-28 09:15 | `get_creative_insights` | **MATERIAL** — `glossaryByCategoryName: null` + `categoryValues: []` per insight, but `get_glossary_values` shows 1,509 tagged creatives | **OPEN** — needs Linear ticket. Likely missing reverse-index join in insights pipeline. |
| 2026-04-28 10:15 | `get_creative_insights` | follow-up — workspace-level glossarySchema NOW populates, per-creative join still empty | reinforces above |
| 2026-04-27 21:17 | `get_creative_insights` | **MATERIAL** — `filters` param on `campaignId`/`campaignName` returns empty insights silently, even though same query unfiltered returns matching creatives. 1.6–1.9 MB unfiltered payload makes daily campaign dossiers heavy. | **OPEN** — needs Linear ticket. |

---

## 7. Praise / recognition

- Kyra DM Apr 22 17:42 — *"learning a lot"* re: Vamsi's Claude/codebase coaching; sent back the 14000-line "mondrian-codebase-bible.md" Claude generated for her.
- Kyra Apr 24 14:51 #project-cli — "Hell yeah! Awesome final bow to put on this!" on Vamsi's skills-into-MCP-server move.
- Armin DM Apr 24 09:42 — *"wanted to make sure I am not losing the most energetic guy in the room"* — checked in after sensing Vamsi was low-energy in standup. Vamsi explained: overslept, not bandwidth issues. Worth noting Armin pulse-checks.
- Maya/Vamsi DMs all week — high banter density, strong working bond.

---

## 8. Watch list

- **jeffbot72@gmail.com** — first organic MCP-driven signup; possibly a scraper. If their tool-call pattern looks bot-shaped, raise rate limits before week is out.
- **Inspo library rate limit** — Reza flagged the risk; concrete numbers TBD.
- **PDEC-5345 Anthropic approval ticket** — open Linear hygiene debt; closing it is a 1-min task.
- **Maya's frustrated Apr 27 13:38 — "bruh what a wash"** — resolved in tone but pulse-check tomorrow that the rev'd copy actually shipped.
- **Apple AI strategy convo (Maya/Vamsi PM sync 2026-04-28)** — not actionable but Vamsi/Maya converged on "Apple should make analog hardware" — a tell that they're both thinking about positioning vs AI-native incumbents.

---

## Tightened-coverage findings (2026-04-28 second pass)

After the initial sync, ran a follow-up pass to close gaps from skill checklist (`#random`, `#customer-success`, group DMs, Roam transcripts). Findings:

- **#random** — verified quiet. Two messages in the window: David Berglas Apr 24 ("does this mean anything to anyone else"), Wes Apr 27 (Notion verification code). No competitive intel, no MCP signal.
- **#customer-success** — RICH content missed in the first pass:
  - **Apr 27 11:17 (Quinn → CSMs):** SOC2 process change. *"With SOC2 compliance, we need to be more careful about adding ourselves to orgs. Let's make sure moving forward we're all getting explicit permission from customers before we add ourselves to their account!"* Maya backed it up: *"shouldn't we get into a habit of asking permission to access the account regardless of time?"* Big process shift for the CS team.
  - **Apr 27 13:12 (Quinn → CSMs):** *"Built a skill to take call, hubspot, and slack context to build runneth 1.0 prompts for us as we're trying to get customers started with 1.0."* Direct echo of the skills + autonomous loop pattern Vamsi is building. CS team is independently exploring agent-built workflows.
  - **Apr 28 thread (Quinn + Miguel):** Customer health discussion — D2C manager replacing CSM-led workflow; spend dropped 28% → 8%. Miguel: *"prolly one of those people that Runneth can borderline replace and they're protecting their role by gatekeeping?"* Customer signal worth filing for Runneth positioning.
- **Group DMs** — the `to:me channel_types:mpim after:2026-04-23` search returned zero. Either Vamsi wasn't tagged in any group DMs in the window, or the API doesn't surface MPIM-scoped queries cleanly. The known recurring GDMs (Armin/Itay/Mike, Vishaal/Jose/Fábio) showed no traffic in any from-search either. Reasonable to call this dimension empty for the window.
- **Roam full transcripts** — `get_meeting_transcript` returns empty for the chapters tested (Fri PM Weekly chapter 3, Tue Kyra 1:1 chapter 2). Roam may not store verbatim text for these recordings, only the AI summaries. The summaries were rich enough to drive this sync; flag as a methodology limitation but not a blocker.

### New action items surfaced

| # | Ask | From | Due | Notes |
|---|-----|------|-----|-------|
| 10 | Verify SOC2 org-access discipline applies to MCP setup flows where we add ourselves to customer orgs for support | Quinn (#customer-success Apr 27) | Watch | Affects how the MCP onboarding flow (PDEC-5848) handles support-team access |
| 11 | Compare Quinn's CS-skill (call+HubSpot+Slack → Runneth-1.0 prompt) pattern with the feedback-to-PR loop architecture | Self-noticed | Casual | They're the same pattern. Worth showing Quinn the feedback-to-PR scaffold to compound. |

## Sync History

| Date | Coverage Window | Notes |
|------|-----------------|-------|
| 2026-04-28 (pass 2) | Apr 23 → Apr 28 — `#random`, `#customer-success`, group DMs, transcript gaps closed | Found SOC2 process change, Quinn's CS-skill pattern echo, customer-health signal. Roam transcripts return empty → methodology limit. |
| 2026-04-28 (pass 1) | Apr 23 mid-morning → Apr 28 11:10 CT | 5-day gap. Connector went live during this window. ~80 new MCP users. |
| 2026-04-23 | Apr 21 evening → Apr 23 mid-morning | Anthropic approval landed; MCP-stays-as-upsell-pool reframed. |
