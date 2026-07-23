---
published: true
layout: post
title: 'Agent Skills as a Bridge Between Engineering and Product'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agent-skills-as-a-bridge-between-engineering-and-product.png
date: 2026-08-15
author: Kin Lane
tags:
  - Agents
  - AI
  - Skills
  - Product
  - Business of APIs
  - Developer Experience
---

The oldest fight in the enterprise is the one between business and IT, and it never really got settled--it just changed costumes. It was business versus IT, then it was product versus engineering, then it was the design team versus the platform team, and every few years someone sells us a new ceremony to paper over the gap. Requirements documents. Two-week sprints. A backlog. A Jira workflow with eleven states. Each of these is an attempt to move intent across a border, and each of them loses something in customs. Product knows *what* the business needs and *why* a customer will pay for it. Engineering knows *how* the system actually behaves and what it will cost to change. The handoff between those two bodies of knowledge is where most of the value--and most of the blame--goes to die.

I have spent sixteen years watching APIs try to close this gap, and they closed part of it. An API turned a vague business capability into a contract you could actually point at. [OpenAPI](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/) made that contract machine-readable, so the "how" stopped being folklore trapped in an engineer's head and became an artifact product could read, question, and plan against. That was real progress. But the API contract is still a *technical* artifact. Product can read it, sort of, but they cannot *run* it, and they certainly cannot author it. The document lives on engineering's side of the border. It describes the plumbing beautifully and says almost nothing about the intent the plumbing exists to serve.

This year I have been building a lot of [Agent Skills](https://apievangelist.com/), and somewhere in the middle of that work I realized they are the first artifact I have ever built that genuinely sits *on the border itself* instead of on one side of it.

## What a Skill actually is

Strip away the branding and an Agent Skill is embarrassingly simple. It is a folder. Inside the folder is a markdown file that opens with a little frontmatter--a name, a one-line description of when to use it--and then continues in plain, declarative English describing how to do a task. Optionally there are supporting files the skill can pull in when it needs them, and optionally there are scripts it can call. That is the whole thing. No compiler, no build step, no DSL to learn. If you can write a good runbook, you can write a skill.

Here is the shape of one, trimmed down:

```markdown
---
name: refund-a-subscription
description: >
  Use when a customer asks to cancel and be refunded for a subscription.
  Handles proration, the goodwill exception, and the finance notification.
---

When a customer requests a refund on an active subscription:

1. Look up the subscription and confirm it is active.
2. If they are inside the 14-day window, refund in full.
3. If they are outside it but this is their first refund ever,
   apply the goodwill exception and refund the prorated remainder.
4. Never refund below the prorated floor without a human approver.
5. Post the refund by calling the billing API, then notify #finance.
```

Read that block again and ask yourself who wrote it. The 14-day window, the goodwill exception, the "never below the floor without a human"--that is *product and business policy*. It is the stuff that normally lives in a Confluence page nobody reads, or worse, in the head of the one support lead who has been there five years. But steps 1 and 5--"look up the subscription," "call the billing API," "notify #finance"--that is *engineering*. Those are real system boundaries with real contracts behind them.

The two halves are sitting in the same file, in the same language, and here is the part that matters: **the file is executable.** An agent reads it and does the thing. This is not a requirements document that an engineer will later translate into code and, in the translation, quietly drop the goodwill exception because it was in paragraph nine and nobody flagged it. The policy and the plumbing ship together, run together, and drift apart only if someone edits the file that both of them can see.

## Why this dissolves the divide instead of decorating it

Every previous attempt to bridge business and IT failed the same way: it created a document on one side that had to be *translated* to become real on the other. Requirements got translated into tickets. Tickets got translated into code. Every translation is a lossy re-encoding performed by someone who understands one side better than the other, and the losses accumulate. The business swears it asked for the goodwill exception; engineering swears it was never in the spec; both are telling the truth about different documents.

A skill removes the translation step, because the artifact the product person can read *is the artifact that runs*. There is no downstream encoding where intent leaks out. When product wants to change the refund window from fourteen days to thirty, they change the number in the sentence that says fourteen. They do not file a ticket, wait a sprint, and hope. The sentence is the source of truth and the sentence is the running behavior.

This is the same instinct behind everything I have argued about [governance belonging in the contract itself](https://apievangelist.com/2026/07/14/the-open-api-governance-toolchain/) rather than in a wiki that shadows the contract and slowly lies. A rule that lives next to the thing it governs, in a form both the machine and the human can read, stops being aspirational and starts being enforced. Skills do for *product intent* what OpenAPI and Overlays did for *technical governance*: they pull the intent out of tribal memory and into a versioned, reviewable, executable artifact that both tribes can stand over and argue about honestly--because they are finally arguing about the same document.

## The new shape of the work

I do not think this makes product managers into engineers or engineers into product managers, and I would be suspicious of anyone selling that. What it does is give them a shared workbench, and it changes what each of them is uniquely responsible for.

Product owns the prose--the policy, the exceptions, the "never do this without a human," the tone of the customer-facing steps. They can author most of a skill in language they already think in, and for the first time their authored artifact is the thing that actually ships, not a brief that gets reinterpreted downstream.

Engineering owns the seams--the API calls, the tools the skill is allowed to reach, the auth around them, the guardrails that make "never refund below the floor" a hard constraint and not a polite suggestion. This is exactly the territory I have been mapping under [agent readiness](https://apis.io/rating/): a skill is only as safe as the APIs beneath it are well-described, well-scoped, and well-governed. The prose says *what*; the contracts underneath decide what is *actually possible*. Engineering's job moves up a level--from implementing each feature by hand to building the reliable, well-bounded surface that the business can then compose against in plain language.

And the review changes shape too. A skill pull request is the first artifact I have seen where a product lead and a staff engineer can review the *same diff* and each have something real to say about it, without one of them pretending to understand the other's dialect. The product lead flags that step 3 contradicts the new pricing policy. The engineer flags that step 5 calls an API that is being deprecated next quarter. Same file. Same conversation. That conversation, in one room, over one document, is the thing every requirements process I have ever seen was *trying* to manufacture and never could.

## Where I actually land

I am wary of declaring old wars over, because this one has outlived every technology that promised to end it. Skills will not make business and IT hold hands. But for the first time the boundary object between them is a single, plain-language, executable file that neither side has to translate to trust--and that is a materially different situation than a requirements doc thrown over a wall. The border did not disappear. The customs house did. Intent now crosses without being repackaged, which means less is lost, and what is lost is visible in a diff instead of discovered in a postmortem.

That is not the end of the oldest fight in the enterprise. But it is the first honest ceasefire I have seen, and I have seen a lot of them fail. This one has the source of truth living on the border itself, readable and runnable by both sides. I will take it.
