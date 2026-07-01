---
published: true
layout: post
title: 'OpenAPI Overlays for Deprecation and Migration Choreography'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-deprecation-and-migration-choreography.png
date: 2026-08-14
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Deprecation
  - API Lifecycle
  - APIs
---

Deprecation is where most API programs quietly fall apart. Not because teams don't know how to sunset an operation, but because they do it by hand, one operation at a time, across a dozen specs, on whatever day someone finally gets to it. Somebody sets `deprecated: true` in one place, forgets the Sunset header in another, writes "please migrate soon" in a description here and "this endpoint is going away" there, and six weeks later nobody can tell you which version of the truth is actually live. This is the use case from my [many use cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/) post that I think is the most underused, and honestly the most emotionally satisfying to solve: deprecation and migration choreography. An overlay lets you mark a whole wave of endpoints deprecated with identical language, schedule it for the sunset date, and — this is the part that changes how the whole thing feels — roll it back if you have to.

I'm working against the Products API teaching template I keep coming back to, whose canonical OpenAPI lives at `https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml`. Say we're retiring the cancel operation in favor of a proper refund flow. Here is the first overlay, which marks that operation deprecated, prepends a consistent sunset line to its description, and documents a `Sunset` response header so consumers get told the same thing in the spec that the running gateway will tell them at runtime.

```yaml
overlay: 1.1.0
info:
  title: Deprecate cancel in favor of refund
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}/cancel'].post
    update:
      deprecated: true
      description: |
        Deprecated: sunset 2027-01-01, use POST /products/{id}/refund instead.
      responses:
        '200':
          headers:
            Sunset:
              description: RFC 8594 sunset date after which this operation is removed.
              schema:
                type: string
                example: 'Sat, 01 Jan 2027 00:00:00 GMT'
            Deprecation:
              description: RFC 9745 deprecation flag; true once this operation is deprecated.
              schema:
                type: string
                example: 'true'
```

A few things worth being precise about, because deprecation is exactly where people play fast and loose with the HTTP conventions. The `Sunset` header comes from [RFC 8594](https://www.rfc-editor.org/rfc/rfc8594) and carries an HTTP-date — a full `IMF-fixdate` like `Sat, 01 Jan 2027 00:00:00 GMT`, not a bare `2027-01-01`. The `Deprecation` header is standardized in RFC 9745 and, in its current form, is a boolean-ish `true` rather than a date, with the actual timeline expressed via `Sunset` and a `Link` relation pointing at the replacement. I'm documenting both in the spec so the contract matches the runtime, and I'm setting `deprecated: true` so every tool that reads the OpenAPI — docs, SDK generators, linters — shows the strikethrough without anyone editing the source.

The single-operation overlay is the demo. The real win is a template you apply across many operations and many specs with the same words every time. Overlays match with JSONPath, so I can select every operation carrying a given tag and stamp them all at once. Here is the reusable pass.

```yaml
overlay: 1.1.0
info:
  title: Scheduled deprecation wave - retiring legacy tag
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths.*[?(@.tags && 'legacy' in @.tags)]
    update:
      deprecated: true
      description: |
        Deprecated: sunset 2027-01-01. This operation is scheduled for removal;
        consult the migration guide for the supported replacement.
```

That one `target` sweeps every operation tagged `legacy` — across this spec and, with the `extends` pointed elsewhere, across any other spec that shares the convention. Same sunset date, same sentence, no drift. Because it's an overlay per the [Overlay spec](https://spec.openapis.org/overlay/latest.html), the source specs never change. You preview the merged result in a pull request and read the diff. You apply it in CI on the morning of the sunset date. And if the migration slips, or a big customer screams, you delete the overlay from the pipeline and the next build ships clean, undeprecated specs — no frantic git archaeology to figure out which hand-edits to reverse.

That reversibility is the whole argument. A deprecation done as scattered manual edits is a one-way door you walk through nervously. A deprecation done as an overlay is a diffable, reversible artifact you can preview, schedule, and undo. Sunsetting an API is stressful enough without also making it irreversible — stop hand-editing your specs into a corner and let the deprecation be a file you can throw away.
