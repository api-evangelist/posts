---
published: true
layout: post
title: 'Search Sixteen Years Of API Research From One Call'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/search-sixteen-years-of-api-research-from-one-call.png
date: 2026-10-30
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Search
  - Deprecation
  - Governance
---
This is the second story in my series on what each API Evangelist operation can do. [Yesterday I linted an OpenAPI](https://apievangelist.com/2026/10/29/lint-an-openapi-and-find-out-which-rules-decide-if-it-passes/). Today I'm going the other way, from checking a contract to finding out what's already known.

Say you've been asked to write your company's API deprecation policy. You could start from a blank page, or you could see what has already been written, what rules can enforce it, and who has done it well. The MCP tool for that is `search_api_evangelist`, and the REST operation behind it is `GET /search`. It searches the whole API Evangelist network at once, and it's free.

## What I gave it

One word, `deprecation`, first across everything and then narrowed by content type:

```json
{ "q": "deprecation" }
{ "q": "deprecation", "types": ["rules", "policies", "guidance"] }
{ "q": "deprecation", "types": ["posts"] }
```

## What came back

The search covers 17,140 records. One word narrowed that to 103, and the response counts them by type, so before reading a single result you can see the shape of what exists:

```text
posts       68     guidance     5     rules        2
standards    7     areas        3     lifecycle    2
policies     6     vocabulary   4     properties   2
strategies   2     tools        1     experiences  1
```

The top of the list was the concept itself: the [Deprecation lifecycle stage](https://lifecycle.apievangelist.com/store/deprecation/) and the [Deprecation topic area](https://deprecation.apievangelist.com). Filtering to governance content returned 13 records, and that's where this gets useful for my policy writer:

- **Guidance to start from.** The [Deprecation guidance](https://guidance.apievangelist.com/store/deprecation/) entry.
- **Policies to adapt.** [Deprecation Sunset Headers](https://policies.apievangelist.com/store/deprecation-sunset-headers/) and [API Exit and Migration Path](https://policies.apievangelist.com/store/api-exit-and-migration-path/), along with policies on retirement, breaking changes and migration guides.
- **A rule to enforce it.** [OpenAPI Operation Deprecated Sunset Info](https://rules.apievangelist.com/store/openapi-operation-deprecated-sunset-info/) is a lint rule, which connects straight back to yesterday's tool.

The posts filter returned 68 stories, ranging from [good examples of deprecation policies](https://apievangelist.com/2015/04/08/what-are-good-example-of-api-deprecation-policies/) in 2015, to [EVRYTHNG's deprecation page](https://apievangelist.com/2018/08/20/having-an-api-deprecation-page-like-evrythng-does/) in 2018, to [using OpenAPI Overlays for deprecation and migration](https://apievangelist.com/2026/08/14/openapi-overlays-for-deprecation-and-migration-choreography/) this August.

Search isn't perfect, and you should know where it gets weaker. When I searched tools, solutions, standards, papers, conversations and videos together, I got eight results. A few were clearly relevant, like Versioning Protocols and CHANGELOG.md. Others, like Mobile Connect and Product Backlog, were much looser matches. It also found no paper, conversation or video on this word. Narrow by type, and read the results rather than trusting the count. Those zeros only mean this word didn't match, so try `sunset` or `versioning` too.

## What that makes possible

- **Start a policy from what exists.** Going from one word to guidance, policies and an enforceable rule takes three calls, which is a better first draft than a blank page.
- **Size up a topic first.** The type counts tell you whether a subject is mostly writing, or whether it has also become policy and rules that can be enforced.
- **Give an agent a grounded source.** An agent writing governance documentation can search first, then fetch a full record and link to it, rather than relying on what it remembers.
- **Walk from idea to enforcement.** Use `types` to move from stories, to guidance, to policies, to the rules you can run in CI.

## Try it

It's free and needs no key. From any MCP client, connect to `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/research`) and call `search_api_evangelist`. Over REST:

```sh
curl 'https://api.apievangelist.com/v1/search?q=deprecation&types=rules,policies,guidance'
```

The operation is documented in the [API reference](https://developer.apievangelist.com/api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) explain how to connect a client. Pick the thing you've been asked to write next, search for it, and see how much of it you don't have to start from scratch.
