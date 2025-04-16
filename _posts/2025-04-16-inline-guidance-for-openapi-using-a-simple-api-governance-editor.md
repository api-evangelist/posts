---
published: true
layout: post
title: Inline Guidance for OpenAPI Using a Simple API Governance Editor
date: 2025-04-16T09:00:00.000Z
tags:
  - Governance
  - OpenAPI
  - JSON Schema
  - Intellisense
  - Autocomplete
  - Hints
  - Spectral
  - Editor
  - Support
  - Descriptions
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/leaflets-of-the-russian-revolution-hollywood-sign-with-tower.jpg
---
One of the reasons [I recommend my customers use a simple OpenAPI governance editor](https://apievangelist.com/2025/04/16/a-simple-api-governance-editor-for-openapi-and-spectral/) created by the [Italian government](https://github.com/italia/api-oas-checker/blob/master/README.en.md) is that it provides an opportunity to customize and make the linting of OpenAPI using Spectral rules something seamless with enterprise operations. The approach to building an OpenAPI linter using Monaco Editor and React then using Spectral to lint the OpenAPI using rules provides the following ways to provide inline guidance for teams who are looking to standardize their APIs.

- **Descriptions**  - Each Spectral rule has a description property that you can use to educate teams producing APIs on why a rule matters, providing provenance behind the rule, and even add links to repos, Confluence, portals that provide more background and resources for each individual rule encountered as part of governance—-each rule has a little info button that pops up with the description property of the rule showing.
- **Direct Support**  - In the bottom corner of the popup for each rule description there is a little email API Evangelist link, but in the Italian government build it has a link to a Slack channel, and could be any link to direct support or guidance.
- **Intellisense** - The [Monaco Editor](https://bit.ly/44i19e0) for the [simple API governance editor](https://starter.apievangelist.com/) has a JSON Schema for the OpenAPI behind it which you can added examples and hints that will render when editing any OpenAPI—providing another opportunity to help teams do the right thing as they encounter governance while developing their APIs.

Providing inline guidance for API governance rules translates each encounter with teams into a teachable moment. You can literally provide a link to the style guide from each rule, addressing the fact that not everyone will read the style guide ahead of time. These are all capabilities that could easily be productized, but I think this simple OpenAPI governance editor provides an opportunity for enterprises to fork and get their hands dirty playing with the dance between OpenAPI, JSON Schema, and Spectral rules using a simple React application they can download and bring internally, and runny statically via GitHub pages.