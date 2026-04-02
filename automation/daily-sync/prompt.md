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
2. Search Slack for messages involving Vamsi since that date:
   - `mcp__claude_ai_Slack__slack_search_public_and_private` with query `to:me after:YYYY-MM-DD` (exclude bot messages)
   - `mcp__claude_ai_Slack__slack_search_public_and_private` with query `from:me after:YYYY-MM-DD`
   - Focus on human conversations in channels and DMs. Skip GitHub bot, deploy bots, and automated notifications.
3. For each relevant message thread, classify as:
   - **Action Item**: something Vamsi needs to do, or was asked to do. Add to "Open Action Items" with status "open".
   - **Decision**: a decision was made that affects Vamsi's work. Add to "Decisions".
   - **Ask/Request**: someone asked Vamsi for something. Add to "Asks & Requests" with whether he responded (yes/no/pending).
4. Skip casual chat, emoji reactions, and FYI-only messages unless they contain a clear commitment or deliverable.
5. Add a row to "Sync History" with today's date, messages scanned count, items extracted count.
6. Update "Last Sync" to today's date.
7. If any open action items from previous syncs appear to be resolved (based on follow-up messages), update their status to "done".

## Step 3: Commit

1. `cd ~/Coding/vamsios`
2. `git add brain/sync/roam-log.md brain/sync/slack-log.md`
3. `git commit -m "sync: daily brain sync YYYY-MM-DD"`
4. Do NOT push.

## Rules

- Be concise in table entries. One line per item.
- Use real names, not Slack IDs.
- If a message thread is ambiguous, skip it rather than log noise.
- Never read or log messages that look like they contain passwords, tokens, or secrets.
