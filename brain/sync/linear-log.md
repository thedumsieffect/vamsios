# Linear Log

Last synced: 2026-04-28 (covers tickets touched 2026-04-23 → 2026-04-28)

---

## Headline

41 tickets assigned to Vamsi were touched in this window. **22 marked Done** (most are bug auto-archives — see note), **6 In Progress**, **3 In Staging**, **4 Todo**, **3 Backlog**. The **Anthropic submission backlog is functionally cleared** — `search_brands` polish (PDEC-5966, 5967) and bloat fix (PDEC-5720) are Done, and the connector instructions ticket (PDEC-6390) is in Staging.

**Cleanup status:**
1. **PDEC-5345** (Anthropic approval) — ✅ Already Done. Closed 2026-04-23 15:43 CT (a deeper `get_issue` pull caught it; the broader `list_issues` window had excluded it on the Apr 23 boundary). Sync log earlier in this session misclassified it.
2. **PDEC-5848** (MCP setup flow simplification) — ✅ Promoted Backlog → Todo this session. Kyra's ticket from Apr 15; marketplace going live this week makes setup-flow material.

---

## Ticket states (touched since Apr 23)

### In Progress

| ID | Priority | Title | Notes |
|----|----------|-------|-------|
| PDEC-6285 | Medium | [Design] Ship Motion skills via the MCP connector (drop the Claude Code plugin) | **Vamsi's primary forward workstream.** Last updated Apr 25. The Apr 24 #project-cli "moved skills into MCP server" was the technical work; this ticket is the design + ship pass. |
| PDEC-6276 | High | Surface upstream 400 validation details at top level | Anthropic feedback follow-up |
| PDEC-6277 | Low | get_reports: use bare string for non-custom metrics | — |
| PDEC-6275 | Low | search_brands: add withBreakdown flag to lighten discovery payloads | — |
| PDEC-6273 | Medium | get_creative_transcript image-format contract mismatch | — |
| PDEC-6272 | High | get_creative_insights async contract inconsistency | — |

### In Staging (merged, awaiting deploy)

| ID | Priority | Title |
|----|----------|-------|
| PDEC-6390 | High | Update Claude Connect AI instructions for marketplace connector |
| PDEC-6274 | Medium | Strengthen JSON Schema validation (minLength, ObjectId pattern) |
| PDEC-6131 | Medium | Add Meta landing-page-view to purchase conversion rate metric |

### Todo (queued forward work)

| ID | Priority | Title | Notes |
|----|----------|-------|-------|
| PDEC-5314 | High | spendState / trendDirection always returns empty object | bug; high impact for analyst |
| PDEC-5716 | High | Define defaults in inspo tool descriptions | tool-description polish |
| PDEC-5717 | High | Encourage Claude to pull inspo summaries after get_creative_insights | tool chaining |
| PDEC-5723 | Medium | Why do we pass custom conversion at the beginning of every get_creative? | tool-description scrub |

### Backlog (Vamsi-owned, deferred)

| ID | Priority | Title | Notes |
|----|----------|-------|-------|
| ~~PDEC-5848~~ | High | MCP setup flow too complex (moved to Todo this session) | **Promoted Backlog → Todo 2026-04-28.** |
| PDEC-5131 | Medium | Start ChatGPT approved app process | back-burner; depends on bandwidth post-Anthropic |
| PDEC-5402 | No priority | Hide @motionapp.com users from Datadog dashboard | dashboard hygiene |

### Recently completed (notable)

| ID | Priority | Title | Closed |
|----|----------|-------|--------|
| PDEC-5325 | Urgent | Harden Pattern 3 (Adaptation Bridge) across 6 skills — critical failure mode | Apr 24 |
| PDEC-5326 | Urgent | Create shared tool-call-playbook reference file for all skills | Apr 24 |
| PDEC-5328 | High | Deepen build-brief skill — casting specs, visual direction, diagnostic guidance | Apr 24 |
| PDEC-5329 | High | Add hook family architecture to write-hooks skill | Apr 24 |
| PDEC-5418 | Medium | Set up an MCP monitoring channel | Apr 24 |
| PDEC-5362 | Medium | Define Datadog MCP monitors for GR readiness | Apr 24 |
| PDEC-5719 | Medium | For endpoints that may require polling add explicit directions to retry in the tool description | Apr 24 |
| PDEC-5720 | High | Includes ad + ads is bloating get_creative calls on analytics | Apr 24 |
| PDEC-5966 | Medium | Trim default `search_brands` response for discovery queries | Apr 23 |
| PDEC-5967 | Low | Align `search_brands` error parameter names with MCP inputs | Apr 23 |
| PDEC-5344 | — | Manus on the MCP instructions | Canceled |

> Note: ~12 of the "Done" Apr 28 timestamps are 2025-vintage bugs being auto-archived by Linear's 6-month rule (PDEC-1849, 1852, 1904, 1911, 1932, 1933, 1950, 1952, 1953, 1969, 1984, 2005). Not Vamsi work; just noise in the activity stream.

---

## Tickets to file this week (no Linear coverage yet)

| Source | Description | Suggested priority |
|--------|-------------|-------------------|
| #mcp-feedback bot 2026-04-28 09:15 | `get_creative_insights` per-creative `glossaryByCategoryName` always null + `categoryValues: []` despite tagged creatives existing in `get_glossary_values`. Workspace-level glossarySchema is fine. Needs reverse-index join fix in insights pipeline. | High — material data gap blocking taxonomy diagnostics |
| #mcp-feedback bot 2026-04-27 21:17 | `get_creative_insights` `filters` param on `campaignId`/`campaignName` returns empty silently, even when same data is present unfiltered. 1.6–1.9 MB unfiltered payloads make daily campaign dossiers heavy. | High |
| Kyra 2026-04-28 #mcp-feedback | **Feedback-to-PR autonomous loop** — Codex/Claude auto-tackles incoming `MCP Feedback` reports and pushes initial PRs | High — strategic, scope undefined; this is the next-phase platform discipline |
| Maya/Vamsi 2026-04-28 PM sync | MCP onboarding flow polish — confirmation screens, ad-account-sync notifications (email/Slack), in-product FAQ for direct-MCP signups | Medium — first organic signup just landed; this is no longer hypothetical |
| #project-cli 2026-04-27 (Reza+Mike) | Inspo library rate-limit review — Mike said current limits "maybe too generous"; need explicit numbers + alerting | Medium |

---

## Cleanup queue (non-Vamsi tickets needing attention)

| ID | Owner | Action |
|----|-------|--------|
| ~~PDEC-5345~~ | Vamsi | ✅ Already Done (Apr 23) |
| PDEC-5961, 5962, 5963 | Mike | Transition Backlog → Done; PRs shipped Apr 21 (still pending Mike) |
| ~~PDEC-5848~~ | Vamsi | ✅ Promoted Backlog → Todo (Apr 28 sync) |

---

## Sync History

| Date | Coverage | Tickets touched |
|------|----------|----------------|
| 2026-04-28 | Apr 23 → Apr 28 | 41 (29 Vamsi-relevant + 12 auto-archives) |
| 2026-04-23 | Apr 21 → Apr 23 | Anthropic submission tickets all shipped or in review |
