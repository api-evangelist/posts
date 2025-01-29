---
published: true
layout: post
title: Using OpenAPI to Configure Infrastructure Is API Governance
tags:
  - Governance
  - OpenAPI
  - Enforcement
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-docks-water-front-ships-containers.jpg
---
It is a tough sell to convince teams producing an API, as well as leadership for those teams, that API governance is an answer the chaos of noise that exists across API operations today. Applying Spectral or Vacuum rules to the design of your API during design, develop, or build time dominates the narrative for what API governance is today. Business leadership is always keen on baking those rules into CI/CD pipelines and calling that API governance enforcement, when the actual enforcement of API governance throughout API operation is actulaly when you use OpenAPI as the configuration artifact for key pieces of API operation infrastructure.

- **Documentation** - Your API document should always be generated using a complete and accurate OpenAPI.
- **Gateway** - Your API gateway should always be configured across development, staging, and production.
- **Security** - Your security tests, monitors, and scans should all be configured and informed using OpenAPI.
- **Testing** - All your API tests, no matter the scope should be generated and informed using your OpenAPI.
- **SDKs** - Integration code and software development kits should be generated from governed OpenAPIs.

It is great if your API governance rules are applied when you are designing your APIs in your favorite editor, and available to you via your IDE while developing, and yes, you should be thoughtful in how you enforce your API governance rules as part of your CI/CD pipelines. However, if a governed OpenAPI artifact is not actually used to configure your gateway, inform testing and security, and generate the code you need for integration, your API governance will always fall short. OpenAPI is a configuration for the API runtime, but one that has serious and real downstream impacts across all of the tooling and services you depend on, as well as helping ensure that all of the people involved are all actually on the same page.

