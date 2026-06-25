---
published: true
layout: post
title: The Many Use Cases for OpenAPI Overlays
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-many-use-cases-for-openapi-overlays.png
date: 2026-06-26
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - API Governance
  - Use Cases
  - APIs
---
After rounding up the [open-source and commercial tooling support for OpenAPI Overlays](https://apievangelist.com/2026/06/25/openapi-overlays-tooling-support/), the next question I keep getting is simpler and more important: what are people actually using overlays *for*? An overlay is just a list of actions applied to an OpenAPI document, but that small primitive turns out to solve a surprisingly wide range of problems. Here is what the specification's release and the implementations explicitly call out, followed by the use cases I think are still underexplored.

## What the Standard's Release Called Out

When the OpenAPI Initiative [announced Overlay 1.0.0](https://www.openapis.org/blog/2024/10/22/announcing-overlay-specification), it led with four scenarios:

- **Improving developer experience** — layering rich descriptions and examples in after the fact, especially when a spec is code-generated and ships with thin, machine-flavored content.
- **Filtering for multiple audiences** — stripping restricted, deprecated, or experimental endpoints to produce reduced versions of one parent description for public, partner, and internal consumers.
- **Translating and localizing** — one overlay per language applying translated titles, summaries, and descriptions, so you maintain a single source spec and many localized outputs.
- **Adding tool-specific content** — injecting the extra metadata a gateway, AI consumer, or SDK generator needs to do its best work, without polluting the canonical spec.

The recurring concrete example throughout the announcement was keeping examples realistic — an overlay that bumps every date example to a current date so your documentation never looks stale.

## What the Implementations Emphasize

The tools have converged on a consistent set of jobs:

- **SDK-generation prep** — [Speakeasy](https://www.speakeasy.com/openapi/overlays) uses overlays to tweak a spec before code generation (renaming operations, fixing types, adding vendor extensions) so the source stays clean.
- **Separation of concerns** — consumers and teams apply their own modifications independently of the upstream definition, which is essential when you do not own the spec you are consuming.
- **Public versus internal docs splits** — [Bump.sh](https://bump.sh) merges an overlay to produce a public spec and deploys versioned docs from it.
- **Visual authoring** — [openapi-format](https://openapi-format.com) built a GUI so you can compose overlays without hand-writing JSONPath.
- **Batch and reusable modifications** — one overlay applied across many specs, targeting subsets of operations with JSONPath (for example, tagging every operation that has query parameters).
- **Stripping internal endpoints** — the job that [openapi-filter](https://github.com/Mermade/openapi-filter) and [Redocly's decorators](https://redocly.com/docs/cli/decorators/) tackle through their own mechanisms.

The through-line across every implementation is that they independently land on the same two killer use cases: hiding and trimming for different audiences, and enriching examples and descriptions.

## The Use Cases I Think Are Underexplored

This is where overlays get interesting, because the primitive extends well past documentation convenience.

- **Governance as an artifact, not enforcement.** Instead of a linter that blocks a non-compliant spec, ship an overlay that applies the org standard — mandatory tags, security schemes, contact and license blocks, server templating. Governance becomes a reusable, version-controlled patch you can diff and audit. The standards and artifacts survive when the tools come and go.
- **Environment promotion.** One overlay per stage rewrites servers, auth URLs, and rate-limit notes for dev, staging, and production, so you maintain a single spec and generate environment-specific descriptions in your pipeline.
- **Monetization and plan tiering.** Free, Pro, and Enterprise become overlays that reveal or hide endpoints and adjust descriptions, so the same source spec drives every pricing tier's docs and SDKs.
- **MCP and AI-agent enrichment.** Agents and MCP servers need richer operation descriptions, usage hints, and disambiguation than humans do. Keep that agent-facing context in an overlay so your human docs stay lean and your agent surface stays rich, applied at build time rather than maintained twice.
- **Deprecation and migration choreography.** An overlay that marks a wave of endpoints deprecated with consistent sunset language, applied on a date, gives you a repeatable and reversible deprecation pass across many APIs at once.
- **Compliance and redaction profiles.** A regulated-market overlay strips fields or endpoints that cannot ship in certain jurisdictions, so the redaction logic lives as an inspectable artifact instead of a manual pre-publish checklist.
- **Brownfield correction without upstream access.** When an upstream spec is wrong and you cannot get a fix merged, an overlay is the clean, re-appliable patch that survives the next upstream regeneration, which is far better than a fork that drifts.
- **Test fixtures and mock generation.** Overlay in deterministic examples and edge-case values to feed mock servers and contract tests, kept separate from the human-readable documentation examples.

The unifying idea across all of these is that an overlay turns a one-off spec edit into a named, diffable, re-appliable transformation. That is what makes overlays a governance primitive and not just a documentation trick — and it is why I think we have only scratched the surface of what they are good for.
