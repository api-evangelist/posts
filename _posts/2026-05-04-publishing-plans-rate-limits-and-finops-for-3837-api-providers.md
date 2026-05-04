---
layout: post
title: "Publishing Plans, Rate Limits, and FinOps for 3,837 API Providers"
date: 2026-05-04
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-under-socialism-markets-amsterdam.jpeg
category: "Blog"
excerpt: "I just finished a project to publish three new machine-readable artifacts — API Commons Plans & Pricing, API Commons Rate Limits, and a FinOps Foundation FOCUS-aligned framework — across every API provider in the API Evangelist Network that has APIs published. That is 3,837 of the 5,127 repositories in the network. 11,511 new YAML artifacts. The full Tier 1 set of 184 well-known providers reconciled with researched values from each vendor's published pricing pages."
---
I just finished work to publish three new machine-readable artifacts — API Commons Plans & Pricing, API Commons Rate Limits, and a FinOps Foundation FOCUS-aligned framework across as many API providers in the API Evangelist Network that I can. That ended up being 3,837 of the 5,127 repositories in the API Evangelist GitHub network. 11,511 new YAML artifacts. What I consider to be a full Tier 1 set of 184 well-known API providers possessing the devil in the details when it comes to the business of these APIs.

## The Gap I Was Trying to Close
For many years I have been making the case that an OpenAPI and AsyncAPI are the leading machine-readable artifacts API providers should be publishing. OpenAPI for synchronous APIs. AsyncAPI for event-driven APIs. JSON Schema for data shapes and validation. JSON-LD for vocabulary. Spectral rulesets for governance. And APIs.json to tie them all together at a known URL.

What I have not been making the case for strongly enough recently, and something AI agents have made urgent, is the financial half of the API contract. The OpenAPI spec tells a consumer how to call the API. It does not tell the consumer what the call costs, what tier they are on, what their throughput allowance is, what the meter rolls up to on the invoice, or what the dimensions are that let them allocate cost back to a team, domain, or line of business. None of that lives in any of the existing machine-readable specs.

For a developer building a one-off integration, the gap is fine. They read the pricing page, sign up, watch their first invoice, and learn. The discovery loop is human-paced.

For an AI agent making decisions at machine speed across hundreds of providers, the gap is load-bearing. The agent can fetch the OpenAPI spec and call the right endpoint with the right parameters and get the right response — and have no idea whether that call cost a hundredth of a cent or fifty dollars. It cannot pick the cheaper of two equivalent providers. It cannot stop itself before exhausting a quota. It cannot tell its caller what the bill is going to look like over time.

The fix is the same thing I have been arguing for a while now: publish the missing data as a machine-readable file, in the provider's repo, indexed by APIs.json, alongside everything else. Three new artifact types — plans, rate limits, finops. This will help close the busienss gap I am speaking of.

## What Got Generated
This work happened in two phases.

**Phase one** Generated scaffold artifacts for every qualifying API provider in the API Evangelist network. A provider qualifies if its `apis.yml` declares at least one API in the `apis:` array — which matched 3,837 of the 5,127 repos. For each qualifying provider I generated three YAML files in three new directories:

- `plans/{provider}-plans-pricing.yml` — three scaffold tiers (Free, Professional, Enterprise) with placeholder limits and prices, conforming to the API Commons Plans schema.
- `rate-limits/{provider}-rate-limits.yml` — standard rate-limit envelope with the common `X-RateLimit-*` headers, 429 response code, per-tier limits across each API in the provider's catalog, and policy notes for backoff, burst handling, quota reset.
- `finops/{provider}-finops.yml` — FOCUS-v1.3-aligned cost framework with the four FinOps Foundation domains (Understand, Quantify, Optimize, Manage), a billing model section, FOCUS column mapping, default meters (api_requests, data_egress, compute_seconds), and unit-economics targets.

That is 11,511 files. They went into the same repos as the other specs. But they carry no `reconciled` flag — a downstream consumer should treat them as templates until the per-vendor research has occurred--validating what is happening.

**Phase two** I went back and reconciled the 184 providers I tagged Tier 1 with researched values from each vendor's actual pricing and rate-limit pages. That set includes:

