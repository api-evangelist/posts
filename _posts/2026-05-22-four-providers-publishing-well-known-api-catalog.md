---
published: true
layout: post
title: "Only Four API Providers Publish a Real .well-known/api-catalog Right Now"
date: 2026-05-22
author: "Kin Lane"
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
category: "Blog"
tags:
  - Agent Readiness
  - RFC 9727
  - API Discovery
  - .well-known
  - Linkset
  - OpenAPI
  - MCP
excerpt: "I probed 74 likely-candidate API providers — the recent API Evangelist pipeline batch plus the obvious large surfaces — for a real RFC 9727 LinkSet at `/.well-known/api-catalog`. Four serve one. Sixty-eight serve a 200 OK that turns out to be a single-page-app catch-all. Two return a clean 404."
---
RFC 9727 has been a published IETF standard for over a year. It defines `/.well-known/api-catalog` as the machine entrypoint for discovering an organization's APIs — a small, boring, eminently useful primitive. An agent (or a developer, or a tool) does a GET against that path, gets back an `application/linkset+json` document, and finds the URLs of every OpenAPI, AsyncAPI, or other spec the provider publishes. No HTML crawl. No "the docs are over here, the spec is over there". One known place, one machine-readable answer.

I have been writing about this pattern for the better part of two years. I added `well-known-catalog` as a forward-looking dimension in the [agent-readiness model](https://github.com/api-evangelist/agent-readiness) I shipped this week. And I noticed yesterday, while writing up [Merge.dev's pipeline refresh](https://github.com/api-evangelist/merge), that Merge had quietly added one — ten entries, one per Unified API category, with the OpenAPI YAML on each typed link. That made me wonder how many other providers I'd missed.

So I ran a probe. Seventy-four providers — every company in the recent round of API Evangelist pipeline refreshes (the embedded iPaaS players, the identity providers, the cloud gateways, the docs platforms, the SDK generators, the agent infrastructure companies, the observability vendors) plus the obvious large surfaces that should have one if anyone does (Stripe, Twilio, GitHub, Salesforce, Microsoft Graph, Google, Postman, Plaid, Slack, Shopify, every API gateway). Six URL candidates per provider — bare domain, `docs.`, `developer.`, `developers.`, `api.`, `platform.`. Five hundred and eighteen HTTPS requests, fired in parallel.

## The answer is four

Four providers serve a real RFC 9727 LinkSet at `/.well-known/api-catalog`:

| Provider | Endpoint | Entries | Notable |
|---|---|---|---|
| **Cloudflare** | [`developers.cloudflare.com/.well-known/api-catalog`](https://developers.cloudflare.com/.well-known/api-catalog) | 1 | Returns `application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"`. Points at the bundled `openapi.json`. Three different host prefixes all resolve to the same content. |
| **Memesio** | [`memesio.com/.well-known/api-catalog`](https://memesio.com/.well-known/api-catalog) | 2 | The only catalog I observed that publishes **both** the REST API and the MCP server endpoint as separate linkset entries. The template the other three should copy. |
| **Merge.dev** | [`docs.merge.dev/.well-known/api-catalog`](https://docs.merge.dev/.well-known/api-catalog) | 10 | The deepest catalog — one entry per Unified API category (HRIS, ATS, Accounting, CRM, Ticketing, File Storage, plus the newer ones). Each entry points at a category-specific OpenAPI YAML. The model for how a multi-product provider should structure their catalog. |
| **Zuplo** | [`zuplo.com/.well-known/api-catalog`](https://zuplo.com/.well-known/api-catalog) | 1 | The only catalog whose typed link explicitly declares the OpenAPI version (`application/vnd.oai.openapi+json;version=3.1`). A gateway company practicing what they preach. |

That is the entire field as of today. Four out of seventy-four.

Two providers returned a clean 404. Sixty-eight returned `200 OK` — but the body was HTML. They were single-page-app catch-all routes serving the homepage from the well-known path. An agent following the standard would get a 200, try to parse a LinkSet out of the body, fail, and have no useful recourse. That is worse than a 404. A 404 tells the agent the resource doesn't exist; an HTML 200 at a well-known path lies.

## The four are not who I expected

I expected Stripe to have one. They don't.

I expected Twilio to have one. They don't.

I expected at least one of the big docs platforms — ReadMe, Mintlify, Bump.sh, Redocly, Stoplight — to have one for their own site, given that publishing developer-facing infrastructure is the entire business. None of them do.

I expected every API gateway in the field to have one as a credibility signal. Of the seven I probed — Kong, Tyk, Apigee, Apache APISIX, Gravitee, KrakenD, WSO2 — none do. Only Zuplo. Cloudflare does it on the docs site, which is the closest the hyperscaler gateways get.

I expected, frankly, that any of the agent infrastructure companies — Composio, Toolhouse, Smithery, Letta, Arcade, Jentic, Naftiko — would have one as their literal job description. None do.

What I got instead was a CDN/edge company, a small startup most people have never heard of, a unified-API company, and a developer-first gateway company. The shape of the field that has actually implemented this is not the shape of the field that talks about agent readiness.

## What good looks like

The Memesio catalog is the one I'd point any provider at as a template. It is two lines:

```json
{
  "linkset": [
    { "anchor": "https://memesio.com/api",
      "service-desc": [{"href": "https://memesio.com/api/openapi", "type": "application/json"}]
    },
    { "anchor": "https://memesio.com/api/mcp",
      "service-desc": [{"href": "https://memesio.com/api/mcp", "type": "application/json"}]
    }
  ]
}
```

That is the entire payload an agent needs to discover both the REST API and the MCP server. It costs you a single static file behind a CDN. It costs you nothing to maintain. It is the smallest, cheapest, most boring agent-readiness commitment you can make as a provider — and it makes the difference between an agent that finds your API in one round-trip and an agent that has to crawl your blog.

The Merge catalog is the second template — the multi-product version. If you ship one product, you can fit the whole story in one entry like Cloudflare or Zuplo. If you ship a family of APIs like Merge does (or like Stripe does, or Twilio, or Salesforce), one entry per product line is the move. You do not have to pick which to advertise. You advertise all of them.

## What the gap means

The gap is not a standards-maturity gap. RFC 9727 has been published for over a year. It builds on RFC 9264 LinkSet, which itself was published in 2022. The IETF httpapi WG has been clear about the design.

The gap is a **prioritisation gap**. Every provider I named above ships agent-themed product launches, AI gateway integrations, MCP servers, "Auth for AI" press releases. The smallest possible agent-readiness primitive — one well-known path that returns a tiny JSON document pointing at the OpenAPI you already publish — is the thing they have skipped. It's the API-publishing equivalent of selling a beautiful house without putting up a number on the mailbox.

I'm going to start using this as one of the first signals I check when I write up a provider. If you ship a `/.well-known/api-catalog` you're telling me you've thought about agents finding your API by themselves. If you don't, you're telling me you've thought about agents using your API only after a human has already onboarded them. Those are two different products.

If you work at a provider with a public API, your TODO is one PR. Add a `linkset` JSON file. Serve it with `Content-Type: application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"`. Point it at the OpenAPI you already publish — and at your MCP server if you have one. That's the whole task. You will join Cloudflare, Memesio, Merge.dev, and Zuplo on the very short list of providers an agent can actually find without me writing a custom crawler.

The signal records for all four observed catalogs are committed in the [api-evangelist/agent-readiness](https://github.com/api-evangelist/agent-readiness) topic repo, scored as exemplary against the `well-known-catalog` dimension. I'll re-run the probe next quarter. I'd like the table to be longer.
