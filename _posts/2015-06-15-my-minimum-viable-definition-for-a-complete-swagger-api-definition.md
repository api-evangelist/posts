---
layout: post
title: My Minimum Viable Definition For A Complete Swagger API Definition
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png
author:
  name: kinlane
tags:
  - My
  - Definition
  - Swagger
---
[I have been working hard to establish some sort of minimum viable definition for a complete Swagger definition is](http://apievangelist.com/2015/06/06/how-do-you-know-when-a-swagger-api-definition-is-complete/), and I think I finally have got to a point where I have it--at least enough to work through the next 100 or so APIs I'm targeting for completion. 

I originally identified almost 30 separate questions specifically targeting Swagger, but for my minimum viable definition I've isolated it to just 19. I automated asking of these questions, using [my Questions API](https://kin-lane.github.io/question/), and to test things out I applied it to my [API API](https://kin-lane.github.io/api/):

**API** ([APIs.json](http://api-qa.apievangelist.com/API))

Is there a Swagger definition?

yes

Is there a Swagger API title?

yes

Is there a Swagger API description?

yes

Is there a Swagger API host?

yes

Is there a Swagger API base path?

yes

How many Swagger API paths are there?

24

Do all Swagger API paths have tags?

yes

Do all Swagger API paths have summary?

yes

Do all Swagger API paths have description?

yes

Do all Swagger API paths have operation id?

yes

Do all Swagger API paths have parameters?

yes

Do all Swagger API paths have responses?

yes

Do all Swagger API response have references to definitions?

yes

Does Swagger APIs have security definitions?

yes

Do all Swagger API paths have security references?

yes

Is there Swagger API definitions?

yes

Do all Swagger API definitions have properties?

yes

Do all Swagger API definition properties have a description?

yes

Do all Swagger API definition properties have a type?

yes

In theory, I can run this on any [APIs.json](http://apisjson.org) file, and it will return answers for any API that has a valid Swagger file present. My goal is to provide me with a quick action todo list for [any API in my API Stac](http://theapistack.com/companies.html)k.

Now I want some sort of way to certify that all these questions were asked, import the Swagger into Postman, or some other tool and actually execute a real call against each endpoint. I'm still evaluating how to record this information somewhere, so it can be verified at any time, but anyone. 

Anyways, I have about 50 APis targeted for completion, using my new Questions API. [I even created a simple little widget to ask the questions of each API, something I will automate as soon as possible, and build into my API stack](http://api-qa.apievangelist.com/swagger.html).