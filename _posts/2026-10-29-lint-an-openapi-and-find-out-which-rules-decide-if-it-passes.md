---
published: true
layout: post
title: 'Lint An OpenAPI And Find Out Which Rules Decide If It Passes'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/lint-an-openapi-and-find-out-which-rules-decide-if-it-passes.png
date: 2026-10-29
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Linting
  - Governance
  - OpenAPI
  - OpenLint
---
This is the first in a new series. Every business day I'm going to take one API Evangelist API operation, and the MCP tool that sits on top of it, and show what it does with a real input. No screenshots of a dashboard, no hypotheticals. I'll call the thing and tell you what came back.

I'm starting with the one most people need first. You have an OpenAPI, and you want to know if it's any good before it ships. The MCP tool is `validate_api`, and the REST operation behind it is `POST /governance/validate`. It lints OpenAPI, AsyncAPI, Arazzo, JSON Schema and a handful of other formats with the [OpenLint](https://openlint.org) engine, and it's free.

## What I gave it

I gave it the most familiar API description there is: the [Petstore example](https://raw.githubusercontent.com/OAI/learn.openapis.org/main/examples/v3.0/petstore.yaml) the OpenAPI Initiative publishes in its learning materials. Three operations: list pets, create a pet, get one pet by id. It's a teaching example, so it's clean, small and missing the things a teaching example usually leaves out.

I ran it twice. The first time I passed only the document, so it ran against our default rule catalog. The second time I added `"profile": "owasp"`, which runs the OWASP API Security Top 10 rules instead.

## What came back

Against the default catalog, the Petstore passed:

```json
{
  "format": "openapi",
  "ruleset": "catalog",
  "ruleCount": 469,
  "passed": true,
  "summary": { "error": 0, "warning": 8, "info": 234, "total": 242 }
}
```

469 rules ran, and they produced 242 findings across 59 different rules, with no errors. The eight warnings are the ones you'd expect: no `info.contact`, no `info.description`, operations without a `description`, and operation tags that aren't defined in the global `tags`. The 234 info-level findings are where the catalog shows what it is. The most frequent was `response-include-ratelimit-header`, 18 times, followed by hypermedia links, correlation ids and string length limits.

Against the OWASP profile, the same document failed:

```json
{
  "ruleset": "profile:owasp",
  "ruleCount": 31,
  "passed": false,
  "summary": { "error": 2, "warning": 8, "info": 8, "total": 18 }
}
```

```text
error   owasp-api8-misconfig-https-servers
        API8 (Security Misconfiguration): server URL must use https://
error   owasp-api2-auth-security-schemes-defined
        API2 (Broken Authentication): components.securitySchemes must define at least one scheme
warning owasp-api1-bola-operation-security-defined   (x3, one per operation)
warning owasp-api9-inventory-operation-description   (x3)
```

The Petstore serves from `http://petstore.swagger.io/v1` and declares no security scheme at all. Under the default catalog, those were info-level notes buried among 234 others. Under OWASP, they're the two things that fail the build.

Same document, same engine, opposite verdicts. The rules decided, not the API.

I also want to be honest about the catalog. It's built from rulesets that real organizations have published, and that shows. Four different rules flagged the same `http://` server URL. One rule told the Petstore it should be served from `api.spscommerce.com`, because that rule came from SPS Commerce's own style guide. That's useful when you want to see how far the industry's rules reach, and it's the wrong thing to block a merge on. The tool's own description says the same: pass your own `ruleset` to run rules you own instead of the catalog, which is what you should do before gating on anything.

## What that makes possible

- **Survey before you commit.** Run the catalog once to see the full range of what other organizations check for, then pick the rules that match your own standards. The `top_rules` list in the response is a quick way to see where an API is weakest.
- **Gate on a named profile.** If what you care about is security, run `"profile": "owasp"` in CI and fail on errors. Thirty-one rules mapped to the OWASP API Top 10 is a much more defensible gate than 469 rules from everywhere.
- **Bring your own rules.** Pass an OpenLint or Spectral `ruleset` directly and get the same response shape back. Paid accounts can store an org default so every call uses it.
- **Let an agent check its own work.** Because it's an MCP tool, an agent writing or editing an OpenAPI can lint it before handing it back, and read the findings as structured JSON instead of guessing.

## Try it

It's free and needs no key. From any MCP client, connect to `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/governance`) and call `validate_api` with your document. Over REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/validate \
  -H 'content-type: application/json' \
  -d '{"document": "<your OpenAPI as a YAML or JSON string>", "profile": "owasp"}'
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) explain how to connect a client. Run it on one of your own APIs with and without a profile, and see which rules decide whether it passes. Tomorrow's tool goes the other direction, searching sixteen years of API research instead of checking a contract.
