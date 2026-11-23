---
published: true
layout: post
title: 'I Did Not Find Anyone Publishing Overlay Schemas Yet'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-didnt-find-anyone-publishing-overlay-schemas-yet.png
date: 2026-11-24 21:00:00 +0000
author: Kin Lane
tags:
  - Overlays
  - OpenAPI
  - Validation
  - Governance
  - Specifications
---
I sat in on the OpenAPI Overlay 1.2.0 release call back in September and have already written about [what 1.2 brings](/2026/10/06/overlay-1-2-and-the-fourteen-jobs-we-already-use-it-for/) and about [the overlays sitting in the catalog](/2026/10/13/twenty-five-thousand-overlays-and-none-of-them-are-yours-yet/). This post is about a smaller moment from that call that I keep coming back to, because it says a lot about where overlays are as a practice: the validation story is still catching up.

## The moment on the call

About nineteen minutes in, the release script did something to the schemas folder that nobody was quite sure about. Vincent Biret wondered whether the deletion was actually a rename from `1.2-dev` to `1.2`. Lorna Mitchell, who was driving the release, said: "It's also possible we haven't caught up with how this new project expects the schemas stuff to work, but I'm not ready to publish new schemas out of Overlays anyway."

Vincent then confirmed it was not a rename, the schemas validation README and `schema.yaml` were both removed in that commit, and pointed out that OpenAPI does not keep schemas on main while Overlay had them for 1.1. Lorna added that "the schemas stuff is not well supported in OpenAPI, in fact, not really in either project." Mike Kistler, who approved the release, confirmed that what was being deleted was only an artifact of dev at that stage.

None of this is a criticism. It is honest people doing a release in public and saying what they know and do not know. But it is a useful signal.

## Why a schema matters for overlays

When OpenAPI gained a published JSON Schema, a whole layer of tooling could lean on it. Editors could validate as you typed. Linters could tell the difference between a spec that is wrong and a spec that just breaks their own rules. Pipelines could reject a broken document before it went anywhere.

Overlays are increasingly doing real work. They add descriptions, examples, extensions and security to specs that teams cannot or should not edit directly, and they show up in pipelines that publish documentation and generate SDKs. When an overlay is malformed, a target that matches nothing does not always fail loudly. It can just quietly do nothing, and you find out downstream when the docs are missing the thing you added.

A published, versioned schema for each Overlay release is the base layer that catches the structural mistakes. Without it, every tool is left to decide on its own what a valid overlay looks like.

## What I have not found

What I want to see is overlay schemas being published and used outside the spec repository: by tooling vendors, by API providers who ship overlays alongside their OpenAPI, or by governance rulesets. So far I did not find anyone publishing schemas for Overlay 1.2 yet, and I did not find much in the way of validation rules aimed at overlays themselves rather than at the OpenAPI they produce. That may change quickly, and if you know of work I missed, I want to hear about it.

## The opening for governance

This is where I think the governance community has an opening. Most of the rules we write in Spectral and Spotlight style rulesets target the OpenAPI document. Very few target the overlay. There is a set of checks that would be useful today, even before an official schema settles:

- Does the overlay declare which version of the Overlay specification it follows?
- Does every action have a target, and does that target actually match something in the document it extends?
- Are reusable actions in 1.2 defined once and referenced, rather than copy and pasted?
- Does `extends` point somewhere resolvable?

Some of those need the document being overlaid to answer, which is exactly why overlay validation is a little harder than validating a single file. But that is also why it is worth doing. It is the part of the pipeline where silent failures live.

## The takeaway

Overlay 1.2 gave us better ways to write overlays. The validation layer has not caught up, and the editors said so themselves on the release call. I did not find anyone publishing overlay schemas yet. That is not a problem to complain about, it is work waiting to be picked up, by the spec project when it is ready and by the rest of us in the rulesets we already maintain.
