---
published: true
layout: post
title: 'Fern Puts SDK Design Decisions In The Contract'
date: 2026-09-15
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Fern
  - SDKs
  - Standards
  - APIs.io
  - APIs
---
Nineteen keys in the `x-fern-` namespace, thirteen providers. Square, Webflow, AssemblyAI, Pipedream, SignalWire, HelloSign, Method Financial, Vital, Instabase, NewsCatcher, Eon, Fyno.

The two that matter appear together and in equal number — `x-fern-sdk-method-name` and `x-fern-sdk-group-name`, each 846 times across 32 documents. They always travel as a pair, because together they answer one question: in the generated client, what is this operation called and what is it called *on*. `client.payments.create` rather than `client.createPaymentV2`.

That sounds like a naming convenience. It is not. It is the API's public surface for anyone using an SDK, which is most people.

I have made this argument for years and it keeps being true: for the majority of developers, the SDK *is* the API. They never see a path. They never construct a request. They type a dot and read what autocomplete offers them, and the shape of that menu — the grouping, the verbs, whether related things sit together — determines whether the API feels coherent or feels like a pile. That is a design decision of the first order, and in most companies it gets made accidentally, as a side effect of whatever the operation IDs happened to be when the endpoints were written.

`x-fern-sdk-group-name` makes it deliberate. It says: this operation belongs in this namespace, regardless of what the path says or what the tags say or what history left behind. Thirteen companies are making that call explicitly, in the contract, where it is reviewable.

The rest of the vocabulary follows the same instinct. `x-fern-availability` (186 occurrences) marks operations as generally available or in preview or deprecated — lifecycle stage as a first-class fact rather than a sentence in a description. `x-fern-audiences` splits a contract into views for different consumers, so one document can generate a public SDK and an internal one. `x-fern-streaming` marks the operations that stream, which OpenAPI still handles awkwardly. `x-fern-type-name` names generated types. `x-fern-enum` carries per-value metadata that plain enums cannot hold. `x-fern-server-name` labels servers so environments have identities instead of being an ordered list.

Look at that set as a whole and it is not codegen configuration. It is a layer of API design intent that OpenAPI has no vocabulary for — naming, lifecycle, audience, environment identity — expressed in the only file where all of it can live together.

`x-fern-availability` is the one I would push hardest on, and I want to make the case properly. Deprecation in OpenAPI is a boolean. An operation is `deprecated: true` or it is not. That is the entire vocabulary the specification gives you for the lifecycle of an endpoint, and it is nowhere near sufficient for how APIs actually age. There is alpha. There is beta. There is generally available. There is deprecated-but-supported. There is sunset-on-a-date. Every serious API distinguishes these, communicates them in prose, and then flattens them into a boolean or nothing at all in the machine-readable contract. Fern gave that a key, and companies are using it.

That is exactly the kind of thing the registry should be surfacing, because right now the only way to find out that a working solution to API lifecycle declaration exists in the wild is to do what I did, which is parse twenty-one thousand OpenAPI documents and count.

The asks.

**Register the design-intent keys.** Six of them: `x-fern-sdk-method-name`, `x-fern-sdk-group-name`, `x-fern-availability`, `x-fern-audiences`, `x-fern-streaming` and `x-fern-enum`. These carry meaning that survives leaving Fern's pipeline — a foreign tool reading Square's or Webflow's document benefits from understanding all six. The remaining thirteen are generator plumbing and I would leave them out, for the same reason I said it about Speakeasy and Stainless: a selective registration tells readers which keys matter, and an exhaustive one tells them nothing.

**Sponsor the OpenAPI Initiative.** Fern is a young, funded company whose product takes an OpenAPI document as input. The dependency is total. Membership at whatever level fits a company that size is the right expression of that, and it costs less than the engineering time already spent working around the spec's rough edges.

**Get involved — bring the lifecycle argument.** If Fern did one thing in the OpenAPI community, I would want it to be proposing a real lifecycle vocabulary to replace the deprecation boolean. Fern has a deployed design, running in production, with customers who chose it because the boolean was not enough. That is a far stronger position to argue from than a good idea in a proposal document. The same goes for audiences: the notion that one contract generates several views for several consumers is something a lot of companies need and almost nobody has language for.

There is a pattern across this whole first stretch of the series that I should name before I move on. Redocly, Speakeasy, Microsoft, AWS, ReadMe, Stainless, Fern — seven vendors, and every single one has independently invented a key for something OpenAPI does not describe. Pagination. Lifecycle. Visibility. Naming. Retries. Long-running operations. Field mutability. They did not coordinate. They each hit the same wall and each built their own door.

The registry will not merge those doors. But it would at least put them in one place where you can see that seven people built the same door seven times, which is the necessary first step to anyone deciding the specification should have had a door.

Tomorrow I start the second half of this series, on the companies inventing vocabulary for agents and MCP — where the same thing is happening again, right now, much faster, and with nobody writing any of it down.
