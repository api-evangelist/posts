---
published: true
layout: post
title: 'The Tools That Actually Execute Your Arazzo Workflows'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-tools-that-actually-execute-your-arazzo-workflows.png
date: 2026-08-14
author: Kin Lane
tags:
  - Arazzo
  - Workflows
  - OpenAPI
  - Tooling
  - Testing
  - Agents
  - Specification
---

I have spent a good chunk of this year authoring [Arazzo](https://spec.openapis.org/arazzo/latest.html) across my network — more than 5,000 workflow files spanning 543 API providers, plus another 255 that deliberately cross provider boundaries, because the interesting workflows almost never live inside one company's API. Every one of them validates. Every step points at a real `operationId` in a real OpenAPI document. And somewhere in the middle of that work I had to admit that spec-valid and runnable are two very different claims, and that I had only earned the first one.

So I went looking for what actually executes an Arazzo document. Not what lints it, not what draws a pretty graph of it, not what generates one from your OpenAPI. What takes the YAML, makes the HTTP calls in order, carries the outputs from step one into step three, evaluates the success criteria, and tells you what happened. That list is shorter than the ecosystem's enthusiasm would suggest, and the shape of it says something about where this specification actually is.

## The engines that run it

[Arazzo Runner](https://github.com/jentic/arazzo-engine) from Jentic is the closest thing we have to a reference runtime. It is a Python library and CLI, open source, and it is built to execute — authentication across API key, OAuth2, basic and bearer, dynamic server resolution, runtime expressions, conditional logic, error handling. It is also the one built with agents in mind rather than test suites, which matters, because an agent calling a described workflow is a different job than a pipeline asserting a workflow still passes. It is still labeled beta, and it is the project I would watch most closely.

[Redocly's Respect](https://redocly.com/docs/cli/commands/respect) is the most production-ready runner today, and it comes in the CLI you may already have installed. You point it at a document — `npx @redocly/cli@latest respect my.arazzo.yaml --input token=…` — and it sends real requests to a real server, evaluates your `successCriteria` against real responses, and hands back a pass or fail plus a HAR file. The framing is contract testing: the value is the verdict, not the side effects. If your goal is to prove that the workflow you published still describes reality, this is where I would start, and it is a single command away.

[Specmatic](https://docs.specmatic.io/supported_protocols/arazzo.html) takes the most interesting position of the three. It executes Arazzo for both testing and mocking, and it will span REST and events in a single document — OpenAPI and AsyncAPI stitched into one workflow. That is not a small thing. Most of the meaningful business flows I document go asynchronous halfway through, and every other runner makes me pretend they do not.

There is also [an independent JS runner](https://github.com/AdrianMachado/arazzo-runner) on npm if you want execution embedded in Node without pulling in a whole CLI. Four projects. That is the honest inventory of things that run Arazzo.

## Everything else only reads it

The rest of the ecosystem stops short of execution, and it is worth knowing where the line falls before you assume a tool will run your file. Around the edges there is [Bruno](https://www.usebruno.com), which added Arazzo support this year and gives you a GUI to walk a flow; Apidog, which imports and runs them; an [Arazzo Visualizer for VS Code](https://medium.com/@himethkbw/from-openapi-endpoints-to-runnable-api-workflows-introducing-arazzo-visualizer-for-vs-code-6a73b6d4b6c6) that renders the graph and makes individual steps runnable while you author; and [Speakeasy](https://www.speakeasy.com/openapi/arazzo), which uses Arazzo to generate SDK tests rather than executing the document itself. Postman has nothing native — its test sequences are the manual equivalent, and that is a choice worth noticing from the company with the most to gain from workflows being proprietary.

Below all of that sits a whole tier of linters, validators, and semantic parsers that will happily confirm your Arazzo document is well-formed. That is genuinely useful and I use it constantly, but it is a much weaker claim than it sounds like. Well-formed means the YAML is shaped correctly. It does not mean the operation you referenced still exists, that the output of step two is really the input step four expects, or that any of it returns what you promised. Only a run tells you that.

## What this means for the workflows you publish

Here is the part I have to own. My 5,000 workflows will not run out of the box against any of these, for two boring reasons. The per-provider files reference their OpenAPI with relative paths, which resolves on my disk and nowhere else. And none of them carry credentials, so a run is a 401 until somebody supplies auth. They are accurate descriptions. They are not yet executable artifacts, and I am not going to call them something they are not.

That gap is not really mine to close, though, and this is the thing I would put in front of every API provider reading this. I can describe your workflows from the outside. I cannot make them runnable, because runnable requires the two things only you have: an absolute, stable URL for the OpenAPI your workflow references, and a documented way to get a credential that a runner can pass in with `--input`. If you publish an Arazzo document, run it through Respect in your own CI before you ship it. That single command is the difference between a workflow that describes your API and a workflow that proves your API still works the way you said it does.

That difference is about to get expensive. When a human reads your workflow and it is subtly wrong, they figure it out and grumble. When an agent executes your workflow and it is subtly wrong, it fails at machine speed, retries, and bills you for the privilege. Execution engines are how a workflow stops being documentation and starts being a contract. There are four of them. Pick one and actually run your file.
