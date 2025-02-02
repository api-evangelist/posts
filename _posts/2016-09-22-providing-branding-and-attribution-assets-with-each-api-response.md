---
layout: post
title: Providing Branding And Attribution Assets With Each API Response
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-brand.png
atomdate: 2016-09-22T16:00:00.000Z
tags:
  - Branding
---
[I am tracking on the approaches of API providers who have branding world together when it comes to platform operations](http://branding.apievangelist.com/). I'm always surprised at how few API providers actually have anything regarding branding in place, especially when it seems like loss of brand control, attribution, and other concerns seem to be at the top of everyone's list.

I was hooking up the [Medium API](https://github.com/Medium/medium-api-docs) to my API monitoring and publishing system, syndicating select stories of mine to the platform and found myself thinking about how important an API branding strategy is (should be) to content platforms like them. Medium doesn't let you pull posts via the API (yet), but if it did, I would make sure branding and attribution was default.

Few API providers have their API brand strategy together, let alone provide easy to understand and find assets to support the strategy. It seems like to me that if you are concerned about brand control, or just want to really extend your brand across all websites and mobile applications where your API resources are put to use, you would want to bake branding and attribution into the API response itself, as well as a robust branding area of the developer portal.

I'm going to explore concepts around branding and attribution as a default layer of API access. Everything from thinking about hypermedia approaches to providing link relations, to maybe [including link relations in the header like Github does with pagination](http://apievangelist.com/2016/05/02/http-header-awareness-using-the-link-header-for-pagination/), but using branding and attribution focused link relations. I would like to be able to provide light footprint options that may not require changing up the JSON response, or add an entirely new media type.

When Medium does open up /GET for posts on the platform, I'd be stoked if there were branding and attribution elements present, driven by settings in my account. I'm not under the delusion that every developer who makes a call to an API will respect branding guidelines, but if it is front and center with every API call, and easy to implement, the chances increase dramatically.

Anyways, some food for thought around branding. I will push this topic forward as I have time and maybe play with a prototype for the API Evangelist blog. I'd love for consumers and syndicators of my content to be able to extend the reach of my brand, or at least send some love my way with a little attribution.