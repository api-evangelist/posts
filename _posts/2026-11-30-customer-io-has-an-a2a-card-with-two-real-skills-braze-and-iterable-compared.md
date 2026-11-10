---
published: true
layout: post
title: 'Customer.io Has An A2A Card With Two Real Skills. Braze And Iterable Compared.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/customer-io-has-an-a2a-card-with-two-real-skills-braze-and-iterable-compared.png
date: 2026-11-30 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Customer.io
  - Braze
  - Iterable
---
Every day I am taking one company that publishes an A2A (Agent2Agent) agent card and comparing it with two of its competitors. The context is in my post on [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the data is in the [APIs.io A2A catalog](https://apis.io/a2a/), which as of November 10, 2026 counts 1,279 providers serving a card and 934 conformant.

Today is customer messaging. Customer.io, compared with Braze and Iterable.

## What Customer.io Publishes

Customer.io serves a card at [docs.customer.io/.well-known/agent-card.json](https://docs.customer.io/.well-known/agent-card.json). It is on the [Customer.io card page](https://apis.io/a2a/customer-io/) at APIs.io, and it was live when I checked on November 10, 2026.

The card is named "Customer.io Documentation" and describes itself as "Agent-friendly documentation for Customer.io APIs, SDKs, MCP setup, and product workflows." It has two skills:

- **Search Customer.io documentation**, which finds documentation pages and machine-readable API references.
- **Fetch a documentation page as Markdown**, which explains that you can get any docs page as clean Markdown with an `Accept: text/markdown` header or by adding .md to the path, and that /llms.txt and /llms-full.txt are available too.

This is different from the generic one-skill cards I keep seeing from documentation platforms. Somebody wrote these. They describe actual behavior of the docs site in terms an agent can act on. The Markdown skill in particular is a small, practical instruction that saves an agent from scraping HTML.

## Where It Falls Short Of The Spec

The card has no endpoint URL and no protocol version. APIs.io graded it conformant when it fetched the card in August. My live probe on November 10 estimated it as flavored, flagging no protocolVersion, no url, and interfaces listed under supportedInterfaces instead of additionalInterfaces. So the grades differ, and I would trust the live read. Either way, an A2A client expects a url to talk to, and this card does not give it one.

That makes sense for what it is. It is a description of a documentation site, not an agent. But it is worth fixing, because the card is so close to being genuinely useful.

Customer.io also has an MCP server. Its [llms.txt](https://docs.customer.io/llms.txt) mentions agent-native access through a CLI or MCP server, and there is a [Customer.io MCP getting started page](https://docs.customer.io/ai/mcp/get-started/) for connecting tools like ChatGPT and Claude Desktop. The card mentions MCP setup in its description, but does not point to the server.

## Braze

I checked braze.com, www.braze.com and dashboard.braze.com at both /.well-known/agent-card.json and /.well-known/agent.json. braze.com and www.braze.com returned 500 on all four requests, and dashboard.braze.com did not give me a card either. I also tried docs.braze.com, which did not respond. No agent card found.

Braze clearly has agent work underway, though. The docs have an [MCP server section in the developer guide](https://www.braze.com/docs/developer_guide/mcp_server/), with setup, usage and available API functions.

## Iterable

I checked iterable.com, api.iterable.com, app.iterable.com and support.iterable.com at both well-known paths, plus docs.iterable.com, which did not respond. No agent card. support.iterable.com/llms.txt returned 404.

Iterable does publish an [MCP server on GitHub](https://github.com/Iterable/mcp-server) under its own organization.

## Side By Side

| | Customer.io | Braze | Iterable |
|---|---|---|---|
| A2A card found | Yes, docs.customer.io | No (4 hosts checked) | No (5 hosts checked) |
| Grade | Conformant (APIs.io), flavored (my live probe) | n/a | n/a |
| Protocol version | Not set | n/a | n/a |
| Endpoint | Not set | n/a | n/a |
| Skills | 2, hand written | n/a | n/a |
| MCP | Documented | Documented | GitHub repo |

## What This Tells Me

All three of these companies have built an MCP server. That is the headline for this market. Messaging platforms see agents as a real channel for operating campaigns and customer data, and they have moved.

A2A cards are a different story. Only Customer.io publishes one, and its card is the most thoughtful docs card I have looked at so far in this series. It also illustrates the gap between a nice description and a working agent interface. Two good skills, no endpoint, no version.

If Customer.io added a protocol version and either a url for an A2A endpoint or an extension pointing at the MCP server, this would go from a well-written signpost to a complete discovery document.

## The Takeaway

For Braze and Iterable, you already did the hard part. An MCP server is real engineering. A small agent card at /.well-known/agent-card.json on your docs host, with a couple of honest skills and a pointer to your MCP server, is an afternoon of work and makes all of that findable by agents that check well-known paths first. Take a page from Customer.io's skills, and then include the url and version it left out. Your APIs.io listings are at [Braze](https://apis.io/providers/braze/) and [Iterable](https://apis.io/providers/iterable/).
