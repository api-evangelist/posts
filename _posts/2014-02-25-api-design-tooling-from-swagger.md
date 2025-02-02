---
layout: post
title: API Design Tooling From Swagger
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-round.png
author:
  name: kinlane
tags:
  - Design
  - Tooling
  - Swagger
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-round.png)](https://helloreverb.com/developers/swagger)

As part of my [research in the world of API design](http://apievangelist.com/2014/01/16/api-design-do-you-swagger-blueprint-or-raml/), I’m looking into the different approaches by API Blueprint, RAML and Swagger, to provide API definitions, services and tools that assist developers in better designing APIs. I have already look at the [evolving motivations behind API definitions](http://apievangelist.com/2014/01/22/the-evolving-motivations-behind-api-definitions/), and some insight into the [vision behind Swagger, API Blueprint and RAML](http://apievangelist.com/2014/01/31/the-vision-behind-swagger-api-blueprint-and-raml/), next up is take a look at the tooling that is evolving around each approach.

First up is [Swagger](https://helloreverb.com/developers/swagger), from the folks over at [Wordnik](https://www.wordnik.com/). I would consider Swagger the first mover in this new world of API design, with the Wordnik team’s approach centered around a JSON based API definition:

*   **[Swagger Core](https://github.com/wordnik/swagger-core "Swagger Core")** - A JSON based API definition format, which allows for the description of REST APIs

Around the Swagger core the Wordnik team developed a core set of tooling that met their immediate needs for the Wordnik API:

*   **[Swagger CodeGen](https://github.com/wordnik/swagger-codegen "Swagger CodeGen")** - A template-driven engine to generate client code in different languages by parsing a Swagger Core definition
*   **[Swagger UI](https://github.com/wordnik/swagger-ui "Swagger UI")** - A dependency-free collection of HTML, Javascript, and CSS assets that dynamically generate beautiful documentation from a Swagger defined API

Secondarily other more specific tools have emerged:

*   **[Swagger JS](https://github.com/wordnik/swagger-js "Swagger JS")** - Javascript library to connect to swagger-enabled APIs via browser or nodejs
*   **[Swagger Node Express](https://github.com/wordnik/swagger-node-express "Swagger Node Express")** - Swagger module for node.js w/express module
*   **[Swagger Socket](https://github.com/wordnik/swaggersocket "Swagger Socket")** - A REST over WebSocket
*   **[Swagger Play 2](https://github.com/wordnik/swagger-core/tree/master/modules/swagger-play2 "Swagger Play 2")** - Provides automatically-generated Swagger JSON for the Play! framework

Swagger was born out of Wordnik’s desire for interactive documentation, but evolved into tooling for generating server and client side code, and has ended up providing a central language for facilitating discussions around API design, deployment and integration in many other areas.

I know there are some other tools available out there for Swagger, this just represents would I could find easily off their Github account. If there are other Swagger tools you know of, let me know and I’m happy to add to this post and my research.