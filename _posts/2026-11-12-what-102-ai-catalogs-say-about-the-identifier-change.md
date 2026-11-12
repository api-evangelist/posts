---
published: true
layout: post
title: 'What 102 AI Catalogs Say About The Identifier Change'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-102-ai-catalogs-say-about-the-identifier-change.png
date: 2026-11-12 17:37:00 +0000
author: Kin Lane
tags:
  - AI Catalog
  - Agents
  - Discovery
  - Standards
  - Identifiers
---
The [AI Catalog](https://github.com/Agent-Card/ai-catalog) working group is finalizing version 0.9. The AI Catalog is the JSON document a host publishes at `/.well-known/ai-catalog.json`, listing its MCP servers, A2A agents, agent skills and other AI artifacts. The last open question was what an entry's identifier looks like, and it has been settled twice in two weeks. First it was a `#kind` suffix. Then `#` turned out to be a URI fragment, so it became `;kind`. This week the group moved to Jonathan Hefner's proposal in [pull request #138](https://github.com/Agent-Card/ai-catalog/pull/138), which uses the URN's own colons:

```
urn:air:{publisher}:{name}[:{kind}]

urn:air:acme.com:code-review
urn:air:acme.com:engineering/code-review
urn:air:acme.com:engineering/code-review:skill
```

The publisher comes first, then a name the publisher can namespace however it likes, then an optional kind such as `skill`, `mcp` or `a2a`. A kind lets one name cover the same capability served several ways. It is a cleaner grammar than what came before, and I support it. I also wanted to know what it does to the catalogs that are already out there, because APIs.io collects them.

## What Is Already Published

[APIs.io harvests the AI Catalog](https://apis.io/ard/) from every provider it profiles that serves one. Today that is 102 catalogs with 487 entries between them. Here is how their identifiers are shaped:

| Identifier shape | Entries | Publishers |
|---|---|---|
| `urn:air:{publisher}:{namespace}:{name}` | 462 | 98 |
| `urn:air:{publisher}:{name}` | 4 | 2 |
| `urn:air:` with six segments | 4 | 1 |
| `urn:ai:`, a different namespace entirely | 17 | 4 |

Almost everyone uses five segments, because that is what the earlier text recommended. Under the new grammar, a five-segment identifier is still valid. It just means something different. The old namespace becomes the name, and the old name becomes the kind.

So `urn:air:developer.civitai.com:docs:llms-txt` used to mean "the `llms-txt` artifact in the `docs` namespace." Read with the 0.9 grammar, it means "the artifact named `docs`, in kind `llms-txt`." Nothing will reject it, and nothing will warn. A consumer will just read it wrong.

## Where It Bites

The clearest symptom is names that collapse together. In 41 of the 102 catalogs, 205 entries would end up sharing a name with at least one other entry and differ only by their supposed kind. ClickHouse publishes nine skills as `urn:air:clickhouse.com:skill:{name}`. Under 0.9, all nine are named `skill`.

The most interesting finding is about what people put in that namespace slot. The most common values are `skill` (88 entries), `api` (79), `mcp` (59), `server` (28) and `docs` (27). Publishers were already using the namespace to say what kind of thing an entry is, but they put it *first*. The 0.9 grammar puts the kind *last*. People reached for a kind before the specification gave them one, and they put it in the opposite place.

## We Had The Same Problem

APIs.io's own catalog had it. It listed twenty skills as `urn:air:apis.io:skill:find-api` and so on, which under 0.9 is twenty entries named `skill`. I have moved it to the new form:

| Before | After |
|---|---|
| `urn:air:apis.io:mcp:catalog` | `urn:air:apis.io:catalog:mcp` |
| `urn:air:apis.io:a2a:catalog` | `urn:air:apis.io:catalog:a2a` |
| `urn:air:apis.io:api:v1` | `urn:air:apis.io:catalog:openapi` |
| `urn:air:apis.io:skill:find-api` | `urn:air:apis.io:find-api:skill` |

The MCP server, the A2A card and the OpenAPI are now one name, `catalog`, in three kinds. That is exactly what the kind was designed for. Each skill keeps its own name, with the kind `skill`.

API Evangelist did not publish a catalog at all, which is not a good look for someone writing about them. It now has one at [`apievangelist.com/.well-known/ai-catalog.json`](https://apievangelist.com/.well-known/ai-catalog.json), written in the 0.9 form from the start. It lists the MCP server, A2A card and OpenAPI as `urn:air:apievangelist.com:research:{mcp|a2a|openapi}`, plus the eight agent skills and llms.txt.

## If You Publish One

The migration is mechanical. If your identifier is `urn:air:you.com:{namespace}:{name}`, decide which of the two words is the thing and which is what kind of thing it is:

- **If the namespace was a kind** (`skill`, `mcp`, `a2a`, `agent`), swap them: `urn:air:you.com:{name}:{kind}`.
- **If the namespace really was a namespace**, fold it into the name: `urn:air:you.com:{namespace}/{name}`. A slash is fine, and so is a dot. The 0.9 text has no opinion on how you namespace inside the name.

Do it once 0.9 is tagged, and do it before anyone builds an index that keys on your old identifiers. Once it ships, I plan to grade the catalogs APIs.io harvests against 0.9, so the [/ard/ section](https://apis.io/ard/) shows who has moved.
