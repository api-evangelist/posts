---
published: true
layout: post
title: 'SAP Published An A2A Agent. Here Is How Oracle And Salesforce Compare.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/sap-published-an-a2a-agent-here-is-how-oracle-and-salesforce-compare.png
date: 2026-11-11 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - SAP
  - Oracle
  - Salesforce
---
I am working through the companies that publish an A2A agent card and looking at them next to their competitors. I laid out the bigger picture in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and you can browse the whole set in the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 that page counts 1,279 providers serving a card, with 934 of them conformant.

Today it is SAP, and how it compares with Oracle and Salesforce.

## What SAP Publishes

SAP serves an agent card at `https://developers.sap.com/.well-known/agent-card.json`. That is the canonical well-known path, on the developer site. The card describes the "SAP Tutorials Learning Agent." It points to its own endpoint, `https://tutorial-system-prod-tutorials-srv.cfapps.eu10-005.hana.ondemand.com/a2a`, which runs on SAP's own cloud. It declares protocol version 0.3.0 and JSON-RPC as the preferred transport. APIs.io grades it conformant with no deviations.

When I checked on November 10, 2026, the live card matched what APIs.io has on file. It lists five skills:

- **Ask about SAP tutorials.** Conversational Q&A over developer tutorials, missions, and learning paths.
- **Search tutorials.** Semantic and keyword search over the tutorial catalog.
- **Get my learning progress.** A signed-in developer's progress. The card says the caller has to forward the end user's identity token, and it returns empty results otherwise.
- **Explore the learning graph.** Concept expansion and learning path reasoning over a tutorial knowledge graph.
- **Fetch relevant tutorial steps.** Returns the step content most relevant to a question so a central agent can quote exact instructions.

## Why This Card Is Worth Looking At

A lot of the cards in the catalog come from documentation platforms. They usually have one generic skill that says something like "use when building integrations with" the product, and the endpoint is the docs site itself. That is a fine discovery step. It is not an agent you can hand work to.

SAP's card is different. It has its own endpoint, separate from the docs host. Each skill does one thing and says what it does. The progress skill even tells you about identity, which is the kind of detail an orchestrating agent needs before it calls anything. The last skill is written with another agent in mind, returning exact steps "so a central agent can quote" them. That is someone thinking about agent to agent use, not just a listing.

The scope is narrow. This is a learning agent for SAP developer tutorials. It is not an agent for SAP's business systems. I think that is a smart place to start. It is public content, low risk, and useful to anyone building on SAP.

## Oracle

I probed `oracle.com`, `www.oracle.com`, `docs.oracle.com` and `developer.oracle.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. I found no agent card. On `developer.oracle.com` both paths return a 200, but the response is an HTML page, not JSON, so I do not count that as a card. APIs.io does have an [Oracle provider page](https://apis.io/providers/oracle/), but there is no Oracle card in the A2A catalog.

## Salesforce

I probed `salesforce.com`, `www.salesforce.com`, `developer.salesforce.com` and `api.salesforce.com` at both well-known paths and found no agent card. That does not tell you anything about what Salesforce does with agents inside its own products. It only tells you that a crawler looking at those hosts would not discover one. Salesforce does publish an `llms.txt` file at [developer.salesforce.com/docs/llms.txt](https://developer.salesforce.com/docs/llms.txt), so there is an agent-facing entry point into its documentation. The [Salesforce provider page](https://apis.io/providers/salesforce/) on APIs.io has the rest of what we know.

## Side By Side

| | SAP | Oracle | Salesforce |
|---|---|---|---|
| Agent card found | Yes, developers.sap.com | No (4 hosts checked) | No (4 hosts checked) |
| Endpoint | Own A2A endpoint on SAP cloud | n/a | n/a |
| Skills | 5 | n/a | n/a |
| Protocol version | 0.3.0 | n/a | n/a |
| Grade | Conformant | n/a | n/a |
| Other agent surface I verified | n/a | none checked | llms.txt on developer docs |

## What I Would Watch

SAP is on protocol 0.3.0. The A2A specification has moved to 1.0, so I would expect a version bump at some point. I would also want to know whether the tutorial agent is a pattern SAP plans to repeat for other parts of its developer experience. The card itself is clean. The interesting question is what comes next.

## The Takeaway For Oracle, Salesforce, And Enterprise Software

You do not need to expose your core business platform as an agent to get started. SAP picked public learning content, built a real endpoint, and described five specific skills. That is a pattern any enterprise software company could copy in a few weeks. Put a card at `/.well-known/agent-card.json` on your developer host. Point it at an endpoint that actually does something. Write skills that tell another agent what it will get back and what it needs to send. If your developer portal already has search, tutorials, and an `llms.txt`, you are most of the way there.
