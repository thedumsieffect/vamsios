#!/bin/bash
# Daily Brain Sync — pulls Roam meetings + Slack action items into ~/Coding/vamsios/brain/sync/
# Runs via launchd at 7pm daily. Uses claude CLI with MCP access.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROMPT_FILE="$SCRIPT_DIR/prompt.md"
LOG_FILE="$SCRIPT_DIR/sync.log"
REPO_DIR="$HOME/Coding/vamsios"

# Ensure NVM is loaded (claude may need node)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

# Add claude to PATH
export PATH="$HOME/.local/bin:$PATH"

echo "$(date '+%Y-%m-%d %H:%M:%S') — Starting daily brain sync" >> "$LOG_FILE"

PROMPT=$(cat "$PROMPT_FILE")

# Run claude headlessly with the sync prompt
claude -p "$PROMPT" \
  --allowedTools "mcp__roam__list_meetings,mcp__roam__get_meeting,mcp__claude_ai_Slack__slack_search_public_and_private,mcp__claude_ai_Linear__list_issues,mcp__claude_ai_Linear__get_issue,Read,Edit,Bash" \
  -d "$REPO_DIR" \
  --no-input \
  >> "$LOG_FILE" 2>&1

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "$(date '+%Y-%m-%d %H:%M:%S') — Sync completed successfully" >> "$LOG_FILE"
else
  echo "$(date '+%Y-%m-%d %H:%M:%S') — Sync failed with exit code $EXIT_CODE" >> "$LOG_FILE"
fi

echo "---" >> "$LOG_FILE"
