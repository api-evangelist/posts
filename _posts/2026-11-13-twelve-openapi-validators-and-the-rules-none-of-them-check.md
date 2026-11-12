---
published: true
layout: post
title: 'Twelve OpenAPI Validators And The Rules None Of Them Check'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/twelve-openapi-validators-and-the-rules-none-of-them-check.png
date: 2026-11-13 18:00:00 +0000
author: Kin Lane
tags:
  - OpenAPI
  - Specifications
  - Tooling
  - Validation
  - Conformance
---
When an OpenAPI validator says your document is valid, what has it actually checked? I have assumed the answer for years without ever measuring it. So this week I built an [OpenAPI conformance suite](https://openapi-conformance.apievangelist.com), a sibling to the [Arazzo one](https://arazzo-conformance.apievangelist.com), and ran twelve of the most widely used open-source validators, parsers and linters against 304 OpenAPI documents.

Each document is either valid or breaks exactly one rule. Every tool is judged on one question: did it call the document valid or invalid, and was it right?

## Where The Cases Come From

Most of the cases are the OpenAPI Initiative's own. I copy every schema test the OAI keeps, unmodified: the pass and fail tests for 3.1, 3.2 and the 3.3 draft, plus the 3.0 example documents. They are re-pulled from the OAI's branches every day, and each run records the commits it used.

The rest are mine, 113 cases across 3.0.4, 3.1.1 and 3.2.0. Each one starts from the same valid document and changes one thing. Some exercise features a tool might not know, like webhooks, `$self`, the `query` method or tag parents. Others break a rule that only the specification's prose states:

- operationIds must be unique
- every path template variable needs a path parameter, and every path parameter needs a variable
- `$ref`s must resolve
- a security requirement must name a scheme that is declared
- tag names must be unique
- a link's `operationId` must name an operation that exists

No JSON Schema can check these, so they are where a validator earns its name.

The reference row is the official OAI schema, run the way the OAI's own test runner does. That detail mattered. My first reference used ajv, which rejected 45 of the OAI's own valid test documents because it mis-resolves the 3.1 dialect. If I had not checked the reference against the OAI's tests first, every tool would have been scored against a broken baseline.

## How The Tools Did

On OpenAPI 3.1, right verdicts out of 83:

| Tool | Right |
|---|---|
| vacuum | 75 |
| openapi-spec-validator (Python) | 73 |
| Official OAI schema (reference) | 73 |
| @seriousme/openapi-schema-validator | 72 |
| Redocly CLI | 71 |
| Spectral | 69 |
| @readme/openapi-parser | 66 |
| kin-openapi (Go) | 66 |
| openapi-generator (Java) | 61 |
| @apidevtools/swagger-parser | 57 |
| Microsoft OpenAPI.NET (hidi) | 54 |
| Speakeasy openapi CLI | 54 |

Linters are judged on their errors only, so a style warning never fails a valid document. The [report](https://openapi-conformance.apievangelist.com) breaks every score down by version, by valid versus invalid, and by schema versus prose rules. You can hover any cell to see what the tool actually said.

Three of the twelve still cannot read 3.2, more than a year after it shipped. swagger-parser and the ReadMe parser say so. openapi-generator doesn't recognise the version at all: a 3.2 document falls through to its Swagger 1.x converter, which fails to parse it. That is the parser most generated SDKs sit on. It matches what I found in [the census last month](https://apievangelist.com/2026/10/09/a-year-after-openapi-3-2-most-api-tooling-cannot-read-it/), measured this time instead of read from the docs.

## The Rules Nobody Checks

The prose-only rules are where the tools spread out. Here is how many of the eleven tools caught each one on 3.1:

| Rule | Tools that catch it |
|---|---|
| Duplicate operationId | 8 |
| `$ref` that does not resolve | 8 |
| Path template variable with no parameter | 7 |
| Path parameter with no template variable | 7 |
| Duplicate parameter | 7 |
| Duplicate tag name | 5 |
| Two paths that differ only in variable names | 4 |
| Server variable default not in its enum | 3 |
| Security requirement naming an undeclared scheme | 2 |
| Link to an operationId that does not exist | 0 |

No tool catches a link that points at an operation that isn't there. Only vacuum and kin-openapi notice a security requirement naming a scheme nobody declared. Spectral sees it, but only as a warning. Three tools, openapi-spec-validator, Speakeasy and OpenAPI.NET, call a document with a dangling `$ref` valid.

kin-openapi is the most interesting result. It catches 8 of the 10 prose-rule violations, the most of any tool, yet it sits mid-table overall. It still doesn't know `components.pathItems`, `$self`, tag parents or `in: querystring`. It checks your document thoroughly against an older idea of what OpenAPI is.

## What A Daily Run Already Caught

The suite runs every morning on the latest release of every tool. Its first two runs were a day apart, and vacuum shipped v0.40.0 in between. Three of the OAI's 3.2 fail tests, all about which fields `encoding`, `itemEncoding` and `prefixEncoding` may sit next to, went from rejected to accepted. I can't tell from the outside whether that was intended or a regression. I can tell you it changed, and when.

## What This Does Not Tell You

This measures one thing: whether a tool calls a document valid or invalid, and whether it was right. It does not measure the quality of the messages, how a tool handles a 40,000-line document, or whether a linter's opinions are good ones. A tool can score well here and still be the wrong choice for your pipeline.

The cases are also mine and the OAI's, not the last word. Where the official schema and the specification's prose disagree, the prose wins and the case says so. Today that happens once: the 3.0 schema lists the component key pattern without enforcing it.

I want to know what is missing. If there are OAI tests outside `tests/schema` worth running, tools you depend on that aren't in the twelve, or a case you think I scored wrong, the cases, the runner and every day's results are in [api-evangelist/openapi-conformance](https://github.com/api-evangelist/openapi-conformance). Open an issue.
