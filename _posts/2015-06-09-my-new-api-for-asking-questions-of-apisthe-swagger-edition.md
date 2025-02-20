---
layout: post
title: My New API For Asking Questions Of APIs - The Swagger Edition
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-question-mark.png
author:
  name: kinlane
tags:
  - My
  - Swagger
  - APIs
---
I am currently trying to move forward the [917 companies, from 223 business areas, with a total 882 APIs catalogued, and 407 Swagger definitions created](http://theapistack.com/), while working on a distributed way to understand where the profiling for each company is, and how far along the underlying Swagger definitions is. [I had kicked off another prototype APIs.json type a few months back I'm calling api-questions to handle just this](http://api-qa.apievangelist.com/), in a way that allows me to ask human readable questions about APis, while also storing in a distributed, machine readable format that can be indexed via each APIs.json file.

[The other evening I publishd a walk through of a Swagger file](http://apievangelist.com/2015/06/06/a-walk-through-a-swagger-api-definition-to-identify-the-moving-parts/). I wanted to create a simple walkthrough for my readers, but my primary goal was to break down the moving parts of a Swagger file, and try to quantity what elements [I would need before I could call a Swagger definition "complete"](http://apievangelist.com/2015/06/06/how-do-you-know-when-a-swagger-api-definition-is-complete/). Right now I have 28 questions to ask of each Swagger file:

*   Do all Swagger API definition properties have a type?
*   Is there a Swagger definition?
*   Is there a Swagger API title?
*   Is there a Swagger API description?
*   Is there a Swagger API version?
*   Is there a Swagger API terms of service?
*   Is there a Swagger API contact?
*   Is there a Swagger API license?
*   Is there a Swagger API host?
*   Is there a Swagger API base path?
*   Is there a Swagger API http scheme?
*   Is there a Swagger API https scheme?
*   How many Swagger API paths are there?
*   Do all Swagger API paths have tags?
*   Do all Swagger API paths have summary?
*   Do all Swagger API paths have description?
*   Do all Swagger API paths have operation id?
*   Do all Swagger API paths have parameters?
*   Do all Swagger API paths have responses?
*   Do all Swagger APIs have 200 status codes?
*   Do all Swagger APIs have 400 status codes?
*   Do all Swagger API response have references to definitions?
*   Does Swagger APIs have security definitions?
*   Do all Swagger API paths have security references?
*   Is there Swagger API definitions?
*   How many Swagger API definitions are there?
*   Do all Swagger API definitions have properties?
*   Do all Swagger API definition properties have a description?

Much of this I could easily do with the JSON schema for Swagger, but I'm working on some more nuance to it, something eventually I'd like to evolve into an API design guide. Right now, I'm just trying to establish how complete any Swagger definition is programmatically, and queue up the API definitions that need work. 

I've created a [simple API for management of my API related questions](http://question.api.kinlane.com/questions/), then I created [another API for asking these questions of specific Swagger files](http://question.api.kinlane.com/questions/ask/organization/?apisjson_url=https://kin-lane.github.io/api/apis.json&questions=46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73). However if you want to use this API, you need an [APIs.json](http://apisjson.org) index for your APIs, which all of mine in the API stack do--then it will spider any indexed Swagger files, and do its best to answer the 25+ questions above, and return specific answers. 

The results are far from perfect, but it is a start. I will be making the questions more precise, and adding new questions. I hope to get more intelligent with things like status code recommendations, and linkage between the API paths and underlying data models. My goal is to have a real-time way of telling how complete my Swagger files are, and where the work is that needs to be done--as I am doing the work.

I'm sure the definition of exactly what is a complete Swagger definition is will continue to evolve, always resulting in a human having the final vote, but for now I will just keep defining, until I find the right balance between programmatic, and the human touch.