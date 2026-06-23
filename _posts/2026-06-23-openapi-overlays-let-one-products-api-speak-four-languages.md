---
published: true
layout: post
title: OpenAPI Overlays Let One Products API Speak Four Languages
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-let-one-products-api-speak-four-languages.png
date: 2026-06-23
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Localization
  - APIs
  - Templates
---
I keep a small, deliberately boring API around for teaching: a [Products API](https://github.com/api-evangelist/products-api). It does exactly what you'd expect — list products, create a product, fetch one, update it, delete it, cancel it — and nothing more. It is a template, not a production service, and that is the whole point. When I want to demonstrate a concept without the noise of a real business domain getting in the way, the Products API is the canvas. Lately the concept I've been demonstrating on it is overlays, because overlays solve a problem every provider eventually trips over: the contract is fine, but it needs to *read* differently for different audiences, and you really do not want to fork the contract to make that happen.

Here is the scenario. The Products API has one canonical OpenAPI document, and it is written in English. But the team that consumes it spans four locales — German, French, Italian, Dutch — and the human-readable parts of the spec, the summaries and descriptions and error messages, all need to be in the reader's language. The naive answer is to copy `products-api-openapi.yml` four times and translate each copy. That answer is a trap. The moment you do it, you have five documents that drift, five things to keep in sync every time you add an endpoint, and no single source of truth about what the API actually *is* versus how it happens to be described this week. Translation is a presentation concern. It should never be allowed to fork the contract.

The [OpenAPI Overlay Specification](https://spec.openapis.org/overlay/latest.html) exists precisely so it doesn't have to. An overlay is a separate document that *points at* a base description and declares a list of targeted changes against it, using JSONPath to say where and an `update` block to say what. The base never changes. The overlay is applied on top of it to produce a localized result on demand. In the Products API repo each language gets its own overlay that extends the one canonical spec:

```yaml
overlay: 1.1.0
info:
  title: Deutsches Overlay für Products API
  version: 0.1.0
  description: Übersetzt menschenlesbare Felder, ohne die OpenAPI-Beschreibung zu ändern.
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      summary: Produkte abrufen
      description: Gibt die Liste aller Produkte für den authentifizierten Benutzer zurück.
  - target: $.info
    update:
      title: Produkte-API
      description: Eine API-Vorlage für eine Produkte-API, für Storytelling, Schulungen und Wissensdatenbanken.
```

Read that `actions` list as a set of surgical instructions. The first one says: find the `GET /products` operation and replace its `summary` and `description` with the German text. The second reaches up into `$.info` and translates the title and overview. The English document is never touched — it sits there as the authority, and the overlay is a transformation layer hovering above it. Run the base through the German overlay and you get a German OpenAPI document out the other side; run it through the French overlay and you get a French one. Four overlays, one contract, no forks.

What makes this genuinely powerful rather than just tidy is the targeting. JSONPath means an overlay isn't limited to the obvious top-level fields — it can reach any node in the document, including the deep ones nobody wants to translate by hand. The German overlay in the repo walks the whole tree: every operation summary, every response description, the schema descriptions down in `components`, the `RateLimit` and `Retry-After` header docs, and the `title`/`detail` of every Problem Details example for every error response. That last part matters more than it looks. The messages a developer sees when something goes wrong — `Sie haben das Ratenlimit überschritten`, `Die angeforderte Ressource wurde nicht gefunden` — are exactly the moments where reading the error in your own language is the difference between a quick fix and a support ticket. Overlays let you localize the unhappy path with the same precision as the happy one:

```yaml
  - target: $.components.responses.TooManyRequests.content['application/problem+json'].example
    update:
      title: Zu viele Anfragen
      detail: Sie haben das Ratenlimit überschritten.
```

The structural decision I made in the repo is worth calling out, because it's the part people get wrong. The overlays are organized locale-first: a folder per language, and inside it the overlay for the OpenAPI sitting right next to the overlays for the schemas. Adding Spanish later is one new folder, not a sprawl of files with `-es` suffixes scattered across the tree. Each overlay's `extends` points at the canonical raw URL on the default branch, so the link to the source of truth is explicit and survives the files being moved around. The base is the base, the overlays are clearly subordinate to it, and you can see at a glance that there is one contract here being presented five ways, not five contracts pretending to agree.

This is the mental model I want people to walk away with: your OpenAPI document describes what the API *is*, and that description should have exactly one home. Everything else — the German reading of it, the French reading, the trimmed-down partner version, the internal annotated version — is a *projection* of that one truth, expressed as an overlay you can regenerate any time the base changes. The Products API is a toy, but the discipline it's demonstrating is not. The day your contract needs to speak to more than one audience, reach for an overlay before you reach for a copy. Forks are how contracts die; overlays are how they stay alive while still meeting everyone where they are.
