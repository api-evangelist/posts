---
published: true
layout: post
title: 'Mintlify Does A Lot With One OpenAPI Extension'
date: 2026-09-14
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Mintlify
  - Documentation
  - Standards
  - APIs.io
  - APIs
---
After a week of writing about vocabularies with nineteen and thirty-six keys, Mintlify is a relief. There is essentially one: `x-mint`. It appears in twenty-eight providers, 881 times across 92 OpenAPI documents, with three barely-used siblings — `x-mint-groups`, `x-mint-global-content`, `x-mintlify-name` — each showing up in exactly one provider.

Heygen, Honeycomb, Writer, Kalshi, Loops, Lightdash, Authlete, Retell AI, Prime Intellect, MoEngage, Portkey, Yapily, Sendcloud, Anchorage, Kajabi. Twenty-nine companies in the union.

Here is what is inside it, from HeyGen:

```
x-mint:
  href: /reference/generate-from-template-v2
```

A link. That is the common case. The key sits on an operation and says *the human-readable documentation for this lives here*, pointing at a path in the documentation site. It also shows up at the document root and on schemas, carrying a bit more, but the dominant use is that one field.

I like this for a reason that has nothing to do with cleverness. It is the smallest possible solution to a real problem, and the problem is one I complain about constantly: the OpenAPI document and the documentation site are two artifacts that describe the same API and usually have no idea the other exists. You can go from the docs to the reference because a human wrote a link. Going the other way — from a machine-readable operation to the page that explains it — is almost never possible. `x-mint` makes it possible, in one field, with no ceremony.

That matters more now than it did five years ago, and I want to be specific about why rather than just gesturing at agents.

When something automated is working with an API and hits a wall — the schema is technically complete but the semantics are unclear, there is an ordering constraint the contract does not express, an error means something particular that only the prose explains — the useful next move is to go read the documentation. But it can only do that if it knows where the documentation is. Right now the usual answer is a search, which is a guess. A pointer in the contract is not a guess. It is twenty-eight companies each saying, per operation, *the explanation is exactly here*.

That is a genuinely valuable piece of wiring and it is currently legible only to Mintlify.

I also want to note what Mintlify did not do, because in a series where I have counted thirty-six keys for one vendor, restraint deserves mentioning. Mintlify could easily have grown a dozen keys — theming, ordering, visibility, grouping, playground configuration. Every documentation platform has those concerns. Instead nearly all of it stayed in the platform's own configuration file, and only the thing that genuinely has to be per-operation ended up in the contract. The three one-provider siblings look to me like experiments that did not spread, which is what healthy vocabulary growth looks like.

So this is the easiest ask in the series.

**Register `x-mint`.** One key. One file. It is a link relation and its shape is a small object with an `href`. The description could be three sentences. And because it is so simple, it has a decent chance of being the one other people copy — an operation-level pointer from a contract to its human documentation is not a Mintlify-specific idea, it is something every API should probably have, and registering it as a concrete, deployed, working example is how an idea like that graduates from one vendor's convention to a pattern people reach for. I would genuinely like to see this one become general.

**Sponsor the OpenAPI Initiative.** Mintlify is a young company and this is the lightest version of the ask. But the product reads OpenAPI documents as its primary input, and the health of that format is a direct input to the business. Whatever the smallest meaningful membership is, it is worth doing, and it signals something to the twenty-eight customers publishing your key.

**Get involved.** The specific thing I would want from Mintlify in a Special Interest Group is the linking conversation. OpenAPI has `externalDocs`, which exists at the document, operation and tag level and is, by any honest measure, underused and underspecified. Mintlify has effectively built a better `externalDocs` for the operation case and has twenty-eight companies using it. That is not a criticism of the spec's authors — `externalDocs` predates the world where a machine needs to follow the link. But it is a live example of a specification feature that did not quite work, replaced by a vendor key that did, and that is precisely the kind of evidence that improves a specification. Bring `x-mint` to the group as an argument about `externalDocs`, and the result might be that Mintlify gets to stop maintaining an extension.

Tomorrow, Fern, where the SDK naming decisions are the design decisions.
