---
published: true
layout: post
title: 'What A Program Needs In Order To Decide'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-a-program-needs-in-order-to-decide.png
date: 2026-10-21
author: Kin Lane
tags:
  - Autonomy
  - Context Engineering
  - Agents
  - APIs.io
  - Artifacts
  - APIs
---
Mike Amundsen published a short one yesterday, [Designing for Autonomy](https://mamund.substack.com/p/designing-for-autonomy), while he finishes his new book, *AI-Driven API Design*. It's two axioms he settled on while building GRAIL, his work on software that pursues goals without a human deciding what happens next. They are compact, and I have read them a dozen times since:

> **Designing Autonomous Systems** — Designing autonomous systems means making enough of an environment explicit for programs to situate themselves within it, use a goal to determine what is relevant, decide what to do next, recognize success, and determine when progress is no longer possible.

> **Programming for Autonomy** — Programming for autonomy means turning assumptions about an environment into explicit facts, relations, and capabilities so that programs can pursue goals within it without human intervention.

Then he says what changed for him: he moved from asking "what does the program need to do next?" to asking "what does the program need in order to decide what it will do next?"

That second question is the one I have been trying to answer with [APIs.io](https://apis.io/) without having the words for it. Most of what gets called context engineering right now is prompt text: instructions hand-written for one agent, in one application, describing an environment the agent has no other way to see. Mike's axioms describe the alternative. Make the environment explicit, once, as facts, relations and capabilities, and let any program read it.

## Five things a program has to be able to do

I read his first axiom as a checklist. An autonomous program has to be able to situate itself, find what is relevant to its goal, decide what to do next, recognize success, and recognize when it is stuck. Each of those maps to artifacts we already harvest, profile and score.

**Situate itself in the environment.** Before a program can do anything, it needs to know where it is: who this provider is, what it offers, how it relates to the rest of its market. That is the [provider profile](https://apis.io/providers/) and the APIs.json index behind it, the [well-known API catalog](https://apis.io/.well-known/api-catalog), and the [industries](https://apis.io/industries/) and [markets](https://apis.io/markets/) a provider sits in. A program that lands on a provider cold can learn its whole surface from one machine-readable index instead of a homepage.

**Use a goal to determine what is relevant.** A goal is usually stated in business terms, not API terms. Nobody asks to call `POST /v2/invoices`. They ask to get paid. That is what the [business capabilities](https://apis.io/capabilities/) and [use cases](https://apis.io/use-cases/) are for, mapping operations up to the outcomes a business cares about, and what the conversational phrasing in our [Overlays](https://apis.io/overlays/) is for, the questions people actually ask and the instructions they actually give, attached to the operations that answer them.

**Decide what to do next.** This is the part everyone focuses on, and it is the part with the most artifacts. The [OpenAPI](https://apis.io/apis/) contract says what can be called and with what. The [Arazzo workflows](https://apis.io/arazzos/) say what order things happen in and what passes between steps. [Agent skills](https://apis.io/agent-skills/) say how to operate a product, and the good ones say what the agent cannot do. MCP servers package the calls as tools.

**Recognize success.** A program can't recognize success if it doesn't know what success looks like. The [schemas](https://apis.io/schemas/) say what a valid result is shaped like, the [examples](https://apis.io/examples/) show what real ones look like, and the vocabularies say which values are allowed. A `200 OK` is not success. A response that matches the shape the goal required is.

**Determine when progress is no longer possible.** This is the clause I think most agent work skips, and it is the one that keeps an autonomous program from looping, retrying a payment, or burning a budget. [Rate limits](https://apis.io/rate-limits/) and [plans](https://apis.io/plans/) say where the ceiling is. Error semantics say what a failure means and whether to try again. And [agentic access](https://apis.io/agentic-access/) says, per operation, what it costs, whether it can be undone, and where a human has to approve it. That is the explicit statement of where autonomy stops.

## Facts, relations and capabilities

His second axiom names the three kinds of thing an environment has to be made of, and they line up with how the catalog is built.

**Facts** are the contracts and data shapes: OpenAPI, AsyncAPI, JSON Schema, [JSON-LD](https://apis.io/jsonld/), [vocabularies](https://apis.io/vocabularies/), the [standards](https://apis.io/standards/) a provider conforms to. They turn "I assume this endpoint takes a customer ID" into a fact a program can check.

**Relations** are how things connect: the integration graph between providers, the capability edges from operations to business outcomes, the corporate estates that say which providers belong to the same company, and the workflows that chain one API to another. Relations are what let a program reason across providers instead of inside one.

**Capabilities** are what can actually be done: the business capability model, the MCP tools, the skills, and the operations themselves, each with its access rules attached. And when the program is acting for someone, [Know Your Agent](https://apis.io/kya/) is the part of the environment that says who the program is and whether a provider trusts it.

## Explicit is the whole job

What I like about Mike's framing is that it puts the work in the right place. Autonomy isn't something you add to a model. It is something you make possible by writing the environment down. Every assumption a human used to carry in their head, which endpoint to call first, what a good result looks like, when to stop and ask, has to become an explicit fact, relation or capability, or the program will either guess or stall.

That is also why I think context engineering belongs to API providers and not only to the people building agents. The provider is the one who knows the facts. A provider who publishes a contract, a workflow, a schema, a rate limit and an access policy has done the context engineering for every agent that will ever call them. A provider who doesn't has left every agent builder to reverse-engineer it, differently, one prompt at a time.

The question Mike ended on is the one I would put to every API team right now. Not what should an agent do with your API, but what does an agent need from you in order to decide.
