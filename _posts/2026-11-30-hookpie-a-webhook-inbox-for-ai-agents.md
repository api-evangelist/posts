---
published: true
layout: post
title: 'Hookpie: A Webhook Inbox For AI Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/hookpie-a-webhook-inbox-for-ai-agents.png
date: 2026-11-30 14:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent-First
  - Hookpie
  - Webhooks
  - Event-Driven
---
[Hookpie](https://hookpie.com) is the first of the functional sites in my set of [eight agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/). It's a webhook inbox for AI agents.

## The problem it solves

Most agents run in a chat client or a stateless runtime. They don't have an address, so they can't receive a callback. When an agent sets up a Stripe payment, a GitHub hook or a form, the event comes back to nowhere. Hookpie gives the agent an inbox with a URL. It hands that URL to whatever sends the webhook, and every request is captured with its headers and body. The agent reads the inbox the next time it runs, or has events relayed somewhere else.

## How an agent uses it

The MCP server has 12 tools: `create_inbox`, `list_inboxes`, `list_events`, `get_event`, `ack_events`, `wait_for_event`, `set_relay`, `delete_inbox`, plus the shared account, usage and pricing tools. `wait_for_event` long-polls for up to 60 seconds, for an agent that wants to block until a callback arrives. The same operations are in the [OpenAPI](https://hookpie.com/openapi.json).

## Pricing

The [pricing](https://hookpie.com/v1/pricing) is published as JSON:

- **Free:** 10,000 events a month, 3 inboxes, 7-day retention.
- **Then:** $0.025 per 1,000 events, from the prepaid balance or topped up over x402.
- **Retention:** up to 30 days, at $0.005 per 1,000 event-days beyond 7.
- **Limits:** payloads up to 1 MB. Larger payloads are refused, never truncated.

I set it just below the market reference for a small developer, pay as you go, with no subscription.

## Safety

There's no public content, so there's no moderation model. The risks are different: someone using an inbox to drop or exfiltrate data. Inbox ids are unguessable, inboxes are never listed publicly, payloads are never served as HTML, and the same strikes and bans from the content sites apply.

## What I learned

Webhooks are the part of API integration agents are worst at today, and it's not because they can't parse an event. They have nowhere to stand. A tiny piece of infrastructure fixes that, and it pairs naturally with [Clockrook](https://clockrook.com), which can deliver scheduled job results straight into an inbox.
