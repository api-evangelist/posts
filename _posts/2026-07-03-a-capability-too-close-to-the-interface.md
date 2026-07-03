---
published: true
layout: post
title: "When a Capability Stays Too Close to the Interface"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-capability-too-close-to-the-interface.png
date: 2026-07-03T12:00:00.000Z
tags:
  - Capabilities
  - API Discovery
  - Governance
  - Product
  - OpenAPI
  - Stakeholders
  - APIs.json
---
I have been stewing on [Daniel Kocot's newsletter on capabilities](https://architecturalbytes.substack.com/p/capabilities-are-not-just-better) for a week or more now. It reflects the journey I have been on since leaving Bloomberg, and honestly it is why I left Postman to go to Bloomberg in the first place. I am trying to build bridges between the engineering details of enterprise operations and the business realities those details are supposed to serve. It is hard work, because the people on both sides of that gap are resistant to bridge building. They prefer a defensive stance, and defense prevents forward motion.

Daniel and I have been going back and forth for the better part of a year on a single question: what is a capability? We are both bridge builders. We both understand the realities on the ground in engineering *and* in product, and we are both willing to agree and disagree in public to find some forward motion on the subject. In his newsletter he captures the struggle better than I have managed to:

> Consumers still need to understand too much about internal systems before they can achieve a business outcome. Product teams still duplicate orchestration logic. AI agents and automation tools still struggle to identify what a platform can actually do.

Daniel, Marjukka, Claire, and I regularly hit friction in these conversations for exactly the reason Daniel names:

> The problem is that the word "capability" can remain too close to the interface.

As Daniel works to demonstrate the importance of capabilities to enterprise operations, he asks some genuinely great questions—the ones that actually dictate the business realities:

> Which capabilities are strategically important?
>
> Which capabilities are duplicated or underperforming?
>
> Which capabilities are distinctive enough to justify stronger API product management, better contracts, clearer lifecycle ownership, and deliberate developer experience?

All good questions. All questions that have to be answered on an ongoing basis, not once. They reflect the mission I am on—to help bring these answers to the table and facilitate the conversations that produce them.

## Where I gently disagree

Daniel then ends his post with something I agree with in sentiment but that, in practice, I watch shut down the very details required to answer the questions he just asked:

> The point is not to turn API catalogues into capability models. Nor is it to create a perfect Capability Map before improving APIs. The point is to connect API product work to the organisational abilities that matter. If a capability remains only an interface-level action, it may improve API design. If it is connected to enterprise capability modelling, it can also influence investment, ownership, governance, and product decisions.
>
> The next maturity step is not simply moving from APIs to capabilities. It is moving from isolated API products to capability-based product thinking.

I agree you cannot simply translate your API catalogs into capability models. The answers to Daniel's questions are not magically sitting in those catalogs waiting to be read out. But the *data that drives the discussion* among stakeholders is there—and it is required to have the discussion at all. I get shut down by product stakeholders the moment I bring the interface details and put them on the table. And I feel the frustration of the engineering folks who try to reach across that same line to engage business stakeholders and leadership, only to be told their details do not belong in the room.

## You are not capable of anything you cannot find the interface for

If invoicing is critical to the business, then be confident about where the invoicing API is. And be aware that you actually have six different invoicing APIs. I am always game to engage business stakeholders about these details—but the second I say "API," "OpenAPI," or "JSON Schema," the conversation gets shut down. I am not bringing the API to the conversation to make you read it. I am bringing the tags, the semantics, and the technical details to *inform* the conversation, not to *answer* it for you. And I am regularly told those details only matter in engineering, not in the business world.

I do not expect people in a capability discussion to understand OpenAPI, or to dive into operations. But they should be able to understand that we have both an SAP and a Stripe invoicing solution. They should be able to understand that when they say we need "social data" to inform the product, there are serious technical and business constraints on getting your hands on Reddit or X data—and that those exact nuances live in the OpenAPI contract. Your OpenAPI catalog represents what you are *capable* of. The omissions, duplications, gaps, and other details in that catalog dictate what you are *not* capable of.

## Capability discussions have to be multi-stakeholder

Capability-based product discussion MUST be multi-stakeholder, and every stakeholder should be bringing as much detail about their own interfaces to the table as they can. We do not need to dive into those details in the room. But each domain stakeholder should be present to translate them and add them into the mix. Engineering brings its interface details. Sales, security, compliance, legal, and product each bring theirs—and I guarantee every one of them has APIs too. I will not make you read an OpenAPI. But I will make you consider the service providers and the tags associated with them in those OpenAPIs.

The answers we are looking for do not exist at the interface level. Daniel is right about that. But the details that inform the human discussion absolutely do exist there. We have to get better at letting domain stakeholders bring those details to the table without being dismissed—because dismissing them is exactly what got us into this situation in the first place.
