---
published: true
layout: post
title: What Stands Out Across the APIs for the Seven Major Credit Card Companies
tags:
  - Credit Cards
  - Vocabularies
  - Financial
  - Blueprints
image: >-
  https://kinlane-images.s3.amazonaws.com/shared/uncle-sam-parking-meter-close.jpeg
---
[All of the major credit card companies provide a fairly strong set of case studies for how large enterprises should be doing HTTP APIs](https://vocabularies.apievangelist.com/details/?vocabularyId=credit-cards). All of the credit card companies have dedicated domains for their developer portals, with Discover the only outlier being fragmented across three separate subdomains. As with most API portals, there are plenty of lessons present in the properties of each of the major credit card providers in what APIs they make available, the design of these APIs, but also how they manage their portal and operations. These are the credit card companies profiled so far, focusing on the top seven companies for this first round of research.

- **American Express** ([Research](https://providers.apievangelist.com/providers/american-express/)) ([Portal](https://developer.americanexpress.com/))
- **Barclays** ([Research](https://providers.apievangelist.com/providers/barclays/)) ([Portal](https://developer.barclays.com/))
- **Capital One** ([Research](https://providers.apievangelist.com/providers/capital-one/)) ([Portal](https://developer.capitalone.com/home))
- **Chase** ([Research](https://providers.apievangelist.com/providers/chase/)) ([Portal](https://developer.chase.com/))
- **Discover** ([Research](https://providers.apievangelist.com/providers/discover/)) ([Portal1](https://partner.discoverglobalnetwork.com/)) ([Portal2](https://console.src.developer.discover.com/)) ([Portal3](https://www.discoverglobalnetwork.com/))
- **Mastercard** ([Research](https://providers.apievangelist.com/providers/mastercard/)) ([Portal](https://developer.mastercard.com/))
- **Visa** ([Research](https://providers.apievangelist.com/providers/visa/)) ([Portal](https://developer.visa.com/))

Profiling of each of these includes producing an [APIs.json](https://apisjson.org/) discovery artifact for their common and specific API properties, including [OpenAPI](https://www.openapis.org/) and other artifacts whenever possible. Once there is an APIs.json and OpenAPI, governance rules are run against them, not to govern the APIs, but to survey and assess the properties of each API and the operations that surround them. With machine-readable artifacts for each of these companies, it is then possible to produce a vocabulary of the digital resources available between each provider, as well as produce a blueprint of the common or specific API properties being applied for this sector across companies.

There are a number of properties for these credit card APIs that would differentiate them from each other and could be used to rate each of their approaches. Using the APIs.json, OpenAPI, as well as API governance rules, one can extract a lot of patterns and anti-patterns for wider considerations, but here are just a few of the business and technical elements that stand out right now.

- **Number of Public APIs** - Mastercard and Visa are definitely ahead of the game when it comes to the number of APIs available.
- **Types of API Resources** - There is a whole other set of stories to tell about crypto, consent, and other types of APIs available.
- **Support of API Standards** - Mastercard stands out in support of API standards, but fingerprints are available across all of them.
- **Individual API Properties** - Mastercard and Visa enable teams producing APIs to offer a rich mix of individual properties over others.
- **Support & Feedback Loops** - The way that each provider approaches the available support channels tells a story about their goals.
- **Communication & Storytelling**  - Looking within, but also beyond regarding the stories being told or not being told about the APIs.

Each individual company, but also collectively as an industry provide a solid example to show to people from other industries how and why their enterprises should be investing in their public 3rd-party APIs. There are lessons available here for partner APIs, as well as lessons available that hint at how each of these companies approach their internal APIs.

After expanding this research into other business sectors, this work will move back to dive deeper into the vocabulary for the credit card industry to understand what individual resources and capabilities are offered by each provider. Once there is a machine-readable way to understand the semantics of what is being offered, a blueprint of the common, but also individual API properties being used will be crafted-—this will include evaluating which open API standards like PSD2, Open Banking UK, FDX, and others are applied. After that there will be more investment needed in producing OpenAPI for all of the APIs. Some of the APIs are private, and some of the companies do not offer OpenAPI by default or even consistently across APIs. All of this will contribute to a more refined survey and assessment of the opportunity within the credit card space.