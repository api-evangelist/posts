---
published: true
layout: post
title: Baseline OpenAPI Rules For Governance of 3rd-Party APIs
date: 2026-01-14T09:00:00.000Z
tags:
  - OpenAPI
  - Spectral
  - Vacuum
  - Rules
  - Governance
image: >-
  https://kinlane-images.s3.amazonaws.com/shared/copper-circuit-docks-oakland-4.jpeg
---
API governance using Spectral or Vacuum rules changes when you go from governing APIs you are producing to governing 3rd-party APIs you are consuming. It is a simple, but pretty radical shift in how we approach API governance. Governance in a world where you have even less control than you do with internal APIs. 

I crawl Google, Bing, and GitHub looking for APIs. When I do I look for OpenAPI, Postman Collections, and other artifacts, but I also generate OpenAPI from documentation when required. Once I have an OpenAPI 3.2 for any 3rd-party API I come across and are profiling, I run a set of API governance rules against the OpenAPI to validate the compeleteness of an OpenAPI using Spectral, which is different from validating the same OpenAPI using the JSON Schema for OpenAPI 3.2. 

I have a baseline for what I will need as a consumer of that API, but specifically what is a minimum viable set of resources from any service I will be assembling into Naftiko Capabilities.

## Info

- Info Object MUST Exist
- Info MUST Have Title
- Info MUST Have Description

## Servers

- Servers Object MUST Exist
- Servers MUST Have URL
- Servers MUST Have Description

## Tags

- MUST Be a Tag Object
- MUST Be At Least One Tag
- Tags MUST Have a Name
- Tag Names MUST Have First Letter in Each Word Capitalized
- Tags MUST Have a Description

## Operations

- Operation MUST Have a Summary
- Operation MUST Have Description
- Operation MUST Have Identifier
- Operation Identifier MUST Be camelCase
- Operations MUST Have Tags
- Operations MUST Have At Least One Tag
- Operation Tag Names MUST Have First Letter in Each Word Capitalized
- Operations MUST Have a Security Definition

## Parameters

- Parameters MUST Use Referencers
- Parameters MUST Have Descriptions
- Parameters MUST Have Schema

## Request Bodies

- Request Bodies MUST Have Schema
- Request Bodies MUST Use Schema References
- Request Bodies MUST Have Examples
- Request Bodies MUST Use Examples References

## Reponses

- Responses MUST Have Schema
- Responses MUST Use Schema References
- Responses MUST Have Examples
- Responses MUST Use Examples References

## Schema

- Schema MUST Have Description
- Schema MUST Have Type
- Schema Properties MUST Have Description
- Schema Properties MUST Have Type

## Components

- Components MUST Have a Security Schemes
- Components MUST Have a Parameters Property
- Components MUST Have a Examples Property
- Components MUST Have a Schema Property
- Components MUST Have a Headers Property

I don't get pedantic over all of the things in which we govern for when producing APIs. But I need a baseline for variety of experiences, including onboarding, documentation, and sandboxing. I really don't care about the rest. Now I do have separate rulesets that look for all the common and not so common patterns present across APIs, but this ruleset represents my minimum viable governance for 3rd-party APIs.

From here I can certify each API. I can onboard, obtain keys and tokens, and make actual calls to each individual operation to see if it actually works--once an OpenAPI validates using the JSON Schema for an OpenAPI 3.2, passes all of these Spectral rules, and has an x-api-evangelist-certified: true property for each operation--it is certified for use. API governance from the consumer perspective is a much different game than API governance from the producer perspective.