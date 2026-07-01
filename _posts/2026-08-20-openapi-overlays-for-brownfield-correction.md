---
published: true
layout: post
title: 'OpenAPI Overlays for Brownfield Correction Without Upstream Access'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-brownfield-correction.png
date: 2026-08-20
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Integration
  - API Consumption
  - APIs
---

Every integration I have ever built eventually runs into the same wall: the OpenAPI I am consuming is wrong, and I cannot fix it at the source. The `price` is documented as a string when the server sends a number. A field the API absolutely requires is missing from the `required` list. The server returns a `429` all day long, but the spec pretends that response does not exist. The `servers` block points at some placeholder URL a code generator dropped in. And when I go to file the fix upstream, I hit the usual brownfield reality — the vendor is slow, the spec is generated from annotations I do not control, or my one-line correction will get flattened the next time their pipeline regenerates the file. This is a different problem than the one I wrote about in [separation of concerns](https://apievangelist.com/2026/07/18/openapi-overlays-for-separation-of-concerns/), where I was intentionally layering my own local customizations on top of a fine spec. This is about a spec that is simply, factually buggy, and I do not own it.

The instinct is to fork the spec, hand-edit it, and move on. Do not do that. A fork silently drifts. Six months later nobody remembers which of the forty differences from upstream were deliberate bug fixes and which were accidental staleness. An [OpenAPI Overlay](https://spec.openapis.org/overlay/latest.html) is the honest alternative: a small, re-appliable patch that names exactly what is wrong and corrects it, and — critically — survives the next upstream regeneration because it targets the current document rather than replacing it. This is one of the use cases I flagged in [The Many Use Cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and it is the one I reach for most in real consumer work.

Here is the first overlay against the [Products API](https://github.com/api-evangelist/products-api) teaching template, pretending it is the buggy upstream. It fixes a wrong type, adds a missing required field, and documents the `429` the server actually returns.

```yaml
overlay: 1.1.0
info:
  title: Products API correctness fixes
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.components.schemas.Product.properties.price
    update:
      type: number
      format: float
      description: Unit price. Upstream documents this as a string; the API sends a JSON number.
  - target: $.components.schemas.Product
    update:
      required:
        - id
        - name
        - price
  - target: $.paths['/products'].get.responses
    update:
      '429':
        $ref: '#/components/responses/TooManyRequests'
```

Every action is a factual correction, and each one reads like a bug report. The `price` was typed as a string; I set it to a `number` and left a note in the description so the next person understands why. The `required` array upstream omitted `price` even though creates fail without it, so I state the real contract. And I wire in the `429`/`TooManyRequests` response the server has always returned but the docs ignored — the `TooManyRequests` response with its `application/problem+json` example and `RateLimit` headers already exists in the components, upstream just never referenced it from the operation.

The second overlay handles the two failures that break tooling outright: a bad server URL and a wrong enum value.

```yaml
overlay: 1.1.0
info:
  title: Products API server and enum fixes
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.servers[0]
    update:
      url: https://api.products.example.com/v1
      description: Production. Replaces the placeholder localhost URL from code generation.
  - target: $.components.schemas.Product.properties.status
    update:
      enum:
        - active
        - inactive
        - cancelled
```

The `servers[0]` action swaps out the `http://localhost` placeholder a generator left behind — the single most common reason a downloaded spec is dead on arrival in Postman or an SDK generator. The `status` enum fix corrects a value that upstream spelled `canceled` while the cancel operation and the actual data use `cancelled`, so client validation stops rejecting valid records.

The whole point is repeatability. When the vendor regenerates their spec next week, I re-run these two overlays and my corrections snap right back into place, because they target `$.components.schemas.Product.properties.price` and `$.servers[0]`, not some frozen copy. And the day upstream finally fixes the string-to-number bug on their end, I delete that one action and my patch shrinks. The overlay is self-documenting about what is still broken. That is the take I want to leave you with: stop forking specs you do not own, and stop waiting on a vendor's backlog. An overlay is a bug report you can actually ship today.
