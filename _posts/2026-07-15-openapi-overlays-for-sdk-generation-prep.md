---
published: true
layout: post
title: 'OpenAPI Overlays for SDK Generation Prep: Fixing a Spec Before Codegen'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-sdk-generation-prep.png
date: 2026-07-15
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - SDKs
  - Code Generation
  - APIs
---

Every time I run a code generator against a real OpenAPI document, the output tells me something ugly about how the spec was written. I get a method called `get_products` hanging off a client with no namespace, a `status` field typed as a loose `string` so the SDK hands me a stringly-typed free-for-all, and operations scattered flat across the client because nobody tagged them. That is not the generator's fault. My source spec was written for humans reading docs and for the server that has to answer the request. The generator is a different reader with different needs, and I keep making the mistake of asking one document to satisfy both. The result is an SDK that feels like it was assembled by a machine, because it was.

The fix I have landed on is to stop editing the source spec to make the SDK look better. Instead I keep the source clean and describe the codegen-prep changes as an [OpenAPI Overlay](https://spec.openapis.org/overlay/latest.html), which I only apply inside the SDK build pipeline. This is exactly the pattern [Speakeasy documents for their generator](https://www.speakeasy.com/openapi/overlays) — they lean on overlays to reshape a spec for codegen without forcing that shape back onto the API's canonical description. It is one of the more honest use cases in [my roundup of what overlays are actually good for](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), because the transformation is real, repeatable, and belongs to the build, not the API.

Here is the first overlay I run against my deliberately boring [Products API](https://github.com/api-evangelist/products-api) teaching spec. It renames the machine-flavored operationIds into method names a developer would actually type, and it adds tags so the generator groups everything under a sensible namespace.

```yaml
overlay: 1.1.0
info:
  title: Products API codegen naming overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      operationId: listProducts
      tags:
        - Products
  - target: $.paths['/products'].post
    update:
      operationId: createProduct
      tags:
        - Products
  - target: $.paths['/products/{id}'].get
    update:
      operationId: getProduct
      tags:
        - Products
  - target: $.paths['/products/{id}'].delete
    update:
      operationId: deleteProduct
      tags:
        - Products
```

Each action targets a single operation by JSONPath and overwrites just the keys I name. `get_products` becomes `listProducts`, `post` becomes `createProduct`, and every operation picks up the `Products` tag. That tag is what most generators read to decide the namespace, so instead of a flat client I get `client.products.list()` and `client.products.create()`. Nothing else in the operation is touched — the parameters, responses, and the `NotFound` and `TooManyRequests` problem+json examples all pass through untouched, because an overlay only merges the properties present in its `update`.

The second overlay handles the type and vendor-extension work. The `status` property on my `Product` schema is a bare string, which means the SDK generates a plain string field where an enum belongs. I tighten it, and I add an `x-speakeasy` extension the generator reads directly.

```yaml
overlay: 1.1.0
info:
  title: Products API codegen typing overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.components.schemas.Product.properties.status
    update:
      type: string
      enum:
        - active
        - discontinued
        - out_of_stock
      x-speakeasy-enums:
        - Active
        - Discontinued
        - OutOfStock
  - target: $.paths['/products'].get
    update:
      x-speakeasy-name-override: listProducts
      x-speakeasy-pagination:
        type: cursor
```

The first action turns `status` into a real enum with three known values, so the SDK emits a typed enum instead of a string I have to validate myself downstream. The `x-speakeasy-enums` extension gives Speakeasy the idiomatic member names to render in the target language. The second action reaches back into the list operation to pin the generated method name and declare cursor pagination, both of which the generator uses to produce a paginated iterator rather than a single-shot call. None of this leaks into my canonical spec, where a bare string and no vendor extensions is the correct, tool-neutral description of the API.

The strong take is this: the moment you find yourself editing your source OpenAPI to make a generated SDK prettier, you have quietly forked your API's truth into your build pipeline's convenience, and you will pay for it the next time a second tool reads that same spec and inherits your codegen hacks. Push the codegen prep into an overlay, commit it next to the SDK build, and let your source spec go back to describing the API instead of describing your generator's mood.
