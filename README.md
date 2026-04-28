# vamsios

A personal operating system powered by Claude Code. Configuration, automation, intelligence, and skills — all managed through natural language.

vamsios turns Claude Code into a PM copilot that knows who you are, who you work with, what's happening across your projects, and how to keep you on top of everything.

## What's in here

```
brain/                  # Personal & professional intelligence
.claude/skills/         # Reusable Claude Code skills
automation/             # Bootcamp community moderation (scheduled via launchd)
launchd/                # macOS job definitions and docs
resume/                 # Resume source files
```

Syncs themselves are run manually from a Claude Code session in this repo (see [Automation](#automation)).

## Skills

Skills are reusable prompts that teach Claude Code how to perform complex, multi-step workflows. They live in `.claude/skills/` and are automatically available in any Claude Code session opened in this repo.

### slack-sync

Deep Slack scanning methodology for daily syncs. Defines a 6-phase process:

1. **Direct Channel Reads** — reads DMs and channels directly (search alone is unreliable)
2. **Search Sweep** — people-centric and keyword searches to catch signals in channels not read directly
3. **Thread Deep-Dives** — follows every thread to get the real decision, not just the parent message
4. **Meeting Transcripts** — pulls full Roam transcripts, not just summaries
5. **Linear Scan** — syncs ticket state, flags stale issues, identifies closable tickets
6. **Calendar Scan** — pulls tomorrow's meetings with prep notes

The skill includes a signal taxonomy (8 categories), verification patterns (never mark an item open without checking), and a quality checklist that must pass before saving.

**Requires MCP servers:** Slack, Roam, Linear, Google Calendar

## Brain

The `brain/` directory is the persistent memory layer — who you are, who you work with, and what's happening.

```
brain/
├── profile/        # Identity, work style, personal context
├── people/         # One file per key person — role, dynamics, communication patterns
├── projects/       # Active project context and direction
├── decisions/      # Monthly decision logs
├── competitive/    # Competitor and market intelligence
├── feedback/       # Coaching received, collaboration preferences
├── sync/           # Daily sync outputs (Slack, Linear, Roam, Calendar)
├── handoffs/       # Agent handoff documents for other Claude Code sessions
├── decks/          # Shareable content and deliverables
└── prompts/        # Reusable prompts for specific tasks
```

Files are updated when you run a sync from Claude Code. Per-person files build a complete picture of each relationship over time. The sync logs track action items, commitments, decisions, and open threads across Slack, Linear, and meetings.

## Automation

Syncs are run manually from Claude Code in this repo. Open a session in `~/Coding/vamsios` and ask for a sync — the `slack-sync` skill handles the methodology.

### Community Moderation

Hourly Slack moderation for the Motion Creative Strategy Bootcamp. Scans public channels, runs messages through Claude for analysis, posts reports to a private `#moderators` channel.

```
automation/community-moderation/
└── README.md           # Full docs (script lives in separate repo)
```

## Setup

### Prerequisites

- macOS
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed
- Node.js (via nvm)
- Git with LFS enabled

### MCP Servers

The skills and automations connect to external services through Claude Code's MCP servers. Configure these in Claude Code settings:

| Server | Used by | Purpose |
|--------|---------|---------|
| Slack | slack-sync | Read DMs, channels, threads; send messages |
| Roam | sync | Meeting transcripts and calendar |
| Linear | sync | Ticket state and project tracking |
| Google Calendar | sync | Calendar events and scheduling |
| Datadog | ad-hoc | Monitoring and observability |
| Notion | ad-hoc | Documentation and knowledge bases |

### Install

```bash
git clone <repo-url> ~/Coding/vamsios
cd ~/Coding/vamsios
```

### Usage

Open Claude Code in this directory and the skills are automatically available:

```bash
cd ~/Coding/vamsios
claude
```

Then run a sync:
```
> run our sync - slack, linear, meetings, calendar, everything
```

Or ask Claude anything that benefits from persistent context:
```
> what's the status on MCP launch? any open action items?
> put together a handoff doc for these 3 tickets
> draft an update for Kyra on where things stand
```

## Projects

| Project | Location | Repo |
|---------|----------|------|
| Motion Creative (Mondrian) | `~/Coding/mondrian/` | Motion-Creative/mondrian |
| Community Moderation | `~/Coding/Community Management/` | Motion-Creative/bootcamp-moderator |
| vamsios (this repo) | `~/Coding/vamsios/` | — |

## Philosophy

- **Skills over one-off prompts** — if you do it twice, make it a skill
- **Verify before logging** — never mark something open without checking if it's been done
- **Read directly, don't trust search** — Slack search is unreliable for DMs; always read channels directly
- **Compound over time** — every sync makes the brain richer; per-person files build relationship context automatically
- **Handoffs over context-switching** — when work spans multiple sessions, write a handoff doc instead of trying to carry context in your head
