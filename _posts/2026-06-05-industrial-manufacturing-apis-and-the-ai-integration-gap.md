---
published: true
layout: post
title: "Industrial Manufacturing APIs and the AI Integration Gap"
date: 2026-06-05
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-gatew-into-field.jpg
category: "Blog"
tags:
 - Manufacturing
 - Industrial
 - IIoT
 - SCADA
 - MES
 - Digital Twin
 - AI Agents
 - OT/IT Convergence
 - APIs
 - Industrial Automation
excerpt: "I cataloged 421 industrial manufacturing API providers in my network and ran a pipeline across 56 of the most API-specific ones. Only 5 had a publicly discoverable OpenAPI spec. That gap — between the richness of the industrial data stack and the poverty of its API surface — is exactly where the next wave of AI integration is going to either succeed or stall."
---

I spent the last week cataloging the industrial manufacturing API landscape — not the casual surface glance, but a proper inventory of what is out there, what APIs providers expose, what vocabulary they use to describe themselves, and what machine-readable artifacts are available for integration. I pulled **421 providers** across the manufacturing, industrial automation, IIoT, robotics, SCADA, MES, CMMS, PLM, and supply chain segments. Then I ran an enrichment pipeline across 56 of the most specifically API-facing providers to find out how many had publicly discoverable OpenAPI specifications.

The answer: **five**. Cognite, Limble CMMS, Inductive Automation's Ignition, Factory I/O, and Formant. Five out of 56 providers that I explicitly selected because they sounded like they had APIs.

That number tells a story worth unpacking, because AI agents need industrial data, the industrial data lives behind systems that do not speak REST, and the gap between those two facts is where the next wave of manufacturing AI integration is either going to break through or break down.

## What the vocabulary tells you

Before I get into the AI angle, let me walk through what the tag vocabulary across those 421 providers looks like. The top tags paint a picture of where the industry thinks its API surface lives:

| Tag | Count |
|---|---|
| Manufacturing | 143 |
| Industrial | 58 |
| Supply Chain | 44 |
| IoT | 36 |
| Aerospace | 36 |
| Automotive | 34 |
| Construction | 40 |
| Industrial Automation | 12 |
| Industrial IoT | 16 |
| SCADA | clustered under Industrial |
| CMMS | handful |
| MES | handful |

The big buckets — Manufacturing, Industrial, Supply Chain — are describing what the company *does*, not what their API surface *is*. Dig into the more specific operational tags — SCADA, MES, CMMS, PLM, PLC, OPC UA — and the count drops fast. Most companies in this space are not primarily API providers. They are equipment makers, systems integrators, specialty chemical producers, and industrial conglomerates that happen to have some integration capability somewhere in their stack. That distinction matters enormously once you start asking what an AI agent can actually connect to.

## The three layers of the industrial API stack

After cataloging all of this, I think the industrial manufacturing API landscape has three reasonably distinct layers, and each has a different relationship with AI integration.

**Layer one is the industrial data platform** — Cognite Data Fusion, AVEVA PI (formerly OSIsoft), Siemens MindSphere, Rockwell FactoryTalk DataMosaix. These are the systems that already aggregate time-series sensor data, asset hierarchies, events, and process historian records from the OT layer and make them available over REST. Cognite is the best example: a comprehensive API covering assets, time series, 3D models, entity matching, SQL transformations, serverless functions, and workflow orchestration. It has a proper OpenAPI spec, Python and JavaScript SDKs, and the architecture of a company that treats its API as a product. AVEVA PI similarly exposes a Web API with GET/POST/PUT/PATCH/DELETE operations against historian data. These are the providers where an AI agent can actually do something useful today — they have already solved the hard problem of getting OT data into a form that REST can address.

