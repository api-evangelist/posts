---
published: true
layout: post
title: 'APIs.io On-Premise, And Why I Am Looking For Design Partners'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-io-on-premise-looking-for-design-partners.png
date: 2026-09-29
author: Kin Lane
tags:
  - APIs.io
  - On-Premise
  - Discovery
  - Kin Score
  - Open Models
  - Governance
  - APIs
---
Ever since we launched APIs.io in 2014, one request has come up more than any other: can I run this inside my company? People did not want a public search engine for other people's APIs as much as they wanted one for their own. Most organizations cannot answer a simple question, *what APIs do we have?*, because the answer is scattered across hundreds of Git repositories, Confluence spaces, old developer portals, gateways and docs sites. Some of those APIs have an OpenAPI. Many have nothing but a wiki page.

For twelve years my answer was some version of "not yet." The public catalog was built on a lot of manual work, and then on hosted AI models, and neither of those is something you can hand to a company and say "run this behind your firewall with your source code." That has changed, and I am starting to work with design partners on [APIs.io On-Premise](https://apis.io/on-premise/).

## What changed: the model runs on a box

The profiling that powers APIs.io, reading a company's docs and repositories, finding and verifying its contracts, writing the artifacts the Kin Score reads, now runs on an open-weight model on hardware I own. It is **gpt-oss-120b**, OpenAI's open-weight model, in MXFP4 quantization (a 59 GB GGUF file), served locally by `llama-server`. No tokens leave the machine, and there is no per-token bill.

I did not trust that until I measured it. A few things I learned along the way:

- **Not every local model will do.** I tried several. One fast model finished a profile in four minutes and invented about half its links, reporting pages that did not exist as verified. gpt-oss-120b probed the same things, said plainly what was not there, and found the real pages instead. For a catalog, an honest "I found nothing" is worth far more than a confident fabrication.
- **It holds up against a frontier model.** I ran the full pipeline on six of the best-documented providers in the catalog with both Claude and the local model. The local model landed within about one to ten points of Claude on every one, and tied on one. It did it in roughly half the wall-clock time, and for $0 against $55.25 for the Claude runs.
- **The gaps were mine, not the model's.** Every large difference traced back to a deterministic probe of mine that failed, which the local model then reported honestly as "nothing found." Those are fixable in code, and fixing them lifts every engine at once.

That last point is why I am confident about taking this inside other people's walls. The quality does not come from the model being clever. It comes from the scripts, schemas and checks around it doing most of the work, with the model reading and writing in the gaps. That is a system I can adapt to a company's infrastructure.

## What the appliance does

The idea is a self-contained appliance. It starts on a single Mac mini, with a Mac Studio next, and it adapts to how you already work rather than asking you to adopt a new platform:

- **It spiders for APIs** across your Git repositories, Confluence, internal portals and documentation: OpenAPI, AsyncAPI, GraphQL, Postman collections, MCP servers, and the APIs that are only described in prose.
- **It aggregates them** under a single GitHub organization, GitLab group or Bitbucket workspace, one repository per API producer, each with an APIs.json index and its contracts, schemas, examples and rules. That is exactly how the public catalog is managed today.
- **It profiles and scores** each one with the [Kin Score](https://apis.io/rating/), re-weighted to your priorities: your governance rules, your security posture, your agent-readiness goals, with a blueprint of what each team can do to raise its score.
- **It publishes your own APIs.io** as a static site wherever you already host internal sites: GitHub Pages, AWS, Azure or anything else. No new database, no new SaaS platform to approve.
- **It fits alongside the AI your teams already use**, Claude or Copilot, so the catalog it builds is something those tools can read and act on.

Git is the system of record and a static site is the front door. Everything in that list already runs every day across the public catalog of more than 27,000 providers. On-premise is the same machinery pointed inward.

## Why design partners, and not a product page

I am being careful about how I say this: this is a first draft. I am working with a handful of small and medium-sized companies to find out what is actually possible in real environments. That means real Git estates, real documentation sprawl, real security reviews, and real opinions about what a score should reward. Every organization has its own mix of GitHub and GitLab, wikis and portals, gateways and hand-rolled services. The appliance has to bend to that, and the only way to learn how is to do it with people who have the problem.

What I get from a design partner is the truth about their environment. What they get is a private catalog of their own APIs, scored and published, and a hand in shaping how the thing works before it hardens into a product.

It also matters to me beyond revenue. Everything I have learned about agent readiness from the public web applies with more force inside a company. Your internal APIs are what your own agents will call first, and an agent cannot reuse what nobody can find. A private catalog, scored for agent readiness, is the inventory you need before any serious agent strategy.

## If you want in

If "what APIs do we have?" is a question your organization cannot answer, and you would rather not send your source code to a hosted AI provider to find out, [request a quote](https://apis.io/on-premise/#quote). Tell me where your code lives, what your teams use, and what you are trying to solve. Every request is read by a person, and the conversation is the point.
