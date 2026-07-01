---
published: true
layout: post
title: 'OpenAPI Overlays for Compliance and Redaction Profiles'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-compliance-and-redaction-profiles.png
date: 2026-08-17
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Compliance
  - API Governance
  - APIs
---

Somewhere in every regulated company there is a document, or a wiki page, or a Slack message pinned to a channel, that says something like "before we publish the EU version of the API, remember to take out the SSN field and turn off the cancellation endpoint." It is a checklist. A human reads it, or forgets to read it, and then edits the spec by hand until it looks compliant. When the auditor shows up and asks how you know the personally identifiable data never left the jurisdiction, the honest answer is: we trust that Dave ran the checklist. That is not evidence. That is a story about Dave.

This is another one of the underexplored entries from [The Many Use Cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and it is the one I think regulated teams should reach for first. An [OpenAPI Overlay](https://spec.openapis.org/overlay/latest.html) lets you express "what we removed and why" as a standalone, versioned artifact that sits next to your canonical spec and transforms it deterministically. The redaction stops being a manual pre-publish ritual and becomes a file you can diff, review, sign off on, and hand to an auditor. The overlay is the evidence.

I keep a teaching template for exactly this kind of thing, the [Products API](https://github.com/api-evangelist/products-api), with its canonical OpenAPI at [this raw URL](https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml). It has a `Product` schema, the usual CRUD on `/products` and `/products/{id}`, a cancel operation, and problem+json error responses. It is deliberately boring, which makes it a good stand-in for the real thing. Here is an EU/GDPR redaction profile applied to it.

```yaml
overlay: 1.1.0
info:
  title: Products API - EU/GDPR Redaction Profile
  version: 1.0.0
  description: >-
    Regulation: EU GDPR (Regulation 2016/679), data minimisation Art. 5(1)(c).
    Removes PII that has no lawful basis in the EU distribution build and
    disables the cancellation endpoint pending DPA review.
    Reviewer: J. Okafor, Data Protection Officer, 2026-08-17.
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.components.schemas.Product.properties.owner_email
    remove: true
  - target: $.paths['/products/{id}/cancel']
    remove: true
  - target: $.info
    update:
      x-jurisdiction: EU
      x-redaction-review: DPO-2026-08-17
```

Read that top to bottom the way an auditor would. The `info.description` names the regulation, the specific article, the reason, and the human who signed off, with a date. The `extends` pins the exact source spec being transformed, so there is no ambiguity about what "before" looked like. Then the actions do three concrete things: strip `owner_email` off the `Product` schema because that PII has no lawful basis to ship in this build, remove the whole cancel endpoint because it is parked pending Data Protection Authority review, and stamp the resulting spec with jurisdiction metadata so anyone downstream knows which profile produced it. Run this against the source and the diff is the entire compliance argument.

Now here is the important part: a different market is a different overlay. Not a branch of this one, not a conditional inside it. Its own named, reviewed file. Here is a data-localization profile for a market that permits the customer identifier but forbids the loyalty and pricing fields from crossing borders.

```yaml
overlay: 1.1.0
info:
  title: Products API - IN Data Localization Profile
  version: 1.0.0
  description: >-
    Regulation: India DPDP Act 2023, cross-border localization controls.
    Retains customer_id (permitted in-country) but removes internal pricing
    and loyalty attributes that may not be exported, and rewrites the API
    description to declare the in-region build.
    Reviewer: R. Nair, Regional Compliance Lead, 2026-08-17.
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.components.schemas.Product.properties.cost_basis
    remove: true
  - target: $.components.schemas.Product.properties.loyalty_tier
    remove: true
  - target: $.info
    update:
      description: >-
        Products API - India in-region distribution. Localized per DPDP Act
        2023; cross-border-restricted fields removed at build time.
      x-jurisdiction: IN
      x-redaction-review: DPDP-2026-08-17
```

Same shape, different regulation, different reviewer, different fields. This one keeps `customer_id` because it is lawful in-country, but strips `cost_basis` and `loyalty_tier` and rewrites the API description outright so the published spec announces its own constraints. The two files sitting side by side tell the whole story: EU removes an email and an endpoint, India removes commercial attributes, and neither one can quietly inherit the other's mistakes because they are separate artifacts with separate sign-offs.

The take is simple and I will not soften it. A compliance redaction that lives as a versioned overlay beats a checklist nobody can audit, every single time. The checklist asks an auditor to trust that a human did a thing correctly, under deadline, without a paper trail. The overlay hands them the diff. When someone asks what you removed for the EU build, you do not describe a process, you show them the file, its reviewer, its date, and the exact JSONPath targets it deleted. Redaction is not a task you performed once and hope you remembered. It is an artifact you can re-run, re-review, and prove.
