---
name: discover-apievangelist
description: Discover the structure of the api-evangelist network — its subdomains, machine-readable catalogs, and content-negotiation conventions — so other skills can find APIs and contracts efficiently.
---

# discover-apievangelist

**Description:** Discover the structure of the api-evangelist network — its subdomains, machine-readable catalogs, and content-negotiation conventions — so other skills can find APIs and contracts efficiently.

## When to use this skill

Use this skill first when the user mentions api-evangelist, API Evangelist, the apievangelist.com network, asks about API discovery against a curated catalog, or wants to find APIs across providers. It primes the agent with the network's discovery endpoints so subsequent searches don't waste tokens scraping HTML.

## What api-evangelist is

api-evangelist is a federated catalog of public APIs maintained by Kin Lane. Content is sharded across subdomains under `apievangelist.com`. The two primary surfaces:

| Subdomain | Purpose |
|---|---|
| `apis.apievangelist.com` | Individual APIs (≈6,310). One entry per OpenAPI/AsyncAPI surface across all providers. |
| `contracts.apievangelist.com` | API providers (≈5,280). One contract per provider (the company's `apis.yml`). |

Supporting subdomains exist for governance concerns: `standards`, `strategies`, `policies`, `rules`, `properties`, `experiences`, `vocabularies`, `schema`, plus utilities and building blocks.

## Discovery endpoints

Every page on every subdomain advertises four things in HTTP `Link` response headers (RFC 8288):

```
Link: <https://<host>/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json",
      <https://apievangelist.com/skills/>; rel="agent-skills"; type="application/json",
      <https://<host>/sitemap.xml>; rel="sitemap"; type="application/xml",
      <self-url>; rel="alternate"; type="text/markdown"
```

Hit any apievangelist.com page with `curl -I` to see them.

### `/.well-known/api-catalog` (RFC 9727)

The canonical discovery endpoint. Two catalogs matter for most agents:

- `https://apis.apievangelist.com/.well-known/api-catalog` — every API in the network. RFC 9264 linkset (JSON). Each entry has an `anchor` (the API's apievangelist URL), optional `service-desc` (OpenAPI/AsyncAPI URLs), `service-doc` (human docs), and `describedby` (schemas).
- `https://contracts.apievangelist.com/.well-known/api-catalog` — every provider's contract, each with their APIs nested under `service-desc`.

Content-Type is `application/linkset+json`. Both files are ≈6–9 MB. Cache them.

Other subdomains also publish their own `/.well-known/api-catalog` listing their resources (standards, policies, rules, etc).

### `/sitemap.xml`

Per-subdomain sitemap.xml lists every page in that subdomain. Use for crawl-style discovery.

### `/robots.txt`

All subdomains publish explicit machine-readable consent:

```
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Content-Usage: search=y, ai-input=y, ai-train=y
```

Search indexing, AI input, and AI training are all explicitly permitted.

## Content negotiation

Send `Accept: text/markdown` to any `apis.apievangelist.com/store/<slug>/` or `contracts.apievangelist.com/store/<slug>/` URL and the server returns clean structured markdown synthesized from the api-catalog. No HTML parsing needed:

```bash
curl -H "Accept: text/markdown" https://apis.apievangelist.com/store/anthropic-messages-api/
```

Returns:
```markdown
# Anthropic Messages API

**API:** <https://apis.apievangelist.com/store/anthropic-messages-api/>

## Machine-readable descriptions
- [OpenAPI](https://raw.githubusercontent.com/api-evangelist/anthropic/refs/heads/main/openapi/anthropic-messages-api-openapi.yml) — `application/vnd.oai.openapi`

## Documentation
- [Documentation](https://docs.anthropic.com/en/api/messages)
```

## Site identity

Every subdomain publishes `/apis.json` (and `/apis.yml`) describing itself — name, description, maintainers, support contact, GitHub repo. APIs.json 0.20 format.

## Recommended discovery flow

1. Fetch `https://apis.apievangelist.com/.well-known/api-catalog` once and cache it (≈8 MB JSON).
2. Filter `linkset[]` entries by anchor URL or title to find APIs of interest.
3. For each match, follow `service-desc[].href` to fetch OpenAPI/AsyncAPI directly from the provider's GitHub repo.
4. For provider-level browsing, use `https://contracts.apievangelist.com/.well-known/api-catalog` instead.

## Related skills

- `search-apis` — keyword search across the catalog.
- `fetch-api-spec` — pull and parse the OpenAPI/AsyncAPI for a specific API.
