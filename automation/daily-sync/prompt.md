# Daily Brain Sync Prompt

You are running an automated daily sync for Vamsi's brain system at ~/Coding/vamsios.

## Step 1: Roam Meeting Sync

1. Read `~/Coding/vamsios/brain/sync/roam-log.md` to get the "Last Sync" date.
2. Call `mcp__roam__list_meetings` with `after` set to that date and `expand=["summary","chapters","participants"]`.
3. For each new meeting, add a row to the Processed Meetings table:
   - Date, Meeting ID, Key participants (abbreviate to names, "+N" if >4), Main topics (comma-separated), Depth "Summary + chapters"
4. Update "Last Sync" to today's date.

## Step 2: Slack Sync

Follow the methodology in `.claude/skills/slack-sync/SKILL.md` exactly. Read that file first, then execute all phases in order.

1. Read `~/Coding/vamsios/brain/sync/slack-log.md` to get the "Last Sync" date and Group DM Registry.
2. Execute Phase 1 (Direct Channel Reads), Phase 2 (Search Sweep), and Phase 3 (Thread Deep-Dives) as defined in the skill.
3. Classify all signals using the eight-category taxonomy in the skill.
4. Run the verification patterns for every action item before marking open/closed.
5. Run the quality checklist before saving.
6. Update all tables in slack-log.md (including Waiting On Others, Commitments I Made, and Group DM Registry).
7. Add a row to "Sync History" with today's date, messages scanned count, items extracted count.
8. Update "Last Sync" to today's date.

## Step 3: Linear Sync

1. Read `~/Coding/vamsios/brain/sync/linear-log.md` to get the current ticket state.
2. Pull Vamsi's active issues:
   - `mcp__claude_ai_Linear__list_issues` with `assignee: "me"`, `state: "started"`, `limit: 50`
   - Also check `state: "unstarted"` for backlog items that may have been prioritized
3. Compare with previous sync state:
   - New issues not in the log → add to appropriate status section
   - Issues that changed status → add to "Status Changes" table with from/to
   - Issues that moved to Done/Cancelled → remove from active, note in status changes
4. Watch for:
   - Issues created by Kyra or Mike (likely important asks)
   - Issues in "Meta MCP Launch" project (core product)
   - Blocked issues or issues with no recent updates (may need attention)
5. Update "Last Sync" to today's date.
6. Add a row to "Sync History" with active count and change count.

## Step 4: Calendar Sync (via Roam)

1. Call `mcp__roam__list_calendar_events` with `startDate` = tomorrow (YYYY-MM-DD) and `endDate` = day after tomorrow.
2. Create or update `~/Coding/vamsios/brain/sync/calendar-tomorrow.md` with:
   - Each meeting: time, title, attendees (names only), location/link
   - Flag meetings with key people (Kyra, Maya, Mike, Armin, Reza, Evan)
   - Note prep suggestions: if a meeting involves people from active Linear tickets or recent Slack threads, mention the context
3. This file is overwritten each sync (not cumulative - just tomorrow's view).

## Step 5: Commit

1. `cd ~/Coding/vamsios`
2. `git add brain/sync/roam-log.md brain/sync/slack-log.md brain/sync/linear-log.md brain/sync/calendar-tomorrow.md`
3. `git commit -m "sync: daily brain sync YYYY-MM-DD"`
4. Do NOT push.

## Rules

- Be concise in table entries. One line per item.
- Use real names, not Slack IDs.
- If a message thread is ambiguous, skip it rather than log noise.
- Never read or log messages that look like they contain passwords, tokens, or secrets.
