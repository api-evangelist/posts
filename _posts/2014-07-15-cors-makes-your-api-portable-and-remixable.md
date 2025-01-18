---
layout: post
title: CORS Makes Your API Portable And Remix-able
url: >-
  http://apievangelist.com/2014/07/15/cors-makes-your-api-portable-and-remixable/
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-turntable.jpg
author:
  name: kinlane
tags: []
---
**Swagger is now Open API Definition Format (OADF) -- [**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/)**

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-turntable.jpg)

I was looking through [federal government APIs](http://apievangelist.com/2014/07/10/looking-at-77-federal-government-api-developer-portals-and-190-apis) the other day, looking for the [low hanging fruit](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government), when it came to making government APIs more discoverable using [APIs.json](http://apisjson.org). During my initial work, I played with [three separate APIs from www.usa.gov](http://www.usa.gov.apievangelist.com/), which I think demonstrates the importance of CORS, and how opening it up for APIs, makes them more portable and remix-able.

When it comes to the the three APIs from www.usa.gov, I do not have control over the API itself, but I wanted to create a self contained, site that showcased the government APIs, and provide interactive API documentation generated using Swagger. I made sure all three of the APIs had machine readable API definitions using Swagger, then I setup a simple HTML page, which allowed anyone to play with each of the APIs.

This worked great until I reached the third API, which was at a different domain than the previous two, and didn't have CORS enabled. If you aren't familiar with CORS, or [Cross-origin resource sharing (CORS)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing), which is a mechanism that allows many resources on a web page to be requested from another domain outside the domain the resource originated from—behavior that you may want to control on a web page, but for an API it is something you want to encourage.

CORS being enabled, is the difference between an API being portable, and remix-able, and it being locked down to its original developer portal. If an API is RESTful and has CORS enabled, any outside party (like me), can generate a machine readable API definitions for it, and compose a developer experience, that that includes the API—with or without consent of the original API provider. While this might scare the shit out of some API providers, it is the future of API driven, application architecture.

You can't expect all developers to find your API developer portal, and APIs need to be more portable, allowing for remixing by other API providers, backend as a service providers, and anyone who wants to feature the API resource in their developer portal. CORS is a simple thing that you can enable for your APIs that will make a big difference in how your API is found, and integrated into other applications and systems.

**Updated November 27, 2015:** Links were updated as part of switch from Swagger to OADF ([**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/))