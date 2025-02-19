---
layout: post
title: Requiring SSL For API All Calls
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_11_28_at_9.58.49_am.png
atomdate: 2017-01-13T20:00:00.000Z
tags: []
---
This is one of those regular public service announcements that if at all possible, you should be requiring SSL for all your API calls. I recently got an email from the IBM Watson team telling me that they would be enforcing encryption on all calls to the Alchemy API in February.

SSL is something I've started enforcing on my own internal APIs. I do not have wide usage of my APIs by third-party providers, but I do have a variety of systems making calls to my APIs, transmitting some potentially sensitive information--luckily nothing too serious, as I'm just a simple API Evangelist.

[Encryption is an area I research regularly](http://encryption.apievangelist.com/), hoping to stay in tune (as much as I can) with where discussions are going when it comes to encryption and API operations. Much of it doesn't apply to the average API provider but requiring encryption for API calls, and emailing your developers when and if you do begin enforcing, is what I'd consider an essential building block for all API providers.

I'll keep crafting a unique blog post each time I receive on of these emails from the APIs I depend on. Hopefully some day soon, all APIs will be SSL by default.