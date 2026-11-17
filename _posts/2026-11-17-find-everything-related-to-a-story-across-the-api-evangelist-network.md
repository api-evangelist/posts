---
published: true
layout: post
title: 'Find Everything Related To A Story Across The API Evangelist Network'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-everything-related-to-a-story-across-the-api-evangelist-network.png
date: 2026-11-17
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Discovery
  - Content
  - Agents
---
If you read something on API Evangelist and want to keep going, you have a problem. There are sixteen years of stories, plus papers, guidance, areas, services, conversations and videos, and they live in different places. The "related posts" box at the bottom of a page only looks at other posts. An agent helping you research has the same problem, and it is worse at guessing. `find_related` takes any one item, a type and a slug, and returns the most related content across the whole network, ranked by shared tags, with the rare tags counting more than the common ones. Behind it is the REST operation `GET /posts/{slug}/related` on api.apievangelist.com.

## What I gave it

I gave it one of my own posts from September, [You Cannot See Your Own API From The Outside](https://apievangelist.com/2026/09/29/you-cannot-see-your-own-api-from-the-outside/), which is tagged Kin Score, APIs.io, Discovery, Agents, API Governance, Strategy and APIs. I called it twice:

```json
{"type": "posts", "slug": "2026-09-29-you-cannot-see-your-own-api-from-the-outside", "limit": 10}
{"type": "posts", "slug": "2026-09-29-you-cannot-see-your-own-api-from-the-outside", "types": ["papers", "guidance"], "limit": 10}
```

The first is the open "more like this." The second asks only for papers and guidance, the longer-form material a reader goes to once a post has hooked them.

## What came back

The open call reported a total of 1,429 related items. These are the top six:

```
type   shared  relevance  title
posts  5       25.276     The Self-Hosted Seed Is The Next Business Model
posts  5       24.669     APIs.io Provides Discovery-Grade Artifacts
posts  5       24.669     Bringing Coherence to Sprawling Enterprise API Estates
posts  5       24.662     Your Agent Should Run Its Own Observability Stack
posts  4       21.022     Where I Am At With Forking Spectral
posts  4       20.504     The APIs That Charge Per Call And The APIs ...
...
posts  4       20.150     Outside-In View Is What Agents Will See
```

The filtered call returned two items, both papers, each sharing one tag, Discovery, at a relevance of 4.158: [The Fundamentals of API Discovery](https://papers.apievangelist.com/papers/fundamentals-of-api-discovery/) and [The API Rating Rubric, Explained](https://papers.apievangelist.com/papers/the-api-rating-rubric-explained/). The response included each paper's full outline, its tagline and its page count, so whatever is calling it can decide what to read next without fetching anything else.

I need to be honest about what this shows, because some of it is good and some of it isn't.

The good part: the filtered call is exactly right. Out of everything I have published, the two papers it surfaced are the two a reader of that post should go to next. The rubric paper explains the score the post talks about, and the discovery paper is the long version of its argument.

The less good part is the open call. The total of 1,429 means nearly everything I tag "APIs" or "Strategy" counts as related. That is a long tail, not a list. And the top hit, The Self-Hosted Seed Is The Next Business Model, is a post about nutrition and health data. It ranks first because it shares five broad tags (Strategy, Kin Score, APIs.io, Agents, APIs). The post that is actually closest in subject, Outside-In View Is What Agents Will See, sits at number nine, because it shares only four. Down-weighting common tags helps, but when my own tagging is this broad, five generic tags still beat four tags that line up with the subject. That is a problem with my tags as much as with the ranking. It is also a good reason to look at the `shared_tags` count and the tags returned on each item before you trust the order.

## What that makes possible

- **A reading path, not a list of links.** Ask for `types: ["papers", "guidance"]` and you get the two or three things worth going deeper on, with their outlines attached. That is the next step after a post, built in one call.
- **An agent that cites the network instead of guessing.** An agent answering a question about outside-in testing can take the one post it found and pull related guidance, areas and papers that share the post's specific tags, with a relevance score it can cut off at.
- **A tagging audit.** Run it against your strongest posts and see what comes up top. When a nutrition post outranks the post that actually matches, the fix is to the tags, and this is the fastest way I have found to see that.
- **Cross-type "more like this" on any page.** It works from any type: an area, a service, a paper. That means a services page can show the stories that prove the service, and a paper can show the conversations behind it.

## Try it

`find_related` is free. It is read-only and needs no Pro plan.

- MCP: add `https://mcp.apievangelist.com/mcp` to your agent and call `find_related` with a `type` and `slug`.
- REST:

```sh
curl "https://api.apievangelist.com/v1/posts/2026-09-29-you-cannot-see-your-own-api-from-the-outside/related?types=papers,guidance&limit=10"
```

- Reference: [developer.apievangelist.com/api](https://developer.apievangelist.com/api)
- MCP docs: [developer.apievangelist.com/mcp-server](https://developer.apievangelist.com/mcp-server)
- Getting started: [developer.apievangelist.com/getting-started](https://developer.apievangelist.com/getting-started)

The next step after this is usually the full read, so pair it with the tool that fetches the item itself. But start here: hand it the one thing you liked and see where the network takes you.
