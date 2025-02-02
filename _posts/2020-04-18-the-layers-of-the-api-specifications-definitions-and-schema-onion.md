---
published: true
layout: post
title: The Layers of the API Specifications, Definitions, and Schema Onion
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/stalin_time_hallway_mirrors_hotel.jpg
author:
  name: kinlane
tags:
  - Specifications
  - Definitions
  - Schema
---
I struggle with using the right words in my API storytelling. Striking a blend between what people are saying across the sector, and what people should be saying. There are many words and phrases in the space that help describe what it is they do, while there are others that confuse more than they describe anything in particular. Mostly I struggle because all of this API stuff can be complicated and very abstract, but also because I can be a little dyslexic at times, seeing some words as interchangeable, depending on what day it is. To help me (once again) think through the world of API definitions, I wanted to riff off of [my talk from AsyncAPI virtual conference this week](https://www.asyncapiconf.com/) and peel back the layers of the API specifications, definitions and schema onion.

The words API specifications, definition, or schema are often used interchangeably as part of API discussions, but there are some realities on the ground when working with these artifacts that can increase the friction across operations if we allow them to be used interchangeably. It is pedantic as hell to want to write a story about the nuance of these terms, but if it helps me be more precise in my work, I’ll do it. To help illustrate the dimensions here, I wanted to highlight the artifacts around the Slack API that I am using for my talk next week.

*   **[Slack Web API  OpenAPI](http://apievangelist.com/talks/api-specifications-walk-through/#OpenAPI)** - The [OpenAPI](https://www.openapis.org/) for the Slack Web API defines the surface area of this single HTTP API instance.
*   **[Slack Events API AsyncAPI](http://apievangelist.com/talks/api-specifications-walk-through/#AsyncAPI)** - The [AsyncAPI](https://www.asyncapi.com/) for the Slack Events API defines the surface of this real time HTTP API instance.

These two artifacts describe the surface area of specific APIs, leveraging two open source API specification formats, but also adopting a third API specification format that these two specifications use to describe the underlying schema being used as part of the structure for request and response, message, and event-driven APIs.  Both OpenAPI and Async API utilize [JSON Schema](https://json-schema.org) for describing the underlying data structures used in APIs, which can also exist on their own as individual JSON Schema files, helping validate, annotate, and define JSON (and YAML) structures.

*   **[Slack Web API JSON Schema](http://apievangelist.com/talks/api-specifications-walk-through/#JSONSchemaSlackWebAPI)** -  This a single JSON Schema object used in the OpenAPI above, but it also stands on its own.
*   **[Slack Events API JSON Schema](http://apievangelist.com/talks/api-specifications-walk-through/#JSONSchemaSlackEventsAPI)**  \-  This a single JSON Schema object used in the AsyncAPI above, but it also stands on its own.

In addition to using JSON Schema for allowing API providers and consumers to describe the surface area of HTTP, TCP, MQTT,  AMQP, and other protocols used to define APIs, both OpenAPI and AsyncAPI also use JSON schema to define and validate their own schema. There are JSON Schema definitions for each of the OpenAPI and AsyncAPI specifications, which are used to validate that specific API definitions are valid, and following the spec.

*   **[JSON Schema for the OpenAPI Specification](http://apievangelist.com/talks/api-specifications-walk-through/#OpenAPIJSONSchema)** - There is the JSON schema to validate that any OpenAPI is a valid OpenAPI.
*   **[JSON Schema for the AsyncAPI Specification](http://apievangelist.com/talks/api-specifications-walk-through/#AsyncAPIJSONSchema)** - There is the JSON schema to validate that any AsyncAPI is a valid AsyncAPI.

If those layers of the API specification, definitions, and schema onion didn’t make your eyes water, then maybe this layer will leave them watering a bit:

*   **[JSON Schema for the JSON Schema Specification](http://apievangelist.com/talks/api-specifications-walk-through/#JSONSchemaJSONSchema)** - Then there is the JSON schema to validate that any JSON schema is a valid JSON schema.

If I was to be pedantic about how I use the words specifications, definitions, and schema, I would try to be careful about how I use schema, knowing that people will assume you mean the JSON Schema specification for each individual API, or for the specifications themselves. Using my Slack API example I would consider OpenAPI, AsyncAPI, and JSON Schema to be specifications, with each usage of a specific to define each of the Slack APIs to be a definition. Keeping the JSON Schema layers used for validation as the schema portion, keeping things precise regarding the structure and format for each layer of APIs vs their specifications. Making for an eye watering number of layers when it comes to peeling back what we could possibly mean when it comes to saying API specification, definition, or schema.

One more nuance to this is I tend to not say OpenAPI definition or AsyncAPI definition, and instead just say the OpenAPI, or the AsyncAPI—the definition is assumed as part of each definition. To help me walk through this concept [I’ve thrown together an Intro.js walk-through for the concept,](http://apievangelist.com/talks/api-specifications-walk-through/) showing each of the moving parts I am talking about. Using the Slack APIs from my talk as the point of reference for each layer of this onion. I am not a big fan of saying there is a right way or wrong way of using these words, but I do think it can help reduce confusion and friction along the way if we use them more precisely. The problem with these three words is that they can have such a broad range of usage across many different concepts, topics, business verticals, and other domains. While I don’t think I will get everyone on board with my view of the layers of this onion, I do think it will help me speak more coherently when it comes to my own storytelling around API specifications, definitions, and schema.