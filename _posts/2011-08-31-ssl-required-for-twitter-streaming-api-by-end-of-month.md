---
layout: post
title: SSL Required for Twitter Streaming API by End of Month
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Twitter-Logo.jpg
author:
  name: kinlane
tags:
  - Twitter
  - Streaming
---
On September 29th, [Twitter will be making the Streaming API support only SSL](https://dev.twitter.com/blog/streaming-api-turning-ssl-only-september-29th "Twitter will be making the Streaming API support only SSL"). The Twitter Streaming API currently supports HTTPS requests, but will completely discontinue HTTP support by the end of the month.

Along with the SSL switch they are letting developers know they will also be eventuallydeprecatingBasic Auth for the [Twitter Streaming API](https://dev.twitter.com/docs/streaming-api "Twitter Streaming API"), and encouraging everyone to use OAuth.

SSL and OAuth are fast becoming standards for APIs, and it seems wise to implement with the first version of the API, rather than having to force developers to switch down the road.