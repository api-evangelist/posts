---
published: true
layout: post
title: Standardizing OpenAPI Extensions to Override Spectral Rules
date: 2025-05-27T09:00:00.000Z
tags:
  - Rules
  - Governance
  - Extensions
  - OpenAPI
  - Sandboxes
  - Servers
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-rail-crossing.jpg
---
While continuing to process the Spectral rules in use by API producers as part of their efforts to govern their API operations I am always looking for interesting and useful patterns being applied by API producers, and I recently came across the use of standardized OpenAPI extensions to override governance rules in specific circumstances. This particular use case was about enforcing encryption on server URLs, but it also provides a way to override the need for encryption using x-sandbox OpenAPI extension.

```
"servers-use-https": {
  "x-tags": [
    "security"
  ],
  "description": "Using encryption on all servers unless it has a sandbox extension applied as part of the server object in the OpenAPI artifact.",
  "message": "Non-sandbox url  {{value}} {{error}}. Add `x-sandbox: true` to skip this check on a specific server.",
  "given": [
    "$.servers[?(@[\"x-sandbox\"] != true)]",
    "$.paths..servers[?(@[\"x-sandbox\"] != true)]"
  ],
  "severity": "error",
  "recommended": true,
  "then": {
    "field": "url",
    "function": "pattern",
    "functionOptions": {
      "match": "^https://.*"
    }
  }
}
```

This is just a single use case, but it shows how you can craft a standardized set of API governance overrides using OpenAPI extensions. There isn’t any API governance override built into the Spectral format and tooling, but this logic can help you achieve the same outcomes using a cheap OpenAPI extension hack. As I document API governance rules I will keep looking for low budget hacks like this that can help API producers, which also providing a spotlight on how API governance rules being used to enforce API patterns consistently.
