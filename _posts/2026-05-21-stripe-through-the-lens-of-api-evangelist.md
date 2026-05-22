---
published: true
layout: post
title: "Stripe Through the Lens of API Evangelist"
date: 2026-05-21
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-under-socialism-docks-oakland-4.jpeg
category: "Blog"
tags:
  - Stripe
  - Payments
  - OpenAPI
  - AsyncAPI
  - Capabilities
  - FinOps
excerpt: "Stripe is the API that other APIs get measured against. I want to slow down and walk through what their API operation actually looks like from the outside in 2026 — 57 OpenAPIs, 109 webhook events, 322 capabilities, a published FinOps framework, and the gaps that still show through."
---
Stripe is online payment processing for internet businesses — a suite of payment APIs that powers commerce for businesses of every size. They are also the API operation that every other API operation in this network gets measured against, and have been for the better part of a decade. I want to slow down and walk through what their operation actually looks like from the outside in 2026 — what they expose as APIs, what they emit as events, what they decompose into capabilities, what they price transparently, and where the gaps still show through. The artifacts I am pulling from live in the [api-evangelist/stripe](https://github.com/api-evangelist/stripe) repository, which is one of 5,127 provider profiles in the [API Evangelist network](https://github.com/api-evangelist).

## The Surface

Stripe publishes 57 distinct APIs, each with its own OpenAPI spec. I am not exaggerating that number — `apis.yml` lists 57 `aid` entries and the `openapi/` directory holds exactly 57 files matching `stripe-<product>-api-openapi.yml`. Two years ago I [wrote about breaking Stripe’s monolithic OpenAPI into 49 modular files](https://apievangelist.com/2024/02/08/stripes-monolithic-openapi-vs-twilio-modular-openapis/) because the mono spec was bloating every tool I imported it into. Today the catalog has grown to 57, and what was a single bloated file is now a fleet of right-sized contracts.

The surface decomposes cleanly along business lines:

- **Payments core** — Payment Intents, Payment Methods, Payment Method Configurations, Setup Intents, Charges, Sources, Tokens.
- **Hosted and embedded UX** — Checkout, Payment Links, Customer Portal, Link, Apple Pay.
- **Billing** — Billing, Billing Meters, Subscriptions, Plans, Prices, Products, Invoices, Credit Notes, Coupons, Promotion Codes, Quotes, Entitlements, Revenue Recognition.
- **Money movement** — Payouts, Transfers, Top-ups, Refunds, Disputes, Reviews, Application Fees, Connect.
- **Banking-as-a-service** — Treasury, Issuing, Financial Connections, Forwarding.
- **Compliance and risk** — Identity, Radar, Tax, Climate, Crypto On-Ramp.
- **In-person and reporting** — Terminal, Sigma, Reporting, Files, Events, Country Specs, Exchange Rates, Ephemeral Keys, Test Helpers, Webhooks.

Every one of the 57 specs is OpenAPI 3.0.0 and every operation hangs off a `/v1/` path. Stripe’s payment-intents spec is pinned to `info.version: 2023-10-16` — and so is every other spec in the catalog. That date is the story: Stripe runs one synchronized API version across 57 products. Most providers can’t even synchronize across three.

## The Events

The async surface is where Stripe pulls farther ahead of the field. `asyncapi/stripe-webhooks-asyncapi.yml` is a single AsyncAPI 2.6.0 document that catalogs 109 webhook event types — and those events cover the entire lifecycle of every transaction Stripe processes:

- `charge.succeeded`, `charge.failed`, `charge.refunded`, `charge.dispute.created`, `charge.dispute.funds_withdrawn`, `charge.dispute.funds_reinstated`
- `invoice.created`, `invoice.finalized`, `invoice.paid`, `invoice.payment_failed`, `invoice.voided`, `invoice.marked_uncollectible`
- `payment_intent.succeeded`, `payment_intent.payment_failed`, `payment_intent.requires_action`, `payment_intent.partially_funded`
- `customer.subscription.created`, `customer.subscription.trial_will_end`, `customer.subscription.paused`, `customer.subscription.pending_update_expired`
- `radar.early_fraud_warning.created`, `payout.failed`, `tax.settings.updated`

If you have ever integrated a payment API that exposes a handful of events and expects you to poll for the rest, the difference is jarring. Stripe’s position is that anything material that happens inside their system is an event you can subscribe to and reason about externally. There are no polling holes. There is also a `Stripe Webhook` API listed alongside the other 56 in `apis.yml` — that is the registration surface, separate from the AsyncAPI event catalog. Most providers conflate the two; Stripe doesn’t.

## The Capabilities

The `capabilities/` directory holds 322 YAML files. Each one is a [Naftiko](https://naftiko.io) capability — a self-contained, schema-bound description of one business surface of one Stripe API. Open `capabilities/accounts-account.yaml` and you find a Naftiko 1.0.0-alpha2 document that names the surface (`Stripe Accounts API — Account`), binds to the `STRIPE_API_KEY` environment variable, and declares an HTTP capability against `https://api.stripe.com` with a single `v1-account` resource and 16 operations. Multiply that by 322 files and what you have is Stripe’s entire API surface decomposed into things an agent can pick up, gate, and compose.

Three workflow-level capabilities sit above the per-operation files — Payment Processing, Subscription Billing, and Financial Operations — alongside eight shared API definitions for the most-reused objects (Payment Intents, Checkout, Customers, Billing, Invoices, Refunds, Disputes, Payouts). This is the layer where the API stops being a list of endpoints and becomes a vocabulary of business outcomes.

The capability decomposition is not something Stripe publishes themselves — it is something I have generated against their published OpenAPI. But the fact that the decomposition produces 322 coherent, self-contained units (and not 322 fragments) is a credit to how Stripe structured the underlying surface.

## The Money

This is where Stripe is doing work most API providers haven’t even started. `plans/stripe-plans-pricing.yml` is reconciled against [stripe.com/pricing](https://stripe.com/pricing) and carries `reconciled: true` with sourced URLs. It catalogs 11 product-priced plans — not opaque enterprise tiers but actual fee structures:

```yaml
- id: stripe-payments-standard
  name: Payments — Standard
  entries:
    - label: Domestic card transaction
      price: 2.9% + $0.30
    - label: International card surcharge
      price: +1.5%
    - label: Currency conversion
      price: +1.0%
```

Radar is `$0.0002` per screened transaction. Billing is `0.7%` of billing volume on pay-as-you-go or `$620/mo` flat. Tax is `0.5%` per transaction or `$0.50` per API call. Sigma is `$15/mo`. Data Pipeline is `$65/mo`. None of this requires a sales call.

`rate-limits/stripe-rate-limits.yml` is reconciled against [docs.stripe.com/rate-limits](https://docs.stripe.com/rate-limits). Live mode allows 100 req/s for both reads and writes. Test mode is throttled to 25 req/s — and Stripe explicitly tells you not to load-test in test mode. The Search and Files APIs sit at 20 req/s. The policy section names lock contention (concurrent writes to the same object can return 429 with a `lock_timeout`), the `Idempotency-Key` header for safe retries on POST/DELETE, and the live-versus-test split. This is the operational thinking of a team that has been paged in the middle of the night by an integrator who didn’t understand what was happening.

`finops/stripe-finops.yml` aligns Stripe’s billing to the FinOps Foundation [FOCUS v1.3 specification](https://focus.finops.org/focus-specification/v1-3/). It declares Stripe’s pricing category as "Take Rate + Subscription," maps the FOCUS columns (`ServiceName`, `ServiceCategory`, `ProviderName`, `PublisherName`, `BillingCurrency`), and enumerates six meters with dimensions — `card_transactions` (country, card_brand, card_type, currency), `transaction_volume`, `radar_screened_transactions`, `billing_volume`, `tax_calculations`, `subscription_fees`. An enterprise FinOps team can ingest this and immediately attribute Stripe cost to teams, products, geographies, and card brands. Almost no other payment provider publishes this.

## The Contracts

Past the OpenAPI surface there is a second layer of machine-readable artifacts that most providers stop short of:

- **JSON Schemas** (8 files): charge, customer, event, invoice, payment-intent, price, product, subscription. These are the data shapes Stripe considers stable enough to publish as standalone validation contracts.
- **JSON Structures** (3 files): payment-intent, customer, invoice — concrete shape examples for the most-integrated objects.
- **JSON-LD context** (`json-ld/stripe-context.jsonld`): maps Stripe-native terms to schema.org equivalents (Customer → Person, Charge → MonetaryAmount). This is semantic-web work that almost no fintech does.
- **Vocabulary** (`vocabulary/stripe-vocabulary.yml`): 28 defined terms with categories and tags. PaymentIntent gets a one-paragraph canonical definition. Charge, Checkout Session, Customer, Subscription, Invoice — each gets the same treatment. This is rare and underrated.
- **Spectral rules** (`rules/stripe-rules.yml`): 11 linting rules that enforce Stripe’s own conventions — `stripe-versioned-paths` (paths must start with `/v1/`), `stripe-operation-id-camel-case` (PascalCase), `stripe-auth-defined`, `stripe-no-trailing-slash`, `stripe-expand-param-style` (use `deepObject`), `stripe-content-type-json`. The discipline they apply to themselves is now codified.
- **Examples** (3 files): create-payment-intent, create-checkout-session, create-customer — actual request and response payloads.
- **Subway map** (`subway/stripe-subway-map.svg` plus HTML, PNG, PDF, and a `build-map.py` generator): Stripe’s API topology rendered as a tube-style metro map, 57 stations placed by hand with colored lines per product family. It is a visualization, not a contract — but it is the right kind of visualization for a surface this large.

This is what a machine-readable footprint looks like when the provider is paying attention. Most stop at OpenAPI. Stripe goes three layers deeper.

## The Gaps

Stripe is not without gaps. A fair review names them.

The most surprising one is that `blogs/blogs.json` shows `post_count: 0` and `error: no_feed`. The script that walks every provider’s blog and ingests posts could not find an RSS or Atom feed on [stripe.com/blog](https://stripe.com/blog). Stripe writes some of the best engineering content in the industry and they are not syndicating it. In a 2026 world where AI agents discover provider expertise through machine-readable feeds, that is a real omission.

The 57-spec catalog is REST/OpenAPI 3.0.0. Stripe maintains internal gRPC and some GraphQL surfaces — none of that is cataloged here. If they offer those to anyone outside the company, the contracts are invisible.

The 322 capability files include duplicates with a `-2` suffix (e.g., `accounts-account-2.yaml` alongside `accounts-account.yaml`) — that is an artifact of how the OpenAPI decomposition ran twice against overlapping specs, not a Stripe problem, but the network would benefit from a deduplication pass.

The Spectral output in `review.yml` flags `apis-json-apis-baseURL-error` (severity 0) on several of the 57 API entries — `apis.yml` is not declaring `baseURL` on each API. That is a fix in the catalog, not in Stripe.

Pricing transparency stops at Tier 1. Custom pricing — IC+ for high-volume merchants — is "contact sales." That is reasonable at enterprise scale but it does mean an AI agent reasoning about cost at the high end has to fall back to the public take rate as an upper bound.

## What This Operation Tells the Rest of Us

Stripe is what an API operation looks like when the company treats the API as the product. 57 OpenAPI specs synchronized to one version date. 109 webhook events covering every state transition in the system. 322 composable capabilities. Pricing, rate limits, and FinOps published as machine-readable artifacts that an FOCUS-aligned platform can ingest without scraping a pricing page. A vocabulary, a JSON-LD context, and a Spectral rule set the company enforces against itself.

The single thing every other provider should learn from this is the discipline of publishing the *whole* contract — not just the OpenAPI but the events, the rate limits, the prices, the meters, the terms, and the rules that govern them. The single thing Stripe should fix is the missing RSS feed on their blog. Both are small lifts. Both move the needle.

If you want me to do this kind of profile against your own API surface, or against a vendor you depend on, that work lives alongside everything else I publish in the [api-evangelist/services](https://github.com/api-evangelist/services) repo.
