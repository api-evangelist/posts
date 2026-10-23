---
published: true
layout: post
title: 'API Monetization Is Falling Flat, Maybe It Is The Word'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/api-monetization-is-falling-flat-maybe-it-is-the-word.png
date: 2026-10-23
author: Kin Lane
tags:
  - API Monetization
  - API Value Exchange
  - API Economics
  - Plans
  - FinOps
  - Agents
  - APIs
---
I sat in on Josh Twist's talk on [MCP monetization](https://nordicapis.com/sessions/mcp-monetization/) at the Nordic APIs Summit in Stockholm last week. Zuplo's framing starts from Marc Benioff's line about the end of the UI and the birth of "headless SaaS": a single user can now generate an enormous amount of work against your systems through their swarms of agents, so it is time to make money from all those agents using your data and services. I agree with every word of the problem. And I left the room thinking the same thing I think every time this topic comes up: this is 100 times more important than the attention it gets, and the word we use for it is part of the reason it falls flat.

## Fifteen years of calling it monetization

I have been writing about this since the beginning of this blog. In 2011 it was [API business models and how to choose the right one](https://apievangelist.com/2011/04/20/api-business-modelshow-to-choose-the-right-one-for-you/). In 2014 it was [resource-based versus experience-based pricing](https://apievangelist.com/2014/11/08/resource-base-api-monetization-vs-experience-based-api-monetization/). In 2015 I tried to formalize [an API monetization framework](https://apievangelist.com/2015/08/29/an-api-monetization-framework-to-help-me-standardize-pricing-for-the-apis-i-bring-online/) so I could price the APIs I was bringing online. The archive has close to four hundred posts that mention monetization, and they come in waves. 2011, 2015 and 2017 were the big years. Then it went quiet for half a decade, and it is coming back now because of AI.

Somewhere around 2018 I started calling it something else. [API management is the measurement of value exchanged](https://apievangelist.com/2018/01/17/api-management-and-the-measurement-of-value-exchange/): every call is logged, every caller has a key, and so you can see exactly what value is flowing to whom. Later that year I wrote that [venture capital was obscuring the opportunities for value exchange](https://apievangelist.com/2018/04/27/venture-capital-obfuscating-the-opportunities-for-value-exchange-at-the-api-management-level/) at the API management level, because the vendors were incentivized to sell a platform, not to help you understand your own economics. And this June I made it official in [API Value Exchange](https://apievangelist.com/2026/06/12/api-value-exchange/): the word monetization has always been a barrier in exactly the places where API value matters most. I couldn't walk into a federal agency and talk about monetizing campsite reservations. The value was real, but the word shut the conversation down.

## Why monetization falls flat

I think there are three reasons, and AI makes all three worse.

**It sounds like a tax.** Monetization tells everyone on the consuming side that the conversation is about extracting money from them. Developers hear paywall. Partners hear renegotiation. Internal teams hear chargeback. The people who most need to understand the value flowing through an API are the ones the word pushes away.

**It is one direction.** Monetization describes money coming in. But APIs have always been an exchange, and the value goes both ways: data for reach, access for feedback, free tiers for adoption, partner APIs for distribution. Most of the value in most API programs never touches an invoice.

**It ignores the cost side.** This is the one AI breaks wide open. When a provider served a weather lookup, the marginal cost was close to nothing, and monetization was purely a revenue question. When a provider serves an agent, it may be running model inference on every call, and paying for it. The caller may be an agent that is itself burning tokens to decide what to call next. Every interaction now has a cost on both sides, measured in compute and tokens as much as in requests. You can't talk only about the revenue line when the cost line moves with every call.

## What I think we should call it

API value exchange was the right correction, and I still use it. It names the two-way nature of the thing. But I think AI pushes us one step further, to **API economics**.

Economics is the word for a system where value, cost and incentive all move at once, between many parties, at scale. That is what an API program looks like with agents in it. It covers the revenue, which monetization was always about. It covers the exchange, which value exchange was about. And it covers the part neither word did: unit costs, who pays for the inference, how pricing shapes agent behavior, and whether the whole thing is sustainable for both the provider and the consumer.

It also matches the artifacts that already exist. The pieces of API economics are all things a provider can publish:

- **[Plans](https://apis.io/plans/)** that say what access costs and what it includes. More than 10,500 providers in the APIs.io catalog have a plans artifact.
- **[Rate limits](https://apis.io/rate-limits/)** that say where the ceiling is. Nearly 9,800 providers document them.
- **[FinOps](https://apis.io/finops/)** mappings that say what the unit is and what it costs. About 6,600 providers have one, and it is the thinnest of the three.
- **Per-call and per-tool pricing** that an agent can read before it calls. [Pipedrive put a price on every tool call](https://apievangelist.com/2026/09/28/pipedrive-put-a-price-on-every-tool-call/), but when I asked 616 MCP servers, [only five put a price in a field a machine can read](https://apievangelist.com/2026/10/16/five-mcp-servers-put-a-price-in-the-tool-in-four-different-shapes/).
- **Payment protocols** like x402 and the Machine Payments Protocol, which let an agent pay without a person. I [set a baseline for that](https://apievangelist.com/2026/10/15/nobody-is-forecasting-the-transactional-api-economy/) last week, and it is small.

That is the gap Josh's talk points at from the vendor side. The agents are already generating the work. What most providers haven't done is publish the economics of their API in a form the agent, or the agent's owner, can read.

## Why it matters more than ever

When the consumer was a developer, the economics could live in a pricing page, a sales conversation and a contract. A human read them once, at the start, and then the integration ran. An agent doesn't read your pricing page, and it doesn't negotiate. It decides what to call based on what it can see, every time, at a volume no human integration ever produced. If the cost, the limit and the value of a call are not written down where it can read them, the agent will either ignore them or route around you to someone who did write them down.

[There is really only API consumption](https://apievangelist.com/2025/07/07/there-is-only-api-consumption/), and consumption has economics whether you name them or not. Monetization was the narrowest way to talk about that. Value exchange was better. I think economics is where this has to go, because that is the conversation leadership is actually having right now: what does this AI-driven consumption cost, what is it worth, and who pays. If we in the API space keep calling it monetization, we will keep getting the room's attention for five minutes. If we call it what it is, we might get the budget.

I'm not attached to the word. I'm attached to the conversation finally happening. If you have a better name, I want to hear it.
