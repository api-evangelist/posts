---
published: true
layout: post
title: 'Every Talk At APIDays London, Mapped To The Kin Score'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/every-talk-at-apidays-london-mapped-to-the-kin-score.png
date: 2026-09-28
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
[APIDays London](https://www.apidays.global/events/london) is this Wednesday and Thursday, 30 September and 1 October, at Convene Sancroft next to St. Paul's. Before I go, I did what I always do with an agenda: I read every session. All 110 of them, across the Apidays, GenerationAI, GreenIO, OpenAPI, AsyncAPI and GraphQL tracks, and I mapped each one to the [Kin Score](https://apis.io/rating/) facet it speaks to.

I wanted to see two things. What the people on stage are going to tell the room an API needs to be, and whether the rubric I use to measure APIs across the [APIs.io](https://apis.io) catalog is looking at the same things. Mostly it is. Where it is not, the gap is interesting.

The short version. **Agent Readiness dominates** — it is the main subject of 33 talks and comes up in 61. MCP servers, machine-readable auth and rate-limit signalling are the three things speakers keep returning to. **Contract Quality and Contract Governance** are right behind, carried by the OpenAPI, AsyncAPI and GraphQL tracks. **Accountability**, a layer I do not score yet, is the main subject of 11 talks, which tells me it is time I did. And most of the GreenIO track sits **outside the rubric entirely**, pointing at a disclosure — energy, carbon, water — that no API provider publishes and I do not measure.

Each talk is listed once, under the facet it is mostly about, with its day and London start time. Many of them touch several. If you want to filter by facet, track or day, or see every facet a talk touches, the full mapping is at [talks.apievangelist.com/events/apidays-london-2026/](https://talks.apievangelist.com/events/apidays-london-2026/). Every talk and speaker below links to the APIDays agenda, which is where you should go to plan your two days — and if you do not have a ticket yet, [you can still get one](https://ticket.apidays.global/event/future-of-software-technologies-london-2026/f3ad7d08-6cc8-4e07-9342-9cca27c47ce4/apidays-london).

I am speaking too: [OpenAPI Extensions Are Not a Mess, They Are a Map](https://www.apidays.global/events/london#agenda), Thursday at 09:55 on the OpenAPI track, where I walk through what 2,249 OpenAPI extensions say about the jobs the specification still does not do. Come find me.

## Agent Readiness

A third of the primary talks at APIDays London are about one thing: whether an AI agent can drive an API without a human filling in the gaps. The speakers below will teach you what agents need from an API. Agent Readiness is the separate score I use to measure whether an API gives it to them: a published OpenAPI, an MCP server, machine-readable auth, idempotency, stable errors, rate-limit headers, agent skills, a well-known catalog, protected resource metadata, and bound rather than bearer credentials. [How the Kin Score measures it on APIs.io](https://apis.io/rating/#agent-readiness).

- **[Trends Keynote: The AI Gateway Playbook: prompt, responses & policy guardrails in production](https://www.apidays.global/events/london#agenda)** — [Shruti Naik](https://www.apidays.global/events/london#speakers) (Lloyds Banking Group), [Fayzul Islam](https://www.apidays.global/events/london#speakers) (Lloyds Banking Group) · Wed 09:40, GenerationAI  
  Gateway quotas, auth, token limits and cost controls in a bank.
- **[The Blueprint for Agent-Ready APIs in Fintech](https://www.apidays.global/events/london#agenda)** — [Yu Zhen Koh](https://www.apidays.global/events/london#speakers) (Wise) · Wed 10:50, GenerationAI  
  Machine-readable contracts, MCP, LLM docs, actionable errors, disciplined versioning. Close to the Agent Readiness rubric itself.
- **[The Holiday Checkout Has No Human](https://www.apidays.global/events/london#agenda)** — [Shaked Vax](https://www.apidays.global/events/london#speakers) (Thales) · Wed 10:50, Apidays  
  Telling trusted shopping agents from bots.
- **[MCP, A2A, and what agentic protocols mean for API platform teams](https://www.apidays.global/events/london#agenda)** — [Kaiwalya Koparkar](https://www.apidays.global/events/london#speakers) (Gravitee.io) · Wed 11:40, Apidays  
  Exposing APIs via MCP, A2A, token rate limits, data masking.
- **[Operating Enterprise AI at Scale: From Autonomous Workflows to the Control Plane](https://www.apidays.global/events/london#agenda)** — [David Wang](https://www.apidays.global/events/london#speakers) (Tetrate), [Chris Falloon](https://www.apidays.global/events/london#speakers) (Dell Technologies Capital) · Wed 11:40, GenerationAI  
  Identity, access, policy and visibility for autonomous workflows.
- **[Computer Use via API: Giving Developers an Agent That Can See, Reason, and Act on Any Screen](https://www.apidays.global/events/london#agenda)** — [Antonio Roberto Ventura](https://www.apidays.global/events/london#speakers) (H Company) · Wed 12:05, GenerationAI  
  Computer use is what agents do when there is no API. It is the counter-story to a Human-Only band.
- **[Why you should already be exposing MCP? And how to do it in 5 easy steps](https://www.apidays.global/events/london#agenda)** — [Dalli Bagdi](https://www.apidays.global/events/london#speakers) (IBM), [Chris Phillips](https://www.apidays.global/events/london#speakers) (IBM) · Wed 12:05, Apidays  
  Existing APIs -> MCP server in five steps.
- **[When Software Starts Improvising: How to Navigate the New World of Non-Deterministic Software Without Getting Burned.](https://www.apidays.global/events/london#agenda)** — [Steven Willmott](https://www.apidays.global/events/london#speakers) (CEO Safe Intelligence) · Wed 12:30, GenerationAI  
  Verification and oversight for non-deterministic software.
- **[APIs and AI Keynote: MCP vs. API Gateways: They’re Not Interchangeable](https://www.apidays.global/events/london#agenda)** — [Goutam Verma](https://www.apidays.global/events/london#speakers) (Expedia Group) · Wed 14:00, Apidays  
  MCP is stateful and session-based; gateways built for stateless HTTP do not fit.
- **[Let's Build, Secure, and Observe an AI Agent with an Agent Gateway](https://www.apidays.global/events/london#agenda)** — [Gbadebo Bello](https://www.apidays.global/events/london#speakers) (Postman) · Wed 14:00, Apidays  
  Centralised credentials, progressive tool disclosure, retries and observability in a banking demo.
- **[When the Buyer is an Agent: How AI Intermediaries Disrupt eCommerce Acquisition](https://www.apidays.global/events/london#agenda)** — [Katia Maevskaia](https://www.apidays.global/events/london#speakers) (Snap Inc) · Wed 14:50, GenerationAI  
  When the buyer is an agent, discovery-led retail breaks.
- **[How do you secure and govern every AI agent through one front door?](https://www.apidays.global/events/london#agenda)** — [Kevin Peeters](https://www.apidays.global/events/london#speakers) (Axway) · Wed 14:50, Apidays  
  One governed front door for agent tools.
- **[Do Tools Still Matter? MCP Tool Design in the Age of Code Mode](https://www.apidays.global/events/london#agenda)** — [Ruben Casas](https://www.apidays.global/events/london#speakers) (Postman) · Wed 15:15, GenerationAI  
  Tool design vs Code Mode; bloated tool surfaces.
- **[APIs in the Age of AI Built for Humans, Now Consumed by Agents](https://www.apidays.global/events/london#agenda)** — [Asanka Abeysinghe](https://www.apidays.global/events/london#speakers) (WSO2) · Wed 15:15, Apidays  
  APIs built for humans, consumed by agents. No abstract.
- **[AgentGuard: Securing Inter-Agent Messages](https://www.apidays.global/events/london#agenda)** — [Umme Nizba](https://www.apidays.global/events/london#speakers) · Wed 16:00, GenerationAI  
  Open-source middleware: message attestation, capability manifests, audit logs.
- **[When API Tokens Become Attack Vectors](https://www.apidays.global/events/london#agenda)** — [Sachin Thombre](https://www.apidays.global/events/london#speakers) (Thales) · Wed 16:00, Apidays  
  Tokens as attack vectors, which is exactly bound vs bearer.
- **[End to End encrypted Agentic communication control-place for long living agents](https://www.apidays.global/events/london#agenda)** — [Farshid Ashouri](https://www.apidays.global/events/london#speakers) (JPMorganChase) · Wed 16:25, GenerationAI  
  Addresses and a bus for long-lived agents.
- **[Building Enterprise-ready Agents with an AI Gateway](https://www.apidays.global/events/london#agenda)** — [Shruti Naik](https://www.apidays.global/events/london#speakers) (Lloyds Banking Group), [Nigel Walters](https://www.apidays.global/events/london#speakers) (Google Cloud), [Bradley Cummings](https://www.apidays.global/events/london#speakers) (Lloyds) · Wed 16:25, Apidays  
  Agentic sprawl behind an AI gateway at a bank.
- **[Who Let the Agent In? Securing MCP Servers in Production](https://www.apidays.global/events/london#agenda)** — [Prachi Jamdade](https://www.apidays.global/events/london#speakers) (Gravitee) · Wed 16:50, GenerationAI  
  MCP-spec-compliant authn/authz in production.
- **[Apigee Ai Gateway labs on Google Cloud](https://www.apidays.global/events/london#agenda)** — [Saravanakumar Rajagopal](https://www.apidays.global/events/london#speakers) (Google Cloud), [Nigel Walters](https://www.apidays.global/events/london#speakers) (Google Cloud) · Wed 16:50, Apidays  
  Apigee AI Gateway lab.
- **[Who Governs the Agents? Rethinking AI Gateways in Agentic Architectures](https://www.apidays.global/events/london#agenda)** — [Matthias Biehl](https://www.apidays.global/events/london#speakers) (IBM) · Thu 09:30, Apidays  
  AI gateway sprawl across API, model, LLM and A2A layers.
- **[Orchestrating Integration Combining AgenticAI and APIs](https://www.apidays.global/events/london#agenda)** — [Radhouane Jrad](https://www.apidays.global/events/london#speakers) (DLA Piper) · Thu 09:55, Apidays  
  Combining agents and APIs; thin abstract.
- **[The State of Proposals for API Security Profiles in OpenAPI](https://www.apidays.global/events/london#agenda)** — [Chris Wood](https://www.apidays.global/events/london#speakers) (Ozone API) · Thu 10:45, OpenAPI  
  Security profiles (FAPI, GNAP, OpenID Discovery) in OpenAPI.
- **[From API Traffic to Agent Execution: Why AI Agents Need a Different Gateway](https://www.apidays.global/events/london#agenda)** — [Gbadebo Bello](https://www.apidays.global/events/london#speakers) (Postman) · Thu 10:45, Apidays  
  From governing API traffic to governing agent execution.
- **[Beyond the Demo: Running AI Agents in Production to Modernize Enterprise APIs](https://www.apidays.global/events/london#agenda)** — [Vedran Cindrić](https://www.apidays.global/events/london#speakers) (Treblle) · Thu 10:45, Apidays  
  Agents refactoring a legacy API estate in production.
- **[Teach Your AI Agent GraphQL](https://www.apidays.global/events/london#agenda)** — [Dale Seo](https://www.apidays.global/events/london#speakers) (Apollo GraphQL) · Thu 11:30, GraphQL  
  Teaching agents GraphQL. No abstract.
- **[Agent-Ready APIs: The Layer You're Not Building Yet](https://www.apidays.global/events/london#agenda)** — [Sonali Goel](https://www.apidays.global/events/london#speakers) (Tesco Technology) · Thu 11:30, Apidays  
  Agents do not read docs, do not handle ambiguous errors and do not wait on sync responses.
- **[Securing APIs for the Agentic Era](https://www.apidays.global/events/london#agenda)** — [Bharath Kumar](https://www.apidays.global/events/london#speakers) (DigitalApiCraft), [Subbu Athikunte](https://www.apidays.global/events/london#speakers) (Chief AI Engineer) · Thu 11:30, Apidays  
  Discovery, consent rails and agent onboarding in banking, insurance and government.
- **[Composable Architecture for AI Systems: APIs, MCP, Skills, Sub-Agents, and Workflows](https://www.apidays.global/events/london#agenda)** — [Erik Wilde](https://www.apidays.global/events/london#speakers) (Jentic & OpenAPI Initiative) · Thu 11:55, Apidays  
  APIs, MCP, skills, sub-agents and workflows: which mechanism belongs where.
- **[Houston, We Have a Partial Response: GraphQL Error Handling](https://www.apidays.global/events/london#agenda)** — [Željko Kozina](https://www.apidays.global/events/london#speakers) (Chronomill) · Thu 12:20, GraphQL  
  Partial responses and GraphQL error handling. No abstract.
- **[Code, not tool calls: Deterministic, Reviewable AI Access to Enterprise APIs](https://www.apidays.global/events/london#agenda)** — [Jens Neuse](https://www.apidays.global/events/london#speakers) (WunderGraph) · Thu 12:20, Apidays  
  Deterministic, reviewable, auditable code over tool calls.
- **[Agent Control - How to take Agentic AI from Pilot to Production](https://www.apidays.global/events/london#agenda)** — [Wynand Vorster](https://www.apidays.global/events/london#speakers) (AppyThings) · Thu 12:45, Apidays  
  API Products to stop tool sprawl; REST/SOAP -> MCP at MTN.
- **[Discover. Authorize. Observe. Building Agent-Ready Event Streams](https://www.apidays.global/events/london#agenda)** — [Dakshitha Ratnayake](https://www.apidays.global/events/london#speakers) (WSO2) · Thu 16:00, AsyncAPI  
  Agents on event streams: discover channels, authorize, observe spend.

## Contract Quality

The contract is still the foundation, and London has a whole OpenAPI track, an AsyncAPI track and a GraphQL track making that case. Contract Quality is the largest facet of the Kin Score, a quarter of the composite, and it measures the depth of what a provider actually publishes: schemas, examples, descriptions and versions across OpenAPI, AsyncAPI, GraphQL and JSON Schema. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/contract-quality/).

- **[Exposing Stochastic APIs](https://www.apidays.global/events/london#agenda)** — [Sergey Konstantinov](https://www.apidays.global/events/london#speakers) (Bolt Technology (Estonia)) · Wed 14:50, GenerationAI  
  What belongs in the contract and what to version when an LLM sits behind the API. What idempotency means when every call is a roll of the dice.
- **[Syncing the Shuffle: Architecting Real-Time APIs to Drive Complex Game Animations in NYT Crossplay](https://www.apidays.global/events/london#agenda)** — [Shafik Quoraishee](https://www.apidays.global/events/london#speakers) (The New York Times) · Wed 16:00, Apidays  
  Real-time APIs for game animation; mostly internal.
- **[Beyond OpenAPI: API Workflows That AI Agents Can Actually Execute](https://www.apidays.global/events/london#agenda)** — [Frank Kilcommins](https://www.apidays.global/events/london#speakers) (Jentic) · Thu 09:30, OpenAPI  
  Arazzo 1.1: executable workflows across OpenAPI and AsyncAPI.
- **[How APIs become a revenue engine](https://www.apidays.global/events/london#agenda)** — [Olga Kostina](https://www.apidays.global/events/london#speakers) (Adyen) · Thu 09:55, Apidays  
  Optional vs mandatory fields, validation, versioning and backward compatibility as revenue levers.
- **[OpenAPI Extensions Are Not a Mess, They Are a Map](https://www.apidays.global/events/london#agenda)** — [Kin Lane](https://www.apidays.global/events/london#speakers) (API Evangelist) · Thu 09:55, OpenAPI  
  Kin's talk: 1,637 x- extensions across 15,722 OpenAPIs from 7,012 providers.
- **[GraphQL as the Execution Layer for AI Agents](https://www.apidays.global/events/london#agenda)** — [Michael Staib](https://www.apidays.global/events/london#speakers) (ChilliCream) · Thu 10:20, GraphQL  
  GraphQL spec direction (abstract is a GraphQLConf recap).
- **[OpenAPI Upgrades: the what, the why, and the how](https://www.apidays.global/events/london#agenda)** — [Lorna Mitchell](https://www.apidays.global/events/london#speakers) (TM Forum) · Thu 10:20, OpenAPI  
  3.0 -> 3.1+: JSON Schema alignment, webhooks, $ref siblings.
- **[Explaining GraphQL Federation to my non-technical spouse](https://www.apidays.global/events/london#agenda)** — [David Stutt](https://www.apidays.global/events/london#speakers) (WunderGraph) · Thu 10:45, GraphQL  
  GraphQL federation explained. No abstract.
- **[Server Assisted Accessibility: Embedding UI Semantics Into Your GraphQL Schema + CI](https://www.apidays.global/events/london#agenda)** — [Vanessa Johnson](https://www.apidays.global/events/london#speakers) (The New York Times) · Thu 11:55, GraphQL  
  UI semantics in the GraphQL schema, enforced in CI. No abstract.
- **[AI Governance as Engineering: How Data Quality Determines Whether Your AI Can Be Trusted](https://www.apidays.global/events/london#agenda)** — [Kingsley Okonkwo](https://www.apidays.global/events/london#speakers) (Ministry of Defense) · Thu 11:55, Apidays  
  Data quality decides whether AI can be trusted.
- **[AI - Spec-Driven Development: Lessons from £Billions in Payments](https://www.apidays.global/events/london#agenda)** — [Cihan Dogan](https://www.apidays.global/events/london#speakers) (Bally's Intralot) · Thu 12:20, Apidays  
  Spec first, then AI writes the code that moves money.
- **[APIs as the Trust Layer for Global Carbon Markets: From Registries to Tokenised Assets](https://www.apidays.global/events/london#agenda)** — [Oyediran Ojo](https://www.apidays.global/events/london#speakers) (S&P Global) · Thu 12:20, Apidays  
  APIs as the trust layer across carbon registries.
- **[GraphQL with AWS AppSync - Building a Product API at HEMA](https://www.apidays.global/events/london#agenda)** — [Ivan Jančić](https://www.apidays.global/events/london#speakers) (Brighting) · Thu 12:45, GraphQL  
  GraphQL with AppSync at HEMA.
- **[The Storyteller Agent: Beyond Code, Into Context](https://www.apidays.global/events/london#agenda)** — [Eduardo Maldonado Fonseca Silva](https://www.apidays.global/events/london#speakers) · Thu 14:10, AsyncAPI  
  AsyncAPI + ownership + capabilities as context for agents.
- **[Passports for Payloads: Standardising B2B Event Pattern with AsyncAPI](https://www.apidays.global/events/london#agenda)** — [Aravind Viswanathan](https://www.apidays.global/events/london#speakers) (Opencast) · Thu 15:00, AsyncAPI  
  B2B event exchange standardised with AsyncAPI.
- **[From Generated Specs to Published Contracts: Our AsyncAPI Journey](https://www.apidays.global/events/london#agenda)** — [Velmurugan Manickavelu](https://www.apidays.global/events/london#speakers) (Aristocrat) · Thu 16:25, AsyncAPI  
  Generated AsyncAPI specs are not published contracts.

## Contract Governance

These are the talks about keeping contracts consistent as teams and agents multiply: rulesets, shared vocabulary, standards conformance, and governance that runs in the pipeline instead of in a meeting. Contract Governance measures the artifacts that constrain a contract — published rulesets, vocabulary, declared conformance, overlays. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/contract-governance/).

- **[Digital Impacts Schema and Taxonomy Workshop](https://www.apidays.global/events/london#agenda)** — [Oliver Cronk](https://www.apidays.global/events/london#speakers) (Architect Tomorrow / Cronk Advisory) · Wed 09:35, GreenIO  
  An open schema + taxonomy for non-carbon impacts is shared vocabulary; nothing in the rubric reads impact disclosure.
- **[Risk-Proof Your AI: The New API Governance Playbook](https://www.apidays.global/events/london#agenda)** — [Markus Müller](https://www.apidays.global/events/london#speakers) (Boomi) · Wed 12:05, Apidays  
  API governance as the risk control for agents.
- **[Crazy things we've seen in the API world and how to avoid them](https://www.apidays.global/events/london#agenda)** — [Ricky Moorhouse](https://www.apidays.global/events/london#speakers) (IBM), [Simon Kapadia](https://www.apidays.global/events/london#speakers) (IBM) · Wed 14:00, Apidays  
  Anti-patterns: brittle design, inconsistent standards, security shortcuts.
- **[Govern APIs to Accelerate AI ROI](https://www.apidays.global/events/london#agenda)** — [Markus Müller](https://www.apidays.global/events/london#speakers) (Boomi) · Wed 14:25, Apidays  
  Governance under agents; MCP does not secure what is underneath.
- **[Building MCPs in the era of the governance: MCP Ops](https://www.apidays.global/events/london#agenda)** — [Jesus Vallejo Garcia](https://www.apidays.global/events/london#speakers) (cloudappi) · Wed 14:25, GenerationAI  
  MCP Ops: lifecycle, governance and security patterns for MCP servers.
- **[A Better Way to Connect AI to Enterprise Data](https://www.apidays.global/events/london#agenda)** — [Samuel Gaus](https://www.apidays.global/events/london#speakers) (WunderGraph), [David Stutt](https://www.apidays.global/events/london#speakers) (WunderGraph) · Wed 14:50, Apidays  
  Agent-speed API sprawl; producer and consumer lifecycles that only meet in production.
- **[Modernize Your Middleware for the Agentic Era](https://www.apidays.global/events/london#agenda)** — [Akshata Sawant](https://www.apidays.global/events/london#speakers) (Salesforce) · Wed 16:25, Apidays  
  Middleware modernisation for agents.
- **[Making sense of application infrastructure in AI times](https://www.apidays.global/events/london#agenda)** — [Paolo Malinverno](https://www.apidays.global/events/london#speakers) (Sensedia) · Wed 16:50, Apidays  
  API, event, MCP, LLM and context management stacked up; 'just enough governance' as an illusion.
- **[Build once, reuse everywhere: scaling GenAI use cases across the enterprise](https://www.apidays.global/events/london#agenda)** — [Kateryna Korotieieva](https://www.apidays.global/events/london#speakers) (GlobalLogic, Hitachi group) · Wed 17:15, Apidays  
  Reuse across GenAI use cases instead of rebuilding each one.
- **[From Principles to Standards: A Journey Toward Energy-Aware Streaming](https://www.apidays.global/events/london#agenda)** — [Marisol Palmero](https://www.apidays.global/events/london#speakers) (IEEE Europe Office) · Thu 10:45, GreenIO  
  How an energy measurement need becomes a standard.
- **[API Standards for AI Agents](https://www.apidays.global/events/london#agenda)** — [Lorna Mitchell](https://www.apidays.global/events/london#speakers) (TM Forum) · Thu 11:30, Apidays  
  Layered standards: vocabulary, expected behaviour including errors, proven patterns.
- **[DevOps-Driven API Governance in Practice: Open Source and Agent-Ready in Hours](https://www.apidays.global/events/london#agenda)** — [Andrzej Jarzyna](https://www.apidays.global/events/london#speakers) (Independent Expert and author of "RESTful APIs Design Patterns and Best Practices"), [Krzysztof Madeński](https://www.apidays.global/events/london#speakers) (PZU) · Thu 12:45, Apidays  
  Spectral in CI, breaking-change detection, catalogue upkeep.
- **[From APIs to Agent(s): The New Control Plane for Digital Enterprises](https://www.apidays.global/events/london#agenda)** — [Sivaraj Lenin](https://www.apidays.global/events/london#speakers) (IBM), [Raghuram Tadipatri](https://www.apidays.global/events/london#speakers) (IBM) · Thu 14:10, Apidays  
  API management + integration + AI as one control plane.

## Access Clarity

What does it cost, what am I allowed to do, and how do I get in? These talks cover token spend, sovereignty, entitlements, and a surprising amount of finops from the GreenIO track. Access Clarity measures plans, pricing, sign-up, terms, privacy, a finops mapping, and trust and compliance. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/access-clarity/).

- **[Scaling Sustainable IT & AI: Trust, Efficiency & ROI , via a Native Module ServiceNow](https://www.apidays.global/events/london#agenda)** — [Matthieu Poulard](https://www.apidays.global/events/london#speakers) (Aguaro), [Brian Minehane](https://www.apidays.global/events/london#speakers) (AGUARO) · Wed 10:00, GreenIO  
  Cost + carbon steering; only the finops piece of Access Clarity touches it.
- **[Boomi Panel: State of the API Economy 2026](https://www.apidays.global/events/london#agenda)** — [Mark Boyd](https://www.apidays.global/events/london#speakers) (Platformable), [Markus Müller](https://www.apidays.global/events/london#speakers) (Boomi) · Wed 10:50, Apidays  
  State of the API economy: the market-level read the catalog-wide score produces.
- **[What does AI emissions data look like in 2026?](https://www.apidays.global/events/london#agenda)** — [Julia Lozano](https://www.apidays.global/events/london#speakers) (Greenpixie), [Ross Hunter](https://www.apidays.global/events/london#speakers) (Greenpixie) · Wed 11:00, GreenIO  
  Token usage -> energy/carbon/water. Providers expose different usage data: a disclosure gap.
- **[Measured is not managed: what an IT estate looks like once the levers suggest themselves](https://www.apidays.global/events/london#agenda)** — [James Hobbs](https://www.apidays.global/events/london#speakers) (Sopht) · Wed 11:50, GreenIO  
  FinOps + carbon levers across an estate.
- **[Free Greenpixie Data Now Available](https://www.apidays.global/events/london#agenda)** — [Ben Price](https://www.apidays.global/events/london#speakers) (Greenpixie), [Stephen Old](https://www.apidays.global/events/london#speakers) (Synyega) · Wed 12:15, GreenIO  
  Open carbon data for AWS/Azure/GCP compute.
- **[The question of spending AI tokens is becoming a hot topic, what is the future of tokenmaxxing and how to optimize token spend.](https://www.apidays.global/events/london#agenda)** — [Artem Matinian](https://www.apidays.global/events/london#speakers) (Strukt.ai) · Wed 15:15, GenerationAI  
  Token spend: pricing and finops.
- **[The SaaS Hangover: From SaaS Dependency to Digital Sovereignty](https://www.apidays.global/events/london#agenda)** — [Andrew Murray](https://www.apidays.global/events/london#speakers) (Tyk) · Wed 16:00, Apidays  
  SaaS dependency, jurisdiction and digital sovereignty.
- **[What is a Customer Context API?](https://www.apidays.global/events/london#agenda)** — [Gareth Faull](https://www.apidays.global/events/london#speakers) (London Stock Exchange Group) · Wed 16:50, Apidays  
  Entitlements, scopes, rate limits, contracts, incidents and deprecations as an API: the Kin Score facets made customer-specific.
- **[GreenOps Customer Showcase Panel](https://www.apidays.global/events/london#agenda)** — [Kevin Leslie](https://www.apidays.global/events/london#speakers) (Greenpixie), [Mark Buss](https://www.apidays.global/events/london#speakers) (OVO Energy), [Andri Johnston](https://www.apidays.global/events/london#speakers) (Cambridge University Press & Assessment), [Tom Parry](https://www.apidays.global/events/london#speakers) (Department for Environment, Food and Rural Affairs) · Thu 11:30, GreenIO  
  FinOps, tokenomics and sustainability customer cases.
- **[Developing the world's first sustainability certification for cloud resources](https://www.apidays.global/events/london#agenda)** — [Barton Finn](https://www.apidays.global/events/london#speakers) (TCO Development), [Emily Watson-Breeze](https://www.apidays.global/events/london#speakers) (TCO Development) · Thu 12:40, GreenIO  
  TCO Certified Cloud: a sustainability certification is a trust artifact.
- **[Green Agentic AI: Optimizing Cost, Energy and Carbon](https://www.apidays.global/events/london#agenda)** — [Navveen Balani](https://www.apidays.global/events/london#speakers) (Green Software Foundation) · Thu 14:10, GreenIO  
  Cost, energy, carbon and water per agent task; retries and context as levers.
- **[Architecting Sovereign AI Agents: Bridging Regional LLMs and Enterprise APIs on Hybrid Cloud](https://www.apidays.global/events/london#agenda)** — [Daniel Oh](https://www.apidays.global/events/london#speakers) (IBM) · Thu 14:10, Apidays  
  Sovereign agents, regional LLMs, hybrid cloud.

## Accountability

Who answers for what an agent does? These talks are about ownership, judgement and responsibility once software starts acting on people's behalf. Accountability is a standalone layer of the Kin Score that is not scored yet: whether an organisation publishes an AI policy that resolves, is versioned, names an owner and an accountable officer, and requires an impact assessment.

- **[AI, ally or enemy of the planet?](https://www.apidays.global/events/london#agenda)** — [Amael Parreaux-Ey](https://www.apidays.global/events/london#speakers) (Resilio) · Wed 11:25, GreenIO  
  Environmental impact of AI as a governance tool; supply-chain transparency.
- **[Fostering AI skills and capabilities in large enterprises](https://www.apidays.global/events/london#agenda)** — [Saheed Abiola Lasisi](https://www.apidays.global/events/london#speakers) (JP Morgan Chase) · Wed 11:40, Apidays  
  No abstract; AI skills inside a large enterprise.
- **[Platform engineering panel: Invest in boundaries for speed and clarity](https://www.apidays.global/events/london#agenda)** — [Jennifer Riggins](https://www.apidays.global/events/london#speakers), [Abby Bangser](https://www.apidays.global/events/london#speakers) (Syntasso), [Molly Clarke](https://www.apidays.global/events/london#speakers) (Hargreaves Lansdown) · Wed 14:50, Apidays  
  Ownership boundaries, incident management and reversible speed.
- **[Agentic Engineering at Scale: Strategy, Problems, and Where It's Going](https://www.apidays.global/events/london#agenda)** — [Rajani Rao](https://www.apidays.global/events/london#speakers) (Principal Technologist at AVEVA) · Wed 16:50, Apidays  
  Agentic engineering against critical-infrastructure legacy code; internal.
- **[When the Agent Decides About a Person](https://www.apidays.global/events/london#agenda)** — [Gulce Guleli](https://www.apidays.global/events/london#speakers) (IG Group) · Thu 10:20, Apidays  
  An agent acting on a score about a named person; high-risk under the AI Act.
- **[People-powered progress: OVO’s collaborative blueprint for responsible AI use](https://www.apidays.global/events/london#agenda)** — [Mark Buss](https://www.apidays.global/events/london#speakers) (OVO Energy) · Thu 10:20, GreenIO  
  Co-created responsible AI use at an energy retailer.
- **[A Valid API Call, An Invalid Outcome - Accountability in the Age of AI Agents](https://www.apidays.global/events/london#agenda)** — [Afsha H](https://www.apidays.global/events/london#speakers) (Capgemini) · Thu 12:45, Apidays  
  A valid API call with an invalid human outcome.
- **[AI exposes 0.1x organisations](https://www.apidays.global/events/london#agenda)** — [Joe Lewis](https://www.apidays.global/events/london#speakers) (Envision Pharma Group) · Thu 14:10, Apidays  
  Organisational change around engineers.
- **[Leading Sustainable AI from Strategy to Scale](https://www.apidays.global/events/london#agenda)** — [Malini Jeyachandran](https://www.apidays.global/events/london#speakers) (Lloyds Bank) · Thu 14:35, GreenIO  
  Sustainable agentic AI in UK banking.
- **[Reporting won’t save you: why GreenOps needs leadership accountability](https://www.apidays.global/events/london#agenda)** — [Mark Butcher](https://www.apidays.global/events/london#speakers) (Posetiv) · Thu 15:00, GreenIO  
  GreenOps as a leadership ownership problem, not a reporting problem.
- **[Risk is Governed. Data Resilience is Architected.](https://www.apidays.global/events/london#agenda)** — [Siham Boutayeb](https://www.apidays.global/events/london#speakers) (Odaseva) · Thu 15:00, Apidays  
  Board-level risk vs recovery-tested systems.

## Developer Ergonomics

Getting started is still where most integrations are won or lost, and the audience now includes agents. Developer Ergonomics measures SDKs, CLI, a portal, getting-started guides, a sandbox or console, an MCP server, and clear auth documentation. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/developer-ergonomics/).

- **[Trends Keynote: API Design Transforms DevOps Automation into Platform Products](https://www.apidays.global/events/london#agenda)** — [Abby Bangser](https://www.apidays.global/events/london#speakers) (Syntasso) · Wed 09:40, Apidays  
  Platform APIs as products: consumers, contracts, composition, change.
- **[The Anatomy of an Agentic AI Sandbox](https://www.apidays.global/events/london#agenda)** — [Ludovic Pourrat](https://www.apidays.global/events/london#speakers) (Lombard Odier Group) · Wed 11:15, GenerationAI  
  Mocks, portal, MCP gateway + registry, synthetic data, workflow definitions.
- **[Let’s Launch a Rocket: AI-Powered API & MCP Bootcamp](https://www.apidays.global/events/london#agenda)** — [Anthony Virard](https://www.apidays.global/events/london#speakers) (Postman) · Wed 11:15, Apidays  
  Spec -> collection -> code -> MCP with Postman Agent Mode.
- **[100 AI Conversations in 20 Minutes: with SmartBear and Platformable](https://www.apidays.global/events/london#agenda)** — [Joe Joyce](https://www.apidays.global/events/london#speakers) (SmartBear), [Mark Boyd](https://www.apidays.global/events/london#speakers) (Platformable) · Wed 14:00, Apidays  
  Patterns from hundreds of delivery-team conversations about AI.
- **[Your Next Developer Might Be a Robot: DevRel in the AI Era](https://www.apidays.global/events/london#agenda)** — [Paul Ardeleanu](https://www.apidays.global/events/london#speakers) (Vonage) · Wed 17:15, Apidays  
  DevRel when the reader is an agent parsing docs and samples at 3AM.
- **[If the developer portal is dead, what comes next?](https://www.apidays.global/events/london#agenda)** — [Kristof Van Tomme](https://www.apidays.global/events/london#speakers) (PRONOVIX Developer Portals) · Thu 14:35, Apidays  
  The developer portal's identity crisis.
- **[If an API falls over in the forest, does it make a sound?](https://www.apidays.global/events/london#agenda)** — [Yousaf Nabi](https://www.apidays.global/events/london#speakers) (SmartBear) · Thu 15:00, Apidays  
  Who a change impacts and missing or wrong docs: contract testing territory.

## Operational Transparency

How does the API behave in production, and does the provider tell you? These talks cover attacks at machine speed, observability, and thirty years of traffic management. Operational Transparency measures published rate limits, a status page, a change log, a deprecation policy and a security disclosure path. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/operational-transparency/).

- **[Case Study Keynote: The Gateway Stack: Engineering LLMs and Agent Infra at Deliveroo and DoorDash](https://www.apidays.global/events/london#agenda)** — [Saikrishna Desaraju](https://www.apidays.global/events/london#speakers) (Deliveroo (DoorDash)), [Jacob Lever](https://www.apidays.global/events/london#speakers) (Deliveroo), [Ruwan Geeganage](https://www.apidays.global/events/london#speakers) (Deliveroo) · Wed 10:05, GenerationAI  
  Internal agent platform; reliability and cost. Weak public-surface signal.
- **[Even an Intern with ChatGPT Can Do It: The New Reality of API Attacks](https://www.apidays.global/events/london#agenda)** — [Paul Fearns](https://www.apidays.global/events/london#speakers) (Akamai) · Wed 10:50, Apidays  
  AI-accelerated attacks; the published security + disclosure posture.
- **[The story of API traffic management: from WAF to MCP](https://www.apidays.global/events/london#agenda)** — [Irina Kamalova](https://www.apidays.global/events/london#speakers) (JPMorgan Chase) · Wed 11:15, Apidays  
  30 years of traffic management, WAF to MCP.
- **[Building generative media systems that actually work at scale](https://www.apidays.global/events/london#agenda)** — [Wafae Bakkali](https://www.apidays.global/events/london#speakers) (Google) · Wed 14:00, GenerationAI  
  Reliability of generative media systems; weak API-surface signal.
- **[Federated API Intelligence in Action: A Hands-On Demo with Treblle](https://www.apidays.global/events/london#agenda)** — [Vedran Cindrić](https://www.apidays.global/events/london#speakers) (Treblle) · Wed 16:00, Apidays  
  API observability and inventory.
- **[APIs Under Agentic Attack: Closing the Speed Gap](https://www.apidays.global/events/london#agenda)** — [Paul Fearns](https://www.apidays.global/events/london#speakers) (Akamai) · Thu 14:35, Apidays  
  Agents that map and chain APIs at attack speed.

## Regulatory Posture

London is a banking town and it shows. Regulatory Posture only applies to regulated industries, and it measures consent-scoped authorization, a published security posture, terms and privacy as a legal basis, and conformance to the industry's data standard — ISO 20022, CAMARA, FAPI and the rest. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/regulatory/).

- **[From Open Banking to Autonomous Treasury: How APIs, ISO 20022 and Agentic AI are Creating Self-Driving Cash Management.](https://www.apidays.global/events/london#agenda)** — [Dominic Inkoom](https://www.apidays.global/events/london#speakers) (Standard Chartered Bank, UK) · Wed 10:05, Apidays  
  ISO 20022 data conformance + agents initiating payments.
- **[The Mesh of API and AI Ecosystems](https://www.apidays.global/events/london#agenda)** — [Nisu Thomas](https://www.apidays.global/events/london#speakers) (Lloyds Banking Group), [Samyu Ayyar](https://www.apidays.global/events/london#speakers) (Lloyds Banking Group), [Meghdeep Basu](https://www.apidays.global/events/london#speakers) (Lloyds Banking Group) · Wed 12:05, Apidays  
  API/AI mesh in banking; thin abstract.
- **[Challenges and Opportunities in API Utilisation and Governance Across Global Governments: A Study of Best Practices and Success Stories](https://www.apidays.global/events/london#agenda)** — [Dr Ravinder Singh](https://www.apidays.global/events/london#speakers) (Cabinet Office-GCF) · Wed 17:15, Apidays  
  API governance across governments. No abstract.
- **[The Missing Architect: Telco APIs are stuck between everyone’s lane. Who should bridge the gap?](https://www.apidays.global/events/london#agenda)** — [Nauman Saeed Anwar](https://www.apidays.global/events/london#speakers) (GSMA) · Thu 10:20, Apidays  
  CAMARA network APIs are live yet adoption lags. The gap is across remits, not technology.
- **[Sovereign AI - Governing Enterprise AI Without Losing Control](https://www.apidays.global/events/london#agenda)** — [Anuj Kumar](https://www.apidays.global/events/london#speakers) (Axway) · Thu 14:35, Apidays  
  Sovereign AI governance and regulatory requirements.

## Open Source Surface

Open Source Surface only applies where the product itself is open source. It measures the maintainership surface you need before you depend on it: a vulnerability disclosure path, a contribution route, a release history, a code of conduct. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/open-source/).

- **[You already have what you need: Open Source GreenOps in Practice](https://www.apidays.global/events/london#agenda)** — [Julien Nioche](https://www.apidays.global/events/london#speakers) (DigitalPebble Ltd), [Diana Todea](https://www.apidays.global/events/london#speakers) (VictoriaMetrics) · Thu 12:15, GreenIO  
  SPRUCE: open-source GreenOps on Spark.
- **[Designing Governance for Sustainable Open Standards](https://www.apidays.global/events/london#agenda)** — [Thulisile Sibanda](https://www.apidays.global/events/london#speakers) (AsyncAPI Initiative) · Thu 14:35, AsyncAPI  
  Five pillars of governance for open standards: transparency, shared ownership, succession, participation, accountability.

## Discoverability

Discoverability measures whether an API can be found and understood from machine-readable metadata alone — apis.json, tags, identity signals. Plenty of talks touch it; one is about it. [How the Kin Score measures it on APIs.io](https://apis.io/rating/facets/discoverability/).

- **[From APIs to MCP: Enterprise Governance, Registry, and Controls](https://www.apidays.global/events/london#agenda)** — [Stefan Mesquita](https://www.apidays.global/events/london#speakers) (Deutsche Bank) · Thu 09:30, Apidays  
  One registry for APIs and MCP servers at a bank.

## Outside the rubric

The GreenIO track keeps making a point I cannot measure yet: providers do not disclose the energy, carbon or water cost of what they serve. There is no Kin Score facet for that today. These talks are where I would start if I built one.

- **[Opening remarks](https://www.apidays.global/events/london#agenda)** — [Gael Duez](https://www.apidays.global/events/london#speakers) (Green IO) · Thu 09:30, GreenIO  
  GreenIO opening: Follow the energy.
- **[Can offshore wind power the AI boom?](https://www.apidays.global/events/london#agenda)** — [Susan Gourvenec](https://www.apidays.global/events/london#speakers) (University of Southampton) · Thu 09:45, GreenIO  
  Offshore wind and AI demand.
- **[Considering Your Personal Energy Flow; AI Sustainability Actions you can Take](https://www.apidays.global/events/london#agenda)** — [Emma Albury](https://www.apidays.global/events/london#speakers) (Government Digital Service) · Thu 16:00, GreenIO  
  Personal and technological energy; GDS case studies.
- **[Fractional Influence - everyday 'greening' as a contractor in tech](https://www.apidays.global/events/london#agenda)** — [Fiona MacNeill](https://www.apidays.global/events/london#speakers) (Macknowlogist) · Thu 16:25, GreenIO  
  Everyday greening as a contractor.

This is a mapping from titles and abstracts, not a score of anyone on stage — a reading of what each talk is about, against the facets of the [Kin Score rubric](https://apis.io/rating/). If I put your talk in the wrong place, tell me and I will move it. See you in London.
