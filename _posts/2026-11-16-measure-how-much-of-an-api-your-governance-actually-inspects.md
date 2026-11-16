---
published: true
layout: post
title: 'Measure How Much Of An API Your Governance Actually Inspects'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/measure-how-much-of-an-api-your-governance-actually-inspects.png
date: 2026-11-16
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Governance
  - Linting
  - OpenAPI
---

Every team I talk to that lints its OpenAPI knows how many errors it got. Almost none of them know how much of the document their rules ever looked at. A clean lint run tells you nothing broke the rules you have. It doesn't tell you whether those rules ever reached your parameters, your headers or your schemas. Software teams answered that question for code years ago with test coverage. The API Evangelist `api_coverage` tool, behind `POST /governance/coverage`, does the same thing for an API description. It measures coverage by section, how many rules touch each part of the document, and which rules in the ruleset matched nothing at all.

## What I gave it

I wanted an input everyone can check, so I used the [Petstore example](https://learn.openapis.org/examples/v3.0/petstore.yaml) from the OpenAPI Initiative's learn site. It's 119 lines of OpenAPI 3.0: two paths, three operations, two parameters, three schemas. I passed the YAML as the `document` argument with a one-line `context` and nothing else, so it ran against our default ruleset.

## What came back

Here is the summary, trimmed:

```text
format:          openapi
totalNodes:      31     coveredNodes: 31     coveragePct: 100
avgRules:        14.5   thinNodes: 1
section          total  covered  avgRules
info               1      1       16
servers            1      1        8
paths              2      2       29
operations         3      3       51.3
parameters         2      2       13
requestBodies      1      1        6
mediaTypes         6      6        3.5
responses          6      6       10
headers            1      1        9
schemas            3      3        8
properties         5      5       13.6
totalRules: 423   activeRules: 377   gatedRules: 46
deadRules_count: 141
```

The first number is the reassuring one. All 31 nodes the tool cut the Petstore into are touched by at least one rule, so nothing in this document is ungoverned. The averages are where it gets interesting. An operation is looked at by about 51 rules. A media type is looked at by 3.5. If your team cares about content negotiation, examples and encodings, that one line tells you your governance barely reaches them. One node is marked thin, meaning very few rules cover it.

The second half is the part I'd point a governance lead at. The ruleset has 423 rules. 46 are gated, so they only switch on under conditions this document doesn't meet. That leaves 377 active, and 141 of those matched nothing in the Petstore. Some of that is expected. The `agentic-access-*` rules have no agent metadata to inspect here. The `info-contact-require-*` rules have no `contact` object to look at, because the Petstore doesn't have one. A missing object can't fail a rule that never runs, and that is exactly the kind of quiet gap this tool exists to expose. A "require" rule that goes dead because the thing it requires is absent deserves a look.

Some of the dead list surprised me, and I'll say so. `parameter-require-name`, `parameter-require-in` and `parameter-require-schema` are all listed as dead, yet the same report says both Petstore parameters are covered by an average of 13 rules. So other rules reach those parameters, and these three don't. My best guess is that they target a different location, like reusable `components/parameters`, rather than parameters declared inline on an operation, which is how the Petstore declares them. I haven't confirmed that. Either way, a rule called "parameter require name" not firing on a document full of named parameters is something I want to know about in our own ruleset, and this is the tool that told me.

## What that makes possible

- **Put a coverage number next to the lint result.** A pull request that passes lint at 100% coverage means something different from one that passes while a third of the rules never ran.
- **Prune or fix the ruleset.** 141 dead rules on a common shape like the Petstore is a list to work through. Some belong to features this API doesn't use. Others, like the parameter rules above, point at selectors that don't match real-world documents.
- **Find the thin sections.** If media types average 3.5 rules and operations average 51, you know where to write the next rules.
- **Let an agent check its own guardrails.** An agent that is about to lint and ship a contract can ask first how much of that contract the rules will actually see, and flag it when the answer is low.

The natural next step is to lint the same document and read the findings against this map. That's a separate tool, and a separate post.

## Try it

`api_coverage` is **free**. On the MCP server at `https://mcp.apievangelist.com/mcp`, call the `api_coverage` tool with a `document`. Over REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/coverage \
  -H "Content-Type: application/json" \
  -d "{\"document\": $(curl -s https://learn.openapis.org/examples/v3.0/petstore.yaml | python3 -c 'import json,sys;print(json.dumps(sys.stdin.read()))')}"
```

Pass `"detail": true` for per-node coverage, each rule's reach and the full dead-rule objects. The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) cover connecting an agent.
