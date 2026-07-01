---
published: true
layout: post
title: 'OpenAPI Overlays for Improving Developer Experience: Enriching a Thin, Code-Generated Spec'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-improving-developer-experience.png
date: 2026-07-03
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Developer Experience
  - Documentation
  - APIs
---

You know the spec I am talking about. It was generated from code by a framework annotation scanner, and it is technically correct in every dimension and useful to nobody. The `GET /products` operation has a summary that reads "Get products" and a description that is blank. The `Product` schema fields are named perfectly and documented not at all. There are zero examples, so the docs render an empty grey box where a developer wants to see what a real product actually looks like. The date fields in the handful of examples that do exist are frozen to whatever day the original developer ran the generator, so by the time anyone reads them they are two years stale and everything looks abandoned.

The tempting fix is to go edit the generated source. Do not do that. The next time codegen runs it overwrites your careful prose, and you are back to "Get products." This is exactly the seam that OpenAPI Overlays were built for, and it is the use case I keep pointing people at from [my roundup of overlay use cases](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/). You leave the generated spec generated, and you layer the human stuff on top as a separate, versioned artifact. Here is what that looks like against my [Products API](https://github.com/api-evangelist/products-api) teaching template.

```yaml
overlay: 1.1.0
info:
  title: Products API — Developer Experience Enrichment
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      summary: List products
      description: >
        Returns a paginated list of products in the catalog. Results are
        sorted by most recently updated. Use the `limit` and `offset` query
        parameters to page through the collection, and watch the `RateLimit`
        response headers to stay under your quota. Each item is a full
        `Product` object — there is no thin "summary" representation, so you
        can render a listing without a second round trip.
  - target: $.components.schemas.Product.properties.name
    update:
      description: Human-readable product name shown in the storefront. 1–120 characters.
      example: Stainless Steel Water Bottle
  - target: $.paths['/products'].get.responses['200'].content['application/json']
    update:
      example:
        - id: prod_8f2c1a
          name: Stainless Steel Water Bottle
          price: 24.99
          status: active
```

That overlay does three things without touching the source file. The first action rewrites the useless `GET /products` summary and description into something a human wrote for a human, explaining pagination and pointing at the rate-limit headers. The second reaches into `components.schemas.Product` and gives the `name` property an actual description and an example value, so the rendered schema table stops looking like a stub. The third hangs a realistic response example off the `200`, so the docs show a developer what a real payload looks like instead of an empty box. The `extends` key binds all of this to the canonical Products API spec, and the JSONPath in each `target` is what surgically lands the update in the right place.

Now the stale-dates problem, which deserves its own overlay so you can run it on a schedule.

```yaml
overlay: 1.1.0
info:
  title: Products API — Freshen Example Dates
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.components.schemas.Product.properties.created_at
    update:
      example: '2026-07-03T09:00:00Z'
  - target: $.components.schemas.Product.properties.updated_at
    update:
      example: '2026-07-03T09:14:00Z'
  - target: $.components.responses.TooManyRequests.content['application/problem+json'].example.retry_after
    update:
      example: '2026-07-03T09:15:30Z'
```

This one exists to be regenerated. A tiny script stamps today's date into the `example` fields for `created_at`, `updated_at`, and even the `retry_after` in the `TooManyRequests` problem-details response, then reapplies the overlay in CI. The docs never show a 2024 timestamp again, and because it is a separate overlay from the prose enrichment, the date-bumping churn never touches your hand-written descriptions in git.

Applying these is boring in the good way — `openapi-overlays` from npm, Speakeasy, and Redocly all take an overlay and a base spec and hand you back the merged result, and you wire that into the build that publishes your docs. The mechanics are all in the [Overlay 1.1.0 specification](https://spec.openapis.org/overlay/latest.html).

Here is my take. Code-first spec generation is not the enemy, but the specs it produces are a skeleton, not a product. The developer experience does not live in the annotations; it lives in the prose, the examples, and the freshness — and every one of those is a thing your source-of-truth codegen will happily obliterate on the next run. Overlays are how you keep the machine's structure and the human's voice in the same pipeline without either one stomping the other. Stop editing generated files. Layer it.
