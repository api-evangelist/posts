---
layout: post
title: Image If Everyone Automatically Knew That APIMATIC Had Added A New Endpoint?
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags: []
---
[I wrote a story yesterday about APIMATIC releasing a new API validation API to compliment their existing API client code generation API](http://apievangelist.com/2015/06/22/apimatic-adds-new-api-validation-endpoint-to-their-api-client-code-generation-api-stack/). I received an email from the APIMATIC team is how I found out about the API, but as I'm processing that story, and thoughts around what I'd like to see for [API Changelog](https://www.apichangelog.com/) (something Paul of [@BlockSpring](https://twitter.com/BlockSpring) brought up), I'm lefting thinking about how antiquated our whole world of API discovery is.

As soon as APIMATIC updated their API Blueprint file, all who use APIMATIC, and us API pundits (clowns) in the space should, should receive a push notification. This type of notification is exactly what API Changelog does, but it does it based upon a document diff, rather than finer grain, machine readable detail like what is available in a Swagger or API Blueprint definition. This is something I know they are working on changing, using [APIs.json](http://apisjson.org). 

Using APIs.json, companies like APIMATIC can publish a machine readable index of API operations in a "known location", aka the root of their domain--in this case, it would be at http://apimatic.io/apis.json. This index lists all of the APIs, and their supporting elements, in a machine readable way, that companies like API Changelog could parse, and provide notification to API consumers, and the pundits like me--providing us with fine grain notifications like, change to existing API, addition of new API, or changes to parameters, data model, etc.

I know API Changelog is working on all of this, but I wanted to recount, to keep the topic fresh in my head, and also acknowledge that one of the problems in all of this, is the initial discovery. API Changelog is good at tracking on known or existing APIs, but how do you find new APIs? This is a very manual process, but when you can just introduce a list of URLs, and look for APIs.json--the API discovery game will improve significantly. 

When any service like API Changelog, or even API Science, or APIMATIC finds a new APIs.json file, they are immediately made aware of vital metadata about API operations like the name, description, tags, and contact info, but also are given access to other machine readable building blocks like Swagger, API Blueprint, Postman Collections, which give us even deeper insight into API operations. 

Someday, I will just get a simple notification via my API design workspace (aka IDE), via email, Twitter, or maybe even Github, that a new API exists, for the companies I already track on, as well as any knew companies I may be interested in learning about--of course these new APIs will fit some definition of what I look for not just in API design, but also other aspects of operation like licensing, pricing, and what SDKs are available.