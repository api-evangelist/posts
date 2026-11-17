---
published: true
layout: post
title: 'A Solid Foundation Beats A High Agent Score On A Thin One'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-solid-foundation-beats-a-high-agent-score-on-a-thin-one.png
date: 2026-11-27 13:30:00 +0000
author: Kin Lane
tags:
  - Agent Readiness
  - Kin Score
  - Foundation
  - Agents
  - MCP
---
More API providers are looking at their agent readiness numbers and comparing themselves to whoever is at the top. I understand why. But I want to slow that comparison down, because the providers with the highest agent scores are not always the ones you want to be, and the ones with modest agent scores are often in a much better position than they think.

## Two kinds of provider

When I look across the [APIs.io catalog](https://apis.io) I see two very different profiles that can look similar if you only read one number.

The first is the established provider. They have docs, onboarding, OAuth, rate limits, pagination, pricing, terms, a status page and years of API governance behind them. Their [Kin Score](https://apis.io/rating/) composite is solid. Their agent readiness is middling, because they haven't yet published an A2A card, a well-known catalog, or registered the skills they already have.

The second is the AI-first startup. They launched with an MCP server, an llms.txt, an agent card and every well-known file you can name. Their agent readiness is high. But the foundation underneath is thin: a handful of operations, no clear pricing, no terms, no history.

If I had to bet on which one an agent should depend on next year, I'd pick the first one every time.

## Readiness does not rise above the foundation

This is what I talked about at my keynote in New York in October. Of the more than 31,000 providers I was indexing in that snapshot, the 434 with the best API infrastructure, the exemplar band, are also the ones with the highest agent readiness. They have their docs, their onboarding, they've done the OAuth work. They have API governance in place, which is setting the table for AI governance. The two are directly related, and the data shows it. Your agent readiness will not rise above what your core composite says.

There is one asterisk. About 1.4% of providers have agent readiness that exceeds their foundation. When I looked at who they were, they were mostly facades. Hollywood fronts. Companies doing MCP servers that checked all the agent-readiness boxes because they are trying to sell the company on the secondary market. They aren't really in business. They do everything well on the surface, but they don't have the foundation you'd need to do business with them. Once you start using their servers and things change, they are the first to fall apart and go away.

## Why the foundation wins

Agents don't call your agent card. They call your API. Everything that makes an agent successful after it finds you is foundation work:

- **Auth an agent can obtain on its own**, with scopes it can understand.
- **Errors it can act on**, ideally a standard like Problem JSON, so it knows whether to retry, fix or stop.
- **Idempotency**, which used to matter only for payments and now matters everywhere an agent might retry.
- **Request and response examples**, so the agent doesn't have to guess the shape.
- **Rate limits and pagination** expressed in headers and the contract.
- **Pricing and terms** it can read before it commits a customer to anything.

A high agent score on a thin provider means the front door is beautiful and the house behind it is a set. A modest agent score on a solid provider means the house is real and the front door just needs a sign.

## The modest score is the cheap one to fix

This is the good news for established providers. The gap between a solid foundation and a strong agent score is usually small and mostly about discovery: making what you already have findable. Publish the OpenAPI you already maintain into a well-known catalog. Register the skills you already wrote in an A2A card. Put your auth metadata where an agent looks first. Add examples. None of that requires building a new platform. It's an expression of what agents can find.

The thin provider has the opposite problem. Their agent score is already high, and the work they need to do, real pricing, real terms, real depth, real support, is the expensive part, and it can't be generated.

## Read both numbers

So when you compare yourself to someone, read both numbers. The [agent readiness](https://apis.io/rating/) score tells you how findable and machine-friendly you are. The composite tells you whether there is anything solid there to find. Chase the agent score on top of a strong foundation and you will end up in the exemplar band with the 434. Chase it on its own and you'll end up looking like the 1.4%.
