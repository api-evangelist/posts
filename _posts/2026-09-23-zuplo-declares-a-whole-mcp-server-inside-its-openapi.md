---
published: true
layout: post
title: 'Zuplo Declares A Whole MCP Server Inside Its OpenAPI'
date: 2026-09-23
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Zuplo
  - MCP
  - Agents
  - APIs.io
  - APIs
---
Every agent extension I have written about in this series marks something that already exists in the document. Wistia names an operation for agents. Windmill flags one. Zoho groups paths. Zuplo does something structurally different:

```
x-mcp-server:
  name: zuplo-docs
  version: 1.0.0
  tools:
    - name: search-zuplo-docs
```

That is not an annotation on an operation. That is a declaration of a separate thing — a named, versioned MCP server with its own tool list — announced from inside an OpenAPI document. It appears at both the `info` level and on an operation, which suggests it is doing double duty as a document-level statement and a per-operation binding.

I find this the most conceptually interesting key in the entire second half of the series, because it is the only one that treats the OpenAPI document as a place to *point at* an agent interface rather than a place to *describe* one.

Those are two genuinely different strategies and the industry has not picked one.

The first strategy — everyone else in this series — says the MCP surface is a projection of the REST API. You have operations, you annotate which ones become tools, you shape them, and the agent interface is derived. The contract stays singular. Everything an agent can do is something an HTTP client can do.

The second strategy — Zuplo's — says the MCP server is its own artifact with its own identity, name, version and tools, and the OpenAPI document's job is to tell you it exists. Note that `search-zuplo-docs` is not an operation in a REST API. It is a documentation search tool. It does not correspond to an endpoint at all; it corresponds to a capability that only makes sense to an agent.

The second strategy is more honest about where things are heading, and Zuplo being a gateway company is exactly why they got there first.

A gateway sits in front of many APIs. It is already in the business of composing, transforming and re-exposing other people's contracts. So when a gateway thinks about agents, it does not naturally think "annotate my operations" — it thinks "compose a surface," and that surface has its own name and version because it is a first-class thing the gateway produces. The `version: 1.0.0` field is the tell. Nobody versions a projection. You version an artifact you intend to evolve and maintain a compatibility story for.

There is a real, immediate discovery problem this addresses, and it is one I care about a lot given what I do. Right now, if you have a company's OpenAPI document, you have no way to learn that the company also runs an MCP server. Those two facts live in unconnected places — a spec file, and a paragraph on a docs page, and maybe a `.well-known` entry if you are very lucky. Every catalog, including mine, has to guess or crawl or be told. A key inside the contract that names the MCP server and its tools closes that gap directly.

The catch, and it is the reason I am writing this rather than just praising it, is that `x-mcp-server` appears in exactly two providers in my catalog — Zuplo and one other, unrelated, doing something similar. Two implementations, one spelling, no definition. This is `x-mcp-tool` at an earlier stage of the same disease, and unlike `x-mcp-tool` it is carrying much more structure, which means far more surface area to diverge on. Is `tools` a list of names or of objects? Is `version` the server's version or the protocol's? Is a document-level declaration different from an operation-level one? Two implementations answering those differently is how you get two dialects.

The asks.

**Register `x-mcp-server`, and register the shape, not just the name.** This is the one key in the series where the description needs to do real work. Say what `tools` contains. Say what `version` versions. Say what it means at `info` level versus on an operation. A bare one-line entry would not be enough here, because the value is structured enough that two readers would build incompatible parsers from the same sentence.

**Sponsor the OpenAPI Initiative.** Zuplo is a gateway company whose product consumes and produces OpenAPI documents as its core loop. It is the same argument I made for AWS, at a scale where the membership is a smaller cheque and the visibility gain is larger.

**Get involved — and bring the composition question.** Here is what I actually want from Zuplo in a specification conversation. Everyone else is treating the agent surface as annotations on a REST contract. Zuplo is treating it as a separate composed artifact that the contract references. Those two models will not both survive, and the choice between them is going to shape how APIs are described for the next decade. A gateway company that composes surfaces for a living has the clearest view of why the second model is necessary — that agent capabilities do not map one-to-one onto endpoints, that some tools have no endpoint at all, and that the thing you expose to an agent has a lifecycle of its own. That argument needs making in public, and Zuplo is positioned to make it better than anyone I have looked at.

Tomorrow, Secureframe, where the agent-facing description is teaching a multi-step workflow.
