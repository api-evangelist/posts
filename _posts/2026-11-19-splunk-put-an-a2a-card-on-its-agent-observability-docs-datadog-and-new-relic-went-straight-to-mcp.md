---
published: true
layout: post
title: 'Splunk Put An A2A Card On Its Agent Observability Docs. Datadog And New Relic Went Straight To MCP.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/splunk-put-an-a2a-card-on-its-agent-observability-docs-datadog-and-new-relic-went-straight-to-mcp.png
date: 2026-11-19 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Splunk
  - Datadog
  - New Relic
---
This is another stop in my daily look at who publishes A2A agent cards, and how their competitors approach the same problem. The background is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the data lives in the [APIs.io A2A catalog](https://apis.io/a2a/), where 1,279 providers serve a card and 934 are conformant as of November 10, 2026. Today is observability: Splunk, Datadog and New Relic.

## What Splunk Publishes

Splunk serves a card at [agent-observability-docs.splunk.com/.well-known/agent-card.json](https://agent-observability-docs.splunk.com/.well-known/agent-card.json). It is named "Splunk Agent Observability" and describes the documentation for Splunk's observability, evaluation and guardrail product for GenAI and agentic applications. The endpoint is the docs site, `https://agent-observability-docs.splunk.com/`. Protocol version 0.3. One skill.

That one skill has an id of `agent`. When APIs.io fetched it on November 4, the description read "Use when instrumenting AI/LLM applications for observability," and stopped there. When I checked on November 10, 2026, it read "Use when building, monitoring, and evaluating AI agents and LLM" and stopped there. So the card is being regenerated, and both versions end mid-sentence. That looks like a length limit somewhere in whatever produces the card.

Like most docs-platform cards, it uses `supportedInterfaces` where the 0.3 shape expects `additionalInterfaces`. APIs.io grades it conformant. My stricter probe calls it near-conformant for that one deviation.

I also checked splunk.com, dev.splunk.com and docs.splunk.com at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. splunk.com returned 404. docs.splunk.com returned 403. dev.splunk.com returned an HTML page with a 200, not JSON. So the only card I found is on the agent observability docs host. Here is the [Splunk provider page](https://apis.io/providers/splunk/).

I like that the card sits on the docs for the product that is literally about agents. It is a sensible place to start. But it is a discovery pointer to documentation. It is not an agent interface, and one skill with a clipped description does not tell an agent much.

## What Datadog Publishes

I checked datadoghq.com, www.datadoghq.com and docs.datadoghq.com at both well-known paths. All returned 404. I found no agent card.

Datadog has put its effort into MCP. The docs [llms.txt](https://docs.datadoghq.com/llms.txt) lists a "Datadog MCP Server" entry for connecting AI agents to metrics, logs, traces and other data. The llms.txt itself describes itself as the canonical entry point to the documentation. See the [Datadog provider page](https://apis.io/providers/datadog/).

## What New Relic Publishes

I checked newrelic.com, docs.newrelic.com, developer.newrelic.com and api.newrelic.com at both paths. newrelic.com returned 403. docs.newrelic.com and api.newrelic.com returned 404. developer.newrelic.com returned an HTML page with a 200, which is not a card. No agent card found.

New Relic also has MCP documentation, including [Set up New Relic MCP](https://docs.newrelic.com/docs/agentic-ai/mcp/setup/), and a [docs llms.txt](https://docs.newrelic.com/llms.txt) that offers markdown versions of the documentation. Here is the [New Relic provider page](https://apis.io/providers/new-relic/).

## Side By Side

| | Splunk | Datadog | New Relic |
|---|---|---|---|
| Agent card | Yes, agent-observability-docs.splunk.com | None found | None found |
| Card endpoint | Docs host | n/a | n/a |
| Skills | 1 (`agent`) | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| MCP documented | Not checked in depth | Yes | Yes |
| Docs llms.txt | Not checked | Yes | Yes |

To be clear about that last column, I did not go looking for a Splunk MCP server for this post, so I am not saying anything either way about it.

## How I Read This

Observability is a market where agents will want to do real work. Query logs. Pull traces. Open incidents. Datadog and New Relic both document MCP servers that let an agent do that, and both make their docs LLM-readable. Splunk is the one that has published an A2A card, and it published it in the right neighborhood, the docs for its agent observability product.

The gap is between discovery and capability. Splunk's card tells an agent there is documentation here about agents. It does not tell an agent what it can do. The skill is generic, the description is cut off, and the endpoint is a docs site.

## Takeaway For Observability Providers

If you already run an MCP server, like Datadog and New Relic do, the next step is cheap. Publish an agent card at a well-known path on your main or developer domain, name the MCP server as the interface, and list skills that match the queries agents actually run. If your docs platform generates a card for you, like Splunk's appears to be, read it before you ship it. Make sure the skill descriptions are complete sentences that describe something an agent can do.
