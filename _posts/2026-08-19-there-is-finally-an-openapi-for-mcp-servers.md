---
published: true
layout: post
title: 'There Is Finally an OpenAPI for MCP Servers, and It Is Called mcpdesc'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/there-is-finally-an-openapi-for-mcp-servers.png
date: 2026-08-19
author: Kin Lane
tags:
  - MCP
  - Agents
  - AI
  - Specification
  - Documentation
  - Governance
  - Standards
---

I have spent a lot of this year watching everyone ship [Model Context Protocol](https://modelcontextprotocol.io) servers and almost no one describe them. We went straight from "MCP is interesting" to "here is our MCP server" without stopping at the part where you write down, in a machine-readable way, what the thing actually exposes. That gap has been bugging me, because it is exactly the gap [OpenAPI](https://www.openapis.org) filled for HTTP APIs and [AsyncAPI](https://www.asyncapi.com) filled for event-driven ones. An MCP server is a contract between an agent and your capabilities, and a contract you cannot read, lint, diff, or validate is not much of a contract. So I was glad to come across [mcpdesc](https://mcpdesc.org) — an open, portable, machine-readable description format built specifically for MCP servers.

The one-line pitch is the one I would have written myself: mcpdesc is to MCP servers what OpenAPI is to REST APIs. It is a single document that declares everything a server offers, in a format the whole ecosystem can read, write, generate code from, and check work against. That is the missing layer, and it is worth understanding why it matters before agents make the lack of it expensive.

## What the MCP protocol gives you, and what it doesn't

MCP itself is a runtime protocol. A client connects to a server, the server advertises its tools, resources, and prompts over the wire, and the two talk. That is great for the moment of connection, but it is a *runtime* description — you have to stand the server up and interrogate it to learn what it does. There is no artifact you can commit to a repo, review in a pull request, diff between two versions, publish in a catalog, or hand to a governance pipeline before anything is running. The protocol tells an agent what a server does *right now*. It does not give the humans and tools around that server a portable description they can reason about *ahead of time*.

That is the same distinction we have lived through with HTTP APIs. The API responds at runtime; OpenAPI is the design-time artifact that lets you document it, mock it, test it, govern it, and generate SDKs from it without touching the live service. mcpdesc is deliberately playing that role for MCP, and it borrows the shape of the specifications that came before it rather than inventing a new vocabulary for the sake of it.

## The shape of a description

An mcpdesc document declares an MCP server across a set of top-level objects that will feel immediately familiar if you have read an OpenAPI or AsyncAPI file:

- **`mcpdesc`** — the format version the document conforms to.
- **`info`** — the metadata: name, version, description, licensing, contact.
- **`transports`** — how the server is reached (stdio, HTTP, and the like).
- **`security`** — the authentication and authorization the server expects.
- **`capabilities`** — what the server declares it supports.
- **`tools`** — the callable tools, their inputs, and their outputs.
- **`resources`** and **`resourceTemplates`** — the data the server exposes, static and parameterized.
- **`prompts`** — the prompt templates the server offers.
- **`tags`** — grouping and organization.
- **`extensions`** — the escape hatch for vendor- and domain-specific additions.

It is currently at **v0.9.0**, it is an independent open source initiative rather than a vendor spec, and it is dual-licensed the way a healthy standard should be — Apache 2.0 for the schemas and code, CC BY 4.0 for the documentation. There is already tooling forming around it, including an [MCP Toolkit](https://mcpdesc.org/docs) suite that Cisco DevNet kicked off, plus a live editor on the site if you want to feel the format in your hands before you commit to it.

## Why a description layer is where the leverage is

Here is the thing I keep coming back to: a description format is not paperwork, it is leverage. The moment you have a portable, machine-readable declaration of an MCP server, a whole workflow opens up that is otherwise impossible.

You can **generate documentation** from a single source of truth instead of hand-maintaining prose that drifts the day after you write it. You can **lint and validate** a description to catch problems before anyone connects. You can **diff two versions** of a server and see exactly which tools changed, which inputs moved, and what a consumer needs to know — the kind of change review I keep arguing every API needs and almost no MCP server has today. You can **mock** a server from its description to design against it before it exists, the design-first workflow we finally normalized for REST. And most importantly for the way things are going, you can run **conformance checks** — verify that a running server actually does what its description claims, that the tools it advertises match the tools it was designed to expose.

That last one is the governance story, and it is the one I care about most. Right now, if you run an MCP server inside an organization, you have almost no way to assert what it *should* expose versus what it *does* expose. There is no contract to check against. mcpdesc gives you that contract. It turns an MCP server from an opaque runtime endpoint into a declared surface you can review, approve, catalog, and continuously verify — the same governance loop we built around OpenAPI, now available for the agentic layer sitting on top of our APIs.

## Where this fits for me

I have been adding the pieces of the agentic stack to the [API Evangelist standards catalog](https://contracts.apievangelist.com) as they mature — the [Model Context Protocol](https://contracts.apievangelist.com/store/model-context-protocol) itself, [mcp.json](https://contracts.apievangelist.com/store/mcp-json), [Arazzo](https://contracts.apievangelist.com/store/arazzo) for workflows, the [agents.md](https://contracts.apievangelist.com/store/agents-md) family — because I want the description and governance layer for agents to be as boring and well-understood as it is for APIs. mcpdesc slots right in as [its own entry](https://contracts.apievangelist.com/store/mcpdesc). It is early, it is at v0.9.0, and the tooling ecosystem is still forming, but the shape is right and the intent is exactly what this moment needs.

When I score providers for [agent-readiness over on APIs.io](https://apis.io/agent-readiness), the difference between a server that just *runs* and a server that also *declares itself* is precisely the difference between something an agent can stumble through and something an organization can actually govern. A machine-readable description is how you cross that line. We spent years teaching API teams that a spec is not overhead, it is the foundation everything else is built on. That lesson does not get repealed because the consumer is now an agent instead of a developer — if anything, it gets more urgent, because agents move faster and forgive less. Go read [the mcpdesc format](https://mcpdesc.org/docs), describe the MCP server you already shipped, and start treating it like the contract it has been all along.
