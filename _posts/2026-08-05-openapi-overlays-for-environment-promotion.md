---
published: true
layout: post
title: 'OpenAPI Overlays for Environment Promotion Across Dev, Staging, and Production'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-environment-promotion.png
date: 2026-08-05
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - DevOps
  - CI/CD
  - APIs
---

I keep finding these forgotten corners of my [use cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/) roundup that nobody talks about, and environment promotion is the one I get the most quietly frustrated about. Because the way most teams handle it today is with three copies of the same OpenAPI file. There's a dev version, a staging version, and a production version, and they're identical except for the server URLs, the token endpoints, and a rate-limit note or two. Then they drift. Somebody adds an operation to production's spec and forgets to backport it to staging, and now your three "sources of truth" are lying to each other. I've watched this happen at enough shops that I've stopped calling it a mistake and started calling it a structural inevitability. If you maintain three files, you will eventually have three different APIs on paper.

The fix is to stop treating environments as different specs and start treating them as different projections of the same spec. You keep one canonical, environment-agnostic OpenAPI definition, and you keep a thin [Overlay](https://spec.openapis.org/overlay/latest.html) per stage that carries only the per-environment truth. My running example through this series is the [Products API teaching template](https://github.com/api-evangelist/products-api), and its base spec deliberately doesn't commit to a hostname. The servers block is a placeholder, the OAuth flow points at a generic identity host, and there's nothing in it that ties it to a deployment. That's on purpose. The base spec describes what the API *is* — `GET`/`POST /products`, `GET`/`PUT`/`DELETE /products/{id}`, the cancel operation, the `Product` schema, the `NotFound` and `TooManyRequests` responses. Where it runs is not the spec's job. That's the overlay's job.

Here's the dev and staging overlay. It rewrites the servers to the staging host, repoints the OAuth token and authorization URLs at the staging identity provider, and stamps a loud warning into the description so nobody mistakes it for the real thing.

```yaml
overlay: 1.1.0
info:
  title: Products API - Staging Environment Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.servers
    update:
      - url: https://staging.api.example.com/v1
        description: Staging environment - non-production
  - target: $.components.securitySchemes.OAuth2.flows.authorizationCode
    update:
      authorizationUrl: https://identity.staging.example.com/oauth/authorize
      tokenUrl: https://identity.staging.example.com/oauth/token
  - target: $.info
    update:
      description: >-
        STAGING ENVIRONMENT - This is a non-production deployment. Data resets
        nightly at 00:00 UTC and should be treated as disposable. Do not store
        anything here you expect to keep. Rate limits are relaxed for testing.
```

The `extends` field is doing the heavy lifting — it points at the canonical raw URL, so this overlay is meaningless on its own and can only ever describe the one true Products API. The three actions are surgical. They target the servers array, the OAuth flow inside `components.securitySchemes`, and the `info` object, and they touch nothing else. Every operation, every schema, every problem+json example comes straight from the base spec, unchanged.

The production overlay is the same shape with the real values, plus it hardens the description around rate limits instead of relaxing them.

```yaml
overlay: 1.1.0
info:
  title: Products API - Production Environment Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.servers
    update:
      - url: https://api.example.com/v1
        description: Production environment
  - target: $.components.securitySchemes.OAuth2.flows.authorizationCode
    update:
      authorizationUrl: https://identity.example.com/oauth/authorize
      tokenUrl: https://identity.example.com/oauth/token
  - target: $.info
    update:
      description: >-
        PRODUCTION - Live customer data. Rate limits are strictly enforced at
        1000 requests per minute per token; exceeding them returns 429 with a
        problem+json body and RateLimit headers indicating your reset window.
        Cancel operations are irreversible in this environment.
```

Now put it in the pipeline, which is where the whole idea earns its keep. You promote a single build artifact — the canonical spec — from dev to staging to production, and at each stage your CI job applies the matching overlay to generate the environment-specific description that ships to that stage's portal, mock server, or gateway. Same artifact, different overlay, swapped by stage name. There is exactly one place to add a new operation, and when you do, all three environments inherit it the next time they're built. Drift becomes impossible because there's nothing to drift *from*.

That's the take I want to leave you with. Environment configuration is not three contracts you keep in sync by discipline and prayer. It is one contract with three projections, and the overlay is how you make that projection explicit, versioned, and reproducible. Stop copying the spec. Project it.
