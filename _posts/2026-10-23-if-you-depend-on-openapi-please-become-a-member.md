---
published: true
layout: post
title: 'If You Depend On OpenAPI Please Become a Member'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/if-you-depend-on-openapi-please-become-a-member.png
date: 2026-10-23
author: Kin Lane
tags:
  - OpenAPI
  - Arazzo
  - Overlays
  - OpenAPI Initiative
  - Linux Foundation
  - Community
  - Specifications
  - APIs
---
I'm going to ask for money, so I'll get straight to it. If your business depends on OpenAPI, please become a member of the [OpenAPI Initiative](https://www.openapis.org/). If you were a member and let it lapse, please come back.

## It is more than one specification

When people hear "OpenAPI" they think of the one document that describes an HTTP API. That is still the heart of it — [OpenAPI 3.2](https://spec.openapis.org/oas/latest.html) shipped last year — but the OpenAPI Initiative now maintains three specifications, and the other two are where a lot of the industry's next work lives:

- **[Arazzo](https://spec.openapis.org/arazzo/latest.html)** describes multi-step workflows across APIs — the sequences an integration, or an agent, actually has to perform. [Arazzo 1.1](https://github.com/OAI/Arazzo-Specification/releases/tag/1.1.0) shipped in May, and SOAP, Protobuf, GraphQL and human-in-the-loop support are being worked on now.
- **[Overlays](https://spec.openapis.org/overlay/latest.html)** let you change an OpenAPI description without forking it — the way platform teams, documentation tools and catalogs like mine adapt descriptions they don't own. [Overlay 1.2](https://github.com/OAI/Overlay-Specification/releases/tag/1.2.0) shipped in September.
- And beneath all three sits shared publishing and build infrastructure, special interest groups for security and API lifecycle, and the schemas every editor, linter and generator validates against.

All of that is maintained by a small group of people, most of them volunteering hours their employers may or may not know about. I sit in on the calls most weeks and [write up what I learn](https://apievangelist.com/2026/10/08/three-specification-calls-in-one-thursday/). The work is careful, slow in the right ways, and badly under-resourced for how much of the API economy runs on top of it.

## Who is paying for it today

The Linux Foundation publishes the membership. Today the OpenAPI Initiative has **32 active members**: 21 companies and 11 academic or non-profit organizations. Thank you to every one of them:

**Google, Microsoft, IBM, SAP, eBay, Bloomberg, Kong, SmartBear, Redocly, Scalar, Bump.sh, Tyk, 42Crunch, Jentic, Platformatic, IFS, AVAP, Briscola, Getting APIs to Work, LFOD and Level 250**, plus the UK Government, NHSX, the OpenTravel Alliance and eight more academic and non-profit members.

Now look at who isn't on that list. The same records show **68 companies that were members and aren't today** — and API Evangelist is one of them, so I'm not asking anyone to do something I'm exempting myself from. And a much longer list of companies have never been members at all, including many whose products only work because OpenAPI does.

## The list I'm working from

I'm going to work through these companies one by one, and I'm publishing the list so it's out in the open and so you can help. It comes from the Linux Foundation's member records, my own survey of the tools that read and write OpenAPI, and the [APIs.io](https://apis.io) catalog, which holds thousands of OpenAPI descriptions. I'll update this post as companies join or come back.

### If OpenAPI is your product's input format

These companies sell products that read OpenAPI, generate from it, or are built around it. Every new version of the specification is work on their roadmap, and every one of them benefits directly from the specification being well maintained. None of them has been a member:

**Stainless, Fern, Mintlify, liblab, APIMatic, Zuplo, Gravitee, Solo.io, Axway, Boomi, Sideko, Apidog, Composio, Pipedream, Zapier, Toolhouse and Smithery.**

And the two largest consumers of OpenAPI I can find outside the membership: **Amazon Web Services**, whose API Gateway imports and exports it, and **Cloudflare**, whose products read it and whose own OpenAPI estate is the largest of any non-member in my catalog. **OpenAI** and **Anthropic** belong here too — so much of the API world becomes an agent's tools by way of an OpenAPI description.

### If you were with us before

These companies were members and aren't today. The decision was made once; I'd love to understand what changed, and I'd love even more to see you back:

**Postman, ReadMe, Stoplight, Speakeasy, GitBook, RapidAPI, Salesforce and MuleSoft, Atlassian, Adobe, Cisco, Red Hat, PayPal, Intuit, Capital One, SWIFT, Samsung, Vonage, Dynatrace, Checkly, WSO2, Software AG, Apideck, Ably, Treblle, WireMock, Karate Labs, Kubeshop and The Guild.**

### If you publish OpenAPI at scale

These are some of the strongest API programs in my catalog. They publish large OpenAPI descriptions for their own developers, which means their developer experience depends on the specification and on the tooling built on it. None has been a member:

**Twilio, HubSpot, Shopify, Harness, Telnyx, Confluent, Infobip, Oracle, Optimizely, Elastic, Okta, Datadog, MongoDB, BigCommerce, Sinch, Merge and Svix.**

## What I'm asking

If your company is on one of those lists, or should be, [become a member](https://www.openapis.org/membershipjoin). The [membership page](https://www.openapis.org/membershipmembers) lists who is in today, and the Linux Foundation's [join form](https://joinnow.platform.linuxfoundation.org/?project=openapi) takes it from there. Membership is priced by company size, and it is a small line in any budget that includes an API program.

If you can't make that call yourself, forward this to someone who can. If you have engineers who care about any of the three specifications, send them to the weekly calls, too — the [community calendar](https://zoom-lfx.platform.linuxfoundation.org/meetings/openapi) is open to everyone, and contributions of time matter as much as money.

And if you think I have your company wrong — you're a member under a parent company I missed, or you support the work in another way — tell me, and I'll fix the list. I'd much rather be corrected into a shorter list than keep a long one.

I'm not trying to shame anyone. Most companies that depend on OpenAPI have simply never been asked. Consider this the ask. The specifications that describe the API economy deserve to be paid for by the API economy, and the companies that benefit most are the ones best placed to do it.
