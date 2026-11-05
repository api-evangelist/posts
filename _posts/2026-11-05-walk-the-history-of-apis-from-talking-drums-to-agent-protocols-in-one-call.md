---
published: true
layout: post
title: 'Walk The History Of APIs From Talking Drums To Agent Protocols In One Call'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/walk-the-history-of-apis-from-talking-drums-to-agent-protocols-in-one-call.png
date: 2026-11-05
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - History
  - Timeline
  - Research
---

When someone asks me how we got here, with agents calling tools over a protocol that didn't exist two years ago, I don't have a short answer. I have a long one, and for years it lived in a single page on this site that I added to whenever something mattered. That page is now a dataset, and this is what `get_timeline` on the API Evangelist MCP server gives you, backed by `GET /timelines/api` on the API Evangelist API. You ask for one of four research timelines and get the entries back in chronological order, paged, with a title, a summary and a date for each. The four are `api` (the moments that shaped web APIs), `resources` (which digital resources became APIs and when), `industries` (the industrial history I use to frame API infrastructure) and `people` (the people who made compute and APIs possible). I pulled all four to see what each one is actually made of.

## What I gave it

The only required argument is the timeline name. I called it four times, once per timeline, with `limit` set to the maximum of 100, and then walked the remaining pages of the two timelines that didn't fit in one. That's seven calls in total, and no key. The REST side is the same shape, with one path per timeline: `/timelines/api`, `/timelines/resources`, `/timelines/industries` and `/timelines/people`, all under `https://api.apievangelist.com/v1`.

## What came back

The `api` timeline is the big one, at 320 entries across four pages. It opens in pre-history with "Drums Are Used to Communicate" and "Pigeons Are Used to Send Messages", moves through the first dated entry in 1753 (a letter to the Scots Magazine proposing that electricity could carry messages), and ends in 2025 with the Agent-to-Agent protocol. Here is the meta block and the last two entries, trimmed:

```json
{
  "meta": { "total": 320, "page": 4, "limit": 100, "pages": 4, "query": { "timeline": "api" } },
  "data": [
    { "slug": "api-model-context-protocol-mcp",
      "title": "Model Context Protocol (MCP)",
      "when": "2024", "position": 313,
      "summary": "Anthropic released the Model Context Protocol in November 2024 as an open standard for connecting AI assistants to tools, data sources, and APIs through a common client-server interface. Rapidly adopted across the industry, MCP became the leading answer to how agents discover and invoke capabilities without bespoke integrations for every service.",
      "url": "https://apievangelist.com/timeline/api/" },
    { "slug": "api-agent-to-agent-a2a-protocol",
      "title": "Agent-to-Agent (A2A) Protocol",
      "when": "2025", "position": 319,
      "summary": "Google announced the Agent2Agent protocol in April 2025, an open standard enabling AI agents from different vendors to discover one another, exchange tasks, and collaborate, with dozens of launch partners and later stewardship under the Linux Foundation. A2A complemented MCP by standardizing communication between agents rather than between agents and tools.",
      "url": "https://apievangelist.com/timeline/api/" }
  ]
}
```

The shape of the 320 tells its own story. There are 24 entries in the 1960s, 31 in the 1970s, 24 in the 1980s, 38 in the 1990s, 53 in the 2000s and 64 in the 2010s. The 2020s already have 20, and fourteen of those are from 2023 onward, including the ChatGPT API, OpenAI function calling, the Anthropic Claude API, the Twitter/X and Reddit pricing fights, the CFPB 1033 rule, MCP, the EU Digital Markets Act enforcement, Arazzo, Overlays, FAPI 2.0 and A2A. ProgrammableWeb shutting down in 2022 is in there too, which is the entry I find myself pointing people at most.

The other three are smaller and more pointed. `resources` has 59 entries, from Salesforce exposing contacts and relationships in 2000 to MCP servers exposing tools and context in 2024, and reading it top to bottom is a list of the kinds of things that became programmable, in the order it happened: contacts, images, payments, posts and messages, storage, compute, design files, pages, speech, tools. `industries` has 40, from the Pacific Railroad Acts of 1862 to the EU AI Act of 2024, and it's where I keep the railroad, telephone, net neutrality, GDPR and antitrust moments that frame APIs as infrastructure. `people` has 146 across two pages, from Ada Lovelace to Fei-Fei Li.

Now the honest part, because the data shows two things I need to fix. First, the `url` on every entry points at the timeline page, not the entry. Every one of the 320 api rows carries `https://apievangelist.com/timeline/api/`, so an agent that wants to cite "ProgrammableWeb Shuts Down" can only send a reader to the top of a long page. The `industries` and `people` entries carry a separate `link` field with a Wikipedia page for 139 of the 146 people, but the `api` and `resources` entries have no outbound link at all and their `tags` arrays are empty across the board. Second, the `people` timeline is not in chronological order, whatever the description says. It comes back alphabetical within groups, so the first four are Ada Lovelace (1815), Adele Goldberg (1945), Anita Borg (1949) and Audrey Tang (1981). The `api` timeline is strictly monotonic from start to finish. The `people` one isn't, and 71 of its entries are tagged Women in Tech, which reflects how that list was assembled and is worth knowing before you sort it.

## What that makes possible

- **Give an agent the chronology instead of making it guess.** Models are fuzzy on when things happened in this industry. One call puts dated, summarized entries in context, so an answer about why MCP looks like it does can cite the stretch from REST in 2000 through OAuth, Swagger and the founding of the OpenAPI Initiative in 2015 instead of inventing it.
- **Build a "what led up to this" view in your own docs.** Pull the `api` timeline, filter by year, and render the decade before your product launched next to your own changelog. It's 320 rows of JSON with a `position` field, which is all you need.
- **Trace which resources became APIs and when.** The `resources` timeline is the shortest list I know of the kinds of digital thing that have been made programmable, and a good checklist for asking which of your own still aren't.
- **Frame the policy conversation.** The `industries` timeline is where railroad regulation, the telephone monopoly, net neutrality and GDPR sit in one sequence, which is the sequence I use when explaining to a regulator why APIs are infrastructure.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter research toolset at `https://mcp.apievangelist.com/mcp/research`), call `get_timeline` with `timeline` set to `api`, `resources`, `industries` or `people`, and `page` and `limit` to walk it. Over REST:

```sh
curl "https://api.apievangelist.com/v1/timelines/api?limit=100&page=4"
```

The operation is documented in the [API reference](https://developer.apievangelist.com/api), the MCP server in the [MCP docs](https://developer.apievangelist.com/mcp-server), and you can get started [here](https://developer.apievangelist.com/getting-started). The human-readable versions are the [API timeline](https://apievangelist.com/timeline/api/), the [resources timeline](https://apievangelist.com/timeline/resources/), the [industry timeline](https://apievangelist.com/timeline/industry/) and the [people timeline](https://apievangelist.com/timeline/people/). If you want the research behind any single entry, the next step is [searching sixteen years of posts with `search_api_evangelist`](https://apievangelist.com/2026/10/30/search-sixteen-years-of-api-research-from-one-call/).
