---
published: true
layout: post
title: VCs Screwed Themselves by Restricting Interoperability
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/vcs-screwed-themselves-by-restricting-interoperability.png
date: 2026-07-13
author: Kin Lane
tags:
  - Interoperability
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - Business
  - Investment
  - Standards
---
It is a common tactic in the VC playbook of the startups I've worked with over the years: limit the interoperability of the platforms they invest in. You can import OpenAPI, but you can't export OpenAPI. You wouldn't want people enriching the spec, exporting it, and taking it somewhere else--you'd be giving value away. I understand why it makes sense from a selfish investment perspective, but in practice you are lowering the ceiling on how high that investment can actually go.

The startup game, as it is usually played, is about capturing as much value as you can while giving as little as possible away to anyone else. I've regularly watched investors demonstrate how little they understand about open source specifications as they restrict the outbound flow of [OpenAPI](https://apievangelist.com/), AsyncAPI, JSON Schema, and other formats. It is also why you will hear so many of them push their startups to invent their own specification formats--so they can control the governance, and the flow of information, outside of the platforms they own. Both moves come from the same instinct: treat the specification as inventory to be hoarded rather than as a surface for exchange.

This playbook makes a lot of sense when you approach things from a removed business and engineering perspective, but it quietly caps the potential of the startups it is supposed to protect. When you seal the exits, you also seal the entrances. Interoperability is not a one-way faucet you can leave open for imports and shut off for exports--it is a circulatory system. The same open formats that would let a spec walk out the door are the ones that let an enriched spec walk back in. Restrict the outbound flow and you don't just stop giving value away; you cut yourself off from the value your partners, your competitors, and the broader ecosystem would have added to your artifacts and handed back to you for free.

That is the part most people never model out. A platform that lets OpenAPI, AsyncAPI, and JSON Schema move freely in both directions turns every other tool in the market into an unpaid contributor. Someone else's linter catches an error in your spec. Someone else's design tool adds examples, better descriptions, and security schemes. Someone else's gateway generates the traffic patterns and the mocks. Someone else's SDK generator, documentation renderer, and testing suite all touch the same artifact and leave it richer than they found it. Every one of those interactions is a potential flywheel--value produced on another platform, on top of the value you produced, flowing back into yours. Interoperability is how you get the rest of the market working for you without hiring a single one of them.

The proprietary-format move is the same mistake wearing a strategy costume, and it is the more expensive of the two. When you invent your own specification so you can control the governance, you are not building a moat--you are digging a well and locking yourself at the bottom of it. Open specifications come with an entire economy already attached: parsers, validators, editors, registries, CI/CD integrations, SDK generators, and a workforce of practitioners who already know how to use them. A custom format inherits none of that. You now have to build every one of those tools yourself, teach the market a vocabulary it has no reason to learn, and absorb the maintenance cost forever. You have traded network effects for control, and control over a graph of one node is worth nothing.

None of this is complicated, but it does require you to think through the value your platform generates in relation to the market rather than in isolation. That is the step almost nobody takes. It is easier to move fast, capture what is in front of you, and treat every export as a leak. So most investors and the founders they coach optimize for the value they can see leaving and stay blind to the far larger value they are preventing from ever arriving. They win the argument about the faucet and lose the argument about the circulatory system.

The startups that will actually compound are the ones that flip the default--that treat open, bidirectional interoperability as the moat instead of the leak. Be the platform every spec passes through. Be the best place to enrich an OpenAPI definition, the easiest place to bring an AsyncAPI contract to life, the most useful home for a JSON Schema. Let the artifacts flow out, and make your platform the gravity well they flow back into once the rest of the market has made them more valuable. You don't capture the most value by hoarding it. You capture the most value by being the center of where it moves. The VCs who couldn't see past the faucet screwed their own investments--and handed that center to whoever was willing to leave the doors open.
