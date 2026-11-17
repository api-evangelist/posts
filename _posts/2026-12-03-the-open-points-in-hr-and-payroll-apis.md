---
published: true
layout: post
title: 'The Open Points In HR And Payroll APIs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-open-points-in-hr-and-payroll-apis.png
date: 2026-12-03 13:30:00 +0000
author: Kin Lane
tags:
  - Human Resources
  - Payroll
  - Agent Readiness
  - Kin Score
  - Industries
---
One of the more useful ways I have found to look at the [Kin Score](https://apis.io/rating/) data is not provider by provider, but across a whole category. When you line up the leaders in an industry against the agent-readiness checks, you start seeing the points that nobody has claimed yet. Those open points are where a provider can stand out without having to beat anyone.

I picked [Human Resources & Payroll](https://apis.io/industries/human-capital-management/) for this one. It is a category where agents are going to be asked to do real things — onboard someone, run a pay adjustment, approve time off — and where getting it wrong has consequences.

## What I looked at

The vertical on [APIs.io](https://apis.io) holds 1,075 providers publishing 6,978 APIs, and only 128 of them score 50 or above. I took the top 100 by Kin Score, and 89 of those had a current set of rubric checks in my local catalog, all on rubric 0.25.0. Membership is computed from tags, so the top of the list includes a few platforms like Xero, LinkedIn and ClickUp alongside HR and payroll names like Greenhouse, Deel, Remote, Deputy, Workday and OnPay. Every number below is out of those 89.

## The points nobody has claimed

- **Agentic commerce: 0 of 89.** Not a single one tells an agent how to buy, upgrade or pay for the service on someone's behalf.
- **Agentic access: 0 of 89 fully.** 67 get partial credit, but nobody spells out end to end how an agent gets credentials and starts working.
- **Request and response examples present: 0 of 89 fully.** 62 are partial. Only 11 earn the separate check for publishing examples at all.

For a category that pays people, those are big holes. An agent that cannot see what a correct payroll request looks like is an agent guessing.

## The points almost nobody has claimed

- **Dry-run mode: 2 of 89** (Genesys and ChartHop). In payroll, being able to ask "what would happen" before it happens is about as valuable as it gets.
- **Well-known entry point: 2 of 89** (GatiFlow and GetMattered).
- **Agent card: 3 of 89** (JobsPipe, Ultravioleta DAO's Execution Market, and Mavenlink).
- **Agent skills: 6 of 89** fully, with 60 partial.
- **Reversibility documented: 9 of 89**, with 29 partial.
- **Idempotency: 12 of 89**, with 9 partial. Duplicate pay runs are not a hypothetical.
- **Well-known catalog: 13 of 89.**

## What the category already does

To be fair, this isn't a category asleep at the wheel. 65 of the 89 publish an llms.txt, and 39 offer a console or sandbox. The foundation is there. HR and payroll providers know how to publish docs and get developers started. What they haven't done yet is express the safety and discovery semantics an agent needs to act, rather than just read.

## Why these points matter here

In most categories, a missing dry-run or undo is an inconvenience. In HR and payroll it is the difference between an agent you can let near production and one you can't. Idempotency keeps a retried request from paying someone twice. Reversibility tells an agent what can be taken back and what can't. Dry-run lets someone see the outcome before committing to it. Examples show what correct looks like. These are the checks that make it safe to hand an agent the keys.

And discovery is the other half. An agent card, a well-known catalog and published skills are how an agent finds out any of it exists. Right now only a handful of the leaders in this category have put those in place.

## The opportunity

When nobody in a category has claimed a point, the first provider to claim it doesn't have to outscore anyone. They just have to show up. Any HR or payroll provider that publishes idempotency keys, documented reversibility, a dry-run mode and real examples, and then points at them from a well-known catalog and an agent card, is going to be the one agents can trust with this work.

I'm going to keep running this kind of whitespace view across other industries. It is one of the views only the catalog can give you, because you can't see the open points until you line everyone up against the same checks.
