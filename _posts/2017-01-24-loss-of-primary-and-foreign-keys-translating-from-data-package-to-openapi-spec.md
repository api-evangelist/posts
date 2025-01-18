---
layout: post
title: Loss Of Primary and Foreign Keys Translating From Data Package to OpenAPI Spec
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bw_database_relationships.png
atomdate: 2017-01-24T17:00:00.000Z
tags:
  - OpenAPI
  - Data
  - Keys
  - Open
---
I am keeping a version of an [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification) in sync [with a Data Package](http://specs.frictionlessdata.io/data-packages/). It's not a perfect sync because the Data Package doesn't describe the surface area of the API, just the underlying data schema used on the backend. During project discussions, one of the concerns that was brought up focused on the loss of primary and foreign key references. During our next discussion, I wanted to have a more coherent explanation of why this was ok, and this post will help me do that.

The [OpenAPI Spec I've created](https://github.com/adopta-agency/open-referral-miami/blob/master/_data/api-commons/openapi-spec.yaml) has each resource in the [Data Package](https://github.com/openreferral/specification/blob/master/datapackage.json) represented but leaves out the database relationships represented by those keys in the backend. The API defines the basic CRUD (Create, Read, Update and Delete) for each resource represented, but allows the relationships to be expressed using the URI. Each item in the Data Package has a corresponding path, and each relationship is available as its own path as well--in this case an example might be /locations, and /locations/services/.

All the relationships are defined and enforced in the URI given for each API requests, and HTTP takes care of the indexing, performance, and other considerations using caching, and other basic building blocks of the web. My friend James Higginbotham ([@launchany](https://twitter.com/launchany)) compared this to the concept of views in database backend speak, and OpenAPI Spec describes the HTTP version of OCI (oracle), or TSQL (MS SQL)--depending on what you speak. As an old database guy I like that, "web views", but relying on the request and responses employed as part of the API design.

My explanation isn't as coherent as I'd like, but this gives me a start. I'm trying to help database folks who are keepers of the backend, and the schema better understands that what I'm doing with OpenAPI Spec augments and evolves their work. I do not want them to think I am looking to replace or compete with what they are bringing to the table. I'll keep working on this argument because I want to be able to be able to better articulate why API design is an important part of the process, and that defining the API surface area using OpenAPI Spec, as well as the data model in play using specifications like JSON Schema and Data Package is an important thing.