---
published: true
layout: post
title: 'What Commoditizes, And What Lasts'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-commoditizes-and-what-lasts.png
date: 2026-12-02 13:30:00 +0000
author: Kin Lane
tags:
  - Build vs Buy
  - Strategy
  - Business Models
  - Agents
  - Skills
---
Build versus buy has always been one of the more interesting conversations in the API space. It is getting more interesting now that agents can stitch together a utility in an afternoon. The question I keep getting from API providers is some version of: if an agent can build what we sell, what are we actually selling?

My answer is that some of what you sell is commoditizing, and some of it is going to last longer than ever. The trick is being honest about which is which.

## Individual utilities are commoditizing

Single-purpose utilities are the first to go. Resize this. Convert that. Store this file. Validate that address. These were great API businesses because they took something tedious and made it a single call. But tedious and well-understood is exactly what agents are good at reproducing, and the open source building blocks for most of these utilities are a package install away.

The catalog reflects how crowded this is. The [Payments & Money Movement](https://apis.io/industries/payments/) vertical on [APIs.io](https://apis.io) alone holds 2,099 providers and 19,560 APIs. When that many companies offer overlapping capabilities, the individual operation stops being the thing anyone pays a premium for.

Storage is in the same boat. Bytes at rest are a utility. Nobody is choosing a provider because their storage is a little better.

## Connecting the dots is what lasts

What I don't see agents reproducing in an afternoon is everything that has to be true around those utilities at scale. Connecting the dots:

- **Provenance** — where something came from, what was done to it, and whether you can prove it.
- **Identity and access** — who can do what, on whose behalf, with which scopes, and how that is revoked.
- **Delivery** — getting the result to wherever it needs to be, fast, reliably, everywhere.
- **Analytics and observability at scale** — knowing what happened, to whom, and what it cost.

None of these are a single operation. They are the operational fabric that makes a pile of operations trustworthy. They take years to build, they are boring in exactly the way enterprises love, and they get more valuable as agents start acting on behalf of people, because now someone has to answer who did what and whether it was allowed.

## Domain expertise, expressed as skills

The other thing that lasts is domain expertise. Not the expertise locked in your support team's heads, but expertise expressed in a way that people and agents can use. That means use-case skills sitting on top of well-designed APIs and well-designed MCP tools.

A utility tells an agent how to do one thing. A skill tells an agent how to get something done in your domain the way an expert would: which operations, in what order, with what defaults, and what to watch out for. That is the knowledge that took you a decade to accumulate, and it is the part an agent cannot just regenerate from your OpenAPI.

The catch is that most providers aren't publishing it in a way agents can find. Across the 89 top-ranked HR and payroll providers I checked against the [Kin Score](https://apis.io/rating/) rubric, only 6 fully earn credit for publishing agent skills, and only 3 publish an agent card that would point an agent at them. The expertise exists. It just isn't expressed yet.

## Build versus buy in the agent era

So here is how I'd think about build versus buy right now.

If you are a consumer, build the utilities. Let your agents do it. It is cheap and it is getting cheaper. Buy the dots that are connected: provenance, identity, delivery and observability, and the domain expertise that comes with them.

If you are a provider, stop competing on the utility. It will keep getting cheaper whether you like it or not. Invest in the connective tissue, and invest in packaging your expertise as skills over clean APIs and purposefully designed MCP tools. That is what an agent will reach for when it needs to get something done properly, and it is what a person will pay for when the result matters.

## The honest question

The honest question for every API provider is which of your operations someone could rebuild with an agent this week, and which parts of your platform they would still need you for. The first list is what you are going to lose pricing power on. The second list is your business. I'd put my roadmap there.
