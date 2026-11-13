---
published: true
layout: post
title: 'Google, Amazon and Microsoft: Three API Estates, and What a Source of Truth Does'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/google-amazon-and-microsoft-three-api-estates-and-what-a-source-of-truth-does.png
date: 2026-11-17
author: Kin Lane
tags:
  - Google
  - Amazon
  - Microsoft
  - API Estates
  - APIs.io
  - Kin Score
  - Agent Readiness
  - API Governance
---
Over the last three weeks I re-profiled the three largest API estates on [APIs.io](https://apis.io/estates/): [Microsoft](https://apievangelist.com/2026/11/05/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent/), [Amazon](https://apievangelist.com/2026/11/12/the-amazon-api-estate-199-surfaces-one-source-of-truth-and-what-it-still-leaves-out/) and [Google](https://apievangelist.com/2026/11/16/the-google-api-estate-161-surfaces-one-discovery-service-and-what-it-still-leaves-out/). Last week I set [Amazon and Microsoft side by side](https://apievangelist.com/2026/11/13/amazon-and-microsoft-two-api-estates-two-ways-to-build-one/). Since then I finished Google, and I went back to Microsoft and did what I had done for the other two: rebuilt its contracts from Microsoft's own published specifications. That last step changed what I think this comparison is about.

## The numbers

| | Google | Amazon | Microsoft |
|---|---|---|---|
| Live provider profiles | 161 | 199 | 178 |
| Vendor source of truth | Discovery Service | Smithy models | Azure REST specs, Microsoft Graph, GitHub REST |
| Members built from it | 126 | 186 | 90 |
| Operations generated | 11,620 | about 17,000 | 49,891 |
| Mean Kin Score | 60.3 | 69.9 | 59.2 |
| Median Kin Score | 63.7 | 71.3 | 64.2 |
| Exemplar | 58 | 154 | 68 |
| Below 40 | 12 | 3 | 30 |
| Spread (standard deviation) | 12.0 | 7.5 | 16.0 |
| Mean agent readiness | 34.4 | 38.8 | 26.3 |
| At 40+ agent readiness | 31 | 98 | 14 |

Every operation ID in every generated contract matches its source exactly: 11,620 against Google's Discovery documents, every Amazon operation against its Smithy model, and 49,891 against Microsoft's specs. I checked them all.

## The floor follows the source of truth, not the company

Last week I wrote that Amazon has a floor and Microsoft has peaks, and I put it down to how each company describes its APIs. Now that Microsoft's estate is partly built from its own specs, I can test that directly, inside one company.

| Microsoft members | Count | Mean Kin Score | Spread | Below 40 | Agent readiness |
|---|---|---|---|---|---|
| Built from Microsoft's own specs | 90 | 66.8 | 7.1 | 0 | 29.6 |
| Everything else | 83 | 51.0 | 18.8 | 30 | 22.7 |

The 90 Microsoft members built from Azure's spec repository, Microsoft Graph and GitHub's REST description have a spread of 7.1 points. Amazon's whole estate has a spread of 7.5. **Every one of Microsoft's 30 members below 40 is outside the vendor specs.**

So the floor is not an Amazon trait. It is what happens to any estate wherever one machine-readable source describes the APIs. Amazon looks the most consistent because its source covers 186 of its 199 members. Google's covers 126 of 161. Microsoft's covers 90 of 178, and the other half of the estate is where the long tail lives.

## Three sources, three shapes

All three companies publish a source of truth. They are very different things.

**Amazon's Smithy models are the most complete.** They carry the wire protocol, every modelled error, and the real authentication scheme, and AWS generates its own SDKs from them. A converter has little to guess.

**Google's Discovery documents are the oldest and the most consistent.** A single directory lists every API, and each document lists its methods, schemas and the exact OAuth scope each method needs. But Discovery is not OpenAPI, so every consumer has to convert it, and it says little about errors.

**Microsoft has three sources, not one.** Azure's [azure-rest-api-specs](https://github.com/Azure/azure-rest-api-specs) holds OpenAPI for every resource provider, split across thousands of files that reference each other: I had to resolve more than 46,000 cross-file references before a single Azure contract could stand on its own. Microsoft Graph publishes one enormous description of all of Microsoft 365. GitHub publishes its own clean REST description. All three are good. They just do not add up to one practice, and nothing covers Dynamics, the developer tools, gaming or the acquisitions.

## Agent readiness is the same gap in all three

Agent readiness trails the Kin Score by 31 points at Amazon, 26 at Google and 33 at Microsoft. Even inside Microsoft's vendor-spec members, it is 29.6 against a Kin Score of 66.8.

A vendor contract tells an agent how to call an operation. None of these three sources tells it which operations belong together, what a sensible workflow is, what a call costs, or when an operation is going away. That is the same layer missing in all three, and no amount of better contracts will fill it.

## Each estate is incoherent in its own way

**Amazon's problem is time.** Nineteen of the profiles we held were for services AWS had already shut down. AWS publishes a shutdown list, but the models do not say a service is closing.

**Google's problem is renames.** I merged thirteen duplicates, most of them created by Google renaming its own products: Data Studio became Looker Studio, DoubleClick became Marketing Platform, and Gmail, Firebase and Nest each existed with and without the vendor prefix. Google also has no single list of shutdowns, so the four I retired each had to be found separately.

**Microsoft's problem is identity.** Azure Active Directory, Entra ID and Entra; Microsoft 365, Office 365 and Office. Microsoft's products are renamed and regrouped faster than any catalog keeps up with.

**All three sell products their contracts do not name.** AWS's VPC, Aurora and Fargate live inside the EC2, RDS and ECS models. Google's Cloud Armor, CDN and Load Balancing live inside the Compute Engine API. Microsoft's SQL Server and Azure SQL share a contract. In every estate, buyers think in products and the source of truth is organised by service.

## What doing all three taught me about my own tools

Each of these runs broke our pipeline in a way that no score caught.

- **Amazon:** old specs left beside the new ones were merged back in, so about seventy members briefly carried every operation twice. Every score went up.
- **Google:** our dedupe step treated two APIs that share a path like `/v1/{name}` as duplicates and quietly dropped operations from members with several APIs.
- **Microsoft:** a refine step left 2,052 references across 84 members pointing at files we had just moved aside, and one empty mapping briefly superseded a member's contracts with nothing.

I found every one of these by counting operations against the vendor's own source, not by looking at scores. Scores reward more. Only a source of truth tells you whether more is right.

## Where I would invest

1. **Microsoft: extend the practice, not the products.** Azure already has the best repository of specifications of the three. Bringing Dynamics, the developer tools and the acquisitions into one public repository, in one format, would lift the bottom half of the estate more than any single product investment.
2. **Google: publish OpenAPI next to Discovery.** Everything needed is already there. Doing the conversion once, at the source, would put Google's contracts straight into every OpenAPI-native tool and agent framework.
3. **Amazon: put lifecycle in the model.** A deprecation date and a successor in Smithy would reach every SDK and every agent at once.
4. **All three: model products, and build the agent layer.** Products need to be findable as themselves, and every estate needs workflows, cost and lifecycle as data on top of its contracts.

## What I took away

I started this series expecting to compare three companies. I ended up comparing three ways of describing APIs, and the result was clear: wherever a company describes its APIs from one machine-readable source, the estate gets a floor, and the company does not matter. Amazon has the most consistent estate because it has extended that practice the furthest. Microsoft has the same floor everywhere its specs reach, and a long tail everywhere they do not.

If you run an API program, the cheapest investment in consistency you can make is not a better API. It is one source of truth for all of them.

The estate pages update with this weekend's APIs.io build: [Google](https://apis.io/estates/google/), [Amazon](https://apis.io/estates/amazon/) and [Microsoft](https://apis.io/estates/microsoft/). The full member-by-member tables are in the three estate posts: [Google](https://apievangelist.com/2026/11/16/the-google-api-estate-161-surfaces-one-discovery-service-and-what-it-still-leaves-out/), [Amazon](https://apievangelist.com/2026/11/12/the-amazon-api-estate-199-surfaces-one-source-of-truth-and-what-it-still-leaves-out/) and [Microsoft](https://apievangelist.com/2026/11/05/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent/).
