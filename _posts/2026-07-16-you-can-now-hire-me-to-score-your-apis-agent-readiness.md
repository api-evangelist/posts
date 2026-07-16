---
published: true
layout: post
title: You Can Now Hire Me to Score Your API's Agent Readiness
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/you-can-now-hire-me-to-score-your-apis-agent-readiness.png
date: 2026-07-16
author: Kin Lane
tags:
  - Agents
  - AI
  - Agent Readiness
  - API Governance
  - Services
  - APIs
---
A few months back I published an [Agent Readiness framework](https://github.com/api-evangelist/agent-readiness) on GitHub--a plain, nine-dimension model for scoring whether an API surface can actually be driven by an autonomous agent, not just read by a human developer. I built it as an open thing anyone could use to score themselves or a third party, scored 0 to 3 across each dimension, with a reference set of what good looks like. I did not build it to sell anything. But the emails started arriving, and they all asked a version of the same question: *do you offer paid consulting to run this against our APIs?* So I am making it official. You can now hire me to do exactly that, and I have added [Agent Readiness](https://apievangelist.com/services/governance/agent-readiness/) to my governance services.

Here is the problem the framework exists to name. A human developer can paper over an enormous amount of API friction. An ambiguous error message, an idempotency convention nobody wrote down, a rate-limit behavior you only learn by getting throttled, a prose-only description of the auth flow, a changelog that only exists as HTML--a person absorbs all of that silently and keeps going. An agent cannot. Every implicit convention a human quietly works around is a place an agent gets stuck, retries blindly, double-charges a card, or hallucinates a payload it was never shown. Agent readiness is the discipline of finding those implicit conventions and replacing them with machine-readable signals. And here is the part teams underestimate: it is mostly *not* new work. It is taking the things good API teams already do--OpenAPI, idempotency keys, rate-limit headers, stable error envelopes, status pages, event contracts--and making them discoverable and consistent enough that a non-human consumer can rely on them.

The framework scores nine dimensions from a single evidence URL each: spec presence, auth-model clarity, idempotency, error semantics, rate-limit headers, dry-run or simulate mode, meaningful OpenAPI examples, an MCP server, and typed event contracts. Then three more forward-looking signals--a real `/.well-known/api-catalog`, machine-readable AI consent, and cryptographically identified agent traffic. Each one is scored zero for absent, one for partial, two for present, three for exemplary, and the whole thing rolls up into an overall posture you can hold next to reference providers like Stripe, GitHub, and Twilio. The model is deliberately blunt. The point is comparability, not a badge. There is no certification scheme here and there never will be--just an honest, evidenced number.

What makes this worth paying for is the same thing that makes it useful: it is neutral. Because the framework is public, and because I score every provider across [apis.io](https://apis.io) the same way, the number I hand you is not a sales instrument dressed up as an audit. It is an outside read your own teams and your own stakeholders can trust precisely because I am not entangled in your internal politics and I am not selling you the thing you are supposedly failing at. When I tell you where you sit, you can take that score into a roadmap conversation and nobody in the room gets to wave it away as marketing.

The shape I like most is not a one-time score--it is a *before and after*. Score your public API surface today, get a prioritized remediation roadmap out of it, go ship the improvements, and then let me re-score against the exact same rubric so you can prove, with evidence, how far you moved. That second number is the one that matters. It turns "we think we got more agent-ready this quarter" into a defensible delta you can put in front of leadership, or a customer, or a board. The first company to take me up on this framed it that way almost word for word--a baseline before they do the work, and a measurement after--and I think that is exactly the right instinct.

So what you walk away with is a scored scorecard across all twelve dimensions, each one backed by a specific evidence URL so the number is auditable; a prioritized roadmap of what to fix and in what order to move each dimension up; a benchmark against reference and peer providers so the score has market context instead of floating in a vacuum; and, if you want it, a re-assessment pass that quantifies the improvement. I run it as a fixed-scope engagement, not billable hours, because the value is in the deliverable, not the clock.

If you want a neutral, evidenced read on how agent-ready your APIs really are--and a clear path to raise it--that is the work. You can read more on the [Agent Readiness service page](https://apievangelist.com/services/governance/agent-readiness/), poke at the [open framework on GitHub](https://github.com/api-evangelist/agent-readiness), or just [email me](mailto:info@apievangelist.com?subject=Agent%20Readiness%20assessment) and we will scope it. The agents are already showing up at your API. The only question is whether your surface was built for them, and right now most teams genuinely do not know the answer. This is how you find out.
