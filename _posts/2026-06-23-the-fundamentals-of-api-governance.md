---
published: true
layout: post
title: The Fundamentals of API Governance
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-fundamentals-of-api-governance.png
date: 2026-06-23
author: Kin Lane
tags:
  - API Governance
  - OpenAPI
  - JSON Schema
  - Spectral
  - APIs
---
I've been doing API governance work for quite some time now, and I spent a a year on the ground standing a governance program up from scratch. So when people ask me what API governance actually is, I have opinions, and many of them run against the grain of how our industry talks about API governance. We like to pretend governance is a Spectral ruleset in a CI pipeline. That is a tiny slice of the actual work, and it is the easy slice. I want to lay out the fundamentals as I actually understand them, because I think most governance programs fail not because they pick the wrong linter, but because they never learn what the work really is.

Here is the definition that has held up for me across all of it: API governance is the governor on the speed of your business. A governor isn't a brake, it is the mechanical device that regulates how fast an engine can safely run. Most technical people hear "governance" and assume it means slower, and they react accordingly, and that reaction is the single most important thing you are actually governing. APIs are how modern enterprises govern velocity, create scarcity, and decide who gets to participate in which markets at what speed. Governing your APIs is governing your business, not just your code.

The fundamentals break into three groups. There are the artifacts you govern with — you [map your landscape](https://apievangelist.com/2026/06/24/start-by-mapping-your-api-landscape/) first, then you work with [OpenAPI as your contract](https://apievangelist.com/2026/06/25/openapi-is-the-unit-of-governance/), [JSON Schema as your data shape](https://apievangelist.com/2026/06/26/json-schema-governs-the-shape-of-your-data/), [policies and style guides](https://apievangelist.com/2026/06/27/policies-and-style-guides-the-why-above-your-rules/) as your human-readable "why," and [Spectral rules](https://apievangelist.com/2026/06/28/spectral-rules-machine-readable-enforcement/) as your machine-readable enforcement. There is where governance runs — [design-first or code-first](https://apievangelist.com/2026/06/29/design-first-or-code-first-pick-and-know-the-cost/), [Git as your source of truth](https://apievangelist.com/2026/06/30/git-is-your-governance-source-of-truth/), [your IDE](https://apievangelist.com/2026/07/01/govern-in-the-ide-where-the-work-happens/), [your CI/CD pipeline](https://apievangelist.com/2026/07/02/ci-cd-pipelines-make-governance-consistent/), all of it organized around the principle of [shifting left](https://apievangelist.com/2026/07/03/shifting-left-is-the-whole-game/). And there is the human layer — your [API reviews](https://apievangelist.com/2026/07/04/api-reviews-and-provenance-over-enforcement/), the provenance you capture, and the [people and organizational work](https://apievangelist.com/2026/07/05/api-governance-is-75-percent-people-work/) that decides whether any of the rest of it sticks.

That last group is the part nobody wants to hear. After hundreds of enterprise conversations and a year of doing this at scale, I am certain that API governance is roughly 75% people work. The Spectral rule that blocks a request body on an HTTP GET is not governance. Governance is the team understanding why that rule exists, having a real conversation about how their API gets consumed, and having the organizational bandwidth to care. The tooling is the easy 25%. If you stand up the machinery and skip the human work, you will have a governance program that produces dashboards and changes nothing.

There is also a structural reason governance fails that has nothing to do with rules. An API is a moving target across three dimensions at once — its location (where is the canonical spec?), its version (which one are we governing?), and its stakeholders (who is product, engineering, and platform for this contract?). Miss any of those and your rules are linting a phantom. Most people who tell me governance doesn't work are really telling me they were linting moving targets.

Over the next couple of weeks I'm going to walk each of these fundamentals one at a time — landscape mapping, OpenAPI, JSON Schema, policies, Spectral, the pipeline, the reviews, and the people. None of it is new, and that is the point. This is the status quo, the durable stuff underneath whatever tool gets hyped this quarter. I've also pulled all of it together into a single paper, The Fundamentals of API Governance, for anyone who wants the whole thing in one place. But let's start where every real governance program has to start — by mapping what you actually have.

<!-- paper-link -->

---

**Going deeper: [The Fundamentals of API Governance](https://papers.apievangelist.com/papers/fundamentals-of-api-governance/?ae_ref=apievangelist.com&ae_pos=post-footer)**

The status-quo stack for governing APIs, from someone who stood one up at scale.

[Read the paper](https://papers.apievangelist.com/papers/fundamentals-of-api-governance/?ae_ref=apievangelist.com&ae_pos=post-footer)
