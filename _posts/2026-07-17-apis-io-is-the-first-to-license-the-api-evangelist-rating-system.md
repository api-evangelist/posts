---
published: true
layout: post
title: APIs.io Is the First to License the API Evangelist Rating System
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-io-is-the-first-to-license-the-api-evangelist-rating-system.png
date: 2026-07-17
author: Kin Lane
tags:
  - API Discovery
  - API Governance
  - Ratings
  - Agent Readiness
  - Machine Readability
  - APIs.io
---

I have spent my whole career forming opinions about whether an API is any good. Not whether the company behind it is valuable, and not whether the product is clever, but the narrower and more useful question: can I actually find this API, understand it, trust how it behaves, and integrate it without a human having to sit beside me and explain the parts that were left out of the documentation. I have made that judgment thousands of times, mostly in my head, and for most of that time it lived as instinct rather than as anything anyone else could pick up and run themselves. I have finally written it down. It is the API Evangelist Rating System, and today I am announcing that APIs.io is the first company to license it.

The reason to turn instinct into a rubric is that instinct does not scale and it does not travel. A score that only exists in my head cannot rate nine thousand providers every week, cannot be argued with, and cannot be improved by anyone but me. So I did the unglamorous work of making the judgment explicit. The rating system measures a provider's public API surface across a composite quality score and a separate agent-readiness score, and every input is machine-readable and published. There is no panel, no vibes, no pay-to-play tier that buys a better number. A provider earns points for the artifacts they actually publish--an OpenAPI contract with real descriptions and error responses, a change log, documented rate limits, plans a buyer can read without a sales call--and the whole rubric is out in the open so anyone can see exactly why they scored what they scored and precisely what would move them up.

The composite score is the part people expect: how complete, transparent, and integration-ready an API is for a developer. It is a weighted blend of six facets and dozens of individual checks, and it is deliberately blunt, because the point is comparability, not a certificate. The part I care about more right now is the second score, agent readiness, which I kept separate on purpose. A human developer papers over an enormous amount of API friction--ambiguous errors, undocumented idempotency, prose-only auth, an HTML-only changelog. An agent cannot. Every implicit convention a human silently absorbs is a place an autonomous agent retries blindly, double-charges a card, or hallucinates a payload. Agent readiness measures whether a provider has replaced those implicit conventions with machine-readable signals, and it is scored on its own axis because a provider can be thin for humans and ready for agents, or strong for humans and useless to their agents, and collapsing that into one number hides the exact gap the score exists to expose.

I did not build this to be a black box that I rent out. I built it to be the opposite. The rubric is versioned, the checks are enumerated with the points they award, and the bands are calibrated against the real distribution of the catalog rather than picked to flatter anyone. If you disagree with a weight, you can see the weight. If you think a check is wrong, you can see the check. That transparency is the entire product, because a rating nobody can inspect is just an opinion with better production values, and the industry has enough of those.

APIs.io licensing it first matters because it is the right proving ground. APIs.io is a discovery engine sitting on top of thousands of providers, which is exactly the scale at which a rating stops being a blog post and starts being infrastructure. The score now runs across the entire APIs.io catalog on every rebuild, it shows up in search results and on every provider's page, and it is served through the APIs.io API and MCP server so that both people and their agents can filter and rank by it. You can read the whole methodology, every check, and both scoring axes on the [rating page at APIs.io](https://apis.io/rating/). It carries the API Evangelist name because it is my judgment, my research, and my rubric--APIs.io is where it runs.

This is also a model for how I intend to keep working. I have said before that I do not think a single tool solves API discovery and governance, and I still believe that. What I can do is produce the load-bearing, machine-readable pieces that others build on--a rating system, a set of governance rules, a discovery format--and license them to the companies who are already doing the work at scale. APIs.io is the first to license the rating system. It will not be the last. If you run a catalog, a marketplace, a gateway, or a procurement process and you want to score API surfaces on a rubric that is open, agent-aware, and not for sale to the highest bidder, the system now exists, it is proven, and you can license it too.
