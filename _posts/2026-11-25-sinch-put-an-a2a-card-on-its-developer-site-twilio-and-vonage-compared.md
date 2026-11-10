---
published: true
layout: post
title: 'Sinch Put An A2A Card On Its Developer Site. Twilio And Vonage Compared.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/sinch-put-an-a2a-card-on-its-developer-site-twilio-and-vonage-compared.png
date: 2026-11-25 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Sinch
  - Twilio
  - Vonage
---
I am working my way through the companies that publish an A2A (Agent2Agent) agent card, one a day, and holding each one up against a couple of competitors. The background is in my overview post on [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the full list lives in the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 that page counts 1,279 providers serving a card, and 934 of them conformant.

Today it is communications APIs. Sinch, compared with Twilio and Vonage.

## What Sinch Publishes

Sinch serves a card at [developers.sinch.com/.well-known/agent-card.json](https://developers.sinch.com/.well-known/agent-card.json). When I checked on November 10, 2026 it matched what APIs.io recorded on its [Sinch card page](https://apis.io/a2a/sinch/). The card is named "Developer Documentation" and describes itself as a "Documentation agent card announcing this site's agent skills and MCP server."

The details:

- Protocol version 0.3.0, with preferred transport HTTP+JSON.
- The endpoint is https://developers.sinch.com/a2a, which is Sinch's own path, not a generic docs host root.
- Zero skills. The skills array is empty.
- Under capabilities it declares an extension pointing at the Model Context Protocol, with a parameter giving an MCP URL of https://developers.sinch.com/mcp.

It grades conformant. No deviations were recorded and my live probe agreed.

I want to be careful with what that means. A POST to the /a2a endpoint with no body came back 405, and so did a plain request to the /mcp URL. That tells me something is listening on those paths and is picky about how it is called. It does not tell me what the agent does, and I did not try to hold a full conversation with it.

What I like here is the honesty of the shape. Sinch is not pretending its docs are an agent with a pile of skills. It is using the card as a signpost: here is our A2A endpoint, and here is our MCP server. That is a reasonable use of a card. The tradeoff is that zero skills means an agent reading the card has no idea what it can ask for until it connects. A card is a discovery document, and skills are most of what gets discovered.

## Twilio

I checked twilio.com, www.twilio.com and api.twilio.com at both /.well-known/agent-card.json and /.well-known/agent.json, and found no agent card on any of them. All six requests returned 404.

Twilio is not ignoring agents, though. It publishes an [llms.txt for its docs](https://www.twilio.com/docs/llms.txt), and Twilio Labs maintains an [MCP server on GitHub](https://github.com/twilio-labs/mcp). So the agent-facing work exists. It just is not announced through an A2A card at a well-known path.

## Vonage

I checked vonage.com, developer.vonage.com and api.vonage.com at both well-known paths. The first two returned 404 and api.vonage.com returned 403 on both. No agent card.

Vonage does serve an [llms.txt on its developer portal](https://developer.vonage.com/llms.txt). There is also a [telephony MCP server](https://github.com/Vonage-Community/telephony-mcp-server) under the Vonage-Community GitHub organization, which describes itself as a simple MCP server with voice and SMS tools built on the Vonage API. I would read that as community and sample territory rather than an official product, so I am not counting it as a Vonage MCP offering.

## Side By Side

| | Sinch | Twilio | Vonage |
|---|---|---|---|
| A2A card found | Yes, developers.sinch.com | No (3 hosts checked) | No (3 hosts checked) |
| Grade | Conformant | n/a | n/a |
| Protocol version | 0.3.0 | n/a | n/a |
| Endpoint | Own /a2a path | n/a | n/a |
| Skills | 0 | n/a | n/a |
| MCP signal | Declared in the card | Twilio Labs repo | Community repo |
| llms.txt | Yes | Yes | Yes |

## What This Tells Me

All three companies have put some work into being readable by agents. All three serve llms.txt. Two of the three have some form of MCP server in the wild. Only Sinch has taken the extra step of publishing an A2A card that ties it together, and only Sinch points that card at an endpoint of its own rather than at a docs root.

That is the part I find most interesting. A lot of the cards I am seeing come from documentation platforms that generate one generic skill and point the endpoint at the docs host. Sinch went the other way. No generated skill, but a real path, and an MCP pointer inside the card through the extensions mechanism.

The gap is the skills. An agent landing on that card learns where to go, but not what it will find. Even two or three skills, such as sending an SMS, looking up a number, or searching the docs, would turn the card from a signpost into a menu. It is also still on 0.3.0, and the protocol has moved to 1.0, so that is worth revisiting.

## The Takeaway

For Twilio and Vonage, the pieces are already sitting there. You have llms.txt files and MCP work in public repos. Publishing a small A2A card at /.well-known/agent-card.json on your developer host, pointing at what you already run, is a cheap way to make all of that discoverable by agents that look at well-known paths first. And if you do it, list a few real skills. That is the part Sinch has not done yet, and it is the easiest place to get ahead. You can see where you stand on your APIs.io provider pages for [Twilio](https://apis.io/providers/twilio/) and [Vonage](https://apis.io/providers/vonage/).
