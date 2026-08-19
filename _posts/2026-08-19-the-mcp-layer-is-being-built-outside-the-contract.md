---
published: true
layout: post
title: 'The MCP Layer Is Being Built Outside The Contract'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-mcp-layer-is-being-built-outside-the-contract.png
date: 2026-08-19
author: Kin Lane
tags:
  - MCP
  - OpenAPI
  - Agents
  - Extensions
  - Arazzo
  - Standards
  - Discovery
  - APIs
---
Almost nobody hand-writes an [MCP](https://modelcontextprotocol.io) server. They generate one from an OpenAPI document. Speakeasy and Stainless will emit you a TypeScript server from your spec. Kong and Apigee will project your existing API as MCP at the gateway without you writing any code at all. Postman will build one from a request collection. Zuplo will host one for you from an uploaded document. That is at least seven vendors solving the same problem from the same starting point, which usually means a convention is forming.

So I went looking for the convention. I scanned every OpenAPI document I have gathered across the API Evangelist network — 17,615 documents from 7,213 providers, as their authors published them, not cleaned up or normalized by me — and counted every `x-` extension key in them. That is 1,993 distinct extensions across 486,028 occurrences. Then I pulled out everything related to projecting an API onto a tool surface for an agent.

Ten providers. Out of 7,213. That is 0.14%, and it comes to thirteen different extension keys.

Here is the whole thing, which is short enough to print:

| Extension | Where it sits | Shape | Providers |
|---|---|---|---|
| `x-mcp-group` | path item | array | 1 |
| `x-mcp` | operation | object *or* boolean | 3 |
| `x-mcp-tool` | operation | boolean | 1 |
| `x-tool-description` | operation | string | 1 |
| `x-ctctmcp-allow` | operation | boolean | 1 |
| `x-mcp-instructions` | operation | string | 1 |
| `x-mcp-tool-include-fields` | operation | array | 1 |
| `x-mcp-tool-opaque-fields` | operation | array | 1 |
| `x-mcp-tool-include-query-params` | operation | marker | 1 |
| `x-mcp-server` | info + operation | object | 2 |
| `x-mcp-required-fields` | operation | array | 1 |
| `x-ctctmcp-tool-desc` | operation | string | 1 |
| `x-agentic-access` | operation | object | 1 |

Read that as a design document written by ten strangers who never spoke to each other. Four different keys mean "expose this operation as a tool." Three different keys mean "here is the description a model should read instead of the human one." One key is a boolean in some documents and a structured object in others, under the same name, depending on who wrote it.

## Three vendors shipped `x-mcp` and they all mean something different

This is the part that should worry people, because it is not going to get easier to fix.

[Redocly](https://redocly.com/docs/realm/content/api-docs/openapi-extensions/x-mcp) documents `x-mcp` on the root object only. It carries `protocolVersion`, `servers`, `capabilities`, `tools`, `resources`, and `prompts`. It **describes an MCP server that already exists**, so a documentation site can render it.

[openapi-mcp-generator](https://github.com/harsha-iiiv/openapi-mcp-generator), a widely used open source CLI, uses `x-mcp` at the root, path, *and* operation level. It is a boolean, it defaults to include, and it has a precedence rule where operation beats path beats root. It **selects which operations become tools**.

And then there are the documents in the wild, where `x-mcp` shows up on operations carrying sometimes an object and sometimes a boolean, with no published definition anywhere that I can find.

A tool that reads `x-mcp` cannot know which of those three it has without guessing from where the key sits and what type its value is. Separately, [Zuplo](https://zuplo.com/docs/dev-portal/zudoku/openapi-extensions/x-mcp-server) ships `x-mcp-server` at the operation level so its developer portal can render an install card, which constrains that name too.

None of these is registered with the OpenAPI Initiative. The OAI runs an [Extension Field Registry](https://spec.openapis.org/registry/extension/) and an [Extension Field Namespace Registry](https://spec.openapis.org/registry/namespace/) whose entire stated purpose is to let people define extensions "while avoiding name collisions." There are thirty-six extensions and eight namespaces registered. Not one of them is MCP. The mechanism built precisely for this problem is sitting unused while the problem happens.

## The most interesting number in the whole exercise is zero

Speakeasy documents an extension called `x-speakeasy-mcp` that carries tool name, description, and scopes. It is the most thoughtfully designed answer to this problem that I found in public. It appears in my corpus **zero times**, while thirty-four other Speakeasy extensions show up across many providers.

That is not evidence that nobody uses it. It is evidence of something more interesting. Speakeasy's own documentation describes applying it through an [Overlay](https://spec.openapis.org/overlay/latest.html) at build time — and an Overlay-applied key never reaches the document the provider publishes. The Overlay gets applied, the server gets generated, and the result gets thrown away.

So the work is being done. Somebody sat down and decided which of their 340 operations should become 25 well-named tools, and wrote good model-facing descriptions for each one. That is real, expensive, genuinely difficult work. And then it evaporated into a build pipeline, which means the published contract — the artifact that every other consumer, cataloger, gateway, and agent in the world actually reads — has no idea its own API has a tool surface.

That is the sentence I keep coming back to. **The MCP layer is being built outside the contract.** Not badly. Not by unserious people. Just somewhere that nobody else can see, in a format nobody else can read, that the provider cannot move to a different vendor even if they want to.

## What the mapping actually needs

Seven vendors independently built a mechanism for the same short list of decisions. When that many people arrive at the same list separately, the list is probably right:

**Which operations become tools.** One endpoint is not one good tool. Every single vendor built a filter, because dumping every operation into an agent's context window degrades the model and costs a fortune. Speakeasy has scopes, Stainless documents tool filtering as a headline feature, Apigee lets you designate operations, Postman does one tool per selected request.

**What the tool is called.** `operationId` was designed to generate SDK method names. It is frequently absent, auto-generated, or shaped for a language binding. `getUsersV2ById_1` is not a tool name.

**How it is described to a model.** Your `description` field is written for a developer who has your documentation open in another tab. A tool description is a prompt fragment — it has to say when to reach for this and, more importantly, what it does not do. Different audience, different document. Three providers and Speakeasy all invented a second field to hold it.

**How the tools are grouped.** A read-only group, an admin group. Though I think OpenAPI 3.2 already solved this one — the enriched Tag Object with `summary`, `parent`, and `kind` is very close to sufficient, and I would rather people use it than invent a fourth grouping mechanism.

**Which fields go in and out.** Windmill needed four separate extension keys to express which response fields to surface, which to pass through opaquely, and which query parameters to lift into the tool schema. Tool schemas are not HTTP schemas.

**And how dangerous the call is.** This last one is different from the others, and it is the one I actually care about.

## OpenAPI cannot tell you if an operation is destructive

MCP defines tool annotations — `readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`. Every generator has to populate them, and OpenAPI gives them nothing to populate them from. So they infer it from the HTTP method.

The method gets you most of the way on read versus write. It gets you nowhere on the rest. [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) defines safety and idempotency at the **method** level, and real APIs deviate from their method's defaults constantly. A `DELETE` that is a soft delete with thirty-day recovery is not destructive in any sense an agent cares about. A `POST` that charges a credit card is irreversible in a way that no amount of reading the path will tell you. A `POST /search` is a read.

There is no field in OpenAPI to say `destructive: false` on that soft-delete `DELETE`. The provider is the only party on earth who knows it, and the specification gives them no place to write it down. That is not an MCP problem. Test harnesses guess at it. Retry logic guesses at it. Governance tooling guesses at it. Change review guesses at it. Agents just guess at it more visibly and with more money on the line.

## Prompts are more interesting than I first thought

I originally wrote off MCP prompts as authored content with no home in OpenAPI — somebody wrote some text, that is not an API artifact, move along. I was wrong, and the correction is the most useful thing I got out of this whole exercise.

"Prompt" is three things wearing one coat.

**The first is argument suggestion**, and OpenAPI has held the data for years. MCP servers can offer completions for a prompt argument so a client suggests valid values instead of making a user guess. The source for that is `enum`, `default`, and `examples` on your parameters. An `enum` is a closed candidate list. A `default` is a suggested starting value. An Example Object already carries a `summary` and `description` explaining *why* a value is meaningful, which is exactly the text a suggestion interface wants. Nothing needs to be invented. It needs to be wired up.

**The second is the saved query**, and this is the one that surprised me. A named, described, parameterized, suggested invocation — that is the genuinely useful core of a prompt, and it maps almost exactly onto [Arazzo](https://spec.openapis.org/arazzo/latest.html), which the OpenAPI Initiative already publishes:

| MCP Prompt | Arazzo Workflow |
|---|---|
| `name` | `workflowId` |
| `title` | `summary` |
| `description` | `description` |
| `arguments` | `inputs` |
| what it invokes | `steps` |

A single-step Arazzo workflow with inputs **is** a saved query. And because `inputs` is a JSON Schema, the first layer composes straight into the second one for free — the `enum` on your underlying parameter becomes the completion list for the prompt argument. That is a clean trickle-down from parameter to workflow to agent, and it already works structurally. Nobody is reading it that way yet. Bump.sh has argued that [OpenAPI will not make your APIs AI-ready but Arazzo can](https://bump.sh/blog/make-your-apis-ai-ready/), and they are right about the direction, but the prompt-shaped half of it is still unspecified.

**The third is free-form authored instruction**, and that one genuinely has no home in either specification. I was only right about a third of it.

## What I think should happen

I am not going to shepherd a specification proposal through the OpenAPI Initiative. That is a real job with a long tail of meetings, and it belongs to somebody with more skin in this particular game than I have. But I have the measurements, and I would rather put them where the people doing that work can use them.

There is already an open discussion on the OpenAPI Specification repository — [#5255, "Standardized operation intent/effects metadata for agent-ready OpenAPI"](https://github.com/OAI/OpenAPI-Specification/discussions/5255) — that is asking almost exactly the right question, and the maintainers' answer was reasonable: incubate it as an extension first, because these fields are not an industry-wide standard between agents yet. I think that answer was correct in March and is getting less correct every month, because the thing that has happened since is not convergence. It is three vendors shipping the same key name with three different meanings.

So, concretely, four things I would like to see, none of which require me to own an issue:

**Publish your applied Overlay.** If you are generating an MCP server from your OpenAPI, whatever you applied to get there is a description of your API's tool surface. Ship it next to the contract. Right now that knowledge dies in a build step, and it is the single cheapest fix on this list.

**Somebody register `x-mcp` with the OAI.** The registry exists. Redocly's shape is documented and shipped first, and codifying it would settle the collision without touching the specification or waiting on a release. This is a pull request, not a campaign.

**Use the Tag Object for grouping.** 3.2 already gave you `summary`, `parent`, and `kind`. Please do not invent a fourth way to group tools.

**Give us a way to say an operation is destructive.** This is the one I would actually push for as a first-class field rather than an extension, because it is not an agent feature. It is a fact about an HTTP operation that the specification has never had a place for, and every consumer that has ever guessed at it from the method has been guessing.

The pattern here is old and the OpenAPI Initiative has run it before. Tags were the most-extended part of the specification for years, everyone built their own grouping mechanism, and eventually the project paved the cowpath and shipped it properly in 3.2. `deprecated: true` made the same journey from extension to first-class field. This is that, at an earlier and messier stage, with the added complication that the cowpath has already forked.

The work is being done. It is just being done where nobody can see it.
