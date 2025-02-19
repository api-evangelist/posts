---
layout: post
title: Wrapping URLs for Another Layer of Metrics in Your API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/turn-long-short.jpg
author:
  name: kinlane
tags:
  - Metrics
---
I’m documenting Twitter’s process of wrapping the URLs contained within tweets, using a shorter URL like t.co. I’m interested in understanding the opportunities around URL wrapping (aka URL shortening) as an API business strategy.

From an API business perspective, the reasoning for implementing URL wrapping as part of your API would be:

*   **Saving Space** \- By shortening URLs you are reducing the length of any string that contains URLs, and in cases like Twitters, every character counts
*   **Security** - Twitter is actively combating URLs that carry malicious intent
*   **Analytics** - Each shortened URL provides a mechanism for tracking clicks on URL within content

Shold URL wrapping be something API owners adopt for all content served up via an API? Could every URL within content served up via an API be wrapped, allowing tracking of clicks through that URL--no matter where that content ended up living after it left the API?

Just some initial thoughts, but it seems that a comprehensive linking strategy could be established, bundled with a URL shortening service like [Bit.ly](https://bitly.com/), [Google URL Shortener](http://goo.gl/) or a custom service--and provide a new layer of metrics that could be used to tell how your developers and their application users are interacting with the content you serve up via your API.