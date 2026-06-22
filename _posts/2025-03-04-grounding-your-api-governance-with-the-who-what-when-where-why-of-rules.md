---
published: true
layout: post
title: Grounding Your API Governance With the Who, What, When, Where, Why of Rules
date: 2025-03-04T09:00:00.000Z
tags:
  - Governance
  - Rules
  - Pipelines
  - Automation
  - Gateways
  - OpenAPI
image: https://kinlane-images.s3.amazonaws.com/shared/bf-skinner-time-square-tables.jpeg
---
One of the most difficult things about producing APIs is getting everyone doing the work on the same page. This is why you have seen API guidelines emerge that provide a checklist of the things that you should be doing as a product owner or engineer when it comes to defining, designing, developing, and deploying an API. The problem with API guidelines is that they are usually markdown or some other text format and they tend to jump around, with one piece of guidance focusing on status code and the next focused on documentation. Some guidelines are rules-driven, but most aren’t, allowing them to jump all around operations, but once you realize rules can actually help ground these conversations, you can achieve much more velocity by simply asking.

- **Who** - Is it up to the engineer, something the product owner can do, or do we need platform, security, or someone else.
- **What** - What does the rule apply to beginning with OpenAPI, JSON Schema, APIs.json, or other artifact used to define.
- **When** - At what stage of the API lifecycle does this have to happen so that teams can prioritize work effectively.
- **Where** - Where does this applied and enforced, design editors, IDE, pipelines, gateways, and anywhere work is done.
- **Why** - What is the plain business reason for why this rule should be applied as it pertains to enterprise objectives.

Each API governance is an opportunity to ground conversation, anchor your API design guidelines, and help guide teams in their work. Grounding a rate limit conversation as being in the OpenAPI, in the gateway, or via SDK generation are three very different times and places--providing a single example in a sea of possibilities. API governance rules provide the opportunity to take documents, spreadsheets, README, and other human-readable artifacts and ground them with what is happening on the floor of enterprise API operations. While you won’t be able to ground every aspect of API governance you can ensure a significant portion is more productive, effective, and sensibly automated via IDE, CLI, pipelines, and even the runtime via the API gateway.

