---
published: true
layout: post
title: 'Find Out What Kind Of API Document You Are Holding Before You Govern It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-out-what-kind-of-api-document-you-are-holding-before-you-govern-it.png
date: 2026-11-20
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Governance
  - OpenAPI
  - Arazzo
---

Every governance pipeline I have ever looked at starts with an assumption about what it has been handed. It assumes the file is OpenAPI, or that it is OpenAPI 3, or that whoever dropped it in the repository knew which version they wrote. Those assumptions break quietly. A Swagger 2.0 file gets linted with 3.x rules, an Arazzo workflow gets run through an OpenAPI style guide, and the result is a wall of errors that nobody trusts. An agent wired into the same pipeline has it worse, because it doesn't have the instinct to glance at the first line of the file. The `detect_format` tool on the API Evangelist MCP server is the glance. It sits on the `POST /governance/detect-format` operation of the API Evangelist API, and it tells you what a document is, which version it is, how many catalog rules apply to it, which built-in ruleset fits, and which named governance profiles you could run against it.

## What I gave it

I called it three times today with three public documents, passing each one as a raw string in the `document` argument, plus a one-sentence `context` saying I was identifying the spec and version for this story:

- The classic [Swagger Petstore](https://petstore.swagger.io/v2/swagger.json), a Swagger 2.0 JSON file.
- The OpenAPI Initiative's [webhook example](https://github.com/OAI/learn.openapis.org/blob/main/examples/v3.1/webhook-example.yaml) from learn.openapis.org, an OpenAPI 3.1.0 YAML file.
- The [pet coupons workflow](https://github.com/OAI/Arazzo-Specification/blob/main/examples/1.0.0/pet-coupons.arazzo.yaml) from the Arazzo specification repository, an Arazzo 1.0.0 YAML file.

One JSON document and two YAML documents, from two eras of OpenAPI and one sibling specification. That's a reasonable sample of what turns up in a real API repository.

## What came back

All three calls came back without errors. Here are the three answers, exactly as returned:

```json
{"format":"openapi","version":"2.0","openapiMajor":"swagger-2.0",
 "catalogRules":469,"builtinRuleset":"spectral:oas",
 "profiles":["owasp","problem-details","fhir","api-authorization",
             "api-authorization-oauth-metadata"]}

{"format":"openapi","version":"3.1.0","openapiMajor":"openapi-3.x",
 "catalogRules":469,"builtinRuleset":"spectral:oas",
 "profiles":["owasp","problem-details","fhir","api-authorization",
             "api-authorization-oauth-metadata"]}

{"format":"arazzo","version":"1.0.0","catalogRules":33,
 "builtinRuleset":"spectral:arazzo (opt-in: builtins:true)","profiles":[]}
```

The first thing it gets right is the split that matters most in OpenAPI land. Both files are labelled `openapi`, but the `openapiMajor` field separates `swagger-2.0` from `openapi-3.x`. That's the field a pipeline should branch on, because the shapes of the two are different enough that a rule written for one will misfire on the other.

The Arazzo answer is the one that shows the size of the gap. An OpenAPI document has 469 catalog rules that could apply to it and five named profiles, from OWASP security checks to RFC 9457 problem details to FHIR. An Arazzo workflow has 33 rules and no profiles at all. The built-in Arazzo ruleset is there, but it's opt-in: you have to pass `builtins: true` to get it. If you are writing Arazzo workflows today, you are working with about a fourteenth of the governance OpenAPI gets, and the tool says so instead of pretending otherwise.

Here's the part I want to be honest about. The Swagger 2.0 file and the OpenAPI 3.1 file report exactly the same 469 catalog rules and exactly the same five profiles. Either every one of those rules carries a version-neutral or dual-version check, or the count is reported for the `openapi` format as a whole and doesn't narrow by major version. I suspect the second. Either way, a reader shouldn't take `catalogRules` as "the number of rules that will fire against this Swagger 2.0 file." Take it as the size of the OpenAPI pool, and use the `openapiMajor` field to decide what you do next. I'd rather the tool narrowed that number by version, and I'll be looking at it.

## What that makes possible

- **Route documents before you lint them.** A CI step can call `detect_format` on every file in an `openapi/` or `specs/` folder and send each to the right ruleset, instead of running one style guide over everything and drowning in false failures.
- **Catch the Swagger 2.0 files still in production.** Run it across a repository or a catalog and count how many documents come back `swagger-2.0`. That's your upgrade backlog, measured rather than guessed.
- **Let an agent pick its next tool.** An agent handed an unknown file can call this first, then choose to validate, lint with a named profile, or treat it as a workflow. The profile list in the answer is a menu of next steps it can actually take.
- **See where governance is thin.** The difference between 469 rules and 33 is a map of where the tooling for newer specifications still needs work, for us and for everyone else building rules.

## Try it

`detect_format` is free. Point any MCP client at `https://mcp.apievangelist.com/mcp` and call `detect_format` with a `document` argument holding the YAML or JSON as a string (an already-parsed object works too). The same thing over REST:

```sh
curl -s -X POST https://api.apievangelist.com/v1/governance/detect-format \
  -H 'Content-Type: application/json' \
  -d '{"document": "arazzo: 1.0.0\ninfo:\n  title: Example\n  version: 1.0.0"}'
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), the MCP server in the [MCP server docs](https://developer.apievangelist.com/mcp-server), and the [getting started guide](https://developer.apievangelist.com/getting-started) walks through keys. Once you know what you are holding, the natural next call is `validate_api`, which checks the document against the specification it just told you it was.
