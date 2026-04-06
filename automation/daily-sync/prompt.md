# Daily Brain Sync Prompt

You are running an automated daily sync for Vamsi's brain system at ~/Coding/vamsios.

## Step 1: Roam Meeting Sync

1. Read `~/Coding/vamsios/brain/sync/roam-log.md` to get the "Last Sync" date.
2. Call `mcp__roam__list_meetings` with `after` set to that date and `expand=["summary","chapters","participants"]`.
3. For each new meeting, add a row to the Processed Meetings table:
   - Date, Meeting ID, Key participants (abbreviate to names, "+N" if >4), Main topics (comma-separated), Depth "Summary + chapters"
4. Update "Last Sync" to today's date.

## Step 2: Slack Sync

1. Read `~/Coding/vamsios/brain/sync/slack-log.md` to get the "Last Sync" date.

2. Search Slack using `mcp__claude_ai_Slack__slack_search_public_and_private` with these queries. Use `on:YYYY-MM-DD` for today's date to capture the full day. If last sync was more than 1 day ago, also run queries with `after:YYYY-MM-DD` for the last sync date to catch anything in between.

   **Core product channels (always scan):**
   - `in:#project-cli on:YYYY-MM-DD` — MCP product channel
   - `in:#project-mcp on:YYYY-MM-DD` — MCP work
   - `in:#stream-mcp on:YYYY-MM-DD` — MCP stream
   - `in:#mcp-feedback on:YYYY-MM-DD` — Customer feedback

   **High-priority channels (scan for mentions + decisions):**
   - `in:#engineering on:YYYY-MM-DD` — Incidents, releases
   - `in:#project-chat on:YYYY-MM-DD` — Cross-product decisions
   - `in:#project-analytics on:YYYY-MM-DD` — Metrics work

   **DMs & Group DMs (scan for action items):**
   - `to:me on:YYYY-MM-DD` in DMs/group DMs — Direct asks
   - `from:me on:YYYY-MM-DD` in DMs/group DMs — Check for commitments Vamsi made

   **Key people to watch for asks from:**
   - Kyra Richards (PM lead)
   - Maya (PM partner)
   - Mike Choi (engineering partner)
   - Armin Karimi (eng lead)

   Skip: GitHub bot, deploy bots, automated notifications, #working-with-ai (social), casual emoji-only messages.

3. For each relevant message thread, classify as:
   - **Action Item**: something Vamsi needs to do, was asked to do, or committed to doing. Add to "Open Action Items" with status "open".
   - **Decision**: a decision was made that affects Vamsi's work or MCP product. Add to "Decisions".
   - **Ask/Request**: someone asked Vamsi for something specific. Add to "Asks & Requests" with whether he responded (yes/no/pending).

4. Prioritization rules:
   - Anything from Kyra, Maya, or Mike directed at Vamsi = always capture
   - Customer feedback in #mcp-feedback = always capture
   - Engineering incidents or blockers = capture if MCP-related
   - Casual chat, reactions, GIFs, social messages = skip

5. Add a row to "Sync History" with today's date, messages scanned count, items extracted count.
6. Update "Last Sync" to today's date.
7. If any open action items from previous syncs appear resolved (based on follow-up messages), update their status to "done".

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
