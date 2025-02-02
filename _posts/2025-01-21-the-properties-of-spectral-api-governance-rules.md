---
published: true
layout: post
title: The Properties of Spectral API Governance Rules
tags:
  - Properties
  - Governance
  - Spectral
  - Rules
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-statue-supreme-court.jpg
---
[Spectral is a command line tool for linting OpenAPI and other schema for common patterns and anti-patterns](https://standards.apievangelist.com/store/spectral/). Spectral is configured using what are called Spectral rules organized into Spectral rulesets, which can be defined as YAML, JSON. Each Spectral rule comes with a handful of properties which can be configured to achieve the desired outcomes with a rule, which should be explored and intimately understood in relation to the schema properties being linted, before you consider moving on to crafing custom Spectral rules.

- **given (required)** - The part of the document the rule should be applied to. Uses the JSONPath syntax.
- **then (required)** - Describes which function should be applied to the given part of the document. Can be used with a core function or custom function.
- **description (optional)** - A short description of the rule.
- **message (optional)** - A message that's displayed in the spectral lint output. Can be customized to use placeholder values that are evaluated at runtime, such as {{description}} or {{error}}.
- **severity (optional)** - The severity of the rule. Used to differentiate between rules that must be followed (error) and warnings or hints. Default value is warn.
- **formats (optional)** - The format that the rule should apply to. For example oas3 for any OpenAPI v3.x descriptions. Can be applied at the ruleset and/or rule level. See Formats for more details.
- **recommended (optional)** - Use recommended when extending a ruleset so users can enforce all rules (recommended set to false) or only recommended rules (recommended set to true). Recommended can be used to slowly roll out a ruleset across API landscapes with a lot of legacy APIs. Default value is true. See Recommended for more details.
- **resolved (optional)** - Used to apply a rule to a document that's not "resolved," where $ref JSON Schema references haven't been replaced with the objects they point to.

The [JSONPath syntax](https://standards.apievangelist.com/store/jsonpath) gives you access to the entire surface area of your OpenAPI or other artifact, and the rest of the properties here give you a robust set of controls for defining what is the pattern or anti-pattern you are looking for and how Spectral should respond during listing. Given and then give you the nuts and bolts of your rules, but how you communicate as part of your message and leverage severity to get the attention of teams who are producing and governing their APIs will be the nuance of the impact your Spectral rules will have across API operations.



