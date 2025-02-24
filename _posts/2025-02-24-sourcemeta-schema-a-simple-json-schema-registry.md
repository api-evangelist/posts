---
published: true
layout: post
title: SourceMeta Schemas - A Simple JSON Schema Registry
tags:
  - Schema
  - Registry
  - Discovery
  - Open Source
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-times-square-corner.jpeg
---
Getting your schema house in order is one of the most important things you can do when it comes to API governance. Schema defines and validates our APIs, but also defines and validates our API operations. So when [Juan Cruz Viotti](https://www.jviotti.com/) publishes [SourceMeta Schema](https://bit.ly/3CUAlFD), a simple JSON Schema registry, it provides a good opportunity for helping begin to get the enterprise schema house in order. Ideally, SourceMeta Schema is used to manage all of the schema used as part of API request and responses, but this is something that will take some time. It can be low hanging fruit though to begin organizing all of the schema you use for API operations--beginning with the following:

- [**OpenAPI**](https://schemas.sourcemeta.com/openapi)
- [**JSON Schema**](https://schemas.sourcemeta.com/jsonschema)
- [**Spectral Rules**](https://github.com/stoplightio/spectral/blob/develop/packages/core/src/ruleset/meta/rule.schema.json)
- [**Vacuum Rules **](https://schemas.sourcemeta.com/pb33f/vacuum)
- [**APIs.json**](https://schemas.sourcemeta.com/apis-json)

These are the fundamental JSON Schema of your API operations, and a good place to start when getting your enterprise schema house in order. The [SourceMeta Schemas registry](https://bit.ly/3CUAlFD) can get set up and begin to be used by teams as part of producing APIs. Once familiarized, teams can begin to apply to centralize and manage schema used as part of each API request and response. Having a simple JSON Schema registry provides a single source of truth for schema, and can help with discovery, versioning, and the other common aspects of managing schema. With a central place to reference, teams can consider the best way to begin weaving into their OpenAPI, APIs.json, and other artifacts they need to produce APIs.

<center><a href="https://bit.ly/3CUAlFD"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/sourcemeta-schemas-registry.png" style="width: 100%;"></a></center>
