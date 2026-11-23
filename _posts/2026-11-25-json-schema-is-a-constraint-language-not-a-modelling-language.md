---
published: true
layout: post
title: 'JSON Schema Is A Constraint Language, Not A Modelling Language'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/json-schema-is-a-constraint-language-not-a-modelling-language.png
date: 2026-11-25 21:00:00 +0000
author: Kin Lane
tags:
  - JSON Schema
  - Standards
  - Validation
  - Schema
  - Conversations
---
I sat in on the JSON Schema office hours back in September, and during a walkthrough of a new cheat sheet style guide to JSON Schema, Juan said something that I think is the clearest explanation of JSON Schema I have heard. It was a short aside, about sixteen minutes in, and it reframes how most of us think about writing schemas.

## What Juan Said

The context was a documentation page that uses collapsed accordion sections, so a reader starts with just `$schema` and `type`, then expands into more properties and constraints as they need them. Juan liked it for a specific reason:

"JSON Schema is designed as a constraint-driven language. Every keyword you add constrains the instance universe a bit more. Compared to a modelling language, where what you add is what you describe, with JSON Schema the empty schema allows everything, and keywords restrict. A different design of type system, and it's what makes it powerful."

He added that the accordions touch on exactly that: when you expand them, you are adding new things as constraints.

## The Empty Schema Allows Everything

This is the part people miss. An empty schema, `{}`, is valid, and every JSON document passes it. Nothing is described, so nothing is forbidden. Add `type: object`, and you have ruled out strings, numbers, arrays and everything else. Add `required: ["id"]`, and you have ruled out every object without an `id`. Add `additionalProperties: false`, and you have ruled out every object with keys you did not list.

Each keyword shrinks the set of acceptable documents. You are not building up a picture of the thing. You are carving away everything it is not.

## Why That Matters In Practice

Most developers come to JSON Schema from classes, structs, or database tables, which are modelling tools. In a class, the fields you declare are the fields that exist. So people write a schema listing some properties and assume they have described the object. Then they are surprised when a document with a misspelled field, or a field they never declared, validates just fine. It validates because they never said it could not exist. Listing `properties` describes what those properties must look like if they show up. It does not say they have to show up, and it does not say nothing else can.

It is a pattern I run into in OpenAPI files all the time: response schemas that list properties without `required`, without `additionalProperties`, without types on half the fields. As documentation, they look complete. As constraints, they constrain very little. A validator, a code generator, or an agent reading that schema learns a lot less than the author thinks they told it.

Once you think in constraints, the questions you ask while writing a schema change. Not "what fields does this object have?" but "what am I willing to reject?" Which fields must be present? Can there be extras? What range is acceptable for this number? What pattern must this string match? Every answer is another keyword, and every keyword is a decision about what fails.

## Annotations Are Something Else

The same session drew a useful line on the other side. Steph, walking through her guide, pointed out that annotations like `title`, `description`, `examples`, `default` and `deprecated` are not constraints at all, just information about the intent of a schema. They do not change what validates.

That distinction lines up with Juan's framing nicely. Constraint keywords shrink the universe of valid instances. Annotation keywords tell humans and tools what the shape means. Good schemas need both, and it helps to know which one you are writing at any given moment.

## Why This Is Powerful

Juan called the constraint-driven design what makes JSON Schema powerful, and I agree. Because the starting point is "anything goes," schemas compose cleanly. You can layer constraints with `allOf`, add conditions, reuse definitions, and each addition only ever narrows the result. It is also why JSON Schema can apply to YAML, TOML and anything else that maps to JSON, as Juan pointed out on the same call. It is not describing a data structure in some language. It is describing which instances are acceptable.

It is also what makes schemas useful for keeping machines on a narrow path. If you want an agent or a model to produce only acceptable output, you want a language built to reject everything else.

## The Takeaway

Stop thinking of a JSON Schema as a description of your data, and start thinking of it as a list of everything you refuse to accept. The empty schema allows everything. Every keyword you add is a promise that something will fail. Credit to Juan for putting it so plainly, and to Steph for building a guide that makes the idea visible one accordion at a time.
