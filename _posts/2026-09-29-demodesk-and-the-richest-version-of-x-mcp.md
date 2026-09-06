---
published: true
layout: post
title: 'Demodesk And The Richest Version Of x-mcp'
date: 2026-09-29
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Demodesk
  - MCP
  - Agents
  - APIs.io
  - APIs
---
This is the first of three posts about a single extension key. Three companies in my catalog use `x-mcp`. None of them knows the other two exist. All three mean something slightly different by it, and by Thursday I will have shown you a case where one company's document will be read as the exact opposite of what its author intended.

Demodesk is the richest of the three:

```
x-mcp:
  enabled: true
  toolName: users_get_me
  title: Get current user
```

An object with three fields. Whether the operation is exposed, what the tool is called, and a human-readable title.

Taken on its own, this is good design and I want to give it proper credit before I use it to make a point about fragmentation.

Demodesk separated three things that most of the implementations in this series conflate. `enabled` is the exposure decision. `toolName` is the identifier an agent calls — `users_get_me`, snake_case, resource-first, which reads correctly in a tool list and is clearly not just the operationId with a different capitalization. `title` is what a person sees when a client renders the tool for approval, and that is the field I find most thoughtful, because it acknowledges something the others do not: there is a human in this loop.

That last point deserves more attention than it gets. When an agent proposes to call a tool, most clients show the user what is about to happen and wait. What gets shown is the tool's name and whatever description is available. `users_get_me` is fine for a model and poor for a person squinting at a confirmation dialog. "Get current user" is what a person needs. Demodesk provided both, in one object, because they are two different audiences for the same operation.

Compare that to the alternatives I have covered. Windmill and Algolia use a bare boolean, so the name has to be derived. Wistia has separate keys for name and description but no title-for-humans distinction. Zoho groups paths without naming tools. Demodesk's single object covers exposure, machine identity and human identity, which is arguably the most complete minimal design of the lot.

So: three fields, well-chosen, doing real work.

And here is the problem. Demodesk chose the most obvious possible key name for this — `x-mcp` — which is exactly what a thoughtful engineer would reach for. So did two other companies. And because `x-mcp` is the shortest, most natural spelling in this space, it is also the one the *next* fifty companies will reach for.

Right now the situation is small enough to describe in a paragraph. Demodesk's `x-mcp` is an object with `enabled`, `toolName` and `title`. Eon's, which I will write about tomorrow, is the boolean `true`. Ripio's is an object with only `enabled`, and Ripio uses it to turn things *off*. Across my catalog the key resolves as an object 54 times and a boolean 17 times.

A tool encountering `x-mcp` therefore has to type-check before it can do anything, and then has to handle two structurally different value types that happen to overlap in meaning without being interchangeable. That is already a mess at three implementations. At thirty it is permanent.

I am singling out Demodesk to carry this argument for a specific reason: their design is the best of the three, and best designs should win, and there is currently no mechanism by which that could possibly happen. Nobody can find Demodesk's version. It is in an OpenAPI document, in production, in public, and it is invisible to every engineer at every company who is about to solve the same problem this quarter.

The asks.

**Register `x-mcp` with this shape.** Demodesk has the most developed version and the strongest claim to define it. The entry should specify the object form with `enabled`, `toolName` and `title`, and it should say explicitly that boolean values are a known variant in the wild that readers must handle. That second sentence is not a concession — it is the single most useful thing the entry could contain, because it tells every future parser author about a real hazard they would otherwise discover in production.

**Sponsor the OpenAPI Initiative.** Demodesk is not a large company and this is the lightest version of the ask in the series. But the registry that would have prevented this — that would have let Demodesk find Eon and Ripio, or let them find Demodesk — is maintained by the Initiative and runs on member support. The companies who have been hurt by its absence are the ones with the clearest reason to fund it.

**Get involved.** Demodesk thought carefully about the human-in-the-loop rendering problem and put a `title` field in the contract for it. Almost nobody else in my catalog did. That is a small, sharp, correct observation about how agent tools are actually used, and it belongs in the conversation about how OpenAPI describes agent-facing surfaces.

Tomorrow: Eon, who wrote `x-mcp: true`, and who also uses an SDK generator's vocabulary I covered earlier in this series — a document with two undocumented dialects in it at once.
