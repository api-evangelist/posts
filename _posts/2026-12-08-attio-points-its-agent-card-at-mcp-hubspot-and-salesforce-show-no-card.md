---
published: true
layout: post
title: 'Attio Points Its Agent Card At MCP. HubSpot And Salesforce Show No Card.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/attio-points-its-agent-card-at-mcp-hubspot-and-salesforce-show-no-card.png
date: 2026-12-08 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Attio
  - HubSpot
  - Salesforce
---
Today in my daily look at companies publishing A2A agent cards, I am looking at Attio, the CRM, alongside the two biggest names in that market, HubSpot and Salesforce. If you are new to the series, I laid out the landscape in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the [APIs.io A2A catalog](https://apis.io/a2a/) lists 1,279 providers serving a card, 934 of them conformant, as of November 10, 2026.

## What Attio Publishes

Attio actually has two cards, and they do different jobs.

The first is on its main domain, at `https://attio.com/.well-known/agent-card.json`. APIs.io tracks this one on the [Attio agent card page](https://apis.io/a2a/attio/) and the [Attio provider page](https://apis.io/providers/attio/). It is short. The name is "Attio," the endpoint is `https://attio.com`, and it has zero skills. What it does have is an interface entry pointing to `https://mcp.attio.com/mcp`. So this card is a signpost. It says: we are a CRM, and if you are an agent, our MCP server is over there.

When I checked on November 10, 2026, the description had changed from "AI CRM. Connect via MCP server or REST API." to "Agentic CRM. Connect via MCP server or REST API." The card still declares no `protocolVersion` and no `preferredTransport`. APIs.io computed it as conformant, while the card's own claim recorded by APIs.io was "flavored," and my probe script, which treats a missing protocol version as a real problem, estimated it as flavored too. I think that is the fair read. It is a useful card, but a strict A2A client will not know which version of the protocol to speak.

The second card is on `docs.attio.com`. It is a docs-platform card named "Attio Docs," protocol version 0.3, HTTP+JSON, endpoint `https://docs.attio.com/`, with one skill, `attio`, whose description starts "Use when building apps that extend Attio's CRM interface." My probe estimated it near-conformant because of the `supportedInterfaces` field.

Attio documents its MCP server at [docs.attio.com/mcp/overview](https://docs.attio.com/mcp/overview), which names the same `mcp.attio.com/mcp` URL the card points to. The card and the docs agree, which is more than I can say for a lot of cards.

## HubSpot

I checked `hubspot.com`, `www.hubspot.com` and `developers.hubspot.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. Every request came back 406 Not Acceptable, including when I sent `Accept: application/json` with a browser user agent. So I can't tell you whether HubSpot has a card at those paths. I found none I could fetch. What I can say is that HubSpot publishes a [HubSpot MCP Server page](https://developers.hubspot.com/mcp) and documentation for [integrating with the remote HubSpot MCP server](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server). HubSpot has an agent surface. It is MCP, not a discoverable A2A card.

## Salesforce

I checked `salesforce.com` and `developer.salesforce.com` at both well-known paths and got 404 on all four. I found no agent card on those hosts. Salesforce has a large agent product line, and I did not try to verify any specific agent-facing developer surface for this post, so I am leaving that out rather than guess.

## Side By Side

| | Attio | HubSpot | Salesforce |
|---|---|---|---|
| Card found | Yes, attio.com and docs.attio.com | Unknown, 406 on 6 URLs | No (4 URLs checked) |
| Endpoint | attio.com, interface to mcp.attio.com | n/a | n/a |
| Skills | 0 on main card, 1 on docs card | n/a | n/a |
| Protocol | Not declared on main card, 0.3 on docs | n/a | n/a |
| MCP | Yes, documented | Yes, documented | not verified here |

## What This Tells Me

Attio is using an A2A card the way I think a lot of companies will in the short term: as a discovery record that hands agents off to MCP. That is a reasonable choice. MCP is where most of the agent tooling is today, and Attio clearly wants to be found by agents.

The gap is that a card with zero skills and no protocol version doesn't tell an A2A client much. It can't route a task, and it can't tell what the CRM will do for it. Even listing three or four skills that mirror the MCP tools, like finding a record, updating a deal, or logging a note, would make the card useful on its own.

HubSpot is a good example of why fetchability matters. It has a real MCP server, but the well-known paths return 406, so a crawler learns nothing there.

## Takeaway For CRM Platforms

If you already ship an MCP server, publish an agent card on your main domain that points to it, the way Attio does. Then go one step further than Attio: declare a protocol version and list the skills your MCP server already supports. And make sure your edge returns JSON at `/.well-known/agent-card.json` instead of a 406, or registries will never see it.
