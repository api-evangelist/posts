---
published: true
layout: post
title: "Revisiting OpenAPI Extensions Alongside APIs.json"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/revisiting-openapi-extensions-alongside-apis-json.png
date: 2026-06-27
author: Kin Lane
tags:
  - OpenAPI
  - APIs.json
  - Extensions
  - API Governance
  - API Discovery
---
Five years ago I wrote a post about evaluating APIs.json property types alongside OpenAPI extensions, and back then I was working with a sample of about fifty extensions from fourteen providers. It was enough to make the point I was chasing — that providers were quietly bending OpenAPI to carry the operational details the core specification was never designed to hold — but it was a snapshot taken with a flashlight. I always said I'd come back to it once I had a bigger lens. This week I finally pointed that lens at the whole catalog, and the picture is no longer fifty extensions from fourteen providers. It is 1,661 distinct `x-` extensions spread across 759 vendor namespaces, living in the OpenAPI of more than 1,600 of the providers I track. The instinct I had in 2021 wasn't just correct, it was understated.

The first time around I got a little lost in counting how often each extension appeared, and counting turned out to be the least interesting thing about them. A raw count mostly measures who shipped the biggest spec. What actually tells you something is *what each extension does* — the small, specific job a provider needed done that OpenAPI wouldn't do for them. So this time I want to walk the landscape differently. Here are the extensions grouped by the job they're doing, then the providers leaning on them hardest and what each of those providers cares about, and finally the handful of real problems all of this is quietly solving.

## The extensions, grouped by the job they do

### Wiring up the runtime and the gateway
These let a single definition also describe how the API actually runs, so one artifact can deploy and document at the same time.

- `x-amazon-apigateway-integration` — connects an operation to its backend (Lambda, an HTTP service) inside AWS API Gateway.
- `x-google-backend` — tells Google Cloud which backend should answer an operation, with its own auth and timeouts.
- `x-kong-plugin-*` — attaches a Kong gateway plugin (auth, rate limiting, transformations) to a route.
- `x-tyk-api-gateway` — carries Tyk's entire gateway configuration as one object riding along inside the spec.
- `x-ibm-configuration` — holds IBM API Connect / DataPower policy and assembly details.
- `x-metered` — flags an Azure operation as metered for billing and quota.

### Generating SDKs and client code
This is the single biggest reason providers reach for extensions — feeding a code generator the hints it needs to produce idiomatic libraries.

- `x-ms-enum`, `x-enumNames`, `x-enum-varnames` — turn a bare list of values into a real, named enum type in the generated SDK.
- `x-ms-pageable`, `x-pagination`, `x-speakeasy-pagination` — teach the SDK how to page through a collection automatically.
- `x-ms-long-running-operation` — mark an operation as asynchronous so the SDK generates polling.
- `x-speakeasy-name-override`, `x-fern-sdk-method-name` — rename a generated method so the SDK reads cleanly.
- `x-speakeasy-retries` — bake retry-with-backoff behavior straight into the client.
- `x-go-name`, `x-php`, `x-snake` — language-specific naming so generated code matches each language's conventions.
- `x-terraform` — generate a Terraform provider from the API (Kong and Datadog both do this).
- `x-stainless-*` — hints for the Stainless SDK generator, one of the newer entrants doing real volume.

### Documentation and developer experience
Extensions that have nothing to do with the contract and everything to do with how a human experiences it.

- `x-logo` — the provider's logo, rendered at the top of the reference docs.
- `x-codeSamples` (and the older `x-code-samples`) — hand-written request examples in multiple languages per operation.
- `x-tagGroups` — organize operations into the navigation sections you see down the left side of the docs.
- `x-displayName` — a friendly, human name for a tag or menu category.
- `x-internal` — hide an operation or field from the public docs while keeping it in the spec.
- `x-hideTryIt`, `x-explorer-enabled` — turn the interactive "try it" console on or off per operation.
- `x-badges` — flag an operation as new, beta, or deprecated in the rendered docs.
- `x-oaiMeta` — OpenAI's per-operation docs metadata, including multi-language examples.

### Describing data the spec can't model on its own
The extensions that exist because the API has a shape OpenAPI simply doesn't have a word for.

- `x-expandableFields`, `x-expansionResources` — Stripe's way of saying which fields you can expand inline and what they expand into.
- `x-extensible-enum` — an enum that's allowed to gain new values later without it being a breaking change.
- `x-supportsCursorBasedPaging`, `x-supportsOffsetBasedPaging` — FactSet declaring, per endpoint, which paging styles it honors.
- `x-nullable` — mark a property as nullable on older specs that couldn't express it.
- `x-isClosedInterval`, `x-atMostOne` — extra validation rules a plain schema can't capture.
- `x-pii` — flag a field as personally identifiable so it can be handled correctly downstream.

