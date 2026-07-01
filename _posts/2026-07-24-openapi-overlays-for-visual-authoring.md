---
published: true
layout: post
title: 'OpenAPI Overlays for Visual Authoring Without Hand-Writing JSONPath'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-visual-authoring.png
date: 2026-07-24
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Tooling
  - Developer Experience
  - APIs
---

I keep coming back to overlays in this [series unpacking the many use cases](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/) because they solve a problem I have watched play out on every team I have ever worked with: the people who most need to fix a specification are almost never the people allowed to touch it. The engineers own the source of truth. Everyone else files a ticket and hopes. Overlays crack that open, but there is a catch, and the catch has a name. It is JSONPath. The whole mechanism hinges on writing a `target` expression like `$.paths['/products'].get`, and I promise you that the technical writer who caught that your rate limit docs are wrong, or the support lead who knows exactly which error your customers actually hit, is not going to hand-write that string. Ask them to and you have simply invented a new gatekeeper.

So this post is about the use case where the barrier itself gets removed: visual authoring. The idea is dead simple. Instead of typing JSONPath, you look at a rendered spec, you click the node you want to change, and the tool writes the JSONPath and the `update` block for you. This is not hypothetical. [openapi-format](https://openapi-format.com) ships a browser-based overlay editor that does exactly this — you load your OpenAPI, you navigate the actual structure of your API in a UI, you compose the change you want, and it emits a valid overlay document. The human clicks. The tool writes the ugly part.

Let me show you the kind of thing a writer produces without ever knowing what a JSONPath is. Take our teaching spec, the [Products API](https://github.com/api-evangelist/products-api). A writer notices the `GET /products` operation has a thin, developer-written description and no example worth reading. In the GUI they click that operation, edit the prose, and paste in a realistic example. What comes out the other side is this:

```yaml
overlay: 1.1.0
info:
  title: Products list enrichment
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      description: >-
        Returns a paginated list of products. Results are ordered by
        creation date, newest first. Use the `limit` and `offset` query
        parameters to page through the catalog. This endpoint is rate
        limited; watch the RateLimit response headers before you loop.
      summary: List products
```

Every piece of that a GUI can generate. The `overlay: 1.1.0` header, the `info` block, the `extends` pointing back at the canonical Products API spec, and the `actions` array with a `target` and an `update` — none of it was typed by hand. The writer saw a description box and a summary box, filled them in, and the tool did the bookkeeping. The intimidating part, `$.paths['/products'].get`, is the one thing the human never saw. That is the whole trick. The [Overlay specification](https://spec.openapis.org/overlay/latest.html) is precise about this structure precisely so that a machine can generate it reliably, which is what makes the visual authoring story credible rather than aspirational.

Here is a second one, because errors are where non-engineers add the most value. Support knows the real story on rate limiting better than anyone. In the GUI they navigate to the shared `TooManyRequests` response, drop in an example that matches the `application/problem+json` shape the Products API actually returns, and out comes:

```yaml
overlay: 1.1.0
info:
  title: Rate limit example from support
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.components.responses.TooManyRequests.content['application/problem+json']
    update:
      example:
        type: https://products-api.example.com/problems/rate-limit
        title: Too Many Requests
        status: 429
        detail: You have exceeded 100 requests per minute. Retry after the window resets.
```

Again, the person who wrote that knows exactly one thing: what a real 429 looks like to a customer. They did not need to know that the response lives at `$.components.responses.TooManyRequests` or how to reach the `problem+json` media type inside it. The tool knew.

This is the point I want to land. Overlays turn spec enrichment into a reviewable diff instead of a pull request against the source repo. A writer, a product manager, or a support engineer can propose a real change — better prose, a truthful example, a corrected header description — as a small, self-contained overlay file that an engineer can read in ten seconds and merge or reject. No branch on the canonical spec, no build tooling, no fear of breaking the API. And once a GUI writes the JSONPath, the last technical excuse for keeping non-engineers out of the specification disappears. That is the real win here. We spend enormous energy making APIs machine-readable and almost none making the act of improving them human-accessible. Visual overlay authoring finally lowers that barrier, and the sooner the people closest to your customers can propose spec changes the rest of us can review, the better every API description on the internet is going to get.
