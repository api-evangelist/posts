---
published: true
layout: post
title: 'What Your Agentic Front Door Should Look Like In .well-known'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-your-agentic-front-door-should-look-like-in-well-known.png
date: 2026-11-27 12:00:00 +0000
author: Kin Lane
tags:
  - Well-Known URI
  - Agents
  - Discovery
  - OAuth
  - Agent Readiness
  - APIs.io
---
In October I wrote that [the well-known folder is filling up](https://apievangelist.com/2026/10/13/the-well-known-folder-is-filling-up/). The [Well-Known URIs page](https://standards.apievangelist.com/well-known/) I keep on API Evangelist Standards now tracks **119 paths**: 63 permanent and 39 provisional IANA registrations, 5 deprecated or obsoleted, and 12 in use but never registered. That's a lot of doors. So here's the practical follow-up I keep getting asked for: if you're an API provider, which of them should you actually publish so agents can find you, understand you and get in?

This is my recommendation, based on the standards we track and score across the [APIs.io](https://apis.io) catalog.

## 1. Say what you have

- **`/.well-known/api-catalog`** ([RFC 9727](https://www.rfc-editor.org/rfc/rfc9727)). A linkset that points at your APIs, their descriptions and their documentation. This is the registered, standard starting point, and it's the one door that's designed to point at all the others.
- **`/.well-known/apis.json`** (or `/apis.json`). The richer index, with each API's human URL and base URL, plus properties for the OpenAPI, documentation, pricing, plans, terms, sign-up, support and change log. I'll own that this one is mine, and that I still need to register it.

If you only publish one thing, publish an API catalog that points at your OpenAPI. Everything else builds on that.

## 2. Say how an agent can work with you

- **`/.well-known/agent-card.json`**. The A2A agent card, registered as permanent with IANA. It describes your agent's skills and where to send messages.
- **An MCP server card.** It describes your MCP server's transport, auth and tools. The MCP work is pointing discovery at **`/.well-known/ai-catalog.json`**, which isn't registered yet, so watch that one as it settles.

## 3. Say how to get in

- **`/.well-known/oauth-protected-resource`** ([RFC 9728](https://www.rfc-editor.org/rfc/rfc9728)). Tells a client which authorization servers protect your API and which scopes exist. MCP clients rely on it.
- **`/.well-known/oauth-authorization-server`** ([RFC 8414](https://www.rfc-editor.org/rfc/rfc8414)) and **`/.well-known/openid-configuration`**. Your authorization server's endpoints and capabilities, so a client can register and get a token without reading docs.
- **`/.well-known/api-onboarding`**. The API Onboarding Descriptor we've been working on: how an agent signs up, what it can do on its own, and the one step that needs a person, like adding a card. It isn't a registered path, and I'm calling that out rather than pretending it is.

## 4. Say how to trust you

- **`/.well-known/security.txt`**. Where to report a vulnerability.
- **`/.well-known/http-message-signatures-directory`**. The IETF draft behind Web Bot Auth, where keys used to sign requests are published, so agents and the APIs they call can verify each other.

## 5. Next to the folder

A few things that matter just as much live outside `.well-known`: an **`/llms.txt`** that walks a model through what you offer, a **`robots.txt`** that says what crawlers and AI agents are allowed to do, and your **OpenAPI** at a stable URL the catalog points to.

## Make the doors point at each other

The biggest lesson from tracking all of these is that the number of doors matters less if they link to each other. Your API catalog should link to your OpenAPI, your agent card, your MCP server card and your onboarding descriptor. Your protected resource metadata should point at your authorization server. Your `llms.txt` should link to all of it. An agent that lands on any one of them should be able to find the rest.

The [eight agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/) I've built publish every one of these and cross-link them, if you want a working example to copy.

## How the Kin Score reads it

[Agent Readiness on APIs.io](https://apis.io/rating/) checks for a well-known catalog, an MCP server, machine-readable auth and protected resource metadata, alongside a published OpenAPI, idempotency, stable errors and rate-limit headers. Discoverability in the composite score looks at the APIs.json index and identity signals. None of these files is hard to publish. Together, they're the difference between an agent finding your front door and an agent guessing.
