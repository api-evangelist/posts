---
layout: post
title: "Guardrails, Not Gates: Supreet Nagi on Taming the API Jungle"
date: 2026-04-23
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-freeway-carss-overpass.jpg
category: "Blog"
excerpt: "Supreet Nagi's new handbook reframes API governance as highway engineering instead of tollbooth staffing. The metaphor holds because the underlying architecture does — and it lands at exactly the moment enterprises need a machine-readable map for their AI agents to follow."
---
Supreet Nagi recently sent me his new handbook, [From Chaos to Connectivity: The API Practitioner's Handbook](https://www.linkedin.com/posts/supreet-nagi_from-chaos-to-connectivity-by-supreet-nagi-activity-7432637737637326848-hqdV/). I read it when it sent it to me, but it keeps coming up in my work as something I needed to revisit. Thirty pages, a tight narrative arc, three recurring personas, and a single metaphor carried all the way through: your enterprise's API estate is either a jungle or a highway, and you get to choose which.

I've been writing about API governance for fifteen years. I've watched the phrase "API-first" go from fringe to cliché to something enterprises put on slides without meaning it. Supreet's self-published handbook is the clearest articulation I've read in a while of why most of those slides never turned into working governance, and what a real alternative looks like.

## The Jungle Everyone Pretends Not to Have
Supreet opens with a diagnosis that will read as uncomfortably familiar to anyone who has actually worked inside a large enterprise: the APIs are everywhere, nobody knows where they are, and the people whose job is to know can't keep up. He calls it the API Jungle. Four services named `Payments`, `New_Payments`, `Payments_v2_final`, and `BillingSvc`, none of them documented, two of them owned by teams that no longer exist. A developer named Ada spends three hours on digital archaeology, gives up, and writes a fifth one — which joins the jungle.

That story has been true at every company I've worked with. The details change. The shape does not. I've been at this for 15 years. Same story.

What Supreet does well is refuse to treat this as a purely technical problem. He names the human cost directly through three personas — Ada the developer, Alex the consumer, Iris the inspector — and walks each of them through the workflow that produces their specific flavor of frustration. Ada contributes to sprawl because finding a trustworthy existing service is harder than building a new one. Alex's project slips two weeks because the API he was promised doesn't exist in the way he was told. Iris is a cartographer with pen and paper, auditing a landscape that's shifting faster than she can draw it.

Supreet's approach reflects why I am using more personas in my work.

None of these people are doing anything wrong. The system they're in produces these outcomes regardless of individual effort. That's the observation that matters.

## Why the Architecture Review Board breaks

The root cause Supreet identifies is specific and correct: the Architecture Review Board model. A central committee that meets every other Tuesday to approve new APIs. On paper this ensures quality. In practice it ensures that teams with real deadlines route around it, and the routes they take become Shadow APIs — services built deliberately off the books because the official process would destroy the project timeline.

The governance model designed to create order ends up producing chaos, because it forces developers to work around it to get anything done. Once you see it named this clearly, you can't unsee it.

His reframe is the one I've been reaching for and not quite finding words for: governance should not be a gate. It should be guardrails on a highway. Guardrails don't stop you. They keep you from going over the edge while you move at speed. Gates stop everyone equally — the careful driver and the reckless one — and they create traffic jams that push people to find side roads.

## The Four Workflows That Replace the Committee
The operational heart of the handbook is a closed-loop model with four workflows. I want to list them because the names are worth knowing, and because together they describe something different from what most API management platforms currently deliver:

- **Deployment Workflow** — Policy-as-Code runs inside the CI/CD pipeline. Security headers, documentation completeness, standards adherence — all checked automatically, with feedback surfaced in the pull request and the IDE in minutes, not weeks. The same pipeline registers the new service with the central gateway and catalog automatically. You cannot deploy without being registered, and because registration costs nothing, there's no reason to hide.
- **Endorsement Workflow** — Services are tiered automatically based on their compliance score. Bronze, Silver, Gold, Production Ready. Domain experts endorse the business value of the API; they do not block on technical details the automation already verified. The role of humans shifts from gatekeepers to strategic advisors.
- **Reporting Workflow** — A live governance dashboard replaces the manual audit. When a Log4j-scale vulnerability is announced, Iris adds a new policy and the dashboard instantly flags every non-compliant API across the estate. The policy flows back into the Deployment Workflow so the next build enforces it. The loop closes.
- **Retirement Workflow** — Gateway telemetry identifies Zombie APIs: services with no HTTP 200 responses, no active consumers, or no traffic in 90 days. Sunsetting workflows trigger automatically. The highway gets swept.

What's elegant about this architecture is that each workflow feeds the next, and the whole thing is driven by data the gateway is already collecting. No new observability stack. No bolted-on compliance layer. The governance is a consequence of the runtime, not a separate system trying to keep up with it.

## The Golden Path is What Matters
The piece of the handbook I keep returning to is the Golden Path — the pre-approved, hardened tech stack Ada uses to start her new project. She gets a baseline-compliant API out of the box. The CI/CD pipeline is already wired. The registration with the catalog is automatic. By the time she writes her first line of business logic, she's already halfway down the highway.

This is the lever that makes everything else work. Zero-Touch Governance fails if the compliant path is harder than the non-compliant path. It succeeds when the easiest way to ship is also the right way to ship. That's a cultural claim more than a technical one, and Supreet is right to treat it as the central executive responsibility: sponsor the Golden Path and fund the experience of using it.

Every governance program I've seen fail has failed here. Every one that succeeded treated developer experience as a first-class concern. The handbook makes that explicit.

I am enjoying this phase of questioning everything I (we) know about API governance -- I am doing it in my Naftiko work right now.

## Where this lands for AI

As required, Supreet spends times on on the Agentic AI imperative, and this is where I think the handbook lands at exactly the right moment. The argument is simple: AI agents don't chat anymore, they act, and acting means calling APIs. If your APIs live in a jungle, your agents hallucinate endpoints, call deprecated services, and fail to find the tools they need. If your APIs live on a highway — documented, tiered, discoverable, with machine-readable specs — your agents have a map.

The phrase he uses is Contextual Grounding. A standardized, machine-readable API catalog is the grounding layer that lets an agent operate your business safely. Without it, every prompt is a hope. With it, every call is a known-safe operation with known-safe boundaries.

This is the same territory Clemens Vasters is working on from the schema side — the idea that agents need faithful, precise metadata because they don't have the out-of-band human context that developers rely on. Supreet is working the governance layer. The same principle holds: the richness of the machine-readable surface determines what the agent can do correctly. Vague catalogs, like vague schemas, produce noise. Precise catalogs produce signal.

You cannot bolt this on later. You build it by making the Deployment Workflow require the OpenAPI spec, by making the Catalog mandatory, by making the Gateway the only path in. That's what Zero-Touch Governance actually buys you — not a cleaner architecture diagram, but an enterprise surface that an autonomous agent can operate against without hallucinating.

## What Brought Me Back to This Work

Three things from the handbook have stuck with me.

The first is Supreet's metric suggestion for executives: don't ask "are we compliant?" — ask "how long does it take to deploy a secure API?" That reframing is everything. Compliance is a binary snapshot that rewards paperwork. Time-to-secure-deploy is a continuous measurement that rewards investment in the Golden Path. One produces theater. The other produces velocity.

The second is the treatment of the ARB. Most governance writing I've read treats the review board as either essential or evil. Supreet's framing is subtler: the ARB isn't wrong — it's the wrong *shape*. A committee that meets every other Tuesday cannot keep up with a CI/CD pipeline that deploys every hour. The automation doesn't replace human judgment; it replaces human throttling. The humans move up the stack to strategic endorsement, where their judgment actually matters.

The third is the closing line: *"The future of your business is programmable. Govern it accordingly."* That sentence deserves to outlive the handbook. Enterprises that still treat APIs as back-office plumbing are going to be at a disadvantage that compounds every quarter as agent-driven work expands. Enterprises that treat their APIs as the programmable surface of the business — and govern that surface with the seriousness it deserves — will be the ones who get to operate at AI speed.

## Where to find it

Supreet Nagi's handbook is worth reading if you're running API governance, building AI-agent-facing platforms, or trying to convince an executive team that APIs are strategic infrastructure rather than developer tooling. You can reach him at thesupreetnagi@gmail.com or find him on LinkedIn as supreet-nagi. His site is supreet-nagi.com.

The ideas in this handbook aren't new in the sense that every component — Policy-as-Code, service catalogs, gateway telemetry, CI/CD integration — already exists in the industry. What's new is the composition. Supreet has assembled a coherent closed-loop operating model out of parts most enterprises already own, and he's described it in language an executive can act on. That's rarer than any individual piece of technology, and in 2026 it matters more than it ever has.

At Naftiko we think about API capabilities as the unit of work that agents can reach for, reason about, and execute against. The case Supreet makes for Zero-Touch Governance is the same case for why capabilities need to be first-class, discoverable, machine-readable artifacts — not tribal knowledge trapped in Confluence. The jungle is the failure mode. The highway is the goal. [He just wrote the clearest map I've seen of how to get from one to the other](https://www.linkedin.com/posts/supreet-nagi_from-chaos-to-connectivity-by-supreet-nagi-activity-7432637737637326848-hqdV/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/qr3CXPdgpjw?si=wN8CegJ8ercj63oT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>