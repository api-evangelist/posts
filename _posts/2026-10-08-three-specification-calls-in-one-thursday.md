---
published: true
layout: post
title: 'Three Specification Calls in One Thursday'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/three-specification-calls-in-one-thursday.png
date: 2026-10-08
author: Kin Lane
tags:
  - OpenAPI
  - AI Catalog
  - A2A
  - OpenLint
  - Specifications
  - Community
  - APIs
---
Thursdays have become my specification day. Today I sat in on three calls back to back: the OpenAPI Initiative's weekly community call, the A2A AI Catalog working session, and OpenLint's office hours. I want to start sharing what I learn from these rooms on a regular basis, for two reasons. The specifications most of us build on are decided in calls like these, by small groups of people giving up an hour of their week. And almost nobody building on top of those specifications shows up. If you make tools that read, lint, generate from or validate OpenAPI, Arazzo, Overlays, AI Catalog or anything else in this space, these are your meetings. Here is what I took away from today's three.

## OpenAPI: the work is now organized around interest groups

The OpenAPI community call is where the OpenAPI Specification, Overlays and Arazzo get worked through in the open. A few things I learned today:

- **Overlay 1.2 is live on the spec site, with matching JSON Schemas**, and those schemas have been submitted to SchemaStore, so editors that rely on it will start validating Overlay 1.2 documents. If you build tooling, that is the moment your users start asking for 1.2 support.
- **Companion specifications will be versioned at the special interest group level.** OpenAPI is moving features governed by outside standards (deprecation and sunset headers, security) into companion specifications owned by special interest groups like Security and Lifecycle, and today the group confirmed it will version them per group rather than per individual feature. That's simpler to publish and simpler for tooling to support.
- **Runtime beats the description.** The most useful idea I heard was about what belongs in an OpenAPI description versus what an API should tell you at runtime. When OAuth metadata, an authorization server and a description disagree, the most dynamic source wins. Putting values like a deprecation date or an authorization URL in the description is effectively caching them, and caches go stale. It's a principle worth applying to anything you hard-code into a contract.
- I learned enough about JOSE to [write a whole post about it](https://apievangelist.com/2026/10/08/what-i-learned-about-jose-on-todays-openapi-call/), and the call ended on the Overlays purpose discussion I [weighed in on this morning](https://apievangelist.com/2026/10/08/an-overlay-is-a-layer-not-a-diff/).

## AI Catalog: a release candidate before AgentCon

The AI Catalog is the A2A project's specification for publishing catalogs of agents, MCP servers and other AI artifacts so they can be discovered and trusted. The call is recorded and [the recording is public](https://zoom.us/rec/share/w2ZegtvNPoP5Q4ccL8l5SOowu8OYemo9OKpOBghNrCjC4xatx0xScEoq0aDc_Qw2.W72wt3bJoyfxyKHx). What I took away:

- **The group is pushing for a 0.9 release candidate before AgentCon**, with the core catalog entry locked and the trust work following. As Darrel Miller, who chairs the call, put it, there are a lot of people who want to use AI Catalog who aren't rushing to create trust manifests, so agreeing that nothing outside the trust manifest will change is the milestone that matters most.
- **Trust manifests are becoming self-contained.** [#117](https://github.com/Agent-Card/ai-catalog/pull/117), still open and the one change slated for 0.9, lets independent parties sign a trust manifest about an artifact, carrying its own subject (identifier, type and digest) so it can be verified on its own and then checked against the catalog entry. Chained attestations and an entry-level signature were explicitly left for follow-up pull requests. It was a good hour of watching a group keep a pull request from growing.
- **An "awesome AI catalogs" repository is coming**: a catalog of catalogs hosted on GitHub Pages, linted, with a large disclaimer. Evidence of adoption, not something to point an agent at blindly. If you publish an AI Catalog, that's where you'll want to be listed.
- One small change, [#119](https://github.com/Agent-Card/ai-catalog/pull/119), merged during the call: only the Go and Rust SDKs stay listed as official implementations, and everything else moves to community projects. Housekeeping, but the kind that matters for a young specification.

## OpenLint: open for business first

[OpenLint](https://openlint.org/) is the community fork of Spectral, and today was its [second office hours](https://openlint.org/meetings/office-hours/2026-10-08/) ([video](https://youtu.be/LBjpMAO77o4)). The priority is plain: get OpenLint open for business, on par with Spectral and with governance in place, before adding anything new.

- **The specification and its JSON Schema are up for review** in [openlint/spec#2](https://github.com/openlint/spec/pull/2), and will merge in a couple of weeks without objections.
- **Backwards compatibility means more than rulesets.** Every Spectral ruleset must keep working, but as Jakub Rożek pointed out, compatibility also covers the JavaScript API that editors embed and the lint results themselves: the same ruleset should produce the same messages and ranges. That needs a conformance suite to measure.
- **Telemetry is out**, the rename is underway, and a migration guide from Spectral is next. There was clear interest in a Language Server rather than only a VS Code extension.
- **Governance and funding are being set up in the open**, with Open Collective in place, and a "use of AI" page is coming that rates each issue or pull request from no AI to fully automated, agreed in discussion first.

## Why I keep showing up, and why you should

What strikes me most, three calls in, is how much of what ends up in our tools is decided by a handful of people who would genuinely welcome more voices, especially from people who build on top of their work. Tooling vendors are the ones who have to implement every new feature, every rename and every edge case. If you're building a linter, a generator, a gateway, a portal or an agent framework on top of these specifications, an hour on one of these calls will tell you what's coming months before it lands in a release, and you can still influence it.

All three are open:

- **OpenAPI Initiative community call** — Thursdays, 9am Pacific. The agenda for each call is an issue in the [OpenAPI repository](https://github.com/OAI/OpenAPI-Specification/issues?q=is%3Aissue+label%3AHousekeeping), and the [OAI calendar](https://zoom-lfx.platform.linuxfoundation.org/meetings/openapi) lists the Overlays and Arazzo calls too.
- **A2A AI Catalog** — Thursdays, 11am Eastern, on the [A2A calendar](https://zoom-lfx.platform.linuxfoundation.org/meetings/agent2agent).
- **OpenLint office hours** — every other Thursday. Agendas are posted in [openlint/community](https://github.com/openlint/community), and past sessions are on [openlint.org](https://openlint.org/meetings/).

I'll keep writing up what I learn. Come and join in, and if you do, say hello.
