---
published: true
layout: post
title: 'Your Portal Has A Machine-Readable Twin'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-portal-has-a-machine-readable-twin.png
date: 2026-11-19 13:30:00 +0000
author: Kin Lane
tags:
  - Agents
  - Developer Portals
  - Well-Known
  - Discovery
  - APIs.json
  - Agent Readiness
---
There is a question I get asked a lot right now. Do agents replace the developer portal, the documentation and the SDKs? My answer is no. It's not about replacement. It's about balancing.

Your developer portal has a twin now. The homepage of your portal is for humans, and its machine-readable twin lives in `/.well-known` on your domain. Every building block you've invested in for humans needs a version an agent can consume, and you are going to be running both for a long time.

## The twin of the homepage

When a developer lands on your portal they get a getting started page, a list of APIs, a link to the docs, maybe a pricing page. When an agent arrives, it needs the same orientation in a form it can parse. There are a handful of ways to do that today:

- An RFC 9727 API catalog at `/.well-known/api-catalog`.
- An [APIs.json](https://apisjson.org) index pointing at every API and its supporting resources.
- JSON Home.
- An AI catalog.
- An `llms.txt` file.
- A `robots.txt` that actually says what you want crawled.

You pick one, or a couple, that fit how you work. The important thing is that there is a predictable place an agent can start. Across APIs.io, the [Well-Known Catalog](https://apis.io/rating/dimensions/well-known-catalog/) dimension is satisfied by 1,974 providers, 4.8% of the 41,129 it applies to. Most portals don't have a twin yet.

## Every building block needs both

The homepage is just the start. Walk through the building blocks of a healthy API program and ask whether each one has a human version and an agent version:

- **Contracts** — docs for people, OpenAPI and JSON Schema for machines.
- **Authentication** — a getting started guide, and machine-readable auth and scopes. The [Machine-Readable Auth](https://apis.io/rating/dimensions/auth-clarity/) dimension is there for this reason.
- **Rate limits** — a page that explains them, and headers that tell an agent where it stands mid-run. The [Rate-Limit Signaling](https://apis.io/rating/dimensions/rate-limit-signal/) dimension is published in some form by 12,458 providers, but only 1,138 get full credit for live headers.
- **SDKs** — a page listing them, and an index an agent can resolve to a package.
- **Pricing and plans** — a pricing page, and plans an agent can read and compare.
- **Terms, privacy and trust** — legal pages for humans, machine-readable policies for agents.

When I score a provider, that pairing is most of what I'm looking at. Do you have the human experience, and does it have a twin?

## Is this a transition or the end state?

I get asked whether dual entry points are a temporary phase. I think it's both, for quite a while, probably indefinitely. My own sites went from roughly 80% human traffic and 20% bots to the reverse over about five years. You might think that means I should stop investing in the human pages. But the bots still index the human pages. They read the docs, the blog posts and the guides as much as they read the machine-readable artifacts. The human version is training data, context and grounding for the agent version.

So I'm not turning anything off. I'm making sure every human page has a machine-readable twin, and every machine-readable artifact links back to the human context that explains it.

## Don't turn things off yet

The mistake I worry about is providers overcorrecting. Blocking bots wholesale at the CDN because traffic is up, or letting the human docs rot because the AI team is getting all the budget. Both cut you out of the conversation. Agents discover you through the same public surface humans do, and humans still sign the contracts.

Balance is the work. Keep the portal for people, build its twin for machines, and keep the two in sync. That's what an API program looks like now.
