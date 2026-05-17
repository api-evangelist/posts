---
name: search-apis
description: Find APIs and contracts in the api-evangelist network by keyword, provider, or tag, using the RFC 9264 api-catalog endpoints.
---

# search-apis

**Description:** Find APIs and contracts in the api-evangelist network by keyword, provider, or tag. Returns structured matches the agent can hand to the user or feed to other skills.

## When to use this skill

Use when the user asks "what APIs are there for X", "find an API to do Y", "which providers offer Z", or any other intent that requires filtering the api-evangelist catalog. Prefer this over scraping search HTML.

## Inputs

- A free-text query (e.g., `"sms"`, `"weather"`, `"clinical trials"`, `"openai"`).
- Optional filters: provider name (e.g., `"anthropic"`), tag (e.g., `"AI"`, `"Healthcare"`), or scope (`"apis"` for individual APIs, `"contracts"` for providers).

## How it works

Two catalogs cover the network:

- `https://apis.apievangelist.com/.well-known/api-catalog` — one entry per API (≈6,310).
- `https://contracts.apievangelist.com/.well-known/api-catalog` — one entry per provider (≈5,280).

Each entry looks like:

```json
{
  "anchor": "https://apis.apievangelist.com/store/<slug>/",
  "title": "<API name>",
  "description": "<API description>",
  "service-desc": [{"href": "...", "type": "application/vnd.oai.openapi"}],
  "service-doc":  [{"href": "...", "type": "text/html"}],
  "describedby": [{"href": "...", "title": "JSONSchema"}]
}
```

Filter `linkset[]` client-side. Title, description, and anchor are searchable; the anchor encodes the slug.

## Recipe

```python
import json, urllib.request, re

CATALOGS = {
    "apis": "https://apis.apievangelist.com/.well-known/api-catalog",
    "contracts": "https://contracts.apievangelist.com/.well-known/api-catalog",
}

def search(query, *, scope="apis", provider=None, tag=None, limit=20):
    """Return up to `limit` linkset entries matching `query`.

    scope    -- "apis" (individual API surfaces) or "contracts" (providers).
    provider -- restrict matches whose anchor URL contains this provider slug.
    tag      -- match if `tag` (case-insensitive) appears in the title or description.
    """
    with urllib.request.urlopen(CATALOGS[scope]) as r:
        catalog = json.load(r)

    q = query.lower()
    hits = []
    for entry in catalog["linkset"]:
        anchor = entry.get("anchor", "")
        title = (entry.get("title") or "").lower()
        desc = (entry.get("description") or "").lower()
        if provider and provider.lower() not in anchor.lower():
            continue
        if tag and tag.lower() not in (title + " " + desc):
            continue
        if q and q not in title and q not in desc and q not in anchor.lower():
            continue
        hits.append(entry)
        if len(hits) >= limit:
            break
    return hits

if __name__ == "__main__":
    import sys
    results = search(sys.argv[1] if len(sys.argv) > 1 else "")
    for r in results:
        print(f"- {r.get('title')} <{r.get('anchor')}>")
```

## Tips

- **Cache the catalog.** It's 6–9 MB and updates infrequently. Pull once per session.
- **Anchor encodes the slug.** `https://apis.apievangelist.com/store/anthropic-messages-api/` -> slug `anthropic-messages-api`, provider `anthropic`.
- **`service-desc` is the spec.** Once you have a hit, jump straight to the OpenAPI/AsyncAPI URL — don't re-fetch the catalog or the human page.
- **For human-style summaries**, request the page with `Accept: text/markdown` instead of GETting the HTML.

## Related skills

- `discover-apievangelist` — primer on the catalog structure (run first if unfamiliar).
- `fetch-api-spec` — pull and parse the OpenAPI/AsyncAPI for a hit.
