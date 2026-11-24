---
published: true
layout: post
title: 'Point A Governance Rule At The Right Part Of An OpenAPI Before You Write It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/point-a-governance-rule-at-the-right-part-of-an-openapi-before-you-write-it.png
date: 2026-11-24
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - API Governance
  - JSONPath
  - OpenAPI
---

Every Spectral or OpenLint rule starts with a `given`, a JSONPath expression that says which parts of the document the rule applies to. Get the `given` wrong and the rule doesn't fail. It just quietly matches nothing, or matches the wrong things, and your governance looks greener than it is. Most people write the `given`, run the whole ruleset, and squint at the output to work out whether the path did what they meant. There is a quicker way. The `query_jsonpath` tool on the API Evangelist MCP server, backed by `POST /governance/jsonpath`, evaluates a JSONPath against a document and tells you exactly what it matched, and, if you name a field, whether that field is present on each match. It's the step before you write the rule.

## What I gave it

I used the Petstore example the OpenAPI Initiative publishes for learners, [learn.openapis.org/examples/v3.0/petstore.yaml](https://learn.openapis.org/examples/v3.0/petstore.yaml), a 119-line OpenAPI 3.0 document with two paths and three operations. I passed the YAML as the `document`, and called the tool three ways:

1. `path: $.paths[*][*]` with `field: description`, the classic "every operation must have a description" rule.
2. `path: $.paths[*][get,post,put,delete,patch]` with the same field, the tighter version that only selects HTTP methods.
3. `paths` with three expressions at once: every response (`$.paths[*][*].responses[*]`), every schema property (`$.components.schemas[*].properties[*]`), and `$.info.contact`.

## What came back

The first call matched three operations, and every one of them came back with `fieldPresent: false`:

```json
{
  "path": "$.paths[*][*]",
  "count": 3,
  "matches": [
    { "pointer": "/paths/~1pets/get",
      "value": "{\"summary\":\"List all pets\",\"operationId\":\"listPets\",…",
      "field": "description", "fieldPresent": false },
    { "pointer": "/paths/~1pets/post",
      "value": "{\"summary\":\"Create a pet\",\"operationId\":\"createPets\",…",
      "field": "description", "fieldPresent": false },
    { "pointer": "/paths/~1pets~1{petId}/get",
      "value": "{\"summary\":\"Info for a specific pet\",…",
      "field": "description", "fieldPresent": false }
  ]
}
```

So before writing a single line of ruleset, I already know a `description` rule on operations would fire three times against the example most of us learned OpenAPI from. The Petstore uses `summary` on every operation and `description` on none of them. That's worth knowing before you decide whether your rule should require one, the other, or either.

The second call, the method-only path, returned the same three matches with the same result. On this document the two expressions are identical. That's the honest finding: the Petstore has no path-level `parameters`, `summary` or `servers`, so `$.paths[*][*]` never picks up anything that isn't an operation. Point that looser expression at a real provider contract with path-level parameters and it will select those too, and a `description` rule will start flagging parameter arrays as operations missing descriptions. The tool can't tell you that from a document that doesn't contain the case. You have to feed it one that does.

The third call evaluated all three paths in one request. Responses: 6 matches, from `/paths/~1pets/get/responses/200` through `/paths/~1pets~1{petId}/get/responses/default`, including the `201` on create that carries only `"description": "Null response"`. Schema properties: 5, the `id`, `name` and `tag` on `Pet` and the `code` and `message` on `Error`. And `$.info.contact`: `count: 0`, an empty match list.

That zero matters. A rule with `given: $.info.contact` and a `then` that checks `email` would pass this document, because there is no contact object to check. If what you actually want is "an API must name a contact", the `given` has to be `$.info` and the `field` has to be `contact`. Seeing `count: 0` is the moment you catch that.

Every response also ends with a note: the tool evaluates with jsonpath-plus, while OpenLint evaluates `given` with nimma. They follow the same syntax, and the note says a filter that behaves differently between the two is worth reporting upstream. I appreciate that it says so instead of pretending the two engines are one.

## What that makes possible

- **Write the `given` first, then the rule.** Iterate on the path until the match count and pointers are what you meant, then wrap it in a rule. No full lint runs to debug a selector.
- **Size a rule before you ship it.** `fieldPresent` tells you how many violations a new rule will raise on a real contract, so you can decide between `error`, `warn`, or a waiver plan before teams see red.
- **Catch rules that can never fire.** A `count: 0` on a `given` is a rule that passes everything. That's the silent failure in a governance program, and it's visible here in one call.
- **Let an agent author rules safely.** An agent writing a ruleset can call `query_jsonpath` to check each selector against a sample document before proposing it, the same loop a careful human follows. `validate_ruleset` and `test_ruleset` are the next steps after that.

## Try it

`query_jsonpath` is **free**. It's on the API Evangelist MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter governance toolset at `https://mcp.apievangelist.com/mcp/governance`). Over REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/jsonpath \
  -H 'Content-Type: application/json' \
  -d '{"document": "<your OpenAPI as YAML or JSON>", "path": "$.paths[*][*]", "field": "description"}'
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), the MCP server in the [MCP docs](https://developer.apievangelist.com/mcp-server), and the free and Pro tiers on the [plans page](https://developer.apievangelist.com/plans/). Bring a document that has the awkward case in it, and see what your `given` actually selects.
