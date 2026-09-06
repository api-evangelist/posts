---
published: true
layout: post
title: 'Secureframe Is Teaching Agents A Multi-Step Workflow'
date: 2026-09-24
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Secureframe
  - MCP
  - Agents
  - APIs.io
  - APIs
---
Secureframe uses one key, `x-mcp-description`, and what they put in it is the clearest example I have found of the thing OpenAPI has never been able to express.

Here it is, on the operation that attaches an evidence file to a compliance test:

> Attach an evidence file to a Test.
>
> The bytes are not sent here. Stage the file first with the `create_file_upload` tool, which hands back a `url` and an `id`; PUT the file's raw bytes to that `url`; then call...

Read what that is doing. It is not describing the endpoint. It is describing the endpoint's *position in a sequence*, and it is doing it by naming the other tools by name and telling the reader what order to call them in.

This is the single hardest thing about using an API that nobody can find out from an OpenAPI document.

The three-legged upload is a pattern everyone in this industry has implemented and everyone has been confused by at least once. You do not POST the file. You ask for an upload slot, you get back a URL and an identifier, you PUT the bytes directly to that URL — usually to object storage, often to a completely different host with different auth — and then you come back and reference the identifier. It is a good design. It keeps large payloads off the API tier and it works well. And it is completely invisible in the contract, because each of the three steps is a perfectly ordinary operation and nothing anywhere says they are one thing.

A developer figures this out by reading the guide, or by failing and then reading the guide. An agent does not have that recovery path. It sees an operation called "attach evidence file to test," it has a file, it constructs the obvious request, and it fails — and the failure will not explain the sequence either, because error responses rarely do. Left alone it will retry, vary the payload, and eventually give up or do something worse.

Secureframe wrote the sequence down, in the contract, addressed to the thing that will need it.

I want to point at the phrase "the bytes are not sent here," because I think it shows real thought about the audience. That sentence exists to pre-empt a specific wrong action. Somebody sat down, imagined a model looking at this operation with a file in hand, predicted exactly what it would try, and wrote the correction first. That is a different discipline from writing API documentation. It is closer to writing a warning label.

There is also something fitting about this appearing in a compliance product. Secureframe's business is evidence and audit trails — proving that a control was in place and that the right artifact was collected. An agent that half-completes an evidence upload, leaving a staged file with no attachment, does not just fail; it produces a gap in a record whose entire purpose is not having gaps. The cost of a confused agent is higher here than in most APIs, and the care in the description tracks that.

What OpenAPI actually lacks here is worth naming precisely, because it is not a small omission. There is no way in an OpenAPI document to say "this operation must be preceded by that one." No way to say "the `id` in this request body is the `id` returned by that response." No way to express a workflow at all. The Arazzo specification exists to address exactly this and I have written about it favourably before — but Arazzo is a separate document that most companies have not adopted, and Secureframe needed the information to be in the place the agent was already looking.

So they put a workflow description in a prose field, because prose was the only tool available. That is not a workaround to be embarrassed about. It is evidence about what the format is missing, and it is more persuasive than an argument because it is deployed.

The asks.

**Register `x-mcp-description`.** One key. But in the entry, say what distinguishes it from `description` — that it is written for a machine consumer and may carry sequencing and workflow guidance rather than interface documentation. That distinction is the useful part. A tool that knows the difference between "the human explanation" and "the instruction for the caller" can do sensible things with both; a tool that thinks they are the same will render workflow instructions into developer docs where they read strangely, or drop them.

**Sponsor the OpenAPI Initiative.** Secureframe is a compliance company, so I will make the ask in the language of the business: the machine-readable contract has become part of your control surface. What an agent can and cannot do with your API is now determined partly by what your OpenAPI document says. That format's governance is a dependency of your product, and supporting the body that maintains it is the same kind of decision as supporting any other critical dependency.

**Get involved — and bring the sequencing problem to the Arazzo people specifically.** This is the concrete one. Secureframe has a real, shipped, three-step workflow that they had to describe in prose because there was no structured way to describe it where the reader would look. That is precisely the use case Arazzo was designed for, and the fact that Secureframe solved it a different way is the most useful possible feedback: either Arazzo is not discoverable enough, or it does not reach the surface where agents are actually reading. Both are fixable, and neither gets fixed if the people hitting the problem solve it locally and never mention it.

Tomorrow, MoEngage, and an extension that decides who is allowed to see a tool.
