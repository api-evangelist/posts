---
published: true
layout: post
title: 'OpenAPI Overlays for Adding Tool-Specific Content Without Polluting the Spec'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-adding-tool-specific-content.png
date: 2026-07-12
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - API Gateway
  - SDKs
  - APIs
---

I keep running into the same slow-motion mess. Somebody hands me an OpenAPI definition that is supposed to be the single source of truth, and when I open it up half the operations are wearing three or four layers of vendor extensions they never asked for. There is an `x-amazon-apigateway-integration` block bolted onto every path because that is how the gateway got deployed. There is an `x-speakeasy-name-override` sprinkled around because someone was tired of the SDK method names. There might be a Kong plugin hint or two in there for good measure. None of that is the API. It is scaffolding for the tools that consume the API, and it has crept into the canonical spec until nobody can tell the contract from the build config anymore. Delete the wrong `x-` field and you break the pipeline. Keep it and you are shipping your infrastructure choices as part of your public interface.

This is exactly what OpenAPI Overlays are for. The whole point of an overlay is that you leave the canonical definition clean and describe your modifications as a separate document that gets applied at build time. So instead of one polluted spec, I keep the pristine [Products API](https://github.com/api-evangelist/products-api) definition as the source of truth, and I keep one overlay per tool that needs its own metadata. The gateway gets its overlay. The SDK generator gets its overlay. The AI consumer, if it needs vendor hints, gets its own too. The source never learns any of their names.

Here is the gateway overlay. It reaches into the Products API definition and injects a rate-limit vendor extension onto the two collection operations that need throttling metadata.

```yaml
overlay: 1.1.0
info:
  title: AWS API Gateway rate-limit extensions for Products API
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      x-amazon-apigateway-integration:
        type: aws_proxy
        httpMethod: POST
        passthroughBehavior: when_no_match
  - target: $.paths['/products'].post
    update:
      x-amazon-apigateway-throttle:
        rateLimit: 20
        burstLimit: 40
```

The `extends` field points at the canonical raw URL, so the overlay is permanently bound to the real spec rather than a copy. Each action carries a JSONPath `target` that selects a specific operation — `GET /products` and `POST /products` here — and an `update` block whose contents get merged onto whatever the target resolves to. Because `update` is a merge, I am adding the `x-amazon-apigateway-integration` and throttle extensions without touching the parameters, responses, or the `Product` schema that already live on those operations. The AWS API Gateway import reads those extensions; my source definition never has to.

Now the SDK overlay, aimed at a completely different tool with completely different needs.

```yaml
overlay: 1.1.0
info:
  title: Speakeasy SDK naming hints for Products API
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}'].delete
    update:
      x-speakeasy-name-override: deleteProduct
  - target: $.paths['/products/{id}/cancel'].post
    update:
      x-speakeasy-name-override: cancelProduct
      x-speakeasy-group: products
```

Same structure, same `extends` anchor, but this one speaks Speakeasy. It targets the `DELETE /products/{id}` and the cancel operation and drops `x-speakeasy-name-override` on each so the generated SDK exposes `deleteProduct()` and `cancelProduct()` instead of whatever the raw `operationId` would have produced, plus an `x-speakeasy-group` to bundle them. This is naming ergonomics for one specific codegen tool, and it has no business being in a definition that Kong or AWS or a documentation renderer also has to read.

The reason this pattern holds up is that overlays are composable. Each of these is a standalone document defined by the [Overlay specification](https://spec.openapis.org/overlay/latest.html), and I can apply them in sequence — canonical spec, then gateway overlay, then SDK overlay — to produce a build-time artifact tailored to exactly one consumer, then throw that artifact away. Nothing accumulates in the source. When Speakeasy changes an extension name, I edit one file that only Speakeasy cares about. When I move off AWS to Kong, I delete a gateway overlay instead of surgically extracting `x-` fields from every operation and praying I got them all. This is one of the more underrated entries in [the many use cases for overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and it is the one I reach for most.

Here is my take: if your canonical OpenAPI knows the name of your gateway, your SDK generator, or your codegen tool, you do not have a source of truth — you have a build artifact that got promoted by accident. Vendor extensions are real and useful, but they describe how a specific tool should treat your API, not what your API is. Put them in overlays, keep them out of the spec, and let the source stay the one thing every tool can agree on.
