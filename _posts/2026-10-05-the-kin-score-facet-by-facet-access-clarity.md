---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Access Clarity'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-access-clarity.png
date: 2026-10-05
author: Kin Lane
tags:
  - Kin Score
  - Access Clarity
  - Pricing
  - Plans
  - Terms of Service
  - Agent Readiness
  - APIs.io
  - APIs
---
This is part five of nine, one [Kin Score](https://apis.io/rating/) facet each business day. On Friday I covered [Developer Ergonomics](https://apievangelist.com/2026/10/02/the-kin-score-facet-by-facet-developer-ergonomics/), which is about how easy it is to get started once you are in. [Access Clarity](https://apis.io/rating/facets/access-clarity/) asks the question before that one: what does it cost, what am I allowed to do, and how do I get in, without having to book a call with sales?

It is 20% of the composite, nine checks worth 38 points.

## It used to be called Commercial Clarity

I renamed this facet in 0.12. A good chunk of the catalog is free statutory interfaces and public-interest open-data APIs, some of which say in their own OpenAPI: no authentication, no registration, no rate limit, no quota. Calling that a commercial deficiency was wrong, and 14 of the facet's 38 points were never commercial anyway.

Where a provider has no commercial surface by design, the pricing questions leave both sides of the fraction. The permission and access questions still apply to everyone. Nobody is exempted from the facet, because a difference is not an absence.

## What it measures

Every check reads a specific artifact or pointer in the provider's record:

- **Plans published (8 points).** Access plans exist as structured, machine-readable data, not a pricing page a human has to interpret. This is the heaviest award in the facet.
- **Multiple plans (4 points).** Three or more plans, which describes a real tiering model, usually from a free or trial tier up to production volume.
- **Self-service sign-up (5 points).** A developer can get credentials themselves. That is the line between an API you can try this afternoon and one you can try next quarter.
- **Pricing published (4 points).** "Contact us" is an answer. It is not this one.
- **Terms of service and privacy policy (4 points each).** What you are agreeing to when you call the API, and what happens to the data passing through it.
- **FinOps mapping, compliance, and a trust center (3 points each).** Cost mapped to usage so it can be modelled rather than discovered on an invoice, certifications stated in public, and one place built for the person deciding whether to depend on you.

None of these checks changed in 0.23. What did change is provenance. The [London release](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) drops an unmarked artifact to 0.90 of its credit wherever the rubric grades who made it, and plans are one of the artifacts it is set up to grade that way. That matters here, because many plan records in the catalog were written by my pipeline from a pricing page, not published by the provider, and my transcription is not your evidence.

## Where the catalog stands

Across the 27,274 providers scored on 0.23:

- The mean sub-score is **24.1** and the median is **21.1**.
- **8,318 providers (30.5%) score exactly zero.**
- **1,154 (4.2%) score 75 or above.**
- **126 score a perfect 100.**

[Stripe](https://apis.io/providers/stripe/) is one of the 126, at 100.0: plans, pricing, sign-up, legal, and trust posture, all out in the open.

The shape is different from the facets I have covered so far. Contract Quality and Contract Governance have a median of zero, because most companies do not publish a contract at all. Access Clarity has a median of 21.1, because most companies publish something: a terms page, a privacy policy, a sign-up link. What they rarely do is publish the commercial model as data. The heavy points sit on plans, and that is where the catalog falls away.

What these numbers cannot tell you is whether a given zero is honest. A provider can have perfectly good terms that my harvest has not wired into its record yet. The other direction worries me too: a terms or legal URL that 404s should count against a provider, and the [roadmap](https://github.com/api-evangelist/kin-score/blob/main/ROADMAP.md) proposes one HEAD request per declared document to catch it.

## The bigger picture: agents have to know the price

A human can read a pricing page and email sales. An agent cannot. If an agent is going to pick an API, stay inside a plan's limits, or pay for a call, the plan, the limit, and the price have to be data it can read. That is why machine-readable plans carry the most weight here, and why apis.io publishes plans, rate limits, and finops as artifacts of their own, separate from the pricing page.

The next step is pricing in the contract itself. [IBANforge](https://apis.io/providers/ibanforge/), which I verified in August, declares an `x402Payment` security scheme on 6 of its 18 operations and prices five endpoints between $0.002 and $0.02 in USDC. The price is readable from the one document an agent is guaranteed to read. The rubric cannot see that yet. And a declared payment scheme is a stated price, not proof an agent can pay; one provider is not a baseline. IBANforge's Access Clarity sub-score today is 76.3, earned on the checks that already exist.

## What to do

If you want to move on this facet:

1. **Publish your plans as data.** A plans file with each tier, its limits, and its price is the single biggest move here, and three or more tiers earns the next four points.
2. **Mark it as yours.** Add a `method:`, a `publisher:`, and a `source:` that resolves, so the plan is graded as first-party rather than as something I transcribed.
3. **Make sign-up self-service,** and link it where a developer, or an agent, will look.
4. **Put terms, privacy, compliance, and a trust center at stable URLs.** These are the documents a reviewer asks for first.
5. **If you are free by design, say so in your contract.** "No authentication, no registration, no rate limit, no quota" is an access answer, and it is a good one.

Every check, its rule, and its points are on the [Access Clarity page](https://apis.io/rating/facets/access-clarity/). If I have your access model wrong, tell me and I will fix it.

Tomorrow: Operational Transparency.
