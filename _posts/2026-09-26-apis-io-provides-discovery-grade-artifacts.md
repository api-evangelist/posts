---
published: true
layout: post
title: 'APIs.io Provides Discovery-Grade Artifacts'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-io-provides-discovery-grade-artifacts.png
date: 2026-09-26
author: Kin Lane
tags:
  - Discovery
  - APIs.io
  - OpenAPI
  - Artifacts
  - API Discovery
  - Kin Score
  - Strategy
  - APIs
---
One of the blockers keeping me from getting to the next level with [APIs.io](https://apis.io) and my API Evangelist profiling work was me being pedantic about the precision of every OpenAPI and supporting artifact I gathered. I wanted them complete, or as complete as I could possibly make them. Eventually I realized that completeness is impossible even in the best of situations — and more importantly, that it was never my responsibility. My responsibility is to make these APIs and their supporting artifacts as discoverable as possible. Once I let go of the first thing, the second thing got dramatically better.

Ensuring that every OpenAPI in the catalog is "complete" is a Sisyphean endeavor. I do not want to use all of these APIs. The responsibility for making sure my readers can actually use any given API sits with the API producer, not with me. My goal is to make APIs discoverable, and to reduce the friction involved in finding, comparing, and onboarding with them. That is a different job than making them run. In that respect, APIs.io provides **discovery-grade artifacts** — artifacts good enough to help API producers understand how discoverable their APIs really are, and good enough to help API consumers find, distinguish between, and begin onboarding with them.

If you are where I used to be — believing every artifact has to be complete and one hundred percent usable at runtime — you are missing what this is about. It is a common refrain I hear from engineers, and it is one that does not grapple with the scope, complexity, and constantly shifting nature of the API space. My goal is not to make it all work. My goal is to understand the market at scale in any given moment. When you stop and consider the number of APIs available out there and the pace of change in the market today, you start to grasp how hard even discovery is, let alone onboarding and reliable, sustained usage. A document that is ninety-five percent right still does its job when the job is *find me the APIs that do this*. A catalog that stalls waiting on perfection does no job at all.

That is the APIs.io mission. API Evangelist comes at it from another angle. I do want to improve the quality of the contracts I index — I care about it more than most — but improving them is not my job to do on the producer's behalf. This is exactly why I have put my energy into the accuracy and visibility of the [Kin Score](https://apievangelist.com/2026/08/18/the-six-quality-bands-of-the-api-evangelist-rating-system/) and the [agent readiness](https://apievangelist.com/2026/08/30/inside-the-agent-readiness-score/) layer that rides alongside it: to motivate and incentivize API producers to do the work I used to think I could do for them. I have [rebuilt someone's OpenAPI from nine web pages](https://apievangelist.com/2026/07/30/i-rebuilt-their-openapi-from-nine-web-pages-just-publish-it/) before, and the lesson I took from it was not *do this more often*. It was *name the gap and hand it back*.

There is a discipline in this that I think gets lost. Discovery-grade does not mean sloppy, and it does not mean I stop caring. I still fix the defects my own pipeline introduces, because those compound across every weekly pass and quietly corrupt the archive. What I do not do anymore is hand-patch the defects that belong to the producer — the dangling references, the vendor junk keys, the response codes that do not match the specification. I carry those faithfully and report them as findings, because a patched artifact hides the signal, and the signal is the product. The gap between what a provider says they publish and what they actually publish is one of the most useful things I have to offer, and I destroy it the moment I quietly clean it up for them.

Honestly, this is the first time I feel like I have had my API Evangelist work about ninety percent dialed in since I started doing this back in 2010. Combined with the recent reboot of APIs.io, I think there is a real opportunity here to stabilize the API space — not by making every contract perfect, but by making the whole landscape legible, comparable, and honestly measured, week over week. Perfection was never the deliverable. Discovery is.
