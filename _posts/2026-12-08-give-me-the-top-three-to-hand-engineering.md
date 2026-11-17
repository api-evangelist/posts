---
published: true
layout: post
title: "Give Me the Top Three to Hand Engineering"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/give-me-the-top-three-to-hand-engineering.png
date: 2026-12-08 13:30:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent Readiness
  - Kin Score
  - Prioritization
  - API Design
---
Whenever I walk a product leader through their [Kin Score](https://apis.io/rating/) and their Agent Readiness, the conversation always ends with the same question. They've seen every check they are failing, and there are a lot of them. Then they say some version of: "Give me the top three to hand engineering."

It is the right question. A list of twenty gaps isn't a plan. Engineering has a road map already, and nobody is going to drop everything to chase twenty things. So here is how I answer it, and what the answer usually turns out to be.

## Points, effort and owner

I rank every fix on three things.

**Points.** What is the check worth on the score? The Agent Readiness layer is out of 153 points, and each dimension page on APIs.io says exactly what it is worth and how it is graded. This is the part people expect.

**Effort.** How much work is it really? Some fixes are a file on a web server. Some are a design change across every mutating operation. A big point value with a big lift can still lose to a smaller one you can ship this sprint.

**Owner.** Who has to do it? This one gets skipped and it matters most. A fix that the docs team can make without a release is a different thing than one that needs platform engineering, a gateway change and a deprecation plan. If the owner isn't clear, it doesn't happen.

Multiply those together and the order sorts itself out. Not precisely, it is more art than science, but well enough to hand someone three things and have them get done.

## The usual top three

I've done this enough times now that the answer is pretty predictable for providers with a solid foundation. It is usually these three.

### 1. Idempotency

The [idempotency](https://apis.io/rating/dimensions/idempotency/) dimension is worth 9 of the 153 agent-readiness points. Agents retry. Without an idempotency key, a retry double-charges a card, sends a message twice, or opens a duplicate ticket. Full credit requires the key to show up on the POST, PATCH and PUT operations in the contract, not just in a docs page saying you support it.

It is also one of the most open checks in the catalog. Only 2,185 providers publish it, 5.5% of the 39,844 it applies to, and 1,140 of those get full credit. If you already support idempotency keys, documenting them in the contract is cheap and the points are sitting there. If you don't, it is real work, but it is the work that keeps agents from doing damage.

### 2. Stable error semantics

[Stable error semantics](https://apis.io/rating/dimensions/error-semantics/) is worth 8 points. Agents branch on errors. A free-text error message breaks that branching and sends an agent into blind retries. Full credit means one shared error schema referenced across your 4xx and 5xx responses, a typed envelope, ideally Problem JSON, rather than a table of codes in the docs.

9,647 providers publish something here, 23.5% of the 41,129 it applies to, but only 4,225 get full credit. Most providers already have a consistent error shape in practice. The fix is usually to define it once in the contract and reference it everywhere, which a platform team can do without changing behavior.

### 3. Request and response examples

[Request/response examples](https://apis.io/rating/dimensions/openapi-examples/) are worth 7 points. Examples are the cheapest way an agent learns what a payload looks like before it ever makes a call. Full credit means at least half your operations carry examples. 6,596 providers publish them, 16.0% of those it applies to, and 2,753 get full credit.

This is the one the docs or DevRel team can usually own outright. The examples often already exist in guides and SDK tests. They just aren't in the contract.

## Why these, and why not the shiny ones

People expect me to say "stand up an MCP server" or "add a dry-run mode." Those matter, and for some providers they are the right call. But these three keep winning because together they're worth 24 points, they're mostly open across the catalog, and they make the API safer and clearer for humans and agents alike. They're design fundamentals, not agent features bolted on top.

The other pattern is discoverability. If you've already built skills, SDKs or an MCP server and you score zero for them, the cheapest fix is often registration, not engineering. An [A2A agent card](https://apis.io/rating/dimensions/agent-card/) and a [well-known catalog](https://apis.io/rating/dimensions/well-known-catalog/) make what you already have findable. If you have skills and my agents can't find them, it's probably because they're not registered. I'll often slot that ahead of anything that needs a release, and well ahead of sandboxes, dry-run or reversibility.

## Hand over three, then the next three

The goal isn't to fix everything. It is to give engineering a short list they can say yes to, with a clear reason for each item and a clear owner. Ship those, re-score, and the next three are waiting.

This is the kind of thing I put together for API providers as a prioritized checklist, every failing check, what it is worth, who should own it, and the order I'd do them in. But you can do the first pass yourself. Pull up your score on APIs.io, look at the dimension pages, and ask the same three questions of each gap: how many points, how much work, and whose job is it.
