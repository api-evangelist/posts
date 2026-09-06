---
published: true
layout: post
title: 'Windmill And The First Collision In The MCP Vocabulary'
date: 2026-09-17
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Windmill
  - MCP
  - Agents
  - APIs.io
  - APIs
---
Yesterday I wrote about Wistia's nine-key agent vocabulary, which is careful, coherent, and used by exactly one company. Today, Windmill — six keys, also coherent, and the first place in this series where two companies independently reached for the same spelling and meant different things by it.

Windmill's set is `x-mcp-tool`, `x-mcp-instructions`, `x-mcp-tool-include-fields`, `x-mcp-tool-opaque-fields`, `x-mcp-tool-include-query-params` and `x-mcp-required-fields`.

The design is straightforward and I think correct. `x-mcp-tool: true` sits on an operation and marks it as exposed to agents. Everything else is exclusion and shaping: which response fields to include, which to treat as opaque handles the model should pass around but not interpret, which query parameters to surface, which fields are mandatory. `x-mcp-instructions` carries guidance at a higher level.

The instinct behind that is the right one, and it is the same instinct Wistia had from a different angle. A REST API's operation list is not a good tool list. It is too long, too granular, full of things that only make sense in sequence, and full of response fields that eat a model's context for no benefit. `x-mcp-tool-opaque-fields` is the sharpest key in the set — it identifies the values that exist to be handed back to the API later and carry no meaning to the caller. Cursors, tokens, internal IDs. Telling a model "pass this through and do not reason about it" is a real optimization and a real safety measure, because a model that tries to interpret an opaque cursor will eventually try to construct one.

Now the collision.

`x-mcp-tool` appears in four providers in my catalog: Windmill, Algolia, and two of my own properties. In Windmill's documents and in Algolia's, the value is the boolean `true`. In mine, the value is a string — the tool's name. Across the catalog the key resolves as boolean 63 times and as string 84 times.

So the same key, in the same position on an operation, is a flag in two companies' documents and an identifier in two others'. Any tool that reads `x-mcp-tool` has to type-check before it can do anything, and any tool that assumes one shape will silently mishandle the other. A string is truthy, so a reader expecting a boolean will treat my documents correctly by accident. A reader expecting a string will get `true` from Windmill and Algolia and either crash or name a tool "true."

I want to be careful about the tone here, because I am one of the four and I have no standing to complain. Nobody did anything wrong. `x-mcp-tool` is the obvious spelling. It is what any reasonable person would reach for. Four groups reached for it independently within about a year, and two shapes fell out, and there was no mechanism anywhere that would have told any of us the others existed.

That is the whole argument for the registry, sitting in one key.

It is worth being precise about how small the window is to fix this. Four providers is nothing. If `x-mcp-tool` had a registry entry today, with one shape written down, the other implementations would converge over a release or two and the cost would be a deprecation note. In three years, with four hundred providers, it is unfixable and everyone writes a type-check forever. That is exactly how `x-nullable` ended up in forty companies' documents with three different meanings and no owner — it was cheap to fix once and nobody did.

So the asks, and the first one has a deadline attached in a way none of the earlier posts did.

**Register `x-mcp-tool` and the shaping keys, soon.** Windmill has the most developed use of this spelling and a reasonable claim to define it. Registering means writing down that the value is a boolean marking exposure, which immediately makes every other implementation's divergence visible and correctable. `x-mcp-tool-opaque-fields` deserves an entry on its own merits — it is a genuinely good idea that other people should steal.

**Sponsor the OpenAPI Initiative.** Windmill is an open-source company and I am mindful of what I am asking. But the registry that would have prevented this collision is maintained by the Initiative, and the argument for funding it is stronger from companies who have felt the absence.

**Get involved, and bring the collision as evidence.** This is the useful thing. There is a live conversation about how OpenAPI and MCP relate, and it is mostly happening at the level of principle. Windmill has a concrete artifact: four companies, one key, two types, zero coordination. That is worth more in a Special Interest Group than any amount of theory, because it demonstrates the failure mode rather than predicting it.

I will come back to this collision at the end of the series, because it gets worse. `x-mcp-tool` has two shapes across four providers. Plain `x-mcp` has three shapes across three providers, and one of them is a trap that will read as the opposite of what its author meant. That is the last post.

Tomorrow, Zoho, and the largest MCP vocabulary deployment in the catalog.
