---
published: true
layout: post
title: 'A Year After OpenAPI 3.2, Most API Tooling Cannot Read It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-year-after-openapi-3-2-most-api-tooling-cannot-read-it.png
date: 2026-10-09
author: Kin Lane
tags:
  - OpenAPI
  - Specifications
  - Tooling
  - Swagger
  - AsyncAPI
  - Arazzo
  - Overlays
---
Earlier this week I wrote that [one in ten API providers still publish Swagger](https://apievangelist.com/2026/10/05/one-in-ten-api-providers-still-publish-swagger/), and that OpenAPI 3.2 shows up for five companies out of 2,281. I ended that post saying versions are mostly set by defaults, and that if the community wants 3.2 adopted, the place to win it is the tooling, not the provider's roadmap.

So I went and looked at the tooling. Same question, other side of the table: of the companies and projects that sell or maintain the things providers use to design, document, gateway, generate and serve their APIs, who supports which specification, and at which version?

## How I measured it

I looked at 137 products and projects. Documentation platforms, developer portals, gateways and API management, SDK generators, API clients, MCP hosts and agent platforms, open-source parsers and linters, and the server frameworks that emit the OpenAPI in the first place. 133 of them touch OpenAPI.

There were two ways in.

- **If I could run it, I ran it.** 50 tools got the same set of test documents: Swagger 2.0, OpenAPI 3.0.3, 3.1.0, two versions of 3.2.0, AsyncAPI 2.6 and 3.0, Arazzo 1.0.1 and Overlay 1.0.0. One 3.2 document only changes the version string. The other actually uses 3.2: a `QUERY` operation, `additionalOperations`, `itemSchema`, `$self`, hierarchical tags.
- **If I could not run it, I read it.** For the other 87, I fetched their own docs, changelogs, release notes, source code and issue trackers, and recorded the URL and the exact words for every claim.

Two rules kept me honest. A tool only "accepted" a document if the operation in it actually showed up in what the tool produced, because exiting cleanly is not the same as understanding. And a docs page that lists 2.0, 3.0 and 3.1 and says nothing about 3.2 counts as **unknown**, not unsupported.

## Version by version

Before getting to 3.2, here is the whole picture. Reading means the product accepts that version as input: it imports it, renders it, lints it or generates from it. Writing means the product puts out a document at that version: an export, a conversion, or what a framework generates from your code. Each count is out of the products where I could establish the versions at all.

**Who reads each version**

| Version | Hosted vendors (45) | Open-source tools (48) | All (95) |
|---|---|---|---|
| Swagger 2.0 | 29 | 43 | 74 |
| OpenAPI 3.0 | 43 | 46 | 91 |
| OpenAPI 3.1 | 33 | 43 | 76 |
| OpenAPI 3.2 | 10 | 26 | 36 |

**Who writes each version**

| Version | Hosted vendors (20) | Open-source tools (7) | Frameworks (26) | All (53) |
|---|---|---|---|---|
| Swagger 2.0 | 8 | 1 | 8 | 17 |
| OpenAPI 3.0 | 16 | 6 | 18 | 40 |
| OpenAPI 3.1 | 10 | 3 | 20 | 33 |
| OpenAPI 3.2 | 4 | 2 | 8 | 14 |

**The newest version each product reads**

| Newest version read | Hosted vendors | Open-source tools | All |
|---|---|---|---|
| Swagger 2.0 | 1 | 2 | 3 |
| OpenAPI 3.0 | 11 | 3 | 16 |
| OpenAPI 3.1 | 23 | 17 | 40 |
| OpenAPI 3.2 | 10 | 26 | 36 |

A few things stand out to me. OpenAPI 3.0 is the one version nearly everything reads: 91 of 95. Swagger 2.0 is still read by 74 of them, almost as many as read 3.1, so the long tail I found on the provider side is well supported on the tooling side. Among hosted vendors, 3.1 is where most of them top out. 23 of 45 read nothing newer, and another 11 stop at 3.0. On the writing side, 3.0 is still the most common version put out, and that is the number that keeps providers where they are.

The 3.2 rows count anything that accepts a 3.2 document, including the products that accept it and drop the new parts. I break that down next. The evidence was recorded at this level, 2.0, 3.0, 3.1 and 3.2, so I am not reporting patch versions like 3.1.0 against 3.1.1 for the tooling the way I did for providers.

## OpenAPI 3.2, one year in

OpenAPI 3.2 was released on September 19, 2025. Here is where the tooling is, a year later.

| | Products | Supported | Partial | Unsupported | Unknown |
|---|---|---|---|---|---|
| Everything | 133 | 33 | 18 | 30 | 52 |
| Hosted vendors | 56 | 7 | 6 | 7 | 36 |
| Open-source tools | 50 | 19 | 11 | 14 | 6 |
| Server frameworks | 26 | 7 | 1 | 9 | 9 |

Thirty-three supported sounds better than it is. **Only 15 of them say so themselves**: Swagger UI and Swagger Studio, Scalar, Bump.sh, Mintlify, DeveloperHub, Backstage (through Swagger UI), Microsoft's Kiota and OpenAPI.NET, libopenapi, ASP.NET Core on .NET 11, utoipa, Goa, drf-spectacular, swagger-php and Laravel Scramble, plus fastify-swagger. The other 18 just passed my 3.2 document through without breaking. Some of that is real support nobody has written down. Some of it is a tool that does not look at the version at all.

## Partial is where most of the market is

The more interesting group is the one that takes a 3.2 document and quietly loses part of it. Postman's converter added 3.2 two days ago, while its Spec Hub docs still say 2.0 through 3.1. Kong's decK turned my `QUERY` operation into a route and dropped `additionalOperations` without a word. Speakeasy says it "handles selected OpenAPI 3.2 constructs, but OpenAPI 3.2 is not yet supported as a complete document version." Redoc builds the page and leaves the 3.2 operations off it. Code generators like hey-api, orval, oapi-codegen and openapi-typescript generate a client that has no `QUERY` method in it. LangChain and LlamaIndex load the document and ignore what they do not recognize.

This is the version of support that worries me most, because nothing fails. A provider publishes 3.2, the pipeline goes green, and an operation is missing from the docs, the SDK and the agent's tool list.

## Who says no

Then there are the tools that reject 3.2 by name.

- **swagger-parser.** The JavaScript one says "Swagger Parser only supports versions 3.1.0, 3.1.1, 3.1.2, 3.0.0 … 3.0.4." It sits underneath swagger-cli, orval and the openapi-mcp-generator, so all of them reject it too. The Java one sits underneath OpenAPI Generator, which has an open issue asking when 3.2 is coming.
- **ReadMe.** Its parser answers "OpenAPI 3.2 is currently unsupported."
- **Spectral.** Its schema rule checks a 3.2 document against the 3.0 schema and fails it.
- **Fern, openapi-python-client, FastMCP and Connexion** all reject the version string.
- **Insomnia and Bruno** both have open issues asking for it.
- **Azure API Management and AWS API Gateway** publish "only supports" lists that stop before 3.2.

## Mostly, nobody says anything

The largest group among hosted vendors is unknown. That is 36 of 56. GitBook, Apigee, APIMatic, Tyk, WSO2, Zuplo, Stainless, liblab, Apidog, RapidAPI, Cloudflare, and every MCP host and agent platform I looked at list 3.0 or 3.1 and stop. Nobody writes "we do not support 3.2." It just never comes up.

## 3.1 is not done either

Twenty-four of these products show no 3.1 anywhere, in or out. IBM API Connect says plainly that "Version 3.1 is not supported." MuleSoft supports OAS 2.0 or 3.0. AWS API Gateway imports and exports 2.0 and 3.0. Axway, Gravitee, NSwag, Swagger Codegen and Connexion are in the same place. Apiary is still on Swagger 2.0, and Oracle shuts it down at the end of this month.

## What the frameworks write by default

This is the part that connects back to the provider numbers.

| Default version | Frameworks |
|---|---|
| 3.1 | FastAPI, Litestar, Django Ninja, APIFlask, springdoc, Huma, Quarkus, Elysia, utoipa, Scramble, ASP.NET Core on .NET 10 |
| 3.0 | Swashbuckle, NSwag, NestJS, Hono, drf-spectacular, Micronaut, swagger-php, rswag, OpenApiSpex |
| 2.0 | fastify-swagger, swaggo, tsoa, grape-swagger |

Only ASP.NET Core on .NET 11 defaults to 3.2, and Goa writes a 3.2 file next to its 2.0 and 3.0 ones. Everywhere else, 3.2 is a flag you have to know about, or it does not exist. That lines up with what I found on the provider side. The Python and Rust generation writes 3.1 because its frameworks do. The Node, Java and .NET incumbents write 3.0 because theirs do. And four popular frameworks still write Swagger 2.0 unless you tell them not to, which goes a long way toward explaining the one in ten.

## The other specifications

- **AsyncAPI 3.0** is read by Kong Konnect, Backstage, Redocly, Fern, Mintlify, Postman, WSO2 and Spectral. Bump.sh, Stoplight and MuleSoft stop at 2.x.
- **Arazzo 1.0** is consumed by Redocly, Speakeasy, Spectral, Stoplight, Bump.sh and libopenapi. No gateway, portal or MCP host I looked at touches it.
- **Overlay 1.0** is applied by Bump.sh, Mintlify, Redocly, Speakeasy, libopenapi, openapi-format and openapi-overlays-js. All four of the tools I ran it through applied my test overlay without complaint.

## What I think this means

My reading, not something the vendors told me. If you publish OpenAPI 3.2 today, a good share of the tooling your consumers use will reject it, and more of it will accept it and drop the parts that are new. The safest thing a provider can do right now is publish 3.1 and keep 3.2 for the toolchains that say they read it.

For the OpenAPI community, the work is narrow and specific. Two parsers, swagger-parser in JavaScript and in Java, gate a large part of the open-source ecosystem. A handful of framework defaults decide what most providers publish. And most hosted vendors would move a lot of this table from unknown to something just by writing down which versions they support.

## What this does not cover

- **I read the hosted vendors. I did not exercise them.** Uploading a 3.2 document into each vendor's own import flow is the next level of evidence, and it would settle most of the 36 unknowns.
- **Java and .NET tools were read, not run.** That includes OpenAPI Generator, Kiota, NSwag, Swashbuckle and springdoc.
- **This is a snapshot from October 8, 2026.** Postman shipped its 3.2 converter the day before. This will move.

The test documents, the probe harness and every row of evidence live in the catalog's working tooling, next to the provider census. I will run both again, and I am happy to correct any row a vendor thinks I got wrong. Send me the page that says so.