- The frontier AI labs (Anthropic, OpenAI, Cohere, Mistral, Perplexity, Replicate, Deepgram, ElevenLabs, Stability AI)
- The vector databases (Pinecone, Weaviate, Qdrant)
- The payment platforms (Stripe, Adyen, PayPal, Square, Plaid, Lemon Squeezy, Modern Treasury, Moov)
- The communications APIs (Twilio, SendGrid, Vonage, Bandwidth, Sinch, MessageBird, Postmark, Mailchimp, Klaviyo)
- The dev platforms (GitHub, GitLab, Bitbucket, Atlassian, Jira, Confluence, CircleCI)
- The hosting and edge providers (Vercel, Netlify, Cloudflare, Fastly, Fly.io, Heroku, Render, Railway, Linode, Supabase, Neon)
- The databases (MongoDB Atlas, CockroachDB, Couchbase, PlanetScale, Redis, Snowflake, Databricks, Elastic)
- The identity stack (Auth0, Okta, WorkOS, Stytch, SuperTokens)
- The observability stack (Datadog, New Relic, Sentry, Honeycomb, Lightstep, Bugsnag, Rollbar, Splunk, PagerDuty, Opsgenie, incident.io, Heap, Mixpanel, Amplitude, PostHog)
- The productivity and collaboration tools (Notion, Linear, Airtable, Asana, ClickUp, monday.com, Figma, Dropbox, Box, Slack, Discord, Zoom, Trello)
- The marketing and CDP stack (HubSpot, Salesforce, Twilio Segment, Braze, Iterable, Optimizely, Drift, Pandadoc, Constant Contact, Copper)
- The commerce stack (Shopify, BigCommerce, Adobe Commerce, WooCommerce, VTEX, commercetools)
- The integration platforms (Zapier, n8n, Make, Workato, Tray.io, Pipedream, Nango, Merge, Unified.to, Paragon)
- The mega-platforms (AWS, Google Cloud, Microsoft Azure, IBM, Oracle, Cisco, Apple, Meta) — captured at platform-overview level since each has hundreds of services with their own pricing
- The enterprise providers without public API pricing (AT&T, Verizon, Mastercard, Visa, FedEx, UPS, Walmart, Booking.com, Expedia, etc.) — labeled as partner-contract-only with pointers to the developer portals
- A handful of niche / test APIs (Beeceptor, the-racing-api, TheCocktailDB, TheMealDB, Chainlens) — labeled as free / donation-funded

