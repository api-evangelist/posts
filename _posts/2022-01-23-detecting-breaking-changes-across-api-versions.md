---
published: true
layout: post
title: Detecting Breaking Changes Across API Versions
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-working-on-railroad-1.jpg
tags:
  - Breaking Changes
  - Governance
  - Versioning
  - Pipelines
---
API governance is still very much mired in the design phase of evolution, focused on the consistency in design of a single API. And while we all have a lot of work to onboard the enterprise masses when it comes to applying API design governance pragmatically, leading edge API service providers have begun shifting investment beyond just design, and focusing on more operational level concerns across many different APIs, or multiple versions of an API.  You can see this present in [the recent release of optic-ci from Optic, which allows you to detect breaking changes in the CI/CD pipeline using their open source approach to API governance](https://www.useoptic.com/blog/catch-breaking-changes-in-prs) that leans more in the direction of operations governance than design governance.

optic-ci plugs into your Github pipeline using Github actions, 

- **Versions** - Pulls the previous version o your API definition to compare alongside your current release.
- **Diff** - Conducts a semantic diff using both versions of your API definitions to understand what’s changed.
- **Breaking** - Looks specifically at what has changed and determines whether or not they are breaking.
- **Pass / Fail** - Passes or fails your pipeline run based upon whether or not there is a breaking change present.
- **Source** - Shows you the source of the breaking change, allowing you to know location within definition.

This CI/CD pipeline solution for detecting breaking changes in APIs goes beyond the testing of each API contract, or even the surface area of the API releasing and considers what has occurred across two separate versions of your API. Taking into consideration not just the surface area of your API but also beginning to see your APIs as something that is changing, allowing teams to embrace change in a standardized way. It is difficult for teams to get a handle on what is happening across many different APIs, but it becomes exponentially more difficult for teams to get a handle on the different rates of change happening across many APIs. Most teams are living in the moment, focused on whatever feature they are looking to release, and operational level governance approaches like this help make sure we are always considering the past as we keep marching forward.

I am spending a lot of time right now thinking about API governance and how we allow leadership to govern APIs across operations, but with an emphasis on enablement of teams at the lower levels of operations. I feel like more operational level governance like Optics approach goes beyond the listing of the design of a single API and helps us see more across operations. Helping us be more aware of the change that is inevitable across our operations, but done in a way that will minimize the disruption to the consumers who depend on our APIs. Resulting in us providing much more reliable APIs that teams can move forward more confidently, helping move the phrase breaking changes from something that is a negative, to something that effectively communicates intentional change across the APIs we produce.