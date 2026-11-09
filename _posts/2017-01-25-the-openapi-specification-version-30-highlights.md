---
layout: post
title: 'The OpenAPI Specification: What It Is, and What Changed From 3.0 to 3.2'
description: 'What the OpenAPI Specification is, what a minimal OpenAPI document looks like, and what changed in 3.0, 3.1 and 3.2 -- plus how much of the tooling can read each version today. First written January 2017, updated November 2026.'
image: >-
  https://kinlane-images.s3.amazonaws.com/apievangelist/blog/openapi_spec_structural_improvements.png
atomdate: 2017-01-25T20:00:00.000Z
last_modified_at: 2026-11-09
tags:
  - OpenAPI
  - Specifications
  - Open
---
*I first wrote this post in January 2017, about the version 3.0 work. It still gets found by a lot of people searching for the OpenAPI Specification, so in November 2026 I added the current picture to the top. My original post is below it, unchanged.*

## What the OpenAPI Specification is

The OpenAPI Specification is a standard, machine-readable way to describe an HTTP API. It's one YAML or JSON file that lists where the API lives, what paths and operations it has, what parameters each one takes, what comes back, and how you authenticate. People read it as documentation. Software reads it to render docs, generate client SDKs and server stubs, run mock servers, lint and govern APIs, test them, configure gateways and, more and more, hand an API to an AI agent as a set of tools.

It started as Swagger. In 2015 Swagger was donated to the Linux Foundation, where the [OpenAPI Initiative](https://www.openapis.org/) now governs it, and the specification was renamed OpenAPI. "Swagger" today refers to SmartBear's tooling and to the old 2.0 format. The current specification is published at [spec.openapis.org](https://spec.openapis.org/oas/latest.html).

Here is about the smallest useful OpenAPI document:

```yaml
openapi: 3.1.0
info:
  title: Example Orders API
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /orders/{orderId}:
    get:
      summary: Get one order
      operationId: getOrder
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: The order
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
components:
  schemas:
    Order:
      type: object
      properties:
        id:
          type: string
        total:
          type: number
```

That one file is enough for a docs tool to render a reference page, a generator to produce a typed `getOrder()` client, and an agent platform to offer "get one order" as a tool.

## What changed in each version

**OpenAPI 3.0 (July 2017).** The release I wrote about below. It replaced Swagger 2.0's structure with reusable `components`, separated request bodies from parameters, added content negotiation per media type, `links` between operations, `callbacks` for outbound requests, multiple `servers`, and better examples. This is the version nearly every tool reads.

**OpenAPI 3.1 (February 2021).** Made the schema object fully compatible with JSON Schema 2020-12. 3.0 used its own subset of JSON Schema, and the two had drifted, so `nullable` gave way to `type: [string, "null"]`. 3.1 also added top-level `webhooks`, made `paths` optional so a document can describe only webhooks or only reusable components, and added `info.summary` and an SPDX `license.identifier`.

**OpenAPI 3.2 (September 19, 2025).** The newest version. It adds:

- the HTTP `QUERY` method, plus `additionalOperations` for any other method
- hierarchical tags (`parent`, `kind`, `summary`), so navigation can be described in the document instead of in each docs tool
- `itemSchema` for streaming responses such as server-sent events and JSON Lines
- `$self` to state a document's own URL
- a `querystring` parameter location
- the OAuth 2.0 device authorization flow

## What the tooling can actually read

A version only matters as far as your tools can read it. In October 2026 I looked at 137 products and projects:

- **OpenAPI 3.0:** read by 91 of the 95 where I could pin down versions.
- **Swagger 2.0:** still read by 74.
- **OpenAPI 3.2:** 36 accept a 3.2 document, but only 15 say they support it, and several accept it while quietly dropping the new parts.

All of that is in [A Year After OpenAPI 3.2, Most API Tooling Cannot Read It](https://apievangelist.com/2026/10/09/a-year-after-openapi-3-2-most-api-tooling-cannot-read-it/).

On the provider side, [one in ten API providers still publish Swagger](https://apievangelist.com/2026/10/05/one-in-ten-api-providers-still-publish-swagger/), and only five of 2,281 companies published 3.2.

My practical advice: publish 3.1 today. Test any 3.2 document against the tools your consumers actually use before you depend on what's new in it.

## Where to go next

- **Real OpenAPI documents.** [APIs.io](https://apis.io/apis/) indexes thousands of APIs, each with its OpenAPI where the provider publishes one, so you can see how real companies describe real APIs.
- **Vendor extensions.** The `x-` properties companies add on top of the specification are catalogued at [apis.io/extensions](https://apis.io/extensions/).
- **Overlays.** The [Overlay Specification](https://apis.io/overlays/) changes an OpenAPI document without editing it, for example to add descriptions, hide internal paths or tailor it for an audience.
- **Arazzo.** Arazzo is the OpenAPI Initiative's specification for describing workflows that span several API calls.

---

## The OpenAPI Specification Version 3.0 Highlights (January 2017)

I am impressed with the work that the Open API Initiative (OAI) working group has accomplished with the [version 3.0 release of the OpenAPI Specification](https://www.openapis.org/specification/v3insights). I have had zero involvement in moving the specification forward (something I'm changing), and after coming back to the effort I am impressed with what they've prioritized, and accomplished for this release. 

The highlights in version 3.0 of the OpenAPI Spec for me are:

*   **Components** - The new components architecture really reflects "APIs" in my opinion, making things modular and reusable.
*   **Body** - Catching up when it comes to allowing the body to be defined separately from the headers and parameters.
*   **Content Negotiation** \- You can now define content objects to define the relationship between response objects, media types, and schema.
*   **Linking** - It isn't hypermedia, but it is definitely a nod towards hypermedia, allowing the linking of objects.
*   **Webhooks** - You can now define callbacks that can be attached to a subscription operation describing an outbound operation.
*   **Schema** - Increased investment in JSON Schema, including support of \`oneOf\`, \`anyOf\` and \`not\` support, as well allowing for alternative schema now.
*   **Hosts** - You can now have multiple hosts, allowing you to more narrowly define the host for each path.
*   **Examples** - Allows you to better describe, and provide examples of APIs responses and requests.
*   **Version Identifier** - Not a big one, but removing the swagger: "2.0" identifier--it will now just be openapi.
*   **Cookies** - I'm not a big fan of this being introduced, but it makes sense, and I'm sure is usable for many API operators.

[The OAI blog provides a five-part series covering the version 3.0 release](https://www.openapis.org/specification/v3insights). These ten areas are the highlights for me. I think they nailed it as far as what was needed, while also pushing into areas like linking and webhooks that I hadn't anticipated. I am looking forward to playing with converting some of my 2.0 specs to be 3.0 compliant--once I am a little more intimate with it, I can do better to estimate how long it will take for me to evolve my platform from 2.0 to 3.0.

I am impressed with what the OpenAPI Spec working group has gotten accomplished. I am optimistic about what is possible with OpenAPI Spec in 2017--something I'm going to be investing in heavily.
