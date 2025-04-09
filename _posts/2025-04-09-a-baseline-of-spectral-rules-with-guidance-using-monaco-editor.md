---
published: true
layout: post
title: A Baseline of Spectral Rules with Guidance Using Monaco Editor
date: 2025-04-09T09:00:00.000Z
tags:
  - Monaco Editor
  - OpenAPI
  - Spectral
  - Linting
  - Governance
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/green-circuit-nyc-57th-1.jpeg
---
I am a fan of <a href="https://bit.ly/44i19e0">Monaco Editor</a> when it comes to editing OpenAPI and other artifacts used across the API lifecycle. While I natively use VSCode locally to do most of my editing, when it comes to guidance, trainings, and workshops, <a href="https://utilities.apievangelist.com/openapi-linter/">I like having standalone editors that do one thing and does it as best as I can to solve a specific set of problems</a>. 

First I make sure my OpenAPI linter is natively YAML, so I can widen my audience. Next I want to build upon my approach to using Spectral rules, providing positive and negative rules for each piece of API governance. This means that you will encounter errors, but once fixed you will also see the positive reference which turns each piece of API governance into a teachable moment, linking to the line in the OpenAPI it applies, but also the governance to learn more about the pattern, and even the Spectral rule triggering the message.

<a href="https://utilities.apievangelist.com/openapi-linter/"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-linter.png" style="width: 100%;"></a>

<a href="https://rules.apievangelist.com/openapi/">I have baked in what I consider to be a baseline for Spectral rules governing a simple OpenAPI</a> -- info, paths, operations, parameters, request bodies, responses, schema, and tags. You can view all of the rules I use, and happy to construct custom rulesets for you--just let me know what you are needing. My goal with this OpenAPI linter is to demonstrate the importance of API goverance accompanied with guidance, as well as feedback loops on rules--all using Monaco editor to encourage enterprises to invest in their API governance capacity.

Next I will be adding more examples and richness to each of the guidance and make during there are no 404s on some of them. Then I will add more rules and more template OpenAPIs to choose from. I mostly use this OpenAPI linter as part of workshops and demo but happy to make public and let others use. I am not offering this OpenAPI linter as a product, but I encourage you to use Monaco and Spectral to customize your own approach. Making it yours, alongside the templates and rules, as well as the guidance is something you should be building yourself, tailoring API governance to fit what your enterprise, it’s different domains, and teams will need to do wha they do best.