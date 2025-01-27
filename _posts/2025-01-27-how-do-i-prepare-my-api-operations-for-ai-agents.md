---
published: true
layout: post
title: How do I prepare my API Operations for AI Agents?
tags:
  - AI Agents
  - Artificial Intelligence
  - Artifacts
  - Operations
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/america-immigration_dumping-ground-an-me-store-front.jpeg
---
A common question we hear from folks trying to make an impact at scale across their API operations is how to I prepare my API operations for use by AI agents. Our recommendations for making your API operations accessible by AI agents is the same as preparing your APIs for consumption AI agents. You should produce, iterate, and mature the following artifacts which properly define the APIs available across the infrastructure like AWS, Azure, GitHub, Jira, and others, and make it available for training AI models that power AI agents, but also in real-time through engagement with AI agents.

- APIs.json Defining API Operations
- OpenAPI Defining Surface Area of APIs
- JSON Schema Defining Digital Objects
- JSON-LD Describing Your Semantics
- Overlays Describing Experience Layers
- Arrazzo Describing Common Workflows
- Spectral & Vacuum Rules for Governing

Take all of the artifacts you have assembled, which should all be indexed using the APIs.json artifact and published them to a Git repository to establish a source of truth. Keep the scope of your artifacts relevant to the domain, line of business, or team, as well as the tagging across these artifacts speaking to the bounded context you are looking to make available. The infrastructure interfaces can be used to train AI models, and made available for AI agents to use via Git and the APIs being the infrastructure you are already using across your API operations.

