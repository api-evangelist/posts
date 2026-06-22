---
published: true
layout: post
title: Evaluating the Default APIMATIC API Governance Rules
date: 2025-03-19T09:00:00.000Z
tags:
  - Governance
  - APIMATIC
  - Rules
  - OpenAPI
image: https://kinlane-images.s3.amazonaws.com/shared/copper-circuit-old-church-police-car.jpeg
---
I am continuing to document the API governance rule landscape, beginning with [Spectral](https://apievangelist.com/2025/03/14/evaluating-the-default-spectral-api-governance-ruleset/), but then adding on [Vacuum](https://apievangelist.com/2025/03/14/evaluating-the-default-doctor-and-vacuum-api-governance-ruleset/). Next I wanted to inventory what APIMATIC makes available--they have the most complete set of rules. SDK generation requires the most complete OpenAPI, so it makes sense that APIMATIC has invested in this level of detail. APIMATIC has their rules conveniently organized into the following groups.

 - OpenAPI Root Information [(OPENAPI3APIMATIC\_L001 - OPENAPI3APIMATIC\_L039)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-root-information-rules)
 - OpenAPI Info [(OPENAPI3APIMATIC\_L040 - OPENAPI3APIMATIC\_L059)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-info-rules)
 - OpenAPI Contact [(OPENAPI3APIMATIC\_L060 - OPENAPI3APIMATIC\_L079)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-contact-rules)
 - OpenAPI Licenses [(OPENAPI3APIMATIC\_L080 - OPENAPI3APIMATIC\_L099)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-licenses-rules)
 - OpenAPI Servers [(OPENAPI3APIMATIC\_L100 - OPENAPI3APIMATIC\_L149)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-servers-rules)
 - OpenAPI Components [(OPENAPI3APIMATIC\_L150 - OPENAPI3APIMATIC\_L179)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-components-rules)
 - OpenAPI Paths [(OPENAPI3APIMATIC\_L180 - OPENAPI3APIMATIC\_L199)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-paths-rules)
 - OpenAPI Path Items [(OPENAPI3APIMATIC\_L200 - OPENAPI3APIMATIC\_L229)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-path-items-rules)
 - OpenAPI Operations [(OPENAPI3APIMATIC\_L230 - OPENAPI3APIMATIC\_L299)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-operations-rules)
 - OpenAPI External Documentation [(OPENAPI3APIMATIC\_L300 - OPENAPI3APIMATIC\_L329)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-external-documentation-rules)
 - OpenAPI Parameters [(OPENAPI3APIMATIC\_L330 - OPENAPI3APIMATIC\_L369)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-parameters-rules)
 - OpenAPI Request Body [(OPENAPI3APIMATIC\_L370 - OPENAPI3APIMATIC\_L399)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-request-body-rules)
 - OpenAPI Media Types [(OPENAPI3APIMATIC\_L400 - OPENAPI3APIMATIC\_L429)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-media-types-rules)
 - OpenAPI Encoding [(OPENAPI3APIMATIC\_L430 - OPENAPI3APIMATIC\_L459)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-encoding-rules)
 - OpenAPI Responses [(OPENAPI3APIMATIC\_L460 - OPENAPI3APIMATIC\_L499)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-responses-rules)
 - OpenAPI Callbacks [(OPENAPI3APIMATIC\_L500 - OPENAPI3APIMATIC\_L529)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-callbacks-rules)
 - OpenAPI Links [(OPENAPI3APIMATIC\_L530 - OPENAPI3APIMATIC\_L569)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-links-rules)
 - OpenAPI Headers [(OPENAPI3APIMATIC\_L570 - OPENAPI3APIMATIC\_L599)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-headers-rules)
 - OpenAPI Tags [(OPENAPI3APIMATIC\_L600 - OPENAPI3APIMATIC\_L629)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-tags-rules)
 - OpenAPI References [(OPENAPI3APIMATIC\_L630 - OPENAPI3APIMATIC\_L659)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-references-rules)
 - OpenAPI Schemas [(OPENAPI3APIMATIC\_L660 - OPENAPI3APIMATIC\_L799)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-schemas-rules)
 - OpenAPI Discriminators [(OPENAPI3APIMATIC\_L800 - OPENAPI3APIMATIC\_L839)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-discriminators-rules)
 - OpenAPI XML [(OPENAPI3APIMATIC\_L840 - OPENAPI3APIMATIC\_L869)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-xml-rules)
 - OpenAPI Security Schemes [(OPENAPI3APIMATIC\_L870 - OPENAPI3APIMATIC\_L909)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-security-schemes-rules)
 - OpenAPI OAuth 2.0 Flows [(OPENAPI3APIMATIC\_L910 - OPENAPI3APIMATIC\_L929)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-oauth-2.0-flows-rules)
 - OpenAPI Security Requirements [(OPENAPI3APIMATIC\_L930 - OPENAPI3APIMATIC\_L949)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-security-requirements-rules)
 - OpenAPI Vendor Extensions [(OPENAPI3APIMATIC\_L950 - OPENAPI3APIMATIC\_L969)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#openapi-vendor-extensions-rules)
 - Miscellaneous [(OPENAPI3APIMATIC\_L970 - OPENAPI3APIMATIC\_L999)](https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/overview/#miscellaneous-rules)

 As I said, APIMATIC will be the high water mark for the rules work I am doing. I will be working to connect the dots between Spectral, Vacuum, and APIMATIC. While this is possible for many rules, there are many that are apples to oranges comparisons. Luckly APIMATIC has taken a very modular approach similar to what I am taking so it makes for a nice benchmark to standardize again. Next up is Redocly who has their own approach to API governance, while also supporting Spectral as a default, similar to what Vacuum is doing.

 Full Disclosure: APIMATIC is an API Evangelist sponsor, but this post is part of regularly scheduled work.