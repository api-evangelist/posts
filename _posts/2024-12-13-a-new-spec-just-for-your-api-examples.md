---
published: true
layout: post
title: A New Spec Just For Your API Examples
tags:
  - Examples
  - Synthetic Data
  - Mocking
  - Testing
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-lane-1-2-3.jpeg
---
As the API universe continues to expand out of the business of APIs constraints that were applied to full lifecycle management, what some call unbundling, services, tooling, and specifications are emerging to tackle specific areas of API operations. [One new specification to emerge from the open-source mocking and testing tool Microcks, is designed for crafting standalone examples that you can use across multiple artifacts like OpenAPI, AsyncAPI and Postman collections](https://microcks.io/documentation/references/examples/).

Straight from the website — "APIExamples format is Microcks’ own specification format for defining examples intended to be used by Microcks mocks. It can be seen as a lightweight, general purpose specification to solely serve the need to provide mock datasets. The goal of this specification is to keep the Microcks adoption curve very smooth with development teams but also for non developers."

It is good to see a specification emerge to support examples. OpenAPI's example object has always been good at supporting documentation, but when it comes to testing and mocking you will need more. So it makes sense to see this come from Microcks. Microcks need better quality and more contextually relevant examples, but also need them standalone so they will work with request and response as well as event-driven scenarios, and be able to easily augment OpenAPI, Postman Collection, GraphQL, gRPC, and AsyncAPI. 

I have [added APIExamples as a proposed property type for APIs.json](https://github.com/apis-json/api-json/issues/106), as well as fired up an [API Commons repository to do some work around the APIExamples format](https://github.com/api-commons/examples). Microcks provides a JSON Schema for the specification (which I will upgrade to the latest draft), and provides a GraphQL and gRPC example to get you started. A standalone example specification will significantly contribute to evolving services and tooling across the lifecycle as Microcks as done for mocking and testing, but also driving more investment into examples for specific use cases and industries, making more synthetic data available for use across the API lifecycle. Examples are just an “example" (pun intended) of one property of API experiences that are evolving into their own specs that allow for standardizing of APIs across not just multiple APIs, but multiple types of APIs running across multiple industries.

<center><a href="https://microcks.io/documentation/references/examples/"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/microcks-api-examples.png" width="90%"></a></center>