---
layout: post
title: Please Do Not Hide Your API Definitions From Consumers
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-nose-disguise.png
author:
  name: kinlane
tags:
  - Definitions
  - Definition
  - Consumers
  - Consumer
---
I am always pleased to see API providers publishing Swagger definitions, and using them to drive their interactive documentation. Projects like the [Global Change Information System API](http://data.globalchange.gov/), are getting on the API definition bandwagon, and this is a good thing. I have been pushing API definition formats like Swagger and API Blueprint since 2012, but in 2015, while I want to keep on-boarding folks to the concept of using API definitions for interactive documentation, but I also want them to also understand that their APIs definition will be used in other areas of API operations as well.

Most people think [Swagger](http://swagger.io) is the documentation, and have not been able able to separate the specification from the interactive documentation. I think [Apiary](http://apiary.ioo) has done a better job of this separation with the separation of [API Blueprint](http://apiblueprint.com) from Apiary. As an API provider, you may not have evolved to a full API-first level of operation, which is ok, but I encourage you to make your Swagger or API Blueprint definition as accessible as possible, so your API consumers can put to use in other ways--even if you don't have the time.

As soon as I saw that the [Global Change Information System API](http://data.globalchange.gov/) employed Swagger for their documentation, the next thing I wanted to do was also use in my [Postman client](https://www.getpostman.com/). While the Swagger UI provides me with a hands-on way of getting to know the GCIS API, I have to come back to the site to play with more, and it doesn't give me as much detail about how the API works, as my Postman client does. All GCIS API team has to do, is publish a text or image link to [their Swagger definition](/admin/blog/view-source:http:/data.globalchange.gov/api_reference.json) in a prominent location, so it is obvious to us consumers.

I get easily reverse engineer the Swagger UI, using my Google Developer tools, but it is a couple of extra steps for me, that stands in between me, and making calls to the GCIS API in my local Postman Client. Interactive API documentation via Swagger and Apiary has significantly moved the API definition conversation forward, but [just like we should be thinking beyond just language specific clients, we also need to be enabling our API consumers to speak the formats popular HTTP clients like Postman speak](http://apievangelist.com/2015/08/28/thinking-beyond-just-language-specific-clients-and-also-speaking-the-formats-popular-http-clients-are-using/).