---
published: true
layout: post
title: 'Send Multi-Channel Notifications And Promote Them To Production With Novu'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-multi-channel-notifications-and-promote-them-to-production-with-novu.png
date: 2026-11-05 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Novu
  - Environment Management
  - Notification
  - Messaging
---

Your product needs to tell people things: your order shipped, someone commented on your document, your payment failed, your report is ready. Some users want that by email, some want a text, some want a little bell inside the app, and some want it in Slack. Building and maintaining all of those channels yourself, with per-user preferences and a way to test a change before every customer sees it, is a product in its own right. [Novu](https://apis.io/providers/novu/) is that product, delivered through an API, a way for software to talk directly to other software, so your application, a script or an AI assistant can send the notification and manage who gets what.

## What Novu does

Novu describes itself as open-source notification infrastructure for developers. The idea is a single API and workflow engine: your application fires one event, "order shipped" say, and Novu routes it to the right channels for that person, whether in-app inbox, email, SMS, push, chat such as Slack, Discord, Microsoft Teams or WhatsApp, or a custom channel of your own. On top of the routing sit subscriber preferences, topics for group messaging, digests that batch many events into one message, and snooze. Novu also ships an embeddable React inbox component, a code-first framework for defining workflows in TypeScript, language SDKs, a Postman collection, an MCP server so AI agents can drive it, and bridges for Stripe, Clerk and Segment webhooks. More on the [Novu website](https://novu.co).

## What you can get done

### [Environment Management](https://apis.io/capabilities/environment-management/)

An environment is a separate copy of your notification setup, with its own API keys and configuration. The usual arrangement is a development environment where you build and test workflows, and a production environment that real customers see. Managing environments by API is how you promote a finished workflow to production in one step instead of rebuilding it by hand. There are 7 operations here.

- `GET /v1/environments` lists the environments your Novu organization has and where to find the API keys for each.
- `POST /v1/environments` adds a new environment, such as staging, with its own keys, optionally inheriting from a parent.
- `PUT /v1/environments/{environmentId}` renames an environment or changes its colour, bridge or DNS settings.
- `GET /v2/environments/{environmentId}/tags` lists the tags used across the workflows in an environment, which is how you filter a long list.
- `POST /v2/environments/{targetEnvironmentId}/publish` promotes your development workflows to production, either everything or just selected resources.

The rest of what Novu does, subscribers, topics, triggering workflows and reading the inbox, shows up in the workflows below rather than as a separate capability, because that is where the business outcome lives.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them, and Novu has 12 of them on APIs.io. Between them they tell the whole story of a subscriber, from the day they join to the day they leave.

- [Onboard a Subscriber and Send Their First Notification](https://apis.io/arazzos/novu/novu-onboard-subscriber-and-notify-workflow/) creates a subscriber, triggers a workflow to them and reads back the event that resulted.
- [Bulk Onboard Subscribers and Broadcast an Announcement](https://apis.io/arazzos/novu/novu-bulk-onboard-and-broadcast-workflow/) creates many subscribers in one call and sends a single announcement to all of them.
- [Set Subscriber Preferences Then Notify](https://apis.io/arazzos/novu/novu-set-preferences-then-notify-workflow/) sets a person's channel preferences for a workflow, then sends a notification that respects them.
- [Subscribe an Existing Subscriber to a Topic](https://apis.io/arazzos/novu/novu-subscribe-existing-to-topic-workflow/) finds a subscriber by search, adds them to a topic and confirms it.
- [Create a Workflow and Trigger It](https://apis.io/arazzos/novu/novu-create-workflow-and-trigger-workflow/) defines a new in-app notification workflow and immediately fires it to a subscriber.
- [Provision a Delivery Integration and Make It Primary](https://apis.io/arazzos/novu/novu-provision-integration-and-set-primary-workflow/) connects a delivery provider for a channel, such as your email service, promotes it to primary and confirms it is active.
- [Subscriber Inbox Triage](https://apis.io/arazzos/novu/novu-subscriber-inbox-triage-workflow/) reads a subscriber's unread in-app inbox and marks everything as read.
- [Offboard a Subscriber](https://apis.io/arazzos/novu/novu-offboard-subscriber-workflow/) confirms a subscriber, audits their topic subscriptions, then deletes the subscriber and all their data, which is the recipe privacy requests need.

## Ask for it in plain language

We have written conversational overlays for Novu, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. There are 16 of them. These are the kinds of questions they map:

- "How do I add a staging environment with its own API keys?"
- "What environments does my Novu organization have?"
- "How do I promote my development workflows to production?"
- "Can I publish only selected resources instead of everything?"
- "Which tags are used across the workflows in an environment?"
- "What gets removed when I delete an environment?"

You can see one of them on the [Activity API phrasing overlay](https://apis.io/overlays/novu/novu-activity-api-phrasing-overlay/).

## Getting started

Novu is freemium with self-serve signup, and because it is open source you can also run it yourself. Authentication is covered in the [API reference](https://docs.novu.co/api-reference/overview#authentication), the [inbox overview](https://docs.novu.co/platform/inbox/overview) explains the in-app component, the [framework overview](https://docs.novu.co/framework/overview) covers defining workflows in code, and the [MCP server](https://github.com/novuhq/novu-mcp-server) is on GitHub for teams that want an AI agent to send notifications. On APIs.io you can browse the [Novu profile](https://apis.io/providers/novu/), the [Events API](https://apis.io/apis/novu/novu-events-api/), the [Environments API](https://apis.io/apis/novu/novu-environments-api/) and the [Integrations API](https://apis.io/apis/novu/novu-integrations-api/). Pick the one notification your customers complain about most, build it in the development environment, and promote it when it is right.
