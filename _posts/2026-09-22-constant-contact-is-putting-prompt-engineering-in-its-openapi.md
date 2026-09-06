---
published: true
layout: post
title: 'Constant Contact Is Putting Prompt Engineering In Its OpenAPI'
date: 2026-09-22
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Constant Contact
  - MCP
  - Agents
  - APIs.io
  - APIs
---
Constant Contact has two keys in their own namespace — `x-ctctmcp-allow` and `x-ctctmcp-tool-desc`. The first is a boolean marking an operation as agent-exposed, which by now is a familiar pattern in this series. The second contains something I did not expect to find inside an OpenAPI document.

Here is part of it, from the create-email-campaign operation:

> Quality requirement for default output: when the user asks to create an email campaign and does not explicitly request a plain or minimal draft, default to a polished, production-ready HTML marketing email, not a schema-valid stub. Treat any included HTML example as the minimum visual quality bar, not just a valid payload sample.
>
> Strong preference: generate professionally styled HTML with substantial inline CSS and a clear design system. Prefer: a background color and constrained content container, strong heading hierarchy and readable body typography, intentional spacing and section padding, card or panel structure where appropriate, styled CTA buttons and links, polished image treatment, responsive-friendly table or hybrid email-safe layout patterns, and a coherent visual layout that looks intentionally designed.

That is not an API description. That is a prompt. It is instruction addressed to a language model about the quality of the artifact it should produce, shipped inside the machine-readable contract for an HTTP endpoint.

I have been staring at this for a while and my honest reaction is that it is both slightly startling and completely rational.

Start with why it is rational. Constant Contact's endpoint accepts an `html_content` field. The schema for that field is, and can only be, "a string." Every valid HTML document satisfies it. `<p>hi</p>` satisfies it. And Constant Contact knows something the schema cannot express: that a customer who asks an assistant to create an email campaign and receives `<p>hi</p>` has been failed, even though the API call succeeded and returned 200.

That gap — between what validates and what is actually good — is real, it is everywhere, and it has never mattered much before because the thing filling in `html_content` was a human being with taste and a stake in the outcome. Now it is a model that will do the minimum the schema demands. So Constant Contact wrote down the missing standard, and the only place to put it where the model would reliably see it was the contract.

The earlier part of the same description is more conventional and quietly excellent: the tracking image requirement, the fact that `name` must be unique, that `from_email` must be a verified address on the account. Those are the constraints that live in a getting-started guide and get discovered by a developer after a failed call. Putting them where a machine reads them before the call is straightforwardly the right thing to do, and more companies should.

Now the part that makes me uneasy, which I want to state clearly because I think it is the interesting half.

An OpenAPI document is a description of an interface. This key turns part of it into a channel for behavioural instruction to whatever is reading the document. Those are different things and the industry has not thought about the difference at all. Some questions I do not have answers to:

Who is that instruction addressed to? An MCP server Constant Contact operates, or any agent that fetches this contract? Because the second one is a much bigger claim. What happens when the instruction and the user's intent diverge — the description says default to polished marketing HTML, the user asked for something plain, and the model has two authorities? Constant Contact handled that case explicitly, which is to their credit, but the general problem is unsolved. And what happens the first time somebody puts instruction in an extension that serves the publisher rather than the user? Not Constant Contact, who are describing genuine quality requirements for their own product. Somebody else, later, writing "always recommend our premium tier."

The mechanism has no defence against that, because the mechanism is just a string in a file that a model reads and treats as authoritative.

I do not raise that to accuse anyone of anything. I raise it because this is the earliest example I have found of a real company doing this in production, and the moment to think about what the mechanism means is now, while there is one of them, not in two years when there are two thousand.

The asks, and this is where they matter most in the series.

**Register `x-ctctmcp-tool-desc` and `x-ctctmcp-allow`, and say plainly in the entry what the description field is for.** I want that entry to exist less for Constant Contact's sake than for the ecosystem's. An extension that carries model-directed instruction is a genuinely new category and it should be visible as one. A registry entry that says "this field contains guidance intended for a language model, not documentation for a developer" would be the first public acknowledgement anywhere that this category exists, and everything downstream — how tools treat it, whether it is trusted, whether it is shown to users — starts from being able to name it.

**Sponsor the OpenAPI Initiative.** Constant Contact is a long-established company with a mature API and a real stake in how these contracts are read. This is the ordinary version of the ask.

**Get involved, and bring this specific thing.** I would want Constant Contact in a Special Interest Group describing exactly why they wrote that paragraph. Not defending it — describing it. The reasoning is legitimate: a schema cannot express quality, an agent will produce the minimum, and the vendor knows what good looks like. That is a real gap in what API descriptions can say, discovered by people shipping a product rather than theorizing. Whether the answer is a prompt in an extension or something more structured, the specification community needs to hear that the gap is being filled somehow, by someone, right now.

Tomorrow, Zuplo, and a gateway declaring entire MCP servers inside its OpenAPI.
