---
published: true
layout: post
title: Standalone API Documentation Generated From APIs.json
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/standalone-api-documentation-generated-from-apis-json.png
date: 2026-07-09
author: Kin Lane
tags:
  - API Commons
  - Documentation
  - APIs.json
  - OpenAPI
  - Arazzo
  - Tools
---
This is the next stop in my daily walk through the [API Commons tools](https://apicommons.org/tools/), and it is one I have wanted for a long time: a way to hand somebody a single APIs.json and have it turn into real, readable documentation without standing up a service to make it happen. [API Documentation](https://documentation.apicommons.org) does exactly that. You give it an APIs.json, and it renders the whole thing as HTML you can read, share, or ship. No backend, no account, nothing leaves the browser.

The reason this matters more now than it would have a couple of years ago is that APIs.json grew up. It has always indexed the APIs an organization or a bundle depends on, but since version 0.19 it can carry the artifacts themselves inline as `data` properties — the full OpenAPI definitions, the Arazzo workflows, the prompts, and the rules can all live inside the index instead of being scattered behind links that rot. That changes what a documentation tool can do. When the artifacts travel with the index, one file is enough to describe an entire collection, and this tool is what reads that file and makes it legible to a human.

So what you actually get is every API in the index laid out with its link properties as cards — documentation, signup, pricing, authentication, all the things you go looking for. Any inline OpenAPI gets rendered as a full API reference, with servers, authentication, tag-grouped operations, parameters, request bodies, and response schemas. Any inline Arazzo gets rendered as step-by-step workflow timelines showing inputs, payloads, success criteria, and outputs. It also surfaces the common properties, the shared workflows, the prompts, the rules, the includes, the overlays, and the maintainers. And because the format has a history, it reads every specification version from 0.11 through 0.21, and it will quietly tell you when a document uses fields newer than the version it claims to be.

The part I keep coming back to is portability, because it is the whole point of API Commons for me. You can use it hosted — drop a file in, or point it at any APIs.json on the web with a `?url=` on the end. You can rename the built viewer to `index.html`, sit it next to your `apis.json`, and zip the folder up; the viewer finds its sibling and documents it. Or you can inline a document and bundle a single self-contained HTML file that works from disk, a gist, or an email attachment with no server anywhere in the picture. Documentation that you own, that outlives whatever tool made it, and that a person can open sixteen years from now.

That is the tool. It is small on purpose, it is [Apache-2.0](https://documentation.apicommons.org), and it treats your APIs.json as the source of truth rather than something to import into a platform. Go [try it](https://documentation.apicommons.org), and if you have an index sitting around from some earlier era, feed it in and see what it says — mine had opinions about my old 0.14 files, and they were fair.
