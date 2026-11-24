---
published: true
layout: post
title: 'Your API Plans And Pricing Should Be Machine Readable And Standardized'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-api-plans-and-pricing-should-be-machine-readable-and-standardized.png
date: 2026-11-26 12:00:00 +0000
author: Kin Lane
tags:
  - Pricing
  - Plans
  - FinOps
  - Rate Limits
  - Agents
  - APIs.io
---
Every API provider publishes a pricing page. Almost none of them publish pricing a machine can read. I've spent a lot of this year reading those pages across the [APIs.io](https://apis.io) catalog, turning them into structured plans, pricing, rate limits and finops data. That work has convinced me that machine-readable, standardized pricing is one of the most important things a provider can do right now, and one of the most neglected.

## What reading the pricing pages shows

The [pricing section on APIs.io](https://apis.io/plans/) is built from providers' own pricing pages. As of the end of October:

- We've read the pricing pages of **7,163 providers**, and **2,884** of them don't state a pricing model at all.
- Of those that do, **38%** use tiered subscriptions, **20%** are negotiated, **15%** charge per call and **13%** use some other usage-based model.
- The median entry price is **$29 a month**, from 679 developer APIs, and the median take rate is **1.5%**, from 86 providers.
- The most common billing units are requests (median $0.00189 each), credits, messages, tokens and transactions. Credits get no price at all, because every vendor defines a credit differently.

The [finops section](https://apis.io/finops/) asks a different question: if you adopt this API, what do you have to forecast and track? Of **2,167 providers** we could trace to their own pricing page, **37%** bill by usage or a share of transactions, and **74%** list at least one metered charge. **18%** bill by a vendor-specific unit that only means something inside that vendor.

And the [rate limits section](https://apis.io/rate-limits/) covers **2,885 providers** with published limits. The median is **120 requests a minute**. But only **21%** say what response you get when you hit the limit, **31%** name a `Retry-After` header and **26%** name a remaining-requests header.

## Why it needs to be machine readable

Every one of those numbers was extracted from HTML written for a human. That's slow, it goes stale, and it's lossy. We had to move **1,920 providers** out of "per seat" because their plans never actually mention a seat or a user. If it's this hard for a dedicated pipeline, imagine an agent trying to answer one question on the fly: what will this call cost me?

That question is no longer hypothetical. Agents are choosing between APIs, calling paid endpoints and, increasingly, paying for them directly. An agent can't respect a budget it can't read. A finance team can't forecast a unit it doesn't understand. A gateway can't enforce a plan that only exists as marketing copy.

## Why it needs to be standardized

Machine readable isn't enough if every provider invents its own shape. The value comes from being able to compare. When plans, prices, units, limits and billing periods use the same vocabulary, you can line up two providers side by side, roll up a company's spend across twenty APIs, or let an agent pick the cheaper option that still fits its rate limits.

That's what we've been building toward:

- **Plans and pricing as data.** Every provider on APIs.io has its plans, prices and billing units recorded in a consistent structure, with a link back to the page it came from.
- **FinOps mappings.** How each provider meters and bills, in terms a finance team can plan against: the billing model, the unit to watch and when you're charged.
- **Rate limits as data.** What the limit is, what it applies to (a key, an account, an IP), and what happens when you hit it.
- **An index that points to all of it.** APIs.json has had properties for plans, pricing and terms of service since 2014, so the index can point at the machine-readable versions next to the human ones.

The [agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/) I've built show what this looks like from the provider side. Each one publishes its pricing as JSON in micro-dollars next to the HTML page, its rate limits as JSON, and an onboarding descriptor that says which steps cost money. An agent can read all of it before it spends a cent.

## How the Kin Score sees it

The [Kin Score](https://apis.io/rating/) measures this under Access Clarity: plans, pricing, sign-up, terms, privacy and a finops mapping. Agent Readiness looks at rate-limit headers. Publishing a pricing page earns some credit. Publishing pricing a machine can read, in a shape it can compare, earns a lot more, because that's what agents and finance teams can actually use.

## What I'd ask of every provider

1. Publish your plans and prices as structured data, not just a page.
2. Name your billing unit plainly, and say what one unit costs.
3. Publish your rate limits, what they apply to, and the headers and status you return when someone hits them.
4. Point to all of it from your APIs.json.

Pricing is part of your API's contract. In the agentic era, the reader that matters most may be a machine deciding whether to call you at all.
