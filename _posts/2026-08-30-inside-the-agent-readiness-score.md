---
published: true
layout: post
title: Inside the Agent-Readiness Score
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/inside-the-agent-readiness-score.png
date: 2026-08-30
author: Kin Lane
tags:
  - Agent Readiness
  - Agents
  - AI
  - Ratings
  - Machine Readability
  - APIs
---

The [API Evangelist Rating System](https://apis.io/rating/) gives every provider two scores, and the second one is the one I care about most right now: agent readiness. It is a standalone number from zero to one hundred, and the most important design decision is that word--standalone. It is *not* blended into the composite quality score. A provider can be thin for humans and ready for agents, or strong for humans and useless to their agents, and collapsing those two situations into one number hides the exact gap the score exists to expose. So agent readiness rides on its own axis, and it answers a narrower question than composite quality: not "is this a good API," but "can an autonomous agent drive this API without a human papering over the gaps?"

The reason the question is different is that a human developer silently absorbs an enormous amount of API friction. An ambiguous error message, an idempotency convention nobody wrote down, a rate-limit behavior you only learn by getting throttled, a prose-only description of the auth flow, a change log that only exists as HTML--a person works around all of it and keeps going. An agent cannot. Every implicit convention a human quietly powers through is a place an agent retries blindly, double-charges a card, or hallucinates a payload it was never shown. Agent readiness is the discipline of finding those implicit conventions and checking whether the provider has replaced them with machine-readable signals.

The score is built from twelve dimensions worth a hundred and four points total, and the points are not evenly distributed--they are weighted by how badly an agent breaks without each one. A **machine-readable contract** is the single largest award at eighteen points, because agents call APIs from contracts, not HTML docs, and with no spec there is simply no programmatic surface to drive. Next is the **agentic-access contract** at fifteen--an explicit `x-agentic-access` classification of each operation by action-class, consequence, and human-in-the-loop escalation, the most direct "this API was designed for an agent" signal in the catalog. Then an **MCP server** at twelve, **machine-readable auth** at ten, and **idempotency** at nine, because agents retry and idempotency is what stands between a retry and a duplicate charge. After that come **stable error semantics** at eight, **request and response examples** at seven, **rate-limit signaling** at seven, a **typed event surface** at six, **agent skills** at five, a **well-known catalog** at four, and **consent and bot-identity signals** at three for the providers defining the frontier.

Those points roll up into four honest bands. **Agent-Native**, sixty and above, is about one and a half percent of the catalog--providers built to be driven by agents, with the baseline contract plus the differentiators most lack: an MCP server, idempotency, stable errors, examples. **Agent-Ready**, forty-five and up, is the largest band at forty-three percent: an agent can drive the core surface--there is a machine-readable contract, an agentic-access classification, documented auth--but the safety rails like idempotency and rate-limit signaling mostly are not there yet. That plateau is honest, not a calibration miss; a huge cohort of providers share exactly that baseline. Below them, **Agent-Aware**, fifteen and up, is a partial surface an agent can read but where it would hit implicit conventions and get stuck, and **Human-Only** at the floor is the thirty-nine percent where a developer can integrate but their agent cannot yet.

I will also be honest about the edges of the current model, because that transparency is the product. Today several dimensions are credited from a provider-level link--an "idempotent requests" doc, a documented rate limit, an error-catalog page--rather than from parsing every operation in the spec. That is a real distinction, and it is why the deeper checks are already on the roadmap: confirming that mutating operations actually declare an `Idempotency-Key` header, that responses document `X-RateLimit-*` state, that a single error schema is referenced across 4xx and 5xx, and the rarest and safest affordance of all, a dry-run or simulate parameter on destructive operations so an agent can plan an action before it commits. The difference between a provider *saying* they support idempotency and a *contract an agent can act on* is exactly the difference agent readiness exists to measure, and the score gets sharper as those checks land. You can read all twelve dimensions, their points, the four bands, and the planned deeper checks on the [rating page at APIs.io](https://apis.io/rating/).
