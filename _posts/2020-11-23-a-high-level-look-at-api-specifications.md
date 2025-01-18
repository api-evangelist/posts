---
published: true
layout: post
title: A High Level Look At API Specifications
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/aws-s3-stories-crypto-machine-bletchley-copper-circuit.png
author:
  name: kinlane
tags:
  - Specifications
---
I am having an increasing number of conversations around how the leading API specifications work together, and what the role of each are when it comes to various stops along the API lifecycle. To help drive conversations I wanted to create a single blog post I can link to, while also loading up all of my fresh thoughts about API specs into my old brain. All of these API specifications are continuing to see massive adoption across API providers and consumers, and they are all in forward motion being iterated upon by the specification owners, so it helps to pause once or twice a year and take a look at what is going on, and work to understand how all of these API specifications work together (or don’t).

### What Are The Leading API Specifications

There are a handful of API specifications that are relevant to delivering APIs in 2020, helping provide a vocabulary for stakeholders in the process to use when describing what each API does, so that a common definition can be applied through the API lifecycle, consistently delivering API infrasture across many teams. Here are the API specifications I am focusing on as part of my API Specification Toolbox conversations.

*   **[OpenAPI](https://www.openapis.org/)** - A specification for defining the surface area of HTTP 1.1 web APIs using JSON or YAML.
*   **[AsyncAPI](https://www.asyncapi.com/)** - A specification for defining the surface area of HTTP 1.1, HTTP/2, HTTP/3, TCP, MQTT, and AMQP APIs using JSON or YAML.
*   **[JSON Schema](https://json-schema.org/)** - A specification for defining the underlying models in use for APIs, adopted by both OpenAPI and AsyncAPI.
*   **[Postman Collections](https://www.postman.com/collection/)** - A specification for defining executable collections of HTTP 1.1 web APIs for running in services and tooling
*   **[Postman Environments](https://learning.postman.com/docs/sending-requests/managing-environments/)** - A specification for defining key / value pairs that get applied across collections at execute time.
*   **[RAML](https://raml.org/)** - A YAML format for describing the surface area of your HTTP 1.1 APIs, and the the underlying objects.
*   **[GraphQL](https://graphql.org/)** - A query language for APIs and a runtime for fulfilling queries on top of data and content.
*   **[SOAP](https://en.wikipedia.org/wiki/SOAP)**  \- A messaging protocol specification for exchanging structured information across web services. 

SOAP has been around for a number of years, but OpenAPI, AsyncAPI, JSON Schema, RAML, and GraphQL have emerged within the latest decade. OpenAPI, AsyncAPI, and JSON Schema have all evolved in concert with each other, where RAML, GraphQL, and SOAP developed in isolation. I am including all of these because I think they need to be discussed in relationship to each other, and we need to work harder to understand the overlapping layers of how we deliver APIs, as well as the common needs when it comes to the lifecycle usage of these API specifications(ie. design, documentation, testing). The success of OpenAPI ,AsyncAPI, and JSON Schema is largely due to overlapping, sharing, and reuse across the specifications, which sets a tone for how things should work we move forward and iterate upon each of these specifications, or introduce new ones.

### Reasons Why Each Specification Sees Adoption

There are a number of reasons why API providers and API service providers adopt each of these specifications, but here are a few of the most common reasons why you will find these API specification in use across the enterprise. Hopefully these help you make a decision between what specification you are using. 

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/aws-s3-stories-docks-copper-circuit.jpg)

**OpenAPI**

*   Leading API specification for HTTP1.1 web APIs.
*   Wide service and tooling support for the specification.
*   Has adopted JSON schema for modeling of objects.

**AsyncAPI**

*   Leading API specification for non HTTP1.1 web APIs.
*   Helps define event and message driven approaches.
*   Is a sister specification to the OpenAPI specification.
*   Has adopted JSON schema for modeling of objects.

**JSON Schema** 

*   You need to validate objects you use across your APIs.
*   You need to define a common catalog of all your objects.
*   You need to generate examples for all of your APIs.

**Postman Collections**

*   You need to mock your APIs and provide different sets of examples behind HTTP 1.1 APIs.
*   You need to documentation your APIs, and need to augment with markdown and examples for HTTP 1.1 APIs.
*   You need to test the request, response, and surface area of your HTTP 1.1 APIs
*   You need to execute workflows and business use cases across many different APIs.

**Postman Environments**

*   You have multiple API base URLs that need to be applied against the same HTTP 1.1 API collection
*   You have multiple API authentication identities that need to be applied against the same HTTP 1.1 API collection
*   You have multiple API variables (key / values) that need to be applied against the same HTTP 1.1 API collection

**RAML**

![](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/aws-s3-stories-machine-road-copper-circuit.jpg)

*   You are heavily using the Mulesoft API ecosystem.
*   You are modeling centered in your API design

**GraphQL**

*   You possess very data and content centered APIs
*   Your schema is very large and expansive
*   APIs are primarily driving single page app development

**SOAP** 

*   You posses large amounts of legacy enterprise infrastructure that needs supporting
*   You work in heavily regulated industries that do not move as fast as other industries

Of course, there are many other reasons why developers are adopting these API specifications, but this covers the primary reasons behind API providers and consumers are choosing to adopt each one. While there are other specifications that are relevant to the conversation, to help keep some immediate conversations focused, these are the API specifications that are dominating the conversation today, and for me are relevant to what I am doing as part of the evolution of the Postman platform. 

The majority of folks I am talking to are producing OpenAPI, JSON Schema, and Postman collections as part of their regular API operations. These are the API specifications I am most concerned with fleshing out, as well as mapping to a modern API lifecycle. I’ll be producing more storytelling around each of these specifications as I work to flesh out each of their ecosystems and audiences, and work to move some balls forward within the realm of each specification. The next decade is going to be pretty active when it comes to moving these specifications forward, but more importantly, developing the most meaningful services and tooling that help move APIs forward across the API lifecycle which supports each of these API specifications.