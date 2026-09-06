---
published: true
layout: post
title: 'Algolia Is The Other Half Of The x-mcp-tool Collision'
date: 2026-09-21
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Algolia
  - MCP
  - Agents
  - APIs.io
  - APIs
---
Last week I wrote about Windmill's use of `x-mcp-tool` and mentioned that four providers in my catalog use that key with two incompatible value types. Algolia is one of the four, and their documents are the cleanest illustration of why this needs settling.

```
x-mcp-tool: true
tags:
  - monitoring
security: []
```

A boolean, on an operation, marking it as exposed to agents. Exactly what Windmill does, in exactly the same position, with exactly the same meaning. Two companies, no coordination, identical design.

That is the encouraging half of the story and I want to lead with it, because I have spent this series pointing at fragmentation. Here are two independent engineering teams who reached the same conclusion about how to mark an operation as agent-exposed, and landed on the same spelling and the same shape. That is convergence. It is evidence that there is an obvious right answer here and that people find it.

The discouraging half is that it is convergence nobody can see. Neither company can point at the other. There is no registry entry. And two providers away, the same key holds a string instead of a boolean — which means the convergence is real but partial, and the partial version is the dangerous kind, because a tool author who samples two documents and concludes "it is a boolean" will be wrong a third of the time.

There is something else in Algolia's documents worth pulling out, because it says something about how these vocabularies accumulate.

Algolia also uses `x-tagGroups`. That is Redocly's key, from the first post in this series — the one that organizes a flat tag list into navigable sections. So Algolia's OpenAPI documents carry a documentation platform's vocabulary from one vendor and an agent-exposure vocabulary of their own devising, side by side, and exactly one of those two has a definition anybody can look up. It is `x-tagGroups`, and only because Redocly happened to register a *different* key that led me to go looking.

That is what a real, modern, well-maintained API contract looks like now: layers of vendor vocabulary from different eras and different suppliers, most of it undocumented, all of it being read by more tools every month.

Algolia is a good company to make this point about, and not as a criticism. Algolia's whole product is retrieval — taking a large corpus and making the right small part of it findable. They have thought harder than most companies about what a machine needs in order to select correctly from many options, which is precisely the problem `x-mcp-tool` addresses at the API level. When Algolia marks an operation as agent-exposed, that decision is being made by people whose day job is relevance.

I would like to know their reasoning. I cannot, because the key has no published definition. That is the entire cost, expressed as plainly as I can put it: a company with unusually good instincts about a hard problem made a set of decisions in a public file, and nobody can learn from them.

The asks.

**Register `x-mcp-tool` — and coordinate with Windmill while doing it.** This is the one place in the series where I would ask two companies to talk to each other before sending the pull request. Algolia and Windmill already agree on the design; they simply do not know it. A single registry entry that both companies point at settles the boolean-versus-string question in the ecosystem's favour and does it while there are four implementations rather than four hundred. If that feels like more coordination than a registry entry warrants, note that the entry itself is the coordination mechanism — it is what talking to each other looks like when you cannot find each other.

**Sponsor the OpenAPI Initiative.** Algolia publishes a large, well-maintained, genuinely good set of OpenAPI documents. The company clearly takes API description seriously — the presence of tag groups, clean tagging, and considered agent exposure all say so. That level of investment in the format pairs naturally with supporting the body that maintains it.

**Get involved — bring the selection problem.** Here is the thing I would most want from Algolia in a specification conversation. Everyone building agent tooling is discovering that tool selection is a retrieval problem: too many candidates, ambiguous descriptions, a model picking wrong. The industry is currently solving it with prompt engineering and hope. Algolia has fifteen years of institutional knowledge about ranking and disambiguation, and a live implementation of agent exposure in their own contracts. The overlap between "what makes a search result selectable" and "what makes a tool selectable" is enormous and almost nobody has connected the two in public.

Tomorrow, Constant Contact, where I found something inside an OpenAPI document that I did not expect to find in one at all.
