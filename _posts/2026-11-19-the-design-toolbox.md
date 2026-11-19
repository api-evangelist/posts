---
published: true
layout: post
title: 'The Design Toolbox'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-design-toolbox.png
date: 2026-11-19 15:00:00 +0000
author: Kin Lane
tags:
  - Design
  - Patterns
  - HTTP
  - TCP
  - Pricing
  - Plans
  - Governance
---
I get asked a version of the same question a lot: what are all the ways you can design an API? People usually mean REST versus GraphQL versus gRPC, but that is only the top layer. Underneath it sit hundreds of smaller decisions, such as how you paginate, how you make writes safe to retry, how you tell people a version is going away, and how you frame a message on a raw socket. Around it sit the decisions nobody files under "design" but that shape every integration just as much: what it costs, what the limits are, what the terms say, and who is allowed in. So I sat down and wrote them all out, and the result is [The Design Toolbox](/design-toolbox/).

## What is in the toolbox

There are 258 patterns in it right now, across twenty-two categories. The HTTP side covers architectural styles, resource design, query patterns, write semantics, asynchronous and streaming patterns, representation, versioning, security, traffic management, caching and resilience. The TCP side covers messaging patterns like publish/subscribe and competing consumers, framing and encoding, connection management, flow control and the topology of the servers and proxies in between. A growing set at the end covers the patterns forming around AI agents: tool calling, agent-readable errors, scoped agent credentials and agent-to-agent messaging.

Every pattern gets the same five things. What it is. When you should use it. What to watch out for. A concrete example, whether that is a header, a URL, a payload or a protocol frame. And the standard or reference behind it, which is usually an RFC, a specification or the published guidance from someone who learned it the hard way. Each pattern is also tagged as foundational, common, advanced or emerging, because a team designing its first API does not need DPoP and HTTP message signatures on day one, but it does need status codes and problem details.

## The business of APIs is design too

I added a business and pricing section, and a policy and legal section, because I have watched too many well-designed APIs fail at the pricing page. Free tiers, metered and tiered pricing, committed use, outcome-based pricing, token-based pricing, marketplaces, overage policy, SLAs and support tiers are all design decisions with tradeoffs. They deserve the same treatment as cursor pagination. The same goes for terms of service, data licensing, licensing the API definition itself, AI usage preferences, compliance attestations, regulatory alignment and deprecation policy. A developer evaluating your API hits these about as early as they hit your OpenAPI, and increasingly an agent hits them first.

## Connected to what APIs.io tracks

This is where the toolbox is more than a list. Many of these patterns are things we measure across every provider in the [APIs.io](https://apis.io) catalog: [plans](https://apis.io/plans/), [rate limits](https://apis.io/rate-limits/), [SLAs](https://apis.io/sla/), [terms](https://apis.io/terms/), [privacy](https://apis.io/privacy/), [data licenses](https://apis.io/data-licenses/), [AI preferences](https://apis.io/ai-preferences/), [compliance](https://apis.io/compliance/), [regulations](https://apis.io/regulations/), [eligibility](https://apis.io/eligibility/), [FinOps](https://apis.io/finops/), [deprecation](https://apis.io/deprecation/), [security](https://apis.io/security/), [scopes](https://apis.io/scopes/), [AsyncAPI](https://apis.io/asyncapis/), [Arazzo](https://apis.io/arazzos/), [overlays](https://apis.io/overlays/), [rules](https://apis.io/rules/), [skills](https://apis.io/skills/) and more. Wherever a pattern lines up with one of those sections, the toolbox links straight to it. You can read what a pattern is and then go see which companies actually do it, and how. Tick "Tracked on APIs.io" and the table narrows to just those patterns.

## How to use it

Search for anything, whether that is "idempotency", "429", "Kafka" or "overage", and the table filters as you type, across names, examples and standards. Filter by layer (HTTP, TCP or both), by maturity, or by category. Click a row to open it, and each pattern has its own link you can drop into a design review or a Slack thread. The whole thing is [available as JSON](/assets/data/design-toolbox.json) if you want to pull it into your own style guide, governance rules or agent context.

I don't think this is complete, and I don't think it ever will be. Pattern names vary between communities, plenty of these overlap, and new ones keep appearing as agents start calling APIs at scale. Treat it as a working toolbox rather than a taxonomy, and if you see something missing or wrong, tell me. I'll keep adding to it, and I'll keep connecting it to what we measure across the API landscape, because a pattern means a lot more when you can see who is using it.
