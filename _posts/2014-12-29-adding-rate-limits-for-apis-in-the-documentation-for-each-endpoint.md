---
layout: post
title: Adding Rate Limits For APIs In The Documentation For Each Endpoint
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twitter-rate-limit-docs.png
author:
  name: kinlane
tags:
  - Documentation
  - Rate Limits
  - APIs
  - ddi
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twitter-rate-limit-docs.png)](https://dev.twitter.com/rest/reference/get/application/rate_limit_status)

As I look through the API efforts of various providers, I’m always looking for the little things that can make on-boarding, and sustained integration with an API as frictionless as possible. One of the [building blocks that I recommend API providers employ](http://management.apievangelist.com/building-blocks.html) in their operations, is a page that explains API rate limits—providing vital information on how API resources are throttled (or not).

An improvement on the standard rate limit building block, can be seen at Twitter. [Inline in the Twitter API documentation](https://dev.twitter.com/rest/reference/get/application/rate_limit_status), there are details about rate limiting for that specific endpoint. This way, as you are learning about each endpoint, you can also understand what limitations are in place. A small addition that could prove critical, for any API provider, especially Twitter, who has some of the most complex rate limiting of any API I know of.

At first glance, something small like including rate limit information within each API endpoint documentation may seem insignificant, but think of it like bobsledding or swimming in the olympics, where the slightest adjustment can reduce friction in just the right place—giving you the competitive advantage you need. Taking a fresh look at the building block(s) Twitter uses around API rate limiting, is expanding my own thoughts on how any API provider can approach their own rate limiting, and represents why I keep an eye on API pioneers like Twitter, even if I don’t always agree with 100% of their decisions around platform operations.

_**P.S.** Did you notice the picture is of the rate limiting information, within the rate limit API endpoint? That will be another story, as part of my expansion of thought in the area of rate limiting._