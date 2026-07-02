---
published: true
layout: post
title: "Making API Reusability Measurable"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/making-api-reusability-measurable.png
date: 2026-07-02T12:00:00.000Z
tags:
  - Reusability
  - Governance
  - Discovery
  - Duplication
  - Capabilities
  - APIs.json
  - Agents
---
In almost every enterprise I walk into, the same capability has been built three, four, five times — customer lookup, payment processing, document storage, notification sending — by teams who were not being lazy or territorial. They simply could not find, could not trust, or could not adopt what already existed. Reuse fails long before the first line of code gets written, and it fails for reasons that are organizational, not technical. We have had the specs, the registries, and the formats to share these capabilities for well over a decade. What we have not had is the honesty to treat reusability as something you can actually measure.

That is the word I want to rescue this week: **measurable**. Reuse gets talked about the way culture gets talked about — a value on a slide, an aspiration in a charter, something everyone is for and nobody can inspect. I have sat with large enterprises that stood up reuse working groups, appointed reuse strategy leads, and a year in still had no answer to the only question that matters: *what do we mean by reusable?* That is a choice, not a constraint. Whether an API **can** be reused comes down to concrete, checkable things. Whether it **is being** reused is sitting in your gateway logs right now. Supply and demand. Potential and adoption. Both sides can be scored.

## Three axes, one rubric

When I score an API estate, I look at three things. First, **the interface** — can a stranger, or a machine, build against this spec without talking to anyone? Shared schema components instead of the same object re-declared forty times, documented and *consistent* errors, examples, declared security. Second, **the operational anatomy** — the unglamorous metadata where reuse actually survives or dies: real documentation, self-service signup, a sandbox to try the thing this afternoon, published rate limits you can budget against, a changelog, a status page, somewhere to get help. A beautiful spec with no way in loses to a mediocre spec with a sandbox every single time. Third, **composability** — can it be reused as a *capability*, in a workflow, by an agent? Machine-readable workflows, agent-protocol surfaces, packaged skills. That third axis is not speculative; when I calibrated this rubric against hundreds of real public API programs, a majority of the leaders already publish these artifacts.

Then two more things keep the rubric honest. **Duplication detection, done semantically** — because the duplicates that matter never share naming. The team about to build refund processing searches for "refund" and finds nothing, because the existing implementation calls it reversals, or credit notes, or adjustments. Matching meaning instead of strings surfaces exactly the sprawl a keyword search can never see. And **demand data** — distinct consumers and call volumes joined to the scores, so the estate sorts itself into four quadrants that tell you what to do: exemplars to point new teams at, load-bearing liabilities to fix, well-built-but-unused APIs whose problem is discovery rather than design, and retirement candidates whose retirement buys the whole program credibility.

One more reframing that changes the conversation: **the unit of reuse is not the API, it is the capability.** Three implementations of "create purchase order" is not three inventory line items — it is one capability with three implementations and a decision waiting to be made. And when you make that decision, pick the canonical by *adoption*, not elegance. The implementation with forty consumers is load-bearing infrastructure whatever its aesthetics; crowning the architect's favorite zero-consumer beauty over it is how consolidation roadmaps end up decorating wikis.

## The paper

I have written all of this up as a new API Evangelist paper — **[The Fundamentals of API Reusability](https://papers.apievangelist.com/papers/fundamentals-of-api-reusability/)**. It walks the full argument: reuse as a discovery problem before it is a design problem, the interface and operational checklists that actually discriminate, the composability turn now that the consumer might not be a person, governing the sprawl without the purge fantasy, the supply-versus-demand scoreboard, the anti-patterns that discredit reuse programs, and a ten-point self-assessment you can run against your own operations this week.

## The tool

Because I have run out of patience with the distance between "we should measure reusability" and actually doing it, I built the rubric into a free tool: **[reusability.apicommons.org](https://reusability.apicommons.org)**. It runs entirely in your browser — nothing leaves your machine. Point it at your OpenAPI, upload a HAR traffic capture, or pull from your gateways, and it scores all three axes, detects duplication semantically, maps capabilities to implementations, and folds in whatever demand data you can export. It ships with fifty real public API programs pre-loaded — Stripe, Twilio, GitHub, Salesforce, and the rest — so you can see how the leaders grade before you point it at yourself. The rubric is tunable because your definition of reuse should be *yours*; the tool just makes sure you have one.

## The work

And if you want a partner in it, I have added **[Reusability](https://apievangelist.com/services/governance/reusability/)** to my governance services — a hands-on assessment where we score your estate together, surface the duplication, name the capabilities, choose canonicals with the adoption data in the room, and leave you with a written, weighted rubric your teams can keep running long after I am gone.

Reuse that is measured gets funded. Reuse that is asserted gets cut. Write your definition down, score the estate, publish the scoreboard — and let it do the arguing.
