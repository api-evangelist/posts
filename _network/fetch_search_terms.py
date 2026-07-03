#!/usr/bin/env python3
"""
Build a WEEKLY public "search terms" snapshot for apievangelist.com.

The API Evangelist search API + MCP server log every query to CloudWatch, and a
daily analytics Lambda (in apievangelist-aws) aggregates the prior 24h into S3:
    s3://apievangelist.com-analytics/reports/<YYYY-MM-DD>/search-demand.json   (one per day)
    s3://apievangelist.com-analytics/search-demand.json                        (stable latest, 24h)

Each daily report has: top_queries[{q,n}], zero_result_queries[{q,n}] (terms with no
match — unmet demand), upgrade_demand[{resource,n}], by_tier{}, by_surface{}.

This script merges the SEVEN daily reports for the last complete week (Sun→Sat, ending
yesterday) into one weekly snapshot, summing counts per decoded query, and upserts it
into _data/search_terms.json. The companion page at /search-terms/ renders it.

  python3 _network/fetch_search_terms.py                 # current (last complete) week
  python3 _network/fetch_search_terms.py --backfill 2026-06-27   # all weeks since a date

Needs AWS creds in the environment with s3:GetObject on the analytics bucket.
Mirrors the apis.io fetch_search_terms.py so the two pages line up week-for-week.
"""

import datetime
import json
import os
import sys
import urllib.parse

import boto3
from botocore.exceptions import ClientError

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.path.join(REPO_ROOT, "_data", "search_terms.json")

BUCKET = os.environ.get("SEARCH_S3_BUCKET", "apievangelist.com-analytics")
REGION = os.environ.get("AWS_DEFAULT_REGION") or os.environ.get("AWS_REGION") or "us-east-1"
KEEP = int(os.environ.get("SEARCH_TERMS_KEEP", "100"))  # cap each weekly list


def week_window():
    """(start, end) ISO strings for the last complete 7-day week ending yesterday."""
    today = datetime.date.today()
    end = today - datetime.timedelta(days=1)
    start = end - datetime.timedelta(days=6)
    return start.isoformat(), end.isoformat()


def current_window():
    """(start, end) for the in-progress week ending TODAY — keeps the page non-empty
    while fewer than seven daily reports exist. Re-labeled/superseded as the week fills."""
    today = datetime.date.today()
    start = today - datetime.timedelta(days=6)
    return start.isoformat(), today.isoformat()


def all_week_windows(since_str):
    """Yield (start, end) ISO pairs for every complete week from since_str to yesterday."""
    since = datetime.date.fromisoformat(since_str)
    today = datetime.date.today()
    end = today - datetime.timedelta(days=1)
    start = end - datetime.timedelta(days=6)
    weeks = []
    while start >= since:
        weeks.append((start.isoformat(), end.isoformat()))
        end = start - datetime.timedelta(days=1)
        start = end - datetime.timedelta(days=6)
    return list(reversed(weeks))


def decode(q):
    # the API logs raw query strings ("api+governance"); normalize for humans
    return urllib.parse.unquote_plus(q or "").strip()


def fetch_daily(s3, date_str):
    """Read one day's search-demand.json from S3, or None if it doesn't exist."""
    key = f"reports/{date_str}/search-demand.json"
    try:
        obj = s3.get_object(Bucket=BUCKET, Key=key)
        return json.loads(obj["Body"].read())
    except ClientError as e:
        if e.response.get("Error", {}).get("Code") in ("NoSuchKey", "404", "AccessDenied"):
            return None
        raise


def _merge_queries(acc, rows):
    """Sum [{q,n}] into acc {key: {q, n}} keyed by decoded, lower-cased query."""
    for row in rows or []:
        q = decode(row.get("q"))
        if not q:
            continue
        key = q.lower()
        entry = acc.setdefault(key, {"q": q, "n": 0})
        entry["n"] += int(row.get("n", 0))
        entry["q"] = q  # keep latest casing


def _merge_counts(acc, mapping):
    for k, v in (mapping or {}).items():
        acc[k] = acc.get(k, 0) + int(v or 0)


def _top(acc):
    rows = sorted(acc.values(), key=lambda e: (-e["n"], e["q"].lower()))
    return rows[:KEEP]


def build_week(s3, start, end):
    """Merge the daily reports across [start, end] into one weekly snapshot dict."""
    top, zero, upgrade = {}, {}, {}
    by_tier, by_surface = {}, {}
    days_found = []

    d = datetime.date.fromisoformat(start)
    end_d = datetime.date.fromisoformat(end)
    while d <= end_d:
        ds = d.isoformat()
        daily = fetch_daily(s3, ds)
        if daily:
            days_found.append(ds)
            _merge_queries(top, daily.get("top_queries"))
            _merge_queries(zero, daily.get("zero_result_queries"))
            for row in daily.get("upgrade_demand") or []:
                res = row.get("resource")
                if res:
                    upgrade[res] = upgrade.get(res, 0) + int(row.get("n", 0))
            _merge_counts(by_tier, daily.get("by_tier"))
            _merge_counts(by_surface, daily.get("by_surface"))
        d += datetime.timedelta(days=1)

    total_searches = sum(by_surface.values()) if by_surface else sum(by_tier.values())

    return {
        "week_starting": start,
        "week_ending": end,
        "fetched_at": datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
        "days_found": len(days_found),
        "days_expected": 7,
        "total_searches": total_searches,
        "unique_terms": len(top),
        "unmet_terms": len(zero),
        "top_queries": _top(top),
        "zero_result_queries": _top(zero),
        "upgrade_demand": sorted(
            ({"resource": k, "n": v} for k, v in upgrade.items()),
            key=lambda e: -e["n"],
        ),
        "by_tier": by_tier,
        "by_surface": by_surface,
    }


def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE) as f:
            return json.load(f)
    return {"weeks": []}


def save_data(data):
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")


def upsert(data, snapshot):
    weeks = [w for w in data.get("weeks", []) if w.get("week_ending") != snapshot["week_ending"]]
    weeks.append(snapshot)
    weeks.sort(key=lambda w: w["week_ending"])
    data["weeks"] = weeks


def main():
    backfill_since = None
    if len(sys.argv) > 2 and sys.argv[1] == "--backfill":
        backfill_since = sys.argv[2]

    s3 = boto3.client("s3", region_name=REGION)
    data = load_data()

    windows = all_week_windows(backfill_since) if backfill_since else [week_window()]
    # Always refresh the in-progress week too, so the page has data before the first
    # complete week exists. De-duped by week_ending in upsert().
    if current_window() not in windows:
        windows.append(current_window())

    for start, end in windows:
        snap = build_week(s3, start, end)
        if snap["days_found"] == 0:
            print(f"  {start} → {end}: no daily reports found, skipping")
            continue
        upsert(data, snap)
        print(
            f"  {start} → {end}: {snap['days_found']}/7 days, "
            f"{snap['total_searches']:,} searches, "
            f"{snap['unique_terms']} terms, {snap['unmet_terms']} unmet"
        )

    save_data(data)
    print(f"wrote {DATA_FILE} ({len(data['weeks'])} weeks)")

    latest = data["weeks"][-1] if data["weeks"] else None
    if latest:
        print(f"\nTop search terms — week ending {latest['week_ending']}:")
        for r in latest["top_queries"][:10]:
            print(f"  {r['n']:>5}  {r['q']}")


if __name__ == "__main__":
    main()
