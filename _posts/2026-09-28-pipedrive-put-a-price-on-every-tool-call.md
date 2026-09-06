---
published: true
layout: post
title: 'Pipedrive Put A Price On Every Tool Call'
date: 2026-09-28
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Pipedrive
  - MCP
  - Agents
  - Monetization
  - APIs
---
Pipedrive uses `x-tool-description`, which by now is a familiar shape in this series — an agent-facing description separate from the developer one:

> Retrieves paginated active deals with filtering by owner, person, organization, pipeline, stage, status, and time ranges. Essential for analytics, reporting, dashboard views, and bulk operations. Filters combine for precise selection; filter_id overrides individual filters.

Dense, verb-first, written to help something choose between options rather than to explain an endpoint to a person. Note "Essential for analytics, reporting, dashboard views" — that is not describing the operation, it is describing the *jobs this operation is the right answer to*. Selection guidance.

But the key sitting directly underneath it is the reason this post exists:

```
x-tool-description: Retrieves paginated active deals with filtering...
x-token-cost: 10
operationId: getDeals
```

`x-token-cost`. 371 occurrences across Pipedrive's operations, with values of 1, 2, 3, 5, 6, 10, 20 and 40. Every operation in the API is priced.

Pipedrive has published a machine-readable cost for calling each thing, inside the contract, next to the description that tells an agent when to call it.

I have been arguing for years that APIs should declare their pricing in a form a machine can read, and I have mostly been arguing about money — rate cards, plans, per-call prices, the whole [monetization](https://apis.io/) layer that has stayed stubbornly human-readable while everything else got structured. What Pipedrive has done is adjacent to that and, right now, more immediately useful. This is not dollars. It is API token cost — Pipedrive's own rate-limiting currency, where each account gets a budget and each operation draws down a different amount.

Putting that in the contract changes what a caller can do. Today an agent planning a sequence of calls has no idea which ones are expensive. It finds out by being throttled, which is the worst possible time and produces the worst possible behaviour — retries against a limit it has already hit. With costs declared up front, a planner can order its work, batch where batching is cheaper, prefer the cheap read over the expensive one when both would answer the question, and know before it starts whether the plan fits in the budget.

That is the difference between an agent that gets rate-limited and one that does not, and it is one integer per operation.

The values themselves tell a story if you read them as a set. A range from 1 to 40 is a fortyfold spread. Somebody at Pipedrive costed each operation against what it actually does to their infrastructure and wrote the number down. That is a real internal exercise, and most companies who have done it keep the result in a table on a documentation page, in a unit nobody can parse, updated whenever someone remembers.

There is a wider pattern worth flagging here. In the same catalog I found Telnyx doing something similar with a key called `x-endpoint-cost`, whose values are `light`, `medium`, `heavy` and occasionally a decimal. Two companies, both declaring per-operation cost, one using an integer scale and one using a qualitative band, different spellings, neither registered, neither able to see the other. That is the third time in this series I have found the same idea invented twice in isolation, and this one has money behind it, which usually means it spreads fast and fragments faster.

The asks.

**Register both keys, and treat `x-token-cost` as the important one.** `x-tool-description` is a reasonable entry but it is one of several spellings for agent-facing description already floating around, and settling that is a conversation rather than a filing. `x-token-cost` is different: it is a new capability, there are exactly two implementations of the idea in my entire catalog, and the window where a shared design is still achievable is measured in months. The registry entry should be explicit that the unit is the provider's own rate-limit currency and not a currency amount — because the very next person to reach for this key will be thinking about dollars, and two meanings on one spelling is how this goes wrong.

**Sponsor the OpenAPI Initiative.** Pipedrive is an established, profitable company with a large API and a long history of taking developer experience seriously. This is the ordinary ask and it does not need dressing up.

**Get involved — and bring cost declaration as a proposal.** This is the one I would push. There is no vocabulary in OpenAPI for what an operation costs, in any unit — not rate-limit budget, not money, not compute. Every API has the concept. Every API expresses it in prose on a pricing page. Pipedrive has 371 operations priced in a structured field, in production, right now, and Telnyx has an independent implementation of the same idea. That is enough evidence to start a real conversation about a general cost vocabulary, and the moment to have it is before fifty companies each pick a different spelling.

Agents make this urgent in a way it was not before. A human developer reads the pricing page once and internalizes it. An agent planning a hundred calls needs the number in the contract, every time, in a form it can add up.

Tomorrow I start the last three posts of this series, which are all about one key — `x-mcp` — three companies, three incompatible shapes, and a bug that is waiting for somebody.
