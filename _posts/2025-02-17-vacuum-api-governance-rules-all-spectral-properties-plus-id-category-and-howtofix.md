---
published: true
layout: post
title: Vacuum API Governance Rules — All Spectral Properties Plus Id, category, and howToFix
tags:
  - Governance
  - Rules
  - Spectral
  - Vacuum
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-statue-supreme-court.jpg
---
When looking at the diff between the [JSON Schema for Spectral rules](https://github.com/stoplightio/spectral/blob/develop/packages/core/src/ruleset/meta/rule.schema.json) and the [JSON Schema for Vacuum rules](https://github.com/daveshanley/vacuum/blob/main/rulesets/schemas/rule.schema.json), you learn that you have all of the same capabilities available in a Spectral rule, but with Vacuum you get a few additional properties. [Vacuum is a top to bottom reworking of what an API governance linter can be](https://bit.ly/4b5iU1C), one that is backwards compatible with Spectral rules, while brining the performance needed for managing large and complex OpenAPIs at scale. Vacuum supports all of the base properties of a Spectral rule, ensuring backward capability between the two formats across these properties

- **description** - Providing a description of the rule for the humans to read.
- **documentationUrl** - Providing a link to the documentation of each rule.
- **recommended** - Helping manage the evolution and rollout across teams.
- **given** - The part of the document the rule should be applied when governing.
- **resolved** - JSON Schema references haven't been replaced with objects.
- **severity** - Used to differentiate between errors, warning, info, and hints.
- **message** - A message that will be displayed in the spectral lint output. 
- **tags** - Tags that are used to organize each of the rules into various groups.
- **formats** - The different types of schema in which a rule can be applied.
- **then** - Which function should be applied to the given part of the document.
- **type** - The type of rule being applied to the style or validation of the document.

Vacuum opens up additional opportunities by adding in three new properties that help stabilize the identification, organization, and application of rules against OpenAPI or any other artifact being governed.

- **howToFix** - Instructions on how to fix the document to comply with the rule.
- **id** -  Allow backwards compatibility, and the freedom to rename each rule.
- **category** - Enables more structure categorization for applying within tools.

The combination of tags and categories opens up more meaningful discovery and application of rules in services and tooling, but should also be evaluated against [the OpenAPI 3.2 tagging additions](https://apievangelist.com/2025/02/04/take-a-look-at-the-proposed-openapi-32-tag-object/). The howToFix provides another layer of guidance for anyone who encounters a rule in their work, and opens the door for other automated approaches to fixing individual document properties, or done in bulk, as with [APIMATIC in VSCode](https://marketplace.visualstudio.com/items?itemName=apimatic-developers.apimatic-for-vscode). A Spectral or Vacuum API governance rule represents a single configuration for a single aspect of enterprise API governance, and shining a spotlight on each approach to defining rules, each individual property, and guidance for teams will become increasingly essential for getting traction with enterprise API governance at scale.

