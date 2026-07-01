---
published: true
layout: post
title: 'OpenAPI Overlays for Test Fixtures and Mock Generation'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-test-fixtures-and-mock-generation.png
date: 2026-08-23
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Testing
  - Mocking
  - APIs
---

Here is a tension I have watched play out on every API team I have ever worked with. The examples in your OpenAPI live a double life. On one hand they are marketing copy — the pretty product with the aspirational price and the tidy description that reads well in your reference documentation. On the other hand they are the raw material your mock server hands back and your contract tests assert against, which means they need to be boring, fixed, and occasionally ugly on purpose. A price of zero. An empty list. A guaranteed 429. Those two audiences want completely different things from the same field, and when you try to serve both from one example set you end up either polluting your docs with test junk or weakening your tests to keep the docs clean. Overlays let you stop choosing.

This is the last stop in my walk through [the many use cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and it is the one I think practitioners underrate the most, because it treats your test data as a first-class artifact that lives next to the spec instead of scattered across fixture files nobody keeps in sync. I keep using the same running example, the [Products API teaching template](https://github.com/api-evangelist/products-api), because it has exactly the surface you need to make this real — `GET /products` and `GET /products/{id}`, a `Product` schema, a `TooManyRequests` response with a `application/problem+json` body, and `RateLimit` headers.

The first overlay is the happy path. A mock server like Prism from Stoplight reads the examples out of your OpenAPI and serves them straight back, so if I want deterministic responses I need a deterministic example — a stable id, fixed timestamps, values my test suite can hardcode an assertion against. This overlay injects exactly that onto the `GET /products` 200 response, and nowhere near my documentation example set.

```yaml
overlay: 1.1.0
info:
  title: Products API deterministic fixtures (happy path)
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get.responses['200'].content['application/json']
    update:
      examples:
        fixture:
          summary: Deterministic fixture for mock and contract tests
          value:
            - id: prod_00000000000000000000000001
              name: Fixture Widget
              price: 19.99
              created_at: '2020-01-01T00:00:00Z'
              updated_at: '2020-01-01T00:00:00Z'
```

The point is that `prod_00000000000000000000000001` and the January 1st 2020 timestamps are not there to look good. They are there because a contract test asserting `id == prod_...001` should pass on every run, on every machine, forever. That is the whole trick — the mock is only useful as a test target if it is predictable, and this example makes it predictable without a single line of test data landing in the response your customers read in the docs.

The second overlay is where the ugliness earns its keep. Real test coverage is about the edges, so I want an empty collection, a boundary price sitting right at zero, and a genuine, deterministic 429 with a well-formed `problem+json` body so I can exercise the rate-limit path without hammering a real gateway to provoke one.

```yaml
overlay: 1.1.0
info:
  title: Products API deterministic fixtures (edge cases)
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get.responses['200'].content['application/json']
    update:
      examples:
        empty:
          summary: Empty list boundary
          value: []
  - target: $.paths['/products'].post.responses['201'].content['application/json']
    update:
      examples:
        zeroPrice:
          summary: Boundary price at zero
          value:
            id: prod_00000000000000000000000000
            name: Free Sample
            price: 0
            created_at: '2020-01-01T00:00:00Z'
            updated_at: '2020-01-01T00:00:00Z'
  - target: $.paths['/products'].get.responses['429'].content['application/problem+json']
    update:
      examples:
        rateLimited:
          summary: Deterministic 429 for the throttled path
          value:
            type: https://products-api.example/problems/too-many-requests
            title: Too Many Requests
            status: 429
            detail: Rate limit exceeded. Retry after 60 seconds.
```

Each of these is a scenario I want to assert against, not a scenario I want a prospective developer to stumble across in the reference. An empty array, a zero price, a canned throttle error — none of it belongs in the public example set, and with overlays none of it has to be. Your documentation build ships the spec as-is with its human-readable examples, and your test pipeline applies these overlays before spinning up the mock, so the ugly deterministic data only exists at test time. Same [Overlay 1.1.0](https://spec.openapis.org/overlay/latest.html) document, two completely different example sets, zero leakage between them.

That separation is the strong take I will leave the whole series on. Your test fixtures and your marketing examples are different content with different owners and different lifecycles, and the moment you stop pretending they can share one example set, a lot of the friction around mocking and contract testing quietly evaporates. Overlays are how you keep both honest — and that, after this long run through their uses, is the case I would bet on people adopting last and regretting they waited.
