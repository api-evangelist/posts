---
published: true
layout: post
title: 'Microsoft Documented Its OpenAPI Extensions For A Decade And Never Registered Them'
date: 2026-09-07
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Microsoft
  - Azure
  - Standards
  - APIs.io
  - APIs
---
Of all the extension vocabularies I pulled out of the [APIs.io](https://apis.io/extensions/) catalog, the `x-ms-` family is the one where the gap makes the least sense. Not because Microsoft did something careless. Because Microsoft did everything right except the last step.

The AutoRest extension vocabulary is documented. Publicly. Thoroughly. It has been for the better part of a decade. There is a specification for it, with prose explaining each key, what it attaches to, what shape its value takes, and what the generator does with it. If you want to know what `x-ms-pageable` means you can go and read what it means, written down by the people who built it. That puts Microsoft ahead of nearly every vendor in this series, most of whom have keys with no published definition at all.

And it is not in the registry. Not one key.

Let me lay out what is actually riding in these documents. `x-ms-examples` appears 11,723 times across 621 OpenAPI documents in my catalog. `x-ms-pageable` appears 8,747 times across 543 documents, carrying values like `{nextLinkName: nextLink}` — a complete, unambiguous, machine-readable statement of how to page through a collection. `x-ms-enum` appears 6,723 times across 578 documents. `x-ms-discriminator-value` 4,051 times. `x-ms-client-name` 3,616 times. `x-ms-parameter-location` 3,023 times across 536 documents. `x-ms-long-running-operation` 2,380 times, `x-ms-client-flatten` 2,209, `x-ms-mutability` 1,230, `x-ms-azure-resource` 543.

Look at what those keys are doing, because it is not decoration. `x-ms-pageable` solves pagination declaration, which almost nothing else in the OpenAPI world solves. `x-ms-long-running-operation` declares that an operation is asynchronous and that the response is a handle rather than a result, which is one of the genuinely hard modelling problems in HTTP APIs and one that OpenAPI still does not have a first-class answer for. `x-ms-mutability` says which fields can be set at create time, which can be updated, and which are read-only — a distinction that every API has and almost no API expresses. `x-ms-client-flatten` handles the wrapper-object problem that makes generated SDKs miserable.

That is not vendor plumbing. That is a decade of hard-won modelling knowledge about how real, large, long-lived APIs actually behave, encoded in a form a machine can read, sitting in thousands of public documents, and formally invisible to the specification community.

I keep coming back to `x-ms-mutability` in particular. Every single person who has ever generated a client or built a form against an API has hit the problem it solves. You have a schema with twenty fields. Six of them you set on create and can never change. Four are server-computed and rejecting them is the server's job. Ten are freely updatable. OpenAPI gives you `readOnly` and `writeOnly` and then stops, and everybody fills the rest of the gap with prose in a description field. Microsoft filled it with a key, ten years ago, and has been using it in production ever since.

Now — the honest counterargument, which I want to state properly rather than knock down. Somebody at Microsoft can reasonably say these keys are AutoRest's, they are internal to a generator pipeline, the documentation exists for the people who need it, and registering them in a public registry implies a stability commitment nobody wants to make. That is a real position. I do not fully agree with it, but it is not a lazy one.

Here is why I think it is wrong anyway. Those documents are public. Azure's OpenAPI specifications are in a public repository that a very large number of tools consume. The keys have already escaped. They are already being read by things Microsoft did not write and cannot control, and those things are already guessing. Registration does not create an obligation that did not exist — it just writes down what the key means for the readers who are already encountering it. And the registry entry format is deliberately light: a name, a description, a pointer. It is not a conformance claim.

The three asks, and for Microsoft two of them are already done.

**Register the keys that carry portable meaning.** Not all of them. I would send `x-ms-pageable`, `x-ms-long-running-operation`, `x-ms-mutability`, `x-ms-enum`, `x-ms-parameter-location` and `x-ms-client-name` — the ones whose meaning is about the API rather than about AutoRest's code output. Each one is a markdown file pointing at documentation Microsoft already wrote. The work is nearly zero because the hard part, the writing-down, happened years ago.

**Sponsor the OpenAPI Initiative.** Microsoft already does. Microsoft has been part of this from the beginning, and I want to say that plainly rather than let the criticism above stand as the whole picture. The company has put real resources into OpenAPI for a long time.

**Get more involved — specifically, bring the modelling problems.** This is the ask that actually matters here. Microsoft has the deepest institutional knowledge of what breaks when you describe thousands of services with OpenAPI over ten years, across teams that do not talk to each other, with backward compatibility obligations nobody can walk away from. The long-running-operation problem and the mutability problem are not Microsoft problems. They are everybody's problems, and Microsoft has shipped an answer to both. Bring those to the Special Interest Groups as proposals rather than leaving them as `x-ms-` keys, and the specification gets better for everyone — including for Microsoft, who would then get to delete some extensions.

Tomorrow, AWS, whose gateway vocabulary became a de facto standard by pure gravitational pull and has exactly as much registry presence as Microsoft's.
