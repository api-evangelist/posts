---
published: true
layout: post
title: Your Diverse API Toolbox
date: 2026-06-12
author: Kin Lane
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-old-tools.jpeg
tags:
  - Toolbox
  - REST
  - GraphQL
  - gRPC
  - Webhooks
  - WebSockets
  - Kafka
  - MCP
  - Agent Skills
  - OpenAPI
  - AsyncAPI
  - Protocols
  - Patterns
excerpt: >-
  Coming back from APIDays Amsterdam, the one thing I keep coming back to is
  the need to reinforce the idea of a diverse API toolbox. MCP and Agent Skills
  are settling in alongside REST, GraphQL, Webhooks, and Kafka — and no single
  pattern will ever rule them all.
---

I have been writing about this since [March 2017](https://apievangelist.com/2017/03/10/focus-on-having-a-robust-and-diverse-api-toolbox/), kept expanding it through [2018](http://apievangelist.com/2018/01/02/my-evolving-definition-of-a-robust-and-diverse-api-toolbox/) with a diagram that I brought to talks and workshops, and reinforced it again in [2020](https://apievangelist.com/2020/08/31/a-diverse-api-toolbox-is-the-future/). Coming back from APIDays Amsterdam, the same message needs saying again — now with MCP and Agent Skills freshly added to the shelf.

The diagram above is my current read on the toolbox. Every time someone tells you that REST is dead, or that everything will be GraphQL, or that MCP will replace all your APIs, remember: they are a tool salesperson, not a practitioner. The people who get things done across the real enterprise have a diverse set of tools and know when to reach for which one.

## API Design Patterns

These are the request/response patterns — the core of how clients talk to servers.

- **REST** is still the dominant pattern and will remain so. It maps cleanly to the web, it is simple enough that a wide audience can consume it, and it has the broadest tooling support. Every practitioner should be able to design and ship REST APIs well. The limitations are real — deep queries, real-time data, tight coupling between client and server — but none of them mean REST is going away.
- **GraphQL** earns its place when consumers need to drive the shape of the response. Data-intensive products, mobile clients, and cases where you want to avoid under/over-fetching are where GraphQL genuinely shines. It also moves the schema front-and-center, which I respect. The tradeoff is complexity on the server and a higher floor for client sophistication.
- **gRPC** is the two-speed API. When you need high-volume, low-latency inter-service communication inside a data center or across microservices, gRPC's binary Protocol Buffers wire format and HTTP/2 multiplexing make a meaningful difference. It does not belong as your public-facing API unless your consumers are large enough to justify it — but it absolutely belongs in the toolbox.

## Event-Driven Patterns

The moment your architecture needs to react to something happening rather than being polled for information, you reach for event-driven patterns. The mistake is treating any of these as a full replacement for request/response. They are complementary.

- **Webhooks** are the simplest push pattern: when something happens, HTTP POST to a URL the consumer registered. Stripe has built their entire developer experience around webhooks. They are asynchronous, decoupled, and nearly universal. Every API platform should offer webhooks before it offers Kafka.
- **Event Destinations** is the more mature form of webhooks — where instead of just delivering to a URL, you deliver to configurable targets: S3 buckets, queues, other APIs, third-party services. Stripe, GitHub, and Shopify have all converged on this model. It shifts integration work from bespoke webhook receivers to a routing problem, which is much more tractable at scale.
- **WebSockets** open a persistent bidirectional connection. This is for genuinely real-time interactions — chat, live dashboards, collaborative editors, trading feeds. The connection overhead is real, so this is not the right tool for fire-and-forget notifications. Know the difference between "low latency" and "real-time" before you reach for WebSockets.
- **Kafka** is industrial-grade event streaming. When you are moving millions of events per second, need replay capability, need durable ordered delivery across many consumers, and need to run at scale across distributed infrastructure — Kafka (and its ecosystem) is the answer. Too many organizations reach for Kafka before they have exhausted simpler patterns. It is powerful and it is complex. Make sure you can operate it reliably before you commit.

## Experience Patterns

These are the patterns that determine whether your API actually gets used. You can ship a technically perfect API and have zero adoption if the experience around it is poor.

- **Documentation** is not optional. It is the interface between your API and your potential consumers. The bar in 2026 is an interactive reference generated from OpenAPI or AsyncAPI, supplemented by guides that explain how to actually accomplish something with the API rather than just enumerating its endpoints. If your documentation is just a list of routes, it is not documentation — it is a changelog.
- **Mock Servers** close the loop between design and development. Consumers should be able to start building against a mock before the real implementation exists. Prism, Mockoon, WireMock — the tooling is mature. If your team cannot create a mock server from an OpenAPI spec in an afternoon, something is wrong with your process.
- **Discovery** is the increasingly critical, chronically underinvested pattern. Can your developers find every API available to them? Can an AI agent? I run [APIs.io](https://apis.io) specifically because API discovery is a genuinely hard problem that affects everyone doing API integration at scale. APIs.json and well-maintained developer portals are where this gets solved.

## Integration Patterns

How do consumers actually wire your API into their systems?

- **Clients** are the generated or hand-crafted HTTP client code that wraps the raw HTTP calls. A good client handles authentication, retries, rate limit backoff, and pagination. Auto-generating clients from OpenAPI specs has become table stakes — if you are not generating client libraries, you are creating unnecessary friction.
- **SDKs** go beyond clients to provide a higher-level abstraction that fits a specific language's idioms. The Stripe SDK for Python feels like Python, not like a thin wrapper around HTTP. The gap between a good SDK and a generated client is the difference between adoption and abandonment.
- **Copilots** are the AI coding assistants — GitHub Copilot, Claude, Cursor — that now function as first-line integration support. They are only as good as the machine-readable artifacts they can access. An API with a well-structured OpenAPI spec, good descriptions, and examples is vastly more useful to a copilot than one with none of those things. Writing for copilots is writing good API documentation.
- **Agents** are the autonomous systems that compose multi-step API calls to accomplish goals without human intervention in each step. This is where MCP and Agent Skills directly feed in. An agent needs to discover what APIs exist, understand what they do, and be able to call them safely and reliably. The toolbox patterns connect: REST and gRPC for the calls, OpenAPI for the contract, MCP as the agent-native access layer.

## AI Patterns

These are new tools in the toolbox as of the last two years, and while they dominate much of the conversation, they are beginning to shrink back down to a realistic cope in our modern toolbox.

- **MCP (Model Context Protocol)** is Anthropic's open protocol for how AI models access tools, data, and services. What started as a way to wire Claude into local development environments has become a standard that Microsoft, Google, and hundreds of API providers have adopted. An MCP server exposes your API's capabilities as tools that an AI model can call directly — with proper auth, schemas, and descriptions. I have been cataloging which providers in my network ship MCP servers. The number growing fast.
- **Agent Skills** (SKILL.md) are structured definitions that describe what an agent can do in a portable, discoverable format. Where MCP defines the protocol, a skill definition describes the intent, inputs, outputs, and preconditions of an agent capability. I have been building this out as part of the [Naftiko](https://naftiko.com) work. Skills allow agents to compose and delegate in principled ways rather than through freeform instruction.

The important thing to understand about MCP and Agent Skills is that they do not replace REST, GraphQL, or any of the other patterns. They sit on top of them. An MCP server typically calls REST APIs internally. An agent skill may orchestrate a sequence of Kafka events and REST calls. The foundation does not go away — you are extending the toolbox, not replacing it.

## Media Types

One of the things I keep having to remind people: the format your API returns is a design decision with real consequences for who can use your API and how.

- **application/json** — the lingua franca; assume JSON unless you have a specific reason not to
- **application/xml** — still required in enterprise, government, and healthcare integrations; do not pretend it does not exist
- **application/yaml** — human-readable and increasingly expected for configuration, specs, and anything a developer will edit directly
- **application/csv** — underestimated; a CSV response from a data API means a non-developer can open it in Excel; never underestimate the spreadsheet audience
- **application/html** — your API responds with HTML; this is both older than REST and more prevalent than most API designers acknowledge
- **text/markdown** — increasingly relevant as LLMs consume API documentation; structured natural language that both humans and models can read

Negotiating the right media type is something your toolbox should handle gracefully. An API that can return `application/json` when asked and `application/csv` when asked is strictly more useful than one that can only do one.

## API Specifications

Machine-readable contracts are the connective tissue of the entire toolbox. Without them, nothing else scales.

- **OpenAPI** remains the primary contract format for REST APIs. 23,000+ specs indexed on [apis.apis.io](https://apis.apis.io). The tooling ecosystem is enormous. If you are building a REST API and not shipping an OpenAPI spec, you are intentionally making integration harder.
- **AsyncAPI** does for event-driven what OpenAPI does for REST. Kafka topics, WebSocket channels, webhooks — AsyncAPI describes them all in a consistent machine-readable format. It remains underinvested relative to its importance.
- **JSON Schema** is the data modeling layer that both OpenAPI and AsyncAPI build on. Used directly for validating JSON payloads, generating documentation, and providing type-safe contracts. 95,000+ schemas indexed in my network.
- **GraphQL SDL** is the schema definition language for GraphQL APIs — self-documenting, introspectable, the reason GraphQL has the tooling ecosystem it does.
- **MCP Spec** defines MCP server capabilities in a machine-readable format — what tools an MCP server exposes, their inputs and outputs, how to auth. The spec is young but stabilizing fast.
- **Agent Skills** specification is still evolving. The goal is a portable, platform-agnostic format for describing what an agent can do — composable, discoverable, and grounded in the underlying APIs that make the skills work.
- **Protocol Buffers** is the schema format for gRPC — binary, strongly typed, backward compatible. If gRPC is in your toolbox, Protocol Buffers comes with it.

---

The lesson from every API cycle — REST, GraphQL, webhooks, Kafka, and now MCP — is that the practitioners who succeed are not the ones who pick the pattern that gets talked about the most. They are the ones who understand the tradeoffs of each tool, know when to reach for which, and can explain those choices to the people around them. The future is not event-driven. It is not AI-native. It is not any single thing. The future is having a diverse API toolbox and knowing how to use it.

That is the message I keep coming back to. That is the message APIDays Amsterdam keeps reinforcing. Maintain your diverse API toolbox and understand where new tools being discussed fit in.
