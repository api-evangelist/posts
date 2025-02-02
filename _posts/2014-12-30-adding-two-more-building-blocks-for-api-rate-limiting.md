---
layout: post
title: Adding Two More Building Blocks For API Rate Limiting
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-speed-limit-blank.jpg
author:
  name: kinlane
tags:
  - Rate Limiting
  - ddi
---
After giving some recent attention to the [Twitter API ecosystem](https://dev.twitter.com/), a place where I always learn a lot, I’m shifting up my API rate limit building block, in my list of [API management resources](http://management.apievangelist.com "API Management"). If you aren’t familiar with my concept of “building blocks”, in 2010 I started looking at the top APIs, and tracking on the common “building blocks” these providers are using to successfully operate their API platform. As I go into 2015, I’m still refining, and adding to this list, in hopes of establishing a [common list of building blocks, that any API provider can consider as they are designing, and operating their own platforms](http://management.apievangelist.com/building-blocks.html).

Until now, I had a single building block, underneath a category I titled “service levels”, which I called the rate limit page. My intent with this building block is to help API providers understand the importance of sharing details on how they rate limit API access, and publish it to a single page for developers to use when on-boarding, and throughout their API integration life-cycle. After seeing how Twitter handles their rate limit, which includes this overview page on rate limiting, I’m now adding two new building blocks, and putting all of them under new category titled “Rate Limiting”.

I now have three rate limiting related API building blocks I recommend API providers consider when designing their platform:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-speed-limit.jpeg)

**Rate Limits Page** - Developers need to understand what the limitations of API usage are upfront. Rate limiting an throttling of API access has become commonplace to manage security, and resource load. This building block is about providing a single page explaining how this process works, setting expectations with API consumers.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-documentation-inline-rate-limits.png)

**Rate Limit Information Inline In Docs** - In addition to a rate limits page, explaining information about limitations on API usage, some API providers like Twitter are including rate limits within API documentation. With this approach, each API endpoint has its related rate limits published alongside other details.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-rate-limit-api.png)

**Account Rate Limit API** - As API usage grows the need to be able to programmatically manage your account is increasing. Some API platforms also provide APIs for the management of platform operations. It makes sense that API providers should also offer an API for getting rate limit details for their respect account and apps.

As with all of my building block recommendations, it is up to you the API provider, to decide what you want to offer, but I recommend considering all three of these rate limit building blocks essential. Providing details on API rate limiting is critical in building trust with new, and existing API consumers, and as the API space continues to grow, the need for automated account management tools, like an API for rate limiting is only going to increase. If you adopt these practices of leading providers now, you have the competitive advantage over other APIs.

[I don’t always agree with Twitter’s approach to managing their API](http://apievangelist.com/2012/06/29/twitter-continues-to-restrict-access-to-our-tweets/), but their ecosystem is always a great place to learn. I personally consider Twitter on of the most important APIs out there, and feel that API providers can learn a lot from the way Twitter approaches their operations. Rate limits are one of the most politically polarizing areas of API operations, and an area that can turn bad real fast, without the proper communication. Something that I think Twitter has worked very hard on addressing, and you can see it in their [rate limit page](https://dev.twitter.com/rest/public/rate-limiting), the rate limit information available [within the documentation for each endpoint, and via an API rate limit API](https://dev.twitter.com/rest/reference/get/application/rate_limit_status)—deep. ;-)

_**P.S.** As I'm linking up this story, I see Twitter also has a [Rate Limit Chart](https://dev.twitter.com/rest/public/rate-limits) page. Maybe a fourth building block, or just go on the rate limit main page?_