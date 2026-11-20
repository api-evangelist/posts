---
published: true
layout: post
title: 'Every Talk At APIdays Paris, Mapped To The Kin Score'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/every-talk-at-apidays-paris-mapped-to-the-kin-score.png
date: 2026-11-19
author: Kin Lane
tags:
  - APIDays
  - Events
  - Kin Score
  - Agents
  - MCP
  - OpenAPI
  - APIs
---
[APIdays Paris](https://www.apidays.global/events/paris) is 1 to 3 December at CNIT Forest in La Défense, part of FOST Paris. Before I go, I did what I always do with an agenda: I read every session. FOST Paris is big, with 599 sessions across 27 tracks, so I read the ten that are about APIs: Apidays, GenerationAI, GreenIO, the API Standards Conference, the Europe API Conference, APIOps, ContextCon and MCP Summit, Karate Labs, Women in API and FINOS. That is 339 sessions, and I mapped each one to the [Kin Score](https://apis.io/rating/) facet it speaks to.

Same question as [London](https://apievangelist.com/2026/09/28/every-talk-at-apidays-london-mapped-to-the-kin-score/): what will the people on stage tell the room an API needs to be, and is the rubric I use across the [APIs.io](https://apis.io) catalog looking at the same things?

The short version. **Agent Readiness leads again.** It is the main subject of 65 talks and comes up in 108. What changed since London is the depth of the conversation: talks about a published contract (29), MCP servers (23) and, new this time, **the quality of MCP tools (18)**. Having an MCP server is no longer the story; whether an agent can use it is. That lines up with the [MCP Tool Quality](https://apis.io/rating/) check I added to the rubric in 0.27.0. **Contract Governance and Contract Quality** come next, with 25 and 24 primary talks, carried by the API Standards Conference and the APIOps day. **Accountability**, which I still don't score, is the main subject of 14. And the largest group by count, 78 talks, sits **outside the rubric**: the GreenIO track on energy and carbon, plus a long tail of agent-engineering talks that are about building agents, not publishing APIs.

Each talk is listed once, under the facet it is mostly about, with its day and Paris start time. Many of them touch several. To filter by facet, track or day, or see every facet a talk touches, the full mapping is at [talks.apievangelist.com/events/apidays-paris-2026/](https://talks.apievangelist.com/events/apidays-paris-2026/). Every talk and speaker links to the APIdays agenda, which is where you should go to plan your three days.

I'll be there all week. I'm part of the APIOps Conference day on Tuesday, I have two talks on the Apidays track, [Agents Inherit Your Governance](https://talks.apievangelist.com/2026-apidays-paris-inheritance/2026-apidays-paris-inheritance-outside.html) and [You Cannot Bolt Agent Readiness Onto Ungoverned APIs](https://talks.apievangelist.com/2026-apidays-paris-bolt-on/2026-apidays-paris-bolt-on-agent-hype.html), and on Thursday I open the Europe API Conference, the EU government track I'm moderating, with a keynote on [what Europe's government APIs look like from the outside-in](https://talks.apievangelist.com/2026-apidays-paris-eu-gov-keynote/2026-apidays-paris-eu-gov-keynote.html). Come find me.

## Agent Readiness

The biggest group of talks at APIdays Paris is about whether an AI agent can drive an API without a human filling in the gaps, and this year the conversation has moved past *having* an MCP server to whether its tools are any good. Agent Readiness is the separate score I use to measure it: a published OpenAPI, an MCP server and the quality of its tools, machine-readable auth, idempotency, stable errors, rate-limit headers, agent skills, a well-known catalog and protected resource metadata. [How the Kin Score measures it on APIs.io](https://apis.io/rating/#agent-readiness).

- **[MCP Needs More Domain-Specific Extensions](https://www.apidays.global/events/paris#agenda)** — [Yann Jouanin](https://www.apidays.global/events/paris#speakers) (MCP APPS BUILDERS) · Tue 09:55, ContextCon and MCP Summit  
  No abstract; domain-specific MCP extensions are shared vocabulary for agent tool surfaces.
- **[Agents Without Users: Giving Every Agent Its Own Identity](https://www.apidays.global/events/paris#agenda)** — [Aaron Parecki](https://www.apidays.global/events/paris#speakers) (Okta) · Tue 10:15, ContextCon and MCP Summit  
  No abstract; a distinct identity for every agent.
- **[Text and tool calls in one token stream: a hidden hard part of agents](https://www.apidays.global/events/paris#agenda)** — [Jérémie Doucy](https://www.apidays.global/events/paris#speakers) (Bayes Impact) · Tue 11:00, GenerationAI  
  How models switch to tool calls mid-stream and where that breaks; client-side, little provider-surface signal.
- **[Let the model make decisions. Let code move the data.](https://www.apidays.global/events/paris#agenda)** — [Samuel Gaus](https://www.apidays.global/events/paris#speakers) (WunderGraph), [Rom Kadria](https://www.apidays.global/events/paris#speakers) (Monday.com) · Tue 11:00, Apidays  
  Sponsor workshop; model decides, code moves data, a pattern for agent tool design.
- **[Let's Build, Secure, and Observe an AI Agent with an Agent Gateway](https://www.apidays.global/events/paris#agenda)** — [Gbadebo Bello](https://www.apidays.global/events/paris#speakers) (Postman) · Tue 11:00, Apidays  
  Routing an agent workflow through a gateway for credentials, tool access and observability.
- **[The problem isn't MCP. It's how we build MCP servers.](https://www.apidays.global/events/paris#agenda)** — [Sébastien Charrier](https://www.apidays.global/events/paris#speakers) (Bump.sh) · Tue 11:30, ContextCon and MCP Summit  
  No abstract; building MCP servers well.
- **[How to design an MCP for agents, avoid the pitfall of the API wrapper](https://www.apidays.global/events/paris#agenda)** — [Thomas Payet](https://www.apidays.global/events/paris#speakers) (Meilisearch) · Tue 12:00, ContextCon and MCP Summit  
  No abstract; designing MCP for agents rather than wrapping the API one-to-one.
- **[Make Agentic AI Enterprise-Ready: Secure, Govern, and Observe Every Interaction](https://www.apidays.global/events/paris#agenda)** — [Thierry Marchandise](https://www.apidays.global/events/paris#speakers) (Axway), [Anuj Kumar](https://www.apidays.global/events/paris#speakers) (Axway) · Tue 12:00, Apidays  
  Securing, governing and observing agent, MCP and API interactions.
- **[MCP: Where Agents Meet Enterprise Governance](https://www.apidays.global/events/paris#agenda)** — [José Carlos Chávez](https://www.apidays.global/events/paris#speakers) (Okta), [Anuj Kumar](https://www.apidays.global/events/paris#speakers) (Axway) · Tue 12:30, ContextCon and MCP Summit  
  No abstract; MCP under enterprise governance.
- **[Context Engineering: The Harness Decides What to Trust](https://www.apidays.global/events/paris#agenda)** — [Ruben Marcus Luz Paschoarelli](https://www.apidays.global/events/paris#speakers) (Independent) · Tue 14:00, ContextCon and MCP Summit  
  No abstract; how agent harnesses decide what context to trust.
- **[Safe to leave running: the engineering behind autonomous agents](https://www.apidays.global/events/paris#agenda)** — [Paul-Emile Brotons](https://www.apidays.global/events/paris#speakers) (Anthropic) · Tue 14:00, GenerationAI  
  No abstract; engineering agents safe to leave running unattended.
- **[Scale your AI agents, Keep control: A Live Demo from foundation to production](https://www.apidays.global/events/paris#agenda)** — [Isabelle Mauny](https://www.apidays.global/events/paris#speakers) (Choreo Labs, formerly WSO2), [Mohammed Riahi](https://www.apidays.global/events/paris#speakers) (Choreo Labs, formerly WSO2) · Tue 14:00, Apidays  
  Governed fleet of agents with security, compliance and cost control over models and APIs.
- **[Your Agent Is Authorized. Your Data Isn't.](https://www.apidays.global/events/paris#agenda)** — [Julian Kusenberg](https://www.apidays.global/events/paris#speakers) (SoftwareOne) · Tue 14:30, ContextCon and MCP Summit  
  No abstract; authorized agents still need data-level authorization.
- **[Every Call Is Opening Night for AI Agents](https://www.apidays.global/events/paris#agenda)** — [Italo Vietro](https://www.apidays.global/events/paris#speakers) (Parloa) · Tue 15:00, GenerationAI  
  No abstract; agents hitting APIs live on every call.
- **[The Context Supply Chain: Engineering Reliable Context for AI Agents](https://www.apidays.global/events/paris#agenda)** — [Daniel Jarjoura](https://www.apidays.global/events/paris#speakers) (Rubbr) · Tue 15:00, ContextCon and MCP Summit  
  No abstract; engineering the context agents consume.
- **[API & marketing for agents](https://www.apidays.global/events/paris#agenda)** — [Elie Chevignard](https://www.apidays.global/events/paris#speakers) (CEA) · Tue 15:00, GenerationAI  
  No abstract; marketing APIs to agents is machine-readable findability.
- **[Arazzo: Turning Business Workflows into Agent Capabilities via MCP and Beyond](https://www.apidays.global/events/paris#agenda)** — [Frank Kilcommins](https://www.apidays.global/events/paris#speakers) (Jentic) · Tue 15:30, API Standards Conference  
  Arazzo workflows as agent capabilities via MCP.
- **[Your API platform was built for humans. Nobody told the agents](https://www.apidays.global/events/paris#agenda)** — [Harry Ault](https://www.apidays.global/events/paris#speakers) (Choreo Labs, formerly WSO2) · Wed 10:30, Apidays  
  API platforms built for humans now exposing MCPs to agents.
- **[Agentic AI Is Inevitable. How Do You Govern It Safely Without Losing Control of Costs?](https://www.apidays.global/events/paris#agenda)** — [Anuj Kumar](https://www.apidays.global/events/paris#speakers) (Axway), [Jose Monteagudo](https://www.apidays.global/events/paris#speakers) (Axway) · Wed 11:20, Apidays  
  Who uses which AI and API, at what cost, under which rules.
- **[From API Traffic to Agent Execution: Why AI Agents Need a Different Gateway](https://www.apidays.global/events/paris#agenda)** — [Gbadebo Bello](https://www.apidays.global/events/paris#speakers) (Postman) · Wed 11:50, Apidays  
  Agents retry and act autonomously, so gateways need different controls.
- **[Your Next API Consumer Is Not Human: Designing APIs for AI Agents](https://www.apidays.global/events/paris#agenda)** — [Hussein Loubani](https://www.apidays.global/events/paris#speakers) (CIAD) · Wed 11:50, Apidays  
  Designing APIs an agent picks, fills and acts on without a human.
- **[Zero Trust and Agentic AI Security](https://www.apidays.global/events/paris#agenda)** — [Rob Wilson](https://www.apidays.global/events/paris#speakers) (Broadcom) · Wed 11:50, Apidays  
  Zero Trust for non-human agent identities.
- **[When AI Agents Meet Your API Gateway](https://www.apidays.global/events/paris#agenda)** — [Iliass Ayaou](https://www.apidays.global/events/paris#speakers) (GroupBees) · Wed 11:50, Apidays  
  Gateway APIs exposed as MCP tools, tested with 88 tools.
- **[The Holiday Checkout Has No Human](https://www.apidays.global/events/paris#agenda)** — [Tim Chang](https://www.apidays.global/events/paris#speakers) (Thales) · Wed 12:20, Apidays  
  Telling trusted shopping agents from bots in API journeys.
- **[Composable Architecture for AI Systems: APIs, MCP, Skills, Sub-Agents, and Workflows](https://www.apidays.global/events/paris#agenda)** — [Erik Wilde](https://www.apidays.global/events/paris#speakers) (WunderGraph) · Wed 12:20, Apidays  
  Composing APIs, MCP, skills, sub-agents and workflows.
- **[Beyond the Demo: Running AI Agents in Production to Modernize Enterprise APIs](https://www.apidays.global/events/paris#agenda)** — [Vedran Cindrić](https://www.apidays.global/events/paris#speakers) (Treblle) · Wed 12:20, Apidays  
  Agents refactoring a legacy API landscape in production; the contracts are what they rewrite.
- **[AI Agents Evaluation with synthetic data](https://www.apidays.global/events/paris#agenda)** — [Louis Jourdain](https://www.apidays.global/events/paris#speakers) (ChapsVision) · Wed 14:00, Apidays  
  Evaluating multi-step agent reliability with synthetic data; agent-side testing, not the API surface.
- **[Securing and Industrializing AI Adoption at Scale](https://www.apidays.global/events/paris#agenda)** — [Nejmeddine Ben Ouarred](https://www.apidays.global/events/paris#speakers) (GroupBees), [Youssef Guenoun](https://www.apidays.global/events/paris#speakers) (GroupBees) · Wed 14:00, Apidays  
  A control layer between LLMs and the information system: access, security and quotas.
- **[No Score, No MCP: Making APIs Earn Their Way Into the Agent Economy](https://www.apidays.global/events/paris#agenda)** — [André Cedik](https://www.apidays.global/events/paris#speakers) (Kuehne+Nagel) · Wed 15:00, Apidays  
  APIs must pass a score before getting an MCP server; close to the Agent Readiness rubric.
- **[From Schema Registry to Agent Registry: Governing AI Discovery with the A2A Protocol](https://www.apidays.global/events/paris#agenda)** — [Carles Arnal](https://www.apidays.global/events/paris#speakers) (IBM) · Wed 15:00, API Standards Conference  
  An A2A agent registry carrying discovery and versioning governance to agents.
- **[The API Called Back: When Untrusted Data Hijacks Autonomous AI Agents](https://www.apidays.global/events/paris#agenda)** — [Kavya Pai](https://www.apidays.global/events/paris#speakers) (A.P Moller Maersk) · Wed 15:00, Apidays  
  Prompt injection through API responses hijacking agents.
- **[From API Access to Authorized Action: Governing MCP Agents](https://www.apidays.global/events/paris#agenda)** — [Shamlah Veerapandian](https://www.apidays.global/events/paris#speakers) (Pandora) · Wed 15:30, Apidays  
  Who may use MCP tools, for which tasks, with what evidence.
- **[The AI Agent Era: From Coding to Orchestration](https://www.apidays.global/events/paris#agenda)** — [Akhara Sang](https://www.apidays.global/events/paris#speakers) (Naoplay) · Wed 15:30, Apidays  
  Shift from prompting to orchestrating agents; little API surface.
- **[Why Are We Still Governing AI Like Software?](https://www.apidays.global/events/paris#agenda)** — [Dorian Blanc](https://www.apidays.global/events/paris#speakers) (Gravitee) · Wed 16:30, Apidays  
  Agent identity, bounded authority and audit trail; vendor demo.
- **[Agents Inherit Your Governance — Whether You Meant Them To or Not](https://www.apidays.global/events/paris#agenda)** — [Kin Lane](https://www.apidays.global/events/paris#speakers) (API Evangelist) · Wed 17:00, Apidays  
  The Kin Score and Agent Readiness themselves: agents inherit governance.
- **[You Cannot Bolt Agent Readiness Onto Ungoverned APIs](https://www.apidays.global/events/paris#agenda)** — [Kin Lane](https://www.apidays.global/events/paris#speakers) (API Evangelist) · Wed 17:00, Apidays  
  Agent readiness cannot be bolted on; the two API Evangelist instruments.
- **[AsyncAPI in the Agentic Era: Giving AI Agents Ears](https://www.apidays.global/events/paris#agenda)** — [Laurent Broudoux](https://www.apidays.global/events/paris#speakers) (Microcks & Reshapr) · Wed 17:00, API Standards Conference  
  AsyncAPI contracts describe events agents can listen to and trigger.
- **[Agents Need APIs: Multi-Agent Pipelines in Production](https://www.apidays.global/events/paris#agenda)** — [Camille Epitalon](https://www.apidays.global/events/paris#speakers) (Verso) · Wed 17:00, Apidays  
  APIs designed for AI callers first, exposed through UI, CLI and MCP.
- **[The API Multiverse: One Internet, Infinite Agents, New Rules](https://www.apidays.global/events/paris#agenda)** — [Aura Yavary](https://www.apidays.global/events/paris#speakers) (UC Davis) · Wed 17:30, Apidays  
  Agents discovering and using APIs as primary consumers.
- **[How AI Agents work?](https://www.apidays.global/events/paris#agenda)** — [Emmanuel Orozco](https://www.apidays.global/events/paris#speakers) (Leroy Merlin) · Wed 17:30, GenerationAI  
  Explainer of the agent loop; no specific surface.
- **[OpenAPI: The Answer Key for MCP Tool Calling](https://www.apidays.global/events/paris#agenda)** — [Miguel Quintero](https://www.apidays.global/events/paris#speakers) (Postman) · Wed 17:30, API Standards Conference  
  OpenAPI tool names, descriptions and schemas drive MCP tool selection.
- **[Opening remarks: who verifies the agents?](https://www.apidays.global/events/paris#agenda)** — [Kapil Bakshi](https://www.apidays.global/events/paris#speakers) (Karate Labs) · Thu 09:15, Karate Labs 2nd User Conference  
  No abstract; opening remarks on who verifies agents.
- **[APIs as the Nervous System: Building a Trusted, Resilient Agent Fleet on Your Own Infrastructure](https://www.apidays.global/events/paris#agenda)** — [Tuhin Mitra](https://www.apidays.global/events/paris#speakers) (Doctolib) · Thu 09:45, Apidays  
  Agent fleet wired through APIs with audit trails and access control.
- **[Agents Are Not Missing Tools. They Are Missing Business Context](https://www.apidays.global/events/paris#agenda)** — [Kseniia Ilchenko](https://www.apidays.global/events/paris#speakers) (DataGalaxy) · Thu 09:45, Apidays  
  MCP tools with one-line descriptions lack the business context agents need.
- **[Karate Agent: what an agent can actually verify, and what it cannot](https://www.apidays.global/events/paris#agenda)** — [Peter Thomas](https://www.apidays.global/events/paris#speakers) (Karate Labs) · Thu 09:45, Karate Labs 2nd User Conference  
  No abstract; what a testing agent can verify.
- **[From Pilot to Production: The Enterprise AI Enablement Stack](https://www.apidays.global/events/paris#agenda)** — [Frank Kilcommins](https://www.apidays.global/events/paris#speakers) (Jentic) · Thu 09:45, Apidays  
  Making enterprise APIs AI-ready: surface, describe and dynamically discover tools.
- **[Prototyping tomorrow's API: inside IGN's proof-of-concept factory](https://www.apidays.global/events/paris#agenda)** — [Valentine Bruyerre](https://www.apidays.global/events/paris#speakers) (IGN - French Mapping Agency) · Thu 09:45, Europe API Conference  
  A public operator prototyping AI access to its authoritative APIs.
- **[Tokens are not compute: Getting more from LLMs by using them less](https://www.apidays.global/events/paris#agenda)** — [Jens Neuse](https://www.apidays.global/events/paris#speakers) (WunderGraph) · Thu 10:15, Apidays  
  Every endpoint as a tool bloats context; fewer, better tools.
- **[Let’s Help Agents to Navigate the API and the Data World](https://www.apidays.global/events/paris#agenda)** — [Dr. Simon Harrer](https://www.apidays.global/events/paris#speakers) (Entropy Data) · Thu 11:00, Europe API Conference  
  No abstract; helping agents navigate APIs and data.
- **[Self-hosted document extraction, served over API and MCP](https://www.apidays.global/events/paris#agenda)** · Thu 11:00, Karate Labs 2nd User Conference  
  No abstract; self-hosted extraction served over API and MCP.
- **[Continuous Expert-in-the-loop Agentic AI Validation](https://www.apidays.global/events/paris#agenda)** — [Quincy Hsieh](https://www.apidays.global/events/paris#speakers) (Milliman), [Bertille Tierny](https://www.apidays.global/events/paris#speakers) (Milliman), [Muhammad Umer](https://www.apidays.global/events/paris#speakers) (Milliman) · Thu 12:00, Apidays  
  Expert-in-the-loop validation of agentic AI output.
- **[When the Buyer is an Agent: How AI Intermediaries Disrupt eCommerce Acquisition](https://www.apidays.global/events/paris#agenda)** — [Katia Maevskaia](https://www.apidays.global/events/paris#speakers) (Snap Inc) · Thu 12:30, Apidays  
  Agents as buyers break discovery-led retail; agentic commerce.
- **[Signal Over Noise: Context Engineering as the Architecture Discipline Behind Agentic Enterprise AI](https://www.apidays.global/events/paris#agenda)** — [Matthias Biehl](https://www.apidays.global/events/paris#speakers) (API-University.com) · Thu 12:30, Apidays  
  Context engineering for enterprise agents; architecture, weak public-surface signal.
- **[Building Software in the AI Era](https://www.apidays.global/events/paris#agenda)** — [Chouaieb Nemri](https://www.apidays.global/events/paris#speakers) (Google) · Thu 12:30, Apidays  
  Agentic software engineering with Agent Skills and MCP.
- **[Don't Blame the Agent. It Only Believed Your API Contract](https://www.apidays.global/events/paris#agenda)** — [Deepti Mittal](https://www.apidays.global/events/paris#speakers) (Mimecast) · Thu 14:00, Apidays  
  Agents take the contract literally: error semantics, retries, unwritten assumptions.
- **[Beyond the Anti-Corruption Layer: The use of APIs to efficiently leverage, manage, and protect Agents](https://www.apidays.global/events/paris#agenda)** — [Radhouane Jrad](https://www.apidays.global/events/paris#speakers) (DLA Piper) · Thu 14:00, Apidays  
  Using APIs to leverage, manage and protect agents.
- **[Your AI Agent Is Only as Good as Its Schema: Designing Reliable MCP Tools with JSON Schema](https://www.apidays.global/events/paris#agenda)** — [Ayodele Aransiola](https://www.apidays.global/events/paris#speakers) (Voyatek Group) · Thu 14:00, API Standards Conference  
  JSON Schema design for reliable MCP tool calls.
- **[Connecting the Dots  -  From scattered dots to one autonomous flow — Idea to Production](https://www.apidays.global/events/paris#agenda)** — [Jason Feng](https://www.apidays.global/events/paris#speakers) (Mantel) · Thu 14:30, Apidays  
  Stitching coding agents, skills, MCP and evals into an SDLC flow.
- **[Designing the Sovereign Agent Stack: MCP, A2A, and API Governance for the Agentic Era](https://www.apidays.global/events/paris#agenda)** — [Jon Scheele](https://www.apidays.global/events/paris#speakers) (Blue Connector) · Thu 14:30, Apidays  
  Governing agent discovery and action via MCP and A2A with sovereignty.
- **[Your API Has a New User. It Doesn’t Read the Docs, It Has 200,000 Tokens of Attention, and It Will Never Call Support.](https://www.apidays.global/events/paris#agenda)** — [Mehdi Yadir Goldfeil](https://www.apidays.global/events/paris#speakers) (My Super Academia) · Thu 14:30, Apidays  
  APIs built for humans fail agents: hallucinated params, 400 loops, wrong endpoints.
- **[AsyncAPI Ambassador Panel - Can AsyncAPI help AI Agents Speak Event-Driven?](https://www.apidays.global/events/paris#agenda)** — [Hugo Guerrero](https://www.apidays.global/events/paris#speakers), [Naresh Jain](https://www.apidays.global/events/paris#speakers) (Specmatic), [Laurent Broudoux](https://www.apidays.global/events/paris#speakers) (Microcks & Reshapr) · Thu 14:30, API Standards Conference  
  No abstract; AsyncAPI for agents in event-driven systems.
- **[The Non-Human Developer: Securing APIs for AI Agents in a Post-DORA World](https://www.apidays.global/events/paris#agenda)** — [Harry Bouras](https://www.apidays.global/events/paris#speakers) (Colonnade) · Thu 15:00, Apidays  
  Securing APIs against agent traffic spikes under DORA.
- **[API Design: Is Your API Making Your Agent Hallucinate?](https://www.apidays.global/events/paris#agenda)** — [Ketty Zakariasy](https://www.apidays.global/events/paris#speakers) (So-API), [Stephane Tuot](https://www.apidays.global/events/paris#speakers) (So-API) · Thu 15:55, Apidays  
  Same agent, three API designs: contract shape drives hallucination and tokens.
- **[Why MCP Needs an OpenAPI Moment](https://www.apidays.global/events/paris#agenda)** — [Stève Sfartz](https://www.apidays.global/events/paris#speakers) (Cisco) · Thu 15:55, Apidays  
  MCP needs a reviewable description format the way APIs got OpenAPI.
- **[The Anatomy of an Agentic AI Sandbox](https://www.apidays.global/events/paris#agenda)** — [Ludovic Pourrat](https://www.apidays.global/events/paris#speakers) (Lombard Odier Group) · Thu 15:55, Apidays  
  Sandbox giving agents safe access to bank systems.

## Contract Governance

Rulesets, guidelines, breaking-change detection and standards: the artifacts that constrain a contract. This is where the APIOps day, the governance talks and the [OpenLint](https://openlint.org) conversation live. [How the Kin Score measures it](https://apis.io/rating/facets/contract-governance/).

- **[Why API Management Isn't Enough](https://www.apidays.global/events/paris#agenda)** — [Marjukka Niinioja](https://www.apidays.global/events/paris#speakers) (Osaango Ltd) · Tue 09:15, APIOps Conference Paris 2026  
  Operating-model failures after API management: governance, adoption and evidence, not a published surface.
- **[Group work: What's Blocking API & Integration Success?](https://www.apidays.global/events/paris#agenda)** — [Daniel Kocot](https://www.apidays.global/events/paris#speakers) (adorsys), [Claire Barrett](https://www.apidays.global/events/paris#speakers) (APIsFirst), [Kin Lane](https://www.apidays.global/events/paris#speakers) (API Evangelist), [Marjukka Niinioja](https://www.apidays.global/events/paris#speakers) (Osaango Ltd), [Miriam Greis](https://www.apidays.global/events/paris#speakers) (adorsys GmbH + Co. KG), [Miguel Quintero](https://www.apidays.global/events/paris#speakers) (Postman), [Aiswarya Balasubramanian](https://www.apidays.global/events/paris#speakers) (Anna University) · Tue 11:00, APIOps Conference Paris 2026  
  Group work on shadow APIs, governance and developer experience blockers.
- **[Risk-Proof Your AI: The New API Governance Playbook](https://www.apidays.global/events/paris#agenda)** — [Markus Müller](https://www.apidays.global/events/paris#speakers) (Boomi) · Tue 12:00, Apidays  
  APIs as trusted agent tools, governance for enterprise readiness, measured for ROI.
- **[Your APIs Are Ready. But Are They AI-Ready? From API Sprawl to AI-Ready Governance - A Live Journey with Solis Hub](https://www.apidays.global/events/paris#agenda)** — [Iliass Ayaou](https://www.apidays.global/events/paris#speakers) (GroupBees), [Youssef Guenoun](https://www.apidays.global/events/paris#speakers) (GroupBees) · Tue 15:00, Apidays  
  Sponsor workshop; API sprawl to governed, discoverable, AI-ready APIs.
- **[Beyond the Broker: What Event Gateways Are Really Trying to Solve](https://www.apidays.global/events/paris#agenda)** — [Daniel Kocot](https://www.apidays.global/events/paris#speakers) (adorsys) · Tue 15:00, API Standards Conference  
  Event gateways: ownership, compatibility over time and policy for events.
- **[Build Your Governed Context Layer](https://www.apidays.global/events/paris#agenda)** — [Zaak Chalal](https://www.apidays.global/events/paris#speakers) (Mobioos) · Tue 15:00, ContextCon and MCP Summit  
  Connect specs as a governed context layer so agents stop guessing.
- **[oasdiff vs Claude: A Case Study in LLMs vs Dedicated Tools](https://www.apidays.global/events/paris#agenda)** — [Reuven Harrison](https://www.apidays.global/events/paris#speakers) (oasdiff) · Tue 17:00, API Standards Conference  
  No abstract; oasdiff is OpenAPI breaking-change detection.
- **[From API Guidelines to Governance Skills](https://www.apidays.global/events/paris#agenda)** — [Daniel Kocot](https://www.apidays.global/events/paris#speakers) (adorsys) · Wed 11:50, Apidays  
  API guidelines turned into governance skills in the daily workflow.
- **[JSON Schema Standardization and Versions](https://www.apidays.global/events/paris#agenda)** — [Lisa Dusseault](https://www.apidays.global/events/paris#speakers) (Data Transfer Initiative) · Wed 11:50, API Standards Conference  
  JSON Schema standardization at the IETF and versions.
- **[Why You (too) Need an (API) Style Guide](https://www.apidays.global/events/paris#agenda)** — [Robert Lehmann](https://www.apidays.global/events/paris#speakers) (Google Switzerland) · Wed 14:00, Apidays  
  API style guides for naming and review consistency.
- **[Where Kafka meets APIs: how VINCI Construction exposes and governs streaming data](https://www.apidays.global/events/paris#agenda)** — [Yara Ayoub](https://www.apidays.global/events/paris#speakers) (VINCI Construction), [Lucas Mundinger](https://www.apidays.global/events/paris#speakers) (VINCI Construction) · Wed 14:30, Apidays  
  Exposing Kafka streams as governed HTTP APIs.
- **[Scaling AI-Driven engineering without scaling risk](https://www.apidays.global/events/paris#agenda)** — [Jean Burellier](https://www.apidays.global/events/paris#speakers) (Mistral) · Wed 14:30, Apidays  
  Security, compliance and governance keeping pace with AI-driven API output.
- **[Sovereign DevOps-Driven API Governance in Practice: Open Source and Agent-Ready in Hours](https://www.apidays.global/events/paris#agenda)** — [Andrzej Jarzyna](https://www.apidays.global/events/paris#speakers) (PZU) · Wed 15:00, Apidays  
  Governance as linting in the DevOps pipeline with open-source tooling, agent-ready.
- **[Govern APIs to Accelerate AI ROI](https://www.apidays.global/events/paris#agenda)** — [Markus Müller](https://www.apidays.global/events/paris#speakers) (Boomi) · Wed 15:00, Apidays  
  Governing and exposing APIs as MCP tools; vendor framed.
- **[Stop Throwing Away Your Data - Towards Data-Driven API Governance](https://www.apidays.global/events/paris#agenda)** — [Matthias Keckl](https://www.apidays.global/events/paris#speakers) (qupaya technologies GmbH) · Wed 16:30, Apidays  
  Feeding lint, test and latency data back into API governance.
- **[Taming the API & SDK Zoo](https://www.apidays.global/events/paris#agenda)** — [Matthieu Croissant](https://www.apidays.global/events/paris#speakers) (Roche AG) · Wed 16:30, Apidays  
  Governance, DX and SDKs across Roche R&D integrations.
- **[From API Sprawl to API Clarity](https://www.apidays.global/events/paris#agenda)** — [Meryem Benaich](https://www.apidays.global/events/paris#speakers) (Clarus Data Management) · Wed 17:30, Apidays  
  API sprawl, undocumented endpoints and governance in regulated settings.
- **[Panel: API use inside DSI](https://www.apidays.global/events/paris#agenda)** — [Emna Trigui](https://www.apidays.global/events/paris#speakers) (CEA) · Thu 12:30, Europe API Conference  
  Panel on internal API use in IT departments and APIs for agents.
- **[The Risks That Come with Underfunded API Standards](https://www.apidays.global/events/paris#agenda)** — [Thulisile Sibanda](https://www.apidays.global/events/paris#speakers) (AsyncAPI Initiative) · Thu 12:30, API Standards Conference  
  Underfunded open API standards as a risk to shared infrastructure.
- **[Making official standards AI friendly](https://www.apidays.global/events/paris#agenda)** — [Frank Terpstra](https://www.apidays.global/events/paris#speakers) (Geonovum) · Thu 14:00, Europe API Conference  
  No abstract; making official standards AI friendly.
- **[European Commission's API Framework for Digital Governments: 5 Years Later](https://www.apidays.global/events/paris#agenda)** — [Mark Boyd](https://www.apidays.global/events/paris#speakers) (Platformable) · Thu 14:30, Europe API Conference  
  No abstract; EC API framework for digital governments, five years on.
- **[Defining controls and policies with CALM](https://www.apidays.global/events/paris#agenda)** — [James Gough](https://www.apidays.global/events/paris#speakers) (Morgan Stanley) · Thu 14:40, FINOS  
  FINOS CALM: architecture, controls and policies as code.
- **[Closing Note: The Future of Public Services APIs](https://www.apidays.global/events/paris#agenda)** — [Christophe Gaie](https://www.apidays.global/events/paris#speakers) (DSN) · Thu 15:00, Europe API Conference  
  No abstract; closing note on public-services APIs.
- **[Making sense of the application Frankenstack in AI times](https://www.apidays.global/events/paris#agenda)** — [Paolo Malinverno](https://www.apidays.global/events/paris#speakers) (Sensedia) · Thu 15:55, Apidays  
  Rationalising API, event, MCP and AI gateway management layers.
- **[Unconference: API standards 2027 working group](https://www.apidays.global/events/paris#agenda)** — [Thulisile Sibanda](https://www.apidays.global/events/paris#speakers) (AsyncAPI Initiative), [Erik Wilde](https://www.apidays.global/events/paris#speakers) (WunderGraph), [Martin Bonnin](https://www.apidays.global/events/paris#speakers) (Apollo GraphQL), [Onyedikachi Hope Amaechi-Okorie](https://www.apidays.global/events/paris#speakers) (JSON Schema) · Thu 15:55, API Standards Conference  
  Unconference for an API standards working group.

## Contract Quality

The API Standards Conference carries this facet: OpenAPI in the age of AI, JSON Schema, AsyncAPI, GraphQL and Arazzo. It is 25% of the composite, the largest facet, because everything an agent does starts from the contract. [How it is measured](https://apis.io/rating/facets/contract-quality/).

- **[API Standards Conference Welcome and OpenAPI in the Age of AI](https://www.apidays.global/events/paris#agenda)** — [Erik Wilde](https://www.apidays.global/events/paris#speakers) (WunderGraph) · Tue 11:00, API Standards Conference  
  No abstract; OpenAPI's role when AI is the consumer.
- **[GraphQL Variables Meet JSON Schema: The New Pitfall When AI Agents Call Your API](https://www.apidays.global/events/paris#agenda)** — [Camille Lawrence](https://www.apidays.global/events/paris#speakers) (Apollo GraphQL) · Tue 11:30, API Standards Conference  
  GraphQL variables and JSON Schema pitfalls when agents call an API; Arazzo workflows as portable contracts.
- **[Beyond Validation: Reasoning About What a Schema Means](https://www.apidays.global/events/paris#agenda)** — [Jason Desrosiers](https://www.apidays.global/events/paris#speakers) (Hyperjump Software) · Tue 14:00, API Standards Conference  
  Reasoning about what JSON Schema means: contradictions, satisfiability, beyond validation.
- **[Not Yet Valid: Four Questions Your Editor Asks a JSON Schema](https://www.apidays.global/events/paris#agenda)** — [Bart Dubbeldam](https://www.apidays.global/events/paris#speakers) (Cached Intelligence) · Tue 16:30, API Standards Conference  
  How editors validate half-typed JSON Schema documents.
- **[How to enforce structured-outputs for Vision Langage Models](https://www.apidays.global/events/paris#agenda)** — [Sonia Tabti](https://www.apidays.global/events/paris#speakers) (Sonia Tabti) · Wed 11:20, GenerationAI  
  No abstract; enforcing structured outputs is schema-constrained responses.
- **[Explaining GraphQL Federation to my non-technical wife](https://www.apidays.global/events/paris#agenda)** — [David Stutt](https://www.apidays.global/events/paris#speakers) (WunderGraph) · Wed 11:20, API Standards Conference  
  No abstract; GraphQL federation explained.
- **[Events as Contracts, Events as Data: Our AsyncAPI Journey](https://www.apidays.global/events/paris#agenda)** — [Ignacio Castillejos](https://www.apidays.global/events/paris#speakers) (The New York Times) · Wed 12:20, API Standards Conference  
  AsyncAPI as the contract between every event producer and consumer through a broker migration.
- **[Beyond REST: Evolving Arazzo for Real-World Agentic Workflows](https://www.apidays.global/events/paris#agenda)** — [Naresh Jain](https://www.apidays.global/events/paris#speakers) (Specmatic) · Wed 14:00, Apidays  
  Arazzo workflows spanning OpenAPI, AsyncAPI, gRPC and GraphQL for agents.
- **[Your Portal Has Two Kinds of Visitors Now: Arazzo Workflows for Humans and Agents](https://www.apidays.global/events/paris#agenda)** — [Pubudu Gunatilaka](https://www.apidays.global/events/paris#speakers) (Choreo Labs, formerly WSO2) · Wed 14:00, API Standards Conference  
  Arazzo workflows published in the portal so humans and agents follow multi-call sequences.
- **[From Validation to Semantic Guardrails: JSON Schema as the Contract  Layer for Agentic Application Development](https://www.apidays.global/events/paris#agenda)** — [Jean-Pierre DIjcks](https://www.apidays.global/events/paris#speakers) (Oracle), [Beda Hammerschmidt](https://www.apidays.global/events/paris#speakers) (Oracle) · Wed 14:30, API Standards Conference  
  JSON Schema as the semantic guardrail contract for agentic apps.
- **[Event Contracts Are Domain Decisions](https://www.apidays.global/events/paris#agenda)** — [Dr. Annegret Junker](https://www.apidays.global/events/paris#speakers) (codecentric AG) · Wed 15:30, API Standards Conference  
  AsyncAPI drafts must carry domain decisions like broker binding.
- **[Your AI Agent Is Only as Good as Your API Description — Ensuring OpenAPI Quality at Enterprise Scale](https://www.apidays.global/events/paris#agenda)** — [Pavel Kornev](https://www.apidays.global/events/paris#speakers) (SAP SE) · Wed 16:30, Apidays  
  OpenAPI description quality as what agents actually read.
- **[GraphQL as the Execution Layer for AI Agents](https://www.apidays.global/events/paris#agenda)** — [Pascal Senn](https://www.apidays.global/events/paris#speakers) (ChilliCream) · Wed 16:30, API Standards Conference  
  No abstract; GraphQL as the agent execution layer, read from the title.
- **[Beyond the Query: GraphQL Features That Make Frontends Simpler](https://www.apidays.global/events/paris#agenda)** — [Aurélien David](https://www.apidays.global/events/paris#speakers) (Pennylane) · Thu 09:15, API Standards Conference  
  No abstract; GraphQL features for frontend consumers.
- **[Houston, We Have a Partial Response: GraphQL Error Handling](https://www.apidays.global/events/paris#agenda)** — [Željko Kozina](https://www.apidays.global/events/paris#speakers) (Chronomill) · Thu 10:15, API Standards Conference  
  GraphQL partial-response errors and workflow-backed MCP tools.
- **[Your Domain Model Is Your API Spec — and Your First Prompt](https://www.apidays.global/events/paris#agenda)** — [Dr. Annegret Junker](https://www.apidays.global/events/paris#speakers) (codecentric AG) · Thu 11:00, Apidays  
  Domain model as the API spec that grounds LLM generation.
- **[Your Domain Model Is Your API Spec - and Your First Prompt](https://www.apidays.global/events/paris#agenda)** — [Dr. Annegret Junker](https://www.apidays.global/events/paris#speakers) (codecentric AG) · Thu 11:00, Apidays  
  Domain model as the API spec that grounds LLM generation.
- **[Foundational JSON Schema](https://www.apidays.global/events/paris#agenda)** — [Ben Hutton](https://www.apidays.global/events/paris#speakers) (Spoke / JSON Schema TSC) · Thu 11:30, API Standards Conference  
  JSON Schema fundamentals behind well-formed contracts.
- **[GraphQL with AWS AppSync - Building a Product API at HEMA](https://www.apidays.global/events/paris#agenda)** — [Ivan Jančić](https://www.apidays.global/events/paris#speakers) (Brighting), [Bart Rijksen](https://www.apidays.global/events/paris#speakers) (HEMA) · Thu 12:00, API Standards Conference  
  GraphQL product API adoption on AppSync.
- **[Testing enterprise PLM APIs with Karate: 3DExperience, Aras and custom web services](https://www.apidays.global/events/paris#agenda)** — [Hadrien Guiducci ](https://www.apidays.global/events/paris#speakers) (CIMPA PLM Services) · Thu 12:00, Karate Labs 2nd User Conference  
  No abstract; API testing of PLM web services with Karate.
- **[Two Architects, One Mission: Rethinking How Systems Talk](https://www.apidays.global/events/paris#agenda)** — [Fabrizio Lazzaretti](https://www.apidays.global/events/paris#speakers) (Wavestone) · Thu 12:30, Apidays  
  Picking communication patterns (REST, events) by need, not habit.
- **[AI - Spec-Driven Development: Lessons from £Billions in Payments](https://www.apidays.global/events/paris#agenda)** — [Cihan Dogan](https://www.apidays.global/events/paris#speakers) (Bally's Intralot) · Thu 14:00, Apidays  
  Spec-driven development on a live payments platform.
- **[Live coding: fixing a broken test suite, from contract to E2E](https://www.apidays.global/events/paris#agenda)** — [Peter Thomas](https://www.apidays.global/events/paris#speakers) (Karate Labs) · Thu 15:55, Karate Labs 2nd User Conference  
  No abstract; fixing tests from contract to E2E.
- **[Integrations should be regenerated, not maintained](https://www.apidays.global/events/paris#agenda)** — [Predrag Radenkovic](https://www.apidays.global/events/paris#speakers) (Codeplain) · Thu 16:25, Apidays  
  Regenerating integrations with coding agents rather than maintaining them.

## Operational Transparency

Security posture, supply chains and evolving without breaking anyone: what a provider publishes about how its API behaves in production. [How it is measured](https://apis.io/rating/facets/operational-transparency/).

- **[Legitimate Requests, Illegitimate Intent: The Rise of Token-Based API Fraud](https://www.apidays.global/events/paris#agenda)** — [Théo Triep-Capdeville](https://www.apidays.global/events/paris#speakers) (Thales) · Tue 11:00, Apidays  
  Token-based API fraud and exposed credentials; security posture.
- **[API Security: Attack Lab Showdown](https://www.apidays.global/events/paris#agenda)** — [Phil Ray](https://www.apidays.global/events/paris#speakers) (Akamai) · Tue 12:00, Apidays  
  Sponsor demo of API attack defense against agentic threats.
- **[One to many without breaking anyone: evolving a GraphQL schema with many consumers](https://www.apidays.global/events/paris#agenda)** — [Gabriela Colombo Alves Longo](https://www.apidays.global/events/paris#speakers) (Swapcard) · Tue 14:30, API Standards Conference  
  Evolving a schema without breaking consumers; Arazzo workflows with success criteria and failure handling.
- **[Federated API Intelligence in Action: A Hands-On Demo with Treblle](https://www.apidays.global/events/paris#agenda)** — [Vedran Cindrić](https://www.apidays.global/events/paris#speakers) (Treblle) · Tue 15:00, Apidays  
  Sponsor demo of API visibility across an estate.
- **[Securing the Supply Chain : A Practical Guide](https://www.apidays.global/events/paris#agenda)** — [Isabelle Mauny](https://www.apidays.global/events/paris#speakers) (Choreo Labs, formerly WSO2) · Wed 11:20, Apidays  
  Software supply chain security practice.
- **[Offensive Security in the AI Era: New Attacks, New Reflexes](https://www.apidays.global/events/paris#agenda)** — [Noureddine Taher](https://www.apidays.global/events/paris#speakers) (BNP Paribas) · Wed 11:20, Apidays  
  AI-enabled attacks and security posture.
- **[Thales security white paper launch](https://www.apidays.global/events/paris#agenda)** · Wed 14:30, Apidays  
  No abstract; a security white paper launch, read from the title only.
- **[Models Reason, APIs Act: Defending the API Attack Surface in the Agentic Era](https://www.apidays.global/events/paris#agenda)** — [Stephane Benfredj](https://www.apidays.global/events/paris#speakers) (Akamai) · Wed 15:30, Apidays  
  Shadow APIs, pre-launch testing and runtime threat detection for agent traffic.
- **[Never Forward, Always Rebuild: Zero-Trust Payloads for APIs](https://www.apidays.global/events/paris#agenda)** — [Marcel Grauwen](https://www.apidays.global/events/paris#speakers) (glomidco) · Wed 16:30, Apidays  
  Rebuilding every payload at the trust boundary against its schema.
- **[Model Extraction: Why You Should Care and How to Protect Yourself?](https://www.apidays.global/events/paris#agenda)** — [Marie Paindavoine](https://www.apidays.global/events/paris#speakers) (Skyld AI) · Wed 16:30, GenerationAI  
  No abstract; protecting models from extraction, read from the title.
- **[API Security: From Fundamentals to the Agentic Era](https://www.apidays.global/events/paris#agenda)** — [Jesus Vallejo Garcia](https://www.apidays.global/events/paris#speakers) (cloudappi) · Wed 17:00, Apidays  
  API security across the lifecycle into the agentic era.
- **[60,000 CVEs and Counting: What 60 Years of AppSec Tell Us](https://www.apidays.global/events/paris#agenda)** — [Pedram Hayati](https://www.apidays.global/events/paris#speakers) (SecDim) · Wed 17:30, Apidays  
  AppSec history and CVE volume; the security disclosure posture.
- **[Risk is Governed. Data Resilience is Architected.](https://www.apidays.global/events/paris#agenda)** — [Siham Boutayeb](https://www.apidays.global/events/paris#speakers) (Odaseva) · Thu 10:15, Apidays  
  Board risk governance vs data-system resilience architecture.
- **[Fast AI needs rules: governing agents, models, and tokens](https://www.apidays.global/events/paris#agenda)** — [Raphaël  Velfre](https://www.apidays.global/events/paris#speakers) (Kong Inc) · Thu 11:00, Apidays  
  Governing who calls which model with what data at the traffic layer.
- **[The Hidden Complexity of Aggregated APIs: Lessons from Optimizing a Global Hotel Distribution Platform](https://www.apidays.global/events/paris#agenda)** — [Nermine Reyadh](https://www.apidays.global/events/paris#speakers) (Nuitée) · Thu 11:30, Apidays  
  Aggregating third-party supplier APIs whose real behaviour diverges from contracts.

## Accountability

Who answers for an organisation's use of AI. I don't score this yet. It is a candidate standalone layer, and the talks below are the reason it keeps coming up.

- **[Group work: Choosing How to Tackle the Challenges](https://www.apidays.global/events/paris#agenda)** — [Marjukka Niinioja](https://www.apidays.global/events/paris#speakers) (Osaango Ltd), [Claire Barrett](https://www.apidays.global/events/paris#speakers) (APIsFirst), [Daniel Kocot](https://www.apidays.global/events/paris#speakers) (adorsys), [Miriam Greis](https://www.apidays.global/events/paris#speakers) (adorsys GmbH + Co. KG), [Aiswarya Balasubramanian](https://www.apidays.global/events/paris#speakers) (Anna University) · Tue 12:15, APIOps Conference Paris 2026  
  Group work picking one measurable change; operating model, no surface.
- **[Group work: From API Challenges to Action Plans](https://www.apidays.global/events/paris#agenda)** — [Claire Barrett](https://www.apidays.global/events/paris#speakers) (APIsFirst), [Daniel Kocot](https://www.apidays.global/events/paris#speakers) (adorsys), [Kin Lane](https://www.apidays.global/events/paris#speakers) (API Evangelist), [Marjukka Niinioja](https://www.apidays.global/events/paris#speakers) (Osaango Ltd), [Miriam Greis](https://www.apidays.global/events/paris#speakers) (adorsys GmbH + Co. KG), [Miguel Quintero](https://www.apidays.global/events/paris#speakers) (Postman), [Aiswarya Balasubramanian](https://www.apidays.global/events/paris#speakers) (Anna University) · Tue 14:15, APIOps Conference Paris 2026  
  Ownership, actions and evidence for a 90-day move; operating model, no surface.
- **[Comment les entreprises de la Tech et leurs clients intègrent-ils la gouvernance de l’IA dans leurs pratiques ?](https://www.apidays.global/events/paris#agenda)** — [Emmanuelle Olivié-Paul](https://www.apidays.global/events/paris#speakers) (AdVaes) · Wed 10:35, GreenIO  
  How companies build AI governance into practice.
- **[Your Agents Are Running the Organisation ,Who's Watching Them?](https://www.apidays.global/events/paris#agenda)** — [Kelly Policarpo](https://www.apidays.global/events/paris#speakers) (Lumo AI Compliance & Advisory) · Wed 11:20, Apidays  
  Oversight of agents operating the organisation.
- **[AI Adoption Success Secrets.](https://www.apidays.global/events/paris#agenda)** — [Omid Eidivandi](https://www.apidays.global/events/paris#speakers) (Groupe La Centrale) · Wed 12:20, Apidays  
  Shaping and securing enterprise AI adoption.
- **[The AI Control Layer Europe is Missing](https://www.apidays.global/events/paris#agenda)** — [Samy Melaine](https://www.apidays.global/events/paris#speakers) (Eden AI) · Wed 14:30, GenerationAI  
  No abstract; a European AI control layer, read from the title only.
- **[The Human Side of Sovereignty: From Shadow AI to Cognitive Defense](https://www.apidays.global/events/paris#agenda)** — [Isabelle Galy](https://www.apidays.global/events/paris#speakers) (ClusterIA) · Wed 15:30, Apidays  
  Shadow AI and employee behaviour; organisational, not an API surface.
- **[Anthropomorphism is an API: designing the human interface of AI agents](https://www.apidays.global/events/paris#agenda)** — [Stanislas Bernard](https://www.apidays.global/events/paris#speakers) (Theodo) · Wed 17:00, Apidays  
  Specifying an agent's human interface: name, tone, disclosure.
- **[The Cognitive Firm: Designing Human Control into AI Workflows](https://www.apidays.global/events/paris#agenda)** — [Jorge Fábrega](https://www.apidays.global/events/paris#speakers) (Universidad del Desarrollo & Datavoz) · Thu 09:45, Apidays  
  Designing human control and accountability into AI workflows.
- **[A Valid API Call, An Invalid Outcome - Accountability in the Age of AI Agents](https://www.apidays.global/events/paris#agenda)** — [Afsha](https://www.apidays.global/events/paris#speakers) (Capgemini) · Thu 11:00, Apidays  
  Valid API calls by agents with invalid outcomes; who answers for them.
- **[The API Is Not the Authority: Governing Autonomous AI](https://www.apidays.global/events/paris#agenda)** — [Pedro Barbas](https://www.apidays.global/events/paris#speakers) (TrustGate Sovereign) · Thu 11:00, Apidays  
  Authority for consequential agent actions beyond auth and permissions.
- **[The Responsible AI Canvas 2.0 - in depth evaluation of AI use-cases](https://www.apidays.global/events/paris#agenda)** — [Thorsten Jonas](https://www.apidays.global/events/paris#speakers) (SUX - The Sustainable UX Network), [Anna Forlati](https://www.apidays.global/events/paris#speakers) (TeamSystem) · Thu 12:15, GreenIO  
  Responsible AI canvas for evaluating use cases; governance of AI, not of APIs.
- **[Panel: Nobody read this code. Ship it? AI-generated code, human review, and who answers for the release](https://www.apidays.global/events/paris#agenda)** — [Pier-Jean Malindrino](https://www.apidays.global/events/paris#speakers) (Scub), [Kapil Bakshi](https://www.apidays.global/events/paris#speakers) (Karate Labs) · Thu 14:00, Karate Labs 2nd User Conference  
  No abstract; accountability for AI-generated code releases, not API surface.
- **[Fair & Responsible AI for Sustainability: Governance, Resilience and Adoption](https://www.apidays.global/events/paris#agenda)** — [Louis de Diesbach](https://www.apidays.global/events/paris#speakers) (Euroclear) · Thu 16:20, GreenIO  
  Responsible AI governance and footprint; not API surface.

## Access Clarity

What it costs and how you get in: AI spend, keys, quotas, finops and how an API is sold. [How it is measured](https://apis.io/rating/facets/access-clarity/).

- **[Data, up for grabs or should be budgeted for?](https://www.apidays.global/events/paris#agenda)** — [Leonora Vesterbacka](https://www.apidays.global/events/paris#speakers) (Redpine) · Tue 12:00, GenerationAI  
  No abstract; data as a budgeted cost, closest to finops.
- **[How Kong Konnect keeps your AI spend under control](https://www.apidays.global/events/paris#agenda)** — [Jerome Guillaume](https://www.apidays.global/events/paris#speakers) (Kong) · Tue 15:00, Apidays  
  Sponsor demo, but token tracking, limits and cost control is finops.
- **[Why is an AI gateway no longer optional](https://www.apidays.global/events/paris#agenda)** — [Saad Amal](https://www.apidays.global/events/paris#speakers) (ADEO) · Wed 12:20, Apidays  
  A stolen key and a runaway bill: quotas, key protection and cost controls at the gateway.
- **[Boomi Panel: State of the API Economy 2026](https://www.apidays.global/events/paris#agenda)** — [Markus Müller](https://www.apidays.global/events/paris#speakers) (Boomi), [Mark Boyd](https://www.apidays.global/events/paris#speakers) (Platformable) · Wed 14:00, Apidays  
  State of the API economy report: a market-level read.
- **[Sell the Outcome, Not the Endpoint: API-First Storytelling](https://www.apidays.global/events/paris#agenda)** — [Sandeep Bhaskar](https://www.apidays.global/events/paris#speakers) (Wise) · Wed 14:30, Apidays  
  Selling outcomes over endpoints to banks; how the API is presented to buyers.
- **[AI Agents FinOps: How to Master Your AI Budget](https://www.apidays.global/events/paris#agenda)** — [Mariem Jabloun](https://www.apidays.global/events/paris#speakers) (YOWE) · Wed 14:30, Apidays  
  Controlling unpredictable token and tool-call costs of agents.
- **[Frictionless & Fully Secure: The Power of Mobile Network APIs](https://www.apidays.global/events/paris#agenda)** — [Lina Taguengayte](https://www.apidays.global/events/paris#speakers) (Bouygues Telecom), [Dau Phi Nguyen](https://www.apidays.global/events/paris#speakers) (Free), [Jill Cooper](https://www.apidays.global/events/paris#speakers) (GSMA), [Guillaume Cayatte](https://www.apidays.global/events/paris#speakers) (Orange), [Didier Cadars](https://www.apidays.global/events/paris#speakers) (SFR) · Wed 15:00, Apidays  
  No abstract; mobile network APIs for secure authentication, read from the title.
- **[From Friction to Platform: Rebuilding a Permission System at Scale](https://www.apidays.global/events/paris#agenda)** — [Elizabeth Zaslavsky](https://www.apidays.global/events/paris#speakers) (Ippon) · Wed 17:30, Apidays  
  Rebuilding fragmented permissions as an OpenFGA ReBAC platform.
- **[How much does your AI cost, really ?](https://www.apidays.global/events/paris#agenda)** — [Alex Hayem](https://www.apidays.global/events/paris#speakers) (MIRMI AI), [Enzo Sad-Eddine](https://www.apidays.global/events/paris#speakers) (Thales) · Thu 10:15, Apidays  
  Hidden AI production costs; only the pricing piece of Access Clarity touches it.
- **[Register Once, Integrate Everywhere: FAPI 2.0 and a Federated Authorization Foundation for Public-Sector APIs](https://www.apidays.global/events/paris#agenda)** — [Alexander Hoose](https://www.apidays.global/events/paris#speakers) (Föderale IT-Kooperation (FITKO)) · Thu 11:30, Europe API Conference  
  FAPI 2.0 and federated registration for public-sector APIs.
- **[Building usage-based billing for banks](https://www.apidays.global/events/paris#agenda)** — [Hassane Moustapha](https://www.apidays.global/events/paris#speakers) · Thu 14:00, Apidays  
  Usage-based billing and pricing logic for bank APIs.

## Developer Ergonomics

How quickly someone, or something, can get started, now that coding agents sit between the developer and the API. [How it is measured](https://apis.io/rating/facets/developer-ergonomics/).

- **[Let's Launch a Rocket: AI-Powered API & MCP Bootcamp](https://www.apidays.global/events/paris#agenda)** — [Anthony Viard](https://www.apidays.global/events/paris#speakers) (Postman) · Tue 14:00, Apidays  
  AI tooling from spec to collection to code, plus MCP.
- **[API Developer Experience as Strategic Lever](https://www.apidays.global/events/paris#agenda)** — [Miriam Greis](https://www.apidays.global/events/paris#speakers) (adorsys GmbH + Co. KG) · Wed 11:20, Apidays  
  API developer experience as a strategic lever.
- **[Designing for developers who've changed how they build: lessons from Azure Developer CLI data](https://www.apidays.global/events/paris#agenda)** — [Kristen Womack](https://www.apidays.global/events/paris#speakers) (Microsoft) · Wed 12:20, Apidays  
  DX when coding agents mediate API use, from CLI data.
- **[Amplifying APIs to Visuals for Cost Effective Business Analytics and Financial data](https://www.apidays.global/events/paris#agenda)** — [Syed Khalid](https://www.apidays.global/events/paris#speakers) (Adidas), [Syed Usman Ahmad](https://www.apidays.global/events/paris#speakers) (Grafana Labs) · Wed 15:30, Apidays  
  Financial data APIs turned into visuals for analytics.
- **[I don't write code anymore: decisions behind an AI-Native, API-First Startup](https://www.apidays.global/events/paris#agenda)** — [Fran Mendez](https://www.apidays.global/events/paris#speakers) (Commune) · Wed 16:30, Apidays  
  A one-person API-first startup built by an AI engineer.
- **[Can Harness Engineering make Smaller AI Models Viable?](https://www.apidays.global/events/paris#agenda)** — [Naresh Jain](https://www.apidays.global/events/paris#speakers) (Specmatic) · Thu 09:15, Apidays  
  A behaviour harness for AI-driven API development with smaller models.
- **[Taking the risk out of AI-written software, without slowing down](https://www.apidays.global/events/paris#agenda)** — [Vincent Verdet](https://www.apidays.global/events/paris#speakers) (Independent) · Thu 10:15, Apidays  
  Guarding AI-written code in enterprises; internal practice.
- **[AI writes the code, so who writes the proof? E2E testing in AI-assisted development](https://www.apidays.global/events/paris#agenda)** — [Pier-Jean Malindrino](https://www.apidays.global/events/paris#speakers) (Scub) · Thu 11:30, Karate Labs 2nd User Conference  
  No abstract; E2E testing of AI-written code.
- **[From click to terminal: API engineering in the age of agents](https://www.apidays.global/events/paris#agenda)** — [Anthony Viard](https://www.apidays.global/events/paris#speakers) (Postman) · Thu 11:30, Apidays  
  Agents running API engineering: contract, docs, tests, monitoring, CI/CD.
- **[Engineering Multiplayer API Sandboxes for Humans and Agents](https://www.apidays.global/events/paris#agenda)** — [Nithin Kumar B](https://www.apidays.global/events/paris#speakers) (Wundergraph) · Thu 14:30, Apidays  
  Multiplayer API sandboxes keeping schema edits valid for humans and agents.
- **[Your API changed, did your docs notice?](https://www.apidays.global/events/paris#agenda)** — [Kim Rowden](https://www.apidays.global/events/paris#speakers) (LaunchDocs) · Thu 14:30, Apidays  
  Keeping docs in sync as APIs change fast.

## Discoverability

Whether an API can be found and understood from machine-readable metadata alone. Most of the Europe API Conference's government talks start here. [How it is measured](https://apis.io/rating/facets/discoverability/).

- **[Real-World API & Integration Challenges](https://www.apidays.global/events/paris#agenda)** — [Kin Lane](https://www.apidays.global/events/paris#speakers) (API Evangelist), [Claire Barrett](https://www.apidays.global/events/paris#speakers) (APIsFirst), [Miriam Greis](https://www.apidays.global/events/paris#speakers) (adorsys GmbH + Co. KG), [Miguel Quintero](https://www.apidays.global/events/paris#speakers) (Postman) · Tue 09:55, APIOps Conference Paris 2026  
  Why we still don't know what APIs we have, and why operating-model change stalls.
- **[Make Your API Metadata AI-Ready and Automatically Discoverable by Agents](https://www.apidays.global/events/paris#agenda)** — [Galina Tuova](https://www.apidays.global/events/paris#speakers) (SAP SE) · Tue 12:30, API Standards Conference  
  Open Resource Discovery: systems publish machine-readable metadata at the source for catalogs and agents.
- **[What Europe's Government APIs Look Like From the Outside-In](https://www.apidays.global/events/paris#agenda)** — [Kin Lane](https://www.apidays.global/events/paris#speakers) (API Evangelist) · Thu 09:15, Europe API Conference  
  No abstract; government APIs read from outside, which is how the score reads them.
- **[How API and AI Tools work together across Netherlands Government](https://www.apidays.global/events/paris#agenda)** — [Dimitri van Hees](https://www.apidays.global/events/paris#speakers) (Geonovum) · Thu 10:15, Europe API Conference  
  No abstract; API and AI tooling across Dutch government.
- **[An open business capability map for APIs and Enterprise Architecture](https://www.apidays.global/events/paris#agenda)** — [Vincent Verdet](https://www.apidays.global/events/paris#speakers) (Independent) · Thu 14:00, Apidays  
  Open business capability map organising API catalogues by capability.
- **[From Concrete to Code : Bringing Modern APIs to the Energy Giants](https://www.apidays.global/events/paris#agenda)** — [Aya Lachbi](https://www.apidays.global/events/paris#speakers) (Engie) · Thu 15:00, Apidays  
  Bringing API-first design to the energy sector.
- **[The Ocean is a Product: Building Sovereign APIs for the Blue Economy](https://www.apidays.global/events/paris#agenda)** — [Cellou Diallo](https://www.apidays.global/events/paris#speakers) (Blue Connex) · Thu 15:00, Apidays  
  Making ocean data accessible via sovereign APIs.

## Open Source Surface

Where the product itself is open: supply-chain incidents, open collaboration in finance and open models.

- **[Sovereignty Through Openness, from Domyn Edge 4B to EUROPA 1T](https://www.apidays.global/events/paris#agenda)** — [Luca Antiga](https://www.apidays.global/events/paris#speakers) (Domyn) · Tue 11:00, GenerationAI  
  Open models as a path to sovereignty; no facet reads model sovereignty.
- **[They Said It Couldn't Be Done: Training SOTA LLMs On Fully Open Data](https://www.apidays.global/events/paris#agenda)** — [Anastasia Stasenko](https://www.apidays.global/events/paris#speakers) (pleias) · Tue 12:00, GenerationAI  
  No abstract; training LLMs on fully open data.
- **[Securing Open Source CI/CD Pipelines: Lessons from Handling 2 Supply Chain Incidents](https://www.apidays.global/events/paris#agenda)** — [Florence Njeri](https://www.apidays.global/events/paris#speakers) (AsyncAPI Initiative), [Lukasz Gornicki](https://www.apidays.global/events/paris#speakers) (Brain Fart Services) · Tue 12:00, API Standards Conference  
  Supply chain incidents in open-source CI/CD; release and disclosure practice.
- **[Retaining governance of your projects by deploying Open-Weight Models](https://www.apidays.global/events/paris#agenda)** — [Matthieu Boussard](https://www.apidays.global/events/paris#speakers) (Craft AI) · Wed 12:20, GenerationAI  
  No abstract; self-hosting open-weight models is a sovereignty choice, not a published API surface.
- **[From Vendor Dependency to Open Source: A Journey in Trade-offs](https://www.apidays.global/events/paris#agenda)** — [Sadique Akhtar](https://www.apidays.global/events/paris#speakers) (Maersk GSC), [Nitya Tripathi](https://www.apidays.global/events/paris#speakers) (Maersk GSC) · Wed 14:00, Apidays  
  SaaS versus open-source trade-offs for internal tooling; weak public API signal.
- **[Introduction: Open source and FINOS](https://www.apidays.global/events/paris#agenda)** — [Susan Haimet](https://www.apidays.global/events/paris#speakers) (FINOS Ambassador) · Thu 14:00, FINOS  
  FINOS intro: open source collaboration in finance.

## Regulatory Posture

Applied only in regulated industries: auditability, sovereignty and AI governance for financial regulators. It shows up as a secondary facet in 26 talks.

- **[What Did the Agent Know, and When? Auditable Memory and API Guardrails for Regulated AI](https://www.apidays.global/events/paris#agenda)** — [Abhijit Dey](https://www.apidays.global/events/paris#speakers) (PWC) · Wed 11:50, Apidays  
  Auditable agent memory and API guardrails in regulated industries.
- **[AI Sovereignty Is an Architecture Problem, Not a Model Choice - Keeping Data, Policy and Execution Under Your Control](https://www.apidays.global/events/paris#agenda)** — [Giona Granchelli](https://www.apidays.global/events/paris#speakers) (ABN Amro) · Thu 11:00, Apidays  
  Sovereignty over data, policy and execution in agentic systems.
- **[AI governance in financial services](https://www.apidays.global/events/paris#agenda)** — [Elena Guz](https://www.apidays.global/events/paris#speakers) (Morgan Stanley) · Thu 14:15, FINOS  
  AI risk governance and evidence for financial regulators.

## Outside the rubric

The largest group by count, and two different things. The GreenIO track is about energy, carbon and water, a disclosure no API provider publishes and I don't measure yet. The rest is agent engineering (memory, evaluation, coding factories), which is about building agents, not publishing APIs.

- **[Grep Is Not a Memory](https://www.apidays.global/events/paris#agenda)** — [Lishuai Jing](https://www.apidays.global/events/paris#speakers) (memtrace.io) · Tue 11:00, ContextCon and MCP Summit  
  No abstract; agent memory design, nothing a provider publishes.
- **[Three common mistakes when taking an AI agent from prototype to production](https://www.apidays.global/events/paris#agenda)** — [Matthieu Cordier](https://www.apidays.global/events/paris#speakers) (OpenAI) · Tue 11:30, GenerationAI  
  Taking an agent from prototype to production; agent engineering, not a provider surface.
- **[Inside Common Crawl: Open Web Data at Petabyte Scale](https://www.apidays.global/events/paris#agenda)** — [Thom Vaughan](https://www.apidays.global/events/paris#speakers) (Common Crawl) · Tue 11:30, GenerationAI  
  No abstract; open web crawl data at scale.
- **[Swisscheese: the missing review process of your AI software factory](https://www.apidays.global/events/paris#agenda)** — [Djalel Benbouzid](https://www.apidays.global/events/paris#speakers) (Independent AI Researcher) · Tue 12:30, GenerationAI  
  Review process for AI coding factories; internal engineering, no provider surface.
- **[The first real Vibe coding Platform inside a corporate ? How TGV Agentic Team made it work, open to everybody and enabling software sovereignty](https://www.apidays.global/events/paris#agenda)** — [Damien Wattez](https://www.apidays.global/events/paris#speakers) (SNCF Voyageurs), [Alexandre Cormeraie](https://www.apidays.global/events/paris#speakers) (SNCF Voyageurs) · Tue 14:00, GenerationAI  
  No abstract; internal vibe-coding platform at a rail operator.
- **[AI Edge for the AI Age: Streaming Data for Robots and Drones](https://www.apidays.global/events/paris#agenda)** — [Jean-Baptiste Kempf](https://www.apidays.global/events/paris#speakers) (Kyber / Tech Fellow Scaleway) · Tue 14:00, GenerationAI  
  No abstract; streaming data for robots and drones at the edge.
- **[Deploying and Managing Layer7 within a Kubernetes environment](https://www.apidays.global/events/paris#agenda)** — [Stephane Murer](https://www.apidays.global/events/paris#speakers) (Malakoff Humanis), [Gary Vermeulen](https://www.apidays.global/events/paris#speakers) (Broadcom) · Tue 14:00, Apidays  
  Running a gateway on Kubernetes; internal deployment, no published surface.
- **[Can agents learn from their mistakes?](https://www.apidays.global/events/paris#agenda)** — [Jules Belveze ](https://www.apidays.global/events/paris#speakers) (H Company) · Tue 14:30, GenerationAI  
  Agents learning from failed runs; agent research, no provider surface.
- **[AI and planetary boundaries](https://www.apidays.global/events/paris#agenda)** — [Philippe Bihouix](https://www.apidays.global/events/paris#speakers) (AREP) · Wed 09:30, GreenIO  
  AI and planetary boundaries; nothing in the rubric reads it.
- **[The Digital Quiz, par La Fresque du Numérique](https://www.apidays.global/events/paris#agenda)** — [Jérôme Vigogne](https://www.apidays.global/events/paris#speakers) (ACT4CHANGE) · Wed 10:35, GreenIO  
  Workshop on AI environmental impact; outside the rubric.
- **[Trusting the “Green” in Tech: How ISO 14064 Third-Party Verification Combats Greenwashing](https://www.apidays.global/events/paris#agenda)** — [Melanie Blackmore](https://www.apidays.global/events/paris#speakers) (Carbonology) · Wed 10:35, GreenIO  
  Third-party verification of carbon claims; disclosure no facet reads.
- **[Planned Obsolescence & Ecological Design](https://www.apidays.global/events/paris#agenda)** — [Laetitia Vasseur](https://www.apidays.global/events/paris#speakers) (Halte à l'Obsolescence Programmée) · Wed 11:20, GreenIO  
  Planned obsolescence in IT; outside the rubric.
- **[Streaming's Energy Use. Watts, Methods, and What the Industry Needs to Measure Next](https://www.apidays.global/events/paris#agenda)** — [Benjamin Schwarz](https://www.apidays.global/events/paris#speakers) (Greening of Streaming) · Wed 11:20, GreenIO  
  Measured streaming energy use; outside the rubric.
- **[Sustainable, Sovereign AI: Do companies really give a sh*t ?](https://www.apidays.global/events/paris#agenda)** — [James Martin](https://www.apidays.global/events/paris#speakers) (BetterTech) · Wed 11:20, GreenIO  
  Small sovereign models for sustainability; outside the rubric.
- **[La seconde vie des équipements IT : un levier environnemental et économique](https://www.apidays.global/events/paris#agenda)** — [Helene Lieutenant](https://www.apidays.global/events/paris#speakers) (PartnerRe), [Etienne Viemont](https://www.apidays.global/events/paris#speakers) (ARTO) · Wed 11:45, GreenIO  
  Second life of IT equipment; outside the rubric.
- **[Conscious Use of LLMs: Efficiency and Sustainability in Practice](https://www.apidays.global/events/paris#agenda)** — [Nicolas Fantoni](https://www.apidays.global/events/paris#speakers) (Imola Informatica S.P.A.), [Riccardo Soro](https://www.apidays.global/events/paris#speakers) (Imola Informatica) · Wed 11:45, GreenIO  
  Efficient, sustainable LLM use; outside the rubric.
- **[Adecco × Sopht : retour d’expérience sur une démarche Green IT qui tient la route](https://www.apidays.global/events/paris#agenda)** — [Julien Bryard](https://www.apidays.global/events/paris#speakers) (Adecco), [Isabel Jaquenoud](https://www.apidays.global/events/paris#speakers) (Sopht) · Wed 11:45, GreenIO  
  Green IT case study; outside the rubric.
- **[Frugal by Design: How Wiley measures and manages the impact of their AI products](https://www.apidays.global/events/paris#agenda)** — [Boris Gamazaychikov](https://www.apidays.global/events/paris#speakers) (Sustainable AI Group (SAIG)), [Laura Gunn](https://www.apidays.global/events/paris#speakers) (Wiley) · Wed 12:10, GreenIO  
  Measuring AI product impact; outside the rubric.
- **[AI, ally or enemy of the planet?](https://www.apidays.global/events/paris#agenda)** — [Rosendo Mañas Faura](https://www.apidays.global/events/paris#speakers) (Resilio) · Wed 12:10, GreenIO  
  AI energy, carbon and water transparency; outside the rubric.
- **[L'inspirothèque pour un numérique plus écologique](https://www.apidays.global/events/paris#agenda)** — [Thomas Thibault](https://www.apidays.global/events/paris#speakers) (Designers Éthiques - Limites Numériques) · Wed 12:10, GreenIO  
  Catalogue of ecological digital design; outside the rubric.
- **[The journey behind the world's first sustainability certification for cloud resources: From concept to application](https://www.apidays.global/events/paris#agenda)** — [Barton Finn](https://www.apidays.global/events/paris#speakers) (TCO Development), [Simon Shillaker](https://www.apidays.global/events/paris#speakers) (Exoscale) · Wed 14:00, GreenIO  
  A sustainability certification for cloud resources; a compliance badge the rubric does not read.
- **[Vers un usage raisonnable et conscient de l'IA : l'empreinte IA de Back Market à 360°](https://www.apidays.global/events/paris#agenda)** — [Aurélien Gervasi](https://www.apidays.global/events/paris#speakers) (Back Market), [Florian Pothin](https://www.apidays.global/events/paris#speakers) (Toovalu) · Wed 14:00, GreenIO  
  AI carbon footprint at Back Market; sustainability disclosure the rubric does not measure.
- **[How to Unlock the Double-Wins of AI and Cloud Sustainability](https://www.apidays.global/events/paris#agenda)** — [William Tinney](https://www.apidays.global/events/paris#speakers) (Greenpixie), [Jasper Behnken](https://www.apidays.global/events/paris#speakers) (ABN AMRO Bank), [Mickaël Guevorkian Babaev](https://www.apidays.global/events/paris#speakers) (CloudHealth) · Wed 14:00, GreenIO  
  AI and cloud sustainability with FinOps; only the finops piece touches Access Clarity.
- **[Measuring AI's Footprint Together: The BoAmps Open Dataset](https://www.apidays.global/events/paris#agenda)** — [Sarah Oury](https://www.apidays.global/events/paris#speakers) (Sopra Steria) · Wed 14:25, GreenIO  
  An open dataset of field-measured AI energy use; providers rarely disclose it.
- **[Why smart people disagree on sustainability?](https://www.apidays.global/events/paris#agenda)** — [Romain Jacob](https://www.apidays.global/events/paris#speakers) (ETH Zurich) · Wed 14:25, GreenIO  
  Methodology disagreements in digital impact estimates.
- **[LeafCloud case: When does data-center heat reuse provide a net climate benefit?](https://www.apidays.global/events/paris#agenda)** — [Hans Stokking](https://www.apidays.global/events/paris#speakers) (TNO), [Louise Aubet](https://www.apidays.global/events/paris#speakers) (Resilio), [Sacha van Geffen](https://www.apidays.global/events/paris#speakers) (LeafCloud) · Wed 14:40, GreenIO  
  Data-center heat reuse climate benefit.
- **[Model your digital services with e-footprint](https://www.apidays.global/events/paris#agenda)** — [Vincent Villet](https://www.apidays.global/events/paris#speakers) (Boavizta), [Michalina (Chwastyk) Cetin](https://www.apidays.global/events/paris#speakers) (Boavizta) · Wed 14:50, GreenIO  
  Modelling a digital service's environmental footprint.
- **[Empreinte environnementale de l'IA Gen en open source : chercheurs et entreprises ensemble pour le bien commun](https://www.apidays.global/events/paris#agenda)** — [Caroline Darmon](https://www.apidays.global/events/paris#speakers) (Publicis) · Wed 14:50, GreenIO  
  An open alliance for GenAI footprint data.
- **[Building an AI Model Router: Practical Lessons and Designs](https://www.apidays.global/events/paris#agenda)** — [Jason Davenport](https://www.apidays.global/events/paris#speakers) (Google Cloud) · Wed 15:00, GenerationAI  
  No abstract; model routing is LLM infrastructure, not a published API surface.
- **[Cooperative Data Centers. Everyone wants them, nobody builds them. Why?](https://www.apidays.global/events/paris#agenda)** — [Thomas Hutmacher](https://www.apidays.global/events/paris#speakers) (collective zero e.V.), [Thomas Fricke](https://www.apidays.global/events/paris#speakers) (CollectiveZero), [Vincent Rahn](https://www.apidays.global/events/paris#speakers) (collective zero e.V.) · Wed 15:05, GreenIO  
  Cooperative European data centers.
- **[From Rack to Region: hands-on feedback on sustainable data centres and cloud](https://www.apidays.global/events/paris#agenda)** — [Vincent Poncet](https://www.apidays.global/events/paris#speakers) (Google Cloud), [Conor Molloy](https://www.apidays.global/events/paris#speakers) (Bureau Veritas), [Emily Watson-Breeze](https://www.apidays.global/events/paris#speakers) (TCO Development) · Wed 15:15, GreenIO  
  Cloud providers' GHG and efficiency data disclosure.
- **[Vérité ou hallucination ?  Démystifions les idées reçues sur l’estimation de l’empreinte de l’IA !](https://www.apidays.global/events/paris#agenda)** — [Aurore Tual](https://www.apidays.global/events/paris#speakers) (Thales), [Romain Bachelet](https://www.apidays.global/events/paris#speakers) (SNCF Voyageurs Matériel), [Marine Le Touzé](https://www.apidays.global/events/paris#speakers) (Schneider Electric), [Rose Djagbre](https://www.apidays.global/events/paris#speakers) (Orange) · Wed 15:15, GreenIO  
  A game on AI footprint estimation myths.
- **[From Cloud Billing to GreenOps Telemetry: Making Sustainability Observable](https://www.apidays.global/events/paris#agenda)** — [Diana Todea](https://www.apidays.global/events/paris#speakers) (VictoriaMetrics) · Wed 15:30, GreenIO  
  Billing exports turned into sustainability metrics; GreenOps telemetry.
- **[Green Software Landscape](https://www.apidays.global/events/paris#agenda)** — [David Kopp](https://www.apidays.global/events/paris#speakers) (envite consulting GmbH) · Wed 16:30, GreenIO  
  An open landscape of green software tools.
- **[From Green IT to Green IS: Lessons from a Central Bank](https://www.apidays.global/events/paris#agenda)** — [Dr. Antonios Papargyris](https://www.apidays.global/events/paris#speakers) (Bank of Greece) · Wed 16:30, GreenIO  
  Green IS at a central bank.
- **[Building the essential, efficiently: Eco-Design redefines our Digital Services](https://www.apidays.global/events/paris#agenda)** — [Laurent David](https://www.apidays.global/events/paris#speakers) (Worldline), [Aurore Tual](https://www.apidays.global/events/paris#speakers) (Thales), [Christophe Hirotani](https://www.apidays.global/events/paris#speakers) (Crédit Agricole Technologies et Services), [Tala Awada](https://www.apidays.global/events/paris#speakers) (VINCI Energie) · Wed 16:30, GreenIO  
  ISO/IEC 20125-1 eco-design standard for digital services.
- **[Les audits d'écoconception ne servent à rien (la plupart du temps)](https://www.apidays.global/events/paris#agenda)** — [Laurent Devernay Satyagraha](https://www.apidays.global/events/paris#speakers) (LauDevSat) · Wed 16:55, GreenIO  
  Why eco-design audits go nowhere.
- **[Demonstrating the Real Value of Digital Sobriety through ROI-MPACT](https://www.apidays.global/events/paris#agenda)** — [Angelica Calvet](https://www.apidays.global/events/paris#speakers) (Alliance Green IT) · Wed 16:55, GreenIO  
  ROI of digital sobriety.
- **[What the Water Sector Teaches Us About Making Green Tech Actually Stick](https://www.apidays.global/events/paris#agenda)** — [Mallak Bani Mustafa](https://www.apidays.global/events/paris#speakers) (Southern water) · Wed 16:55, GreenIO  
  Green tech adoption lessons from the water sector.
- **[Green Architecture: less fat, more impact, more efficiency!](https://www.apidays.global/events/paris#agenda)** — [Thierno Diallo](https://www.apidays.global/events/paris#speakers) (AXA France) · Wed 17:00, Apidays  
  API Green Score applied to an API; payload efficiency is outside the rubric.
- **[Penser un e-commerce durable à l’ère de l’IA : usages et impacts](https://www.apidays.global/events/paris#agenda)** — [Perrine Tanguy](https://www.apidays.global/events/paris#speakers) (Collectif E-CO, E-Commerce Responsable) · Wed 17:20, GreenIO  
  AI's environmental impact on e-commerce; no facet reads sustainability.
- **[Et si votre IA apprenait la sobriété ?](https://www.apidays.global/events/paris#agenda)** — [Guillaume Gallon](https://www.apidays.global/events/paris#speakers) (Institut du Numérique Responsable) · Wed 17:20, GreenIO  
  Open-source sobriety skills for coding assistants; environmental frugality is unmeasured.
- **[Green IT, Smart Business: How City of Copenhagen Cuts Carbon and Costs at the Same Time](https://www.apidays.global/events/paris#agenda)** — [Kerstin Roberts](https://www.apidays.global/events/paris#speakers) (City of Copenhagen) · Wed 17:20, GreenIO  
  Green IT procurement and cost at a city; no API surface.
- **[From APIs to Outcomes: Building Ecosystems Around Human Needs](https://www.apidays.global/events/paris#agenda)** — [Heather Xiao](https://www.apidays.global/events/paris#speakers) (Horizon Zero) · Wed 17:30, Apidays  
  Ecosystem outcomes for people; no published-surface signal.
- **[Salt, Fat, Sugar, Data](https://www.apidays.global/events/paris#agenda)** — [Tom Greenwood](https://www.apidays.global/events/paris#speakers) (Wholegrain Digital) · Thu 09:30, GreenIO  
  Food systems and data addiction; no API relevance.
- **[Building a World Model for a $14 Trillion Industry: Why LLMs Alone Are Not Enough](https://www.apidays.global/events/paris#agenda)** — [Saurabh Mishra](https://www.apidays.global/events/paris#speakers) (Taiyo.AI, SciencesPo, OECD.AI) · Thu 09:45, Apidays  
  Industry world model beyond LLMs; no API surface.
- **[How green is AI?](https://www.apidays.global/events/paris#agenda)** — [Nina Benoit](https://www.apidays.global/events/paris#speakers) (Brightest) · Thu 10:05, GreenIO  
  AI's carbon, water and mineral footprint.
- **[Exclusive presentation: Worldwide AI environmental footprint study (English version)](https://www.apidays.global/events/paris#agenda)** — [Auban Derreumaux](https://www.apidays.global/events/paris#speakers) (Association Green IT), [James Martin](https://www.apidays.global/events/paris#speakers) (BetterTech), [Laure Alfonsi](https://www.apidays.global/events/paris#speakers) (Zeb et Web) · Thu 11:00, GreenIO  
  Worldwide AI environmental footprint study.
- **[In the search of Datacenters and their footprint with the DCWatch project](https://www.apidays.global/events/paris#agenda)** — [Benoit Petit](https://www.apidays.global/events/paris#speakers) (Hubblo) · Thu 11:00, GreenIO  
  Datacenter footprint measurement.
- **[Claude to Copilot - Measuring AI SaaS Emissions](https://www.apidays.global/events/paris#agenda)** — [William Tinney](https://www.apidays.global/events/paris#speakers) (Greenpixie), [Joshua Horswill](https://www.apidays.global/events/paris#speakers) (Greenpixie) · Thu 11:00, GreenIO  
  AI SaaS emissions from provider usage reports; a usage-disclosure gap.
- **[Right to Repair vs. Intellectual Property: Hardware’s Second Life](https://www.apidays.global/events/paris#agenda)** — [Carlyne Sevestre](https://www.apidays.global/events/paris#speakers) (Leca Sevestre Avocats) · Thu 11:25, GreenIO  
  Right to repair vs IP for hardware.
- **[Leave no stone unturned: assessing the full impacts of your organisation’s digital tech using DIST](https://www.apidays.global/events/paris#agenda)** — [Oliver Cronk](https://www.apidays.global/events/paris#speakers) (Architect Tomorrow | Green Web Foundation), [Hannah Smith](https://www.apidays.global/events/paris#speakers) (Green Web Foundation) · Thu 11:25, GreenIO  
  Full digital-tech impact assessment beyond carbon.
- **[Building Green IT from the inside: ABB's Journey from awareness to reality](https://www.apidays.global/events/paris#agenda)** — [Thomas Mosser](https://www.apidays.global/events/paris#speakers) (ABB) · Thu 11:25, GreenIO  
  ABB's internal Sustainable IT journey.
- **[From expert judgments to LLM quality signals](https://www.apidays.global/events/paris#agenda)** — [Arianna Bonazza](https://www.apidays.global/events/paris#speakers) (Publicis Groupe) · Thu 11:30, Apidays  
  Evaluating LLM quality with expert judgments; no API surface.
- **[Is Digital Sovereignty Sustainable?](https://www.apidays.global/events/paris#agenda)** — [Georgina Macrae](https://www.apidays.global/events/paris#speakers) (ClimateAction.Tech) · Thu 11:50, GreenIO  
  Sovereignty versus sustainability trade-offs.
- **[La Poste: Establishing Consistent Footprint Measurement Across Multi-Entity Environments](https://www.apidays.global/events/paris#agenda)** — [Matthieu Poulard](https://www.apidays.global/events/paris#speakers) (Aguaro), [Annick Lebreton](https://www.apidays.global/events/paris#speakers) (La Poste) · Thu 11:50, GreenIO  
  Footprint measurement across La Poste entities.
- **[Context management in large organisations : How to Make better AI decisions](https://www.apidays.global/events/paris#agenda)** — [Alex Hayem](https://www.apidays.global/events/paris#speakers) (MIRMI AI) · Thu 12:00, Apidays  
  Enterprise context management for AI tools; no public API surface the rubric reads.
- **[Can Africa Build Green AI Infrastructure? Lessons from the Democratic Republic of Congo](https://www.apidays.global/events/paris#agenda)** — [Narcisse Mbunzama](https://www.apidays.global/events/paris#speakers) (Digital Security Group) · Thu 12:15, GreenIO  
  Green AI infrastructure in the DRC; sustainability, nothing the rubric measures.
- **[Less Status, More Signal: How AI Agents Changed Delivery Management](https://www.apidays.global/events/paris#agenda)** — [Alexis Revue](https://www.apidays.global/events/paris#speakers) (Ledger) · Thu 12:30, Apidays  
  Internal agent platform for delivery management; no public API signal.
- **[Sustainable Digital Value Chains: How Enterprise Architecture Enables IT Sustainability at Vodafone](https://www.apidays.global/events/paris#agenda)** — [Rainer Scheibehenne](https://www.apidays.global/events/paris#speakers) (ITM GmbH) · Thu 12:40, GreenIO  
  IT sustainability via enterprise architecture at Vodafone; nothing the rubric reads.
- **[The No Exit Dilemma: No Tech Fix Is Enough, No Bystanders](https://www.apidays.global/events/paris#agenda)** — [Adel Noureddine](https://www.apidays.global/events/paris#speakers) (University Paris Nanterre) · Thu 12:40, GreenIO  
  Digital energy and environmental footprint; sustainability.
- **[LVMH × Sopht : du Green IT mesuré au Green IT piloté](https://www.apidays.global/events/paris#agenda)** — [Damien Nierat](https://www.apidays.global/events/paris#speakers) (Christian Dior (LVMH)), [Théo Blechschmidt](https://www.apidays.global/events/paris#speakers) (Sopht) · Thu 14:00, GreenIO  
  Measuring and steering IT footprint at LVMH; sustainability.
- **[Peut-on allier industrialisation et IA frugale ? Le platform engineering au service de la maîtrise de nos usages IA](https://www.apidays.global/events/paris#agenda)** — [Benjamin Demonet](https://www.apidays.global/events/paris#speakers) (SNCF Connect & Tech) · Thu 14:00, GreenIO  
  Platform engineering for frugal AI use; sustainability.
- **[Green IT in Europe: How policy, transparency and procurement can shape a sustainable Tech future](https://www.apidays.global/events/paris#agenda)** — [Wiebren van der Zee](https://www.apidays.global/events/paris#speakers) (ABN AMRO Bank), [Pieke Hezemans](https://www.apidays.global/events/paris#speakers) (Dutch National Coalition for Sustainable Digitalisation), [Ekaterina Smid-Gankin](https://www.apidays.global/events/paris#speakers) (Circular and Fair ICT (CFIT) Pact Secretariat, Ministry of Economic Affairs and Climate Policy), [Analivia Brouwer](https://www.apidays.global/events/paris#speakers) (Directorate of the Digital Economy, Ministry of Economic Affairs and Climate Policy) · Thu 14:00, GreenIO  
  EU policy, transparency and procurement for green tech; sustainability.
- **[Qualité et traçabilité des données : comment réduire l’empreinte de l’IA dès la source](https://www.apidays.global/events/paris#agenda)** — [Jawaher Allala](https://www.apidays.global/events/paris#speakers) (Systnaps) · Thu 14:25, GreenIO  
  Data quality and traceability to reduce AI footprint.
- **[Extending IT hardware life: Evernex's circular IT playbook](https://www.apidays.global/events/paris#agenda)** · Thu 14:25, GreenIO  
  Hardware life extension and e-waste; sustainability.
- **[Your Carbon Dashboard Is Not Saving the Planet](https://www.apidays.global/events/paris#agenda)** — [Wilco Burggraaf](https://www.apidays.global/events/paris#speakers) (HighTech Innovators) · Thu 14:40, GreenIO  
  Carbon dashboards versus actual reduction; sustainability.
- **[Jev as a concept and how deterministic systems are the answer to Financial Services and similar industries](https://www.apidays.global/events/paris#agenda)** — [Deepak Pandiyarajan](https://www.apidays.global/events/paris#speakers) (JP Morgan) · Thu 15:00, Apidays  
  Deterministic systems over LLMs in financial services; no API surface stated.
- **[Data Centre Essentials - Sustainability in DCs](https://www.apidays.global/events/paris#agenda)** · Thu 15:05, GreenIO  
  Data centre sustainability book; nothing the rubric reads.
- **[TokenOps: Trends, Metrics and Best Practices for Navigating the Energy Constraints, Costs and Impacts of Agentic AI](https://www.apidays.global/events/paris#agenda)** — [Ismael Velasco](https://www.apidays.global/events/paris#speakers) (Adora Foundation) · Thu 15:10, GreenIO  
  Token cost and energy of agentic AI; only finops brushes Access Clarity.
- **[Measuring the impact of coding agents with agentic-footprint](https://www.apidays.global/events/paris#agenda)** — [Amine Saboni](https://www.apidays.global/events/paris#speakers) (Code Carbon), [Benoit Courty](https://www.apidays.global/events/paris#speakers) (CodeCarbon) · Thu 15:55, GreenIO  
  Measuring coding-agent footprint; sustainability.
- **[Scheduling AI workloads with High Performance Computing](https://www.apidays.global/events/paris#agenda)** — [Raphael Javaux](https://www.apidays.global/events/paris#speakers) (Citi) · Thu 15:55, FINOS  
  HPC scheduling of AI workloads; no API surface.
- **[Piloting EU-Hosted AI for EV Charging Customer Service](https://www.apidays.global/events/paris#agenda)** — [Florence Bellendir](https://www.apidays.global/events/paris#speakers) (Mer) · Thu 15:55, GreenIO  
  EU-hosted AI pilot for EV charging customer service.
- **[GENIA - Testing - Industrialiser la QA logicielle avec une architecture Multi-Agents.](https://www.apidays.global/events/paris#agenda)** — [Betty Beauge](https://www.apidays.global/events/paris#speakers) (NIJI), [Gilles Nouais](https://www.apidays.global/events/paris#speakers) (Niji) · Thu 15:55, Apidays  
  Multi-agent QA for generated code; not API surface.
- **[Do you really need an LLM for that? How Orange rethinks AI efficiency.](https://www.apidays.global/events/paris#agenda)** — [Romain Carbou](https://www.apidays.global/events/paris#speakers) (Orange), [Rose Djagbre](https://www.apidays.global/events/paris#speakers) (Orange) · Thu 15:55, GreenIO  
  LLM proxy to cut token cost and footprint.
- **[How to get people on board with responsible tech ? From awareness to engagement](https://www.apidays.global/events/paris#agenda)** — [Jérôme Vigogne](https://www.apidays.global/events/paris#speakers) (ACT4CHANGE), [Sandra Sydow](https://www.apidays.global/events/paris#speakers) (Planet On Stage (NGO)) · Thu 16:15, GreenIO  
  Engagement in responsible tech practices; sustainability.
- **[Une IA sobre qui doit tout prouver](https://www.apidays.global/events/paris#agenda)** — [Jérémy Pastouret](https://www.apidays.global/events/paris#speakers) (Les e-novateurs) · Thu 16:20, GreenIO  
  Frugal AI reading privacy policies; methodology, not API surface.
- **[De 6 mois à 2 jours : la révolution LLM pour le traitement documentaire](https://www.apidays.global/events/paris#agenda)** — [Vinorth Varatharasan](https://www.apidays.global/events/paris#speakers) (Kolecto) · Thu 16:25, Apidays  
  LLM document processing; no API surface.
