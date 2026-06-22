---
published: true
layout: post
title: The Spectrum of API Governance Rules
date: 2025-03-14T09:00:00.000Z
tags:
  - Spectral
  - Vacuum
  - Rules
  - Functions
  - JSON Schema
image: https://kinlane-images.s3.amazonaws.com/shared/bf-skinner-old-church-police-car.jpeg
---
When you say the phrase “API governance rule” it will mean different things to different people. An API governance rule may or may not be precise and executable, and even when it is, that can mean a mix of approaches. While the focus with API governance rules is always focused on governing APIs, it is also governing people, processes, and experiences. Grounding conversations around API governance using rules is important to help make sure everyone is on the same page, by establishing a common spectrum for what a rule is along the following common approaches.

- **Textual Overview** - A title and description of the patterns or anti-patterns being applied as part of API governance.
- **Default Function** - The common set of functions provided by Spectral or Vacuum rules as referenced in JSON or YAML.
- **JSON Schema** - While a default function, using JSON Schema stands out as a proven way to overlap rules and validation.
- **Custom Function** - The custom JavaScript functions that are added to deliver custom functionality needed for rules.

The majority of API governance rules you find in API design guides published by leading API producers are textual overview—a title and description that explains what the pattern is to follow as well as anti-pattern to avoid. Ideally rules have a machine-readable quality leveraging default functions, overlapping with validation using JSON Schema, or overlapping with API testing using more custom functions. It is a meaningful exercise to distill down API governance rules into something that is machine-readable and executable, and depending on you are working with validation or testing might make more sense to them when introducing to the spectrum of API governance rules.

