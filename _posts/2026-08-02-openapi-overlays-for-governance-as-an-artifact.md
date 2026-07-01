---
published: true
layout: post
title: 'OpenAPI Overlays for Governance as an Artifact, Not Enforcement'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-governance-as-an-artifact.png
date: 2026-08-02
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - API Governance
  - Standards
  - APIs
---

This is one of the use cases I flagged as underexplored in my [Many Use Cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/) post, and it is quietly my favorite one. Most of the time when we talk about API governance, we mean a linter. You point Spectral at a spec, it checks the spec against a ruleset, and when the spec falls short it fails the build and hands the developer a list of grievances to go fix by hand. That is enforcement. It tells you that you are non-compliant, and then it stops. Useful, but it is fundamentally a nag with a exit code. What Spectral will never do is bring the spec into compliance for you. Overlays will.

An [OpenAPI Overlay](https://spec.openapis.org/overlay/latest.html) is a separate document that describes a set of targeted changes to apply to an OpenAPI description. Instead of encoding your org standard as a rule that fails a spec, you encode the standard as the patch that satisfies it. Same standard, opposite verb. Enforce says "your contact block is missing." Apply says "here is the contact block." Let me show you against my Products API teaching template, which is deliberately a little under-governed so there is something to fix.

Here is the org-standard overlay. It injects the contact and license blocks every API in the org is supposed to carry, defines the standard bearer-token security scheme and applies it at the top level, and stamps the mandatory `products` tag on the operations.

```yaml
overlay: 1.1.0
info:
  title: Acme Org Standard Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.info
    update:
      contact:
        name: Acme API Platform Team
        email: api@acme.example
        url: https://developer.acme.example
      license:
        name: Apache-2.0
        url: https://www.apache.org/licenses/LICENSE-2.0.html
  - target: $.components.securitySchemes
    update:
      acmeBearer:
        type: http
        scheme: bearer
        bearerFormat: JWT
  - target: $
    update:
      security:
        - acmeBearer: []
  - target: $.paths[*][*].tags
    update:
      - products
```

Every one of those actions maps to a rule you have probably already written for Spectral. "info must have a contact." "info must have a license." "every API must declare a security scheme and reference it." "every operation must be tagged." The difference is that if I run this overlay against the Products API, the output is a spec that has those things, not a report saying it does not. The standard is not a promise anymore, it is a transformation.

The second overlay is server templating, which is where governance-as-artifact really earns its keep. The org convention is that every server URL is an `{environment}` template so the same spec drives dev, staging, and prod. The Products API ships a couple of hardcoded servers, so I replace them wholesale.

```yaml
overlay: 1.1.0
info:
  title: Acme Server Templating Overlay
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.servers
    update:
      - url: https://{environment}.api.acme.example/products
        description: Acme templated environment endpoint
        variables:
          environment:
            default: prod
            enum:
              - dev
              - staging
              - prod
```

A Spectral rule can assert that `servers[*].url` matches your templating pattern and fail every spec that does not. This overlay makes the spec match the pattern. That is the whole argument in one action.

Here is why I keep coming back to this framing. Standards and artifacts outlive tools. Spectral is great, but it is a tool, and tools get swapped, versioned out, or abandoned. When your governance lives inside a linter config, it walks out the door with the linter. When your governance is an overlay, it is a version-controlled YAML document you can diff, review in a pull request, audit, and re-apply against any spec, forever, with whatever tooling reads Overlay 1.1.0. The standard is the artifact, not the enforcement of it.

An overlay turns a one-off edit into a named, diffable, re-appliable transformation. That is exactly the property that makes it a governance primitive and not just a convenience, and it is the reason I think most teams have the model backwards. Stop shipping rules that fail specs. Ship overlays that fix them.
