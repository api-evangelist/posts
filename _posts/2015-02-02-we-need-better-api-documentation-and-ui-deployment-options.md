---
layout: post
title: We Need Better API Documentation And UI Deployment Options
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-interactive-api-docs.png
author:
  name: kinlane
tags:
  - Deployment
  - Documentation
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-interactive-api-docs.png)](http://developer.apievangelist.com/core-apis.html)

I was having a Twitter conversation with John Sheehan([@johnsheehan](https://twitter.com/johnsheehan)) about the easiest way to generate interactive API documentation this weekend, without getting all tangled up in having to get into the weeds of [Swagger UI](https://github.com/swagger-api/swagger-ui). I love me some Swagger UI, something I think has transformed how we engage with APIs, but the JavaScript for it can be inaccessible, and difficult to customize--to say the least.

There are other UI solutions to API documentation, projects like [Slate from Tripit](https://github.com/tripit/slate), from [Readme.io](https://readme.io/), and some cool [UI stuff over at OpenFDA](http://apievangelist.com/2014/06/17/adding-data-visualization-layer-to-interactive-api-documentation/), but really I haven’t seen much evolution beyond Swagger UI. Sure, [Apiary.io](http://apiary.io) has a great UI, but it isn’t the portable, customizable vision I have in my head (they are working on this, BTW). I [envision a whole gallery of simple, UI templates that you can choose from](http://apievangelist.com/2014/10/24/someone-please-build-my-open-interactive-portable-and-visual-api-documentation-toolkit/), driven by machine readable [Swagger](http://swagger.io/) or [API Blueprint](https://apiblueprint.org/) API definitions.

Looks like the [gov hackers over at 18F](https://18f.gsa.gov/) feel the same way, and are working on something like this—"[a suite of tools and templates that faciliate the generation of static, human-readable documentation to replace SwaggerUI](https://github.com/shawnbot/swagger-static)”. [Shawn Allen](https://github.com/shawnbot), has created two repos:

*   [swagger-template](https://github.com/shawnbot/swagger-template), just some HTML files that should theoretically be useful for generating static HTML documentation for a Swagger-compliant API.
*   [swagger-enhance](https://github.com/shawnbot/swagger-enhance), a little Node utility for grabbing a Swagger API's JSON and "enhancing" it with JSON data from each of its own endpoints (confusingly, "apis", in Swagger parlance).

It makes me happy to see some brainstorming to push the conversation forward. I’m able to deploy Swagger UI pretty quickly to support my APIs, using Github Pages, but when it comes to extending, and transforming the UI, I hit a wall pretty quickly. I've created some custom UI solutions, to help me manage my own infrastructure, driven by Swagger, but nothing that contributes to the larger conversation.

I’d love to see API design, deployment, and integration tools I depend on like [Restlet Studio](http://studio.restlet.com/#/), and [Postman](http://www.getpostman.com/) provide more support for easy deployment of UI elements, driven by machine readable API formats like Swagger and API Blueprint. Making API documentation more interactive with Swagger UI was an important step forward, but we are ready for the next step in the evolution of API UI generation.