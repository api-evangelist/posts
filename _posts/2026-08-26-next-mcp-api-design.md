---
published: true
layout: post
title: Next MCP API Design
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/next-mcp-api-design.png
date: 2026-08-26
author: Kin Lane
tags:
  - MCP
  - API Design
  - Agents
  - Hypermedia
  - APIs
  - Discovery
  - AI
  - Monetization
---
I have been using the MCP server for [APIs.io](https://apis.io), familiarizing myself with the nuance of each of the API operations I have extended as last mile MCP tools. I have been putting myself in the heads of my two target user groups and working with the APIs.io MCP server from their perspective. While I am using it, I know my API, so I know what is next. But as I think about what my consumers will experience, there is no way for them to know what is next without spending time with my docs. I want them to have what is next at their fingertips.

So I have been playing around with possible ways that I can guide my users while they engage with my MCP and APIs. I started with the default properties of MCP, using [prompts](https://modelcontextprotocol.io/docs/concepts/prompts), which are more user controlled, and provide options for when the user asks for them. I have been working to enhance and expand the prompts available to make them as relevant as possible to how both of my target user groups will want to query. I like prompts. I feel like we should have added "saved queries" to APIs and the OpenAPI specification a long time ago. It is one of the few genuinely interesting design patterns that has come with MCP, and one that I think contributes in a meaningful way to the conversation.

Prompts do not get me where I want to go. The user has to know to ask. Which is great, but I want to help guide the users who aren't in the know. When it comes to API design, and these types of affordances, I think about hypermedia, and I questioned whether or not I should be using [HAL](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal) or some other hypermedia pattern. The problem with hypermedia is that it uses link relations which point to another resource, and I am primarily dealing in tools, resources, and prompts — which shifts the conversation a bit. I think what hypermedia offered is the right concept, although it is the wrong mechanism, designed for a web or desktop client built on top of a RESTful API.

After pondering prompts and hypermedia I moved to a new concept I am simply calling "next". I have added a `next` property to my responses to provide a label, but also the tool and the arguments that build on top of the response you are already holding. Here is what comes back today alongside a single API record:

```json
"next": [
  {
    "id": "openapi",
    "label": "An OpenAPI reference is published — include=[\"content\"] inlines the spec body",
    "tool": "get_openapi",
    "args": { "aid": "stripe:stripe-accounts-api", "include": ["content"] },
    "cost": "free"
  },
  {
    "id": "artifacts",
    "label": "7 artifact types on this API — Documentation, APIReference, OpenAPI, 4 more",
    "tool": "get_api_artifacts",
    "args": { "aid": "stripe:stripe-accounts-api" },
    "cost": "free"
  },
  {
    "id": "similar",
    "label": "Tagged Account — other APIs sharing it",
    "tool": "find_similar_apis",
    "args": { "aid": "stripe:stripe-accounts-api" },
    "cost": "free"
  },
  {
    "id": "provider",
    "label": "Published by Stripe — its rating, artifacts and other APIs",
    "tool": "get_provider",
    "args": { "slug": "stripe" },
    "cost": "free"
  }
]
```

I want to keep the conversation going with relevant next steps. It is kind of like hypermedia, but more dynamic than link relations, and it is working to take advantage of the probabilistic nature of MCP consumption. A model is not a hypermedia client. It wants a tool name and complete arguments, not a URL and a link relation, so this is deliberately not `_links`. Every step is computed from the record in hand rather than pulled from a static menu, because the number in the label is the actual value — "nine of fifteen dimensions are false" is actionable, while "you can check agent readiness" is just documentation, and the number is the only part of that sentence the client could not have generated itself. Empty branches get suppressed, the list is capped and ranked so it does not burn context, and there is always a terminal state — an empty `next` with a reason why, because a missing property reads to a model like the server forgot, and it will keep poking at it. I also mirror the whole block into the text response, because models read text reliably and skip nested JSON.

Within specific MCP tools, which are driven by API resources, I am currently focusing on drilling deeper into sub-resources and related tool opportunities. As part of this I am also evaluating free, [pro, and business tier](https://apis.io/developer/plans) next steps, which work to help me upsell as well as guide the consumers of the APIs.io APIs and MCP servers. Every step carries what it costs, so an agent knows before it calls whether the next move is included or behind the paid tier. The other discipline this has forced on me is honesty about what each tool actually returns. I had an affordance offering "see what was checked" against a tool that returns provenance and a legend and has never returned check-level results, which meant I was pointing a caller at a tool that could not honor the sentence I used to sell it. Now every tool that can be offered has to declare in one table what it returns, and a test asserts that no label claims a capability its target does not list.

I am just getting started with next MCP API design. I am actively putting on the hats of my consumers and exploring my API and MCP servers to see what is possible and what is needed. I am working through industries and tags, having a conversation with the APIs returned by the APIs.io API and MCP servers, and pushing for a richer next experience. I am working my way through all of the resources and tools and adding to the existing parameters, prompts, and resources available, offering usually about three or four next opportunities for an LLM to work with when receiving any response from APIs.io. We will see what is next for next MCP API design. I may hit some dead ends. But so far it is proving to be a pretty rich way of continuing the conversation with Claude about the APIs I make available via my search engine.
