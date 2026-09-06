---
published: true
layout: post
title: 'Speakeasy Has Thirty-Six OpenAPI Extensions And Zero Registered'
date: 2026-09-04
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Speakeasy
  - SDKs
  - Standards
  - APIs.io
  - APIs
---
Yesterday I wrote about Redocly, who registered one of their four OpenAPI extensions and is therefore doing better than almost everybody. Today I want to talk about the largest coherent unregistered extension vocabulary I found in the whole [APIs.io](https://apis.io/extensions/) catalog, which belongs to Speakeasy.

Thirty-six keys. All in the `x-speakeasy-` namespace, all clearly designed as one system, appearing across thirty-two providers' public OpenAPI documents. None of them registered.

I want to be clear about my read on this before I go further, because the number sounds like an accusation and it is not one. Thirty-six keys is not sprawl. When I actually laid them out, what I found was one of the more carefully thought-through vendor vocabularies in the catalog. It has internal consistency. The naming is predictable. The keys compose. Somebody designed this rather than accreting it, and you can tell.

Here is the shape of it. `x-speakeasy-name-override` is the workhorse — 28 providers, 4,194 occurrences — and it does the thing every SDK generator eventually has to do, which is let you name the method in the generated client something other than whatever the operation ID happened to be. `x-speakeasy-group` puts operations into SDK namespaces. `x-speakeasy-unknown-values` appears 5,170 times and handles the hardest problem in generated enums, which is what your client does when the server sends a value your schema did not anticipate — a problem that has broken more integrations than almost anything else I can think of. `x-speakeasy-pagination` declares the pagination style directly, and Dub's specs show it carrying `type: cursor` with named inputs, or `type: offsetLimit`. `x-speakeasy-retries` puts retry policy in the contract. `x-speakeasy-entity` and `x-speakeasy-entity-operation` map operations onto resources for Terraform provider generation, which is a whole second product built out of the same document.

That is a real engineering vocabulary. It encodes decisions that the OpenAPI specification does not have an opinion about and probably should not — pagination shape, retry behaviour, unknown enum handling, resource identity — and it encodes them in the one file that every other tool in the pipeline is already reading.

Which is exactly the problem.

These keys are in Kong's specs. They are in Clerk's, Dwolla's, Airbyte's, Apideck's, Novu's, Unkey's, StackOne's, The Trade Desk's, Vessel's, Censys's, Livepeer's, Bolt's. Thirty-two companies, and those specs do not stay in the Speakeasy pipeline. They get published to developer portals. They get fetched by catalogs. They get handed to other generators. They get pulled into agent tooling. And when some other tool meets `x-speakeasy-pagination` in a document, it is holding a complete, machine-readable description of how that endpoint paginates — genuinely valuable information, sitting right there — and it has no way to know that is what it is holding.

That is the cost of not registering. Not that Speakeasy's tools break. Speakeasy's tools are fine. The cost is that thirty-two companies' good information is illegible to everyone downstream, and the fix is a text file.

There is a second thing here that I think matters more than the first. Speakeasy has solved problems in this vocabulary that the broader OpenAPI community has not solved. Pagination is the obvious one. Every API paginates, almost no API declares how, and every SDK generator and every agent has to reverse-engineer it from parameter names and hope. Speakeasy has a working, deployed, field-tested answer to that, running in production across dozens of companies. Retry policy is the same story. Unknown enum values are the same story.

Registering those keys does not just document Speakeasy's tooling. It puts a real, proven design in front of the people who are going to have to solve these problems at the specification level eventually, and it puts Speakeasy's name on it. That is a considerably better outcome for Speakeasy than the current one, where the vocabulary spreads anonymously and somebody else eventually standardizes the same idea with a different spelling.

So, the asks.

**Register the vocabulary — but not all thirty-six.** I would not send a pull request with three dozen files. I would pick the seven or eight keys that carry meaning other tools would actually benefit from: `x-speakeasy-pagination`, `x-speakeasy-retries`, `x-speakeasy-unknown-values`, `x-speakeasy-group`, `x-speakeasy-name-override`, `x-speakeasy-entity`, `x-speakeasy-ignore`. The Terraform-specific and internal-plumbing keys can stay unregistered without costing anybody anything; they only ever mean something inside your pipeline. The registry is a place for keys that travel, and the whole point of separating them is to signal which ones do.

**Sponsor the OpenAPI Initiative.** Speakeasy's product does not exist without OpenAPI. Not "benefits from," does not exist. The company is funded, it is growing, and the specification it is entirely downstream of is a Linux Foundation project that runs on member support. That is about as clean a case for membership as I can construct.

**Get involved in the specification conversation.** This is the one I would push hardest. Speakeasy has generated SDKs from a very large number of real-world OpenAPI documents, which means Speakeasy knows precisely where the specification is ambiguous, where it is underspecified, and where it lets people write something technically valid and practically unusable. That knowledge is worth a great deal in a Special Interest Group and almost nothing sitting in an internal issue tracker. The people who have had to make a generator work against thousands of imperfect specs should be in the room when the next version is designed.

Tomorrow I move on to Microsoft, who documented their extension vocabulary thoroughly, publicly, for over a decade — and never registered a single key either.
