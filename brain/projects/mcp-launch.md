# MCP Product Launch

**Status:** Pre-launch — rolling out to first 5 brands on 2026-03-29 (Tuesday)
**Team:** Vamsi (lead), Mike (server), Maya (onboarding/docs), Kyra (strategy)

## What It Is

Motion MCP server that lets marketers connect their ad performance data to Claude (and other AI tools). Users can query their creative analytics, competitor intel, and reports conversationally.

## Origin Story

Started as Mike's security side project. Became a company priority in one sprint week (Porto off-site, 2026-03-23–26). Went from "can we make this work?" to "5 brands on Tuesday."

## Current State (as of 2026-03-26)

- Cloud connector live — easy for customers to add
- Payload optimization in progress (glossary normalization reduced payload ~35%)
- Datadog monitoring dashboard active
- Onboarding flow being built (Maya, based on Gamma's consent page design)
- Skills plugin being consolidated from 12 to fewer, more data-driven skills
- User-facing documentation in progress (unpublished, link-only access)

## Strategic Decisions

- **5 brands first, no agencies.** Mix of skill levels. CSMs choose who gets in.
- **Optimize for chat, not just code.** Alicia (chat user) is the north star, not power users in Claude Code.
- **Analytics first, inspo second.** Get analytics tool design working for thought starters, then carry learnings to inspo.
- **Hold on ad launching.** Other MCPs already do this. Motion's differentiation is creative intelligence.
- **Tool design is the moat.** Not just data access — how the agent navigates dimensions, visual formats, and creative strategy.

## Key Metrics to Watch

- Mixpanel: MCP usage events (Vamsi setting up dashboard)
- Datadog: tool call latency, payload sizes, sessions by user
- Qualitative: Alicia's chat experience as litmus test

## Open Questions

- How to handle inspo data given Meta scraping concerns (Evan has a call with Meta)
- When to expose Runeth as a sub-agent endpoint vs keeping MCP tools standalone
- Cross-workspace querying design (huge for agencies)
- TikTok summarizer — Itai working on proactive summarizer, can TikTok be tucked in?

## Last Updated
2026-03-30
