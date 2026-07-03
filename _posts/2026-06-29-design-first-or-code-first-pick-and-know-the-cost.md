---
published: true
layout: post
title: "Design-First or Code-First: Pick, and Know the Cost"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/design-first-or-code-first-pick-and-know-the-cost.png
date: 2026-06-29
author: Kin Lane
tags:
  - API Governance
  - API Design
  - OpenAPI
  - API Lifecycle
  - APIs
---
Every governance program eventually hits this fork in the road, and you have to be honest with yourself about which side of it you're on, because it determines when governance is even possible. Design-first means the [OpenAPI contract](https://apievangelist.com/2026/06/25/openapi-is-the-unit-of-governance/) gets authored and agreed before the code exists, and governance runs against the design. Code-first means the code gets written and the OpenAPI is generated from it afterward, usually out of annotations, and governance runs against the result. These are not just workflow preferences. They are two completely different timelines for when you get to catch a problem, and the difference in cost between catching a design problem early and catching it late is enormous.

Design-first is the strong position, and I'll say plainly that it's the one I want for anything that matters. When the contract is authored before the code, you catch problems when they're still cheap, the spec is genuinely the source of truth instead of a description of what already got built, and — this is the part people underrate — product and engineering negotiate on the spec rather than on the running service. That last point is the whole game. The most serious design-first operation I ever worked inside ran its public APIs through a real design process, hosted in a proper design tool, with a review panel that actually had authority. Governance had teeth there precisely because it happened before the code was poured, when changing a decision still meant changing a document instead of changing a deployed system that consumers already depended on.

Code-first is the common reality, though, especially for internal APIs and anything legacy, and I'm not going to pretend otherwise or wag my finger at you for it. Governance can absolutely still run in a code-first world. It just runs after the fact, against a contract that describes what was built rather than capturing an agreement about what should have been built. That's a real limitation but not a fatal one — you can still lint it, review it, and catch a lot. What you can't do is catch the expensive design mistakes before they're already running in production with consumers attached.

So I am not dogmatic that every team on earth has to convert to design-first by next quarter. What I am dogmatic about is that you have to know which one you are, because it changes your entire [pipeline](https://apievangelist.com/2026/07/02/ci-cd-pipelines-make-governance-consistent/). And there's a specific failure mode I want to warn you about if you're code-first: the generated OpenAPI has to actually be good enough to govern. If your spec is an afterthought that nobody on the team ever opens, you've got the worst of both worlds — you don't have design-first discipline, and you don't have a trustworthy code-first artifact either. Your governance is running on fiction, linting a document that doesn't faithfully describe the thing it claims to describe. A code-first program lives or dies on whether the generated contract is real.

The realistic path for most organizations is a middle one, and it's the one I'd actually recommend out loud. You let teams iterate fast and loose in non-production, where speed matters and mistakes are cheap, and you tighten toward design-first discipline as an API approaches production readiness, where the cost of getting it wrong climbs steeply. Governance maturing alongside the API rather than being imposed uniformly from the first commit. The point is to make a deliberate choice, build your pipeline around it honestly, and stop pretending you're design-first when your spec is something a build step coughs up at the end. Know which one you are, and govern accordingly.
