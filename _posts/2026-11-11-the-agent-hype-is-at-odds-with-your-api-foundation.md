---
published: true
layout: post
title: 'The Agent Hype is at Odds with Your API Foundation'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-agent-hype-is-at-odds-with-your-api-foundation.png
date: 2026-11-11
author: Kin Lane
tags:
  - Agents
  - Agent Readiness
  - Kin Score
  - Governance
  - MCP
  - Talks
---
Yesterday I shared the [panel on designing for the agentic experience](/2026/11/10/designing-for-the-agentic-experience-at-nordic-apis/) from Nordic APIs Summit in Stockholm. Today it's my closing talk from later that same day, which I've also added to the [API Evangelist videos](https://video.apievangelist.com/store/the-agent-hype-is-at-odds-with-your-api-foundation-nordic-apis-2026/).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ZOQ7t1iYK88" title="The Agent Hype is at Odds with Your API Foundation" frameborder="0" allowfullscreen></iframe>

I score roughly 25,000 API providers on two independent instruments. The [Kin Score](https://apis.io/rating/) is a 0–100 composite of governance fundamentals: contracts, documentation, security, support and operations. It also has a conditional regulatory layer that only applies to banking, health, payments, insurance, securities and government. Agent Readiness is a separate 0–100 rating across twelve dimensions. It measures whether an autonomous consumer can drive an API safely without a human filling in the gaps. The two are computed independently and never blended. That separation is the point, because it is the only way to prove there is a dependency between them.

The finding is that readiness is a layer, and a layer does not rise above its foundation. The dimensions that separate the agent-native band from everyone else are idempotency, error semantics an agent can branch on, auth and consent clarity, and rate-limit signaling. None of these are AI features. They are governance disciplines that were always supposed to be there. They just weren't load-bearing when a human developer was around to work around them. An agent does not consume an endpoint. It tries to complete a capability, and it fails at whichever contract in that chain is ungoverned. Readiness is bounded by the least-governed contract in the path.

That is why I'm skeptical of the race to ship MCP servers and Agent Skills. Without an API foundation that is well designed and governed, we are building a house of cards. The catalog shows it. Putting an MCP server on top of an ungoverned API does not move the readiness number. In a governed portfolio, it can make things worse, because it hands agents a confident interface to an unreliable contract. As a storyteller, I want to be able to cut through the press releases and mandates and see which companies actually have a handle on this moment. The scores let me do that.

In the talk I walk the rubric facet by facet and show what each one becomes once an agent is the consumer. Then I read the scored catalog for what actually moves readiness. Governance is shifting from an offensive strategy to a defensive one. The foundation underneath your platform determines how much of the agentic era you can absorb. If you want a defensible readiness number for your own estate instead of a press release, map your capabilities to the contracts behind them, score those contracts, and look for the weakest link. That's where the agent will fail, so that's where your work starts.