**Layer two is the manufacturing operations platform** — Tulip Interfaces, Rockwell Plex ERP, Epicor Kinetic, Inductive Automation's Ignition. These sit on or just above the shop floor and manage the operational data that flows through a production run: apps, tables, stations, work orders, quality records, jobs. Tulip has a genuinely clean REST API organized into namespaces — apps, table records, connectors, stations, automations — each independently versioned. Ignition 8.3 now exposes an OpenAPI-compliant gateway API for tag reads, project configuration, and module access, which is a significant signal: SCADA is starting to grow an HTTP surface. Epicor Kinetic exposes everything through OData v4, which is not REST in the way most developers think of it, but it is machine-addressable and has an interactive spec explorer. This layer is where the AI integration story gets genuinely interesting, because it is where the human decisions and production instructions actually live.

**Layer three is the maintenance and asset management layer** — CMMS systems like Limble, Fiix (now Rockwell's), and UpKeep; EAM platforms; condition monitoring vendors like Augury. Limble has one of the cleanest manufacturing APIs I encountered in this exercise: a proper REST API with regional endpoints, Basic auth, and resources covering assets, locations, work orders, preventive maintenance tasks, parts, purchase orders, vendors, and webhooks. It even has a 21 CFR Part 11 compliant endpoint for pharmaceutical manufacturing. UpKeep is similarly solid. This layer is interesting for AI because it holds the maintenance history, failure modes, part lifecycles, and work order patterns that predictive maintenance models need to learn from.

## The OT floor is still not on the internet

Below all three of these layers sits the actual operational technology — PLCs, DCS systems, SCADA historians, CNC controllers, field instruments, vision systems. This is where the physical manufacturing happens, and almost none of it speaks REST natively. The protocols are OPC UA, Modbus, PROFINET, MTConnect, EtherNet/IP — industrial protocols designed for deterministic real-time control over hardened networks, not for cloud-native HTTP integrations.

The pipeline run I did confirmed this in stark terms. ABB Robotics: no public API spec, developer documentation is proprietary and gated. FANUC Robotics: no public API, MTConnect adapter available but not REST. KUKA: no public API surface. Honeywell: portal exists, no published spec. Bosch: IoT Suite exists, all probe paths returned 401 or redirects. Boston Dynamics: gated SDK, no REST spec. Yaskawa: application programming interfaces exist for servo controllers, no REST spec.

These are not small companies. These are the companies that build the machines that make almost everything you touch. And the gap between "has some form of API" and "has a publicly discoverable, machine-readable API spec" is enormous in this space.

## Why this matters for AI agents right now

The current wave of agentic AI is fundamentally a data access problem. An agent is only as useful as the data it can read and the actions it can take. In most enterprise verticals — SaaS, fintech, logistics, healthcare IT — that problem is largely solved because the cloud-native players built REST APIs as their primary interface. An AI agent can hit Stripe, Plaid, Salesforce, Workday, or any of ten thousand other providers and get back structured JSON that it can reason over.

Manufacturing is different. The most important data in a manufacturing operation — real-time sensor readings, production counters, OEE metrics, alarm histories, quality inspection results, tool wear measurements — lives in systems that predate REST by decades and were designed to be isolated from enterprise networks on purpose. The industrial security model treats network isolation as a feature. The AI integration model needs the opposite.

The forward-looking industrial players are bridging this with industrial data platforms as the translation layer. Cognite's entire value proposition is exactly this: take OT data from historians, SCADA systems, and sensors via industrial connectors, contextualize it into a data model that exposes assets, time series, and relationships, then make all of it available over a well-documented REST API. When Cognite and Tulip [announced their integration partnership](https://www.cognite.com/en/company/newsroom/tulip-and-cognite-to-drive-ai-powered-manufacturing-to-increase-production-capacity-by-up-to-45), the stated goal was a 45% increase in production capacity driven by AI — made possible because Cognite's data fabric connects the OT sensor layer to Tulip's operator-facing applications, and both expose REST APIs that an AI agent can work with. That partnership is a preview of how the integration stack for industrial AI actually needs to be assembled.

## The SCADA OpenAPI signal

One of the more interesting findings from this exercise was Inductive Automation's decision to add an OpenAPI-compliant REST API to Ignition 8.3. Ignition is the dominant SCADA platform for mid-market and enterprise manufacturing — tens of thousands of deployments across water treatment, food production, oil and gas, discrete manufacturing. It has always been deeply extensible through Python scripting, OPC UA, MQTT, and a module ecosystem. Adding an OpenAPI gateway that documents tags, projects, device connections, and module routes as REST resources is a meaningful shift.

It is not cloud-native REST in the Stripe sense. The base URL is `https://{gateway-host}:8088/api` — this is a local or on-premise gateway, not a SaaS endpoint. But the fact that the spec is generated dynamically from installed modules, is OpenAPI 3.0 compliant, and logs all mutative operations to audit trails means it is now a surface that integration tools and AI agents can discover and address programmatically. That matters. The question of how an AI agent talks to a SCADA system is a question that has not had a clean answer until now.

## What is still missing

The honest assessment is that the industrial manufacturing API space has most of the pieces and almost none of the connective tissue.

The industrial data platforms exist and have good APIs. The operations platforms are growing REST surfaces. The CMMS layer has mature APIs. The OT equipment layer has industrial protocols and some modern adapters. What is almost entirely absent is:

**Standardized schemas.** OPC UA has an information model, MTConnect has a schema, but neither maps cleanly to what a REST API returns. There is no manufacturing equivalent of the FHIR standard in healthcare — a common data model for production orders, quality records, equipment states, and maintenance events that every vendor agrees to. Every provider defines their own object model, which means every integration has to be built from scratch.

**Publicly discoverable specs.** Of the 56 most API-forward industrial providers I examined, only five had a spec I could find through normal discovery paths. That is not necessarily because the APIs do not exist — some do — but because the culture in industrial software treats API documentation as a competitive asset to be gated behind enterprise sales conversations rather than published on a developer portal. Cognite and Limble are outliers in treating their specs as open, discoverable artifacts.

**Agentic tooling designed for OT constraints.** The AI agent frameworks being built today — LangChain, the Anthropic tool-use ecosystem, Microsoft's Semantic Kernel — assume REST APIs with JSON responses and short latency. Industrial systems have real-time constraints, safety interlocks, and data rates that do not fit those assumptions. An AI agent that misreads a latency spike as a sensor failure and triggers a SCADA alarm is worse than no agent at all. The interface standards for AI agents interacting with OT systems safely have not been written yet.

## The decade ahead

The MES market is at $15.2 billion today and projected to reach $28.5 billion by 2030. OT/IT convergence is accelerating — BCG estimates adoption of converged IT/OT infrastructure for new manufacturing projects will go from roughly 10% to 50% within five years. The manufacturing sector is moving from static dashboards to what the industry is calling agentic AI: systems that can perceive plant conditions, reason over historical data, and take action through the control layer.

All of that requires APIs. The industrial data platforms are ready. The operations layer is getting ready. The OT floor is being connected, layer by layer, through industrial IoT gateways, MQTT brokers, OPC UA aggregators, and — increasingly — REST wrappers.

What I cataloged in the API Evangelist network this week is a snapshot of where this transition stands in mid-2026. 421 providers touching the manufacturing space, most of them describing themselves in terms of what they make rather than what their integration surface looks like. Five publicly discoverable OpenAPI specs out of the 56 most API-facing providers I examined. A handful of companies — Cognite, Tulip, Limble, Inductive Automation — who have figured out that treating the API as a product is how you become the integration layer for the next generation of manufacturing intelligence.

The gap between those five and the other fifty-one is where the real work of industrial AI integration will happen over the next decade. The factory floor has an enormous amount of data. Getting it into a form that an AI agent can reason over is the hard problem, and the API surface is where it gets solved or does not.

*All provider data is from the API Evangelist network catalog, enriched as of June 2026. Pipeline results reflect publicly discoverable OpenAPI specifications only — many providers have gated or proprietary API documentation not captured here.*
