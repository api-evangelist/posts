---
published: true
layout: post
title: 'Start With The Flow, Not The Agent'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/start-with-the-flow-not-the-agent.png
date: 2026-10-26
author: Kin Lane
tags:
  - Agents
  - A2A
  - MCP
  - Business Capabilities
  - Idempotency
  - Security
  - FAPI
  - API Design
---

A lot of companies are asking me some version of the same question right now. We want our operations to be programmable for agents, so do we need MCP, or A2A, or both? It is the wrong first question. Here is the advice I keep giving, in the order I would actually do it.

## Agents are not new, they are a more persistent client

There is a story going around that web APIs were made for humans and MCP is made for agents. That is not true. We have been trying to automate API discovery, onboarding and consumption for as long as I have been doing this. We had hypermedia. We have always had a User-Agent header. What is new is a smarter client, a far more persistent client, and a business environment where agents are knocking on your door whether you invited them or not.

That pressure is useful. It is finally forcing providers to publish what I have been asking for over the last sixteen years: complete OpenAPI with examples, a well-known API catalog, machine-readable OAuth metadata, published rate limits, published pricing and plans, and now an A2A card. None of that is new work. It is overdue work.

## Map the flow, step by step, before you pick a protocol

I can't tell you whether you need MCP or A2A without seeing the whole flow. Who initiates each step? What is request and response? What is an event, a webhook, a message on a queue? What is a long-lived connection? Which steps are kicked off by an agent, and which by a system reacting to something that already happened?

Agents are just the loop on one end of all of that, making requests. MCP is, in my book, an API: JSON-RPC over a long-lived HTTP connection, something we had long before MCP. A2A is the card and the exchange that lets two parties see what each other has and start talking. They are each one piece. Walk every step of the flow across every party involved, and the protocol for each step usually becomes obvious. Most of the time it is the API patterns we already have.

## Own your side, and publish it

When more than one company is involved, you only get to own your side. You can't own your partner's infrastructure or your customer's. What you can own is your API resources, your events, your agents, and the front door that tells everyone else what is available:

- An A2A card, so other agents can see your skills.
- A well-known API catalog at the root of your domain.
- OAuth metadata, so a client knows how to get access before it asks.
- MCP server cards, if you run MCP.
- Complete contracts behind all of it, starting with your APIs and your events.

That combination is what lets a counterparty's agent find you, understand you and connect, without a meeting.

## Think in business capabilities

Your company needs to be capable of doing something. That capability is not just the technical details. It is the regulation, security and compliance wrapped around the process, all the things you have to own to deliver it. A2A sits next to REST, webhooks and events as one way of exposing that capability. The enterprises getting this right are approaching agents as a business capability question first, and a protocol question second.

## Security already has most of the answers

You do not need to invent trust for agents from scratch. OAuth gives you authentication, who the client is, and authorization, what it can reach, down to which resources and fields come back through scopes. OpenID Connect sits on top of that. If you handle money or regulated data, look hard at FAPI 2.0, the financial-grade profile of OAuth, which brings the signing and checks you are going to need.

Then publish it. Put your OAuth and protected resource metadata in your well-known directory, next to your API catalog and A2A card. That is how a partner learns what is possible and what they do and do not have access to.

The new layer is bot identity. Not just does this client have a token, but who does this agent represent, a user or a company, and how far can you trust it? Think of it as know-your-agent, the same way banks think about know-your-customer. On APIs.io I broker exactly this: a consumer agent proves control of its domain, APIs.io attests to it, and the provider decides whether to accept that attestation.

## Design for constant failure

Agents fail constantly, and they fail forward. They will try the same thing two, three, fifteen times, even when they have everything they need. This changes a few things:

- **Idempotency on every call.** It used to be something you put on create payment so you did not charge a card twice. Now it belongs on every write, because the agent will ask again and you need that record created once.
- **Standard errors.** Use Problem Details for HTTP APIs. Fail fast, fail consistently, and say as much as you can about what is wrong and what is needed next.
- **Standard contracts.** If your contract uses the standards a model already knows, it has less to guess. If it doesn't, it will make things up and keep trying.

The smaller, local models fail more than the frontier ones, which is a good reason to test against them. They show you where your APIs lean on the client being clever.

## Do not assume the standards are finished

The biggest misconception I run into is that A2A and MCP are done. They are not. Go sit in on the working group meetings. The people writing these specs are experts, and they are still working a lot of it out in the room. Much of what you might assume is settled infrastructure is still being decided, and some of it is wheels we already built in API land, being rebuilt. Know that before you roll out a lot of infrastructure and beat yourself up over what is missing.

## Let agents help design your APIs

I have always designed APIs first, with OpenAPI and AsyncAPI, iterating with consumers and mock examples before writing code. That process now includes agents as consumers. For APIs.io I run an agent for each access tier. Every day it tries to use my APIs and MCP servers and files what it hits as GitHub issues. Another agent acts as product manager, triages those issues and gives me a roadmap, which I work through with it.

Give your agents a sandbox, especially if you are regulated. Give them skills that define who they represent and how they work. Have them log everything and count how many calls it took to get something done. They will see things in your portal, docs, onboarding and auth that humans do not. Keep the human design process too. You need both.

## Keep humans in the loop on purpose

I try to minimize the human in the loop, but not to zero. Three places I bring people back in:

- **Money.** When a payment is set up or made, a human approves it.
- **Error thresholds.** After five or ten failed tries the agent stops and posts to Slack or Teams. You do not want your own agent hammering an API, especially one with rate limits or costs.
- **Improvements.** If an agent thinks something could be better, it files a labeled GitHub issue rather than acting on it.

## Don't forget the API roots

I am biased, but the API patterns you already know will save you: REST, RPC, events, webhooks, queues. Not everything needs to be an agent, and it is easy to get blinded by AI. Make as much of the flow as deterministic as you can, and keep the parts where a model makes decisions as small as you can. Map the flow, own and publish your side, secure it with what already works, and design for agents that will fail forward a thousand times a day.
