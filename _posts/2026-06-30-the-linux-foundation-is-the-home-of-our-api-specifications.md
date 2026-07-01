---
published: true
layout: post
title: The Linux Foundation Is the Home of Our API Specifications, and They Should Work Together
date: 2026-06-30T09:00:00.000Z
tags:
  - Linux Foundation
  - API Specifications
  - Standards
  - OpenAPI
  - AsyncAPI
  - GraphQL
  - JSON Schema
  - gRPC
  - CloudEvents
  - OpenTelemetry
  - SPDX
  - Arazzo
  - Governance
  - Interoperability
image: >-
  https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-linux-foundation-is-the-home-of-our-api-specifications.png
---
I spent some time this week walking the entire Linux Foundation umbrella to inventory the API specifications it stewards, and the projects underneath it that actually have APIs. I expected a long, messy list. What I did not expect was how clearly one fact would jump out at me once it was all written down in a single place: the Linux Foundation has quietly become the neutral home of the world's open API specification standards. Not most of them. Almost all of them.

When I pulled the specifications into one table, the picture was hard to argue with. [OpenAPI](https://www.openapis.org/) lives there, under the OpenAPI Initiative, and it has quietly grown into a family—OpenAPI itself, plus the [Arazzo](https://spec.openapis.org/arazzo/latest.html) workflow specification and the [Overlay](https://spec.openapis.org/overlay/latest.html) specification. [AsyncAPI](https://www.asyncapi.com/) is there for our event-driven and message-based APIs. [GraphQL](https://spec.graphql.org/) is there. [JSON Schema](https://json-schema.org/) is there, hosted at the [OpenJS Foundation](https://openjsf.org/). [gRPC](https://grpc.io/) and the [Protocol Buffers](https://protobuf.dev/) it leans on are there through [CNCF](https://www.cncf.io/). [CloudEvents](https://cloudevents.io/), the [OpenTelemetry protocol](https://opentelemetry.io/docs/specs/otlp/), [OpenMetrics](https://openmetrics.io/), and the [xDS](https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol) data-plane API are all there too. And that is before you get to the identity and supply-chain formats sitting right alongside them—[SPIFFE](https://spiffe.io/), [OpenFeature](https://openfeature.dev/), [SPDX](https://spdx.dev/), the [OCI](https://opencontainers.org/) image, runtime, and distribution specs, [in-toto](https://in-toto.io/), [OSV](https://osv.dev/), [SLSA](https://slsa.dev/), [TUF](https://theupdateframework.io/), [Notary](https://notaryproject.dev/), and [Sigstore](https://www.sigstore.dev/).

That is the contract layer for REST, event-driven, RPC, and GraphQL APIs—all governed under one foundation. I have been doing this for sixteen years and I am not sure I had ever stopped to notice that the descriptions we use to define how software talks to software had all drifted into the same harbor.

## JSON Schema Is the Connective Tissue
The deeper I looked, the more one thread kept showing up underneath everything else: JSON Schema. OpenAPI uses it. Arazzo and Overlay use it. AsyncAPI uses it. CloudEvents ships a JSON Schema. OSV and SPDX lean on it. The OpenAPI metaschema is JSON Schema. GraphQL is the notable outlier with its own grammar, but for most of the rest of the catalog, JSON Schema is the substrate the other specifications are built on top of.

So we have a situation where a single foundation governs the major API description formats, and most of those formats quietly share a common foundation underneath them. That is not a coincidence anymore. That is an opportunity that nobody is fully reaching for.

## The Specifications Are Neighbors That Do Not Talk
Here is the part that bugs me. These specifications all live in the same house, and they barely talk to each other. Each one is its own initiative, its own working group, its own community, its own release cadence, its own tooling ecosystem, its own registry of extensions, its own way of expressing the same handful of ideas—operations, schemas, parameters, servers, security, tags, versions, references.

I have done the exercise before of exploding the properties across interface specifications and watching the same concepts surface again and again under slightly different names. The overlap is real, and it is large. A parameter in OpenAPI, a field in a CloudEvent, a property in a JSON Schema, a message member in AsyncAPI—these are cousins, and we keep redefining them in isolation. Every specification reinvents how it points at a thing, references another thing, attaches metadata to a thing, and versions a thing. We have a dozen vocabularies for a shared set of nouns.

That fragmentation costs us. It costs tooling authors, who rebuild the same validators, linters, mockers, and code generators once per specification. It costs the people doing governance, who have to learn each format's idioms separately. And it costs the everyday developer, who has to hold all of these mental models at once just to describe a single system that speaks more than one protocol.

## The Opportunity Is Sitting Right There
Because all of these specifications already share a roof, the hard part—neutral, vendor-independent governance with a real IP framework and a path to ISO ratification—is already solved. What is missing is the connective work between them.

I keep coming back to a few concrete things these projects could be sharing:

- **A common vocabulary for the properties they all express.** Schemas, references, servers, security, parameters, tags, and versions show up everywhere. A shared map of these overlapping concepts would let each specification stay itself while making it obvious where they align.
- **Shared registries and shared tooling.** Extension registries, format registries, and the validators and linters that read these specs are rebuilt over and over. There is no reason a CloudEvent's schema, an AsyncAPI message, and an OpenAPI body could not lean on the same JSON Schema tooling and the same registry patterns.
- **Cross-specification references that actually resolve.** An Arazzo workflow already points across OpenAPI documents. AsyncAPI and OpenAPI describe two halves of the same system. These cross-references should be first-class and consistent, not bolted on per project.
- **Coordinated governance and a shared discovery surface.** If these specifications are going to live together, they should be discoverable together, documented against each other, and governed with at least an awareness of each other's roadmaps.

None of this requires merging the specifications. I do not want one specification to rule them all, and I do not think anyone seriously does. The strength of this ecosystem is that OpenAPI, AsyncAPI, GraphQL, and the rest each do their job well. What I want is for these neighbors to share information and coordinate—to treat the fact that they share a foundation as a feature, not an accident.

## Why I Care About This
This matters to me because I spend my days trying to describe real systems, and real systems do not respect specification boundaries. A single platform has REST endpoints, events, schemas, an RPC surface, telemetry, and an SBOM. I have to reach for half a dozen of these specifications at once to describe it honestly, and right now that means stitching together half a dozen disconnected worlds by hand.

The Linux Foundation has already done the heavy lifting of gathering our API specifications into one neutral place. The next move—and I think it is a big one—is to get those specifications sharing what they know and working together. I am going to keep pulling on this thread, because the inventory I built this week makes me think the pieces for something much more coordinated are already sitting on the same shelf, just waiting for someone to wire them together. If you are thinking about this too, reach out at kinlane@apievangelist.com.
