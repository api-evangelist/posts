---
published: true
layout: post
title: API Governance Is 75% People Work
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/api-governance-is-75-percent-people-work.png
date: 2026-07-05
author: Kin Lane
tags:
  - API Governance
  - People
  - Organizational Change
  - API Lifecycle
  - APIs
---
Everything I've written about in this series up to now — landscape mapping, OpenAPI, JSON Schema, policies, Spectral rules, design-first, Git, the IDE, the pipeline, shifting left, reviews and provenance — all of that is the 25%. This post is about the other 75%, and it's the part nobody wants to hear, because you can't automate it, buy it, or skip it. After hundreds of enterprise conversations and a year of doing this work at scale inside a genuinely demanding operation, I am certain of this: API governance is mostly herding, navigating, and building trust with humans, with the rest a mix of business and technological work. The technical mandate you get handed is a disguise. The actual job is social and organizational, and no tool ships that part for you.

The Spectral rule that blocks a request body on an HTTP GET is trivial. Getting the team to understand why that rule exists, to empathize with the consumer on the other end of their API, and to have the actual emotional bandwidth to care about any of it — that's the work, and it's hard, and it doesn't show up in any dashboard. A few things I learned the hard way about this people layer. People will resist, and they will see governance as far bigger and scarier than it actually is, so you defuse it early and concretely: no, we are not making you rewrite your existing APIs, this is about moving forward. Most resistance is just fear of an unbounded mandate, and the fix is to bound it out loud, immediately, before the fear hardens into opposition.

You also have to understand where governance actually lives, and it lives at the intersection of Product, Engineering, and Platform, with the Consumer as a fourth force pulling on all of them. I draw it as a Venn diagram and I live in the overlapping center of it. Product brings the business requirements and the consumer's needs. Engineering brings what's actually feasible to build. Platform brings the standards and the shared infrastructure. And the Consumer, whether they're internal or external, brings the requirements that genuinely matter, because they're the ones living with whatever you ship. Governance is the facilitation layer that lets those parties reach agreement, with provenance. Without that framing, every team experiences governance as friction from some outside party with no skin in the game. With it, governance becomes the process by which agreement actually gets reached, which is a thing people will show up for.

Two more hard-won truths. The first: you own the artifacts, not the tooling. One of the most clarifying lessons of my career was learning to stay in my lane — I own the schemas, the policies, and the rules. I don't own the transformation, and I don't own the tooling that presents it. Let the vendors and the platform teams fight over tools. You own the contracts and the standards, and that boundary is what keeps governance from curdling into an empire-building turf war, which is how a quiet majority of governance programs actually die. The second: you will never get people to care by asking them to, so you automate and you incentivize instead. Make the compliant path the easiest path — wizards, scaffolding, templates, golden paths — and find the incentives, the ratings and recognition and yes even a little gamification, that pull teams toward good design instead of you forever pushing them.

The deepest thing I can tell you is this: API governance is a measure of how well teams are educated and equipped for their job. Read that twice. A low-governance organization is almost never a defiant one — it's an under-resourced, under-taught one. Treat governance as an education and enablement function and you will get further than any blocking rule will ever take you. Inconsistent APIs are a symptom. The disease is organizational, political, and human, and when you govern APIs at any real scale you eventually realize you're actually being asked to govern the enterprise. You have to be willing to do that work — the messy, human, 75% of it — or the beautiful technical stack from the rest of this series will sit there linting a landscape that never, ever changes. The tooling was always the easy part. The people are the job.
