# Build MCP Synthetic Test Cases

## Goal
Distill the existing 53-prompt eval set into ~20 representative synthetic test cases with boolean pass/fail judges. This is the MCP eval framework agreed on with Giselle (Apr 7).

## Context
- Existing 53 evals live in `~/Coding/mondrian/docs/.agents/eval-results/` (homepage.md, brand.md, inspo.md, creative_detail.md, report.md)
- Giselle's test cases spreadsheet: https://docs.google.com/spreadsheets/d/1sLNpnQY5N4aqxOVCUdmsIFy9tzMJ5OnOfUGPCCOf0ts/edit?gid=660451758#gid=660451758
- MCP has 12 tools defined in `~/Coding/mondrian/apps/mcp-server/src/serverInstructions.ts`
- Linear ticket: PDEC-5361

## Framework (from Giselle meeting)

### Selection Criteria — Jobs-to-be-done coverage
Pick ~20 cases that maximize coverage across these dimensions:
- **Tool coverage**: every MCP tool should be exercised by at least one case
- **Category coverage**: Homepage, Brand/Inspo, Report, Creative Detail
- **Skill coverage**: creative-strategist, performance-analysis, industry-trends, concept-engine, build-brief, write-hooks, find-iterations, qa-feedback, analyze-ad (morning-briefing and weekly-performance untested — add cases)
- **Complexity spread**: simple single-tool queries, multi-tool orchestration, edge cases
- **Known partials**: H9, H11, H12, C2, R9 scored PARTIAL — include at least 2

### For each test case, define:
1. **Prompt** — the user question
2. **Expected tools** — which tools should be called, in what order
3. **Expected params** — key params that must be present (e.g., insightType=SPEND first)
4. **Assertions (boolean pass/fail)**:
   - `tools_called`: Did the right tools fire? (code judge)
   - `spend_first`: Was SPEND called before SCALING/HOOK? (code judge — serverInstructions rule)
   - `params_correct`: Were required params present? (code judge)
   - `skill_activated`: Did the expected skill fire? (code judge)
   - `data_returned`: Did tools return non-empty, workspace-specific data? (code judge)
   - `response_relevant`: Does the response address the prompt? (LLM judge — boolean)
5. **Category** — which eval category
6. **Complexity** — simple / multi-tool / edge-case

### What NOT to judge
- Don't use 1-5 quality scales (too subjective, adds noise)
- Don't judge behavioral psychology depth or framework sophistication (that's the "last mile" — track separately)
- Don't expect 100% pass rate — track trend over time

### New cases to add (not in existing 53)
- **groupBy test**: "Break down my top ads by copy/headline" — tests new groupBy param (values: creative, adId, name, copy, headline, landingPage)
- **Filtering test**: "Show me performance for [specific campaign]" — tests campaign/adSet filtering (Mike building API-side)
- **morning-briefing test**: "What changed overnight?" — untested skill
- **weekly-performance test**: "Give me a week-over-week comparison" — untested skill
- **Multi-metric rule test**: "What's my best performing ad?" — should trigger SPEND + SCALING + HOOK minimum

### Output format
Write to `~/Coding/mondrian/docs/.agents/synthetic-test-cases.md` as a structured table + detailed case definitions.

## References
- Eval summary: `~/Coding/mondrian/docs/.agents/eval-results/summary.md` (48 FULL, 5 PARTIAL, 0 FAIL, avg quality 3.96)
- Server instructions: `~/Coding/mondrian/apps/mcp-server/src/serverInstructions.ts`
- Tool definitions: `~/Coding/mondrian/apps/mcp-server/src/tools/creativeInsights.ts`
- PDEC-5361 has full Giselle meeting notes as a comment
