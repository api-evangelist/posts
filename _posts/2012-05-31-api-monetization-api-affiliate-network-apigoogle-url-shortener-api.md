---
layout: post
title: 'API Monetization: API Affiliate Network API + Google URL Shortener API'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/google-affiliate-network.jpg
author:
  name: kinlane
tags:
  - Monetization
  - Network
---
In my quest to understand the monetization opportunities via APIs, I’m studying the possibilites around tracking, and now monetization of content and URL’s served up via APIs.

The other day I considered [wrapping URLs for another layer of metrics in your API](/2012/05/26/wrapping-content-urls-for-another-layer-of-metrics-in-your-api/ "wrapping URLs for another layer of metrics in your API"), and today I’m thinking about how to evolve API monetization beyond advertising, defining entirely new API driven conversion events where both API owners and consumers, can realistically make money.

I first talked about an [advertising network dedicated to APIs and developers](http://apievangelist.com/2011/09/28/advertising-network-dedicated-to-apis-and-developers/ "advertising network dedicated to APIs and developers") last year, and everytime I come back to it in my Evernote list, I can’t help but consider using the [Google Affiliate Network](http://www.google.com/ads/affiliatenetwork/ "Google Affiliate Network") as an engine.

I don’t have any access to Google Affiliate Network (I submitted request), so all of this is speculative. But after looking through the [Google Afffiliate Network API interface](https://developers.google.com/affiliate-network/), it looks like I can pull both advertisers, publishers and events through the API-- so I’m envisioning two scenarios:

*   **API Owners** - As an API owner I could use the Google Affiliate network to define “events” that could occur via my APIs, and setup my API developers as “publishers”.
*   **API Consumers** - As an API consumer I could setup various APIs I use as “advertisers”, creating specific events for these APIs, and setup my own applications or sites as “publishers”.

![](http://kinlane-productions2.s3.amazonaws.com/google/google-url-shortener.jpg)

In either case, API owners or API consumers could replace any URLs in content or URLs directly served up via APIs with a Google Affiliate Network generated URL with specific conversion events defined, then shortened using [Google URL Shortener API](https://developers.google.com/url-shortener/ "Google URL Shortener API").

This would create a layer of not just metrics, but conversion events that could be monetized. API consumers could choose from affiliate opportunities available on the Google Affiliate Network, and API owners could do the same, or define their own conversion events that were meaningful to their business goals.

These are just some original thoughts on API monetization using [Google Afffiliate Network API](https://developers.google.com/affiliate-network/) and the [Google URL Shortener API](https://developers.google.com/url-shortener/ "Google URL Shortener API"). Seems like there is a lot of opportunity monetize the data and resources flowing through API pipes, whether you’re an API owner or avid API consumer.