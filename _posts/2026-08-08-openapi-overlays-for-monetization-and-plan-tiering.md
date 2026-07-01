---
published: true
layout: post
title: 'OpenAPI Overlays for Monetization and Plan Tiering From One Spec'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-monetization-and-plan-tiering.png
date: 2026-08-08
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Monetization
  - API Management
  - APIs
---

I have watched too many teams maintain three sets of documentation for one API because they sell it three ways. There is the Free tier docs that pretend the premium endpoints do not exist, the Pro tier docs that quote the higher rate limits, and the Enterprise docs that hint at things mere mortals cannot see. All three drift apart within a quarter, because they are copies of copies, hand-edited by whoever drew the short straw that sprint. This is exactly the kind of problem OpenAPI Overlays were built to solve, and it is one of the more underexplored entries in [my list of the many use cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/). Monetization and plan tiering is the projection of one spec into many, and I want to actually show you how it works.

I am using my [Products API teaching template](https://github.com/api-evangelist/products-api) as the running example, because it has the shape every real API has: a `GET /products` and `GET /products/{id}` for reading, a `POST /products`, `PUT /products/{id}`, and `DELETE /products/{id}` for writing, a cancel operation, and documented `RateLimit` headers. The source spec is the truth. Each plan is a lens over that truth. Here is the Free tier as an overlay.

```yaml
overlay: 1.1.0
info:
  title: Products API - Free Tier Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].post
    remove: true
  - target: $.paths['/products/{id}'].put
    remove: true
  - target: $.paths['/products/{id}'].delete
    remove: true
  - target: $.paths['/products/{id}/cancel']
    remove: true
  - target: $.components.headers.RateLimit
    update:
      description: >-
        Free tier is limited to 60 requests per hour. Need write access or
        higher limits? Upgrade to Pro or Enterprise.
```

Read that top down. The `extends` points at the canonical raw spec, so nothing is copied. The first four actions delete the write and premium operations outright, which means a Free customer's rendered docs never mention `POST /products` and their generated SDK literally does not contain a `createProduct` method. You cannot fat-finger a call to an endpoint that is not in your client. The last action rewrites the documented `RateLimit` header description to the free quota and drops in the upgrade nudge, so the pricing story lives inside the docs instead of on a separate marketing page that nobody keeps current. Now the Enterprise tier.

```yaml
overlay: 1.1.0
info:
  title: Products API - Enterprise Tier Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.info
    update:
      x-plan: enterprise
  - target: $.components.headers.RateLimit
    update:
      description: >-
        Enterprise tier is provisioned at 50,000 requests per hour with
        burst headroom. Dedicated quotas are negotiable per contract.
  - target: $.paths['/products/{id}/cancel']
    update:
      post:
        description: >-
          Enterprise-only bulk cancellation and audit logging are available.
          Contact your account team to enable contract-scoped behavior.
```

The Enterprise overlay removes nothing. It keeps every operation, stamps an `x-plan: enterprise` extension on `info` so downstream tooling can branch on the tier, bumps the documented `RateLimit` description to the negotiated ceiling, and enriches the cancel operation with the enterprise-only notes that would be noise in a Free customer's docs. Same source, opposite treatment. One overlay subtracts to make a smaller honest surface, the other annotates to make a richer one.

Here is the part I need you to internalize, because it is where people get themselves in trouble. This shapes docs and SDKs. It does not enforce anything. Removing `POST /products` from the Free overlay does not stop a Free customer from firing a POST at your gateway. Real enforcement happens at the gateway, in your API management layer, where the token, the plan, and the quota actually live. The overlay's job is to keep the documentation honest per tier so a Free customer is not staring at an endpoint they will get a 403 from, and an Enterprise customer sees the limits they actually paid for. The [Overlay specification](https://spec.openapis.org/overlay/latest.html) gives you the mechanism; your gateway is still the bouncer.

My strong take: if your plan tiers are hand-maintained documents, you do not have plans, you have three lies decaying at different rates. Make the plan a projection. One spec, one overlay per tier, generated on every build. The gateway guards the door, the overlay keeps the map honest, and nobody edits the same endpoint description three times ever again.
