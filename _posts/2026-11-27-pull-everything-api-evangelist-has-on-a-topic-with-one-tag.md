---
published: true
layout: post
title: 'Pull Everything API Evangelist Has On A Topic With One Tag'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/pull-everything-api-evangelist-has-on-a-topic-with-one-tag.png
date: 2026-11-27
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Tags
  - API Governance
  - Research
---

After sixteen years, API Evangelist is not one site. It is blog posts, white papers, governance policies, guidance, standards, strategies, conversations, tools and more, each living in its own corner of the network. If you are trying to get up to speed on a topic like API governance, the hard part is not that the material doesn't exist. It is that you have no idea how much of it there is, or what shape it comes in. The `get_tag` tool, and the `GET /tags/{slug}` operation behind it, answers that in one call: give it a tag, and it tells you how many things carry that tag across every content type, then hands you the things themselves.

## What I gave it

I used the tag everyone asks me about, `governance`, and called it two ways. First with no filter and a small page:

```json
{"slug": "governance", "limit": 5}
```

Then filtered down to just the white papers:

```json
{"slug": "governance", "types": ["papers"], "limit": 5}
```

Both are public. Nothing about the input is private, and you can browse the same tag yourself on [apievangelist.com](https://apievangelist.com).

## What came back

The first call opens with the part I find the most useful, the tag's own profile in `meta.tag`:

```json
"tag": {
  "slug": "governance", "label": "Governance",
  "count": 359, "breadth": 14,
  "types": {
    "posts": 214, "policies": 59, "guidance": 30,
    "standards": 15, "properties": 9, "tools": 8,
    "experiences": 6, "conversations": 4, "papers": 4,
    "strategies": 3, "areas": 2, "lifecycle": 2,
    "solutions": 2, "schema": 1
  }
}
```

359 things are tagged governance, spread across 14 different content types. That `breadth` number is the honest measure of how central a topic is to the network. A tag that only lives in blog posts is something I wrote about. A tag that shows up in policies, standards, guidance, tools and papers is something I've built out.

The breakdown also says something I should own. 214 of the 359 are blog posts, which is 60 percent of the tag. There are 59 policies and 30 pieces of guidance, which is the real working material, but only 4 papers and 3 strategies. If you read the tag as a map of where my governance thinking is mature, it tells you the long-form, sequenced material is thin compared to how much I talk about it.

Then come the items. The unfiltered first page is newest first and mixes types freely: "The Gateway Is a Tired Concept, Because Gateways Are About Power" (September 22), "Federation Aligns Schemas, But It Cannot Align People", "Agent Skills: New Value, New Problems", "When AI Agents Start Acting, APIs Become Execution Contracts", and my conversation with Lukasz Gornicki on what the Linux Foundation actually gave AsyncAPI, which carries the governance tag too. Each item comes back with its title, URL, date, image and its own full set of tags, so you can see what else it is about without another call.

One thing surprised me. The default page is a firehose of posts, because posts dominate the count and they are newest first. If what you actually want is the policies or the papers, you will page a long way before you reach them. That is what the `types` filter is for, and the second call shows the difference. It came back with `total: 4` and exactly the four governance papers:

- [Explicit Agent Boundaries](https://papers.apievangelist.com/papers/explicit-agent-boundaries/)
- [Making API Governance Conversational](https://papers.apievangelist.com/papers/conversational-api-governance/)
- [The Fundamentals of API Governance](https://papers.apievangelist.com/papers/fundamentals-of-api-governance/)
- [The Fundamentals of API Reusability](https://papers.apievangelist.com/papers/fundamentals-of-api-reusability/)

Paper items come back richer than posts, with a summary, tagline, page count, version, last update and the full outline, so an agent can decide which one to read without opening it. Note too that the per-type counts in `meta.tag` stay the same whether you filter or not, so one filtered call still gives you the whole map.

## What that makes possible

- **Size a topic before you dig in.** One call tells a new team member, or an agent, whether a topic is a passing mention or a body of work, and which kinds of material exist for it.
- **Go straight to the working material.** Filter to `policies` or `guidance` when you need something to put into practice, and skip the opinion pieces.
- **Build a reading list an agent can walk.** With `page` and `limit`, an agent can pull every paper and guidance item on a topic in order, using the outlines to pick what to read.
- **Spot the gaps.** Comparing per-type counts across tags shows where the network is all talk and where it has the policies, standards and tools to back it up.

If you don't know the tag slug yet, `find_tags` is the step before this one.

## Try it

It is free. Over MCP, connect to `https://mcp.apievangelist.com/mcp` (or the lighter research toolset at `https://mcp.apievangelist.com/mcp/research`) and call `get_tag` with a slug. Over REST:

```sh
curl "https://api.apievangelist.com/v1/tags/governance?types=papers&limit=5"
```

The operation is documented in the [API reference](https://developer.apievangelist.com/api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) cover connecting an agent. If you want to start somewhere, start with a tag you care about and look at the breadth number. It will tell you a lot about how much there is to learn.
