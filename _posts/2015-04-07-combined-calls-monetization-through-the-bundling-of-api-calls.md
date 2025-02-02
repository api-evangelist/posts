---
layout: post
title: 'Combined Calls: Monetization Through The Bundling Of API Calls '
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/alchemy/alchemy-api-ibm-version.png
author:
  name: kinlane
tags:
  - Monetization
  - Bundling
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/alchemy/alchemy-api-ibm-version.png)](http://www.alchemyapi.com/)

I was doing my regular monitoring, and found myself on the [AlchemyAPI](http://www.alchemyapi.com/) site. Not exactly sure how I got there, but I stumbled across their [HTMLGetCombinedData](http://www.alchemyapi.com/api/combined/htmlc.html) API, which can be used for analysis on HTML content, and is one of 3 separate APIs, AlchemyAPI is calling "combined calls".

If you aren’t familiar with AlchemyAPI, the company has a number of valuable APIs, which you can use to make sense of content and data from on, or offline source. I use AlchemyAPI for API Evangelist, to pull keywords, and the content out of blog posts, helping me shed the overall look of a site, and any advertisements--getting down to the raw content. What I thought was particularly interesting about this API, was their approach combined calls, and specifically their approach to monetizing these aggregated API calls.

There are three specific APIs they are considering "combined calls":

*   **[URLGetCombinedData](http://www.alchemyapi.com/api/combined/urls.html)** - Used for performing analysis on a publicly-accessible Internet web pages.
*   **[HTMLGetCombinedData](http://www.alchemyapi.com/api/combined/htmlc.html)** - Used for performing analysis on uploaded HTML content.
*   **[TextGetCombinedData](http://www.alchemyapi.com/api/combined/textc.html)** - Used for performing analysis on uploaded text content.

These three APIs are only available in the AlchemyAPI [pro and enterprise packages](http://www.alchemyapi.com/products/pricing), which for me makes see this aa a potentially new approach to [API monetization](http://monetization.apievangelist.com/). I don’t see it as something that works for all API providers, but when you have numerous decoupled APIs, which developers may also be implemented several of them at a time, or daisy chaining them together—a combined API call, might save some developers valuable time.

Combined API calls also seem like a potential opportunity for API platform developers themselves. If an API platform, provides tools for developers to aggregate, and stitch together multiple APIs, and publish their recipes, it is something that could produce some interesting patterns, that may better deliver solutions to the problems developers actually face during integration. At the very least, allowing developers to publish SDKs that accomplish the same thing, might achieve the same thing.

I am just looking to share my thoughts on AlchemyAPIs approach to aggregating their API calls, and specifically the focus on monetization, adding the concept to my research. Maybe it is something others can for their API platforms, or maybe API developers, could provide aggregated API recipes, for specific API platforms, or across multiple platforms.