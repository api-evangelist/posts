---
published: true
layout: post
title: What Actually Goes Into Profiling Stripe for API Evangelist and APIs.io
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/profiling-stripe-every-artifact-behind-a-listing.png
date: 2026-07-13
author: Kin Lane
tags:
  - Discovery
  - APIs.json
  - OpenAPI
  - Arazzo
  - Governance
  - MCP
  - Stripe
---

When I tell people I "profiled" an API provider, they picture me grabbing an OpenAPI file and calling it a day. That is not what profiling means anymore, and Stripe is a good place to show why. A modern provider profile is not a document. It is a whole cabinet of machine-readable artifacts, each one answering a different question a human developer or an AI agent would ask before they trust and integrate an API. I want to walk through everything that went into the Stripe profile, because the list itself is the argument for why this work matters.

You can see the two ends of it right now. The human-facing discovery page lives at [apis.io/stripe](https://apis.io/stripe), and the raw, forkable profile that feeds it lives in the [api-evangelist/stripe](https://github.com/api-evangelist/stripe) repository on GitHub. One is where you go to browse and understand Stripe. The other is where every artifact I am about to describe actually lives, versioned, in the open, ready to be pulled into your own tooling. The APIs.io page is the readable face; the GitHub repo is the source of truth.

## The index that holds it all together

At the center of the profile is a single [apis.yml](https://github.com/api-evangelist/stripe/blob/main/apis.yml) file. This is the [APIs.json](https://apis.io) index, and it is the spine of the whole thing. It declares the provider, tags it (Payments, Fintech, Financial Services, Commerce), and then enumerates 57 individual Stripe APIs — Payment Intents, Charges, Customers, Subscriptions, Connect, Issuing, Treasury, Radar, Tax, and on and on — each pointing at its own set of properties. Below the APIs it carries a `common` block that lists everything that applies to Stripe as a whole: security, authentication, workflows, the MCP server, the SDKs, the lifecycle.

Nobody reads apis.yml for pleasure. That is the point. It is the manifest a machine reads so it can find every other artifact without guessing. Everything else in this post is something apis.yml points at.

## The contract layer — what the API is

The foundation is still the interface contract, but it is not one file, it is a stack:

- **196 OpenAPI definitions.** Stripe is huge, so rather than one monolithic spec I split it into per-product OpenAPI files — one for Charges, one for Payment Intents, one for Subscriptions, and so on. This is the machine-readable description of every path, parameter, and response.
- **57 OpenAPI Overlays.** Each API gets an [Overlay](https://github.com/api-evangelist/stripe/tree/main/overlays) that layers my own `x-apievangelist` enhancements on top of Stripe's contract without editing Stripe's contract. That separation matters — Stripe owns the API, I own the annotations, and the overlay is how both stay true at once.
- **An AsyncAPI definition** for Stripe's [webhooks](https://github.com/api-evangelist/stripe/blob/main/asyncapi/stripe-webhooks-asyncapi.yml). Stripe is not just request/response; a huge part of using it is the events it pushes back to you. Webhooks are an API surface, and they deserve a contract too.
- **A GraphQL reference**, because part of profiling honestly is noting where the surface diverges from REST.

The contract tells you the shape of every door. The rest of the profile tells you which doors to walk through, in what order, and whether the building is safe.

## The "what can I actually accomplish" layer

An OpenAPI file lists operations. It does not tell you that charging a customer means creating a customer, attaching a payment method, and confirming a payment intent in sequence. That knowledge — the multi-step journeys — is where most integrations actually live, and it is captured in its own artifacts:

- **24 Arazzo workflows.** [Arazzo](https://github.com/api-evangelist/stripe/tree/main/arazzo) is the OpenAPI Initiative's spec for describing API workflows, and I used it to write out the real jobs people do with Stripe: create a customer and pay, launch a subscription, authorize and capture a payment, charge and refund, create and finalize an invoice, reverse a payout. These are executable, machine-readable recipes, not blog prose.
- **55 forkable integrations.** Stripe's own partner and integration listings, rebuilt as adoptable artifacts you can fork instead of screenshot.
- **54 Postman collections.** So the moment you want to poke at an endpoint by hand, there is a runnable collection waiting.

If the contract answers "what is possible," this layer answers "what do I do." That is the difference between a spec and a solution.

## The data-shape layer

Payments are unforgiving about data. A customer, a charge, an invoice — these objects have precise shapes, and getting them wrong costs real money. So the profile carries the shapes directly:

- **8 JSON Schema files** for the core objects — customer, payment intent, subscription, charge, invoice, event, product, price.
- **3 JSON Structure definitions**, a newer take on describing the same objects.
- **A JSON-LD context**, so Stripe's fields can be linked to shared semantic meaning across providers instead of living as isolated strings.
- **3 worked request examples** — creating a payment intent, a checkout session, a customer — because a schema plus a real example beats either one alone.
- **A vocabulary** of the key terms and concepts across the Stripe platform, so "PaymentIntent" and "SetupIntent" and "Payout" mean the same thing to everyone reading the profile.

## The governance and standards layer

This is the part I care about most, and the part most profiles skip. It is not enough to describe an API; you have to assess it. Three artifacts do that:

- **Spectral rules.** A [governance ruleset](https://github.com/api-evangelist/stripe/blob/main/rules/stripe-rules.yml) that extends `spectral:oas` and encodes Stripe's own conventions — every path starts with `/v1/`, operationIds are PascalCase, and so on. Now the contract can be linted against the provider's actual house style.
- **A conformance ledger.** A plain-language [record](https://github.com/api-evangelist/stripe/blob/main/conformance/stripe-conformance.yml) of which standards Stripe conforms to, with evidence — PCI DSS Level 1, PSD2 Strong Customer Authentication, OAuth 2.0 for Connect, idempotency keys, cursor pagination, signed webhooks — and, just as importantly, which it does not: no OIDC discovery, no RFC 9457 problem+json, no SCIM. Honest "no" is as valuable as "yes."
- **An error catalog.** Stripe does not use RFC 9457; it returns its own `{ "error": { type, code, message } }` envelope. So I documented [that envelope](https://github.com/api-evangelist/stripe/blob/main/errors/stripe-problem-types.yml) — every status, every error type, and remediation notes — so failure is as legible as success.

## The operations and lifecycle layer

You do not integrate a payments API for a weekend; you live with it for years. The profile has to speak to the long haul:

- **A lifecycle artifact** capturing Stripe's date-based versioning (`Stripe-Version` header), its deprecation posture, its status page, and which products are already superseded — Plans by Prices, Sources by Payment Methods.
- **Rate limits**, written down as data rather than left in the docs.
- **Plans and pricing**, so the commercial model travels with the technical one.
- **A FinOps artifact**, FOCUS-aligned, describing Stripe's per-transaction take rates and per-product subscription costs — because cost is an operational property of an API, not an afterthought.
- **A packages manifest** of Stripe's first-party SDKs across Node, Python, PHP, Ruby, Java, Go, .NET, iOS, and Android, each verified against its registry.

## The security and trust layer

Before anyone routes money through an API, they want to know it can be trusted, and how to report it when something goes wrong:

- **Domain security** findings, a **vulnerability disclosure** record, and an **authentication** artifact describing exactly how you authenticate.
- **A probed `/.well-known/` surface** — I actually fetched Stripe's discovery endpoints and recorded what is really there versus what returns an SPA shell — plus the captured **security.txt** and the **MCP OAuth protected-resource** document.

This layer is the difference between "trust me" and "here is the evidence."

## The agentic layer

This is the newest, and the reason all of the above suddenly matters more than it did a few years ago. Agents are becoming first-class consumers of APIs, and they need artifacts shaped for them:

- **An MCP server manifest** alongside Stripe's own hosted server at `mcp.stripe.com`, so an agent can discover Stripe's tools over the Model Context Protocol.
- **An llms.txt** file, the emerging convention for pointing language models at the right documentation.
- **A programmatic onboarding script** — a single-file, zero-dependency [CLI](https://github.com/api-evangelist/stripe/tree/main/onboarding) that reproduces the SoundCloud pattern so an agent can obtain credentials from the command line instead of clicking through a dashboard.

Every well-formed artifact in this profile is also food for an agent. The contract, the workflows, the schemas, the conformance ledger — an agent that can read them can reason about Stripe far better than one left to scrape the docs.

## The human layer

Machines are not the only audience. I also generated a **subway map** of the Stripe API surface — an SVG, PDF, and PNG that turn 57 APIs into something you can take in at a glance — captured **screenshots** of the developer experience, and pulled a run of Stripe's own **blog posts** so the profile reflects a living company, not a frozen snapshot.

## Why all of this matters

Here is the whole argument, plainly. Any one of these artifacts is useful. Together they are something different: a complete, machine-readable, forkable portrait of a provider that answers every question across the full life of an integration — what is it, what can I do with it, what shape is the data, is it well-governed, what does it cost, can I trust it, and can my agent use it without a human in the loop.

APIs.io rolls all of that up into a single score. Stripe currently sits at a composite of **73.3** — in the "exemplar" band, and trending up — with especially strong marks for operational transparency, developer ergonomics, and commercial clarity, and weaker ones for discoverability and contract quality that tell me exactly where the next work goes. That number is not a vibe. It is computed from the presence and quality of the artifacts I just described. This is what a rating grounded in evidence looks like.

That is why profiling is not "grab the OpenAPI." Discovery in the agentic age is not a search box; it is a body of structured, verifiable knowledge about a provider that both people and machines can act on. Stripe earns a deep profile because so many people build on it — but the model is the same for every provider in the network. Browse the readable version at [apis.io/stripe](https://apis.io/stripe), fork the raw artifacts from [github.com/api-evangelist/stripe](https://github.com/api-evangelist/stripe), and if you operate an API, ask yourself how many of these artifacts you could hand someone today. The gap between your OpenAPI file and this list is the work still in front of all of us.
