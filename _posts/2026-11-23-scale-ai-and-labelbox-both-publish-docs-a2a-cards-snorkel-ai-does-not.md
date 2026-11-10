---
published: true
layout: post
title: 'Scale AI And Labelbox Both Publish Docs A2A Cards. Snorkel AI Does Not.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/scale-ai-and-labelbox-both-publish-docs-a2a-cards-snorkel-ai-does-not.png
date: 2026-11-23 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Scale AI
  - Labelbox
  - Snorkel AI
---
Today in my series comparing published A2A agent cards, I am looking at AI data and labeling platforms: Scale AI, Labelbox and Snorkel AI. If you are just joining, the background is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the data is in the [APIs.io A2A catalog](https://apis.io/a2a/), where 1,279 providers serve a card and 934 are conformant as of November 10, 2026.

This one surprised me a little. I expected one card. I found two.

## What Scale AI Publishes

Scale serves a card at [api-reference.scale.com/.well-known/agent-card.json](https://api-reference.scale.com/.well-known/agent-card.json). The card is named "Scale Documentation" and the endpoint is the API reference site, `https://api-reference.scale.com/`. Protocol version 0.3. One skill, with an id of `scale`.

The skill description is a good one for a docs card. It says to use it when building data labeling workflows, creating annotation tasks, managing projects and batches, retrieving labeled data, or integrating Scale's human-in-the-loop platform with an ML pipeline. It mentions image and video annotation, sensor fusion, task management and callbacks. That is specific enough that an agent knows when Scale is relevant.

When I checked on November 10, 2026, the live card matched what APIs.io recorded on October 27. Like most docs-platform cards it uses `supportedInterfaces` instead of `additionalInterfaces`. APIs.io grades it conformant, and my stricter probe calls it near-conformant for that deviation.

I also checked scale.com and docs.scale.com at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. scale.com returned 404. docs.scale.com returned an HTML page with a 200, which is not a card. See the [Scale AI card page](https://apis.io/a2a/scale-ai/) and the [Scale AI provider page](https://apis.io/providers/scale-ai/).

## What Labelbox Publishes

Labelbox also serves a docs card, at [docs.labelbox.com/.well-known/agent-card.json](https://docs.labelbox.com/.well-known/agent-card.json). It is named "Labelbox", describes itself as documentation for Recursion Managed Agents and the Labelbox platform, and points at `https://docs.labelbox.com/`. Protocol version 0.3. One skill, `labelbox`, with a description that starts "Use when building and managing AI agents (Recursion), creating" and ends there. It reads like it was cut off.

It has the same `supportedInterfaces` deviation. This card is not yet in our catalog, so I have no APIs.io grade for it. I found it live on November 10. I also checked labelbox.com at both paths, and it returned 404. The docs serve an [llms.txt](https://docs.labelbox.com/llms.txt) as well. Here is the [Labelbox provider page](https://apis.io/providers/labelbox/).

## What Snorkel AI Publishes

I checked snorkel.ai and docs.snorkel.ai at both well-known paths. All returned 404. No agent card found. I also tried docs.snorkel.ai/llms.txt, which returned 404. See the [Snorkel AI provider page](https://apis.io/providers/snorkel-ai/).

## Side By Side

| | Scale AI | Labelbox | Snorkel AI |
|---|---|---|---|
| Agent card | Yes, api-reference.scale.com | Yes, docs.labelbox.com | None found |
| Card endpoint | Docs host | Docs host | n/a |
| Skills | 1, detailed | 1, truncated | n/a |
| Protocol version | 0.3 | 0.3 | n/a |
| In APIs.io catalog | Yes, conformant | Not yet | n/a |
| Docs llms.txt | Not checked | Yes | 404 |

## How I Read This

Scale and Labelbox have both landed in the same place, which is usually a sign of the docs platform doing the work. A docs card with one skill is a fine discovery step. It tells an agent this company exists, what it is for, and where the documentation lives. It is not an agent interface. Neither card points at an endpoint where an agent can create a task, check a batch, or pull labeled data.

Between the two, Scale's skill description is the more useful one, because it is complete and concrete. Labelbox's description is clipped, which is worth a look on their end. Labelbox does have an interesting story to tell here, since its docs now cover a managed agents product, and the card could say more about that.

## Takeaway For Labeling And Data Platforms

Your customers are building agents and ML pipelines, so they are exactly the people who will point an agent at your platform. If your docs platform produced a card for you, read it. Make sure the skill description is complete. Then think about the next step, which is a card on your own domain that points at an API or MCP endpoint and lists skills like create a task, check status and fetch results. Snorkel AI, if you do publish one, you will be starting from the same place your two neighbors are now.
