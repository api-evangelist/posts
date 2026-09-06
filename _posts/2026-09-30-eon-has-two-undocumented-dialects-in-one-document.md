---
published: true
layout: post
title: 'Eon Has Two Undocumented Dialects In One Document'
date: 2026-09-30
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Eon
  - MCP
  - Agents
  - APIs.io
  - APIs
---
Yesterday I showed you Demodesk's `x-mcp`, an object with `enabled`, `toolName` and `title`. Here is Eon's, from the same key, in the same position on an operation:

```
x-mcp: true
x-internal: false
x-data-access:
  excluded: true
```

A boolean. And look at what it is sitting next to.

`x-internal` is Redocly's — the visibility key I wrote about in the very first post of this series, used by sixty-nine providers, unregistered. `x-data-access` is Eon's own. And Eon's documents also carry `x-fern-` keys, because Eon uses Fern to generate their SDKs, which I covered two weeks ago. So a single Eon OpenAPI operation can carry vocabulary from a documentation platform, an SDK generator, and two of Eon's own inventions, and precisely none of those four things has an entry in the OpenAPI Extension Registry.

That is what I actually want this post to be about, because it is the more common situation than the collision, and less remarked on.

We talk about vendor extensions as though each one is a discrete choice a company makes. In practice a modern OpenAPI document is sedimentary. Layers arrive from different suppliers at different times for different reasons. Fern's keys arrived because Eon wanted SDKs. Redocly's `x-internal` arrived because somebody needed to hide an operation, in a tool that understood that key. `x-mcp` and `x-data-access` were written by Eon's own engineers, recently, for agents. Nobody sat down and designed the resulting vocabulary. It accumulated.

And every layer is legible to exactly one reader — the tool that put it there — while the document as a whole is fetched by everything.

Now, the boolean.

Eon's `x-mcp: true` is the most defensible possible reading of that key name. `x-mcp` is a flag. The operation participates in MCP. True or false. If you were designing this from scratch with no knowledge of anyone else's work — which is precisely Eon's situation — a boolean is what you would write, and it is what Windmill and Algolia wrote for `x-mcp-tool` too. The boolean is the natural form.

Demodesk's object is the more capable form. Eon's boolean is the more obvious one. Both are reasonable, and that is the problem: this is not a case where one company got it wrong. It is a case where two companies got it right by different criteria and the ecosystem now has to live with both.

There is also `x-data-access: {excluded: true}` sitting there, which I cannot fully interpret and which is not documented anywhere I can reach. It appears to mark an operation as excluded from some data-access surface — plausibly a different exposure axis than the MCP one, plausibly related to how Eon handles customer data boundaries. That is a guess. I am doing exactly what I have spent this series saying tools should not have to do: inferring meaning from field names and hoping.

I want to be straightforward about what I am and am not saying here. Eon is a young company shipping quickly, and there is nothing wrong with inventing a key when you need one. The alternative — waiting for a standard before you can mark an operation — would be worse, and I would never argue for it. Extensions exist precisely so that people can move faster than committees. That mechanism is working as designed.

What is not working is the part after that. The specification gives you a way to invent vocabulary and no way to publish it. So every company invents in private, and the good ideas — Demodesk's `title` field, Wistia's idempotency justifications, MoEngage's dual exposure, Pipedrive's per-operation cost — stay private too. Innovation without publication is just fragmentation with extra steps.

The asks.

**Register `x-mcp` and `x-data-access`.** Eon's boolean is one of the two live shapes and the entry should say so plainly, ideally pointing at the object form as the alternative. For `x-data-access`, the ask is simpler and I would make it even if nobody ever registered another key: write down what it means somewhere I can find. Right now it is a term in a public contract with no definition anywhere in the world.

**Sponsor the OpenAPI Initiative.** Eon is early-stage and this is the lightest ask in the series. But Eon's document already depends on OpenAPI three ways over — Fern reads it, documentation renders from it, agents consume it. That is a lot of load on a format the company has no relationship with.

**Get involved — and the specific value here is the layering.** Eon's document is a good specimen of what real API contracts look like now: several vendors' vocabularies plus your own, interleaved, in one file. That reality is not well represented in specification conversations, which tend to treat extensions as a single company's choice. Somebody should describe what it is like to own a document that four different tools are writing into, and Eon is a clean example.

Tomorrow, the last post: Ripio, whose `x-mcp` says `enabled: false`, and why that will be read as `true`.
