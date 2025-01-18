---
published: true
layout: post
title: >-
  The Overlap Of GitHub Repository Properties, Policies, and Rules with
  APIs.json Powered API Operational Governance
tags:
  - GitHub
  - Policies
  - Rules
  - Governance
  - Repositories
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-gears-pipes-plumbing.jpg
---
After learning more about [GitHub repository properties, policies, and rules](https://github.blog/changelog/2024-12-04-enterprise-repository-properties-policies-and-rulesets-public-preview/), the overlap of the operational push of API governance occurring with [APIs.json](https://apisjson.org) becomes more tangible. In coming years, it will become much more urgent for enterprises to expand API governance beyond the surface area of individual APIs, and we should be following the lead of other governance and policy work like [OpenAPI Policy Agent (OPA)](https://www.openpolicyagent.org/) and of GitHub's to better inform how we should be structuring our own policy investments.

GitHub’s approach to governance is very repository centered, but one that overlaps with the source of truth, change management, and other areas of API governance that APIs.json and Spectral rules are expanding to cover. Having a repository, consistent README, as well as pipeline and other characteristics can make or break your API governance just as it will your software development lifecycle (SDLC). How much your software development lifecycle and your API development lifecycle overlap will vary from enterprise to enterprise, but there is always a lot to learn at this intersection.

Your API governance is heavily focused on OpenAPI and Spectral right now, and likely is already expanding to AsyncAPI, but you should also be thinking about how you can follow GitHub’s lead when it comes to repository and pipeline governance—even if you run on GitLab or Bitbucket. The concepts here are universal and your Git governance and API governance go hand in hand, and the future of linting will rapidly expand beyond just OpenAPI + Spectral, and you will need to support multiple linting engines with a mix of specification being governed by a common set of policies and rules.