### Governance, lifecycle, and identity
The metadata that lets you manage an API as it lives and changes.

- `x-api-id`, `x-audience` — Zalando's required unique API identifier and its intended audience.
- `x-maturity` — Twilio marking an operation as GA, beta, or preview.
- `x-release-status`, `x-experimental`, `x-revision` — where a thing sits in its lifecycle.
- `x-addedInVersion` — when an operation or field first showed up.
- `x-github` — GitHub's preview flags, deprecation and removal dates, and app-enablement on each operation.
- `x-atlassian-oauth2-scopes`, `x-atlassian-data-security-policy` — the scopes an operation needs and the data policy it falls under.
- `x-sortOrder`, `x-groupName` — how things should be ordered and grouped in an API explorer.

### Testing and mocking
The newest and, to me, most interesting frontier — turning the contract into something runnable.

- `x-microcks-operation`, `x-microcks-default` — turn the examples in a spec into live mocks and tests (by far the widest footprint, though usually injected by tooling rather than authored).
- `x-unitTests`, `x-testName`, `x-testShouldPass` — Square embedding actual contract tests inside the spec.
- `x-svix` — Codat wiring webhook delivery through Svix.

## Who publishes them, and what they're focused on

A handful of providers do a wildly disproportionate share of the bending, and each one's collection of extensions is a pretty honest portrait of what that company cares about.

- **Microsoft / Azure** — the most prolific by a mile, with well over a hundred distinct extensions. It's effectively its own dialect, almost entirely in service of generating the Azure SDKs and configuring API Management.
- **Kong** — focused on the runtime: turning OpenAPI into gateway configuration and Terraform, so the contract and the deployment are the same file.
- **FactSet** — a data-heavy financial provider whose extensions are overwhelmingly about paging, validation, and the precise shape of query interfaces.
- **Apideck** — a unified API aggregator, leaning on SDK generation, PII tagging, webhooks, and code samples to make many backends feel like one.
- **Xero** — accounting, with extensions that flag product-specific validation errors and drive language-idiomatic code generation.
- **Square** — the testing standout, embedding contract tests, mock-matching rules, and visibility flags directly in the definition.
- **Stripe** — famously using extensions to express expandable and polymorphic resources the base spec can't represent.
- **Twilio** — maturity flags plus PII tagging across thirty-plus specs, much of it driven by privacy regulation.
- **GitHub** — lifecycle and access: previews, removal dates, rate-limit hints, and which operations work for GitHub Apps.
- **Atlassian** — access and change management, with OAuth scopes, data-security policy, and revision metadata.
- **Datadog, Visa, Auth0, Adyen** — each carrying their own mix of pagination, sample payloads, sorting, and lifecycle metadata tuned to their developer experience.

And riding inside many of these specs are the SDK vendors themselves — **Speakeasy, Stainless, Fern, Konfig** — whose extensions aren't published by the provider at all, but layered on by whoever generated the libraries. That layering is worth remembering: a single definition often carries several parties' opinions at once.

## What everyone is actually trying to solve

Strip away the 1,661 names and there are really only a few problems being solved over and over.

The biggest is **a great SDK**. Most extensions exist so a generator can emit a client library that feels hand-written — proper enums, automatic pagination, retries, async polling, idiomatic names. The second is **a great set of docs** — logos, code samples, navigation, an interactive console, and the ability to hide the parts that aren't ready. The third is **collapsing the runtime into the contract**, so one artifact both describes and deploys the API through a gateway. The fourth is **expressing things OpenAPI can't** — expandable resources, growable enums, the exact paging and validation rules a real API enforces. The fifth is **governing the thing** — audience, maturity, lifecycle, required scopes, and data and PII policy. And the newest is **making the contract runnable**, as mocks and tests generated straight from the spec.

Put together, the experience providers are reaching for is a single machine-readable artifact that simultaneously deploys, documents, generates SDKs, mocks, tests, and governs an API. That's a remarkable amount of weight to hang on one file, and it's exactly why I keep coming back to APIs.json. Most of what these extensions carry isn't really part of the API contract — it's operational metadata about documentation, support, lifecycle, and policy that wants to live *alongside* the contract, indexed and orchestrated, not crammed inside it. Five years and sixteen hundred extensions later, I read them the same way I did in 2021, only louder: the extensions aren't a mess to clean up. They're providers telling us, in the only machine-readable vocabulary they had, exactly which parts of their operations the specifications still don't reach — and exactly where APIs.json should be standing.
