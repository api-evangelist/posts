---
published: true
layout: post
title: What 36 Providers Taught Me About Programmatic API Onboarding
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-36-providers-taught-me-about-programmatic-api-onboarding.png
date: 2026-07-02
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - APIs.json
  - Agents
  - AI
---

A couple of months ago I wrote that [we standardized the API but we didn't standardize the application](https://apievangelist.com/blog/2026/05/01/we-standardized-the-api-we-didnt-standardize-the-application/). Then [SoundCloud showed me](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) what the fix looks like from a provider's side: one file, no dependencies, a browser pops for OAuth, and you walk away with a `client_id` printed to your terminal. Since then I have been holding that bar up against the API providers, gateways, and identity platforms I depend on, writing a single-file onboarding script for each one. I am 36 providers in — [Kong Konnect](https://apievangelist.com/2026/06/30/kong-konnect-has-two-front-doors/), [Apigee](https://apievangelist.com/2026/07/02/apigee-and-programmatic-api-onboarding/), AWS, Azure, Slack, Stripe, Okta, Auth0, Twilio, and the rest of the list I'll keep publishing every couple of days.

Someone asked me on LinkedIn whether there is room for a new API standard here, given everything happening with agents. I said I was putting thoughts together. This post is those thoughts, and the answer surprised me, because I didn't find it by designing anything. I found it by looking back across 36 working scripts and noticing they had all been quietly telling me the same thing.

## The Scoreboard

Every one of those scripts encodes an honest answer to one question: can a stranger — or their agent — show up and get working credentials without a human clicking around a console first? Across 36 providers, the answer sorts into three doors.

**Self-serve (the open door).** A public flow exists where you start from nothing and end with credentials. Exactly one provider in my set fully clears the bar: GitHub, whose App Manifest flow lets you approve an app in the browser and exchange a one-time code — unauthenticated — for a client ID, secret, webhook secret, and private key in a single response. SoundCloud is the other member of this club. Honorable mention to Stytch, which ships genuinely anonymous RFC 7591 dynamic client registration, built explicitly for the agentic moment. That's it. Out of everything I tested.

**Bootstrap-token (the keyed door).** Twenty-five providers have a real management API for creating applications and minting credentials — clean resource models, stable endpoints, everything scriptable — except the first token. That one a human mints in a console, once, and pastes into an environment variable. Apigee behind Google Cloud IAM. Kong Konnect behind a `kpat_` or a portal login. Cloudflare's tokens-minting-tokens model. Slack's app configuration tokens. Stripe, Twilio, Okta, Entra, MuleSoft, WSO2, the AWS services. Seven more are hybrids: the OAuth dance itself is automated in a browser, but the application it authenticates against was created by hand in a dashboard — Atlassian, HubSpot, Salesforce, Shopify, Square.

**Console-only (the human door).** For three providers there is no complete programmatic path at all. PayPal — the company positioning itself for agentic commerce — has no API to create a REST app or read back its credentials. Discord's applications are Developer Portal only. Azure API Management wants an ARM-authenticated principal inside the subscription.

One truly open door out of 36. That is the honest state of programmatic API onboarding in the middle of the agentic AI boom, from companies who are, they assure me, all in on AI.

## What All 36 Scripts Kept Telling Me

Here is the part I didn't expect. Every script, no matter which door it walked through, ended up encoding the same six facts in its header comments and environment variables:

1. **The bootstrap** — what a human must do once before anything can be automated, stated in one sentence.
2. **The credential shape** — what you walk away with, and what the provider calls it. Apigee's `consumerKey` is a `client_id`. Azure's subscription key is an `api_key`. Akamai hands you a quad. GitHub hands you five things including a PEM.
3. **The gates** — plan tiers, verification queues, admin approvals, ToS acceptance, org membership. The things that sit between "app created" and "app usable."
4. **The idempotency rule** — what happens when the application already exists. A 409 that routes to a read-back. A list-and-match by name. An exit code that says "exists, but the secret is unrecoverable."
5. **The scope model** — and there were at least six: scope strings, API products, permission matrices, capability checkboxes, product tiers, resource selection.
6. **The output contract** — canonical `client_id=` / `api_key=` lines and a credential JSON on stdout.

Thirty-six scripts. One implicit schema, instantiated thirty-six ways. When every bespoke thing you write has the same shape, that shape is a specification asking to be written down.

## Not a New Protocol. A Missing Descriptor.

So is there room for a new standard? Yes — but not where I first assumed. The credential handshake itself is getting standardized without me. The Model Context Protocol's authorization spec now recommends Client ID Metadata Documents, where the `client_id` becomes a URL and domain ownership is the trust anchor. The IETF has a growing cluster of drafts on OAuth for AI agents acting on behalf of users. RFC 7591 dynamic client registration has been sitting there for a decade. That layer has plenty of smart people on it, and the right move is to point at their work, not compete with it.

What nobody is standardizing is everything *around* the handshake — the account, the plan gate, the terms of service, the verification queue, the provider's private vocabulary, the honest answer about which door even exists. OpenAPI describes what an API does. OAuth and its descendants describe the handshake. Nothing describes what it takes to get to the handshake. That is the crack, and after 36 providers I can describe its exact shape, because I have been falling into it every other day since June.

So I wrote it down. I am calling it the **API Onboarding Descriptor** — a machine-readable JSON document, discoverable at `/.well-known/api-onboarding` and referenced from an APIs.json index, that declares the provider's maturity level (self-serve, bootstrap-token, or console-only — no marketing tier names, just the truth), the account and plan prerequisites, an explicit agent policy field, the verification gates and their expected latency, the registration mechanisms that exist with pointers to DCR or CIMD where the provider supports them, the credential shapes mapped from provider vocabulary to canonical fields, the scope model, and — this is the part I care most about — an executable flow: the ordered HTTP steps, with per-status recovery and output mappings, sufficient for a generic engine to run.

The specification now lives at [API Commons](https://apicommons.org/onboarding/), with the JSON Schema, the first descriptors, the 36-provider extraction dataset, and the engine all in the [api-commons/api-onboarding](https://github.com/api-commons/api-onboarding) repository.

That last part is the proof test, and it is what makes this different from another aspirational spec. I wrote one generic engine, `api-onboard.mjs`, in the same spirit as all the per-provider scripts — one file, Node stdlib, no npm install — that takes a descriptor instead of a provider name:

```
node api-onboard.mjs apigee.onboarding.json --name "My Agent App" \
  --developer_email "agent@example.com" --first-name "Ada" --last-name "Lovelace"
```

It reads the descriptor, tells you what the provider still requires of a human (`--requirements`), executes the flow — browser PKCE popup, pasted bearer token, basic auth, portal cookie login, whatever the descriptor declares — and prints the same `client_id=` lines every script in this series has printed. If the engine can onboard a provider from its descriptor alone, the descriptor is sufficient. Where it can't, the descriptor grows a field. That feedback loop *is* the spec process, and it is how the schema was derived in the first place: by induction from the corpus, not invention on a whiteboard. I have retrofitted the first descriptors — SoundCloud, GitHub, Stytch, Apigee, Kong Konnect, PayPal — one from each structural family the 36 revealed, and the remaining thirty will follow the same way the scripts did.

## What Happens Next

A few things, and the first one is already done: I published descriptors for my own APIs, the same way I am asking every provider to. [apis.io/.well-known/api-onboarding](https://apis.io/.well-known/api-onboarding) describes the APIs.io API and MCP server — keyless at the free tier, honest in its `gaps` about the paid-key issuance that still runs through a human. [apievangelist.com/.well-known/api-onboarding](https://apievangelist.com/.well-known/api-onboarding) describes the API Evangelist API, which is fully open, so its gaps list is empty — that is what the open door looks like written down. Eating my own dog food already improved the spec: my APIs needed an `open` mechanism type the original schema didn't have, because none of the 36 providers I profiled had a door that was simply open.

From there: the descriptor becomes a property type in APIs.json, so the index that already tells you where a provider's OpenAPI and documentation live can also tell you what it takes to onboard. APIs.io starts surfacing onboarding maturity on provider pages, because a public scoreboard has a way of moving providers that my blog posts alone do not. The gates and gaps sections become lintable — if you publish a descriptor claiming self-serve while your signup page runs a CAPTCHA, that contradiction is now machine-readable. And I take the descriptor to the people standardizing the adjacent layers — the MCP authorization folks, the IETF OAuth drafts, the SLA4OAI work on the pricing and SLA layer — as the discovery-and-paperwork complement to the handshake they are already fixing.

If you are an API provider reading this, the ask is smaller than you think. I am not asking you to rebuild your portal. I am asking you to tell the truth about your front door in a JSON file, and then — since you are all in on AI, you keep saying so — to start closing the gaps that file forces you to admit. SoundCloud did it with one script. GitHub did it years ago and barely mentions it. The door is the standard. Everything else is just describing where it is.
