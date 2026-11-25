---
published: true
layout: post
title: 'See Which API Standards Bodies Have Been Measured And What Is Still Unknown'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/see-which-api-standards-bodies-have-been-measured-and-what-is-still-unknown.png
date: 2026-11-25
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Standards
  - Governance
  - Open Source
---

When a team says "we follow the standard," the next question is rarely asked: how healthy is the body behind it? How many repositories does it run, how many people actually contribute, how many companies sit at the table, does it ship releases? Most of us answer from reputation. I wanted a list we can answer from measurement, and that is what `find_measured_standards` gives you. It sits behind `GET /standards/measured` on the API Evangelist API, and it returns only the standards bodies I have actually profiled. That is different from `find_standards`, which searches 613 catalog entries describing what a standard *is*.

## What I gave it

There is not much to give it. The tool takes `page`, `limit` and an optional `context` sentence explaining why you are asking. I called it with no filters, walking the whole list three at a time, so I could see every body it knows about. Each call is saved alongside this post.

```json
{"limit": 3, "page": 1}
```

## What came back

Fourteen measured bodies: Agentic Resource Discovery (ARD), AsyncAPI, CAMARA, Catena-X, ETSI, GSMA, JSON Schema, the Model Context Protocol, MEF, MISMO, NMFTA, the Open Geospatial Consortium, the OpenAPI Initiative and TM Forum. Each comes with a summary block, a count of caveats, and an `href` to the full measurement. Here is a trimmed view of the summaries:

```text
body                 repos  contributors  companies  working_groups  releases  caveats
OGC                    361           487        362              97        92       15
CAMARA                  93           202        487               5        60        5
TM Forum                96            19       null            null        71        0
MCP                     42          1698       null            null        17        0
AsyncAPI                36           100          0            null        28        7
OpenAPI Initiative      29           726        100               7         3        7
JSON Schema             23           376       null            null         1        0
ETSI                    22            18       null            null      null        0
MEF                      9            20       null            null         6        0
NMFTA                    6             5         32            null      null        7
ARD                      5            18         12               0         0       15
GSMA                     2             1       null            null         1        0
Catena-X              null          null        197            null      null        5
MISMO                 null          null         52            null      null       13
```

A few things jump out. The Model Context Protocol has the biggest contributor count on the list, 1,698, well ahead of the OpenAPI Initiative's 726, from 42 repositories. The OGC runs the largest estate by far, 361 repositories and 97 working groups. CAMARA, the telco API alliance, has the widest coalition at 487 companies and 1,369 people. ARD, the discovery proposal from authors at Microsoft, Google and Hugging Face, has 12 companies, zero working groups, zero releases and the most caveats (15, tied with OGC). That is about what you would expect from a v0.9 draft with no foundation.

I also have to be honest about what this table shows about us. Most of it is `null`, and `null` means *not measured*, not zero. Only four of the fourteen record a host. Only AsyncAPI has a star count. Catena-X and MISMO are measured as coalitions, by companies, people and bodies, with no repositories counted at all. AsyncAPI shows `companies: 0`, which is not true of the AsyncAPI community. It means I have not built a company roster for it yet. The `caveat_count` field is there so you don't read these gaps as facts, and you should check it before comparing any two rows. The numbers are also not comparable across the board. `graduated` counts repositories classified as a released spec, and 350 of OGC's 361 repositories are still unclassified.

There was one more weakness, in my own harness this time. My first call asked for all fourteen at `limit: 100`, and the client I use to capture output cut the response off at 20,000 characters, because each record carries a long description. Paging three at a time fixed it. If your agent has a small context window, page through this list instead of pulling it in one call.

## What that makes possible

- **Sanity-check a standards bet.** Before you write "we adopt X" into a governance policy, see whether X has releases, contributors and more than one company behind it, or whether it is one repo and one contributor (GSMA's measured footprint today).
- **Know what is and isn't known.** The nulls and the caveat count tell an agent when to say "not measured" instead of making up a number. That's the honest answer, and it's the one this list makes possible.
- **Drill in.** Every row's `href` goes to `/v1/standards/<slug>/measurement`. From there, `standard_coalition`, `standard_repositories` and `standard_adoption` break out who is behind a body, what it maintains and who uses it.
- **Track the agent-era bodies against the old guard.** MCP and ARD sit in the same list as OGC and TM Forum. Watching how a two-year-old protocol's contributor base compares to consortia that are decades old is a story in itself.

## Try it

It's free. A specification is a public good, and so is an honest read of its adoption.

- MCP: connect to `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/insights`) and call `find_measured_standards`.
- REST:

```sh
curl "https://api.apievangelist.com/v1/standards/measured?limit=3&page=1"
```

- Reference: [developer.apievangelist.com/api](https://developer.apievangelist.com/api)
- MCP docs: [developer.apievangelist.com/mcp-server](https://developer.apievangelist.com/mcp-server)
- Getting started: [developer.apievangelist.com/getting-started](https://developer.apievangelist.com/getting-started)

If a body you care about isn't on this list, or a number on it is wrong, tell me. That is how the list gets to fifteen.
