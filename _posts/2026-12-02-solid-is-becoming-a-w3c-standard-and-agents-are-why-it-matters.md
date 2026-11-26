---
published: true
layout: post
title: 'Solid Is Becoming A W3C Standard, And Agents Are Why It Matters'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/solid-is-becoming-a-w3c-standard-and-agents-are-why-it-matters.png
date: 2026-12-02 17:00:00 +0000
author: Kin Lane
tags:
  - Standards
  - Agents
  - Linked Data
  - Decentralization
  - W3C
---
I've had [Solid](https://standards.apievangelist.com/store/solid-protocol/) in the API Evangelist standards catalog since October, filed with the HTTP file-system standards as prior art. I updated it this week, and the update changed how I think about it. Solid is no longer just a Community Group draft that never got adoption at scale. Its ideas are on the W3C standards track now, as the [Linked Web Storage Protocol](https://standards.apievangelist.com/store/linked-web-storage/), and the timing lines up with what agents need.

## What Solid is

Solid is Tim Berners-Lee's protocol for personal data stores, which it calls pods. A person's data lives as a tree of resources on a server they choose. Applications don't keep their own copy. They're granted access to parts of the tree, and the person can move the whole thing to another server.

The protocol is mostly a composition of existing pieces. Containers come from the [Linked Data Platform](https://standards.apievangelist.com/store/linked-data-platform/). Identity comes from WebID and Solid-OIDC. Access is controlled per resource. A notifications protocol lets a client subscribe to a resource or a container and hear when it changes. The [Solid Protocol](https://solidproject.org/TR/protocol) is still version 0.11.0, a Draft Community Group Report from May 2024, but the work hasn't stopped. In October the editor's draft was changed to make Web Access Control required for servers and Access Control Policy optional, which settles one of the long-running questions of how a server decides who can do what.

## The move to the standards track

The W3C chartered a Linked Web Storage Working Group to standardize a protocol between applications, identity providers and storage servers, so that each can be swapped without the others noticing. Its [Linked Web Storage Protocol 1.0](https://www.w3.org/TR/lws10-core/) became a First Public Working Draft on March 31, 2026. The [publication history](https://www.w3.org/standards/history/lws10-core/) shows 23 more Working Drafts since then, the latest on November 23. Four authentication suites followed as Working Drafts of their own: OpenID Connect, SAML 2.0, and two kinds of self-signed identity.

The specification says plainly where it comes from. Its acknowledgements say it "draws heavily from the Solid Protocol". Read it and the shape is familiar: resources in containers, discovered by following links from a root, created, read, updated, deleted and moved over HTTP, with a storage description up front so a client can find out what a server supports, and notifications for changes. Identity is kept outside the storage server, so the server doesn't have to be the one that knows who you are.

It's still a draft, and it says so. The group is chartered until January 8, 2027. But a draft republished almost two dozen times in eight months is a group doing the work, not one waiting for interest.

## Why agents change the picture

When I first catalogued Solid, I wrote that it had the right shape of delegation: here is a namespace, here is what you may do in it, and here is how you will hear when it changes. That's what agent platforms have been rebuilding all year as they let models work in files, folders and remote services. The Solid project now says it directly. Its own description says a person chooses which "people, applications, and AI agents" can read and edit the documents in their pod.

It also fits next to the other personal agent work I've been tracking. Recently I wrote about [Poppy](https://apievangelist.com/2026/11/25/poppy-arrived-through-the-platforms/), where a company tells a personal agent how it can act for one person, and about the [spectrum of agent onboarding standards](https://apievangelist.com/2026/11/20/the-spectrum-of-agent-onboarding-standards/), which covers how an agent gets an identity and proves the user said yes. Those standards are about the agent reaching out to a company. Solid and Linked Web Storage are about the other direction: the person's data stays in a place the person controls, and the agent is let in, scoped to what it needs, instead of each company holding its own copy.

## What I'd watch

Three things.

First, whether Linked Web Storage reaches Candidate Recommendation before its charter runs out in January. That's the difference between a well-written draft and something vendors are asked to implement.

Second, whether the agent platforms notice. The pieces they've been inventing, scoped access to a namespace, discovery of what a store supports, and subscriptions to changes, are already written down here. I'd rather see a working group pointed at this than watch it get rediscovered one primitive at a time.

Third, adoption. The Solid project lists organisations using it, including BBC Research & Development and Athumi, and Flanders has talked about giving every citizen a pod. But Solid has never had the platform moment Poppy just had through Shopify and Wix. A W3C standard won't create that on its own. It does make it easier for a platform to say yes.

Both entries are current in the [standards catalog](https://standards.apievangelist.com/), and I'll keep them current as the drafts move.
