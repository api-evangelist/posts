---
published: true
layout: post
title: 'How The Specifications Relate'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/how-the-specifications-relate.png
date: 2026-11-09 18:00:00 +0000
author: Kin Lane
tags:
  - Standards
  - Specifications
  - OpenAPI
  - JSON Schema
  - MCP
  - A2A
  - OAuth
---
I get asked a version of the same question almost every week. Do I need OpenAPI or MCP? Is Arazzo a replacement for something? Where does A2A fit? The honest answer is that these specifications aren't competing for one job. Each one solves a piece of the problem, and each one leans on the others to do it. So I sat down and read their published schemas side by side, and put the result up on the standards site as [How the Specifications Relate](https://standards.apievangelist.com/relationships/).

It covers twenty specifications: OpenAPI, AsyncAPI, JSON Schema, Arazzo, Overlay, Spectral, APIs.json, MCP, A2A, GraphQL, gRPC, JSON-RPC, OAuth 2.0, OpenID Connect, Protected Resource Metadata, Dynamic Client Registration, Agent Skills, the AI Catalog, UCP and ORD. Here is the map.

[![A relationship map of twenty API specifications. JSON Schema sits in the middle with OpenAPI, AsyncAPI, Arazzo, MCP and UCP pointing at it. Arazzo calls into OpenAPI and AsyncAPI, Overlay patches OpenAPI, Spectral lints OpenAPI, AsyncAPI, Arazzo and JSON Schema. APIs.json, ORD and the AI Catalog index the others. MCP and A2A run over JSON-RPC, A2A also over gRPC, and OpenAPI, A2A and MCP authorize with OAuth 2.0, OpenID Connect, Protected Resource Metadata and Dynamic Client Registration, which all extend OAuth 2.0.](https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/how-the-specifications-relate-diagram.png)](https://standards.apievangelist.com/relationships/)

An arrow reads from the spec that holds the pointer to the spec it points at. On the [live page](https://standards.apievangelist.com/relationships/) you can select a specification to trace its connections and hover over any arrow to see the property it goes through.

## The rule I held myself to

Every line on the map names the property that proves it. Arazzo calls into OpenAPI through `sourceDescriptions`, `operationId` and `operationPath`. Overlay patches OpenAPI through `extends` and `actions[].target`. MCP embeds JSON Schema through `Tool.inputSchema` and `outputSchema`. If I couldn't point at a property in a published schema, the line doesn't go on this page. That's 52 connections, all of them something you can check yourself.

There are plenty of other relationships across the six hundred or so entries in the standards catalog, a practice and the standards that realize it, a profile and the standard it profiles. Those are claims I made by hand, not properties anyone can check, so they live on [their own page](https://standards.apievangelist.com/relationships/catalog/) at their own evidence tier. The two are never added together.

## Six jobs

The specifications sort into six roles, and the colors on the map follow them:

- **Describe.** OpenAPI, AsyncAPI and JSON Schema say what an interface is, its operations, messages and shapes.
- **Compose and change.** Arazzo sequences calls across descriptions into workflows. Overlay patches a description without editing it.
- **Govern and discover.** Spectral rules check descriptions. APIs.json, ORD and the AI Catalog index where everything lives.
- **Agent protocols.** MCP, A2A, Agent Skills and UCP put capabilities in front of models and other agents at runtime.
- **API protocols.** GraphQL, gRPC and JSON-RPC, the other ways to call an interface, and what the agent protocols run over.
- **Identity and authorization.** OAuth 2.0, OpenID Connect, Protected Resource Metadata and Dynamic Client Registration decide who may call it.

## What the map shows

**JSON Schema is the center of gravity.** OpenAPI, AsyncAPI, Arazzo, MCP and UCP all put their shapes in it, and Spectral can lint it and validate with it. When people argue about OpenAPI versus MCP, they're often arguing about two wrappers around the same schemas.

**MCP and A2A aren't new kinds of thing underneath.** Every MCP message is a JSON-RPC 2.0 request, notification or response, and all nine JSON-RPC member names appear in MCP's schema. A2A can run over JSON-RPC, gRPC or HTTP+JSON, and since 1.0 its normative definition is a Protocol Buffers file declaring a gRPC service. A2A's security schemes are modeled on OpenAPI's. MCP connects an agent to tools and data, and A2A connects an agent to other agents, which is why the line between them reads "complements."

**Some of the most important lines aren't in any spec.** Providers mark OpenAPI operations with extensions like `x-mcp` and `x-mcp-tool` so generators know which ones become MCP tools. Generators turn an Arazzo workflow into a single MCP tool, so an agent calls one tool instead of sequencing the calls itself, a point Frank Kilcommins, co-author of Arazzo, raised. No specification defines either of these. The tooling does it anyway, and the map draws those as "generates."

**Everything ends up at OAuth.** OpenAPI and A2A authorize with OAuth 2.0 and OpenID Connect through their security schemes. MCP servers have to publish Protected Resource Metadata naming their authorization servers, and Dynamic Client Registration is one of the ways an MCP client gets registered. OpenID Connect, Protected Resource Metadata and Dynamic Client Registration all extend OAuth 2.0. The agent protocols didn't invent a new way to decide who gets in. They pointed at the one we have.

**Three specs index the rest.** APIs.json, ORD and the AI Catalog each list other specs' documents as artifacts. Those are the light lines on the map. I'll point out one gap in my own spec here: APIs.json's schema has a property type for GraphQL but none for gRPC or JSON-RPC, so no line is drawn to either.

## Same job, different words, and same word, different job

The page goes past the map. A table lines up fourteen jobs most of these specs have to do, such as marking a version, saying where it runs, naming one unit of capability, and the property each spec uses for it. OpenAPI says `operationId`, MCP says `Tool.name`, A2A says `AgentSkill.id`, gRPC says the method name, and JSON-RPC says `method`. The eight specifications I added to the map today aren't in that table yet. Their cells haven't been read, and an empty cell would claim something I haven't checked.

A heatmap compares every property name each schema declares, pair by pair. Most of what's shared is the plain words of description. The overlap that matters is a few specific names like `securitySchemes`, `operationId` and `$ref`.

Then there are the false friends, the reason you can't match specs on names alone. `extends` in Overlay is the one document being patched, and in Spectral it's the rulesets being inherited. `then` in JSON Schema is the schema that applies when `if` validates, and in Spectral it's the function a rule runs. `skill` means an advertised capability on an A2A agent card, a folder of instructions in Agent Skills, and a `skill://` resource in MCP. Two of them are the exception: Arazzo borrowed `action` from AsyncAPI on purpose, and MCP's `method` is JSON-RPC's because MCP is JSON-RPC.

## Why I built it

The question I started with, do I need this one or that one, mostly goes away once you can see the map. You describe with OpenAPI, AsyncAPI and JSON Schema. You compose with Arazzo and adjust with Overlay. You govern with rules and index with APIs.json. You put it in front of agents with MCP and A2A, and you secure it with OAuth. A team that has done the work at the bottom of the stack gets most of the top for less effort, because so much of it is pointers back down.

[Spend some time with the map](https://standards.apievangelist.com/relationships/), click through the specifications, and if you see a connection I've missed, send me the property that proves it. That's the only kind of line this page accepts.
