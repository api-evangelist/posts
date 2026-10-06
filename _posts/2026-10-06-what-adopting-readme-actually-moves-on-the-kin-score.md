---
published: true
layout: post
title: 'What Adopting ReadMe Actually Moves On The Kin Score'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-adopting-readme-actually-moves-on-the-kin-score.png
date: 2026-10-06
author: Kin Lane
tags:
  - ReadMe
  - Vendor Facets
  - Kin Score
  - Developer Portals
  - Agent Readiness
  - Vendors
  - APIs.io
  - APIs
---
Every API provider I score depends on vendors for part of its surface: a documentation platform, a gateway, an SDK generator, a status page, an identity provider. When a score moves, some of that movement is the vendor's doing and some is the provider's. For a long time I could not say which. Now I can, one vendor at a time, and [ReadMe](https://apis.io/providers/readme/#vendor-facets) is the first one I want to walk through in public, because it is the broadest developer-portal lift in the set and because the answer is more interesting than "adopt ReadMe, score goes up."

## What a vendor facet is

A vendor facet is a measured mapping from a vendor's features to the specific [Kin Score](https://apis.io/rating/) checks those features can move for a provider that adopts it. For ReadMe that is seventeen features, each read from ReadMe's own documentation, mapped to the checks they reach, with three qualifiers that matter more than the points:

- **Saturated.** Almost everyone already earns the check, so the vendor cannot move it for most buyers. Documentation present, API reference present, authentication documented: 94 to 95 percent of providers with a contract and docs already pass. ReadMe gives you these, and so does everything else.
- **Partial or discounted.** The feature only reaches a graded check's lower tier. ReadMe's recipes count as examples, but the examples dimension reads the OpenAPI first, so recipes reach the fallback and earn 1.8 of 7 points. ReadMe's agent-skills index advertises skills nobody can show the provider wrote, so it grades as derived: 1.3 of 5.
- **Platform.** ReadMe's hosted MCP server is the most capable docs MCP I have looked at. Its execute-request tool actually calls the provider's API. But it is one ReadMe template served under readme.io or the hub domain, so the rubric grades it `platform` at a quarter credit: 3 of 12 points.

Add it up and ReadMe can reach 31 of 139 agent-readiness points, 26.8 of 42 on Developer Ergonomics, 10 of 54 on Discoverability, 9 of 38 on Operational Transparency, and 24 of 211 on Contract Quality, that last one only for a provider with no contract at all who builds one in ReadMe's API Designer. ReadMe renders the OpenAPI it is given. It does not edit it, generate SDKs or a CLI, or publish a governance ruleset, so operation descriptions, error documentation, SDK counts and rulesets are out of its reach entirely.

## What ReadMe ships that earns nothing

This is the part I think vendors and buyers both need, and it is the part a sales deck never has:

- **The MCP server card and WebMCP tools.** Real agent discovery surfaces, and no check reads them yet.
- **The health check banner.** A banner relaying Statuspage.io is not a status page. The provider still needs its own.
- **Postman collection sync.** ReadMe consumes a collection and offers a fork button; the collection has to be one the provider publishes.
- **Rendering a spec's examples.** Rendering writes nothing into the contract. Contract-side examples are the provider's own work.

Three more ReadMe features are good practice the rubric simply does not score yet: Markdown for agents through `Accept: text/markdown` and `.md` twins, the SEP-1649 server card, and the `llms.txt` query affordance. Those are on my list, not ReadMe's.

## What 122 ReadMe customers actually show

The mapping is a model. The catalog checks it against reality, because the pipeline detects ReadMe customers from CNAMEs, headers, URL shapes and markup, never from a name match. It found 196, of which 122 are in the scored baseline. Against 5,094 comparable providers:

- **Composite: 48.1 versus 48.0.** No difference worth the name.
- **Agent readiness: 34.4 versus 32.5.** A small edge.

Association, not cause. But the per-check numbers are where the story is, and they point in two directions at once.

**Where ReadMe customers lead**, on the features ReadMe switched on for everyone:

| Check | ReadMe customers | Everyone else | Gap |
|---|--:|--:|--:|
| Publishes `llms.txt` | 85.2% | 64.6% | **+20.6** |
| Webhooks advertised | 61.9% | 35.5% | **+26.4** |
| Console or sandbox | 43.0% | 33.0% | **+10.0** |
| Serves a `.well-known` API catalog | 5.7% | 1.7% | **+4.0** |
| Support channel | 74.2% | 68.9% | **+5.3** |

**Where ReadMe customers trail**, on the basics every developer portal exists to provide:

| Check | ReadMe customers | Everyone else | Gap |
|---|--:|--:|--:|
| Documentation | 63.1% | 95.7% | **−32.6** |
| API reference | 61.1% | 94.9% | **−33.8** |
| Developer portal | 49.6% | 63.6% | **−14.0** |
| Getting started guide | 50.0% | 64.0% | **−14.0** |
| Published example corpus | 4.9% | 12.9% | **−8.0** |

Read that second table again. ReadMe customers are a third less likely to get credit for documentation and an API reference. Not because the docs are missing. They are there, on ReadMe, and they are usually good. **It is because these are pointer checks: the score reads what a provider declares in its own APIs.json, and providers who hand their portal to a vendor tend to stop describing it themselves. The vendor did the work, and the provider never claimed it.**

That single finding explains most of why the composite barely moves for ReadMe customers. The lift on the left is real and the gap on the right is self-inflicted, and the gap is bigger. It is also the cheapest fix in this whole post: declare the portal, the reference, the getting-started page and the recipes as pointers in your own index, and the points you already earned show up.

## What it would move if everyone adopted it

Run the model across the 8,977 providers that publish a contract and the median lift from adopting ReadMe, with every conditional row excluded, is 8.6 points of composite (13.5 at the 90th percentile) and 8.1 points of agent readiness (9.4). That is a meaningful lift and an honest one, because it comes from the features that are not saturated: discoverability, webhooks, the console, the changelog, and the agent surfaces, graded down where authorship is the platform's.

## The rule underneath all of this

A vendor facet is a model, not a score. Adopting ReadMe changes a provider's Kin Score only when the provider publishes the resulting artifacts on its own surface. Nothing in this mapping writes a score, and no sponsorship or partnership can. I have said [the rating is not for sale](https://apis.io/rating/), and this is where that gets tested, because the obvious business is to sell vendors a better-looking mapping. The mapping is published, the method is published, the customer detection is published, and every row says what the provider must do to earn the points. If ReadMe disagrees with a row, the repository is open and I will read the pull request.

I profiled ReadMe against rubric 0.22, on September 25th, a few days before [0.23 shipped](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/). The provenance changes in 0.23 cut in ReadMe's favor on one row: an `llms.txt` generated from the provider's own docs on the provider's own domain reads as the provider's. I will refresh the mapping on the next pass, and I will keep working through the list: Mintlify is done, and Docusaurus, Redocly, GitBook, Stoplight, Fern, Bump.sh and Scalar are next. If you sell to API providers, this is what your product is worth on the score, measured. If you buy from them, this is the part of the deck to ask for.
