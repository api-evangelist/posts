---
published: true
layout: post
title: 'Nobody Is Forecasting The Transactional API Economy'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/nobody-is-forecasting-the-transactional-api-economy.png
date: 2026-10-15
author: Kin Lane
tags:
  - API Economy
  - Monetization
  - x402
  - Agents
  - Plans
  - Pricing
  - APIs
---
When I sat down with [Zdenek Nemec](https://conversations.apievangelist.com/store/2026-09-25-zdenek-nemec/) last month, he made a point I have not been able to shake. Before 2020, direct monetization was only ever a small slice of why companies built APIs. Maybe ten percent. The rest of the reasons were partnerships, integrations, mobile, internal efficiency, reach. The truly transactional APIs, the ones where you pay per call for a piece of data or a single action, were a sliver: enrichment lookups, sending a text message, checking the weather.

Now there is a new kind of buyer. Agents can, at least in principle, find an API, onboard into it, pay for a call and use the result without a human in the middle. Payment protocols like x402 and the Machine Payments Protocol exist specifically for that. So Zdenek's question is simple: with these new actors, how does the transactional slice of the API economy grow? In his words, "I don't think people are talking enough about it. I don't know if anybody's talking about it at all, actually."

I agree, and I want to put a stake in the ground so we can actually measure it.

## Where it stands today

Here is the baseline from the [APIs.io](https://apis.io/) catalog, as of this week:

| Signal | Count |
|---|--:|
| Providers with a plans artifact | 10,569 |
| Providers with documented rate limits | 9,778 |
| Providers with a FinOps mapping | 6,629 |
| Agent cards that declare x402 ([measured in September](https://apievangelist.com/2026/09/21/97-agent-cards-say-x402-eight-of-them-answer-a-402/)) | 97 of 427 |
| Of those, endpoints that actually answer an unpaid call with a 402 and payment terms | 8 |

Those first three numbers describe what a provider publishes about how it charges and meters, not whether an agent could actually buy anything. The last two describe the agent-native payment layer, and the gap between them is the story. Ninety-seven say x402. Eight answer with real payment terms. And almost all of the ninety-seven are agent-native operators selling to other agents, not the companies that move goods and money.

## The line agents will not cross soon

Zdenek also drew the line I think every forecast needs. Onboarding into a weather API, an SMS API or an enrichment API is technically, legally and commercially straightforward. You can see that becoming the norm with x402 and MPP. Onboarding into a CRM, or asking a logistics provider to ship six containers from Prague to New York City, is a different thing entirely. There are contracts, licensing, legal review, business decisions and workflows that cross many systems. As he put it, "even as I'm saying it, I don't believe it right now."

So the transactional API economy will not grow evenly. It will grow first where the call is small, the price is published, there is no contract to sign, and there is no sales conversation. It will grow last, if at all, where every one of those is missing.

## What I will measure

I would rather forecast with numbers than with vibes, so here is what I am going to track across the catalog from this baseline forward:

- **Self-serve signals.** Published pricing, keys without a sales call, a sandbox, no contract required. The things that put an API on the transactional side of Zdenek's line.
- **Per-call pricing.** Usage pricing, credit packs and per-tool pricing like [Pipedrive putting a price on every tool call](https://apievangelist.com/2026/09/28/pipedrive-put-a-price-on-every-tool-call/).
- **Payment protocols that answer.** Not who declares x402 or MPP, but whose endpoints respond to an unpaid call with real terms.
- **Who is doing it.** Whether the providers adopting these are the agent-native frontier or the companies carrying real transaction volume.

I will re-run this every quarter and publish the movement. If the transactional slice of the API economy is about to grow the way some people believe, these numbers will show it. If it is not, they will show that too. Either way, somebody should be writing it down, and it might as well be me.
