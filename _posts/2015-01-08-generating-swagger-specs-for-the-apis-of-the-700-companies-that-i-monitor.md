---
layout: post
title: Generating Swagger Specs For The APIs Of The 700+ Companies That I Monitor
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png
author:
  name: kinlane
tags:
  - Swagger
  - APIs
  - Specs
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://swagger.io/)

I'm about 1/3 of the way into [generating Swagger specifications for the APIs at the 700+ companies that I monitor.](http://theapistack.com/) I have the Swagger specs for almost 250 APIs so far, and have no idea how many I’ll have when I'm done (ha, will I ever be done), as the target is kind of ever moving. The only way to get to know an API better than having to create a Swagger spec for it, is to actually integrate with it.

Thankfully I’m not integrating with ALL of the APIs I monitor, but I do want to get more intimate with their API surface area, right up to actually having to integrate. There are four ways that I obtain a machine readable API definition for an API:

*   **Manually** - Good ol fashioned elbow grease because there is nothing standard about an APIs documentation, or even the API itself, forcing me to hand craft a Swagger definition that works.
*   **Scraping** - Some APIs documentation is pretty standardized, making it very easy to write a scrape script that harvests, and generates a Swagger skeleton of endpoints, headers, parameters, and other aspects of the interface.
*   **[APITools](https://www.apitools.com/ "APITools")** - Some APIs that I’m actually integrating with, going beyond just a review of their API, I use APITools as a proxy, and make all my API calls via this proxy, and after I hit all the endpoints, I can grab the auto-generated Swagger definition from the APITools interface.
*   **Swagger** - There is already a Swagger definition available for an API, created by the platform owner—this is when I’m in heaven. I love it when APIs create their own API definition, and even better when they create their own [APIs.json](http://apisjson.org) file. ;-)

I would like to also add to the list, that I use API Blueprint, RAML, I/O Docs, and Apigee Explorer formats as well, but I do not. While these formats are out there, it is an understatement to say they are tucked away, and hidden. I’d venture to say the providers are actively assisting API providers in keeping buried, and hard to access—in my opinion each format should be front and center, accessible with a single click.

This is one of the reasons I use [Swagger](http://swagger.io/). If you look at Swagger UI docs, for each endpoint there is a RAW link which takes you directly to the machine readable API definition that drives it. Show me the equivalent on API Blueprint, RAML, Mashery, and Apigee API explorers, and interactive documentation and I’ll eat my words. I'm creating my own API stack for converting between all of these formats, but alas this doesn't help me in my API discovery process, because these formats aren't easy to find.

This disconnect, is one of the reasons there is so much fragmentation in API designs, and ultimately a lack of open tooling and services that support the entire API life-cycle—nobody wants to share their design patterns. Please help me document all the APIs in [my API Stack](http://theapistack.com), and if you know of an existing Swagger spec I don’t have, send my way, or [publish to the Github repo](https://github.com/kinlane/api-stack/tree/gh-pages/data). Also, if you are actively using an API, can you switch to using an [APITools proxy and generate a Swagger spec](https://www.apitools.com/) that way, and also send my way, or [publish to the Github repo](https://github.com/kinlane/api-stack/tree/gh-pages/data).

I wish I could convince all y'all of the [importance of this layer of the API space being not just machine readable, but also accessible](http://apievangelist.com/2014/12/21/making-sure-the-most-important-layers-of-api-space-stay-open/). This is one reason why I’m hand rolling all of these API definitions myself, is because I’m just going to show you.