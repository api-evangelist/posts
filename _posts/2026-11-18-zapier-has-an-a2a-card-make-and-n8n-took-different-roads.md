---
published: true
layout: post
title: 'Zapier Has An A2A Card. Make And n8n Took Different Roads.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/zapier-has-an-a2a-card-make-and-n8n-took-different-roads.png
date: 2026-11-18 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Zapier
  - Make
  - n8n
---
I am working through the companies that show up in the [APIs.io A2A catalog](https://apis.io/a2a/) and comparing what they publish with what their competitors publish. If you missed the start of this, I laid out the numbers in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/). As of November 10, 2026, 1,279 providers serve a card and 934 of them are conformant. Today it is workflow automation, with Zapier, Make and n8n.

## What Zapier Publishes

Zapier serves an agent card at [docs.zapier.com/.well-known/agent-card.json](https://docs.zapier.com/.well-known/agent-card.json). It is a docs-platform card. The endpoint is the docs site itself, `https://docs.zapier.com/`, and the protocol version is 0.3. You can see how we index it on the [Zapier card page](https://apis.io/a2a/zapier/) and the [Zapier provider page](https://apis.io/providers/zapier/).

This one has been moving. When APIs.io first fetched it on October 4, it had a single skill, a broad "Use when connecting AI agents to 9,000+ apps via MCP" description. When we fetched it again on October 28 the same card had seven skills, and that fetch got filed under a provider called Hello Audio on our side, which looks like an attribution error in our data that I want to clean up. The [Hello Audio card page](https://apis.io/a2a/hello-audio/) is really showing Zapier's docs card.

When I checked on November 10, 2026, the live card had eight skills:

- zapier-choose-your-path
- zapier-embed-guide
- zapier-integrations-guide
- zapier-mcp-guide
- zapier-sdk-guide
- zapier-troubleshooting-router
- zapier-workflow-concepts
- zapier

That is a much better card than a single generic skill. Each skill is still a documentation router. They explain things like MCP versus the SDK, Powered by Zapier versus White Label, and how tasks are counted, and then point you to the canonical docs. Nothing in the card does work for you. It tells an agent where to read.

The card declares its interfaces under `supportedInterfaces` instead of `additionalInterfaces`, which is a small deviation from the 0.3 shape. APIs.io still grades it conformant. My probe script is a little stricter and calls it near-conformant for that reason. It is not a big deal, but it is the same deviation I see on almost every docs-platform card.

The interesting part is that the work surface is somewhere else. Zapier runs [Zapier MCP](https://mcp.zapier.com/), and the docs `llms.txt` literally says "Default to Zapier MCP." So the A2A card is a discovery layer that sends agents to MCP. That is a reasonable design.

## What Make Publishes

I checked make.com, www.make.com, developers.make.com and apps.make.com at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. All of them returned 404. I found no agent card.

Make does publish agent-facing material. There is a [Make MCP Server](https://developers.make.com/mcp-server) page on the developer hub, and the hub serves an [llms.txt](https://developers.make.com/llms.txt). So Make is betting on MCP and LLM-readable docs, not on A2A discovery, at least for now. See the [Make provider page](https://apis.io/providers/make/).

## What n8n Publishes

I checked n8n.io, docs.n8n.io and api.n8n.io at both well-known paths. All returned 404. No agent card.

n8n also has MCP covered. The docs explain how to [connect to the n8n MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/), and docs.n8n.io serves an [llms.txt](https://docs.n8n.io/llms.txt). Here is the [n8n provider page](https://apis.io/providers/n8n/).

## Side By Side

| | Zapier | Make | n8n |
|---|---|---|---|
| Agent card | Yes, docs.zapier.com | None found | None found |
| Card endpoint | Docs host | n/a | n/a |
| Skills | 8 (live), docs routers | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| MCP server | Yes | Yes | Yes |
| llms.txt | Yes | Yes | Yes |

## How I Read This

All three companies have done the thing that matters most for agents, which is a working MCP server. That is where an agent actually runs a workflow. The difference is in discovery. Zapier has added a docs-hosted A2A card, and has put real thought into the skills, splitting them by the questions people actually ask. That is a fine discovery step. It is not an agent interface. The endpoint is a documentation site, and none of the skills execute anything.

What I would like to see from Zapier next is a card that points at the MCP server, or an actual A2A endpoint, with skills that describe the actions agents can take. Zapier is closer to that than most, because the work surface already exists.

## Takeaway For Make And n8n

You already have the hard part. You run MCP servers and you publish llms.txt. Adding an agent card at a well-known path is a small amount of work, and if your docs platform generates one, check what it says before you ship it. Better still, write one that names your MCP server as the interface and lists the skills an agent can actually use. In workflow automation, being found by an agent is going to matter as much as being found by a person.
