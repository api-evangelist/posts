---
published: true
layout: post
title: 'OpenAPI Overlays for Filtering One Spec Into Public, Partner, and Internal Audiences'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-filtering-multiple-audiences.png
date: 2026-07-06
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - API Governance
  - Documentation
  - APIs
---

Here is the problem that eventually finds every team that runs an API for more than one kind of consumer. You have a single OpenAPI definition, but you do not actually have a single audience. The public gets one story. Your partners get a bigger story with the operations you have negotiated into contracts. Your internal teams get everything, including the cancel operation you would rather nobody outside the building ever discovered, and the experimental path you added last week that is one bad demo away from being removed. The lazy fix is to keep three hand-edited copies of the spec and pray they stay in sync. They never stay in sync. Somebody adds a field to the public copy, forgets the partner copy, and now your documentation is quietly lying to two out of three audiences.

Overlays fix this by letting you keep one parent definition and describe, as a separate document, exactly what each audience should not see. The parent is the source of truth. The overlay is a diff you can read, review, and version. Here is a public overlay against my boring [Products API](https://github.com/api-evangelist/products-api), stripping the operations the outside world has no business seeing.

```yaml
overlay: 1.1.0
info:
  title: Products API - Public Audience Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}'].delete
    description: Public consumers cannot delete products
    remove: true
  - target: $.paths['/products/{id}/cancel']
    description: The cancel operation is internal-only
    remove: true
  - target: $.paths['/products/{id}'].put
    description: Public is read-mostly; no updates
    remove: true
```

Each action names a JSONPath `target` and sets `remove: true`, which tells the tooling to delete the node the path resolves to. The first action reaches into `/products/{id}` and removes only the `delete` operation, leaving `get` intact, so the public still reads a single product but cannot destroy one. The second action removes the entire `/products/{id}/cancel` path item, cancel operation and all, because there is no version of cancel that belongs in a public document. The third strips `put` for the same read-mostly reasoning. Point a renderer like Bump.sh at the parent plus this overlay, or run it through openapi-filter or Redocly's decorators, and the public sees a genuinely smaller API without anyone touching the source.

Partners are different. They get to write, they get to cancel, but they should not be dragged along on your experiments. So the partner overlay keeps far more and only removes what is genuinely unstable.

```yaml
overlay: 1.1.0
info:
  title: Products API - Partner Audience Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}/cancel']
    description: Cancel is still experimental; hide from partners for now
    remove: true
  - target: $.paths['/products'].post.responses['429']
    description: Trim the internal rate-limit example from the partner view
    remove: true
```

Same shape, different intent. Partners keep `delete` and `put`, but the still-experimental cancel path comes out, and the second action reaches down into a single `429` response on `POST /products` to remove the `TooManyRequests` example we would rather not commit to contractually yet. One parent, two overlays, three audiences, and every one of them is derived rather than maintained.

Now the gotcha, because `remove` is blunter than it looks. It deletes the targeted node and nothing else, which means it does not chase down references. My `Product` schema, my `NotFound` and `TooManyRequests` responses, and my `RateLimit` headers all live under `components` and are wired in with `$ref`. If you remove an operation, its `$ref` pointers vanish with it, fine. But if you get ambitious and remove a component that another surviving operation still references, you have just produced a spec with a dangling `$ref` that points at nothing, and strict validators will reject it. Removing paths is safe. Removing shared components under `components` demands that you first confirm nobody else is pointing at them. Overlays give you the scalpel; they do not check whether you cut an artery.

Read the [Overlay specification](https://spec.openapis.org/overlay/latest.html) for the exact processing rules, and see the rest of [the many use cases for overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/) for where this fits. My strong take is this: if you are hand-maintaining audience-specific copies of your OpenAPI, you are not managing documentation, you are manufacturing drift. Make the full internal spec your single source of truth, and let a stack of small, reviewable `remove` overlays produce every reduced view you ship. The public copy should be an artifact you generate, not a file you edit.
