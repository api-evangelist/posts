---
layout: post
title: Easier To Offer Ops APIs To Your Devs If Your API Service Provider Has APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-inception.png
author:
  name: kinlane
tags:
  - APIs
---
[I'm looking at the pricing APIs offered by some of the API providers that are further along in their API journey](http://apievangelist.com/2015/12/12/apis-in-the-most-mature-sectors-have-pricing-apis/). This is just one example of how API providers are offering more operational level APIs to their developers, giving them control over their own integration, allowing programmatic control over account settings, billing, rate limits, and pricing.

I've talked about the need to [allow for more automation](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/) of the [modern API life cycle](http://apievangelist.com/2015/11/29/the-api-lifecycle-my-talk-from-defrag-and-apistrat/), allowing API consumers to better manage their consumption across the many APIs they are depending on. [This is why I'm spending a greater amount of time focusing on API service providers in the space practicing what they preach, and making simple, easy to use APIs available for the services they offer](http://apievangelist.com/2015/11/30/making-sure-everything-you-offer-as-an-api-service-provider-is-portable/).

When API service providers do this, it make it easier for API providers to extend API driven operations to their consumers. The fact that my 3Scale API management infrastructure has an API, allows me to proxy and deliver a pricing, plans, and rate limit API to my API consumers. All of these elements are present in the service composition 3Scale provides me, and the fact that they have an API allows me to extend it as part of my own API stack to my consumers.

This does not stop with just the API management line of my API life cycle. I can provide programmatic access to my API monitoring, because [API Science](http://apis.how/h1h2mnxnc4) and [Runscope](http://apis.how/8nlsropidv) has APIs, and to my SDKs via [APIMATIC](http://apis.how/ix4raakqkd), and multi-format versions of my API definitions using the [API Transformer API.](http://apis.how/okfoexmpcm) Every stop along my API life cycle involves my API consumers, and in addition to me being able to automate my API operations using APIs, my developers should be able to automate their API consumption as well.

The moral of this story I guess, is that if you are providing services to API providers--have all of your services available via an API. Once you have done this, start thinking about how your customers will be needing to extend these services to their own consumers. Thank you for helping me understand and manage my API operations, but also assist me in helping my developers better manage their own API integration--using APIs. #thanks