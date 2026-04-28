#!/usr/bin/env bash
# Poll Slack #mcp-feedback and create GH issues that trigger claude.yml.
# Defaults to dry-run. Set LIVE=true in .env or env to enable real GH writes.

set -euo pipefail

cd "$(dirname "$0")"

if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if [[ ! -d node_modules ]]; then
  echo "[run.sh] installing deps"
  if command -v pnpm >/dev/null 2>&1; then
    pnpm install --silent
  else
    npm install --silent
  fi
fi

exec npx tsx poll.ts
