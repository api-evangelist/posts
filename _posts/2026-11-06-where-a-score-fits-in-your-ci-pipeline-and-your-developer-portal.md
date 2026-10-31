---
published: true
layout: post
title: 'Where A Score Fits In Your CI Pipeline And Your Developer Portal'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/where-a-score-fits-in-your-ci-pipeline-and-your-developer-portal.png
date: 2026-11-06
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - CI/CD
  - Spectral
  - Backstage
  - API Governance
---
Two good tooling questions came up in a recent conversation about the [Kin Score](https://apis.io/rating/). Should you run it in CI on every change, watching it go up and down like code coverage? And can it run inside a developer portal like Backstage, next to the red, yellow and green system health a team already has?

## Not every change

On CI, I lean towards no. I would set quarterly goals and use the score as roadmap guidance. For governance of an individual API at build time, I would reach for [Spectral](https://github.com/stoplightio/spectral) or other pipeline tools.

The reason is that they answer different questions:

| | Pipeline linting | Kin Score |
|---|---|---|
| **Looks at** | One contract | The whole operation around your APIs |
| **Asks** | Does this change break our rules? | Can someone find, understand, pay for and use this? |
| **Cadence** | Every commit | Quarterly |
| **Result** | Pass or fail | Where to invest |

Much of what the score looks at is not in the repository a pull request touches. Pricing pages, terms of service, status pages, SDKs and changelogs do not change with your commit, so a per-commit score would mostly sit still and then move for reasons unrelated to the change.

The rubric itself also moves. Each reading on APIs.io carries the rubric version it was scored with. [Atlassian](https://apis.io/providers/atlassian/) currently shows v0.25.0 while [HubSpot](https://apis.io/providers/hubspot/) shows v0.24.0. A number can change because the ruler changed, and that is a poor thing to fail a build over.

You can still get something from CI. APIs.io publishes [Spectral rules for many providers](https://apis.io/rules/), so one concrete pairing is to take the rules behind the checks you care about and enforce those in the pipeline. The score then tells you each quarter whether the sum of those small enforcements added up.

## Backstage

I have not run the Kin Score inside Backstage yet. I ran some prototypes early on, based on customer conversations, and those did not go forward. It should fit, though, and that is why it is YAML-based. [APIs.io](https://apis.io/providers/apis-io/) runs entirely on GitHub and Git, so results are just files that a plugin could read.

Here is how I would approach it:

- Keep your existing health status for running systems. Red, yellow and green says whether something is up.
- Add the score as a separate layer for how usable and agent-ready a system's API is.
- Show facets, not only the composite, so a team sees what to do next.
- Refresh it on a slow cadence, so people do not treat it as an alert.

If you try this, please tell me how it goes. I would like to see it done, and I learn the most from people who have put it to work somewhere I have not.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| Pull rules into your pipeline | [`GET /rules`](https://apis.io/developer/api/artifact-types) | `find_rules` | Free |
| Get a quarterly reading | [`GET /providers/{slug}/rating`](https://apis.io/developer/api/ratings) | `get_provider_rating` | Understanding |
| Feed the facets to a portal plugin | [`GET /providers/{slug}/rating/facets`](https://apis.io/developer/api/ratings) | `get_provider_facets` | Understanding |
| Chart the movement | [`GET /providers/{slug}/rating/history`](https://apis.io/developer/api/ratings) | `get_rating_history` | Understanding |

For linting a contract in a pipeline, the API Evangelist side offers `validate_api` on [its own MCP server and developer area](https://developer.apievangelist.com/).

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).
