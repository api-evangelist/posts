---
layout: post
title: API Design Tooling From API Blueprint
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apiblueprint/apiblueprint-logo-2.png
author:
  name: kinlane
tags:
  - Design
  - Tooling
  - Blueprint
  - API Blueprint
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apiblueprint/apiblueprint-logo-2.png)](http://apiblueprint.org/)

As part of my [research in the world of API design](http://apievangelist.com/2014/01/16/api-design-do-you-swagger-blueprint-or-raml/), I’m looking into the different approaches by API Blueprint, RAML and Swagger, to provide API definitions, services and tools that assist developers in better designing APIs. I have already look at the [evolving motivations behind API definitions](http://apievangelist.com/2014/01/22/the-evolving-motivations-behind-api-definitions/), and some insight into the [vision behind Swagger, API Blueprint and RAML](http://apievangelist.com/2014/01/31/the-vision-behind-swagger-api-blueprint-and-raml/), next up is taking a look at the tooling that is emerged around each approach.

I began with a [look at the tooling around Swagger](http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/), and next up is to look at [API Blueprint](http://apiblueprint.org/), from [Apiary.io](http://apiary.io/), which is centered around a markdown based API definition language:

*   **[API Blueprint](http://apiblueprint.org/) -** Apiary.io’s API definition language designed to allow anyone, not just developers to design APIs

To put API Blueprint to use, Apiary provides a parser:

*   **[Snowcrash](https://github.com/apiaryio/snowcrash) -** The API Blueprint parser built on top of the Sundown Markdown parser

When it comes to tooling around API Blueprint, it is all about the Apiary.io platform:

*   **Apiary.io -** Collaborative design, instant API mock, generated documentation, integrated code samples, debugging and automated testing

Apiary.io delivers the features we are seeing emerge around Swagger and RAML, and more:

*   **Server Mock -** Providing a mock API interface allowing you to experiment with an API interface before you write any code
*   **Interactive Documentation** \- Auto generated API documentation that allows developers to authenticate and make live calls to an API while learning the documentation
*   **GitHub Sync -** Apiary uses Github to store each API Blueprint, allowing it to be stored publicly or privately on Github, with automatic updating of API docs with each Github commit
*   **Command Line Tools -** A separate command-line interface available as ruby gem, allowing for the automation and integration of API Blueprints it your regular workflow
*   **Traffic Inspector -** Providing a proxy to run API calls through allowing the breakdown of each call to APIs, helping developers understand and debug APIs much easier
*   **Discussion** - Communication tools within API blueprint documentation allowing team and public developer conversations

I did find two other open tools for API Blueprint:

*   **[HTTP Call Validator](https://github.com/apiaryio/gavel)** - Gavel is a tool for deciding which HTTP API call is valid and which is not
*   **[API Blueprint Testing Tool](https://github.com/apiaryio/dredd)** \- Dredd is a command-line tool for testing API documentation written in API Blueprint format against its backend implementation. 

I’d say that Apiary with API Blueprint was the first company dedicated specifically to API design. Swagger was born as a set of tools out of Wordnik, and not designed to be a product, with RAML coming later. While Swagger was pushing API design into new areas beyond just interactive docs, Apiary and API Blueprint was the first API design only startup to emerge.

During 2006-2012, API management was being standardized by pioneers like Mashery, 3Scale and Apigee--now API design is now being defined by providers like Swagger,  API Blueprint, and RAML. It shows that the API space is continueing to expand and mature, increasing the need to refine not just API design, but the overall API lifecycle.