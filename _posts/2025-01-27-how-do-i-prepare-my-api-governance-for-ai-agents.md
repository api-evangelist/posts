---
published: true
layout: post
title: How do I prepare my API Governance for AI Agents?
tags:
  - AI Agents
  - Artificial Intelligence
  - Artifacts
  - Governance
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-skyscraper-construction-crane-2.jpeg
---
A common question we hear from folks trying to scale, mature, and make their API governance be more effective is about how to prepare API governance to be used by AI agents. Our recommendations for making your API governance accessible by AI agents is the same as preparing your APIs and wider API operations for engagement by AI agents. You should be producing, iterating, and maturing the following artifacts which define the APIs available across the infrastructure you use to govern your APIs, as well as the policies, rules, and other artifacts being maintained that shape your API governance.

- APIs.json Defining API Operations
- OpenAPI Defining Surface Area of APIs
- JSON Schema Defining Digital Objects
- JSON-LD Describing Your Semantics
- Overlays Describing Experience Layers
- Arrazzo Describing Common Workflows
- Spectral & Vacuum Rules for Governing

Take all of the artifacts, which are indexed using APIs.json, and publish to a Git repository to establish your source of truth. Keep the scope of your artifacts relevant to the domain, line of business, or team you are working to govern. The infrastructure interfaces can be used to train AI models, and made available for AI agents to use via Git and the APIs being the infrastructure you are already using across your API operations, with additional YAML or JSON artifacts in each repo to act as a connective tissue, and enforcement via pipelines.


