---
published: true
layout: post
title: Reducing the API Governance Cognitive Load By Categorizing Vacuum Rules
date: 2025-03-12T09:00:00.000Z
tags:
  - Rules
  - Domains
  - Categories
  - Tags
  - Lifecycle
image: https://kinlane-images.s3.amazonaws.com/shared/bf-skinner-building-art-construction.jpeg
---
It is a common mistake made by API governance teams once they learn the power of linting the OpenAPI contracts at design, develop, and build time within pipelines-—turning on all rules for all APIs across all teams. There is not a one size fits all set of API governance rules and by the time teams begin applying rules they are often significantly behind when it comes to standardization, and the first encounter tends to be a little overwhelming. [This is something you can see being worked out in the schema for Vacuum API governance rule](https://apievangelist.com/2025/02/17/vacuum-api-governance-rules-all-spectral-properties-plus-id-category-and-howtofix/), which has added a category property which can be used to group rules into more meaningful sets of API governance considering the following areas.

- **Documentation** - Only addressing the rules needed to complete API docs like summaries, descriptions and other properties.
- **Sandboxes** - Focusing on what is needed to support sandboxes and mocks with request and response examples for easy use.
- **Security** - Ensuring the shape of schema, scope of properties, and other elements required to properly secure our APIs.
- **Lifecycle** - Allowing rules to be dealt with in stages rather than requiring teams to get everything done with APIs all at once.
- **SDKs** - Making sure that all the technical bits are present so that code can be generated in a variety of programming languages.

These categories reflect the most common ways in which API governance rules can be better grouped to help reduce the cognitive load faced by teams producing APIs. [Vacuum rule categories](https://bit.ly/3WDnhej) help provide a quick and simple way to dynamically generate rulesets when designing, developing, and building APIs. API governance rule categories can be used to define any common or custom grouping you need as part of your API operations. Rule categories can be used alongside the tags of OpenAPI and APIs.json to help make API governance rules enforcement more aligned with domain, business, and team boundaries, but also with the experience of teams who are producing APIs, helping keep work occurring in meaningful chunks over time.

