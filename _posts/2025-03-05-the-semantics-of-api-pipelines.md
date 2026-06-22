---
published: true
layout: post
title: The Semantics of API Pipelines
date: 2025-03-05T09:00:00.000Z
tags:
  - Pipelines
  - CI/CD
  - Validation
  - Generation
  - Linting
  - OpenAPI
  - Testing
  - Bundling
  - Unbundling
  - Documentation
  - Mocking
  - Gateways
image: https://kinlane-images.s3.amazonaws.com/shared/purple-circuit-gears-pipes-plumbing.jpg
---
[After taking a fresh look at some of the tooling areas that I’d recommend running in API CI/CD pipelines](https://apievangelist.com/2025/03/05/what-api-tools-should-i-be-running-in-my-pipeline/), I wanted to draft an initial list of the different areas of consideration at the pipeline layer for delivering APIs. Based upon the tooling I’ve evaluated I’ve tried to identify what the semantics are for each of the capabilities offered that would matter to API governance. This is what I have so far, but will continue evolving based upon feedback.

- Linting (rules)
- Validation (schema)
- Testing (scripts)
- Transformation (format)
- Generation (schema)
- Generation (code)
- Bundling (schema)
- Unbundling (schema)
- Breaking Change (schema)
- Documentation (markdown, html)
- Mocking (code)
- Gateway (configuration)

There are some other areas I want to add, and I am still pondering the ways in which schemas are being generated. Oftentimes it is from a gateway, but other times it could be from annotations. So there is still more work to be done, and the list will likely change. I will take another pass over the tooling I’ve gathered up to see what other capabilities they have might matter to API governance, helping provide a common vocabulary for talking about what is happening in the pipeline for APIs.