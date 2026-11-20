---
published: true
layout: post
title: 'APIdays Paris: Who Is Talking About Agent Readiness, And How The Kin Score Measures It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apidays-paris-agent-readiness-who-is-talking-about-it-and-how-the-kin-score-measures-it.png
date: 2026-11-21 13:00:00 +0000
author: Kin Lane
tags:
  - APIdays
  - Events
  - Kin Score
  - Agent Readiness
  - MCP
---
API Evangelist, [APIs.io](https://apis.io) and [OpenLint](https://openlint.org) will all be at [APIdays Paris](https://www.apidays.global/events/paris) at CNIT Forest, La Défense, December 1 to 3. I'm speaking and moderating across the APIOps Conference, the main Apidays stage and the Europe API Conference. APIs.io is where the [Kin Score](https://apis.io/rating/) is published for more than 41,000 API providers. OpenLint is the open specification and toolbox for linting API artifacts, which we're bringing to the room as an open-source governance opportunity, especially for government.

Before the event I [read every session on the agenda and mapped each one to the Kin Score facet it speaks to](https://talks.apievangelist.com/events/apidays-paris-2026/). That's 339 sessions across ten tracks. Every day between now and the event I'm taking one facet and showcasing the speakers who are talking about it, and how what they're saying relates to what the Kin Score measures.

## Agent Readiness at APIdays Paris

Agent Readiness is the biggest topic in Paris by a wide margin. 107 talks touch it, and 65 are mostly about it. This year the conversation has moved past whether you have an MCP server to whether its tools are any good, who the agent is, and what a gateway should do with agent traffic.

My own sessions that speak to this facet:

- **Agents Inherit Your Governance: Whether You Meant Them To or Not**. Wed Dec 2.
- **You Cannot Bolt Agent Readiness Onto Ungoverned APIs**. Wed Dec 2.

## The speakers

- **MCP Needs More Domain-Specific Extensions**, Yann Jouanin (MCP APPS BUILDERS). Tue Dec 1, 09:55.
- **Agents Without Users: Giving Every Agent Its Own Identity**, Aaron Parecki (Okta). Tue Dec 1, 10:15.
- **Text and tool calls in one token stream: a hidden hard part of agents**, Jérémie Doucy (Bayes Impact). Tue Dec 1, 11:00.
- **Let the model make decisions. Let code move the data.**, Samuel Gaus (WunderGraph), Rom Kadria (Monday.com). Tue Dec 1, 11:00.
- **Let's Build, Secure, and Observe an AI Agent with an Agent Gateway**, Gbadebo Bello (Postman). Tue Dec 1, 11:00.
- **The problem isn't MCP. It's how we build MCP servers.**, Sébastien Charrier (Bump.sh). Tue Dec 1, 11:30.
- **How to design an MCP for agents, avoid the pitfall of the API wrapper**, Thomas Payet (Meilisearch). Tue Dec 1, 12:00.
- **Make Agentic AI Enterprise-Ready: Secure, Govern, and Observe Every Interaction**, Thierry Marchandise (Axway), Anuj Kumar (Axway). Tue Dec 1, 12:00.
- **MCP: Where Agents Meet Enterprise Governance**, José Carlos Chávez (Okta), Anuj Kumar (Axway). Tue Dec 1, 12:30.
- **Context Engineering: The Harness Decides What to Trust**, Ruben Marcus Luz Paschoarelli (Independent). Tue Dec 1, 14:00.
- **Safe to leave running: the engineering behind autonomous agents**, Paul-Emile Brotons (Anthropic). Tue Dec 1, 14:00.
- **Scale your AI agents, Keep control: A Live Demo from foundation to production**, Isabelle Mauny (Choreo Labs, formerly WSO2), Mohammed Riahi (Choreo Labs, formerly WSO2). Tue Dec 1, 14:00.
- **Your Agent Is Authorized. Your Data Isn't.**, Julian Kusenberg (SoftwareOne). Tue Dec 1, 14:30.
- **Every Call Is Opening Night for AI Agents**, Italo Vietro (Parloa). Tue Dec 1, 15:00.
- **The Context Supply Chain: Engineering Reliable Context for AI Agents**, Daniel Jarjoura (Rubbr). Tue Dec 1, 15:00.
- **API & marketing for agents**, Elie Chevignard (CEA). Tue Dec 1, 15:00.

That's 16 of them. [See all 107 Agent Readiness talks on the agenda](https://talks.apievangelist.com/events/apidays-paris-2026/#agent_readiness).

## How the Kin Score measures Agent Readiness

Agent Readiness is a separate 0 to 100 score on APIs.io, never blended into the composite Kin Score. It checks whether an agent can drive the API without a human filling in the gaps: a published OpenAPI, an MCP server, machine-readable auth, idempotency, stable errors, rate-limit headers, agent skills, a well-known catalog, protected resource metadata, and bound versus bearer credentials.

The speakers above are describing what good looks like from the inside: identity per agent, MCP designed for agents rather than wrapped around an API, gateways built for autonomous callers. The score is how I check, from the outside and across the whole catalog, whether providers have actually published those things. My argument in Paris is that you can't bolt agent readiness onto ungoverned APIs. The foundation has to be there first.

[How the Kin Score measures Agent Readiness on APIs.io](https://apis.io/rating/#agent-readiness).

If you're in Paris, find these speakers in the room. And come find me, APIs.io and OpenLint. I'll cover the next facet tomorrow.
