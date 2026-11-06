---
published: true
layout: post
title: 'Grade An API From Zero To One Hundred And Check Which Dimensions Were Actually Scored'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/grade-an-api-from-zero-to-one-hundred-and-check-which-dimensions-were-actually-scored.png
date: 2026-11-06
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Governance
  - Scorecard
  - OpenAPI
  - APIs.json
---

A lint report is a list. Two hundred and forty-two diagnostics on a three-operation Petstore is accurate and useless to the person who has to decide whether the API is ready. What they want is one number, a letter, and a breakdown they can argue with. That's `api_scorecard` on the API Evangelist MCP server, backed by `POST /governance/scorecard` on the API Evangelist API. You give it an API description and it rolls up a 0-100 maturity score with a grade across design, governance coverage and documentation, and, if you also hand it an APIs.json, three more dimensions for discoverability, agent-readiness and operations. It's free. I ran it six ways, and two of the runs showed me bugs in my own tool, which is the part of this post I'd read first.

## What I gave it

The base input is the same [Petstore example](https://raw.githubusercontent.com/OAI/learn.openapis.org/main/examples/v3.0/petstore.yaml) the OpenAPI Initiative publishes in its learning materials, the one I [linted last week with `validate_api`](https://apievangelist.com/2026/10/29/lint-an-openapi-and-find-out-which-rules-decide-if-it-passes/). Three operations, clean, and missing the things teaching examples leave out. I scored it four ways: on its own against the default rule catalog, with `"profile": "owasp"`, with a two-rule custom `ruleset` of my own (require `info.description`, require `info.contact`), and with the [apis.io APIs.json](https://apis.io/apis.json) passed alongside it as `apisJson` so the second trio of dimensions would light up.

Then I gave it a production contract for contrast: the [API Evangelist v1 OpenAPI](https://developer.apievangelist.com/apis/apievangelist-v1-openapi.yml), 180 KB and 77 operations, the contract behind the very API this tool runs on.

## What came back

The Petstore on its own scores 87, a B:

```json
{"overall": 87, "grade": "B",
 "dimensions": [
  {"name": "Design & style", "score": 97, "weight": 0.25,
   "detail": "0 errors, 8 warnings over 31 governed nodes (0.3 warnings/node)"},
  {"name": "Governance coverage", "score": 100, "weight": 0.15,
   "detail": "100% of the description is inspected by the ruleset"},
  {"name": "Documentation", "score": 64, "weight": 0.2,
   "detail": "2/5 info fields, 100% of operations described",
   "missing": ["description", "contact", "tags"]}]}
```

Three things to notice. The design score is the lint result turned into a density, warnings per governed node, which is why eight warnings on a tiny document still lands at 97. Governance coverage is how much of the document the ruleset actually looked at, and the catalog's 469 rules reach all of it. Documentation is the honest one: the Petstore has a title and a version, no description, no contact, no tags, and every operation has a summary. The weights only add up to 0.6 because the three APIs.json dimensions aren't there, and the overall is renormalized over what was measured. Do the arithmetic and 86.75 rounds to 87.

Adding the apis.io APIs.json drops the Petstore to 65, a D, and this is the first bug. The new dimensions came back as discoverability 40 (missing Pricing/Plans, Terms of Service, Support), agent-readiness 33 (missing MCP server, llms.txt / agents.md) and operations 25 (missing Deprecation policy, SLA, Security / VDP). The problem is that the apis.io APIs.json carries nearly all of those in its root `common` block: `Plans`, `Pricing`, `TermsOfService`, `Support`, `MCPServer`, `LLMsTxt`, `Deprecation`, `Security`, `SecurityTxt` and `VulnerabilityDisclosure` are all present with URLs. Only the SLA is genuinely absent. The scorecard isn't reading `common`, or isn't matching those property names, and it's marking a well-described catalog as poorly described. That is a defect in the scorecard, not in apis.io, and it will be fixed.

The OWASP profile changed nothing. The result was byte-for-byte identical to the default run, 97 on design with the same eight warnings, when `validate_api` against the same profile reports two errors (plaintext `http://` server, no security schemes). The scorecard accepts `profile` and ignores it. My own two-rule `ruleset` did work, and it's instructive: design fell to 94 with two errors, but governance coverage collapsed to 3%, because two rules that only look at `$.info` inspect three percent of the document, and the overall landed at 61, a D. That's the point of the description's warning that a score against rules you never adopted means little. The coverage dimension is there so a narrow ruleset can't buy a high score.

The production contract is the second bug, and the bigger one. The API Evangelist v1 OpenAPI came back 100, an A, with only two dimensions in the list: governance coverage 100 and documentation 100. The design dimension was gone. When I ran `validate_api` on the same document directly, it failed outright:

```json
{"error": "bad_request",
 "message": "Lint failed: jsonPath: func is not a function: @property.match(/Cache-Control|Expires/i)"}
```

A catalog rule uses a JSONPath filter the engine doesn't support, the lint step throws on this document, and the scorecard swallows the failure, drops the dimension and renormalizes the rest to a perfect score. An A with no lint is not an A. It should either surface the failure or score the dimension as unknown with the overall marked partial, and the rule itself needs fixing. Both are on the list.

## What that makes possible

- **Put a grade in the pull request instead of a diagnostics dump.** One call returns a number a reviewer can read, with the dimension that moved it. Lint stays where it belongs, in the detail.
- **Score against the rules you actually adopted.** Pass your own `ruleset` and the design dimension reflects your style guide, while coverage tells you how much of the contract those rules even reach. A ruleset that inspects three percent of the document shows up as three percent.
- **Measure the whole product, not just the contract.** With an APIs.json alongside, discoverability, agent-readiness and operations join the rollup, which is the difference between an API that is well designed and one that someone can find, pay for and trust. Once the `common` reader is fixed, that's six dimensions from two files.
- **Check the dimensions, every time.** The one habit this run teaches an agent or a pipeline: count the `dimensions` array before trusting `overall`. Three or six is the expected shape. Two means something was skipped.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter governance toolset at `https://mcp.apievangelist.com/mcp/governance`), call `api_scorecard` with `document` set to the OpenAPI text, optionally `ruleset` for your own rules and `apisJson` for the second set of dimensions. Over REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/scorecard \
  -H "content-type: application/json" \
  -d "{\"document\": $(curl -s https://raw.githubusercontent.com/OAI/learn.openapis.org/main/examples/v3.0/petstore.yaml | jq -Rs .)}"
```

The operation is documented in the [governance API reference](https://developer.apievangelist.com/governance-api), the MCP server in the [MCP docs](https://developer.apievangelist.com/mcp-server), and you can get started [here](https://developer.apievangelist.com/getting-started). The scorecard is a rollup, so when a dimension looks wrong the next step is the tool underneath it, [`validate_api`](https://apievangelist.com/2026/10/29/lint-an-openapi-and-find-out-which-rules-decide-if-it-passes/), which is also where you'll see the lint failure this post found instead of a quiet A.
