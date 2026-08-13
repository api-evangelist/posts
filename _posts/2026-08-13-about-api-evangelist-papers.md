---
published: true
layout: post
title: About API Evangelist Papers
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/about-api-evangelist-papers.png
date: 2026-08-13
author: Kin Lane
tags:
  - Papers
  - Reports
  - Artificial Intelligence
  - Transparency
  - Disclosure
  - Kin Score
  - Business
---
*Editorial note: this is how the API Evangelist papers and reports are produced. I have published it as a permanent page at [About API Evangelist Papers](/about/papers), alongside [About API Evangelist](/about/api-evangelist), [About Kin Lane](/about/kin-lane), and [my stance on how I use AI](/about/artificial-intelligence). It is linked from the navigation across the network, and from the top of every paper on the storefront. When the process changes, I will change the page and say so.*

I have been writing white papers on the API space for over fifteen years now — API management, security, design, discovery, governance, and much more. The [API Evangelist Fundamentals](https://papers.apievangelist.com/) papers are the continuation of that tradition in storytelling.

The Fundamentals are not the lively, opinionated stories you get here on the blog. They are true to white paper form — drier, down to business — while still bringing the API Evangelist expertise and flavor to a medium-form industry paper. One practice, distilled, in about twenty pages, for the operator who has to do the work on Monday.

## The reports

More recently I began publishing **reports** alongside the Fundamentals. Where a Fundamentals paper distills a practice, a report measures a population. There are four shapes: **Market Reports** on one area of the API space like API management, one industry like market data, or a combined industry and country like US healthcare; **Standard Reports** on one standards body and the distance between claiming a standard and shipping a callable contract for it; **Portfolio Reports** on one venture fund's book, read through the APIs its companies actually ship; and **Insights Bundles** on a single enterprise account, read from both the demand side and the supply side.

Every report ships a PDF, an executive summary, and a highlights document designed for a human to read or scan. It also ships a machine-readable data bundle — every provider, every score, every artifact inventory, in JSON, CSV, YAML, and Markdown — so the report has a doorway an AI can start at rather than a wall. The public report page is that doorway, and every report carries a provenance section stating where each number came from, and a references section explaining how the research was produced.

## How they are produced

I want to be straightforward about this. **The reports are generated using artificial intelligence.**

A single Agent Skill dedicated to producing reports takes the machine-readable artifacts already compiled for every API provider in the cohort and assembles them into a state of the market: a resource taxonomy, composite scoring, an agent-readiness read, a blueprint, provenance, the standards considered, the regulatory regimes evaluated, the artifacts used, security considerations, a provider-by-provider walk, an investable thesis, and where the research goes next. It is formulaic, data-driven, and conversational. It is also undeniably AI-generated, and I would rather say so plainly than have you work it out.

What sits underneath it is not a prompt. Over forty distinct artifact recipes — Agent Skills and pipeline steps — run against each individual provider to search for, generate, or derive what that provider publishes: OpenAPI and AsyncAPI contracts, JSON Schema, scopes and security, plans and rate limits, MCP servers, agent skills, well-known files, and the rest. One Agent Skill then produces the report from what those recipes found. I am constantly refining, but also stabilizing, those skills against what over fifteen years of watching this industry says should be there.

Every provider is then scored on the [Kin Score](https://apis.io/rating/), a public rubric applied identically to everyone in the catalog. Version 0.11.0 reads eight facets across 111 checks — discoverability, contract quality, governance, operational transparency, developer ergonomics, commercial clarity, a conditional regulatory layer covering eight industry regimes, and open source — and sorts providers into six bands. A standalone Agent Readiness rating reads fourteen more dimensions of whether a machine could actually use what a provider ships.

The rubric is iterated on regularly, based on what provider profiling and report generation turn up. We repeat. We refine. We fix mistakes. We balance determinism and non-determinism wherever we can. When the rubric changes, providers are re-scored and the next version of every affected report is regenerated — which is why every report carries a version number and a date, and why a number quoted from an older version may not match today's.

## The data is open

All of the data compiled for these reports is open source and published on the [API Evangelist GitHub organization](https://github.com/api-evangelist), and browsable at [APIs.io](https://apis.io). If you want to take a crack at making sense of an area or a market yourself, everything the reports are built from is there. What you are buying is the assembly, not access to the evidence. I think the approach baked into those artifact recipes and the Kin Score is a compelling one — but you do not have to take my word for it, because you can check it.

## What you get, and what it costs

The papers are written for humans first. They are dense. They are technical, but they are not code. That density is necessary — there are a lot of moving parts in these markets — and while every report is distilled down into something anyone can read or scan, the bundle is deliberately designed for consumption by the AI platform of your choice. The bar is kept low: a single ZIP of PDF, Markdown, YAML, CSV, and JSON.

Market Reports are $500, varying with scope. Portfolio Reports are $750. Insights Bundles are $1,500. Fundamentals papers are $25. Standard Reports are free, because a specification everybody is asked to adopt is a public good, and putting the adoption number behind a paywall is what keeps the gap invisible in the first place.

A human can buy with a credit card through Stripe checkout. A machine door is built and proven, so an agent will be able to purchase directly using the [x402](https://x402.org) protocol — it is not switched on for live purchases yet, and the about page will say so when it is. The goal is to meet the market where it is today, while acknowledging that this varies from industry to industry and role to role.

## If it is wrong, or if it was not worth it

I hope you find these reports useful as a buyer or a seller in any of these markets. Two promises go with them.

**If a report did not bring you the value you needed, tell me and I will refund your money.** No form, no argument.

**If you find anything wrong or inconsistent, tell me and I will correct it in the next version.** Corrections are the feedback loop these reports run on, and any provider is free to submit one or ask for a re-score at no charge.

Email [info@apievangelist.com](mailto:info@apievangelist.com) either way. A person answers.

These reports are produced across a wide number of areas and industries using a consistent process, on Agent Skills and a Kin Score rubric that keep evolving from feedback — both human and agentic. What they are trying to do is combine sixteen years of API experience, technical and business, with fast-moving insight into an AI moment we are all still trying to make sense of.

Let me know how I can improve them.
