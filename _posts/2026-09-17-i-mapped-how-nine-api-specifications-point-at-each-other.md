---
published: true
layout: post
title: 'I Mapped How Nine API Specifications Point At Each Other'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-mapped-how-nine-api-specifications-point-at-each-other.png
date: 2026-09-17
author: Kin Lane
tags:
  - Standards
  - Specifications
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - Arazzo
  - Overlays
  - Spectral
  - APIs.json
  - MCP
  - A2A
---
I get asked some version of the same question every week. How does Arazzo relate to OpenAPI? Do I need AsyncAPI if I have MCP? Where does Spectral fit? Is A2A competing with MCP? I usually answer with my hands, drawing boxes and arrows in the air. So this week I stopped waving and read the schemas. I put nine specifications side by side and published what I found as a map on the standards site: [How the Specifications Relate](https://standards.apievangelist.com/relationships/).

The nine are [OpenAPI](https://standards.apievangelist.com/store/openapi/), [AsyncAPI](https://standards.apievangelist.com/store/asyncapi/), [JSON Schema](https://standards.apievangelist.com/store/json-schema/), [Arazzo](https://standards.apievangelist.com/store/arazzo/), [Overlay](https://standards.apievangelist.com/store/openapi-overlays/), [Spectral](https://standards.apievangelist.com/store/spectral/), [APIs.json](https://standards.apievangelist.com/store/apis-json/), [MCP](https://standards.apievangelist.com/store/model-context-protocol/) and [A2A](https://standards.apievangelist.com/store/agent2agent/). I set one rule for myself: every arrow on the map has to name the property in the schema that creates the connection. Nothing goes on the map just because two things feel related.

## What points at what

With that rule in place, the map turns out to be simple, and it sorts the nine into four jobs. OpenAPI, AsyncAPI and JSON Schema describe interfaces. Arazzo and Overlay build on a description, either by sequencing its calls or by patching it. Spectral and APIs.json govern and index descriptions. MCP and A2A put capabilities in front of models and other agents at runtime.

JSON Schema is the floor everything stands on. Four of the others carry it inside themselves. An OpenAPI 3.1 Schema Object is a JSON Schema 2020-12 dialect. AsyncAPI message payloads default to a JSON Schema superset. Arazzo workflow inputs are JSON Schema. MCP tool `inputSchema` and `outputSchema` are JSON Schema 2020-12 objects. If you are wondering where to invest your schema work, this is the answer. It gets reused by everything above it.

Arazzo calls into OpenAPI through `sourceDescriptions`, `operationId` and `operationPath`. As of 1.1 it also calls into AsyncAPI through `channelPath`, `action` and `correlationId`. Overlay patches OpenAPI through `extends` and a JSONPath `target`. Because that target is just JSONPath, it will patch any JSON or YAML document you point it at. Spectral lints four of the others, and its own `formats` list names them: OpenAPI, AsyncAPI, Arazzo and JSON Schema. APIs.json touches all eight, because its job is to point at every machine-readable artifact an organization publishes.

The one that surprised me was A2A. Its security scheme is explicitly modeled on the OpenAPI 3.2 Security Scheme Object: API key, HTTP, OAuth 2, OpenID Connect and mutual TLS. A2A didn't invent its own auth vocabulary. It borrowed ours, and I think that was the right call.

## The lines nobody standardized

Two arrows on the map are defined by no specification at all, and both went up after the first version. The first is that OpenAPI generates MCP. No spec says so. The evidence is in the OpenAPI extensions we have been profiling at [extensions.apievangelist.com](https://extensions.apievangelist.com/).

Twenty-two of those extensions have `mcp` in their name and exist to tell a generator which operations become MCP tools, what to call them and how to describe them. They show up in 90 OpenAPI documents from 16 providers. Two of those providers are us, API Evangelist and APIs.io, so call it 14 from the outside. `x-mcp` is used by five providers and `x-mcp-tool` by four. [Wistia built nine of its own](https://apievangelist.com/2026/09/16/wistia-built-the-best-agent-vocabulary-nobody-knows-about/). And as I wrote this morning, [Windmill and others already collide on the same spelling](https://apievangelist.com/2026/09/17/windmill-and-the-first-collision-in-the-mcp-vocabulary/) while meaning different things by it.

Frank Kilcommins, who co-authored Arazzo, read the first version of the map and told me the same thing is happening one layer up: Arazzo has MCP generators out in the wild too. He is right, and it is now a second line on the map. I went looking and verified five — [wso2/arazzo-mcp-generator](https://github.com/wso2/arazzo-mcp-generator), [jentic/arazzo-engine](https://github.com/jentic/arazzo-engine) behind Jentic's own MCP server, [strefethen/arazzo-cli](https://github.com/strefethen/arazzo-cli), [Bump.sh](https://docs.bump.sh/help/mcp-servers/specification-support/arazzo-support/), and [HimethW/arazzo-mcp-gen](https://github.com/HimethW/arazzo-mcp-gen). What they generate is more interesting than the OpenAPI case. A workflow becomes a single tool, so the agent calls one thing instead of sequencing five calls and getting the order wrong. The sequencing was already solved, in a document somebody wrote down on purpose.

That is what an unstandardized relationship looks like. The demand is obvious. Companies want to turn the contract they already have into the tool list an agent needs. But every one of them is writing that bridge by hand, in their own dialect. Select OpenAPI, Arazzo or MCP on the map and you get the evidence behind each line, every extension and generator linked.

## Same job, different words

The second view on the page is a matrix of fourteen jobs most of these specifications have to do, with the property each one uses to do it. Take "the list of things a consumer can actually do or use." In OpenAPI that is `paths` and operations. In AsyncAPI it is `channels` and `operations`, in Arazzo `workflows` and `steps`, in Overlay `actions`, in Spectral `rules`, and in APIs.json `apis`. MCP has `tools`, `resources` and `prompts`. A2A has `skills`. It is the same idea spelled nine ways.

The empty cells are just as interesting. MCP has no security properties in its message schema because its authorization lives at the transport, in OAuth 2.1. Spectral has no version marker of its own. OpenAPI has nothing for selecting inside a document, while Overlay, Spectral and Arazzo all reach for JSONPath to do it.

## How much vocabulary they share

The third view counts. I pulled every property name each schema declares, anywhere in its object tree, and compared every pair. OpenAPI and AsyncAPI share 42 names, far more than any other pair, which makes sense for two specs that grew up together. AsyncAPI and A2A come next with 22, and OpenAPI and A2A share 20. Those two pairs are almost entirely the borrowed OpenAPI security vocabulary: `authorizationUrl`, `tokenUrl`, `flows`, `scopes`, `bearerFormat`. MCP has the largest vocabulary of the nine, at 134 property names.

Two things kept those counts honest. AsyncAPI's published schema bundles the JSON Schema, OpenAPI and Avro meta-schemas plus its protocol bindings. Counting all of it credits AsyncAPI with 295 properties that are mostly not its own, so I excluded them and got 73. I also skipped values sitting under `examples`, because sample payloads are not declarations.

## Same word, different meaning

A shared name is a lead, not proof of a shared meaning, and the last section of the page is there to make that point. `extends` in Overlay is the one document an overlay patches. In Spectral it is the rulesets you inherit from. `then` in JSON Schema is a conditional branch, and in Spectral it is the function a rule runs. `capabilities` in MCP means protocol features, and in A2A it means streaming and push notifications. `overlays` in APIs.json means other APIs.json files to lay over this one, which is not the Overlay specification at all.

The one exception is `action`. Arazzo took it from AsyncAPI on purpose, send and receive, meaning included. That is what reuse is supposed to look like, and it is rarer than it should be.

## Why I built it this way

The page reads the current published schemas: OpenAPI 3.1, AsyncAPI 3.0, JSON Schema 2020-12, Arazzo 1.1, Overlay 1.1, MCP 2026-07-28, the A2A v1 protobuf, and the Spectral and APIs.json schemas on [schema.apievangelist.com](https://schema.apievangelist.com/). The counts come from a script that reads those schemas directly, so when a spec ships a new version, the numbers get regenerated instead of remembered. The relationships and the matrix are curated by hand, and every entry names the property that proves it.

This is the map I have been drawing in the air for years, and I want people to argue with it. If I am missing an arrow, or I have a cell wrong, tell me which property proves it and I will fix it. That is the only kind of correction the map accepts, and it is the same standard I think all of us should hold these specifications to.
