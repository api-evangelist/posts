---
published: true
layout: post
title: What Actually Goes Into Profiling Twilio for API Evangelist and APIs.io
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/profiling-twilio-every-artifact-behind-a-listing.png
date: 2026-07-14
author: Kin Lane
tags:
  - Discovery
  - APIs.json
  - OpenAPI
  - Arazzo
  - Communications
  - Twilio
---

[I recently walked through everything that goes into profiling Stripe](https://apievangelist.com/2026/07/13/profiling-stripe-every-artifact-behind-a-listing/), and the response told me people find the *inventory itself* useful — the full list is the argument for why profiling matters. So I want to do the same for Twilio. Twilio is the other API most people reach for when they teach what a well-run platform looks like, and it stresses a profile in different ways than Stripe does, because it is not one product — it is messaging, voice, video, verification, phone numbers, SIM cards, and email all under one roof. A profile has to hold all of that without turning to mush.

You can see both ends of it right now. The human-facing discovery page lives at [apis.io/twilio](https://apis.io/twilio), and the raw, forkable profile that feeds it lives in the [api-evangelist/twilio](https://github.com/api-evangelist/twilio) repository on GitHub. One is where you go to browse and understand Twilio. The other is where every artifact I am about to describe actually lives, versioned, in the open, ready to be pulled into your own tooling.

## The index that holds it all together

At the center is a single [apis.yml](https://github.com/api-evangelist/twilio/blob/main/apis.yml) file — the [APIs.json](https://apis.io) index that is the spine of the whole thing. It declares the provider, tags it (Messaging, SMS, Phone, Communications, Contact Center, Verification, Email, IoT), and enumerates **35 individual Twilio APIs** — Messaging, Voice, Video, Verify, Lookup, Conversations, Studio, TaskRouter, Sync, Notify, Numbers, Trust Hub, Super SIM, Wireless, Serverless, Flex, and the SendGrid Email API among them — each pointing at its own set of properties. Below the APIs, a `common` block lists everything that applies to Twilio as a whole.

Nobody reads apis.yml for pleasure. That is the point. It is the manifest a machine reads so it can find every other artifact without guessing.

## The contract layer — what the API is

The foundation is the interface contract, and for a platform this size it is a stack, not a file:

- **103 OpenAPI definitions.** Twilio is enormous, so rather than one monolithic spec it is split per product — one for Messaging, one for Voice, one for Verify, one for Video, and so on down the line. This is the machine-readable description of every path, parameter, and response across the platform.
- **An AsyncAPI definition** for Twilio's [webhooks](https://github.com/api-evangelist/twilio/blob/main/asyncapi/twilio-asyncapi.yml). So much of using Twilio is the events it pushes back to you — an inbound SMS, a call status, a completed verification — and those event surfaces deserve a contract just as much as the request/response paths do.
- **A GraphQL reference**, because profiling honestly means noting where the surface diverges from REST and what it would look like as a graph.

The contract tells you the shape of every door. The rest of the profile tells you which doors to walk through, in what order, and whether the building is safe.

## The "what can I actually accomplish" layer

An OpenAPI file lists operations. It does not tell you that sending a verified message means creating a Messaging Service, adding a number to it, and posting a message through it — or that adding a caller to a live conference is a two-call dance. That knowledge lives in its own artifacts:

- **20 Arazzo workflows.** [Arazzo](https://github.com/api-evangelist/twilio/tree/main/arazzo) is the OpenAPI Initiative's spec for describing multi-step API journeys, and I used it to write out real jobs people do with Twilio: find an in-progress conference and add a participant, create a call queue and confirm it, reply to a conversation and track delivery receipts, create a conversation and attach a scoped webhook. These are executable recipes, not blog prose.
- **40 Postman collections** and **16 additional collection sets**, so the moment you want to poke at an endpoint by hand, there is a runnable collection waiting.

If the contract answers "what is possible," this layer answers "what do I do."

## The data-shape layer

Communications objects are precise — a Message, a Call, a Verification, a Phone Number all have exact shapes — so the profile carries them directly:

- **6 JSON Schema files** for the core objects.
- **2 JSON Structure definitions**, a newer take on describing the same shapes.
- **A JSON-LD context**, so Twilio's fields can be linked to shared semantic meaning across providers instead of living as isolated strings.
- **5 worked request examples**, because a schema plus a real example beats either one alone.
- **A vocabulary** of the key terms across the Twilio platform, so "Messaging Service" and "Verification" and "TaskRouter Workspace" mean the same thing to everyone reading the profile.

## The governance layer

This is the part most profiles skip: it is not enough to describe an API, you have to assess it. Twilio's profile carries a **Spectral ruleset** that extends `spectral:oas` and encodes Twilio's own conventions, so every one of those 103 specs can be linted against the provider's actual house style rather than a generic checklist.

## The operations layer

You do not integrate a communications platform for a weekend; you live with it. So the profile speaks to the long haul with **rate limits** written down as data, **plans and pricing**, and a **FinOps artifact** describing Twilio's usage-based costs — because cost is an operational property of an API, not an afterthought.

## The security and trust layer

Before anyone routes messages, calls, or phone numbers through an API, they want to know it can be trusted:

- **Domain security** findings from actually probing Twilio's hosts, a **trust center** record capturing its certifications and compliance posture, and an **authentication** artifact describing exactly how you authenticate.

This layer is the difference between "trust me" and "here is the evidence."

## The agentic and human layers

Agents are becoming first-class consumers of APIs, so the profile carries an **MCP server** pointer for discovering Twilio's tools over the Model Context Protocol, and a **programmatic onboarding script** — a single-file, zero-dependency helper that lets an agent obtain credentials from the command line instead of clicking through a console. And because machines are not the only audience, I generated a **subway map** of the Twilio surface — turning 35 APIs into something you can take in at a glance — captured **screenshots** of the developer experience, and pulled a run of **91 of Twilio's own blog posts** so the profile reflects a living company, not a frozen snapshot.

## Why all of this matters

Any one of these artifacts is useful. Together they are something different: a machine-readable, forkable portrait of a provider that answers every question across the full life of an integration — what is it, what can I do with it, what shape is the data, is it well-governed, what does it cost, can I trust it, and can my agent use it without a human in the loop. APIs.io rolls all of that into a rating you can see live on the [apis.io/twilio](https://apis.io/twilio) page — a number computed from the presence and quality of the artifacts above, not a vibe.

And I will be honest about the other reason I picked Twilio right after Stripe: profiling it this closely showed me exactly where my *own* process still falls short — a whole tier of developer-experience artifacts I was capturing as bare links instead of real data. That is the subject of tomorrow's follow-up, where I take Twilio apart the same way I took Stripe apart and use what I find to evolve the profiling process itself. For today, the point stands: profiling is not "grab the OpenAPI." Browse the readable version at [apis.io/twilio](https://apis.io/twilio), fork the raw artifacts from [github.com/api-evangelist/twilio](https://github.com/api-evangelist/twilio), and if you operate an API, ask yourself how many of these artifacts you could hand someone today.
