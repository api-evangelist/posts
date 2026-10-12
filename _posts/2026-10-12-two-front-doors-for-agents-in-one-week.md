---
published: true
layout: post
title: 'Two Front Doors for Agents in One Week'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/two-front-doors-for-agents-in-one-week.png
date: 2026-10-12
author: Kin Lane
tags:
  - Discovery
  - AI Agents
  - MCP
  - AI Catalog
  - Personal Agent Protocol
  - Well-Known URI
  - Standards
  - APIs
---
Two things happened last week that I keep putting side by side. On October 6, the Model Context Protocol finalized [MCP Server Cards](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127), and in doing so it declined to define its own discovery location. A domain advertises its MCP servers through an [AI Catalog](https://github.com/Agent-Card/ai-catalog) at `/.well-known/ai-catalog.json`, the format being worked on in the A2A project. The same day, Sierra and Meta [announced the Personal Agent Protocol](https://sierra.ai/blog/introducing-personal-agent-protocol), "Poppy" for short, and its [draft 0.1 specification](https://personalagentprotocol.org/docs/spec) says a company MUST publish its own document at `/.well-known/poppy.json`.

Same week. Same question — how does an agent find out what a company offers before it does anything? Two different front doors.

## What Poppy is

I've [added Personal Agent Protocol to the API Evangelist standards catalog](https://standards.apievangelist.com/store/personal-agent-protocol/), and it is worth reading, because it is aimed at a gap most of the agent protocols skip. It is about the *consumer's* agent — the one you hand everyday tasks to — reaching a company on your behalf. Meta and Sierra are developing it with Genesys, Instinct, Rocket, Shopify, Stripe and Walmart, it is Apache 2.0, and the draft is plain that anything can still change.

Its framing is the most honest description of the current situation I've read. Today it's all or nothing: the company blocks the agent, or the agent signs in as the person and can do anything they can. Companies spend effort detecting agents, agents spend effort avoiding detection, and nobody wins. Poppy offers the points in between — any agent can search rooms, a signed-in agent can see your reservations, booking needs your approval — with the company deciding what agents can do and the person deciding what their own agent can do.

The mechanics are built from parts we already have. Sessions are OAuth. An agent always identifies itself, and starts signed out under a user ID that is stable at one company and different at every other, so companies can't match you across them. And the part that matters most to me: when a company lists its APIs in `poppy.json`, each one is typed `openapi` or `mcp`. Your OpenAPI description is how a personal agent reaches you, without browsing your website.

## Why two doors matter

I have been arguing for a single front door to a provider's machine-readable surface since [APIs.json](https://apisjson.org). One well-known place that says *here is everything we offer and how to use it*. The reason is boring and practical: every additional well-known file is one more thing a provider has to know about, publish, keep current and secure, and every client has to probe for. Most providers don't publish the ones that already exist. I measure that across the APIs.io catalog every week.

So it was encouraging to see MCP point at the AI Catalog rather than invent a location of its own — two agent protocols agreeing on who owns which layer. And it is a reminder of how early this is to see a third protocol, from companies with enormous reach, define its own file the same week.

I don't think Poppy is wrong to. Its document does a different job. `poppy.json` carries the OAuth issuer, the sign-in methods and scopes a company supports, and its session endpoints — the authorization half, which a catalog of artifacts doesn't try to describe. A personal agent needs that before it can do anything for you. But a company that wants to be reachable by agents is now looking at an AI Catalog listing its MCP servers and agents, a Poppy document listing its APIs and sign-in, an OpenAPI description underneath both, OAuth metadata, protected resource metadata, and probably an `llms.txt` too. Each is reasonable on its own. Together they are a lot of front doors.

## What I'd like to see

The draft lists its open topics, and it is early enough to influence. Three things I'd suggest to anyone working on it, and to anyone working on the AI Catalog:

- **Point at each other.** A Poppy document could reference a domain's AI Catalog, and a catalog entry could carry or link a Poppy document, the way MCP Server Cards are designed to be embedded or linked from a catalog. Then a client probing one door finds the other.
- **Keep the description static and the truth at runtime.** MCP Server Cards deliberately leave capabilities out, because what a server will actually do depends on the client, the identity and the deployment. Poppy's scopes and sign-in options have the same property. Write down how to start, and let the session say what is allowed.
- **Lean on OpenAPI for the API layer.** Poppy already does. A personal agent should be able to read a company's contract and know what it can do, and the companies that publish good OpenAPI today will be the easiest ones for personal agents to work with tomorrow.

I'll be watching for the v0.1 specification's next revision, the reference implementation Sierra says is coming, and whether the AI Catalog and Poppy end up acknowledging each other. If you are building either, or building a company's presence for agents, I would love to compare notes.
