---
layout: post
title: How Do You Know When A Swagger API Definition is Complete?
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round-certified.png
author:
  name: kinlane
tags:
  - Definition
  - Swagger
---
As I go through [the research from APIMATIC regarding automatically generating client code using Swagger](http://apievangelist.com/2015/06/06/comparison-of-automatic-api-code-generation-tools-for-swagger/), and I prepare to crank out Swagger definitions for almost [1000 companies in the API Stack](http://theapistack.com/), one big question I face is, what exactly is a complete Swagger definition?

An incomplete Swagger definition does you little good. I've gotten away with just mapping out some API endpoints, verbs, and parameters, to add another dimension to my API monitoring, but without authentication details, status codes, and the underlying data model, you can't do much else that is meaningful with them--as the APIMATIC research demonstrates. We need to start refining not just a definition about what is complete, but tooling and services that can help us get to complete as fast as we can, and automate the certification of any API, using Swagger.

I extracted version definition of what is a complete Swagger definition from APIMATIC's research that I recently wrote about:

*   Valid JSON
*   Correct BaseURIs
*   Authentication Information
*   Endpoints
*   Verbs
*   Parameters
*   Schemas
*   Satus Codes
*   Data Models

I would add that the basic elements of a Swagger specification, while maybe not critical to generating SDKs, are important to discovery, and other aspects of API operations. 

*   Name
*   Description
*   Tags

Next I would say there is always the human element:

*   **API Designer Review** \- Sign-off from an API designer who compared the API definition to the actual API, while also rounding off any missing elements, and just giving the API design the love it needs.
*   **API Provider Review -** Sign-off from the actual API provider. This will not be possible for all APIs, but having this is definitely a major score for the overall completion score.

Then I guess we also need some sort of code level validation an API is complete. I guess this can be done manually during the human API design review, but ideally it would be something a little automated, and potentially generating some output from an API monitoring service provider like [Runscope](http://runscope.com) or [API Science](http://apiscience.com)\--some sort of recent, timestamped output from an actual call that was made to each of the endpoints in a Swagger definition.

Next up, to actually create a walk though of each of the moving parts of a Swagger definition, and create 5-10 Swagger definition that I'd consider to be be 100% complete--something that I'm sure will evolve through the process. If you have additional thoughts on what is a complete Swagger definition, or an example of a Swagger definition, I'd love to hear your thoughts.