---
published: true
layout: post
title: Establishing a Naming Convention for API Governance Rules
date: 2025-03-14T09:00:00.000Z
tags:
  - Spectral
  - Vacuum
  - Rules
  - Functions
  - JSON Schema
image: https://kinlane-images.s3.amazonaws.com/shared/eugenics-shipping-container-yard-police-boat.jpg
---
The first thing that comes to mind after evaluating the default rulesets for both [Spectral](https://apievangelist.com/2025/03/14/evaluating-the-default-spectral-api-governance-ruleset/) as well as [Vacuum](https://apievangelist.com/2025/03/14/evaluating-the-default-doctor-and-vacuum-api-governance-ruleset/), is that a naming convention for rules is needed. There is no consistency within each provider's approach, let alone across providers. I’ve noticed that each approach to standardizing API governance rules is more of a simple JSON or YAML configuration, than it is ever meant to be a standard—ironic, but representative of the state of API governance in general. To help drive conversation and fuel my own work, I’d like to propose we standardize the slugified naming of our API governance rules in the following ways.

- **Spec** - Begin with which schema specification a rule applies to.
- **Version** - Next let’s be explicit about which version of the spec.
- **Property** - What root and nested level property does the rule apply.
- **Semantics** - The meaning and intent behind the rule being applied.
- **Severity** - The severity of the rule being applied to each schema.

That feels like the basics. I am inclined to add a vendor dimension, but will stop short of that at this moment. I would like to understand if it is a vendor rule or a producer rule, and not sure how I’d like to see that expressed. I’d like to maintain some sort of provenance, but also be able to focus on the specifications and the semantics of what we are looking to accomplish with linting. [I also want to think about the approach](https://apievangelist.com/2025/03/14/the-spectrum-of-api-governance-rules/), meaning is it a default or custom function, as well as how JSON Schema validation comes into the picture. I will spend some more time thinking about the different approaches and see if that should be reflected in the naming of API governance rules, and how it will help in discovery and reuse.