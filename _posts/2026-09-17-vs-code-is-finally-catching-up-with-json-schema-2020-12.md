---
published: true
layout: post
title: 'VS Code Is Finally Catching Up With JSON Schema 2020-12'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/vs-code-is-finally-catching-up-with-json-schema-2020-12.png
date: 2026-09-17
author: Kin Lane
tags:
  - JSON Schema
  - OpenAPI
  - Tooling
  - Standards
  - Validation
---
For most of the last six years, if you opened a JSON Schema 2020-12 document in VS Code, the editor quietly fell back to draft-07 behavior and hoped for the best. Completion worked at the root and gave up below it. Keywords like `$dynamicRef` were ignored. There were issues open about it going back to 2020 ([vscode#98724](https://github.com/microsoft/vscode/issues/98724) for 2019-09, [vscode#165219](https://github.com/microsoft/vscode/issues/165219) for 2020-12), and every one of them sat in the backlog. This matters well beyond JSON Schema people, because OpenAPI 3.1 and 3.2 are built on 2020-12, and their meta-schemas lean on `$dynamicRef` to do what they do. The most widely used editor on the planet could not properly validate the most widely used API specification in its current version.

That is changing, and it is worth understanding how, because the work is already in the VS Code you are running, and it is going to keep surfacing in your projects over the next few months.

## One pull request that took five months

The code that does JSON validation, completion and hover in VS Code does not live in the VS Code repository. It lives in [microsoft/vscode-json-languageservice](https://github.com/microsoft/vscode-json-languageservice), which is also what powers the Monaco editor. I just added it to the [API Evangelist tools catalog](https://tools.apievangelist.com/store/vscode-json-languageservice/) as a JSON Schema tool, because it is arguably the most-used JSON Schema implementation there is, even if almost nobody thinks of it that way.

In January, Keegan Caruso at Microsoft commented on the long-standing 2019-09 issue that the support was built, and asked how the maintainer, Martin Aeschlimann, wanted to receive it. The answer was a pull request, and on February 1st [PR #308](https://github.com/microsoft/vscode-json-languageservice/pull/308) landed: vocabulary support, `$recursiveRef`, correct `$ref` resolution with embedded `$id` schemas, `dependentSchemas` working with `unevaluatedProperties`, `duration` and `uuid` formats. Roughly 2,800 lines, two thousand of them tests.

What I like about this story is what happened next. Jason Desrosiers from the JSON Schema project had offered to review for spec correctness, and did, repeatedly, with test cases. Those test cases found regressions, including embedded schemas that stopped resolving from their embedded location. Karen Etheridge weighed in on `$recursiveAnchor` needing to be a boolean and on how `unevaluatedProperties` should see keywords next to a `$ref`. Keegan kept turning the feedback into tests and fixes. Along the way the package became ESM-only, which made even running the branch inside VS Code a chore. The PR merged on July 6th. That is five months of the implementer and the specification community working the details in public, which is exactly how this should work, and rarely does.

## Then 2020-12

The day after #308 merged, Keegan opened [PR #337](https://github.com/microsoft/vscode-json-languageservice/pull/337), support for `$dynamicRef` and `$dynamicAnchor`, the headline 2020-12 feature. It merged July 12th and shipped as `6.0.0-next.2`. The approach is worth a read if you are into this kind of thing. A `$dynamicAnchor` is registered like any other anchor, and a `$dynamicRef` first resolves lexically. For true dynamic resolution the service runs a pre-pass over the original schema tree, recording which anchors belong to which schema resource before `$ref` merging flattens those boundaries away. At validation time it walks the dynamic scope from the outside in and takes the outermost match.

The same day #308 merged, Martin filed six follow-up issues against it: shared state mutated by embedded `$id` schemas, `dependencies` silently disabled in schemas with no `$schema`, vocabulary gating missing from completion and hover, the meta-schema being fetched on every resolution, a linear scan per keyword, and non-boolean `$vocabulary` values being trusted. Most of those now have fixes, several from people outside Microsoft.

## What actually changed in behavior

If you only read one section, read this one, because these are the things that will show up in your editor.

- **`format` is annotation-only by default for 2019-09 and later.** A string that is not a valid date no longer produces an error in a 2020-12 schema unless format assertion is turned on, through the format-assertion vocabulary or configuration. This is what the specification says, but it is a visible change for anyone who relied on it.
- **Keywords are gated by draft.** `dependentRequired`, `dependentSchemas`, `unevaluatedProperties`, `unevaluatedItems`, `minContains` and `maxContains` only apply in 2019-09 and later. `prefixItems` only applies in 2020-12. `dependencies` only applies in draft-07 and earlier.
- **Siblings of `$ref` are ignored in draft-07 and earlier.** Also per the specification, and also the one most likely to bite.
- **`$vocabulary` is honored.** A custom meta-schema can switch keyword sets off, and since [#349](https://github.com/microsoft/vscode-json-languageservice/pull/349) completion, hover and document symbols respect that too, not just validation.
- **References resolve properly.** Embedded `$id` resources get the right base URI, `$anchor` works, and Go to Definition follows anchors and embedded schemas.
- **OpenAPI 3.0, 3.1 and 3.2 are now in the test suite.** [PR #359](https://github.com/microsoft/vscode-json-languageservice/pull/359) fixed external reference resolution and added validation tests against all three, and [#358](https://github.com/microsoft/vscode-json-languageservice/pull/358) added an OpenAPI Overlay schema.

## It is already in your editor

VS Code picked up the prerelease line quickly. Its JSON language server now depends on `^6.0.0-next.4`, and the bug reports put the new behavior in stable releases from 1.130 on. The first casualties are exactly what you would expect when a tool gets more correct.

Cloudflare's `wrangler.jsonc` is the cleanest example. Wrangler's generated schema put VS Code's `allowTrailingCommas` hint at the root, right next to a `$ref`. In a draft-07 schema, that sibling is now ignored, so starting with VS Code 1.131 every trailing comma in every `wrangler.jsonc` got flagged. Cloudflare [moved the hint off the `$ref`](https://github.com/cloudflare/workers-sdk/pull/15151). Vincent Biret found that the OpenAPI 3.2 entry in SchemaStore pointed at the wrong meta-schema URL and [fixed it upstream](https://github.com/SchemaStore/schemastore/pull/5984) after first [reporting it as a `$dynamicRef` bug](https://github.com/microsoft/vscode-json-languageservice/issues/341). Not every report is the schema author's fault, though. [#354](https://github.com/microsoft/vscode-json-languageservice/issues/354) is a genuine regression where relative `$ref`s in local draft-07 schemas resolve against the wrong base URI, and there is an [open fix](https://github.com/microsoft/vscode-json-languageservice/pull/366) for it.

If you publish a JSON Schema that people point at from their config files, now is a good time to open one of those files in current VS Code and look at what it says.

## What is coming

Here is what I see on the board right now.

- **The regression fixes.** Open pull requests cover the draft-07 base URI regression ([#366](https://github.com/microsoft/vscode-json-languageservice/pull/366)), vocabulary gating that never runs for the 2019-09 keywords ([#368](https://github.com/microsoft/vscode-json-languageservice/pull/368)), concurrent schema resolutions interfering with each other ([#371](https://github.com/microsoft/vscode-json-languageservice/pull/371)), a precomputed vocabulary index that is 12 to 20 times faster ([#372](https://github.com/microsoft/vscode-json-languageservice/pull/372)), and `format: "regex"` validation ([#373](https://github.com/microsoft/vscode-json-languageservice/pull/373)). Base URI and caching issues around `$id` matching the retrieval URL ([#344](https://github.com/microsoft/vscode-json-languageservice/issues/344), [#356](https://github.com/microsoft/vscode-json-languageservice/issues/356)) are still open.
- **A fallback schema provider.** [#374](https://github.com/microsoft/vscode-json-languageservice/pull/374) lets a host supply a schema for a file that does not declare one. An earlier attempt to wire SchemaStore suggestions directly into the service was closed, and this looks like the more general door.
- **6.0.0 final.** Everything is still tagged `next`. Worth knowing: as of today npm's `latest` tag points at `6.0.0-next.3`, so a plain `npm install vscode-json-languageservice` already gets you an ESM-only prerelease. Pin what you test against.
- **The two old VS Code issues closing.** Both are still open and still sitting in the backlog, even though most of what they asked for has shipped.
- **The smaller gaps.** IntelliSense for `$schema` still does not suggest the 2019-09 or 2020-12 URIs ([#208](https://github.com/microsoft/vscode-json-languageservice/issues/208)), and whether meta-schemas get downloaded at all ([#212](https://github.com/microsoft/vscode-json-languageservice/issues/212)) is still an open question.

## Why I care

I spend a lot of time looking at API contracts from the outside, and JSON Schema is the connective tissue under almost all of them. It sits under OpenAPI, AsyncAPI and MCP tool definitions. When the editor that most developers use to write those contracts only half understands the current version of the standard, people either stay on draft-07 or write 2020-12 that nothing checks. Neither is good for the API economy, and increasingly neither is good for the agents reading those contracts to decide how to call an API.

So I am glad to see this land, and gladder to see how it landed: an implementer at a large company, a specification community showing up with test cases, and outside contributors picking up the follow-up issues. You can find the language service in the [tools catalog](https://tools.apievangelist.com/store/vscode-json-languageservice/), alongside the rest of the tooling for [JSON Schema](https://standards.apievangelist.com/store/json-schema/). If your schemas start lighting up differently in VS Code this fall, this is probably why, and most of the time the editor is now the one that is right.
