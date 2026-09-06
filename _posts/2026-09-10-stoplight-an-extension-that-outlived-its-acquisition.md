---
published: true
layout: post
title: 'Stoplight: An Extension That Outlived Its Acquisition'
date: 2026-09-10
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Stoplight
  - SmartBear
  - Standards
  - APIs.io
  - APIs
---
`x-stoplight` appears 7,708 times in my catalog, across 162 OpenAPI documents belonging to thirty-seven providers. FactSet, Autodesk, Saviynt, Finix, Narmi, Deluxe, AfterShip, Qovery, Vendasta, REA Group, ActiveFence, LianLian Global. Real companies, real contracts, published to the world.

Here is what is inside it, from Finix's specs:

```
x-stoplight:
  id: 8v9on8n2939z2
```

That is the whole thing, repeated thousands of times. An opaque identifier, attached to schemas, operations, headers and the document root. It is Stoplight Studio's internal object identity, the handle the editor uses to track a thing across edits so it can do the diffing and referencing that a visual API design tool has to do.

I want to be fair about what this is. As vendor extensions go, `x-stoplight` is about the least meaningful one in this entire series. It does not describe the API. It does not tell a reader anything about pagination or auth or visibility. It is a build artifact — the editor's fingerprints, left behind when the document was exported. If I were ranking these keys by how much a downstream tool would benefit from understanding them, `x-stoplight` would come last.

So why write about it?

Because of the other thing that makes it interesting, which is that Stoplight was acquired by SmartBear, and this key is still out there in thirty-seven companies' documents, and it is now genuinely unclear who owns its definition.

That is the story I actually want to tell, and it is not really about Stoplight. It is about what happens to a vocabulary when the company that coined it stops being that company.

Extensions outlive their authors. This one has. Somewhere at FactSet, someone's OpenAPI document has 7,708 identifiers in it from an editor whose vendor has been folded into a larger company, and if that person asks "what is this key, is it safe to remove, does anything depend on it" — where do they go? The registry does not have an entry. The company that would have answered is now a product line inside another company. The documentation still exists in some form, but the authority behind it has moved, and nothing anywhere records that move.

This is a small problem today. It is going to be a large problem, because this industry consolidates constantly and every acquisition orphans a vocabulary. I have watched it happen repeatedly over sixteen years of doing this. Tools get bought, keys stay in files, and the meaning slowly detaches from anything you can point at.

A registry is not a complete answer to that, but it is a surprisingly good partial one. A registry entry is a durable, public record that says *this key existed, this is what it meant, this is who was responsible*. It survives the acquisition. It survives the documentation site being retired and redirected. It is one file in a repository maintained by a foundation, and foundations outlast product lines.

So for this one, my ask is shaped a bit differently than the rest of the series.

**SmartBear should register `x-stoplight` precisely because it is low-stakes.** There is no competitive information in an editor's object identifiers. Nobody is exposed by writing down that this key is Stoplight Studio's internal ID and carries no semantic meaning for consumers. And that last clause is the valuable part — the registry entry that says "this is safe to ignore" is worth as much to a tool author as the one that says "this is important," because right now every parser encountering `x-stoplight` for the first time has to spend somebody's afternoon working out which it is.

**SmartBear should sponsor the OpenAPI Initiative.** SmartBear owns Swagger. SmartBear owns the tooling brand that, for an enormous number of working developers, *is* how they first met this specification. The company's relationship to OpenAPI is deeper and longer than almost anyone's in this series. That relationship deserves to be expressed as active stewardship of the specification's home, not only as products built on top of it.

**SmartBear should be in the room.** With Swagger, SoapUI, Stoplight and the rest, SmartBear has visibility into more of the API lifecycle than almost any other single company. The Special Interest Groups benefit from exactly that breadth, and there is a real difference between a company whose tools implement the spec and a company whose people help shape it.

And a smaller, practical note for the thirty-seven companies publishing this key: you can strip it. It is editor metadata, it does not affect how your API behaves or how a client is generated, and shipping 7,708 internal identifiers in a public contract is noise your consumers do not need. That is not a criticism of Stoplight — every design tool leaves something behind. It is just worth knowing what is in the file you publish.

Tomorrow, Stainless, whose keys are sitting inside the OpenAI specification.
