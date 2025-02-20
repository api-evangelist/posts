---
published: true
layout: post
title: OpenAPI Specifications For 642 Of The Schema.org Types
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/schema-org-api-definitions.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Schema
  - Specifications
  - Schema.org
  - Open
  - 4
---
[![](https://s3.amazonaws.com/kinlane-productions2/schema-org/schema-org.png)](https://schema.org)

I am gearing up for another wave of [API definition](http://definitions.apievangelist.com/) work, so I am taking the opportunity to produce some more tooling that assists me in the process. One of the tools I want to build, is a simple solution for walking me through one or many OpenAPI Specs, and push me to make sure every parameter has a complete set of descriptions. I possess amazing powers of bullshit, and can craft default description for almost anything I come across, but it would be nice to have an an ever evolving autocomplete dictionary to augment my existing super powers. 

I already have [an APIs.json driven autocomplete tool, that loops through all the parameters within the OpenAPI Specs that are indexed](http://apis.json.autocomplete.apievangelist.com/). I just needed a rich set of fields and parameters to pull from -- [Schema.org](https://schema.org). The rich vocabulary that is Schema.org possesses 992 properties across 642 schema types. I've long wanted to craft OpenAPI Specs for Schema.org, but needed a reason to help push things forward, and this is a perfect opportunity to kick things off.

[As a starting point, I created 642 separate OpenAPI Specs](http://schema.org.apis.apievangelist.com/). One for each of the schema types. I already have an API that will generate an OpenAPI Spec from any JSON schema, building out GET, POST, PUT, and DELETE methods, as well as a default 200 response, and connecting it to the schema for the API response definition. As I was doing the work I realized that I didn't want to limit the OpenAPI Specs to just the JSON version, so as I generated I also published a YAML version.

[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/schema-org-api-definitions.png)](http://schema.org.apis.apievangelist.com/)

Next I'm going to use [these 642 OpenAPI Specs as an autocomplete index](https://github.com/api-evangelist-tools/schema-org-openapi-specs/tree/gh-pages/api-commons) for helping me quickly fluff up the parameters of other existing API definitions. Next I'll work on wiring up the hierarchies and relationships present in the Schema.org definitions. Right now, none of the OpenAPI Specs will validate as the parameter types aren't all valid, but I didn't want to lose the object references. 

Beyond being an autocomplete index which I can use across my micro tools for working with API definitions, I am thinking this Schema.org work will bear a shit ton of fruit in future work. I would like to have API implementations for many of the more common Schema.org types, allowing me to help folks design, and deploy Schema.org compliant APIs. Something that I feel will go a long way to help stabilize and standardize APIs, by helping them speak using a more common vocabulary.