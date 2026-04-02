# launchd Jobs

macOS `launchd` is how we run automated tasks on Vamsi's machine. Each job has:
- A **plist** in `jobs/` (the job definition — copied to `~/Library/LaunchAgents/`)
- A **script** in `scripts/` or elsewhere that the plist points to

## Current Jobs

| Job | Label | Frequency | Script | Purpose |
|-----|-------|-----------|--------|---------|
| Bootcamp Moderator | `com.motion.bootcamp-moderator` | Every 60 min | `~/Coding/Community Management/sweep.py` | Scans Slack channels for moderation issues, posts reports to #moderators |
| Daily Brain Sync | `com.vamsi.daily-brain-sync` | Daily at 7pm | `~/Coding/vamsios/automation/daily-sync/run.sh` | Pulls Roam meetings + Slack action items/decisions into brain/sync/ via claude CLI |

## How It Works

1. A `.plist` file in `~/Library/LaunchAgents/` tells macOS to run a command on a schedule
2. macOS runs it automatically whenever the Mac is awake
3. Jobs survive reboots — they load on login
4. Logs go to a file specified in the plist

## Managing Jobs

### Dashboard
```bash
python3 ~/Coding/Community\ Management/manage.py
# Opens http://localhost:8484 — start/stop, change frequency, view logs
```

### CLI Commands
```bash
# List all our jobs
launchctl list | grep com.motion

# Load (start) a job
launchctl load ~/Library/LaunchAgents/com.motion.bootcamp-moderator.plist

# Unload (stop) a job
launchctl unload ~/Library/LaunchAgents/com.motion.bootcamp-moderator.plist

# Run a job immediately (outside of schedule)
launchctl kickstart gui/$(id -u)/com.motion.bootcamp-moderator
```

## Adding a New Job

1. Create the script that does the work
2. Create a plist — use `jobs/com.motion.bootcamp-moderator.plist` as a template
3. Copy plist to `~/Library/LaunchAgents/`
4. Load it: `launchctl load ~/Library/LaunchAgents/<label>.plist`
5. Add it to the dashboard in `manage.py`
6. Update this README

## Conventions

- **Label prefix**: `com.motion.*` for Motion Creative work, `com.vamsi.*` for personal
- **Logs**: each job logs to a file next to its script (e.g. `sweep.log`)
- **Env vars**: secrets go in the plist's `EnvironmentVariables` dict (plist is local-only, never committed with real values)
- **Plists in this repo**: contain placeholder values for secrets — real values are only in `~/Library/LaunchAgents/`
