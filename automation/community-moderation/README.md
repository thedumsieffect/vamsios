# Community Moderation — Motion Creative Strategy Bootcamp

Automated moderation for the Motion Creative Strategy Bootcamp Slack workspace.

## What It Does

Every 60 minutes:
1. Fetches recent messages from all public Slack channels the bot can access
2. Sends them to Claude (Sonnet) for analysis
3. Posts a moderation report to the private `#moderators` channel

### Flagging Categories
- **Harassment / hate speech** — slurs, personal attacks, discriminatory language
- **Spam / self-promotion** — unsolicited commercial links, ads, off-topic promotion
- **Off-topic / disruptive** — messages that derail discussions or violate norms

Normal bootcamp activity (intros, networking, LinkedIn sharing, portfolio links) is not flagged.

## Architecture

```
launchd (every 60 min)
  → sweep.py
    → Slack API: list channels + fetch messages
    → Claude API: analyze messages for issues
    → Slack API: post report to #moderators
```

No dependencies beyond Python 3 stdlib + two API calls.

## Files

| File | Location | Purpose |
|------|----------|---------|
| `sweep.py` | `~/Coding/Community Management/` | Main script — fetch, analyze, report |
| `manage.py` | `~/Coding/Community Management/` | Local web dashboard (localhost:8484) |
| `moderate.sh` | `~/Coding/Community Management/` | Manual sweep script (used with Claude Code /loop) |
| `post-report.sh` | `~/Coding/Community Management/` | Manual report posting script |
| `.env` | `~/Coding/Community Management/` | Local secrets (gitignored) |
| Plist | `~/Library/LaunchAgents/com.motion.bootcamp-moderator.plist` | launchd job definition |

## Slack App Setup

- **App name**: Bootcamp Moderator
- **Workspace**: Motion Creative Strategy Bootcamp (`motion-community.slack.com`)
- **Bot scopes**: `channels:history`, `channels:read`, `chat:write`, `groups:read`, `groups:history`
- **#moderators channel ID**: `C0AKH0J9WGZ`

### Important: The bot does NOT join channels
The bot must be manually added to each channel by a workspace admin via:
Channel Settings → Integrations → Add apps → "Bootcamp Moderator"

As of 2026-03-12, the bot is added to 8 of 31 channels. Priority channels to add:
- `#creative-strategy` (3101 members)
- `#study-hall` (3101 members)
- `#networking` (done)
- `#homework-week-*` channels
- `#ad-wins`, `#hiring`, `#promotions`

## Secrets Required

| Env Var | Source |
|---------|--------|
| `SLACK_BOOTCAMP_TOKEN` | Slack app → OAuth & Permissions → Bot User OAuth Token |
| `ANTHROPIC_API_KEY` | console.anthropic.com → API Keys |

## Cost

- **Claude API**: ~$0.01–0.05 per sweep (Sonnet, analyzing ~100 messages) → ~$1–2/month
- **Slack API**: free, well within rate limits for a small community
