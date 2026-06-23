---
published: true
layout: post
title: Standalone JSON Schemas, Overlaid for Every Purpose
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/standalone-json-schemas-overlaid-for-every-purpose.png
date: 2026-06-24
author: Kin Lane
tags:
  - JSON Schema
  - Overlays
  - OpenAPI
  - Localization
  - APIs
---
Yesterday I wrote about [localizing the Products API with OpenAPI overlays](https://apievangelist.com/2026/06/23/openapi-overlays-let-one-products-api-speak-four-languages/), treating the whole API description as one document to be translated four ways. Today I want to go down a level, because the more interesting structural decision in that little [Products API](https://github.com/api-evangelist/products-api) template isn't the OpenAPI at all — it's that the data models don't actually live *inside* the OpenAPI. They live next to it, as standalone JSON Schema files, and that single choice is what makes everything else flexible.

Most people learn schemas as a thing that lives in `components.schemas` of an OpenAPI document, and they never question it. It's convenient, the tooling expects it, and for a long time it's fine. But it quietly couples your data models to one document and one purpose: describing an HTTP API. The Products API instead breaks each model out into its own file in a `schema/` directory — `Product.yml`, `Meta.yml`, `Problem.yml`, `LinksSelf.yml`, `LinksPagination.yml`, and the two response wrappers — plus an `index.yml` that stitches them together with references:

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
$id: https://api.example.com/schemas/index.yml
$defs:
  Product:
    $ref: Product.yml
  Meta:
    $ref: Meta.yml
  Problem:
    $ref: Problem.yml
  LinksPagination:
    $ref: LinksPagination.yml
```

Each of those files is a complete, self-describing JSON Schema with its own `$id`, valid and usable entirely on its own:

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
$id: https://api.example.com/schemas/Product.yml
title: Product
type: object
description: A Schema.org compliant product object.
required:
  - identifier
  - name
  - description
properties:
  identifier:
    type: string
    format: uuid
    description: Unique identifier for the product.
  name:
    type: string
    description: Name of the product.
  description:
    type: string
    description: The description of the product.
```

The reason this matters is that a standalone `Product.yml` can be pointed at by more than one consumer, and each consumer can want something different from it. The OpenAPI document references it to describe a request and response body. A validation pipeline references the *same* file to check that records coming off a queue are well-formed before they ever touch the API. A code generator reads it to emit a typed `Product` class. A documentation site renders it for humans. A data team maps it to their warehouse. One file, one definition of what a product is, serving five jobs — and critically, *not* trapped inside an OpenAPI document where only API tooling can reach it. The schema is the asset. The OpenAPI is just one of its customers.

Once the schema stands on its own, it becomes overlay-able on its own, and this is where it ties back to yesterday. Each language in the repo gets schema overlays that sit right beside the OpenAPI overlay — a `schema/` folder inside each locale — and each one extends a single standalone schema and rewrites just its human-readable `description` fields:

```yaml
overlay: 1.0.0
info:
  title: Product JSON Schema German Overlay
  version: 1.0.0
  description: German localization overlay for the standalone Product JSON Schema.
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/schema/Product.yml
actions:
  - target: $.description
    update: Ein mit Schema.org konformes Produktobjekt.
  - target: $.properties.identifier.description
    update: Eindeutige Kennung für das Produkt.
  - target: $.properties.name.description
    update: Name des Produkts.
```

Notice what is *not* in that overlay. There's no `type`, no `format`, no `required`, no `pattern` — none of the structural truth of the schema. The overlay touches `description` and nothing else, because translation is presentation and presentation is the only thing that's allowed to vary by audience. The shape of a product is the same in every language; only the words humans read about it change. That separation is the whole discipline: the base schema owns the structure, the overlay owns the wording, and the two never blur into each other. You could ship a validation overlay that tightens constraints for an internal pipeline, or a documentation overlay that adds examples for a public portal, all extending the exact same `Product.yml` without ever forking it.

This is the same lesson as the OpenAPI post, just applied one altitude lower and, I'd argue, more durably. An OpenAPI document is a description of an *API* — it has a shelf life tied to that interface. A well-factored JSON Schema is a description of a *thing*, and things outlive the APIs that move them around. By pulling the Products API's models out into standalone files, giving each its own `$id`, indexing them in one place, and layering purpose-specific overlays on top, you get data models that are reusable across validation, generation, documentation, and localization without any one of those purposes owning the definition. Stop burying your schemas inside your OpenAPI. Let them stand on their own, point everything that needs them at the same file, and use overlays when a specific audience needs a specific reading. The structure is the asset worth protecting; everything else is a projection of it.
