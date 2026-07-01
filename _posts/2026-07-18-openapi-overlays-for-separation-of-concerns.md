---
published: true
layout: post
title: 'OpenAPI Overlays for Separation of Concerns When You Do Not Own the Spec'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-separation-of-concerns.png
date: 2026-07-18
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - API Consumption
  - Integration
  - APIs
---

Most of the overlay conversation assumes you are the API producer, sitting on top of a spec you wrote and own. But the majority of the OpenAPI I touch in a given week belongs to somebody else. I am a consumer. I pulled their spec down, and now I want to bend it to fit my world without editing a single line of what they published. This is the use case I keep coming back to, and it is the one the overlay pattern was practically born for. It is one of the entries in my [many use cases for OpenAPI overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and it deserves its own walk-through, because the alternative people reach for—forking the spec—is a slow-motion mistake.

Let me set the stage. Pretend the [Products API](https://github.com/api-evangelist/products-api) is a vendor's API. I did not write it. Its OpenAPI lives at a URL I do not control, at `https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml`. It has the operations I need—listing products, fetching one by ID—and a pile of operations I do not. The base URL in their `servers` block points at their environment, but I route everything through my own gateway. I want to annotate a couple of operations with notes my team needs. And I want none of that to end up in a pull request against their repo, because it never would get merged, and it is not my repo to touch anyway.

Here is my first overlay, the consumer-side changes.

```yaml
overlay: 1.1.0
info:
  title: Products API - Internal Consumer Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.servers
    description: Point clients at our internal gateway, not the vendor origin.
    update:
      - url: https://api.internal.example.com/products-proxy
        description: Products API behind our gateway (auth, quota, logging)
  - target: $.paths['/products'].get
    description: Note our internal caching behavior on the list operation.
    update:
      x-internal-note: Responses cached 60s at the edge. Do not use for realtime inventory.
  - target: $.paths['/products/{id}'].get
    description: Flag the fields our billing team actually depends on.
    update:
      x-internal-note: sku and price are load-bearing for invoicing. Alert on schema drift.
```

The `extends` line is the whole trick. It says my base is *their* spec, fetched live at their URL, and my `actions` are applied on top of it. The first action replaces the entire `servers` array with my gateway URL, so every client I generate points at my proxy instead of the vendor origin. The next two actions reach into specific operations by JSONPath and merge in `x-internal-note` extensions—notes for my people, invisible to the vendor, living in my repo. Nothing here modifies their file. When the vendor publishes a new version tomorrow with three new endpoints and a bug fix, I re-run the overlay and my server URL and my notes land right back on top of their fresh spec. That is the part a fork can never give you.

The second thing I always want as a consumer is a smaller surface. Their spec has operations I will never call, and every one of them becomes dead code my client generator dutifully emits. So I trim.

```yaml
overlay: 1.1.0
info:
  title: Products API - Trim To Used Operations
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].post
    description: We never create products; remove the POST.
    remove: true
  - target: $.paths['/products/{id}'].put
    description: We never update products.
    remove: true
  - target: $.paths['/products/{id}'].delete
    description: We never delete products.
    remove: true
  - target: $.paths['/products/{id}/cancel']
    description: Cancel is out of scope for our integration.
    remove: true
```

Here every action uses `remove: true` against a JSONPath that points at an operation or a whole path. The write operations go, the cancel operation goes, and what survives is exactly the read surface my integration touches. Generate a client from the overlaid result and it is lean—no methods for things I would never call, no confusing my teammates with capabilities we do not use. And again, this is a re-appliable diff. It expresses my *intent* ("only these operations"), not a snapshot of their spec at a moment in time.

That distinction is the entire argument. A fork is a copy that starts identical and rots from the moment they push their next commit. Every upstream change becomes a merge conflict you resolve by hand, forever, and you are one busy week away from silently running six months behind their security fixes. An overlay is a clean, declarative statement of the handful of things you need to be different, and it survives regeneration because it is applied *against* whatever they publish, not welded to one version of it. Read the [overlay specification](https://spec.openapis.org/overlay/latest.html) and you will see it was designed exactly for the party who does not own the base.

So here is my take: if you are a consumer editing a copy of someone else's OpenAPI, stop. You are building a fork you will have to feed for the rest of the integration's life. Write the overlay instead, check it into your repo, and let their spec stay theirs. Your changes are your side of the contract. Keep them there.
