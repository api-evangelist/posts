---
published: true
layout: post
title: 'API-First Is Table Stakes Now'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/api-first-is-table-stakes-now.png
date: 2026-12-01 13:30:00 +0000
author: Kin Lane
tags:
  - API-First
  - Strategy
  - Agents
  - MCP
  - Lifecycle
---
I get asked a lot whether being API-first is still a differentiator. It is a fair question, since I spent a good portion of the last decade telling companies it was. My answer these days is that API-first is moving to table stakes. It is no longer what sets you apart. It is what gets you in the room.

## Everyone has the basics now

When I look across the [APIs.io](https://apis.io) catalog, the basics are just not rare anymore. The [Human Resources & Payroll](https://apis.io/industries/human-capital-management/) vertical alone has 1,075 providers publishing 6,978 APIs. [Payments & Money Movement](https://apis.io/industries/payments/) has 2,099 providers and 19,560 APIs. Those are not the numbers of a practice that differentiates. Those are the numbers of a practice that is expected.

Even the newer agent-facing basics are filling in fast. Of the 89 top-ranked HR and payroll providers I checked against the [Kin Score](https://apis.io/rating/) rubric, 65 publish an llms.txt. A year ago that would have been a story. Today it is a checkbox, and the providers who don't have one look like they are behind rather than the ones who do looking ahead.

So having an API, having documentation, having an OpenAPI, having a portal, even having an llms.txt, doesn't make you special. Not having them makes you invisible.

## The differentiator is the muscle

What I see separating providers now is not whether they are API-first, but whether they have the muscle to iterate. Can you take an idea for a new capability, design it, get feedback, ship it, and get it into the hands of developers and their agents quickly? And can you do it again next month without breaking what you shipped last month?

That is a lifecycle muscle, not an architectural stance. It is contracts that drive mocks, docs, tests and SDKs. It is governance that runs in the pipeline instead of in a review meeting. It is versioning and deprecation that consumers can plan around. It is change logs people actually read. The companies that built that muscle can respond to a market that is changing week to week. The ones that declared themselves API-first and then froze are now carrying a well-documented API that describes last year's business.

## MCP is just another API design pattern

The fastest way I see providers waste that muscle right now is how they approach MCP. MCP is just another API. It is another design pattern for delivering the same value to a different type of client, and it deserves the same design attention you'd give a new REST resource.

What I keep seeing instead is one tool generated for every operation. If you have 400 operations and you generate 400 tools, you just now increased your sprawl. You didn't design anything for an AI client. You took your existing surface area, doubled it, and handed an agent a longer menu to get lost in.

Designing for AI clients means thinking across operations. What does someone actually need to get done? What is the handful of tools that accomplish that, with the right inputs and outputs, composed from whatever operations sit underneath? That is the same thinking that made good REST APIs good. It just has a new consumer.

## What table stakes looks like in practice

If API-first is the floor, here is what I think the floor now includes:

- A contract for every API, published where machines can find it, not only humans.
- Request and response examples, so humans and agents can see what success looks like.
- Errors, rate limits, pagination and auth expressed consistently and machine-readably.
- An MCP surface designed for the work, not generated from the inventory.
- A discovery entry point that points at all of it.

None of that is exotic. All of it is work. And the providers who have the muscle to keep doing that work as the landscape shifts are the ones I expect to still be in the conversation a couple of years from now.

## Stop selling API-first

If your pitch is still "we're API-first," I'd retire it. Your customers assume it. Their agents assume it. What they want to know is how fast you move, how well you design for the clients they are actually using, and whether what you ship today will still work when they come back tomorrow. That is the conversation worth having now.
