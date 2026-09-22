---
published: true
layout: post
title: 'Put The LLM On A JSON Schema Leash, And Give Markdown A Vocabulary'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/put-the-llm-on-a-json-schema-leash-and-give-markdown-a-vocabulary.png
date: 2026-09-22
author: Kin Lane
tags:
  - JSON Schema
  - Markdown
  - Vocabularies
  - LLMs
  - Validation
  - Agents
  - APIs.io
  - APIs
---
I went to the JSON Schema office hours today, and the second half of the call turned into an idea I have not been able to stop thinking about since. It began with a small aside. One participant, Steph, has been learning JSON Schema by writing their own documentation for it, and mentioned that what they really want is a *Markdown* schema. Skill files are Markdown. LLM responses are Markdown. There is a lot of it moving around and not much structure behind it.

Juan Cruz Viotti, who chairs the office hours, answered that this already fits inside JSON Schema. The content vocabulary has been there for years. Picture a schema like this:

```yaml
type: string
contentMediaType: text/markdown
# ...and then keywords from a Markdown vocabulary
```

It is spec-compliant today. `type: string` says the value is a string, and `contentMediaType` says the string holds Markdown. A custom vocabulary would then add the keywords that describe what that Markdown must look like, and any implementation that adopts the vocabulary could evaluate it. Because it is still JSON Schema, it applies to a Markdown field inside a JSON object just as well as to a whole document. That is the common case: a JSON payload with one `description` or `body` field full of Markdown and no rules at all.

The vocabulary does not exist yet. Juan volunteered to implement it in his own tooling and the JSON Schema CLI. Steph volunteered to draft the keywords as a guinea pig for a *process* for custom vocabularies, which the community has been discussing how to encourage. There was also talk of taking a version one to the IETF, so that implementers can commit to building it before anyone asks them to adopt it. That breaks the chicken-and-egg problem that leaves most custom vocabularies as a spec nobody runs.

Steph's own use case is a good one: a Markdown file that declares a Minecraft server's configuration. It has a software section with a name and version, plugins listed with their versions, and a paragraph explaining what the server is for. A person can follow it by hand. With a schema over it, software can parse it and build the server. The same file is readable by a human and by a machine. Juan pointed out that awesome lists are the same problem. They are Markdown files with an implied structure, checked today by a purpose-built linter instead of a schema.

## Why this matters for APIs and LLMs

The part that matters most to me is where Juan took it next. OpenAI and Anthropic both do structured outputs using JSON Schema. If a JSON Schema can describe Markdown, you can ask a model to respond in Markdown *that follows a schema*. That keeps the output people actually want to read while giving up none of the validation you get with JSON.

That is where I came in, because I have been circling the same idea from the API side. Everyone treats structured output as a feature of a single request: you pass a schema and hope. I would rather treat it as a contract on the model itself.

- **Inputs:** here are the media types this model accepts, and here are the JSON Schemas from a registry that those inputs must validate against.
- **Outputs:** here are the media types it can return, and the schemas those must validate against.
- **Anything else,** in or out, is rejected.

That is what an API gateway already does for an API. Juan pointed out that some gateways already let you load an OpenAPI description for exactly that back-and-forth. He also named what it is: keeping the LLM on a leash. The tighter the leash, the better the output. That is true of code generation, and it is true of API interactions.

The leash is only as tight as the schemas, though. `type: object` with no required properties is not a leash. What makes it work is how complete the schemas are: the patterns, enums, formats and bounds. That is also why the Markdown vocabulary matters to me. Today a model that is allowed to return JSON can be constrained. A model that is allowed to return Markdown cannot, and Markdown is what most of these models return most of the time.

## What the catalog says

I looked at the OpenAPI documents in the apis.io catalog to see how much of this gap is already showing up in APIs.

- **8,115 providers** in the catalog publish an OpenAPI.
- **39** of them declare a `text/markdown` media type somewhere in their contract. They include Together AI, Pulumi, Obsidian, LocalAI, ZenRows, Airia, Process Street and Tana. All of them return Markdown today, and none can say anything about its shape beyond "it is text."
- **108** use `contentMediaType` at all, overwhelmingly for `text/plain`, `application/json` and `application/octet-stream`.
- **Zero** use `contentMediaType: text/markdown`, the exact hook the vocabulary would hang off.

On the other side are the skills. I counted 2,568 Agent Skills across 679 providers that the providers wrote themselves. Every one is a Markdown file with YAML frontmatter, and the frontmatter is the only part with any agreed structure. Below the frontmatter it is prose, and each author invents its shape.

So the Markdown is already here in the APIs and in the instructions agents read, and the tooling to validate it is not. That is a big opportunity. JSON Schema is the most widely adopted, language-agnostic type system we have, and it can extend into the content types these systems actually exchange.

## What I would like to see

**A Markdown vocabulary, drafted in public.** Headings that must exist, sections that must appear in order, lists that must hold a certain number of items, code blocks in a given language, links that must resolve. Start with what people validate by hand today. Skill files and awesome lists are both ready-made test corpora.

**A process for custom vocabularies that others can repeat.** Media is the obvious next case. Juan mentioned audio and speech-generation APIs, and an image vocabulary with minimum dimensions, ratios and byte sizes under `contentMediaType: image/png`. Markdown is a good first run because it is small, and because everybody is producing it right now.

**Models and gateways bound to a schema registry.** Declare the media types and schemas a model accepts and returns, and enforce them at the edge, not in the prompt. I want to see someone build this. I would happily point the apis.io catalog's schemas at it.

JSON Schema office hours are open, and this is exactly the kind of work where one more person drafting keywords or writing a second implementation makes the difference between an idea and a standard. Show up.
