---
layout: post
title: Does Your API Have An Account Usage API For Developers?
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Usage
  - Developers
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/noun-project/noun-project-api-usage-2.png)](http://api.thenounproject.com/)

I was playing with the [Noun Project API](http://api.thenounproject.com/) today. If you hadn’t noticed, I use the [Noun Project](http://thenounproject.com/) throughout the API Evangelist network. The simple, black and white icons work very well with my minimalistic look, and help me convey some very abstract API concepts.

As I was reviewing the Noun Project API, looking at what resources are available via their API endpoints, I noticed a /usage endpoint, which lets you understand your API usage, as well as the rate limits for your API access level. This isn’t revolutionary, its something I've seen on other APIs, but it is an important resource I think many API owners overlook.

Providing an API usage endpoint by default for all APIs makes sense. Developers can either build into their apps, or just setup some sort of daily job, that alerts them when they are approaching API rate limits. Much like push notifications on your bank account or other online resources, a usage API will go a long way in helping developers quantify and understand what resources they have available to them, as well as what they consume on regular basis.