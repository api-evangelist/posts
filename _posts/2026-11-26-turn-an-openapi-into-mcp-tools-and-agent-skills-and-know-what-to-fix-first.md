---
published: true
layout: post
title: 'Turn An OpenAPI Into MCP Tools And Agent Skills, And Know What To Fix First'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/turn-an-openapi-into-mcp-tools-and-agent-skills-and-know-what-to-fix-first.png
date: 2026-11-26
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - OpenAPI
  - Agents
  - Governance
---

Almost every API team I talk to right now has the same thing on their list: "Stand up an MCP server." Most of them already have an OpenAPI, so the job looks simple. Point a generator at the spec, get one tool per operation, ship it. What comes out is usually a pile of thin wrappers. The names come from operationIds, the descriptions are empty, and nothing tells an agent what it's allowed to try. The agent then reads those tools before it does anything.

The `forge_mcp_tools` tool on the API Evangelist MCP server does this job more completely. It runs the `POST /governance/toolsmith` operation. Give it an OpenAPI and it returns an MCP server design, per-operation tools, Agent Skills, an enriched OpenAPI carrying `x-mcp` and `x-agent-skills` extensions, a `server.json` for registries, and the apis.json properties to point at all of it. It's read-only, so it doesn't change anything of yours. It hands you the artifacts.

## What I gave it

I used the best-known OpenAPI there is, the [Petstore example in the OpenAPI Initiative's learn repository](https://raw.githubusercontent.com/OAI/learn.openapis.org/main/examples/v3.0/petstore.yaml). It's 3.0, has three operations (`listPets`, `createPets`, `showPetById`), two paths, and no security. I passed the YAML as the `document` argument along with a one-line `context`.

My first try is worth mentioning. I pulled the tic-tac-toe example from `learn.openapis.org`, and the site handed back an HTML page instead of YAML. When I fed that to the validator I'll get to below, it returned 25 parser errors. Before you forge anything, check that you actually have the spec.

## What came back

From a free key, this:

```json
{
  "content": [{
    "type": "text",
    "text": "The forge_mcp_tools tool requires the API Evangelist Pro tier. See https://developer.apievangelist.com/plans/ ..."
  }],
  "isError": true
}
```

`forge_mcp_tools` is a Pro capability, and I'm not going to make up a response. What it returns is listed above, straight from the operation description: the server design, the tools, the skills, the enriched OpenAPI, `server.json` and apis.json. What I can show you is the free call that comes before it. That's `validate_api` on the same Petstore, using the default `catalog` ruleset:

```json
{
  "format": "openapi", "ruleset": "catalog", "ruleCount": 469,
  "passed": true,
  "summary": { "error": 0, "warning": 8, "info": 234, "total": 242 },
  "top_rules": [
    { "code": "response-include-ratelimit-header", "count": 18 },
    { "code": "agentic-access-contract-declared", "count": 3 },
    { "code": "operation-description", "count": 3 },
    { "code": "operation-require-security", "count": 3 }
  ]
}
```

It passes, with no errors. But most of the findings that matter here are about whether an agent can understand the API. All three operations have no description, so whatever forge generates will have no prose of yours to start from. All three are flagged by `agentic-access-contract-declared` ("Operation has no x-agentic-access contract — an agent cannot know what it may attempt"). The security rules fire on every operation too, because the Petstore declares no security at all. An MCP server built from it would expose a `createPets` tool and give the agent no idea who is allowed to call it.

I also need to be honest about our own tooling. Among the 242 findings, the `catalog` ruleset says the API "SHOULD be accessible under api.spscommerce.com." That rule came from a single company's style guide and has no business firing on the Petstore. A few others ask every collection for sparse fieldsets, `baggage` headers and a `/status` health check. Those aren't wrong, but they're noise when your actual goal is good tools. With 469 rules running, scope the lint to what you care about. The response says so itself: pass `tags` or your own ruleset.

## What that makes possible

- **Fix the inputs before you forge.** Operation descriptions, a security scheme and an `x-agentic-access` contract are the three changes that most affect what an agent reads. Make them in the OpenAPI, which stays your source of truth. That way you aren't hand-editing generated tools that get overwritten next time.
- **Get the MCP server and the skills in one pass.** Forge returns the tools and the Agent Skills together, built from the same spec. The skill that says "list pets, then fetch one by ID" can't drift away from the tools it calls.
- **Publish where agents look.** The `server.json` goes to an MCP registry, and the apis.json properties go into your own index. Teams forget that discovery step, and it's what lets an agent find the server in the first place.
- **Keep the enriched OpenAPI.** The `x-mcp` and `x-agent-skills` extensions record the agent surface in the contract itself, so it can be reviewed, diffed and governed like everything else in it.

## Try it

`forge_mcp_tools` is **Pro**. `validate_api`, the setup step, is **free**.

- MCP server: `https://mcp.apievangelist.com/mcp`, tool `forge_mcp_tools`
- REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/toolsmith \
  -H "x-api-key: $AE_KEY" -H "Content-Type: application/json" \
  -d '{"document": "<your OpenAPI as YAML or JSON>"}'
```

- Reference: [Governance API](https://developer.apievangelist.com/governance-api)
- MCP docs: [developer.apievangelist.com/mcp-server](https://developer.apievangelist.com/mcp-server)
- Plans: [developer.apievangelist.com/plans](https://developer.apievangelist.com/plans/)

Run `validate_api` first, fix the descriptions, security and agent-access gaps it finds, and then forge. The tools come out only as good as the spec you give it.
