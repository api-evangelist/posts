---
layout: post
title: Partial Response and Updates with Google APIs
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - APIs
---
[Last year google launched support for partial response and updates](http://googlecode.blogspot.com/2010/03/making-apis-faster-introducing-partial.html "last year google launched support for partial responses and updates") to a couple of the Google APIs. The goals was to significantly reduce network, memory, and CPU resources needed to work with Google APIs.

Now Google is [adding support](http://googlecode.blogspot.com/2011/07/lightning-fast-performance-tips-for.html "adding support") for partial response, and an improved version of [partial update, called patch](http://code.google.com/apis/buzz/v1/performance.html#patch "partial update, called patch"), to a number of newer APIs including:

*   [Google Buzz API](http://code.google.com/apis/buzz/ "Google Buzz API")
*   [Google URL Shortener API](http://code.google.com/apis/urlshortener/ "Google URL Shortener API")
*   [Google Tasks API](http://code.google.com/apis/tasks/ "Google Tasks API")

All APIs available in the [Google APIs Discovery Service](http://apievangelist.com/2011/05/21/google-apis-discovery-service/ "Google APIs Discovery Service") and the [APIs Explorer](http://apievangelist.com/2011/05/21/google-apis-explorer/ "Google APIs Explorer") supporting partial response and updates.

The partial response algorithm works by supplying a fields query parameter to any API call that returns data, you can request specific fields.

Here is an example request that returns only titles and timestamps of a user's public Buzz activities: [https://www.googleapis.com/buzz/v1/activities/kinlane@gmail.com/@public?alt=json&pp=1&fields=items(title,updated)](http://apievangelist.com/2011/05/21/google-apis-explorer/)

A full response for Buzz activity would be around 53KB and the partial response is 3KB, a reduction of almost 95%!

You can try out both partial response and patch algorithms in the [Google APIs Explorer](https://code.google.com/apis/explorer/ "Google APIs Explorer"). In partial responses, the fields parameter is available for most methods. You can easily tell which are partial update methods by the .patch in the method name. Both the fields parameter and the patch method on the tasklist resource in the APIs explorer.

Partial response and updates are a great way to make APIs more efficient for devices with limited connectivity, as well as making API platforms operate as efficiently as they can by delivering only what information is needed.

Google is in a unique position with the number of APIs they offer, volume of API calls they manage, and wide audience they deliver to. We can all learn a lot from watching them organize their APIs, and apply elements of their approach to our own API ecosystems.