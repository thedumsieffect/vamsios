# Agent Handoff: 3 Urgent MCP Tickets (Code Freeze Today)

Paste this into a Claude Code session opened in `~/Coding/mondrian/` (the main worktree).

---

## Context

There's a **code freeze after All Hands today** (bootcamp is tomorrow). These 3 urgent tickets need to land before the freeze. All are in the MCP server codebase. The MCP server lives in the mondrian monorepo.

## Tickets

### 1. PDEC-5726 — Search brands 401s (Urgent)
**Branch:** `vamsi/pdec-5726-search-brands-401s`
**Problem:** The upstream `/api/v2/brand/search` returns 401 Unauthorized ~25 times in Datadog. This is the #1 source of upstream failures. The auth token likely isn't being forwarded correctly or expires mid-session.
**Where to look:** MCP server code that calls the brand search endpoint. Check how the OAuth/auth token is passed to upstream API calls. The MCP server was recently made sessionless (horizontal scaling) — this may have broken token forwarding.
**Linear:** https://linear.app/motion-creative/issue/PDEC-5726/search-brands-401s

### 2. PDEC-5725 — Inspo by domain getting 404s and 401s (Urgent)
**Branch:** `vamsi/pdec-5725-inspo-by-domain-getting-404s-and-401s`
**Problem:** `/api/v2/brand/byDomain` returns 404 (15x) and 401 (2x). The 404s may be legitimate (domain not found), but a 27% failure rate suggests either: (a) the MCP tool description isn't guiding Claude to pass valid domains, or (b) the API doesn't gracefully handle unknown domains (should return empty, not 404).
**Two fixes needed:**
1. **Tool description fix** — Update the MCP tool description for the brand-by-domain tool to better guide Claude on valid input (e.g., "pass the root domain like 'nike.com', not a full URL").
2. **API graceful handling** — If the upstream API returns 404 for unknown domains, the MCP server should catch this and return a friendly "no brand found" response instead of bubbling up the error.
**Also check:** The 401s here are likely the same root cause as PDEC-5726.
**Linear:** https://linear.app/motion-creative/issue/PDEC-5725/inspo-by-domain-getting-404s-and-401s

### 3. PDEC-5715 — Remove launch date 7-day default when omitted (Urgent)
**Branch:** `vamsi/pdec-5715-remove-launch-date-7-day-default-when-omitted`
**Problem:** When calling `get_inspo_creatives`, `launchDate` is marked as optional but the API endpoint defaults to last 7 days when it's not included. This prevents users from getting all active ads or the most recent 60, etc.
**Fix:** Find where the launch date default is applied in the inspo creatives endpoint/tool and remove or change the 7-day default. When `launchDate` is omitted, it should return all results (no date filter). Update the MCP tool description to reflect the new behavior.
**Linear:** https://linear.app/motion-creative/issue/PDEC-5715/remove-launch-date-7-day-default-when-omitted

## How to Start

```bash
cd ~/Coding/mondrian
git fetch origin
```

Then for each ticket, explore the MCP server code to find the relevant files. The MCP server likely lives under something like `apps/mcp-server/` or `packages/mcp/`. Start by searching for the tool names and endpoint paths mentioned above.

For PDEC-5726 and PDEC-5725, they likely share a root cause (auth token forwarding). Fix that first, then handle the 404 graceful handling and tool description for 5725 separately.

Ship each fix as its own PR. Tag Mike (mike@motionapp.com) for review — he's the eng partner on MCP.
