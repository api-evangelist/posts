---
layout: post
title: Thinking About OpenAPI Provenance
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_04_at_10.46.01_pm.png
atomdate: 2017-03-06T17:00:00.000Z
tags:
  - OpenAPI
  - Provenance
  - Open
---
[I am building on the great work by the APIs.guru team](https://apis.guru/browse-apis/), assembling a collection of Google definitions. I will be forking their Google Open definitions and wrap them in [APIs.json indexes](http://apisjson.org), so I can analyze the APIs at the 100K level, and potentially augment, and enrich the existing OpenAPIs that the APIs.guru team has worked so hard on. 

When APIs.guru crafts an OpenAPI for an API, they have a set of OpenAPI extensions that provides a snapshot of the history for each OpenAPI. They provide six OpenAPI extensions, specific to their API discovery objectives:

> x-apiClientRegistration:  
>      url: 'https://console.developers.google.com'  
> x-logo:  
>      url: 'https://www.gstatic.com/images/icons/material/product/2x/blogger\_64dp.png'  
> x-origin:  
>      format: google  
>      url: 'https://www.googleapis.com/discovery/v1/apis/blogger/v3/rest'  
>      version: v1  
> x-preferred: true  
> x-providerName: googleapis.com  
> x-serviceName: blogger

I like that they include the origin of thier API definitions. I want to do the same, but I would like to turn x-origin into a collection so that I can add multiple entries into it, and evolve it beyond just origin. I want to show the provenance for the API definition, that I build mine on top of APIs.guru's hard work, and that they built theirs on Google's using their discovery format. I'm going to add x-provenance to mine and start tracking on the source of where my API definitions originate and include anything else present when I imported.

It is important that we are able to have many different copies of an API's definition, in a variety of formats. There will be copies of API definitions all over Github, and the web, for a variety of different purposes. I'd like to see more stewards of API definitions include some sort of origin, provenance, and history for their API definitions. If they are yours, they are authoritative and it isn't necessary, but if they are for 3rd party APIs, try to capture as much information as you can about where it comes from, to help everyone understand it's history.