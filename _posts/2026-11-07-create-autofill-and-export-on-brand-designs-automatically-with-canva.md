---
published: true
layout: post
title: 'Create, Autofill And Export On-Brand Designs Automatically With Canva'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/create-autofill-and-export-on-brand-designs-automatically-with-canva.png
date: 2026-11-07 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Canva
  - Design & Creative Editing
  - Generative Media
  - Design
  - Marketing
---

You have a brand template in Canva and a spreadsheet of names, prices or event dates, and you need a finished graphic for every row: a social post per product, a certificate per attendee, a price card per store. Doing that by hand means opening the template, typing, exporting, and repeating until the afternoon is gone. [Canva](https://apis.io/providers/canva/) can do the whole run through an API, which is a way for one piece of software to ask another to do work, so a script, your marketing tool or an AI assistant can fill the template, export the files and hand them back to you.

## What Canva does

[Canva](https://canva.dev) is the visual design platform most people know from its editor, and Canva says that editor is used by hundreds of millions of people. For a business the interesting part is what sits behind it. Canva describes four developer surfaces: the Connect APIs, a REST API for creating, autofilling, exporting, resizing, importing and commenting on designs from another application; the Apps SDK, for apps that run inside the Canva editor; SCIM and Audit Logs APIs for enterprise identity and compliance; and a partner-gated Print API. Canva also publishes its own OpenAPI description, a dated changelog, per-product llms.txt indexes, a hosted MCP server and a public set of Agent Skills, which is a long way of saying it has done the work to make itself callable by both software and AI assistants.

On APIs.io we break the Connect surface into its parts: [Designs](https://apis.io/apis/canva/canva-designs-api/), [Autofills](https://apis.io/apis/canva/canva-autofills-api/), [Brand Templates](https://apis.io/apis/canva/canva-brand-templates-api/), [Exports](https://apis.io/apis/canva/canva-exports-api/), [Resizes](https://apis.io/apis/canva/canva-resizes-api/), [Assets](https://apis.io/apis/canva/canva-assets-api/), [Folders](https://apis.io/apis/canva/canva-folders-api/) and [Comments](https://apis.io/apis/canva/canva-comments-api/), alongside the [Apps SDK](https://apis.io/apis/canva/canva-apps-sdk/), the [Button API](https://apis.io/apis/canva/canva-button-api/) for embedding the editor in your own site, and the [Print Partnerships API](https://apis.io/apis/canva/canva-print-partnerships-api/).

## What you can get done

We map Canva's operations to two business capabilities.

### [Design & Creative Editing](https://apis.io/capabilities/design-creative-editing/)

This is the heart of it: 22 operations for listing, creating and reading designs, walking through their pages, finding out which export formats a design supports, and reading the brand templates and the data fields they expect. An autofill field is a placeholder in a template that a value can be dropped into, and it is what turns one template into a hundred finished designs without anyone opening the editor.

- `GET /v1/designs` lists or searches your designs, including the ones shared with you rather than created by you.
- `POST /v1/designs` creates a new design: a blank canvas, a presentation or a custom size.
- `GET /v1/designs/{designId}` returns a design's details, including its edit and view links, its owner and a thumbnail.
- `GET /v1/designs/{designId}/export-formats` tells you which file formats, such as PDF, PNG, JPG, PPTX or MP4, a design can be exported to.
- `GET /brand-templates` lists the brand templates in your account, and can be narrowed to only those that support autofill.
- `GET /v1/designs/{designId}/dataset` shows the autofill fields a design contains and what type of value each one takes.

### [Generative Media](https://apis.io/capabilities/generative-media/)

Canva also exposes image generation as a job. You describe the picture you want and the aspect ratio, and you come back for the result when it is ready. Canva meters this with credits.

- `POST /v1/image-generations` starts an image generation job from a text prompt.
- `GET /v1/image-generations/{jobId}` checks on that job and returns the generated image once it is finished.

## Ask for it in plain language

We have written 25 conversational phrasing overlays for Canva. An overlay is a layer we add on top of the API description that pairs each operation with the kinds of questions a person might ask, so an AI assistant knows which call answers which question. These are the kinds of things it maps:

- How do I list all the designs in my Canva projects?
- How do I create a blank presentation or custom-size design?
- Which file formats can I export this design to?
- What brand templates can I use in my Canva account?
- Can I filter brand templates to only those that support autofill?
- Does my design contain autofill data fields, and what types do they take?

You can see one of them on the [Asset API phrasing overlay](https://apis.io/overlays/canva/canva-asset-api-phrasing-overlay/).

## Getting started

Canva is a freemium, hosted service with self-serve signup: you call Canva's endpoint, and you can create a developer account and start without talking to sales. The [Canva developer documentation](https://www.canva.dev/docs/apps/) covers the Apps SDK and the [design editing](https://www.canva.dev/docs/apps/design-editing/) guide shows what an app can do inside the editor, while the [Connect API authentication](https://www.canva.dev/docs/connect/authentication/) guide is the place to start if you want to drive designs from your own systems. On APIs.io you can browse the [Canva profile](https://apis.io/providers/canva/), the [Designs API](https://apis.io/apis/canva/canva-designs-api/), the [Autofills API](https://apis.io/apis/canva/canva-autofills-api/), the [Brand Templates API](https://apis.io/apis/canva/canva-brand-templates-api/) and the [Exports API](https://apis.io/apis/canva/canva-exports-api/). Pick the one template your team fills in most often, confirm it carries autofill fields with the dataset call above, and have the next batch made for you.
