---
published: true
layout: post
title: My Rabbit Warren of JSON Expressions, References ($ref), Queries, or Pointers
date: 2026-01-06T09:00:00.000Z
tags:
  - JSON
  - YAML
  - Expressions
  - References
  - Queries
  - Pointers
  - JSONPath
  - JMESPath
  - JSON Pointer
  - ABNF
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-banana-subway-stairs.jpeg
---
I’ve been down each of these rabbit holes before. I’ve paid really smart people to go down these rabbit holes. But honestly, what I am talking about is actually a “rabbit warren”. I know we all like to say “going down the rabbit hole”, but once you’ve explored this realm, you realize it is much more than that, and realm where you literally can lose your mind in—-I have seen it happen. But, before we get started, let’s explain what a rabbit warren is…

***“A lot of interconnected rabbit holes are called a warren, while figuratively, many "rabbit holes" refer to a complex system of digressions or an engrossing, confusing investigative path, often described as a maze, labyrinth, or a series of linked dilemmas, predicaments, or complexities.”***

There is one portion of this rabbit warren I know may of you are familiar with—the JSON Schema, OpenAPI, or AsyncAPI reference, or **$ref**. I set out to do a fresh explainer on this for myself and my team on the $ref, but I have questions when it comes to the words we use, let alone the approach, specification, or RFC we adopt. In short, our world is made up of massive amounts of JSON and YAML. Huge, unfathomable amounts of JSON and YAML. And to be able to find the signal in the noise you need a way to “reference” all of the little objects that are defined with JSON and YAML, and ideally we move to a more reusable approach to all of the objects that we depend upon to do business.

