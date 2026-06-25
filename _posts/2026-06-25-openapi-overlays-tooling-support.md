---
published: true
layout: post
title: OpenAPI Overlays Tooling Support Across Open-Source and Commercial Services
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-tooling-support.png
date: 2026-06-25
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Tooling
  - Open Source
  - APIs
---
The [OpenAPI Overlay Specification reached a stable 1.0.0 release](https://www.openapis.org/blog/2024/10/22/announcing-overlay-specification), and the tooling has been steadily catching up ever since. Overlays give you a clean, repeatable way to apply a list of actions to an OpenAPI document — strip internal endpoints before publishing, inject examples, tweak a spec before SDK generation, or speak to multiple audiences from a single source of truth — all without forking or hand-editing the underlying description. I keep getting asked which tools actually support overlays today, so I wanted to round up the open-source libraries and CLIs alongside the commercial services, and link to all of them in one place.

## Open-Source Libraries and CLIs

The reference JS implementation is [openapi-overlays-js](https://github.com/lornajane/openapi-overlays-js), written by Lorna Mitchell. It is actively maintained and has a few contributors, though on its own it ships as a library rather than a CLI.

[bump-cli](https://github.com/bump-sh/cli) (from [Bump.sh](https://bump.sh)) is probably the most-used entry point. The CLI wraps this up so you can run `bump overlay openapi.yaml overlays.yaml > openapi.public.yaml` to apply an overlay, or fold it into a `bump deploy`. You don't need to be a Bump.sh customer to use the overlay command itself.

[openapi-format](https://github.com/thim81/openapi-format) (npm) added overlay support and went a step further. The maintainers built a [Playground](https://openapi-format.com), a web interface to help folks work with overlays in a visual way, on top of its existing tidy/sort/filter utilities — useful if you want a GUI rather than hand-writing JSONPath.

[overlays-cli](https://github.com/ponelat/overlays-cli) (by Josh Ponelat) is a lightweight, pipe-friendly CLI — `cat overlay.yml | npx overlays-cli@latest` — explicitly built against the OAI spec. It is described as a prototype but handy for quick experimentation.

[openapi-overlay](https://github.com/speakeasy-api/openapi-overlay) is Speakeasy's standalone, open-source Go implementation of the Overlay specification, and it powers the playground covered below. If you are building in Go and just want the overlay engine, this is the dependency to reach for.

[Speakeasy's openapi toolkit](https://github.com/speakeasy-api/openapi) folds that engine into a broader open-source Go CLI and library, exposing `openapi overlay` commands to `compare`, `apply`, and `validate` overlays as part of a larger OpenAPI toolchain.

[libopenapi](https://github.com/pb33f/libopenapi) (by Dave Shanley / pb33f) is a high-performance Go parser and toolkit that now offers full Overlay and Arazzo support alongside OpenAPI 3.x — the foundation for a lot of Go-based API tooling, so overlays come along for free if you are already building on it.

Worth noting an adjacent tool: [openapi-filter](https://github.com/Mermade/openapi-filter), which predates overlays and handles the common "strip internal endpoints before publishing" use case via `x-internal` flags. Not technically an overlay engine, but it solves overlapping problems. In a similar spirit, [Redocly CLI](https://github.com/Redocly/redocly-cli) tackles the same jobs through its own [decorators](https://redocly.com/docs/cli/decorators/) rather than native overlay support — a different mechanism aimed at the same outcomes.

## Commercial / SaaS Platforms

[Speakeasy](https://www.speakeasy.com) (SDK generation) is the most invested commercial player. The Speakeasy toolchain utilizes a homegrown and open-source implementation, and they have released an [Overlay Playground](https://overlay.speakeasy.com) so you can experiment online without installing anything. They use overlays heavily to tweak specs before SDK generation.

[Bump.sh](https://bump.sh) (documentation hosting) supports overlays end-to-end through its CLI, API, and GitHub Action, so you can merge an overlay into a spec and deploy versioned docs from it.

[Zuplo](https://zuplo.com), and its open-source docs renderer [Zudoku](https://zudoku.dev), are active in this space too — Zudoku supports applying overlays to OpenAPI documents as part of rendering, and the team sponsors the tools directory.

## Find the Latest

The most authoritative, continually-updated list lives at the [OpenAPI Tools overlays collection](https://openapi.tools/collections/overlays) and the [OAI Overlay-Specification repository](https://github.com/OAI/Overlay-Specification), which both maintain a curated set of implementations. The tooling is still early compared to core OpenAPI, but the specification is stable, the engines are interoperable, and there are now enough open-source and commercial options that you can pick the one that fits your stack — and swap it out later without rewriting your overlays. That is exactly the kind of standard-plus-artifact durability I keep arguing for: the tools will come and go, but your overlay documents keep working.
