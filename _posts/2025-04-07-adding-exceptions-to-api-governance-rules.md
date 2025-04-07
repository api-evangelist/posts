---
published: true
layout: post
title: Adding Exceptions to API Governance Rules
date: 2025-04-07T09:00:00.000Z
tags:
  - Governance
  - Rules
  - Exceptions
  - Feedback Loops
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-supreme-court_36341562380_o.jpg
---
One important aspect of successfully using API governance rules as part of the automated delivery of APIs using CI/CD pipelines is the ability to ask for an exception to the rule. Every rule, especially those with a severity of “error” should have the ability to override as part of the design, development, and build of APIs. Sadly this isn’t something that is widely or consistently supported in CLI and other tooling that support Spectral or other formats. The ability to request an execution for each rule continues to build on each individual introducing a learning opportunity for teams producing APIs to learn about governance, but this is an opportunity for API governance stakeholders to learn from teams in the moment by injecting the following.

- **Error Override** - Being able to manually override any errors encountered during design, development, and via pipelines.
- **Feedback Loop** - Provide the ability to leave the reason why a rule was being overridden by the team producing an API.
- **Rules Review** - All rules that have received an exception should have feedback pulled up during the next governance meeting.
- **Domain Review** - All teams within domains that have asked for exception should have feedback reviewed during domain meeting.
- **Governance** - The feedback from teams producing APIs as they encounter rules should shape the road map for API governance.

API governance rules combined with a reference to the guidance and provenance behind each rule turns each encounter with API governance into a teachable moment for teams producing APIs. Enabling API governance rules exceptions with feedback turns each encounter with API governance into a teachable moment for stakeholders who are working to refine and evolve enterprise API governance. The feedback loop and reporting opportunity available on top of API governance rules being distributed to IDEs, design tooling, and CI/CD pipelines provides a huge opportunity for service and tooling makers, but also for enterprise leadership to make their business operations more observable and governable—helping ensure you can steer the ship in the right direction.