---
published: true
layout: post
title: 'ReadMe Is Carrying Working Code In Eighty Companies Contracts'
date: 2026-09-09
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - ReadMe
  - Documentation
  - Standards
  - APIs.io
  - APIs
---
I found `x-readme` in eighty providers' OpenAPI documents, 1,076 times across 320 files. Asana, 8x8, AppsFlyer, Fireblocks, Brandwatch, Ironclad, Demandbase, Bazaarvoice, Feedly, Frontegg, Dotdigital — sixty companies in the union once you count the whole family, which also includes `x-readme-fauxas` in eighteen providers and `x-readme-hidden`.

Then I looked at what is actually inside the key, and it turned out to be more interesting than I expected.

Here is Asana's, lightly trimmed:

```
x-readme:
  code-samples:
    - language: java
      install: <dependency><groupId>com.asana</groupId>...
```

That is not a documentation hint. That is an installable dependency declaration and a working code sample for a specific operation, in a specific language, sitting inside the OpenAPI document. It is the most immediately useful thing a developer can be handed — *here is the line that installs the thing, and here is the call* — and it is riding in the contract where any tool can pick it up.

I have a lot of time for this. One of the oldest complaints I have about API documentation is that the good parts and the machine-readable parts live in different places. The OpenAPI document describes the shape of the request. The getting-started guide has the code that actually works. They drift, because nothing forces them together, and the guide is the one that rots. Putting the sample in the contract is a direct answer to that, and ReadMe built it years ago.

It is also the second time in this series I have run into the same underlying idea, which is worth pausing on. The OpenAPI Extension Registry already contains `x-codeSamples`, registered by Redocly, which does substantially the same job with a different spelling and a different shape. So the ecosystem has two well-designed, widely-deployed answers to "carry code samples in the spec," one of them registered and one not, and no relationship between them written down anywhere.

That is not a disaster. Both work. But it is a small, concrete illustration of what the registry is for. If `x-readme` had a registry entry next to `x-codeSamples`, a tool author looking at either one would immediately discover the other, and somebody would eventually do the useful work of noting that these overlap and how to read both. Right now that connection exists only in the heads of people like me who went and counted.

The other two keys in the family tell their own story. `x-readme-fauxas` appears in eighteen providers and it is, as far as I can determine, entirely internal plumbing — a compatibility flag with no meaning outside ReadMe's own rendering. I would not register that one, and I want to say so explicitly, because part of the argument I have been making all series is that registration should be selective. A registry stuffed with every vendor's private flags is worse than a registry with the keys that carry portable meaning. `x-readme-hidden` sits in between; it is a visibility decision, which does travel.

There is one more thing about ReadMe specifically that I think makes the case sharper. ReadMe's customers are, overwhelmingly, companies whose developer experience *is* their product surface. The eighty providers I found are not incidentally publishing an API. They are API-first companies who chose a documentation platform because the docs matter that much. Those are exactly the specs that get fetched, mirrored, imported, and now fed to agents. ReadMe's key travels further than most vendor keys travel, because ReadMe's customers publish more deliberately than most companies publish.

Which means a registry entry for `x-readme` does disproportionate good. The samples inside it are the highest-value payload of any extension in this whole series — actual working code, with install instructions, per operation, in multiple languages. An agent that knew how to read that key would be meaningfully better at using eighty companies' APIs tomorrow. Today it has to either ignore the key or reverse-engineer its shape from examples, and most will ignore it.

The asks.

**Register `x-readme`.** One file, describing the shape of the object and what `code-samples` carries. If you want to do one generous extra thing, mention `x-codeSamples` in the description — acknowledging the neighbouring solution costs nothing and makes both entries more useful. `x-readme-hidden` is worth a second entry. `x-readme-fauxas` I would leave alone.

**Sponsor the OpenAPI Initiative.** ReadMe is a company built on the premise that API descriptions are worth investing in. That premise is the Initiative's entire reason for existing. ReadMe is not a giant, and I am conscious that I am asking a mid-size company for money in a way I would not ask a two-person shop — but the alignment between what ReadMe sells and what the Initiative maintains is about as tight as it gets in this industry.

**Get involved.** ReadMe sees an enormous number of real customer OpenAPI documents, written by people who are not specification experts, and watches where those people get confused. That is genuinely rare data. The specification group hears a lot from tool builders and not nearly enough about what a normal developer writing their first spec gets wrong. Bring that.

Tomorrow, Stoplight — an extension in thirty-seven companies' documents whose owner has changed hands, and what happens to a vocabulary when the company that coined it becomes part of somebody else.
