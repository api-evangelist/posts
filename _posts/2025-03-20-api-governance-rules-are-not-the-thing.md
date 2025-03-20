---
published: true
layout: post
title: API Governance Rules Are Not the Thing
date: 2025-03-20T09:00:00.000Z
tags:
  - OpenAPI
  - Rules
  - Governance
  - Spectral
  - Vacuum
  - Redocly
  - APIMATIC
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/purple-circuit-statue-supreme-court.jpg
---
Like OpenAPI not being the thing, API governance rules like [Spectral](https://apievangelist.com/2025/03/14/evaluating-the-default-spectral-api-governance-ruleset/), [Vacuum](https://apievangelist.com/2025/03/14/evaluating-the-default-doctor-and-vacuum-api-governance-ruleset/), and [APIMATIC](https://apievangelist.com/2025/03/19/the-default-apimatic-rules/), and [Redocly](https://apievangelist.com/2025/03/20/default-redocly-rules/) tend to get all the attention when it comes to API governance. The rules matter as they can help automate API governance at design time in editors, at development time in our IDEs, but also at the build time in our CI/CD pipelines. However, as with all of the other artifacts used across operations, the rule itself isn’t the thing, but the collective work, discussion, and awareness generated in the creation of the rule, when you encounter the rule, and in the evolution or deprecation of rules. Here are some of the things enterprises develop while producing API governance rules that aren't always reflected in the YAML or JSON rule being focused upon.

- **OpenAPI Awareness** - Writing the JSON Path given property for a rule teaches you about OpenAPI.
- **Standardization** - Rules provide an opportunity to teach us about the standards they are enforcing.
- **Guidance** - Each rule potentially is linked to further guidance that will help educate teams in the moment.
- **Feedback** - Governance rules should have feedback loops and ways to get involved to evolve rules.
- **Grounding** - Ensuring governance has a rule helps ground efforts in tangible operational API artifacts.
- **Provenance** - Rules can link to the conversation and history behind each rule to get teams up to speed.

Those are just a few of the things that API governance rules provide which may or may not be evident when you are just looking at the rule or considering how to enforce the rule in a CI/CD pipeline. Rules are not the thing, it is the shared development and evolution of the rule, and the rules containing self-service linkages to all of that provenance and history. A rule provides an opportunity to get new team members up to speed without them having to read the entire style guide or have been present in previous API governance and policy meetings. API governance rules are much more than just testing or listing as technologists see them, and they help ground strategy, policies, and experiences in the actual inputs and outputs of the services and tools that make our API operations work or don’t work, while helping guide and build awareness amongst the humans doing the work on the ground floor.


