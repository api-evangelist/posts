---
layout: post
title: >-
  APIMATIC Adds New API Validation Endpoint To Their API Client Code Generation
  API Stack
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Client
  - Validation
  - Stack
  - Generation
  - Code Generation
  - Code
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-logo.png)](https://apimatic.io)

I am working hard to [establish a complete set of APIs for my own API stack](https://kin-lane.github.io/master/) which includes establishing complete Swagger definitions for the 25 APIs that I personally operate. These Swagger definitions are then used to generate [Postman Collections](http://alpha.apievangelist.com/2015/04/07/including-postman-collections-in-my-apisjson-files/), [APIMATIC SDKs](http://alpha.apievangelist.com/2015/06/06/adding-apimatic-sdks-to-my-master-stack-and-including-in-each-apisjson/), and [API Science monitors](http://alpha.apievangelist.com/2015/06/06/adding-api-science-monitors-to-my-master-stack-and-including-in-each-apisjson/). I am also [working hard to establish complete Swagger definitions for the 1000 companies in my API Stack](http://theapistack.com/), something I am partnering with [APIMATIC](https://apimatic.io) on. 

As part of this work, both teams are working hard to evolve our tooling for working with, and validating API definitions. I mentioned a couple weeks back, [when I shared client SDK research conducted by APIMATIC,](http://apievangelist.com/2015/06/06/comparison-of-automatic-api-code-generation-tools-for-swagger/) that quality SDK generation is kind of the high water mark for measuring API definition completion--meaning if your API definition isn't complete enough to generate a functional SDK, you need to spend more time in your API design editor, until it is more complete.

[As I've been working to establish my own definition of what a complete Swagger definition is](http://apievangelist.com/2015/06/15/my-minimum-viable-definition-for-a-complete-swagger-api-definition/), APIMATIC has been hard at work doing the same, but applying to WADL, Swagger, RAML, API Blueprint, IODocs, and Google Discovery. Also at the same time [I'm building my questions API to help me automate the validation of Swagger definitions](http://apievangelist.com/2015/06/09/my-new-api-for-asking-questions-of-apis--the-swagger-edition/), [APIMATIC has been working on their own validation API, which they just added to their existing API client code generation API](http://docs.apimatic.apiary.io/#reference/api-description-validation).

[If you are generating machine readable API definitions in WADL, Swagger, RAML, API Blueprint, IODocs, or Google Discovery, then you should be validating your API designs using APIMATIC.](http://docs.apimatic.apiary.io) Once you know your API definitions are solid, then you should also generate all your SDKs with APIMATIC too--I am only about 20% the way through doing this for my API Stack. 

Nice work [APIMATIC](https://apimatic.io) team. I predict by the end of the year we will have a full stack of APIs, and tooling, that helps us through almost every step of the API definition driven, API lifecycle. 

_**P.S.** They just added Node.js and Go SDKs to their stack this week!_

_**P.S.S.** APIMATIC is using Apiary.io.  
_