I still don’t feel like I am making sense here, but let’s see if I can do better. This isn’t yet another story about $ref. It is about perpetually finding the signal in the noise and reusing the schema objects we need, something my team at [Naftiko](https://naftiko.io) has to have a handle on when it comes to defining [capabilities](https://naftiko.io/blog/introducing-a-new-foundation-for-capability-driven-integration-the-nafitko-engine)—the central unit of JSON or YAML in the Naftiko integration and automation universe. I will be doing a lot of research into how others are handling this, but I wanted to start with the portions of this rabbit warren I am most familiar with and have been investing in for the last five years, beginning with the most recent advancement out of the Arrazzo specification.

## Expressions
The Arazzo specification is a workflow specification from the OpenAPI Iniative. The very smart [Frank Kilcommons](https://www.linkedin.com/in/frank-kilcommins/) has “done the work” on the Arazzo specification. I’ll let you read up on [the deep dive for the Arazzo Specification that Frank has provided](https://swagger.io/blog/the-arazzo-specification-a-deep-dive/), but I want to zoom in on a single paragraph and discussion, which is a significant piece of work that Frank (and others) have done on this issue. 

***If you are familiar with the OpenAPI Specification (OAS), or indeed its sister specification AsyncAPI, then the Arazzo Specification should feel familiar to you. One noticeable deviation relates to how referencing reusable components works within Arazzo. Rather than using the OpenAPI $ref mechanism (which clashes with the JSON Schema keyword $ref), Arazzo uses a runtime expression syntax to specify references which are not a JSON Schema object (for JSON Schema object referencing, continue to use $ref as that’s well defined in the JSON Schema).**

I highly recommend looking at the details of the [Arazzo Runtime Expressions](https://spec.openapis.org/arazzo/latest.html#runtime-expressions), which uses [Augmented BNF for Syntax Specifications (ABNF)](https://www.rfc-editor.org/rfc/rfc5234.html) to express itself—there is [a GitHub issue with a little more color on the conversation](https://github.com/OAI/Arazzo-Specification/issues/181). I appreciate the work here Frank, and team. The ABNF was a lifeline out of the $ref madness which I’ve suffered from for some time. But I know there is still more I need to learn, before I have the answers I am looking for. You see, I am look to define “expressions” across many known specifications, not just OpenAPI. But this will have to be another post. We will need to look a little bit at references before we get any closer to what I am talking about.

## References
Next up is the reference, or more lovingly known as the “$ref”. If you have done any serious work with OpenAPI, AsyncAPI, or JSON Schema, you know what I am talking about. The $ref string value contains a URI [RFC3986], which identifies the value being referenced. You can find information about this from [OpenAPI](https://spec.openapis.org/oas/v3.2.0.html#relative-references-in-api-description-uris), also [AsyncAPI](https://www.asyncapi.com/docs/reference/specification/v3.0.0#referenceObject), but even more importantly, from [JSON Schema](https://json-schema.org/understanding-json-schema/structuring#dollarref]. To understand this portion of the rabbit warren I recommend reading The Reference Rabbit Hole - https://www.asyncapi.com/blog/the-reference-rabbit-hole, and JSON Schema Bundling - https://json-schema.org/blog/posts/bundling-json-schema-compound-documents#bundling-simple-external-resources. Two seminole pieces on this portion of the rabbit warren, that I have invested in, and lost myself as well as a few co-workers as we work to make sense of WTF is happening.

## Queries
Next up for me is queries. Frank chose to use the word "expressions" over "references", but I’ve been living in the queries realm from my governance vantage point with Spectral and Vacuum Rules, both of which uses JSONPath to query portions of JSON artifacts. I write a lot of JSONPath for OpenAPI, AsyncAPI, and JSON Schema. In this work I am "querying" for the sake of exectuing rules against the JSON or YAML am governing. I am querying for specific values within all or part of a JSON artifact. [JSONPath, or RFC 9535 is a “Query Expressions for JSON”](https://www.rfc-editor.org/rfc/rfc9535.html), which defines a string syntax for selecting and extracting JSON (RFC 8259) values from within a given JSON value (interesting usage of “query expressions”). Now alternatively [JMESPath[(https://jmespath.org/) is language is described in an ABNF grammar with a complete specification that ensures that the language syntax is precisely defined. I know many people who state that JSONPath is problematic, and JMESPath is preferred, but every spec and tooling I work with uses JSONPath, and it is what I’ve become familiar with.

## Pointers
While going down the JSONPath and JMESPath rabbit holes I also was reminded of [JavaScript Object Notation (JSON) Pointer](https://datatracker.ietf.org/doc/html/rfc6901), a string syntax for identifying a specific value within a JavaScript Object Notation (JSON) document [RFC4627]. I do not have any familiarity with JSON Pointer, and will dive in deeper, but because of the phrasing, and having come across the specification other places, I felt it was worth including in this. 

## Vocabulary
So far we have expressions, references, queries, and pointers, but I also hear syntax, grammar and language used. With one common component - [Augmented BNF for Syntax Specifications, or ABNF](https://www.rfc-editor.org/rfc/rfc5234.html). You can find [Arazzo’s ABNF grammar](https://spec.openapis.org/arazzo/latest.html#runtime-expressions), as well as [JSONPath’s ABNF grammar](https://datatracker.ietf.org/doc/html/rfc9535#name-collected-abnf-grammars), then [JMESPath ABNF grammar](https://jmespath.org/specification.html#grammar), and [JSON Pointers ABNF grammar](https://www.rfc-editor.org/rfc/rfc6901.html#section-3). This is the common linkage I was seeking in this story. I will need to get more fluent in ABNF grammar, and how Arazzo, JSONPath, JMESPath, and JSON Pointer’s use it. However, I don’t think my entire solution lies here, as I need to also come at this from the semantic and storytelling perspective, and think more deeply about whether we are expressing, referencing, querying, or pointing here. I am comfortable with saying I am looking to establish the grammar for working with the current state JSON and YAML sprawl, but need to think about the actions we want/need to take more.

Anyways. I am unsure if this blog post makes any sense. It is pretty lofty shit. You kind of have to have been in this world to make your way through it. I am also guessing there are things I am missing, which is why I write these style posts. Because someone really super smart and pedantic will come out of the woodwork to tell me I am wrong or missing something. I love that. I really do. It is how I learn. Anyways, enough playing around in the rabbit warren for now. I need to spend some time looking at how gateway, CLI, and other tooling are doing mappings, references, bundling, unbundling, and a whole other set of words we use to talk about how we work across all of this JSON and YAML sprawl. If you have anything to add to this chaos, please ping me at kinlane@naftiko.io, I’d love to learn more. 
