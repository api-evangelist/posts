---
published: true
layout: post
title: 'Fastify Now Speaks OpenAPI 3.2'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/fastify-now-speaks-openapi-3-2.png
date: 2026-09-29
author: Kin Lane
tags:
  - OpenAPI
  - OpenAPI 3.2
  - Fastify
  - Tooling
  - Code-First
  - HTTP
  - APIs
---
The OpenAPI Initiative [announced OpenAPI 3.2](https://www.openapis.org/blog/2025/09/23/announcing-openapi-v3-2) on September 23rd, 2025. Almost exactly a year later, on September 22nd, the Fastify project shipped [fastify-swagger v9.9.0](https://github.com/fastify/fastify-swagger/releases/tag/v9.9.0), and its release notes are a single line: OpenAPI 3.2.0 compatibility. It is a small release, but it is the kind I pay attention to, because a specification version only becomes real when the tools that generate contracts can produce it.

Most OpenAPI documents are not written by hand. They are generated from code, by a framework plugin like this one, every time an app starts or a build runs. So when a code-first framework learns a new version of the spec, a whole population of APIs can move with a one-line config change. When it does not, they cannot move at all.

## What changed

The work came in through [pull request #949](https://github.com/fastify/fastify-swagger/pull/949) from Tony133, closing [an issue](https://github.com/fastify/fastify-swagger/issues/906) that asked for 3.2 support in December. The pull request description is one of the clearer explanations I have read of what 3.2 means for a generator. OpenAPI 3.2 is additive over 3.1 and uses the same JSON Schema dialect, so most of it already worked: the version string passed straight through, and the new hierarchical tag fields (`summary`, `parent` and `kind`) came out unchanged. What was missing was narrower:

- **`$self` was being dropped.** 3.2 adds a top-level `$self` so a document can state its own URI, which matters for resolving references between documents. It is now passed through.
- **Custom HTTP methods had nowhere to go.** Fastify lets you register methods like `PROPFIND`. OpenAPI could never describe them, because the Path Item Object only had fixed fields for the standard methods. 3.2 adds `additionalOperations`, and fastify-swagger now puts those routes there, keyed by the upper-case method name, when you target 3.2 or later. Older versions are unchanged, because they cannot describe those methods at all.
- **`QUERY` is now tested.** The new HTTP QUERY method, a safe, idempotent request that is allowed to carry a body, is a fixed field in 3.2. Fastify already supported it; now there are tests proving the generated document describes it correctly.
- **There are TypeScript types for 3.2.** A new `OpenAPIV3_2` namespace covers the document, tag, server and path item additions, and it works as both input and output of the plugin's transform hook.

The README now explains how to pick the OpenAPI version, what gets passed through, and how custom methods are rendered. About 250 lines, most of them tests and types.

## The honest part of the pull request

What I appreciated most were the notes at the bottom, because they describe the state of the ecosystem better than any survey would.

`@apidevtools/swagger-parser`, one of the most widely used OpenAPI parsers and validators in the JavaScript world, rejects `openapi: 3.2.0`. It supports up to 3.1.2. So the new tests assert on the structure of the generated document instead of validating it, and validation can be added once the parser catches up. The shared `openapi-types` package does not ship 3.2 types yet either, which is why Fastify built its own on top of the 3.1 ones. And several 3.2 additions that live in objects you write yourself, such as `components.mediaTypes`, the OAuth 2.0 device flow, `in: querystring` parameters and `itemSchema` for streaming, are passed through at runtime but not typed yet.

That is the real shape of a specification rollout. The spec ships. Then the generators, parsers, validators, type packages, editors and linters each have to catch up, on their own schedules, maintained by different people. A framework can produce a valid 3.2 document today that the most popular validator in its own ecosystem refuses to read. Two weeks ago I wrote about the same pattern in [VS Code finally catching up with JSON Schema 2020-12](https://apievangelist.com/2026/09/17/vs-code-is-finally-catching-up-with-json-schema-2020-12/). One tool at a time is how it happens.

## Why this matters beyond Fastify

Two of the things 3.2 brings are directly useful for the agent work I keep writing about. `QUERY` gives complex, read-only searches a proper home instead of forcing them into a POST that looks like a write. An agent deciding whether a call is safe to retry is much better served by a method that says so. And `$self` makes a contract addressable, which matters when documents reference each other across a large estate and a machine has to resolve them without a human.

On my side, the contracts in the [APIs.io](https://apis.io) catalog are standardized on 3.2.0, which means I am living with exactly the tooling gap this pull request describes. Every generator that learns 3.2 moves some providers closer to publishing it themselves, instead of me upgrading their contracts from the outside.

## What I would do

- **If you run Fastify,** upgrade to 9.9.0, set `openapi: '3.2.0'` in the plugin options, and look at what changes in your generated document. If you use custom HTTP methods or QUERY, this is the first time your contract can describe your whole API.
- **If you maintain a parser, validator or type package,** this is your nudge. The generators are moving, and a validator that rejects the current version of the spec pushes people back to the old one.
- **If you maintain another code-first framework,** this pull request is a good template: pass through what already works, add what is structurally new, test it, and say plainly what the rest of the ecosystem is not ready for yet.

Thanks to Tony133 and the Fastify maintainers for doing this carefully and in public. A year after 3.2 shipped, this is what adoption actually looks like, one release note at a time.
