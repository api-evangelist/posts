---
published: true
layout: post
title: Landscape Mapping Using OpenAPI and Kong
date: 2025-04-16T09:00:00.000Z
tags:
  - Governance
  - OpenAPI
  - Gateways
  - Landscape
image: https://kinlane-images.s3.amazonaws.com/shared/john-wayne-the-searchers-gatew-into-field.jpg
---
I am working with someone to map their API landscape, run various Spectral rules against, and produce a report and insights into the best approach to light up rules in pipelines based upon teams and domains. The best place to map the API landscape is at the gateway layer, and in this case Kong is in use, providing the following approaches to getting the OpenAPIs you need into a single GitHub repository so that it can be used as part of a wider landscape map survey and assessment. 

- [**Plugin Expose OpenAPI**](https://docs.konghq.com/hub/optum/kong-spec-expose/) - There is a plugin that will expose your API published to Kong as an OpenAPI, but it is not compatible with Konnect, and the [GitHub repository](https://github.com/Optum/kong-spec-expose/) doesn’t look like it has had any love for quite some time.
- [**Kong Config Dump**](https://docs.konghq.com/deck/gateway/dump/) - You could also do a configuration dump of Kong and then use what you need to generate a complete enough OpenAPI artifact, but I do not see any libraries out there that will do it.
- [**API Extraction**](https://docs.konghq.com/gateway/api/admin-ee/latest/#/) - You can also write a workflows script or collection to automate the pulling of routes, parameters, schema, and other details via the API on a recurring basis and submit pull requests against a repo of OpenAPI.

Those are the options I could find. Kong uses OpenAPI for their own docs, and there are solutions for generating Kong spec from OpenAPI, but not a lot of support the other way. Which is the standard VC playbook I have been seeing for years. I am intentionally publishing this quick dive into how you could map your API landscape using OpenAPI and Kong publicly, because people love to tell me I am wrong or missing some things. 

Personally, I would use the Kong API to get what you need, and make it something you run regularly and sync with the OpenAPI organizaiton or repository where you will be doing all your API governance. Crafting a first-class Lua plugin could also get you there, but I am biased towards an API-driven appriach in absence of there being a first-class feature supported by the gateway.
