---
published: true
layout: post
title: 'OpenAPI Overlays for Stripping Internal Endpoints Before You Publish'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-stripping-internal-endpoints.png
date: 2026-07-30
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - API Security
  - API Governance
  - APIs
---

Almost every internal API leak I have ever seen came down to the same thing: a human being was supposed to remember to remove something before hitting publish, and that human being was tired, or in a hurry, or new, or just human. The admin endpoint that was never meant to be public. The debug operation that dumps a stack trace. The `internal_notes` field on an otherwise innocent object. None of these leaked because someone made a bold architectural decision to expose them. They leaked because stripping them was a manual step on a checklist, and checklists are where good intentions go to quietly fail. This is the next post in my series unpacking [the many use cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and it is the one I care about most, because it is the one with a real security cost when you get it wrong.

I am going to keep using my [Products API teaching template](https://github.com/api-evangelist/products-api) as the running example, because it already has the shape of the problem baked in. The canonical spec has a cancel operation and a `DELETE /products/{id}` that, in a lot of real systems, you would not want strangers poking at, plus a `Product` schema that in the wild always seems to grow an internal-only property or two. The point I want to hammer is that the fix is not "be more careful." The fix is to make removal a build step that runs in CI, so that a human forgetting is no longer a way to leak an endpoint. If the overlay does not run, the artifact does not ship. That is the whole idea.

Here is the explicit version. You name the exact things you never want to see in the public artifact and you remove them by hand, in configuration, where they can be reviewed in a pull request:

```yaml
overlay: 1.1.0
info:
  title: Strip internal operations and fields from Products API
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}/cancel']
    remove: true
  - target: $.paths['/products/{id}'].delete
    remove: true
  - target: $.components.schemas.Product.properties.internal_notes
    remove: true
```

This is blunt and I like it that way. The `cancel` path goes entirely, the `delete` operation comes off the `/products/{id}` item while leaving `GET` and `PUT` alone, and the `internal_notes` property gets stripped out of the `Product` schema so it never shows up in your published docs or SDKs. It reads like a security policy because it is one. The downside is obvious: it is a named list, and named lists rot. Add a new admin endpoint six months from now and forget to add it here, and you are right back to relying on memory.

So the second approach flips the burden onto the source spec. You mark internal things once, at the point of authorship, with an `x-internal: true` extension, and then a filter removes everything wearing that mark:

```yaml
overlay: 1.1.0
info:
  title: Remove everything flagged x-internal from Products API
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths.*[?(@.x-internal == true)]
    remove: true
  - target: $.paths['/products/{id}/cancel']
    remove: true
```

Now the convention does the work. Anyone adding an operation just tags it `x-internal: true` in the source and it disappears from the published spec automatically. Honestly, once you are working by convention, a dedicated filter often serves you better than raw overlay targeting. [openapi-filter](https://github.com/Mermade/openapi-filter) strips by `x-` flag exactly like this, and [Redocly decorators](https://redocly.com/docs/cli/decorators/) give you `remove-x-internal` and friends that do the same removal-by-convention as part of a bundle step. Whatever tool you pick, watch the gotcha I hinted at with that second action still targeting `cancel` explicitly: removing an operation or schema does not automatically clean up the things that pointed at it. A `$ref` in your responses can still reference a now-orphaned component, and a naive removal leaves you with a dangling reference and a spec that no longer validates. Good filters prune unused components after they cut; if yours does not, you clean up in a follow-on action or you validate hard afterward and let the build fail loudly.

Either way, the real move is the same one: run it in continuous integration. The overlay applies, the tool validates the output, and only that scrubbed artifact gets published. Read [the Overlay specification](https://spec.openapis.org/overlay/latest.html) and you will see it was built for exactly this kind of deterministic, repeatable transformation.

A leaked internal endpoint is not a security incident, it is a process failure wearing a security incident's clothes. The endpoint did its job. The docs did their job. What failed was the assumption that a person would remember to hide something, every single time, forever. Overlays let you delete that assumption. Mark it internal, remove it in the build, fail the build if the removal breaks, and the leak stops being possible instead of merely being unlikely.
