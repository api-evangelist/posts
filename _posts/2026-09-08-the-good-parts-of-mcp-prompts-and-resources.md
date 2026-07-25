---
published: true
layout: post
title: 'The Good Parts of MCP: Prompts and Resources'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-good-parts-of-mcp-prompts-and-resources.png
date: 2026-09-08
author: Kin Lane
tags:
  - MCP
  - Agents
  - AI
  - Documentation
  - Prompts
  - APIs
  - Developer Experience
---
Almost all of the noise about [MCP](https://modelcontextprotocol.io) has been about tools. Everybody ships tools, everybody argues about tools, everybody counts how many tools their server exposes as if that were the score. But the protocol has two other primitives that get a fraction of the attention and are, I would argue, the genuinely underrated good parts: prompts and resources. Prompts are repackaged, ready-to-run queries — the good questions, pre-written and parameterized. Resources are the documents and context an agent should have alongside those questions — the reference material, the docs, the data. And the more time I spend with them, the more I think prompts and resources are ideas we should be dragging back out of MCP and into REST and GraphQL, because they solve a problem those APIs have always had and never named.

Start with prompts, because they are the ones that surprised me. An MCP prompt is, at its heart, a curated query — a specific, useful, parameterized way of asking something, written by whoever knows the system best and handed to the consumer ready to run. It is the difference between giving someone two hundred operations and saying "good luck" and giving them the fifteen questions that are actually worth asking, phrased the way an expert would phrase them. When I built out the [MCP prompts and resources layer](https://apievangelist.com/2026/07/22/how-i-actually-use-mcp-across-api-evangelist/) across API Evangelist and APIs.io, the prompts turned out to be the part people got the most value from the fastest, because they collapse the gap between "you technically can ask this" and "here is the good question, ready to go." That is a documentation and onboarding win that has nothing to do with agents specifically — it is just good API design that MCP happened to formalize.

Now resources. A resource in MCP is context that rides along — the docs, the schema, the reference data, the this-is-how-this-actually-works material that a consumer needs in order to use a capability well. For the entire history of APIs, this stuff has lived somewhere *else*: in a separate docs portal, in a wiki, in a getting-started guide that drifts out of sync with the API it describes. MCP's move is to make the accompanying context a first-class part of the interface itself, sitting right next to the capability instead of two clicks and one stale page away. When an agent — or a human — reaches for a capability, the resource that explains it comes along. That co-location of capability and context is quietly one of the best ideas in the whole protocol, and it is the one nobody is putting on their launch slides.

Here is what I keep thinking: neither of these ideas is actually specific to MCP. A curated, parameterized query and a piece of co-located reference context are things every REST and GraphQL API would be better for having, and almost none of them do. We have spent years treating the OpenAPI as the operations and the docs as a separate deliverable, when MCP is quietly demonstrating that the good questions and the accompanying context belong *with* the interface. There is nothing stopping us from bringing prompts back to REST as blessed, parameterized example queries shipped alongside the spec, or bringing resources back as reference context bound to operations instead of exiled to a portal. MCP did not invent the need. It just built primitives for it, and those primitives are portable ideas we should steal.

This also reframes what MCP is actually contributing, which matters after I have spent a whole series calling it [last-mile plumbing](https://apievangelist.com/2026/08/04/mcp-is-last-mile-plumbing/) and poking at its [authorization gaps](https://apievangelist.com/2026/09/03/the-mcp-authentication-and-authorization-gap/). The tools are the least novel part — an agent could already curl a well-described API, as I have argued. The prompts and resources are where MCP is teaching us something we did not already know how to express: that an interface should ship with its best questions and its context attached. That is a design lesson worth keeping even in a hypothetical future where the specific protocol fades. The plumbing is disposable. The idea that capability, curated queries, and context belong together is not.

So if you are building an MCP server, spend real effort on the prompts and resources, not just the tools — they are probably where your consumers, human and agent alike, will get the most value, and they are the part most servers neglect. And if you are building a plain old REST or GraphQL API with no MCP anywhere in sight, steal the ideas anyway. Ship your best questions as parameterized prompts. Bind your reference context to your operations instead of banishing it to a docs site that goes stale. MCP's tools got all the attention, but its prompts and resources are the parts I would most want to keep, and the parts I would most encourage you to bring home to whatever API you are already building.
