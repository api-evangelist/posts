---
published: true
layout: post
title: 'Replit And Lovable Publish Docs A2A Cards. Vercel Leans On MCP And llms.txt.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/replit-and-lovable-publish-docs-a2a-cards-vercel-leans-on-mcp-and-llms-txt.png
date: 2026-11-24 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Replit
  - Vercel
  - Lovable
---
The last company in this batch of my A2A agent card comparisons is Replit, set next to Vercel and Lovable. These are all places where people, and increasingly agents, go to build and ship apps. If you are new to the series, start with [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/). The data comes from the [APIs.io A2A catalog](https://apis.io/a2a/), where 1,279 providers serve a card and 934 are conformant as of November 10, 2026.

## What Replit Publishes

Replit serves a docs-platform card at [docs.replit.com/.well-known/agent-card.json](https://docs.replit.com/.well-known/agent-card.json). We first picked it up on the older docs.repl.it host on October 22, which is why the [Replit card page](https://apis.io/a2a/repl-it/) and the [provider page](https://apis.io/providers/repl-it/) still use the repl-it slug. The endpoint in the card is `https://docs.replit.com/`. Protocol version 0.3. One skill, with an id of `replit`.

The skill description is short and appears to be cut off. In our October fetch it read "Use when building web apps, mobile apps, data dashboards, or any" and stopped. When I checked on November 10, 2026, it read "Use when building web apps, mobile apps, data dashboards, or other" and stopped. So it is being regenerated, and both versions end mid-sentence.

The card uses `supportedInterfaces` instead of `additionalInterfaces`. APIs.io grades it conformant. My stricter probe calls it near-conformant for that one deviation. I also checked replit.com at both `/.well-known/agent-card.json` and `/.well-known/agent.json` and got 404 on both. The docs host is the only place I found a card.

## What Lovable Publishes

Lovable also serves a docs card, at [docs.lovable.dev/.well-known/agent-card.json](https://docs.lovable.dev/.well-known/agent-card.json). It is named "Lovable Documentation", points at `https://docs.lovable.dev/`, and declares protocol version 0.3. One skill, `lovable`, with a description that reads "Use when building, iterating, and deploying full-stack web" and stops there. Same `supportedInterfaces` deviation. It looks like the same docs-platform pattern as Replit, down to the truncated description.

This card is not yet in our catalog, so I do not have an APIs.io grade for it. I found it live on November 10. I also checked lovable.dev at both paths and got 404.

Lovable has more than a card. Its docs [llms.txt](https://docs.lovable.dev/llms.txt) links to a [Lovable MCP server](https://docs.lovable.dev/integrations/lovable-mcp-server) page, described as a way to connect AI agents and developer tools to Lovable to build, iterate and deploy apps programmatically. Here is the [Lovable provider page](https://apis.io/providers/lovable/).

## What Vercel Publishes

I checked vercel.com and docs.vercel.com at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. All returned 404. No agent card found.

Vercel has clearly invested in agent-facing surfaces in other ways. There is documentation on how to [use Vercel's MCP server](https://vercel.com/docs/mcp/vercel-mcp), and vercel.com serves an [llms.txt](https://vercel.com/llms.txt) that describes itself as an index of machine-readable resources. See the [Vercel provider page](https://apis.io/providers/vercel/).

## Side By Side

| | Replit | Lovable | Vercel |
|---|---|---|---|
| Agent card | Yes, docs.replit.com | Yes, docs.lovable.dev | None found |
| Card endpoint | Docs host | Docs host | n/a |
| Skills | 1, truncated | 1, truncated | n/a |
| Protocol version | 0.3 | 0.3 | n/a |
| In APIs.io catalog | Yes, conformant | Not yet | n/a |
| MCP documented | Not checked | Yes | Yes |
| llms.txt | Not checked | Yes | Yes |

I did not go looking for a Replit MCP server for this post, so that row is not a claim either way.

## How I Read This

Replit and Lovable have the same kind of card, and I suspect the same tooling produced both. A docs card with one skill is a fine discovery step. It says this company exists and here is the documentation. It is not an agent interface. The endpoint is a docs site, there is only one skill, and in both cases the description does not finish its sentence. An agent reading either card learns very little about what it can actually do.

Vercel took a different road. No card, but a documented MCP server and a site-wide llms.txt. Lovable has done both, a card and an MCP server, though the card does not point at the MCP server.

For this group in particular, that gap matters. These are platforms where an agent could create a project, deploy it and check on it. That is a set of skills waiting to be described.

## Takeaway For App Building Platforms

If a docs platform generated your card, open it and read the skill description out loud. If it stops mid-sentence, fix it. Then go further. Put a card on your main domain, point it at the MCP server or API where agents do real work, and list skills like create a project, deploy and check status. Vercel, if you publish a card, you already have the MCP server to point it at.
