---
published: true
layout: post
title: "Waiting for MCP's Trough of Disillusionment"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/waiting-for-mcps-trough-of-disillusionment.png
date: 2026-11-24 16:00:00 +0000
author: Kin Lane
tags:
  - MCP
  - GraphQL
  - Hype Cycle
  - API Design
  - API Products
  - Sprawl
---
I'll just say it plainly. MCP is going to be a shit show. Not because the protocol is bad, but because of what we are pouring into it. It is going to look a lot like GraphQL did, and once we get out of the hype cycle and slide into the trough of disillusionment, we are going to be staring at MCP sprawl across every enterprise that rushed to stand up servers this year.

I'm not rooting against MCP. I'm waiting for the trough, because the trough is where the real conversation starts.

## I've seen this movie before

When GraphQL arrived, it was going to replace REST. Every team needed it. Conference stages were full of it. Then teams went into production and discovered that GraphQL didn't fix the fact that they didn't understand their own resources, didn't have a schema strategy, didn't have governance, and didn't know who their consumers were. They had moved the mess to a new place.

GraphQL today is a perfectly good tool that does a specific set of jobs well when the foundation underneath it is solid. That's the post-hype reality, and it's a healthy one. When I wrote about this on LinkedIn a while back, the post got around 1,100 likes, which tells me a lot of people lived through that same arc and are quietly recognizing it again.

## MCP is an API, and it will expose your APIs

From my perspective MCP is just an API. I am making the case for treating it as [another API design pattern](https://apievangelist.com/2026/11/25/mcp-is-just-another-api-design-pattern/) that deserves the same design discipline as anything else. The wonkiness people are hitting with MCP servers right now isn't really about MCP. It is people discovering, often for the first time, what API design, API-first, and treating APIs as a product actually mean.

An MCP server sits on top of whatever you already have. If your APIs have inconsistent naming, no clear resources, missing descriptions, undocumented errors, and no idea who they are for, your MCP server will faithfully hand all of that to an agent. The agent doesn't have the tribal knowledge your developers used to paper over the gaps. It just fails, or worse, it does the wrong thing confidently.

Every API design shortcut and every missing piece of product thinking is about to get surfaced at machine speed.

## What the sprawl will look like

Here is what I expect the trough to look like inside an enterprise:

- **Dozens of MCP servers per company**, stood up by different teams, wrapping the same backend systems in slightly different ways.
- **No inventory.** Nobody can tell you how many MCP servers exist, who owns them, or what they touch.
- **Tools that don't map to the API strategy.** The agentic layer floats free of the governance that already exists, so it gets none of the benefits.
- **Security and auth bolted on late**, with a different answer for every server.
- **Fly-by-night MCP offerings** from companies that invested in the protocol before they invested in the foundation.

I've profiled a lot of companies at this point, and that last one is already visible. You can see the shops that went straight to MCP without the API underneath being in decent shape. The agentic layer has to map to your foundational API strategy and governance. If it doesn't, you're going to be scrambling when the hype wears off.

## How to be on the right side of it

The good news is that being on the right side of the trough doesn't require predicting anything. It requires doing the boring work that was always the right work:

1. **Fix the foundation first.** Good OpenAPI, consistent design, clear descriptions, documented errors. The MCP server is only as good as what's beneath it.
2. **Treat MCP as a product surface.** Know who it's for, what jobs it does, how it's versioned, and how it's supported.
3. **Inventory and govern it like your APIs.** One catalog, one set of rules, one owner per server. Sprawl is a discovery and governance failure before it is anything else.
4. **Make it findable.** If agents can't discover what you offer, it doesn't count. I made that argument for [skills](https://apievangelist.com/2026/11/20/your-skills-dont-count-if-agents-cant-find-them/), and it applies just as much to MCP.
5. **Measure it.** Look at your foundation, your agent readiness, and how much you're talking about AI, and make sure the first two are keeping up with the third.

## The trough is where I do my best work

I'm the guy still talking about wiring and plumbing gauge while everyone just wants the coffee pot to work. That's fine. When the MCP trough arrives, people will suddenly care again about why the coffee pot doesn't work, and the answer is going to be the same answer it was with SOA, with REST, and with GraphQL. Your APIs. How they are designed, how they are delivered as products, and how they are governed.

So I'm not betting against MCP. I'm betting on what happens after everyone realizes MCP didn't fix their APIs for them.
