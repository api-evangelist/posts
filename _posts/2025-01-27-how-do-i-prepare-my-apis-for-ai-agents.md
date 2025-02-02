---
published: true
layout: post
title: How do I prepare my APIs for AI Agents?
tags:
  - AI Agents
  - Artificial Intelligence
  - Artifacts
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-skyscraper-construction-crane-2.jpeg
---
A common question we hear from folks trying to make an impact with APIs within their enterprise is how do I prepare my APIs for use by AI agents. While there are some nuances to accommodating AI agents, the advice regarding what to do when producing your APIs is pretty much the same as with desktop, web, mobile, device, and network applications. API Evangelist recommends producing, iterating, and maturing the following artifacts that properly define the digital resources and capabilities you wish to provide to AI agents, and the models that are powering them.

- APIs.json Defining API Operations
- OpenAPI Defining Surface Area of APIs
- JSON Schema Defining Digital Objects
- JSON-LD Describing Your Semantics
- Overlays Describing Experience Layers
- Arrazzo Describing Common Workflows
- Spectral & Vacuum Rules for Governing

Take all of your artifacts, which are indexed using the APIs.json artifact and publish to a Git repository to establish a source of truth and apply your Spectral and Vacuum rules as part of the CI/CD pipeline for your APIs. Keep the scope of your artifacts relevant to the domain, line of business, or team, as well as the tagging consistent with what you are offering. AI agents will be able to ingest your AI using Git plus your HTTP APIs and Webhooks, connecting the dots as they please across the digital resources and capabilities you are offering.

