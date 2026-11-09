---
published: true
layout: post
title: 'Measure How Far A Standards Body Actually Got And What Nobody Measured'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/measure-how-far-a-standards-body-actually-got-and-what-nobody-measured.png
date: 2026-11-09
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Standards
  - AsyncAPI
  - OpenAPI
---

When someone asks me whether a specification is "real," they are usually asking about adoption, and they usually get an answer made of vibes: a logo wall, a star count, a conference keynote. If you are choosing which specification to bet a platform on, or you are an agent trying to decide which format to emit, you want numbers, and you want to know where each number came from. That is the job of `standard_adoption`, the MCP tool behind `GET /standards/{slug}/adoption` on the API Evangelist API. You give it a standards body, and it tells you how many repositories it has published, how many of them graduated past "unclassified," the release count, the human contributor count, the provenance of every figure, and an explicit list of what it does not measure.

## What I gave it

First I asked `find_measured_standards` which bodies are measured at all. It came back with 14, from the Agentic Resource Discovery draft through to the bigger foundation-hosted ones. Then I called `standard_adoption` twice, on two specifications most of you have touched, both hosted at the Linux Foundation:

- `{"slug": "asyncapi"}`, the [AsyncAPI Initiative](https://github.com/asyncapi)
- `{"slug": "openapi-initiative"}`, the [OpenAPI Initiative](https://github.com/OAI)

## What came back

Here is the core of each response, trimmed to the figures:

```json
{"slug": "asyncapi", "governance_model": "Open source, TSC-governed",
 "repositories": {"total": 36, "archived": 0, "stars": 9690,
   "by_maturity": {"unclassified": 35, "governance": 1},
   "graduated": 1, "graduated_share_pct": 2.8},
 "releases": {"count": 28, "latest": null},
 "contributors": 100,
 "caveats": [{"part": "contributors", "detail": "Bots excluded from every
   human figure ... (asyncapi-bot, asyncapi-bot-eve, tim48-robot)."}]}

{"slug": "openapi-initiative", "governance_model": "Membership",
 "repositories": {"total": 29, "archived": 3, "stars": null,
   "by_maturity": {"unclassified": 26, "working-group": 2, "governance": 1},
   "graduated": 3, "graduated_share_pct": 10.3},
 "releases": {"count": 3, "latest": null},
 "contributors": 726,
 "measurement_gaps": ["conformance — whether shipped implementations
   actually match the specification", "test-suite coverage published by the body"]}
```

Put side by side, the two bodies look like different kinds of organization. AsyncAPI ships constantly, with 28 releases across 36 repositories, and almost none of those repositories carry a maturity label: 35 of 36 are unclassified, a graduated share of 2.8%. OpenAPI publishes far fewer releases, 3, but has seven times the human contributors, 726 against 100, and a slightly more structured repository estate, with two working-group repos and one governance repo for a 10.3% graduated share. One is a tooling community that also writes a specification. The other is a specification community whose tooling mostly lives elsewhere.

The part I trust most is everything around the numbers. Every figure carries provenance: the repository counts were searched from the GitHub organizations on 2026-07-31 (OAI) and 2026-08-12 (AsyncAPI), so you know how old the data is. The AsyncAPI response says plainly that bots were excluded by account type plus a named list, and warns that raw org totals "are dominated by automation and must not be compared across bodies." Both responses end with a `measurement_gaps` list saying the tool does not know whether shipped implementations conform to the specification, or what test coverage the body publishes.

Some things here are weak, and they are ours. `releases.latest` is `null` for both bodies, so you get a count with no date, which makes "release cadence" a stretch, since a count without a timestamp can't tell you how fast anything moves. OpenAPI's `stars` is `null` while AsyncAPI's is 9,690, so that field can't be compared across the two. And three releases for the OpenAPI Initiative tells you about how OAI uses GitHub releases, not how often the specification ships. 3.1 and 3.2 are real, and the tagging conventions differ. Both numbers are honest readings of what was harvested, but you shouldn't put them in a slide without that context. The data is also three months old, so it needs a refresh.

## What that makes possible

- **Compare before you commit.** A platform team picking between event-driven and request-response descriptions can put both bodies' contributor depth and governance structure next to each other, instead of comparing GitHub stars.
- **Give an agent a grounded answer.** An agent asked "is this standard mature?" can quote figures with dates and sources, and repeat the caveats, rather than guess.
- **Know where the evidence stops.** The `measurement_gaps` list is a to-do list for anyone writing a standards report. It names the questions, like conformance, that need a different kind of evidence.
- **Find the next call.** From here, `standard_coalition` tells you who is behind a body, and `standard_repositories` lists the repositories these counts come from.

## Try it

It's free, because a specification is a public good. Over MCP, connect to `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/insights`) and call `standard_adoption` with a slug from `find_measured_standards`. Over REST:

```sh
curl https://api.apievangelist.com/v1/standards/asyncapi/adoption
```

The reference is at [developer.apievangelist.com/api](https://developer.apievangelist.com/api), the MCP docs are at [developer.apievangelist.com/mcp-server](https://developer.apievangelist.com/mcp-server), and getting started is [here](https://developer.apievangelist.com/getting-started).
