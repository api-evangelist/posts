---
published: true
layout: post
title: 'The Specification Layer Now Has a Home'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-specification-layer-now-has-a-home.png
date: 2026-10-26
author: Kin Lane
tags:
  - Specifications
  - Standards
  - OpenAPI
  - AI Agents
  - Linux Foundation
  - Newsletter
  - Community
---
For twelve weeks I've been reading a set of specification repositories every Monday and writing up what actually changed in them — not what was announced, what merged. That work now has a home on the API Evangelist standards site: **[The Specification Layer](https://standards.apievangelist.com/specification-layer/)**, a single page that lists every specification I follow, links to the newsletter that reports on them, and lays out the alignment work I do alongside the people who maintain them.

## Why a page

Most of what an API is built on is decided in a small number of repositories and the calls around them. OpenAPI 3.3 gained a new top-level keyword last week, A2A's draft changed how agents are discovered, and SLSA defined a new build level — and almost none of that showed up in anyone's feed. The [newsletter](https://newsletters.apievangelist.com/specifications/) exists to catch it. The page exists so the list itself is public: if you want to know what I'm watching, or argue that I'm watching the wrong things, it's all in one place.

## What's on it

**Fifty-two specifications** in seven groups, each with who stewards it, where it lives, and its entry in the standards catalog:

- **The description layer** — OpenAPI and its new security companion specification, Arazzo, Overlays, AsyncAPI, GraphQL, JSON Schema, Protocol Buffers, gRPC and Open Resource Discovery.
- **AI & Agents** — a new group as of today: MCP and its registry, A2A, the AI Catalog, ONNX, OASF, AGENTS.md, Agent Skills, OpenTelemetry's GenAI conventions and TRACE.
- **Events, telemetry and the data plane** — CloudEvents, xRegistry, OpenTelemetry and its semantic conventions, OTLP, OpenMetrics, xDS and Envoy.
- **Identity, policy and data rights** — SPIFFE, OpenFeature, Cedar and PDPP.
- **Supply chain and artifacts** — SPDX, the three OCI specifications, in-toto, OSV, SLSA, TUF, Notary, Sigstore, Security Insights, OpenVEX, OpenChain and the Open Component Model.
- **Financial services** — FDC3, CALM, the FINOS Common Domain Model and x402.
- **Release-path dependencies** — the build tooling the specifications are published through, because when it breaks, releases stop.

Forty-six of them form the core series I compare week over week; six are newer or narrower and reported alongside. The list grew a lot this week. I added A2A, the AI Catalog and ONNX to the core, then stepped back to ask what else was missing, and added twelve more — including Cedar, because a policy language belongs next to OPA and the work happening in [OpenLint](https://openlint.org). Every one of the fifty-two now has an entry in the catalog. The page is generated from the newsletter's own registry, so the two can't drift apart.

## The alignment work

Reading repositories is half of it. The other half is showing up, and the page lists what that has looked like lately, each item linked to its public record:

- **Being in the rooms** — the OpenAPI, Overlays and Arazzo calls, the A2A AI Catalog group, MCP working groups and OpenLint's office hours, written up so others can follow along.
- **Funding the specifications we depend on** — [a public list](https://apievangelist.com/2026/10/23/if-you-depend-on-openapi-please-become-a-member/) of companies that build on OpenAPI, Arazzo and Overlays and aren't members of the OpenAPI Initiative.
- **One front door, not many** — mapping every `/.well-known/` path on the [Well-Known URIs page](https://standards.apievangelist.com/well-known/), following how the agent protocols are converging on the AI Catalog, and asking IANA to register `/.well-known/apis.json`.
- **Measuring adoption rather than announcements** — like counting the [first Personal Agent Protocol files](https://apievangelist.com/2026/10/19/the-first-poppy-files-and-the-one-a-vendor-wrote/) in the wild.
- **Keeping specifications small and composable** — [an overlay is a layer, not a diff](https://apievangelist.com/2026/10/08/an-overlay-is-a-layer-not-a-diff/).

None of this is a standards body or a competing effort. It's an observer's job done in public: read what changed, report it honestly — including the weeks I get it wrong — and help the pieces fit together for the people building on top of them.

## Come and help

If you maintain one of these specifications, check that I've described it correctly. If you depend on one I'm not tracking, tell me which, and why. And if you want the weekly read, [the archive is here](https://newsletters.apievangelist.com/specifications/) — it goes out every Monday.