Every reconciled artifact now carries a `reconciled: true` flag and a `sources:` array citing the URLs the values came from. The schema reference the [API Commons Plans and Rate Limit](https://apicommons.org) schema. The FinOps artifacts cite the FOCUS v1.3 specification at [focus.finops.org](https://focus.finops.org/focus-specification/v1-3/) and the FinOps Foundation framework at [finops.org/framework](https://www.finops.org/framework/).

## What the Artifacts Look Like

Every reconciled provider's plans-pricing file follows the same shape. Here is Anthropic's Claude Sonnet 4.6 entry, abbreviated:

```yaml
specification: API Commons Plans
provider: Anthropic
plans:
  - id: anthropic-claude-sonnet-4-6
    name: Claude Sonnet 4.6
    type: usage-based
    entries:
      - label: Input tokens (<=200K)
        type: metered
        metric: tokens
        unit: 1000000
        price: '3.00'
      - label: Input tokens (>200K)
        type: metered
        metric: tokens
        unit: 1000000
        price: '6.00'
      - label: Output tokens (<=200K)
        type: metered
        metric: tokens
        unit: 1000000
        price: '15.00'
      - label: Cache read
        type: metered
        metric: tokens
        unit: 1000000
        price: '0.30'
```

Stripe's payments take rate, with the actual fee structure and per-channel breakdown:

```yaml
plans:
  - id: stripe-payments-standard
    name: Payments — Standard
    entries:
      - label: Domestic card transaction
        type: metered
        price: 2.9% + $0.30
      - label: International card surcharge
        type: metered
        price: +1.5%
      - label: Currency conversion
        type: metered
        price: +1.0%
```

Every reconciled rate-limits file documents the actual headers each provider returns. GitHub's:

```yaml
headers:
  limit: x-ratelimit-limit
  remaining: x-ratelimit-remaining
  used: x-ratelimit-used
  reset: x-ratelimit-reset
limits:
  - name: Authenticated (Personal Access Token)
    scope: user
    metric: requests_per_hour
    limit: 5000
  - name: GitHub App (Enterprise Cloud)
    scope: installation
    metric: requests_per_hour
    limit: 15000
secondaryLimits:
  - name: Concurrent Requests
    scope: shared REST+GraphQL
    limit: 100
  - name: REST Endpoint Points Per Minute
    scope: user
    limit: 900
```

Every reconciled FinOps file maps the provider's billing into the FOCUS column set:

```yaml
specification: FinOps Framework
provider: Stripe
alignedWith:
  framework: FinOps Foundation Framework
  dataSpec: FOCUS
  dataSpecVersion: '1.3'
focusColumns:
  ServiceName: Stripe
  ServiceCategory: Payments
  ProviderName: Stripe
  PublisherName: Stripe, Inc.
  BillingCurrency: USD
meters:
  - name: card_transactions
    unit: transaction
    aggregation: sum
    dimensions: [country, card_brand, card_type, currency]
  - name: transaction_volume
    unit: USD
    aggregation: sum
  - name: radar_screened_transactions
    unit: transaction
    aggregation: sum
```

The shape is consistent. The dimensions match what each provider actually exports on a billing report. An agent or FinOps platform consuming these can do real cost prediction, real allocation, real chargeback — without scraping HTML pricing pages.

## What This Exposed About the State of API Pricing Transparency
Reconciling 184 providers produced one observation strong enough to call out: the gap between "we have an API" and "you can predict your bill" is enormous, even for providers I would have called transparent.

The frontier AI labs (Anthropic, OpenAI, Cohere, Mistral) are the most transparent class of provider in the network. Per-token pricing is fully published. Rate limits are tier-by-tier documented. Headers are specified. Discount opportunities (caching, batch, committed-use) are in the docs. This is what every API provider's pricing posture should look like in 2026. But sadly it doesn't.

The classic SaaS providers with API access are mid-transparent. Stripe, Twilio, Datadog, Cloudflare publish per-product pricing. The plans tiers are clear. The rate limits are buried but findable. The FinOps mapping is implicit but constructible, but not provided in a a machine-redabale format.

The Fortune 500 enterprises with API products almost never publish API pricing. AT&T Network APIs, Verizon ThingSpace, Mastercard, Visa, FedEx, UPS, Walmart Marketplace, Booking.com, Expedia — every single one of these is "contact partner sales for pricing." The developer portals exist. The OpenAPI specs are sometimes published. The commercial terms are universally not. That whole category got reconciled with the partner-contract-only pattern in this pass; if those companies want to be discoverable by AI agents at any point in the next decade they are going to have to publish more than a developer portal that requires a login by a human.

The mega-platforms (AWS, Google Cloud, Azure, IBM, Oracle) have so many products that per-product reconciliation is a project all by itself. Each of these landed at platform-overview level in this pass — pointers to the vendor pricing calculator, the major service families catalogued, the FinOps principles spelled out, and the FOCUS guidance applied. Per-service AWS pricing is feasible work; it is just not the same project as the rest of this.

## What Comes Next

The Tier 1 reconciliation is the floor, not the ceiling. The next steps:

**Sample Tier 2.** I have not yet validated how often Tier 2 providers actually publish API pricing. My intuition is that maybe a third of the Fortune 500 / strong-API-surface set has reconcilable pricing on a public page; the other two-thirds are partner-contract-only. The right next step is to sample 50-100 Tier 2 providers across categories and find out.

**Wire the artifacts into APIs.json.** The new files exist in each repo, but the `apis.yml` index does not yet list them in the `properties` array of each API entry. They should — it is exactly the same pattern as how OpenAPI, JSON Schema, JSON-LD, and Spectral rules are referenced today. That is a one-script update.

**Publish the artifacts at apis.io.** The [APIs.io developer portal](https://apis.io) just rebuilt with nine static feeds. Plans, rate limits, and finops should become the next three feeds — `plans.apis.io`, `rate-limits.apis.io`, `finops.apis.io` — with the same compact JSON shape and CORS-friendly format the existing nine feeds use. An agent doing FinOps on a multi-provider stack should be able to fetch one URL per dimension and get the entire network's data.

**Surface them as Naftiko capabilities.** The capability runtime that proxies a paid third-party API is the place these artifacts get most useful — gating the call before it incurs cost, picking the cheaper of two equivalent providers, attributing the spend back to a workspace. That is a separate post but the groundwork is now in place.

**Get to fix-mode for Tier 1.** The 184 reconciled providers are best-effort against a rapidly moving target. Pricing changes; the scripts that produced the artifacts will need to re-run. The reconciliation pattern will evolve into a CI job that re-fetches each Tier 1 vendor's pricing page on some cadence and proposes diffs. This will take time to rollout.

## The Pitch
Every API provider should publish a `plans/`, `rate-limits/`, and `finops/` directory next to their OpenAPI spec. The schemas exist. The publishing convention exists (APIs.json & Naftiko Capabilities). The reconciliation pattern is now demonstrated against 184 well-known providers with cited sources, which can be used to further validate and rate providers. The environment for an AI agent or a FinOps platform to reason about API spend across vendors is in place.

I will have to align the work in this sprint with [AP2 (Agent Payments Protocol), x402 Payment, and Universal Commerce Protocol (UCP) that I was learning about a couple weeks back](https://apievangelist.com/2026/04/20/learning-about-standards-via-cloudflare-radar-ai-insights/). There is so much work to make the rubber meet the road here and move from fantasy and specification to something that will actually work at scale, and make sense to API providers. We have a long ways to go when it comes to automation as part of the API economy, but the urgency applied by the agentic discussions is looking to light the fire under the ass of API providers. As articulated in my application research the other day, we have some serious behaviorial changed needed to level everything up, so the fire needs to be hot.