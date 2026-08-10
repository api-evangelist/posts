---
published: true
layout: post
title: 'The Specification Layer, A New Weekly Newsletter'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-specification-layer-a-new-weekly-newsletter.png
date: 2026-08-10
author: Kin Lane
tags:
  - Specifications
  - Standards
  - Newsletter
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - Linux Foundation
  - Governance
  - APIs
---
Every week I read the API industry's blogs and distill them into a newsletter. That covers what vendors and practitioners *wrote*. It does not cover what actually changed inside the specifications everything else is built on top of. Nobody covers that, so starting today I do. It is called **[The Specification Layer](https://newsletters.apievangelist.com/specifications/)**, it goes out on Mondays, and [you can subscribe to it here](https://usecommune.com/n/the-specification-layer).

The reason it exists is a shift most of us have not fully registered. The Linux Foundation quietly became the neutral home of nearly every contract that describes an API. OpenAPI and its newer siblings Arazzo and Overlay, AsyncAPI, GraphQL, JSON Schema, gRPC, CloudEvents, OpenTelemetry's OTLP, OpenMetrics, xDS, SPIFFE, OpenFeature, SPDX, OpenChain, the three OCI specs, in-toto, OSV, SLSA, TUF, the Notary Project, and Sigstore — one foundation, one IP framework, one governance model. Add Protocol Buffers, which is Google's and not LF-governed but sits underneath half of that list, and FINOS's FDC3 and CALM, and you have thirty repositories that between them define how REST, event-driven, RPC, and GraphQL APIs get described, how telemetry is encoded, how workloads prove their identity, and how software artifacts are signed and inventoried.

Thirty repositories. No weekly read of them anywhere. So I built a harvester that goes at the repositories themselves — merged pull requests, releases, milestone boards, discussions — plus twenty-five foundation and project feeds as a thin narrative layer on top. Not commentary about OpenAPI, the merges into `OAI/OpenAPI-Specification`. Not a post about supply-chain security, the diff that added WordPress to the OSV schema.

[Issue one](https://newsletters.apievangelist.com/specifications/) went out this morning, covering August 2nd through August 9th, and it found some things I did not expect to lead with.

**One hundred and fifty pull requests merged, and eighty-nine of them were robots.** Copybara, Dependabot, Renovate, and the OpenAPI publisher bot account for 59% of all the motion in the specification layer. That is not a complaint — branch-sync automation is how the OpenAPI Initiative keeps four live version branches coherent, and Copybara is how Protobuf's development inside Google reaches the public repo at all. But it means any headline count of specification activity is mostly measuring machines, and I would rather establish that in issue one than quietly inflate a number every week for a year. The inverse cut is the interesting one: four specifications had zero bot merges, every change made by a person — JSON Schema, SPDX, SLSA, and SPIFFE. Those are also the ones where the merges are prose. Wording, definitions, conformance dependencies. That is what a specification under genuine editorial work looks like, and it does not automate.

**OpenAPI has a patch release fully loaded and nobody has pulled the trigger.** The v3.2.1 milestone stands at 9 of 9 issues closed with a September 30th due date. Sitting next to it, v3.3.0 is at 17 of 45 closed with a due date of September 3rd. One of those two dates is going to move, and now there is a public baseline to watch it against.

**Twelve of the thirty specifications did not move at all** — and silence means completely different things across that list. CloudEvents, TUF, and the OCI specs are *finished*; OCI image-spec's last merged pull request was in 2017 and the format still runs every container registry on earth. A stable graduated specification is the goal, not a warning sign. Moonwalk is the one to actually notice: the OpenAPI 4.0 design effort last merged anything on March 31st, 2025. Every few weeks somebody asks me what is happening with OpenAPI 4. The answer, from the repository rather than from a rumor, is nothing — and 3.3.0 is where the work is.

**And the announcement channels are rotting.** While wiring this up I probed every publishing channel these projects offer. Sigstore — the project whose entire purpose is making software supply chains verifiable — publishes no machine-readable feed of its own announcements. OpenSSF's `/blog/feed/` returns HTTP 200 with zero items, which is worse than a 404 because every tool downstream records it as a success. Protobuf's feed stamps every item `Mon, 01 Jan 0001`. Eight of these projects have not posted anything in months, three in over a year. The repositories are alive. The channels are not. If you are trying to track this layer by subscribing to blogs, you are watching the wrong surface — which, uncomfortably, is the argument for this newsletter existing.

Every number in it comes from a harvest run against the GitHub REST and GraphQL APIs and those twenty-five feeds, over a fixed window. Merged pull requests counted by `merged_at`. Bot attribution by author login. Milestone percentages are GitHub's own open and closed counts, read live. A source that fails to respond gets reported as an error, never as zero activity, because "quiet week" and "my harvester broke" look identical in a chart and only one of them is true. If a number is wrong, the repository is the authority and I will correct it in the next issue.

There are now two weekly emails from me, and they are deliberately different jobs:

- **[The API Evangelist Newsletter](https://usecommune.com/n/apievangelist)** — what the API industry published this week, read across thousands of API providers. MCP, OpenAPI, governance, agents, and the fundamentals underneath.
- **[The Specification Layer](https://usecommune.com/n/the-specification-layer)** — what actually merged into the contracts, read straight off the thirty specification repositories.

Subscribe to either, or both. Every issue of both lives at [newsletters.apievangelist.com](https://newsletters.apievangelist.com), and the specification archive is at [newsletters.apievangelist.com/specifications/](https://newsletters.apievangelist.com/specifications/). If there is something missing from the harvest you want to see, tell me — the goal is to bring activity across all of these specifications into one view, so we can think harder about what is actually needed across them.
