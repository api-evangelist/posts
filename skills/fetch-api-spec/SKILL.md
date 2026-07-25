---
name: fetch-api-spec
description: Given an api-evangelist URL or catalog entry, fetch the OpenAPI / AsyncAPI / JSON Schema specification for that API.
---

# fetch-api-spec

**Description:** Given an api-evangelist URL or catalog entry, fetch the OpenAPI / AsyncAPI / JSON Schema specification for that API and return it parsed.

## When to use this skill

Use after `search-apis` returns a hit, or whenever the user supplies an `apis.apievangelist.com/store/...` or `providers.apievangelist.com/providers/...` URL and wants to inspect, summarize, or generate code from the underlying API description.

For API Evangelist's own network API, the spec is fixed and hosted: `https://developer.apievangelist.com/apis/apievangelist-v1-openapi.yml` — fetch it directly, no lookup needed. Full research resources (guidance, rules, stories, …) inline their bodies via `?include=content` on `https://api.apievangelist.com/v1`.

## Inputs

One of:
- An api-evangelist URL (e.g., `https://apis.apievangelist.com/store/anthropic-messages-api/`).
- A catalog entry from `search-apis`.

## Recipe — from URL

```python
import json, urllib.request, yaml

CATALOGS = {
    "apis.apievangelist.com": "https://apis.apievangelist.com/.well-known/api-catalog",
    "providers.apievangelist.com": "https://providers.apievangelist.com/.well-known/api-catalog",
}

def fetch_spec(api_url):
    """Fetch and parse the spec for an api-evangelist URL."""
    from urllib.parse import urlparse
    host = urlparse(api_url).netloc
    catalog_url = CATALOGS.get(host)
    if not catalog_url:
        raise ValueError(f"Unknown host: {host}")

    with urllib.request.urlopen(catalog_url) as r:
        catalog = json.load(r)

    entry = next((e for e in catalog["linkset"] if e.get("anchor") == api_url), None)
    if not entry:
        return None

    spec_link = next(
        (d for d in entry.get("service-desc", [])
         if d.get("type") in ("application/vnd.oai.openapi", "application/vnd.aai.asyncapi")),
        None,
    )
    if not spec_link:
        return None

    with urllib.request.urlopen(spec_link["href"]) as r:
        body = r.read()
    # The upstream specs are .yml or .json; try YAML (a JSON doc is valid YAML).
    return yaml.safe_load(body)

if __name__ == "__main__":
    import sys
    spec = fetch_spec(sys.argv[1])
    print(json.dumps(spec, indent=2)[:2000])
```

## Recipe — direct from catalog entry

If you already have an entry from `search-apis`, skip the catalog round-trip:

```python
spec_link = next(
    d for d in entry["service-desc"]
    if d["type"] in ("application/vnd.oai.openapi", "application/vnd.aai.asyncapi")
)
with urllib.request.urlopen(spec_link["href"]) as r:
    spec = yaml.safe_load(r.read())
```

## What you get back

- **OpenAPI**: a parsed dict with `info`, `paths`, `components`, `servers`. Standard OpenAPI 3.x.
- **AsyncAPI**: parsed dict with `info`, `channels`, `components`, `servers`. AsyncAPI 2.x or 3.x.
- **JSON Schema** (from `entry["describedby"]`): a parsed schema dict.

All specs come from the provider's GitHub repo (`raw.githubusercontent.com/api-evangelist/<provider>/refs/heads/main/...`), so they're the canonical, version-controlled artifact. No upstream API access needed to inspect them.

## Markdown alternative

If the user wants a human-readable summary rather than a parsed spec, hit the same URL with `Accept: text/markdown` instead — the Worker synthesizes a markdown response from the catalog:

```bash
curl -H "Accept: text/markdown" https://apis.apievangelist.com/store/anthropic-messages-api/
```

## Related skills

- `discover-apievangelist` — primer on catalog structure.
- `search-apis` — find an entry before fetching its spec.
