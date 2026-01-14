---
published: true
layout: post
title: Governance Rules as Guardrails in a Strongly Typed Journey
date: 2026-01-14T09:00:00.000Z
tags:
  - Schema
  - JSON Schema
  - Rules
  - Linting
  - Lifecycle
  - Products
  - Capabilities
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-railroad-tracks-rocks.jpeg
---
I am always fascinated by how the same people who are TypeScript believers often become advocates against using a schema-driven approach anywhere beyond “the code”. I am a big fan of having a schema for all the words we use to describe what we do. It helps us get on the same page, stay on the same page over time, and help teams move forward more confidently in the same direction.

Governance rules for me have long been guard rails for any API journey. Whether Spectral, Vacuum, or other variation, you should be defining a schema for what you are capable of, the lifecycle you are repeating across teams, as well as the product you are building. You should have a JSON schema ensuring we are saying the same thing, and have a series of rules that can help step you through this perpetually validated and strongly typed journey.

Most implementations of Spectral and Vacuum rules focus exclusively on OpenAPI and maybe also AsyncAPI, but they should be available for any schema you are using, especially the ones that align engineering with business operations. In engineering-led governance it is common to have the lion share of rules be focused on errors, with the occasional warning, with very rare use of info or hint as guard rails—combined with the default state of showing everything wrong all at once.

You can just as easily only show the results of one rule at a time, and even prioritize info and hints over errors and warnings, take one step at a time in the right collective direction. There is no reason you can’t have a lifecycle, product, or capability schema that is used to align your engineering work with business, and there is no reason you can’t use incrementally to walk teams collectively through an agreed upon lifecycle, product, or capability definition, in addition to governing the technical details of your OpenAPI and AsyncAPI.
