---
published: true
layout: post
title: 'Find The API Practitioner Conversation That Already Answered Your Question'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-the-api-practitioner-conversation-that-already-answered-your-question.png
date: 2026-11-23
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Conversations
  - Governance
  - Search
---

A lot of what people in the API space actually know never makes it into a specification or a blog post. It comes out sideways, forty minutes into a conversation, when someone explains why a sponsor walked away or how their gateway became the place they enforce governance. I have been recording those conversations for years, and the hard part has never been recording them. It has been finding the right one again when someone asks me a question I know a guest already answered better than I could. The `find_conversations` tool on the API Evangelist MCP server is how I, or an agent working for me, find it. It sits on the `GET /conversations` operation of the API Evangelist API, and it searches or browses every recorded conversation with its guest and media metadata.

## What I gave it

I called it four times today, all against the live [conversations store](https://conversations.apievangelist.com/), with no private input at all, just the archive itself:

- A browse, newest first: `{"sort": "date", "fields": ["slug","title","guest","company","date","tags","url"], "limit": 10}`.
- A free-text search: `{"q": "governance", "fields": ["slug","title","guest","company","date","url"], "limit": 5}`.
- A tag filter: `{"tags": ["governance"], "fields": ["slug","title","company"], "limit": 3}`.
- A name search with no `fields`, so I could see the full record: `{"q": "Reza Shafii", "limit": 1}`.

## What came back

The browse told me there are 62 conversations in the store, across seven pages of ten. The newest is the [conversation with Lukasz Gornicki](https://conversations.apievangelist.com/store/2026-09-01-lukasz-gornicki/) on what the Linux Foundation actually gave AsyncAPI, followed by Danny Preussler on reopening the SoundCloud API, Emma Kriskinans, Sebastian Loch, Phil Leggetter on webhooks and event destinations, Lin Sun on gateways for the agentic AI era, and Tony Tam on the backstory of Swagger.

The free-text search for "governance" matched 15 conversations, ordered by relevance. The tag filter for `governance` matched only 4. That gap is the useful part. The tag is what I deliberately labeled a conversation as being about. The free text catches every conversation where governance came up in the title, summary or body, like Rose Misseur on shifting governance left and Sudeep Goswami on the gateway as runtime governance for APIs, AI and MCP. Use the tag when you want the conversations that are about the subject, and `q` when you want everywhere it was discussed.

The full record for one guest shows what you get back when you don't trim it with `fields`:

```json
{
  "slug": "2025-01-16-reza-shafii-kong",
  "title": "API Evangelist Conversation with Reza Shafii, Product Executive At Kong",
  "summary": "API Integrations Are Dead",
  "url": "https://conversations.apievangelist.com/store/2025-01-06-ben-hutton-guild/",
  "tags": ["Integrations", "Artificial Intelligence", "Governance"],
  "date": "2025-01-06 15:00:00",
  "guest": "Reza Shafii",
  "guest_role": "Product Executive",
  "guest_company": "Kong",
  "youtube_id": "Sk8HNqE5gtg",
  "soundcloud": "https://soundcloud.com/kinlane/api-evangelist-conversation-with-reza-shafii-product-executive-at-kong",
  "duration": "0:15:41",
  "has_content": false,
  "type": "conversations"
}
```

Guest, role, company, a YouTube ID, a SoundCloud link and a running time are enough for an agent to cite the conversation and send someone straight to the recording.

The record also shows two problems, and they're mine. First, the `url` points at a different conversation's page. The slug says Reza Shafii on January 16th, and the URL says Ben Hutton on January 6th, which is also where the `date` came from. The page at the slug's own address exists and returns a 200, so the data has the right page and the record links the wrong one. Anyone, human or agent, who follows that link lands on the wrong guest. Second, `has_content` is false, which means there's no transcript body behind this one, so a `q` search can only match its title, summary and tags.

There is a smaller lesson in my own arguments. I asked for a `company` field in the first three calls, and it never came back. The field is called `guest_company`. The API didn't warn me. It quietly dropped the key I asked for and returned the rest. If you're trimming records with `fields`, make one untrimmed call first to learn the real key names, as I should have.

## What that makes possible

- **Answer with a source instead of an opinion.** An agent asked "how are people handling governance at the gateway?" can find the conversation, name the guest and their company, and hand over the YouTube or SoundCloud link, instead of making up a summary of the industry.
- **Prepare for a meeting.** Search a company or a person by name before you talk to them, and listen to what they have already said on the record.
- **Build reading and listening lists.** Combine `tags` with `match: "all"` to pull the conversations that sit at the intersection of two subjects, say gateways and AI, and walk the results with `page` and `limit`.
- **Audit the archive itself.** Pull every record untrimmed and check that each `url` matches its `slug`. Today's call found one that doesn't, and that check is cheap enough to run on every rebuild.

From here, the natural next step is `find_related`, which takes one conversation and finds the posts, papers and other content across the network that touch the same subjects.

## Try it

`find_conversations` is a **free** tool. Point any MCP client at `https://mcp.apievangelist.com/mcp` and call `find_conversations`, or hit the REST operation directly:

```sh
curl "https://api.apievangelist.com/v1/conversations?q=governance&limit=5"
```

The operation is documented in the [API reference](https://developer.apievangelist.com/api), the MCP server in the [MCP docs](https://developer.apievangelist.com/mcp-server), and [getting started](https://developer.apievangelist.com/getting-started) covers keys. If someone you know should be in the archive, I'm always looking for the next conversation.
