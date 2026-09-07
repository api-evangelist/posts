---
published: true
layout: post
title: 'Plumma Carries CAMARA''s Vocabulary Without Its Endpoints'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/plumma-carries-camaras-vocabulary-without-its-endpoints.png
date: 2026-09-08
author: Kin Lane
tags:
  - Network APIs
  - CAMARA
  - GSMA Open Gateway
  - Telecommunications
  - OpenAPI
  - Standards
  - APIs.io
  - Agents
  - APIs
---
An Italian company called [Plumma](https://apis.io/providers/plumma/) reached out to me last week about the state of operator APIs in Latin America, we had a short call, and then I did what I always do afterward — I went and profiled them. This post is about the profile, not the call. What I found is the cleanest specimen I have come across of something I keep trying to explain badly, so let me try to explain it well with a real example.

**Standards conformance is layered, and asking whether a provider "does CAMARA" is the wrong question.**

Here is Plumma's entire API surface, from [their published OpenAPI](https://connect.plumma.it/docs/openapi/connect-api.json):

```
POST https://connect.plumma.it/services/api

{
  "number": "+393273339145",
  "commands": ["current_carrier", "line_classification", "sim_swap"]
}
```

One path. One operation. A phone number and an array of command names. Seventeen commands in the enum — `line_classification`, `current_carrier`, `issuing_carrier`, `porting_timestamp`, `porting_logs`, `network_presence`, `roaming_intel`, `deactivation_point`, `churn_tracker`, `sim_swap`, `port_fraud_shield`, `digital_footprint`, `age_verification`, `kyc_match`, `divert_detector`, `commercial_segment`, `tenure_period`. Their marketing says nineteen. The contract says seventeen, and the contract is what I score.

Now compare that to CAMARA, which publishes one endpoint per capability: `POST /sim-swap/v2/check`, `POST /kyc-match/v0.3/match`, and so on, each with its own versioning and its own three-legged CIBA or authorization-code flow. Plumma's shape is not that. Not slightly not that — structurally not that. So by the obvious test, the answer is no, this is not a CAMARA API.

Except Plumma is a named **GSMA Open Gateway channel partner**, and Open Gateway is the industry's commitment layer over exactly those CAMARA specifications. So the obvious test has produced an answer that is true and useless.

## The standard is in the schema, not the paths

Here is what I actually found when I read the components rather than the paths. Plumma's `KycChallenges` schema carries the CAMARA KnowYourCustomer "Match" attribute set, snake_cased one for one:

```
name_kana_hankaku      <- CAMARA nameKanaHankaku
name_kana_zenkaku      <- CAMARA nameKanaZenkaku
family_name_at_birth   <- CAMARA familyNameAtBirth
house_number_extension <- CAMARA houseNumberExtension
street_no              <- CAMARA streetNumber
national_id            <- CAMARA idDocument
```

I checked these against `camaraproject/KnowYourCustomer`, `code/API_definitions/kyc-match.yaml`. They match. Including `nameKanaHankaku` and `nameKanaZenkaku` — the half-width and full-width Japanese kana name fields, which nobody arrives at independently. You get those two fields by reading CAMARA's KYC Match specification, or by not getting them at all.

So a developer who already speaks CAMARA KYC Match can map Plumma's fields mechanically. Only the envelope differs. The data model is the standard's; the resource model is not.

It goes one layer further down, too. CAMARA Commonalities defines an error code `SERVICE_NOT_APPLICABLE`, and Plumma's own response example shows what happens to it: an operator answering `422 SERVICE_NOT_APPLICABLE` upstream comes back to you as **HTTP 200** with `simswap.risk_indicator = -1`. The standard's vocabulary is honored where Plumma talks to operators, and flattened at the edge where Plumma talks to you.

That gives three different honest answers to one question, depending on which layer you measure:

| Layer | Conformant? |
|---|---|
| Endpoint / resource model | No — deliberately |
| Attribute vocabulary | Yes — verbatim |
| Upstream error vocabulary | Partly — honored, then flattened |

This is why I have stopped writing "supports CAMARA" as a boolean in the catalog and started recording which layer the conformance lives at. A boolean would have thrown away everything interesting here.

## What else the contract does well

I want to give credit where the profiling found it, because a lot of my posts are complaints and this one has real substance to point at.

The OpenAPI is 3.1.0, ungated, with an `operationId`, summary, description, tags, a full `200/400/401/403/500` response set, four worked request examples and four response examples. That is a better-formed document than most of what I harvest from companies fifty times Plumma's size. They also publish a **standalone draft-07 JSON Schema** for the request body alongside it and tell you to point your validator at it before sending. I almost never see that.

Every `4xx`/`5xx` is `application/problem+json` against RFC 7807, with `type`, `title`, `status`, `detail`, `instance`, plus `path` and a `correlation_id`. E.164 is the request contract, with a dedicated explainer page about the fifteen-digit cap and what punctuation gets rejected. ISO 8601 for every temporal field, stated explicitly in the technical guide. ISO 3166-1 for country codes.

And the sandbox design is genuinely unusual: **there is no separate sandbox host.** Live and demo are the same endpoint and the same request. Which engine answers is decided by which credential you present. Their integration guide says it plainly — your environment variables should hold your key, not a base URL.

## Where I would push back

Three things the profiling turned up that I would want fixed, and I would say the same to any provider.

**The credential-selected sandbox has a sharp edge.** The environment selector is a header, `x-plumma-connect-app-id`. Present means live. Absent means sandbox. And omitting it *does not fail* — it silently answers from canned data. A human notices. An agent that drops a header gets plausible, well-formed, completely fictional fraud signal with a `200` on it. That failure mode is invisible by construction, and it is the one thing in this profile I would change first.

**There are two base URLs and two auth header names in circulation.** The OpenAPI declares `https://connect.plumma.it/services` with `x-plumma-connect-api-key`. The integration guide's copy-pasteable cURL uses `https://core.ploomma.com/ploommacore/services/connect/api` with `x-ploommacore-api-key`. Both are published by Plumma. An agent generating a client from the spec and an agent copying the guide will call different hosts with different headers.

**The security document claims OAuth 2.0 that the contract does not have.** "We utilize the industry-standard OAuth 2.0 framework" appears in their Security and Compliance document. The API is API-key only — no `oauth2` security scheme, no authorization or token URL anywhere. Reading it charitably, that sentence is about the platform console's own role-based access control, not the CONNECT API. But it sits in a document a buyer's security reviewer will read as a statement about the API.

Also: rate limits are documented in prose (2 RPS sandbox, 5 RPS live, 180 commands a day) and no `RateLimit-*` header is declared. Prose limits are not machine-readable limits.

One thing I will explicitly praise. Their compliance document's own heading is "Suggested Reference Standards," and the text reads: *"While we may not yet hold formal certifications, we are committed to adhering to the best practices defined by the following security and quality standards."* They name ISO 27001 and SOC 2 as references, not as things they hold. That is an honest sentence, and I read a great many documents written specifically to blur that distinction. Nobody should score Plumma as ISO 27001 certified, and the reason nobody should is that Plumma told them not to.

## Why I bothered

The catalog is thick with mobile network operators — [América Móvil](https://apis.io/providers/america-movil/), [Telefónica](https://apis.io/providers/telefonica/), the [Open Gateway](https://apis.io/providers/open-gateway/) view itself — and thin on the layer between those operators and the companies actually buying fraud signal. Plumma is that layer, and the aggregators are where the interesting design decisions get made, because they are the only participants with a reason to care what the developer experience feels like. The operator is selling access. The aggregator is selling not having to integrate twenty-three operators one at a time.

The profile is live at [apis.io/providers/plumma](https://apis.io/providers/plumma/), with the OpenAPI, the derived error catalog, the command vocabulary, the conformance record and the rest of the artifacts. If you are Plumma and I got something wrong, [tell me](https://apis.io/) — reporting a correction is free and always will be.

The layered thing is the part I want to leave you with, though. If your governance dashboard has a checkbox that says "CAMARA: yes/no," it would have gotten this provider wrong in both directions — wrong to say no, because the vocabulary is right there in the schema; wrong to say yes, because nothing about the resource model would work for a caller expecting CAMARA paths. The question is not whether a provider adopted a standard. It is which layer of the standard they adopted, and whether they told you.
