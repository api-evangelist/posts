---
published: true
layout: post
title: 'OpenAPI Overlays for Splitting Public and Internal Documentation'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-public-vs-internal-docs.png
date: 2026-07-21
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Documentation
  - Developer Experience
  - APIs
---

Continuing my walk through [the many use cases for OpenAPI overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), I want to sit with one that hits close to how most teams actually ship docs. You have a single OpenAPI definition, but you need it to produce two documentation sites: a clean, branded public developer portal, and a richer internal portal that your own engineers and support folks live in. The internal one carries admin endpoints, debugging notes, and links to your ops runbooks. The public one is stripped down and pretty. For years people solved this by forking the spec, and then the two copies drifted until the docs lied to somebody. Overlays fix that by keeping one source of truth and deriving both.

I want to be precise about the angle here, because it borders another use case I already covered. This post is about docs deployment pipelines. It is about running two build commands against two derived specs and publishing two versioned portals. The neighboring post on [filtering for multiple audiences](https://apievangelist.com/2026/07/06/openapi-overlays-for-filtering-multiple-audiences/) is about who can see which operation. Related, sure, but the mechanics I care about today are the rendering targets, not the access control.

I'll use my [Products API teaching template](https://github.com/api-evangelist/products-api) as the base, same as always. It has GET and POST on `/products`, GET/PUT/DELETE on `/products/{id}`, a cancel operation, the `Product` schema, `NotFound` and `TooManyRequests` responses with `application/problem+json` examples, and `RateLimit` headers. Here is the overlay I merge to produce the public spec, the one that feeds the public portal.

```yaml
overlay: 1.1.0
info:
  title: Products API — Public Docs Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.info
    update:
      title: Products API
      description: >-
        Browse, create, and manage products. This is the public developer
        reference for the Products API. Start with the guides, grab an API key,
        and you can be making calls in a few minutes.
  - target: $.paths['/products/{id}/cancel']
    remove: true
```

The public overlay does two honest things. It rewrites the `info` block so the title and description read like marketing wants them to read, and it removes the cancel operation at `/products/{id}/cancel`, which is an internal-only administrative action we do not document to the outside world. That single `remove: true` is the whole point of an overlay versus hand-editing, the base file never changes, and the removal is a declarative statement that survives every regeneration. When I feed the merged output to [Bump.sh](https://bump.sh), I get a public portal that never mentions an operation the public should not see.

Now the internal overlay, which merges against the exact same base URL but pulls in the opposite direction, adding detail rather than removing it.

```yaml
overlay: 1.1.0
info:
  title: Products API — Internal Docs Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}/cancel'].post
    update:
      x-internal: true
      description: >-
        Cancels a product. Admin-only. If a cancel wedges, check the queue
        depth first before retrying.
      externalDocs:
        description: Cancel runbook
        url: https://runbooks.internal.example.com/products/cancel
  - target: $.paths['/products'].get
    update:
      description: >-
        Lists products. Watch the RateLimit headers on TooManyRequests here;
        see the pagination and throttling runbook for the current burst budget.
      externalDocs:
        description: Ops runbook
        url: https://runbooks.internal.example.com/products/list
```

This overlay keeps the cancel operation, flags it with `x-internal: true`, and hangs a real description and a runbook link off of it. It also enriches the list operation with debugging guidance and an ops runbook pointer that ties back to those `RateLimit` headers and the `TooManyRequests` response the base already defines. None of this belongs on a public portal, and none of it should force a fork.

The workflow is the satisfying part. Same base, two overlays, two targets. You run `bump overlay` (or Redocly's `openapi bundle` with the overlay applied) to merge each one, then `bump deploy` the public result to your public documentation and `bump deploy` the internal result to a separate internal doc. Redocly's `build-docs` follows the same shape if that is your stack. Both tools implement the [Overlay 1.1.0 specification](https://spec.openapis.org/overlay/latest.html) faithfully, so the overlays above are portable between them.

My take: if you are still maintaining two copies of a spec so your public and internal docs can differ, you are maintaining a bug that has not surfaced yet. One base, two overlays, two deploys. The drift stops being possible, and that is worth more than any amount of pretty portal styling.
