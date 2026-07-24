---
published: true
layout: post
title: 'On The Need for Artifacts That Describe API Products'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/on-the-need-for-artifacts-that-describe-api-products.png
date: 2026-07-24
author: Kin Lane
tags:
  - Products
  - Discovery
  - Governance
  - Specifications
  - APIs.json
  - Strategy
---
My friend Daniel Kocot over at [Adorsys](https://adorsys.com/en/) has another thought-provoking and specification-evolving post over at Architectural Bytes this week. I sure do love having other deep-thinking API writers in the space to exchange ideas and stories with, and this week Daniel focuses on ["We Can Describe an API. But How Do We Describe an API Product?"](https://architecturalbytes.substack.com/p/we-can-describe-an-api-but-how-do)

As Daniel works through his story, he asks some great questions that I wanted to answer.

## What is the API product?

An API product is what you get when you stop treating an API as a technical artifact engineering ships and start treating it as something the whole organization owns. Appending "product" to API changes everything — it means the API exceeds any single implementation, delivers clear value to a known set of consumers, and stands on a sustainable business model with an actual plan. It has an intentional, communicated future state, offers a scalable, reliable, and desirable experience, and keeps active feedback loops running in both directions between producer and consumer. That's the line between an API and an API product: an API is an isolated technical solution, but an API product lives at the portfolio level, shared across business and engineering stakeholders, with the market need and the roadmap made intentional. The word "product" is where the API stops being just an endpoint and becomes something you actually manage.

## Which APIs belong to it?

The ones that serve the same consumers toward the same value — not whatever happens to share a codebase or a team. I let the product boundary be drawn by the consumer and the business model, not by the org chart: if a set of APIs delivers a coherent outcome to a known audience, supports one sustainable business model, and moves along one communicated roadmap, they belong to the same product, whether that's a single API or a dozen of them working together. Conversely, two APIs sitting in the same repo don't belong to the same product if they answer to different consumers, different pricing, and different futures. So I start from the outside in — who is this for and what value are they buying — and let that pull in exactly the APIs required to deliver it. Everything inside the boundary shares the product's roadmap, experience, and feedback loops; everything that doesn't share those is a different product, even if it lives next door.

## Which supporting resources belong to it?

Everything a consumer needs to discover it, onboard to it, integrate with it, trust it, and stay successful on it — and nothing that answers to a different product's consumers. I draw the same outside-in boundary here: the resource belongs if it serves this product's known audience toward this product's value. In practice that's the whole supporting cast around the API itself — the OpenAPI and other machine-readable definitions, the documentation and getting-started guides, the SDKs and code samples, the portal and authentication, the plans, pricing, and rate limits, the changelog and roadmap, the status page and support channels, the terms of service, and the feedback loops that keep producer and consumer talking. If it's how someone finds, evaluates, adopts, or depends on this product, it's part of the product. The test is ownership and lifecycle: a resource belongs when it moves along this product's roadmap and answers to this product's consumers — when it shares the same future state, it's in; when it serves a different audience or a different business model, it's a different product's resource, even if the same team maintains it.

## Which version of the product does this describe?

Whichever one you've pinned it to — and you should always pin it, because "the API product" is never a single frozen thing; it's something with an intentional, communicated future state, which means it moves. So any description, definition, or artifact I publish answers to a specific version: this is the shape of the product as of this release — these APIs, these resources, this pricing, this experience, this roadmap position. Version isn't just the semver on an endpoint; at the product level it's the coordinate that tells a consumer exactly which state of the whole thing they're looking at, so they know what they're integrating against and what's changing next. I treat the version as part of the product's identity — every definition names it, the changelog explains how one version became the next, and the roadmap says where the next one is headed. That's how the feedback loops stay honest: producer and consumer are always talking about the same version of the same product, not a moving target neither of them can point to.

Daniel provides the top-level seeds of a new specification to capture product-level details when it comes to APIs, asking "the real question is whether API products represent a distinct semantic concept that deserves a shared machine-readable description." He asks some more questions...

## Is this fundamentally different from API discovery?

Yes. It should inform discovery. All dimensions of discovery, from idea to production, should be informed by all of the nutrients that make up a product. But a product is much more than just being discovered by both producer and consumer, as well as throughout its lifecycle. The semantics of product are necessary for discovery, but the semantics of discovery stop short of everything you will need to deliver and mature a product. There is just a lot more that you will need to shape a product to meet the needs of the business producing it, its partners that contribute to its development and distribution, and the customers who purchase it over time. Discovery should always be looking over your shoulder when defining and developing your product, but they should be separate things, even though it will be difficult to tell them apart sometimes. And while companies like Apigee have done an amazing job over the years branding the concept of an API product, they have fallen very, very short of what is needed, keeping the concept simply bound to a product catalog within an API management suite.

## Could APIs.json express the same semantics?

It could. I've even considered adding it as a "type" enumerator for the top level APIs.json specification. I've done several brainstorming, storytelling, and exploratory exercises around the concept of a product. However, I've always fallen short of making it happen. You see, APIs.json is unopinionated by design. To describe a product you need to be opinionated. APIs.json has loose properties and URLs. You can add media-types to strengthen and make the properties more precise, but the specification has been kept deliberately loose to describe the messy world we have, and move it towards the more well defined world we want. I created a product schema while working at Bloomberg, but honestly I don't ever want to be in that business again. I will leave it to the people who are more passionate about its properties. An APIs.json should and could index product artifacts. I'd love to see more of them in the index. There are too many technical ones right now, and we need more APIOps, product requirements, and the opinionated bits that business people care about. APIs.json will be the API discovery presence over your shoulder as you define product, and every other artifact throughout the lifecycle, hanging them all in the APIs.json index for discovery.

## What is the smallest useful core?

If I were writing a product specification for API products, the smallest useful core is the handful of things that make it a product and not just a list of endpoints — no more. I'd cut it to six fields:

- **Identity** — a name, a one-line description, and the version this document describes. Without a version it's a moving target, so version is core, not optional.
- **Consumers and value** — who it's for and what value they're buying. This is the field everything else is drawn from; it's what makes the boundary decidable.
- **APIs** — references to the one or many APIs that belong to this product (pointers to their definitions, not the definitions inline).
- **Supporting resources** — references to the documentation, onboarding, plans/pricing, and other resources a consumer needs to adopt and depend on it.
- **Future state** — a pointer to the roadmap and changelog, so the product's intentional, communicated direction is machine-findable.
- **Feedback** — a pointer to where the producer/consumer loop actually happens (support, contact, status).

Everything else — SLAs, deprecation policy, monetization detail, governance — is a valuable extension, but it hangs off this spine rather than belonging in the core. The test I'd apply to each candidate field: does leaving it out make the boundary of the product ambiguous, or make a consumer unable to answer *is this for me, which version am I on, and where is it going?* If yes, it's core; if no, it's an extension. And the whole thing should be references, not payloads — the core describes and points; it doesn't absorb the APIs and resources it names. That's the smallest thing that still behaves like a product descriptor instead of a bag of links.

## Which responsibilities belong in the foundation, and which should remain platform-specific?

The line I'd draw is the same one that's kept APIs.json and OpenAPI flexible and portable: the foundation describes; the platform implements. The foundation carries what is true about the product no matter where it runs — and anything that changes when you switch gateways, clouds, or billing systems stays platform-specific.

Belongs in the foundation (portable, vendor-neutral, descriptive):

- Identity, version, and the consumers/value the product serves.
- Which APIs belong and which supporting resources belong (as references).
- The shape of the concerns every product has — that it is versioned, that it has plans, that it has auth, that it has a roadmap and a feedback loop. The foundation says that these exist and points to them.

Stays platform-specific (implementation, mechanism, vendor):

- How auth is enforced — the specific gateway, OAuth server, key scheme.
- How plans meter and bill — the pricing engine, quotas, rate-limit mechanics.
- How it deploys, routes, and scales — cloud, region, gateway config.
- Any field whose value would change if you moved the product to a different vendor without changing the product itself.

The test for each responsibility: would this still be true if the product moved platforms? If yes, it's foundation. If the answer depends on the vendor, it's platform-specific and belongs in an extension that hangs off the core — the way an overlay or a vendor profile layers onto OpenAPI without polluting the base document. The mistake I'd guard against hardest is letting a platform's mechanism leak into the foundation, because the moment the core spec knows the name of your gateway, it stops being portable and every consumer and every competing platform has to adopt your stack to read your product. Keep the foundation the thing everyone can agree on; let the platforms differentiate in the layer above it.

Daniel closes his story with: "An API product may need the same thing that OpenAPI and, more recently, mcpdesc provide for their respective domains: a shared, machine-readable foundation that different tools can understand without first agreeing on a particular implementation."

There is a devil in those details — "respective domains." This is another specification that will be needed to inform discovery, and shape products. It is where products become different and where they will become the same across boundaries, depending on the large number of opinions that exist within the enterprise. What you are trying to specify is all about the business of APIs, and domains are where business often becomes politics, and things can get real messy, real fast.

I like where you are going with this product specification work. Happy to support, but I will stay in my "Lane" — API discovery and governance. I have a lot of opinions and experience on the product front, but I've come up against the dogma and religion that exists on the product front too often, and lived the resistance that exists between product and engineering too much to consider myself a bridge builder here. But I fully respect and welcome people who are. I am a big fan of supporting them and equipping them with tools, resources, and expertise from the realms of API discovery and governance. Keep up the good work.
</content>
</invoke>
