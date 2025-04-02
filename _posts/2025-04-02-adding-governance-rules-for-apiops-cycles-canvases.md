---
published: true
layout: post
title: Adding Governance Rules APIOps Cycles Canvases
date: 2025-04-02T09:00:00.000Z
tags:
  - Operations
  - APIOps
  - Business
  - APIs.json
  - Rules
  - Governance
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-docks-oakland-6.jpeg
---
[I was playing with the APIOps Cycles Canvas Creator](https://apievangelist.com/2025/04/02/the-apiops-cycles-canvas-creator/), and [published the ten possible canvases to the APIs.json for a demo product API](https://apievangelist.com/2025/04/02/adding-apiops-canveses-to-apis-json-index-for-api/). Next I want to lay the groundwork for governing the APIOPs Cycles against any API. In the same way we have API governance rules for the surface area of each API, using an OpenAPI to govern the technical details, we can produce API governance rules for the surface area of API operations, using an APIs.json to govern the business details.

<script src="https://gist.github.com/kinlane/49d68c0cee163ce3744c1c5a92d34fe6.js"></script>

Right now there are just [rules to check and see if there are any of the ten APIOps Cycles Canvases](https://github.com/api-evangelist/apiops-cycles-canvas/blob/main/rulesets/rules-apiops-cycles.yml). Once I begin to flesh out each canvas for the demo API I will get more granular about governing each step, and the quality of responses--it will come in layers. The goal is to [have a single index in the root of the repository](https://github.com/api-evangelist/apiops-cycles-canvas/blob/main/apis.yml) for each API which can be used for discovery, but also governing where things are with the APIOps Cycles. Governing the APIOps Cycles allows us to automate the governance of the business details for APIs alongside the technical details, and next I will work on further aligning the business and technical details across all artifacts produced during design and development.

Want to dive deeper into how to use the APIOps Cycles Canvas Creator? Book a meeting with one of us to discuss your specific challenges and opportunities: - [**Schedule a Strategic API Governance discussion**](https://lnkd.in/gmhPZTaW)

We'll help you find the right balance between centralization and federation for your organization's needs.