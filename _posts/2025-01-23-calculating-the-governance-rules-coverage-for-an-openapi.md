---
published: true
layout: post
title: Calculating the Governance Rules Coverage for an OpenAPI
tags:
  - Governance
  - Rules
  - Coverage
  - OpenAPI
  - APIs.json
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-containers-stack.jpeg
---
There are a number of ways to evaluate the effectiveness of API governance. You see a lot of API scores, ratings, and grades. But, this approach places a heavy weight on the rules being applied having some sort of completeness, accuracy, and sufficient coverage--which is rarely evaluated. Like code coverage for testing, it would help to have some sort of notion of API contract coverage for API governance, which is something that will introduce other additional concerns, but would help further expand the API governance discussion. When using Spectral rules for listing OpenAPI or other artifacts as part of governance you get back the range of line numbers applied, which provide an opportunity to define OpenAPI rules coverage with the following dimensions.

- **Rule Range** - The line start and end for a governance rule being applied to an OpenAPI.
- **Rule Scope** - How many lines does a single rule cover, defining its precision or lack of.
- **OpenAPI Range** - The lines that are covered by a Spectral rule within any given OpenAPI.
- **Patterns or Anti-Patterns** - Does a rule speak to a pattern or an anti-pattern existing.
- **Severity** - Is the rule an error, warning, info, or hint, and how does that speak to coverage.
- **OpenAPI Coverage** - How many lines are being covered by rules being applied to it.

All of this paints an interesting rules coverage picture when applied to Spectral or Vacuum rules being applied to JSON Schema, OpenAPI, and APIs.json—effectively the schema, access, and operational layers. API Evangelist publishes the results of JSON Schema, OpenAPI, and APIs.json rule set reviews in GiThub alongside each artifact in each API repository. The next logical step is to aggregate the coverage of rules being used to execute each review. This is something that would help be more precise in the scoring, rating, and grading of API contracts, but also help evaluate the effectiveness and precision of rules—-if a rule covers too many lines it isn’t that precise. All of this is work in progress, but highlights where we are going when it comes to helping ensure API governance automation is as effective as intended, helping mature our API governance efforts.






