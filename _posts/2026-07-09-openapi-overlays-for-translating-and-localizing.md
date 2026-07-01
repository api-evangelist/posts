---
published: true
layout: post
title: 'OpenAPI Overlays for Translating and Localizing One Canonical Spec'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-translating-and-localizing.png
date: 2026-07-09
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Localization
  - Documentation
  - APIs
---

Translation is where a lot of teams quietly fork their API contract, and they don't even notice they're doing it. Someone in the German office needs the docs in German, so they copy the OpenAPI file, run the summaries and descriptions through a translator, hand-fix a few things, and now there are two specs. Then the English one gets a new endpoint, or a rate-limit header changes, or an error message gets reworded, and the German copy drifts. Six months later you've got two contracts that disagree about what your API actually does, and the localized one is the one your German customers trust. That's the failure mode I want to design out of existence, and this is exactly the kind of problem [OpenAPI Overlays](https://spec.openapis.org/overlay/latest.html) were built for. This is another entry in my series walking through [the many use cases for OpenAPI overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and this one is about treating translation as what it actually is.

The mental shift is small but it changes everything: translation is a presentation concern, not a contract concern. Your paths, your operationIds, your schema property names, your status codes, your header names — none of that gets translated, ever. Those are the contract, and the contract is written once, in one language, and stays canonical. What gets translated is the human-readable prose sitting on top of it: `summary`, `description`, the `example` payloads in your error responses, the descriptions on your parameters. That's the surface layer, and the surface layer is precisely what an overlay is good at replacing. One canonical English spec, one overlay per language, N localized outputs generated on demand. The English file never learns that other languages exist.

I already did the full worked example of this — I made [one Products API speak four languages](https://apievangelist.com/2026/06/23/openapi-overlays-let-one-products-api-speak-four-languages/) with a stack of overlays — so I won't re-run the whole thing here. Instead I want to show the piece people skip: localizing the unhappy path. Everybody translates the happy-path summaries and then ships error messages that are still in English. Here's a Spanish overlay for the Products API that translates an endpoint summary *and* the Problem Details example on the `TooManyRequests` response, because a rate-limit error your customer can't read is a support ticket waiting to happen.

```yaml
overlay: 1.1.0
info:
  title: Products API — Spanish (es) Localization
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      summary: Listar productos
      description: Devuelve una lista paginada de productos disponibles en el catálogo.
  - target: $.components.responses.TooManyRequests.content['application/problem+json'].example
    update:
      title: Demasiadas solicitudes
      detail: Ha superado el límite de peticiones. Vuelva a intentarlo cuando el encabezado RateLimit-Reset lo indique.
```

Read the `target` expressions and you can see the discipline holding. The first one reaches into `$.paths['/products'].get` and rewrites only `summary` and `description`. The second reaches all the way down to `$.components.responses.TooManyRequests.content['application/problem+json'].example` and swaps the `title` and `detail` strings — but notice what it leaves untouched. The `RateLimit-Reset` header name stays in English inside the Spanish sentence, because that header is contract, not prose. The path, the media type `application/problem+json`, the operation itself — all canonical. The overlay only touches the words a human reads.

The thing that makes this scale is folder structure, and I'd argue locale-first is the only sane layout. Not `overlays/summaries/es.yaml` and `overlays/errors/es.yaml` scattered by concern — put the locale at the top: `overlays/es/`, `overlays/de/`, `overlays/fr/`, each holding that language's translation overlay. Adding a language is adding a folder. Your build pipeline then becomes a loop: for each locale directory, take the canonical spec, apply the overlay, emit `dist/products-api.es.yaml`, and hand that to your docs renderer or your portal. The translators only ever open files in their locale folder, they never see YAML structure they can break, and a broken translation can literally never corrupt the contract because the contract is a read-only input to the whole process.

My strong take: if you are maintaining more than one copy of an OpenAPI file to serve more than one language, you have already lost, you just haven't gotten the bill yet. There is exactly one canonical spec. Everything else is a projection of it, generated at build time, thrown away and rebuilt whenever the source changes. Localization is a rendering step, not a second source of truth — and the day you internalize that is the day your German docs stop lying to your German customers.
