---
layout: post
title: Communication With Consumers Through The Design Of Our APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/the_sunset_http_header.png
atomdate: 2017-05-01T19:00:00.000Z
tags:
  - Design
  - Communication
  - Consumers
  - APIs
  - Consumer
---
Many of the problems that APIs are often associated with API adoption can often be mitigated via more communication. I track on a number of ways the [successful API providers are communicating around their API efforts](http://communications.apievangelist.com/), but I also like it when API designers and architects communicate through the actual technical design of their APIs. One example of this can be found in the [IETF draft submission for The Sunset HTTP Header](https://tools.ietf.org/html/draft-wilde-sunset-header-02), by Erik Wilde.

_"This specification defines the Sunset HTTP response header field, which indicates that a URI is likely to become unresponsive at a specified point in the future."_

In his original post, [nothing lasts Forever (and some things disappear according to a schedule)](http://dret.typepad.com/dretblog/2015/08/http-sunset-header.html), Erik shows us that a little bit of embedded communication like this in the design of our APIs can help make API consumers more in tune with what is going on. It is tough to get people's attention sometimes, and I think sometimes when us engineers are heads down in the code we tune out the regular channels, and baking things in the request and response structure of the API can help out a lot.

I like the concept of baking API communication and literacy into our operations through good API design. This is one aspect of hypermedia API design that I think often gets overlooked by the haterz. I'll keep adding these little building blocks to [my API communications research](http://communications.apievangelist.com/), helping develop ways we can better communicate with our API consumers through our API design--in real time.