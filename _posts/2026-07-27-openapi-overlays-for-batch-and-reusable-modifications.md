---
published: true
layout: post
title: 'OpenAPI Overlays for Batch and Reusable Modifications Across Many Specs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-batch-and-reusable-modifications.png
date: 2026-07-27
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - JSONPath
  - Automation
  - APIs
---

Most of the overlay conversation I hear is about surgical edits. Patch this one summary, fix that one description, override a server URL for staging. That is the easy sell, and it is real work worth doing. But it undersells the thing that actually earns overlays a permanent spot in my toolchain, which is the part I keep coming back to in this series I started with [The Many Use Cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/). The real leverage is not editing one node. It is editing hundreds of nodes with one instruction, and then reusing that same instruction across an entire fleet of APIs. That is where the JSONPath in the overlay target field stops being a locator and starts being a query.

An overlay action does not have to name a single path. Its `target` is a JSONPath expression, and JSONPath does wildcards and filters. So instead of writing one action per operation, I write one action that matches a whole class of operations. Take the Products API teaching template I have been dragging through this whole series. It has `GET`/`POST` on `/products`, `GET`/`PUT`/`DELETE` on `/products/{id}`, and a cancel operation. Say I want to tag every operation that accepts query parameters, because those are the ones my catalog wants to flag as filterable. I do not enumerate them. I let the filter find them.

```yaml
overlay: 1.1.0
info:
  title: Tag every operation that takes query parameters
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths[*][?(@.parameters)]
    description: Add a "filterable" tag to any operation declaring parameters
    update:
      tags:
        - filterable
  - target: $.paths.*.get
    description: Give every GET operation a standard cache hint tag
    update:
      tags:
        - cacheable
```

The first action uses a filter, `[?(@.parameters)]`, so it only touches operations that actually declare a `parameters` array. The `GET /products` collection endpoint with its filtering and pagination query params gets tagged; something with no parameters does not. The second action uses a plain wildcard, `$.paths.*.get`, which fans out across every path and grabs the `get` operation on each one, no matter how many paths I add later. That is the point I want to land on. I wrote two rules, and they cover an operation count I never had to count. When the Products API grows a `/categories` collection next quarter, both actions pick it up for free with zero edits to the overlay. The document describes intent, not inventory.

The second flavor of batch is portability. Some overlays have nothing product-specific in them at all, which means they are not really about the Products API, they are about every API. This is my fleet-wide overlay, the one I keep in a shared repo and apply to anything.

```yaml
overlay: 1.1.0
info:
  title: House standards - contact, license, shared auth
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.info
    description: Stamp our support contact and license on the API
    update:
      contact:
        name: API Evangelist Support
        url: https://apievangelist.com/support
        email: support@apievangelist.com
      license:
        name: Apache 2.0
        url: https://www.apache.org/licenses/LICENSE-2.0.html
  - target: $.components.securitySchemes
    description: Register the house OAuth2 scheme every API shares
    update:
      houseOAuth:
        type: oauth2
        flows:
          clientCredentials:
            tokenUrl: https://auth.apievangelist.com/oauth/token
            scopes:
              read: Read access
              write: Write access
```

Notice there is not a single mention of products, cancel, or rate limits in there. It stamps a contact block, a license, and a shared security scheme, and the only line that ties it to this spec is `extends`. Swap that URL and the exact same actions run against any spec in the org. That is what I mean by reusable. The overlay is a policy, and the spec is just the thing I happen to be pointing it at today.

One caveat worth stating plainly, because it has bitten me. Wildcard and filter support is not uniform across tools. The plain descendant wildcards are broadly safe, but the filter syntax, the `[?(@...)]` predicates, is exactly where JSONPath implementations disagree, and the [Overlay specification](https://spec.openapis.org/overlay/latest.html) leans on JSONPath without ironing out every last dialect quirk. So test your expressions against the applier you actually run in CI, not against a playground on the internet.

My take: if you are still writing one overlay action per operation, you are using overlays as a find-and-replace when they want to be a query language. Write the filter, point it at the fleet, and let one file do the work of a hundred.
