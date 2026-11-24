---
published: true
layout: post
title: 'Google Workspace Now Requires Agents To Use MCP And Puts A Price On Scale'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/google-workspace-now-requires-agents-to-use-mcp-and-puts-a-price-on-scale.png
date: 2026-11-26 16:00:00 +0000
author: Kin Lane
tags:
  - Google
  - MCP
  - Pricing
  - Rate Limits
  - Agents
  - Terms of Service
---

I got the email from Google this week that anyone with an active Google Workspace developer project got. It is the follow-through on what they [announced in May](https://workspaceupdates.googleblog.com/2026/05/agent-tools-and-security-updates-for-workspace-developers.html), and the details [are now published](https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html). It is one of the clearer signals I have seen of where agentic API access is heading, so I want to walk through it.

## What is changing

Starting November 24, 2026, the Workspace APIs, the Workspace MCP servers and the CLI have two usage tiers, beginning with Gmail, Drive and Calendar:

- **Standard tier:** no cost, with published usage quotas.
- **Scaled tier:** for projects that need higher quotas. Starting April 1, 2027, you pay only for usage above daily free allowances.

Any new quota increase request now requires the Scaled tier. Projects that already have higher limits have to take the same steps to keep them, or they drop to Standard limits on April 1, 2027.

The bigger change is this one: **AI agents and similar access tools must use MCP to access Workspace data, rather than calling the Workspace REST APIs directly.** Technical enforcement begins February 1, 2027. There is also a new Workspace AI Tools Addendum that prohibits things like storing certain data derived from the APIs for extended periods and using agents to scrape the APIs, plus a disclaimer about harms caused by third-party agents.

## MCP as the agent lane

I have been saying [MCP is just another API design pattern](https://apievangelist.com/2026/11/25/mcp-is-just-another-api-design-pattern/). Google is treating it that way too, but with a twist: it is the pattern you are *required* to use if you are an agent. The REST API stays for applications. The MCP server becomes the governed front door for agents.

I understand why. A separate lane gives a provider a place to see agent traffic, meter it, apply different terms to it, and shut it off without touching every integration built on REST. That is a reasonable thing for a platform holding people's email, files and calendars to want.

It also raises questions every provider going this way will need to answer:

- **How do you know it is an agent?** The line between "an application" and "an application with a model in it" is blurry. Enforcement will depend on how Google decides who is who, and I didn't find that spelled out.
- **Does the MCP server cover what the REST API does?** If the agent lane only exposes a subset of operations, the requirement narrows what agents can do, not just how they do it.
- **What does "extended periods" mean?** Retention rules that apply to agents need numbers, or they become a judgement call made after the fact.

## Pricing and limits are now part of the contract

The second lesson is about money. Rate limits used to be an operational detail. Here they are the product boundary between a free tier and a paid one, and the paid tier is defined by usage above a daily allowance. That is exactly the kind of thing I [argued this week should be machine readable and standardized](https://apievangelist.com/2026/11/26/your-api-plans-and-pricing-should-be-machine-readable-and-standardized/). An agent, or the person running one, needs to know the published quota, the allowance, the price above it, and what response comes back when you hit the limit, without reading a Help Center article.

Google did ship a usage dashboard that shows each project against the Standard limits with estimated costs, and that is useful. I would like to see the same numbers published as data next to the MCP servers and the OpenAPI, so the tier is something you can reason about before you build, not after.

## What I'd do if I depend on Workspace

1. Read the Workspace AI Tools Addendum.
2. Inventory which projects use agents against Workspace data and plan the move from REST to MCP before February 1, 2027.
3. Check usage in the new dashboard. If you are under Standard limits, nothing to do.
4. If you are over, or already have raised limits, decide on the Scaled tier before April 1, 2027.

## The bigger picture

This is the first major platform I have seen draw a hard line between how applications and agents are allowed to access the same data, then attach tiers, pricing and terms to the agent side. It won't be the last. I expect separate agent lanes, agent-specific terms and usage-based pricing to show up across the providers I track on APIs.io, and I'll be watching for it in the plans, rate limits and terms we measure there. Providers who publish those rules clearly, as data, will be the ones agents can actually work with.
