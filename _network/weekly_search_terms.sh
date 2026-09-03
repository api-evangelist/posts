#!/bin/bash
# Weekly search-terms refresh for apievangelist.com (/search-terms/).
#
# WHY THIS EXISTS. Every other weekly number on both networks had a scheduler and this
# one did not. apis.io fetches its analytics AND its search terms in the same
# `analytics.yml` Action; the AE side fetched only analytics (the
# net.kinlane.ae-analytics launchd job, which runs weekly_analytics.sh in
# info/search). _network/fetch_search_terms.py was written to mirror the apis.io
# fetcher and then only ever run by hand — once, on 2026-07-03. The page served the
# week ending 2026-07-03 for the next eight weeks and nothing anywhere said so,
# because a page that renders is indistinguishable from a page that is current.
#
# Idempotent: fetches the last complete week, commits only if the data moved.
# Run by net.kinlane.weekly-numbers (Mondays), or by hand any time.
set -euo pipefail

REPO="/Users/kinlane/GitHub/api-evangelist/posts"
PY="${PY:-/opt/homebrew/bin/python3}"
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# The freshness assertion lives in the search repo; there is one copy, not two.
FRESHNESS="/Users/kinlane/GitHub/api-evangelist/info/search/scripts/check-data-freshness.py"

cd "$REPO"
echo "=== $(date '+%Y-%m-%d %H:%M:%S') weekly search-terms refresh (apievangelist.com) ==="

# Reconcile before fetching. This repo takes concurrent commits from other sessions, and
# fetching on top of a stale base risks committing a conflict or re-deriving from old
# state. Stage nothing but our own file for the same reason.
git fetch -q origin || echo "  warn: cannot reach origin — continuing with the local checkout"
if [ "$(git rev-list --count HEAD..origin/main 2>/dev/null || echo 0)" != "0" ]; then
  echo "  behind origin/main — fast-forwarding before fetch"
  git merge --ff-only origin/main || echo "  warn: cannot fast-forward (local commits) — continuing"
fi

# --backfill re-derives every week since the date, which is how the eight missing weeks
# were recovered on 2026-08-31. Pass BACKFILL_SINCE=YYYY-MM-DD to repeat that; the
# default run does the last complete week only.
if [ -n "${BACKFILL_SINCE:-}" ]; then
  "$PY" _network/fetch_search_terms.py --backfill "$BACKFILL_SINCE"
else
  "$PY" _network/fetch_search_terms.py
fi

# A fetch that "succeeds" without landing the week is the quiet failure mode — missing
# S3 daily reports make build_week() return a zero-day snapshot it then skips, and the
# script still exits 0. Assert the data actually covers the last complete week.
"$PY" "$FRESHNESS" --file _data/search_terms.json:"AE search terms" \
  || echo "  WARNING: search terms did not land the last complete week — check the daily analytics Lambda is still writing s3://apievangelist.com-analytics/reports/<date>/search-demand.json"

if git diff --quiet -- _data/search_terms.json; then
  echo "No search-terms change — nothing to commit."
  exit 0
fi

git add _data/search_terms.json
git commit -q -m "Weekly search-terms refresh ($(date '+%Y-%m-%d'))

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
# --autostash, because this repo is where blog DRAFTS live. A plain `pull --rebase`
# refuses on a dirty tree, and on 2026-09-02 that aborted the entire nightly AE build --
# providers.apievangelist.com never rebuilt -- over five unpublished future-dated posts and
# a modified scoring.yml. Autostash puts them back afterwards; the drafts are never at risk,
# and a work-in-progress post is not a reason to skip a night's publish.
git pull --rebase --autostash -q origin main
git push -q origin main
echo "Pushed search-terms update — the Pages workflow will redeploy /search-terms/."
