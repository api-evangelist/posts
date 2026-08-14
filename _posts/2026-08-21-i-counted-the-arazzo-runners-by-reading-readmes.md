---
published: true
layout: post
title: 'I Counted the Arazzo Runners by Reading READMEs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-counted-the-arazzo-runners-by-reading-readmes.png
date: 2026-08-21
author: Kin Lane
tags:
  - Arazzo
  - Workflows
  - OpenAPI
  - Tooling
  - Open Source
  - Licensing
  - Specification
---

Last week I published an inventory of everything that actually executes an [Arazzo](https://spec.openapis.org/arazzo/latest.html) document, as opposed to everything that lints, renders, or generates one. I counted four. Somebody read it and sent me [usearazzo.com](https://usearazzo.com), which was two weeks old at the time and is a fifth. So I went back and did the count properly, and the way I got it wrong is more useful than the number.

[Arazzo Toolkit](https://github.com/usearazzo/arazzo-toolkit) is a TypeScript monorepo — a parser, a resolver, a validator, and a runner, behind one CLI. It is Apache-2.0, it supports Arazzo 1.0.0 and 1.0.1 against OpenAPI 2.0, 3.0 and 3.1 source descriptions, and the parser produces a [SpecLynx ApiDOM](https://github.com/speclynx/apidom) model, which means a document gets traversed as a structure instead of string-matched as text. The visible author is [Vladimír Gorej](https://github.com/char0n), who co-founded SpecLynx and has spent years inside the Swagger and OpenAPI toolchain. That lineage is why the parsing layer is the strongest part of the thing.

But here is the part I should have caught on my own. Arazzo Toolkit did not appear from nowhere. Its NOTICE file says it was founded on [Jentic Arazzo Tools](https://github.com/jentic/jentic-arazzo-tools), Apache-2.0, from commit `c696c9`, with modifications declared. I had Jentic Arazzo Tools in my own catalog already — filed as a parser. It is not a parser. Open the `packages` directory and there are five of them: parser, resolver, validator, **runner**, and a UI. It has had a runner since January, it is still being committed to, and I walked past it because I read the README and the README does not lead with that.

That is a small, embarrassing, entirely avoidable error, and it generalizes. A README is a marketing document. It says what the maintainer wants you to think the project is for, and it goes stale the moment the project outgrows it. The `packages` directory is an inventory. For a specification this young, where the whole question is whether a tool reads your document or runs it, the inventory is the only thing worth trusting. I have corrected the entry in the [tools catalog](https://tools.apievangelist.com/store/jentic-arazzo-tools/), and both projects now carry a `runs` role with `mutates` and `credentials` set to true, which is what an agent needs to know before it invokes either one.

The other thing worth pausing on is the fork itself, because it is done correctly. Named upstream, named commit, license preserved, modifications declared, attribution in a file rather than a footnote. Plenty of people would have quietly re-published a small Apache-2.0 project under a new brand and let the git history carry the explanation. This did not, and in an ecosystem where I spend a lot of time telling people that provenance is not the same thing as presence, I am going to say so when somebody gets it right. The same NOTICE also credits SmartBear's swagger-client, which it bundles for OpenAPI resolution. That is three generations of API tooling stacked in one dependency chain, all of it still open.

Now the caution, because it belongs in the same post. Arazzo Toolkit is pre-1.0 and says so itself. There is no npm release, no tag, and three stars on the repository. I have deliberately published no install coordinates for it, because there are none I can verify, and a guessed install command is worse than an absent one. This is the project to watch in this tier, not the project to pin a pipeline to. If you need something you can run in CI this quarter, the answer is still Redocly's Respect.

The count, then, is not four. It is closer to six, two of which are the same codebase at different stages of its life. That is a healthier picture than I painted last week, and it does not change the ask I made at the end of it. An execution tier only matters if there is something worth executing, and that still requires the two things only an API provider can supply — an absolute, stable URL for the OpenAPI your workflow references, and a documented way for a runner to get a credential. Five runners cannot fix a relative path. You can.
