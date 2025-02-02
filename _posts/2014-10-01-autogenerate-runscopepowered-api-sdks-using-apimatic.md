---
layout: post
title: Autogenerate Runscope-powered API SDKs Using APIMatic
sourceurl: >-
  http://apievangelist.com/2014/10/01/autogenerate-runscopepowered-api-sdks-using-apimatic/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apimatic-runscope.png
author:
  name: kinlane
tags:
  - SDK
  - SDKs
---
**Swagger is now Open API Definition Format (OADF) -- [**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/)**

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apimatic-runscope.png)](http://blog.runscope.com/posts/runscope-powered-sdks)

As the API lifecycle continues to expand and comes into focus, new services are emerging to help both API providers, and consumers, better manage API operations from start to finish. New API integration services like [Runscope](https://www.runscope.com/) have emerged to better understand how APIs are actually being consumed, and services like [APIMatic](https://apimatic.io/) are born out of the need to produce better quality SDKs for developers--it only seems natural that eventually these services would start working together.

APIMatic will now generate SDKs in 7 languages that are designed, and enabled to inspect/debug all of the requests and response data between their API, and the applications that depend on them. This will provide both API provider, and consumer with vital details on the integration in real-time, that can help ensure applications integrations are all optimized.

All of this is made possible because [Runscope has APIs](https://www.runscope.com/docs/api/overview), and APIMatic was savvy enough to weave in integration, monitoring and testing capabilities directly into the SDKs of any API. APIMatic will import API definitions in WADL, Swagger, I/O Docs, API BluePrint, or Google Discovery, then generate SDKs for you in Android, Windows, iOS, Java, PHP, Python, Ruby, and Node.js, complete with Runscope integration, monitoring and testing! Something made possible because you have a machine readable API definition for all of your APIs.

This latest expansion of the API lifecycle I feel was kicked off by [Swagger](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/), introducing the ability to generate interactive docs, server and client code for your APIs. This was then expanded upon by [Apiary.io](http://apiary.io/) by allowing you to mockup APIs using [API Blueprint](http://apiblueprint.org/), and now APIMatic and Runscope are expanding the lifecycle to include SDKs and API monitoring. It makes me happy to see the API definition continue to play such an important role, [as the central truth in the API lifecycle](http://apievangelist.com/2014/07/15/an-api-definition-as-the-truth-in-the-api-contract/), enabling all of these API services along the way.

Someday I'll create a cool little lifecycle visualization that shows each step in an APIs life, and what is enabled by using a central, machine readable API definition for all of your APIs, and underlying data models, but we all know graphics isn’t one of my strengths, so we'll see..

**Updated November 27, 2015:** Links were updated as part of switch from Swagger to OADF ([**READ MORE**](http://apievangelist.com/2015/11/05/the-swagger-spec-is-reborn-as-open-api-definition-format-oadf-after-being-put-into-open-api-initiative-oai/))