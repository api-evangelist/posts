---
published: true
layout: post
title: 'Find The PII And Secrets An API Exposes Before You Hand It To An Agent'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-the-pii-and-secrets-an-api-exposes-before-you-hand-it-to-an-agent.png
date: 2026-11-04
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Privacy
  - Security
  - Agents
---

Every team I talk to that is wiring an agent up to its APIs asks some version of the same question once the demo works: what is this thing actually going to see? Not what the agent is supposed to do, but which names, email addresses, phone numbers, passwords and keys pass through the operations you just gave it. Most teams answer that by reading the OpenAPI by hand, if they answer it at all. I'd rather have a machine do the first pass, so this is what `classify_api_fields` on the API Evangelist MCP server does, backed by `POST /governance/classify` on the API Evangelist API. You give it an API description and it gives you back an inventory of the PII and secret fields across parameters, request bodies and response bodies, operation by operation. It uses the same classifiers as our Context Gate.

## What I gave it

I wanted an input everyone knows, so I used the [Swagger Petstore OpenAPI 3](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml), all 839 lines of it, passed as a YAML string in the `document` argument. I also filled in the optional `context` argument with one sentence, "inventory sensitive fields before exposing petstore to an agent." That sentence isn't used to rank anything. It's only read if a result turns out to be wrong, so a bad report comes with the intent attached.

## What came back

The Petstore has 19 operations. The tool flagged 6 of them as carrying sensitive data, with 24 PII fields and 8 secret fields in total. Here is the summary and one of the operations, trimmed:

```json
{
  "operations": 19,
  "summary": {
    "operationsWithSensitiveData": 6,
    "piiFields": 24,
    "secretFields": 8
  },
  "findings": [
    { "operationId": "deletePet", "method": "delete", "path": "/pet/{petId}",
      "fields": [
        { "where": "parameter", "path": "api_key", "in": "header", "pii": false, "secret": true }
      ] },
    { "operationId": "getUserByName", "method": "get", "path": "/user/{username}",
      "fields": [
        { "where": "response", "path": "firstName", "type": "string", "pii": true,  "secret": false },
        { "where": "response", "path": "lastName",  "type": "string", "pii": true,  "secret": false },
        { "where": "response", "path": "email",     "type": "string", "pii": true,  "secret": false },
        { "where": "response", "path": "password",  "type": "string", "pii": false, "secret": true },
        { "where": "response", "path": "phone",     "type": "string", "pii": true,  "secret": false }
      ] }
  ]
}
```

The six operations are `DELETE /pet/{petId}` (an `api_key` header), `POST /user`, `POST /user/createWithList`, `GET /user/login`, `GET /user/{username}` and `PUT /user/{username}`. The pet side of the store is clean apart from that one header. All the personal data lives in the `User` schema, and every operation that reads or writes a user carries it.

Two findings stood out to me. The first is `GET /user/{username}` returning `password` in its response. That is the Petstore being a teaching example, but it's also exactly the kind of thing that ships in real contracts, and it's the field you'd least want flowing into an agent's context window and then into a log. The second is `GET /user/login` taking `password` as a query parameter, which means it ends up in URLs, proxies and access logs. The classifier labels it a secret. It doesn't tell you that a query string is the wrong place for it. That's a design judgement you still have to make yourself.

Now for the honest part. The tool didn't flag `username`, which shows up in this spec as a path parameter, a query parameter on login, and a property of the `User` schema. Whether a username counts as PII depends on your regime, but in plenty of systems it identifies a person just as well as an email address does, and here it sits in the URL of three operations. The classifier works on field names and types, so it catches what's named like personal data and misses identifiers that aren't. Treat the output as a floor, not a ceiling. The response findings for `POST /user/createWithList` also report fields as `firstName` rather than `[].firstName`, which is a small inconsistency in how array responses get pathed, and I've noted it to fix.

## What that makes possible

- **Scope an agent's tool list before you publish it.** Six of nineteen operations carry personal data. Expose the other thirteen to an agent today and hold back the six until you've decided how to mask them.
- **Put a privacy review into CI.** It's one call against a contract. Run it on every pull request and fail the build when `piiFields` or `secretFields` goes up, so a new `ssn` property doesn't slip in without someone noticing.
- **Find the design smells.** A secret in a response body or a query string is a contract problem you can fix before anyone integrates against it. The inventory tells you exactly where to look.
- **Feed the gate.** These are the same classifiers Context Gate uses, so the inventory tells you ahead of time what the gate will redact once the agent is running, and nothing in it comes as a surprise.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter governance toolset at `https://mcp.apievangelist.com/mcp/governance`), call `classify_api_fields` with a `document`. Over REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/classify \
  -H "Content-Type: application/json" \
  -d '{"document": "<your OpenAPI as a YAML or JSON string>"}'
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), the MCP server in the [MCP docs](https://developer.apievangelist.com/mcp-server), and you can get started [here](https://developer.apievangelist.com/getting-started). If you want to check the contract's overall quality as well as its exposure, the natural first step is [linting it with `validate_api`](https://apievangelist.com/2026/10/29/lint-an-openapi-and-find-out-which-rules-decide-if-it-passes/).
