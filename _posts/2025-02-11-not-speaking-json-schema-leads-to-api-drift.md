---
published: true
layout: post
title: Not Speaking JSON Schema Leads to API Drift
tags:
  - JSON Schema
  - Drift
  - Validation
  - Pipelines
  - Governance
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-japanese-little-boats.jpeg
---
There are many aspects of API operations that API product managers probably shouldn’t be poking their head into. However, there are many aspects of API operations that would lead to better business outcomes if API product managers were brave, curious, and fearless in approaching them. One of these areas is learning the fundamentals of [JSON Schema](https://bit.ly/409FGR1). It is daunting, we get it. However you can edit JSON Schema using YAML, which removes one layer of complexity and potential confusion, and we’ll stop short of you having to use JSON Schema as part of the more technical aspects of API operations. But, we strongly believe that when API product managers learn to speak even the fundamentals of JSON Schema, it can lead to more participation and involvement throughout the delivery of APIs.

- **Define** - Speaking JSON Schema allows API product managers to throw in when defining schema used in API requests and responses.
- **Design** - Being able to understand JSON Schema allows API product managers to actively participate when applying schema during API design.
- **Develop** - Being JSON Schema aware means that API product managers can inquire and speak to developers using JSON Schema during development.
- **Build** - Being JSON Schema aware means that API product managers will have a voice in the enforcement of schema at build-time for APIs.
- **Gateway** - Being JSON Schema aware means that you can understand when to validate schema or not using JSON Schema in your gateway.
- **Clients** - Speaking JSON Schema allows API product managers to use common API clients to personally validate the responses of each API.
- **Tests** - Speaking JSON Schema allows API product managers to be involved in ensuring that original API requirements are being tested for.

Not speaking JSON Schema means your original API requirements are not machine-readable and do not carry through each of these stages of the API lifecycle. Not speaking JSON Schema leads to API drift. We aren’t asking API product managers to do work in the IDE during development, validate JSON Schema as part of CI/CD pipelines, or configure the API gateway to validate or not. We are just looking to highlight that a little more investment in JSON Schema literacy using YAML and being able to speak to and play a role in how this schema is used at each stage. This means that you are beginning to play an active role in defining your business requirements in a machine-readable way then shepherding it from design, playing a role in design, and making sure it is respected and properly enforced during development, pipeline, builds, and the gateway. Then you can actively ensure that tests pass using your API client of choice and ensure that API tests are aligned with your original business requirements.

Speaking JSON Schema is the solution to API drift you are looking for!

