---
layout: post
title: Analytics For Both API Providers and Consumers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-analytics-2.png
author:
  name: kinlane
tags:
  - Analytics
  - Consumers
  - Providers
  - Consumer
---
I'm going through all of my bulding blocks and tools for [API management](http://management.apievangelist.com "API Management"), as I'm updating and expanding this area of the [API Evangelist network](http://apievangelist.com/network.html). After doing this work, I'm surprised that are aren't any open source or even independent analytics solutions that serve both the API provider and consumer.

Generally analytics for API providers and consumers are provided by one of the numerous API management providers.But what I'm looking for is stand alone analytics solutions that API providers could deploy on their own, or even an API integrator could put to use to track their own API usage across multiple APIs.

I learned about using [StatsD](https://github.com/etsy/statsd/ "StatsD") and [Graphite](http://graphite.wikidot.com/) from the [InfoChimps](http://www.infochimps.com/) team, and I've discussed the potential of using Google Analytics API as a layer of your API deployment or integration. There are also a lot of mobile analytics packages, but there is no straightforward solution for API providers and consumers.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-analytics-4.jpeg)

Maybe it is because API management providers are meeting the needs of API providers, and I think the new breed of API integration providers like Runscope and TheRightAPI will be addressing the consumer side of the demand. Or maybe I'm just not looking hard enough, and there is another solution out there.

At first thought, it seems logical to use Google Analytics, and track your API alongside your website operations. It could be that these two are connected? Regardless, with the number of public and open APIs, as well as the growing number of APIs it seems that a focused solution would emerge, and possibly an open source solution.

I'm sure I'm just missing some existing analytics that could be easily converted and applied to server side APIs. If you have an existing and are not using an API management solution, how do you track the usage of your API resources? I'd love to understand this more.