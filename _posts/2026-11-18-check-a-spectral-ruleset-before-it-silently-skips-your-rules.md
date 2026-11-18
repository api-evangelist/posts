---
published: true
layout: post
title: 'Check A Spectral Ruleset Before It Silently Skips Your Rules'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/check-a-spectral-ruleset-before-it-silently-skips-your-rules.png
date: 2026-11-18
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Governance
  - Spectral
  - Linting
---

The most dangerous ruleset in API governance isn't the strict one. It's the one that looks like it's running. Misspell a function name in a Spectral rule and the engine skips that rule without a word. Point `given` at an alias you never defined and the rule matches nothing. Your pipeline stays green, everyone assumes the policy is being enforced, and it isn't. More and more rules are being written by agents now, and they make these mistakes at least as often as people do.

So the API Evangelist API has an operation that checks the ruleset itself before you run it or store it. On the MCP server it's the `validate_ruleset` tool. Over REST it's `POST /governance/validate-ruleset`. It parses every `given` with nimma (the same JSONPath parser the engine uses), checks every function against the ones the engine actually has, resolves every `#alias`, and confirms each rule has a `then`. It also strips catalog metadata like `title`, `prompt` and `x-*` keys that the OpenLint engine refuses on a rule, then hands you back the cleaned, engine-ready ruleset.

## What I gave it

I called it twice. The first call was a baseline: a ruleset that extends Spectral's own [`spectral:oas`](https://docs.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules) set and tightens two of its built-in rules:

```json
{"extends": ["spectral:oas"],
 "rules": {"operation-tags": "error", "info-contact": "warn"}}
```

The second was a five-rule ruleset I wrote by hand, containing the mistakes I see most in real style guides: a rule carrying a `title` and an `x-policy` id from a governance catalog, a misspelled function (`patern`), an alias (`#Responses`) that was never declared in `aliases`, a broken JSONPath (`$.paths[[*`), and a rule with a `given` but no `then`. One rule, `operation-summary-required`, is correct apart from its metadata. It uses a declared alias, `#PathItem[get,post,put,patch,delete]`.

## What came back

The baseline came back clean: `{"valid":true,"errors":[],"warnings":[],"ruleCount":2,"extends":["spectral:oas"],"stripped":[]}`. That's what you'd want from a ruleset that just leans on a published one.

The hand-written one came back `valid: false`, with four errors. Here they are:

```text
no-trailing-slash    Unknown function "patern". The engine would skip this
                     rule silently. Core functions: alphabetical, casing,
                     defined, enumeration, falsy, length, pattern, schema,
                     truthy, undefined, unreferencedReusableObject, xor, or.
response-has-schema  `given` uses alias #Responses, which the ruleset does
                     not define in `aliases`.
bad-path             `given` is not a valid JSONPath: $.paths[[*
no-then              A rule needs `then` — what to check on each `given` match.

stripped: operation-summary-required.title,
          operation-summary-required.x-policy
note: 2 metadata keys (title, prompt, x-*, …) were set aside before
      validation; OpenLint rejects them on a rule. `ruleset` is the
      engine-ready version.
```

It caught every mistake I planted. The first error is the one that matters most, because it says out loud what the engine would otherwise do: skip the rule silently. The error message also lists the core functions, so the fix (`pattern`) is right there. The rule that was only carrying catalog metadata came through as valid. Its `title` and `x-policy` were moved into `stripped`, and the response includes the full ruleset with those keys removed, ready to run.

Now the part I'm less proud of. Besides the four errors there were nine warnings, and they're noisy. Every rule without a `message` gets "findings will show the raw function output". Every rule without a `severity` gets "it defaults to warn". Both are fair points about a ruleset you plan to ship. But the tool also raises them on `bad-path` and `no-then`, two rules that can't run at all, so a broken rule ends up with a pile of style advice on top of its real problem. If you have an agent reading this response, tell it to fix `errors` first and only look at `warnings` once `valid` is true. I'd like the tool to hold back the warnings on rules that already have errors, and I've noted that.

One more thing worth knowing: `title` and `x-*` really do get stripped. If your governance catalog keeps a policy id on each rule, keep it in the catalog. Don't expect it to survive into the engine.

## What that makes possible

- **A gate in front of your style guide repo.** Run it in CI on every change to `.spectral.yaml`. A typo in a function name fails the pull request, not the next six months of linting.
- **An agent that writes rules safely.** When an agent drafts a rule from a policy document, have it call `validate_ruleset` before it does anything else. The error messages are specific enough that it can repair its own `given` or function name and try again.
- **One source for catalog and engine.** Keep titles, prompts and policy ids on your rules in the catalog, and let the `stripped` list plus the returned `ruleset` give you the version the engine will actually accept.
- **A clean handoff to linting.** Once `valid` is true, pass the returned ruleset to `lint_api` or `validate_api` and score against rules you actually adopted.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp`, call `validate_ruleset` with `{"ruleset": {...}}`. Over REST:

```sh
curl -X POST https://api.apievangelist.com/v1/governance/validate-ruleset \
  -H "Content-Type: application/json" \
  -d '{"ruleset":{"rules":{"x":{"given":"$.info","then":{"function":"patern"}}}}}'
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), the MCP setup is on the [MCP server page](https://developer.apievangelist.com/mcp-server), and [getting started](https://developer.apievangelist.com/getting-started) covers keys. If you want the backstory on the engine, I wrote about [why I forked Spectral and why it became OpenLint](https://apievangelist.com/2026/10/27/why-i-forked-spectral-and-why-it-became-openlint/). Yesterday's tool story was about [finding everything related to a story across the network](https://apievangelist.com/2026/11/17/find-everything-related-to-a-story-across-the-api-evangelist-network/).
