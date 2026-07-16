---
name: brief-on-topic
description: Get oriented on any API topic using API Evangelist — the relevant topic areas, the tag graph, and the most recent stories, as a quick briefing.
---

# brief-on-topic

**Description:** Get oriented on any API topic using API Evangelist — the relevant topic areas, the tag graph, and the most recent stories, as a quick briefing.

## When to use this skill

Use when someone asks "what's API Evangelist's take on X", "get me up to speed on Y", or "what should I read about Z". This produces a fast, grounded briefing from sixteen years of research — free, no key needed.

## The v1 API

Base URL: `https://api.apievangelist.com/v1`. Everything here is **free**.

| Step | Call | Why |
|---|---|---|
| 1. Orient | `GET /search?q=<topic>` | Ranked matches across every content type. |
| 2. Areas | `GET /areas?q=<topic>` | The curated topic area(s) that frame it. |
| 3. Tag | `GET /tags/<slug>` | Everything tagged with the topic, across stories/areas/guidance/papers. |
| 4. Recent | `GET /posts?q=<topic>&sort=date` | The latest thinking, newest first. |

MCP equivalents (`https://mcp.apievangelist.com/mcp`): `search_api_evangelist`, `find_areas`, `get_tag`, `find_posts`. Or run the `catch_up` prompt.

## Recipe

```bash
B=https://api.apievangelist.com/v1
curl -s "$B/areas?q=governance&limit=2" | jq '.data[] | {slug,title,summary}'
curl -s "$B/posts?q=governance&sort=date&limit=6" | jq '.data[] | {title,url,date}'
```

## Output format (recommended)

A short briefing:
- The 1-2 topic areas that frame it (with links).
- The throughline of the recent stories — what's new, where it's heading.
- 3-5 links worth reading first.

For the full research bodies behind the briefing, or a curated bundle, see `research-with-api-evangelist` (Pro).

## Related skills

- `research-with-api-evangelist` — go deep (Pro): the curated guide + full content.
- `find-where-ae-helps` — turn a topic into where API Evangelist can help your team.
