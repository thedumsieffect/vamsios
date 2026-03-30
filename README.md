# vamsios

Personal operating system — configuration, automation, intelligence, and documentation managed with Claude.

## Structure

```
brain/                # Personal & professional intelligence
  profile/            # Identity, work style, personal life
  people/             # One file per key person — role, dynamics, patterns
  projects/           # Active project context, decisions, direction
  decisions/          # Monthly decision logs
  competitive/        # Competitor and market intelligence
  feedback/           # Coaching received, collaboration preferences
  sync/               # Roam transcript processing log

launchd/              # macOS launchd job definitions and docs
  jobs/               # Plist files (templates — no real secrets)
  scripts/            # Shared utility scripts
  README.md           # How to manage launchd jobs

automation/           # Documentation for automated workflows
  community-moderation/  # Slack moderation for Motion Bootcamp
```

## Brain

The `brain/` directory is the source of truth for who I am, how I work, and what's happening across projects. It's synced daily from Roam meeting transcripts at 6pm CT and updated manually as needed.

See [brain/README.md](brain/README.md) for details.

## Projects

| Project | Location on Disk | Repo |
|---------|-----------------|------|
| Community Moderation | `~/Coding/Community Management/` | [Motion-Creative/bootcamp-moderator](https://github.com/Motion-Creative/bootcamp-moderator) |
| PM-OS | `~/Coding/PM-OS/` | Local (context library for PM copilot) |
| Mondrian (Motion) | `~/Coding/mondrian/` | [Motion-Creative/mondrian](https://github.com/Motion-Creative/mondrian) |
