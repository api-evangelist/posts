---
published: true
layout: post
title: 'Perplexity Points Agents At Its Docs. How OpenAI And Anthropic Compare.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/perplexity-points-agents-at-its-docs-how-openai-and-anthropic-compare.png
date: 2026-11-17 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Perplexity
  - OpenAI
  - Anthropic
---
This is the daily series where I take a company that publishes an A2A agent card and compare it with two competitors. The overview is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the data is in the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 that page counted 1,279 providers serving a card, with 934 conformant.

Today is AI. Perplexity, next to OpenAI and Anthropic. You would expect AI companies to lead on agent discovery. What I found is more mixed than that.

## What Perplexity Publishes

Perplexity serves a card at `https://docs.perplexity.ai/.well-known/agent-card.json`, on its documentation host. Here is what is in it:

- **Name.** "Perplexity."
- **Description.** A short tour of the API: Search, Agent, Decisions, Orchestrator (marked private preview), and Embeddings.
- **Endpoint.** `https://docs.perplexity.ai/`, the docs site.
- **Protocol version.** 0.3, with HTTP+JSON as the preferred transport.
- **Skills.** One, with the id `perplexity`.

APIs.io grades it conformant and notes one deviation: interfaces are listed under `supportedInterfaces` instead of `additionalInterfaces`. My probe flagged the same thing.

There is one small difference between the live card and APIs.io. When APIs.io fetched it on November 4, the skill said "Use when building AI applications that need web-grounded answers." When I checked on November 10, 2026, it said "Use when building AI agents that need web-grounded answers." So Perplexity is editing it.

## How I Read This Card

This is a docs platform card. One generic skill, a "use when building" description, and an endpoint that is the docs homepage. It tells an agent what Perplexity's API is for. It does not offer anything to call over A2A.

The description is better than most. It actually summarizes the product line, which helps an agent decide whether Perplexity is relevant. Perplexity also publishes an `llms.txt` at [docs.perplexity.ai/llms.txt](https://docs.perplexity.ai/llms.txt), and `https://docs.perplexity.ai/mcp` answers a plain GET with a 405 and a JSON body, consistent with a docs MCP server expecting a POST. That is a solid doc surface for agents. It is a discovery layer, not an agent interface.

I also checked `perplexity.ai`, `www.perplexity.ai` and `api.perplexity.ai` at both well-known paths. All returned 404.

## OpenAI

I probed `openai.com`, `platform.openai.com`, `developers.openai.com` and `api.openai.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. I found no agent card. `platform.openai.com` returned 200s with an HTML page, so that is not a card. The others returned 404. OpenAI does publish an `llms.txt` at [developers.openai.com/llms.txt](https://developers.openai.com/llms.txt). The [OpenAI provider page](https://apis.io/providers/openai/) has more.

## Anthropic

I probed `anthropic.com`, `www.anthropic.com`, `docs.anthropic.com`, `docs.claude.com` and `platform.claude.com` at both well-known paths. I found no agent card on any of them. The two docs hosts returned 200s with HTML, not JSON. Anthropic publishes an `llms.txt` at [docs.anthropic.com/llms.txt](https://docs.anthropic.com/llms.txt).

There is a wrinkle worth calling out. The [Anthropic A2A page](https://apis.io/a2a/anthropic/) on APIs.io does list a conformant card, but it is the one served by `modelcontextprotocol.io`, the Model Context Protocol project site, with two skills about MCP proposals and searching MCP GitHub activity. APIs.io files it under Anthropic. I would not call that an Anthropic product agent, and I did not find a card on Anthropic's own domains.

## Side By Side

| | Perplexity | OpenAI | Anthropic |
|---|---|---|---|
| Card on own domains | Yes, docs.perplexity.ai | No (4 hosts checked) | No (5 hosts checked) |
| Endpoint | Docs homepage | n/a | n/a |
| Skills | 1, generic | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Grade | Conformant (one deviation) | n/a | n/a |
| llms.txt | Yes | Yes | Yes |
| Other | Docs MCP endpoint responds | n/a | Card on modelcontextprotocol.io, filed under Anthropic |

## The Takeaway For AI Providers

All three publish `llms.txt`. Only Perplexity serves an A2A card on its own domain, and it is a discovery card. That is a little ironic for companies whose products are agents. Perplexity in particular already has an "Agent" product in its API. A card with a real skill behind an A2A endpoint, such as a web-grounded answer with citations, would be a short step from what they sell today. For OpenAI and Anthropic, the first move is cheap: put a card on the developer docs host. The meaningful move is publishing an agent another agent can actually call.
