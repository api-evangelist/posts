---
published: true
layout: post
title: 'Gateways Count Every Token And Charge For Almost None Of Them'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/gateways-count-every-token-and-charge-for-almost-none-of-them.png
date: 2026-10-23
author: Kin Lane
tags:
  - API Economics
  - API Gateway
  - Policies
  - AI
  - Monetization
  - FinOps
---
Last month I came out of Josh Twist's talk on MCP monetization in Stockholm arguing that [API monetization is falling flat, and maybe it is the word](https://apievangelist.com/2026/10/23/api-monetization-is-falling-flat-maybe-it-is-the-word/). AI puts a cost on both sides of every call, so we should stop talking about monetization and start talking about API economics. I wanted to see whether the infrastructure agrees. The place an API's economics actually get enforced is the gateway, so I went and read the gateways.

Twelve of them: Zuplo, Azure API Management, Apigee, MuleSoft, Kong, Apache APISIX, Traefik, Tyk, Gravitee, WSO2, Envoy and Amazon API Gateway. Eleven publish a catalog of the behaviors you can attach to an API at runtime. They call them policies, plugins, middleware or filters, but they mean the same thing. Amazon is the one without a catalog. I read every entry, 884 in all, and sorted them into eighteen areas so they could be compared side by side.

## Area by gateway

Here is the whole thing. Click any cell to see the policies behind the number, click an area or a gateway to see all of it, or filter for a term like `token`, `cost` or `meter`. Start with the `ai` row, then look at `monetization` just below it.

{% include gateway-policy-matrix.html %}

## AI is the fastest-growing thing a gateway does

AI is now the largest area across all twelve gateways, with 120 of the 884 entries. WSO2 has 34, Kong 31, Zuplo 19. A year or two ago most of these catalogs had none. Token limits, semantic caching, prompt guards, PII scrubbing, model routing and fallback all now repeat from vendor to vendor under near-identical names. The industry has worked out what an AI gateway does a lot faster than anyone has written it down.

Look at which of those AI policies are about money, and a pattern shows up. About two dozen are cost controls: Azure's token limit and token metrics, Apigee's `LLMTokenQuota` and `PromptTokenLimit`, MuleSoft's token-based rate limit, Gravitee's prompt token tracking, and WSO2's `llm-cost`, `llm-cost-based-ratelimit` and `cost-based-model-routing`. Then there are the semantic caches, which exist mostly so you don't pay for the same answer twice.

Every one of these points inward. They protect the provider's own model bill. They count tokens so the provider [doesn't get the AI bill that is the cloud bill on steroids](https://apievangelist.com/2026/08/10/your-ai-bill-will-be-your-cloud-bill-on-steroids/). That is the cost side of API economics, and the gateways have built it fast.

## Monetization didn't grow with it

Then look at the other side, charging the consumer for the value they get. Across all twelve gateways there are 10 monetization entries, at four gateways:

- **Zuplo**: a native monetization policy, plus Amberflo, Moesif and OpenMeter integrations
- **Kong**: native entitlement enforcement and metering-and-billing, plus Amberflo and Moesif
- **Apigee**: one monetization limits check
- **APISIX**: a Lago integration

Six of those ten are hand-offs to a partner's billing system. Azure, MuleSoft, Gravitee, WSO2, Tyk, Traefik, Envoy and Amazon have nothing in their catalogs. WSO2 is the sharpest example. It has the most AI policies of any gateway, 34, including several that calculate what an LLM call costs, and no policy that charges anyone for it.

So the gateway knows, call by call, exactly what serving an agent costs. In most cases it has no built-in way to turn that number into a price, a plan or an invoice. A gateway that can compute the cost of a call but not attach a price to it is only doing half the work.

## Why this is the economics problem

This is the gap I was pointing at last month. When the consumer was a developer reading a pricing page, it was fine for billing to live somewhere other than the gateway. Pricing lived in a contract, metering ran in a nightly batch, and the invoice went out at the end of the month. An agent doesn't read your pricing page. It decides what to call based on what it can see at the moment of the call, at a volume no human integration ever produced. Against that consumer, the cost and the price have to sit in the same place, at the same time, in the request path.

The gateways have done half of that. They meter tokens, cap spend and route to cheaper models. The other half is entitlements, per-call and per-tool prices, plans an agent can read, and payment protocols like x402 that answer with real terms. That half barely exists as policy yet. When I asked 616 MCP servers, [five put a price in a field a machine can read](https://apievangelist.com/2026/10/16/five-mcp-servers-put-a-price-in-the-tool-in-four-different-shapes/). When I [set a baseline for the transactional API economy](https://apievangelist.com/2026/10/15/nobody-is-forecasting-the-transactional-api-economy/), eight endpoints answered an unpaid call with payment terms. The gateway catalogs tell the same story from the infrastructure side.

## What I expect to change

AI and monetization need to grow together, and right now only one of them is growing. I expect the monetization row in this table to fill in over the next year, because providers are going to feel the cost policies working and still watch the margin disappear. Measuring cost tells you how much you lose on each call. Pricing is what lets you charge for it.

The gateways that move first will be the ones that treat cost and price as one policy area, API economics, rather than as AI on one side and someone else's billing system on the other. I'll re-read these catalogs every quarter and publish the movement alongside the transactional baseline. The standing version of this research, with the full dataset, lives on the [standards research page](https://standards.apievangelist.com/research/gateway-policies/).
