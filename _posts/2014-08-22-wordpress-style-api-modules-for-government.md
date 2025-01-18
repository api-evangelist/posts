---
layout: post
title: WordPress Style API Modules For Government
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/newzealand-government-banner.png
author:
  name: kinlane
tags:
  - WordPress
  - Government
---
The other night I was [writing about the need for a social media directory API](http://kinlane.com/2014/08/18/all-government-should-have-a-social-media-directory-api/), like the one [the GSA has launched for the federal government](http://www.usa.gov/About/developer-resources/federal-agency-directory/), but specifically for the City of Chicago. I was trying to get a list of each of the City of Chicago Twitter accounts, and while I’m glad there is a [central social media account list](http://www.cityofchicago.org/city/en/narr/misc/social_media.html), I always want an API so I can eliminate the need for data entry.

After I posted my story, Oliver Seiler ([@0seiler](https://twitter.com/0seiler)) emailed me the [API endpoint for the New Zealand Government Directory API](https://www.govt.nz/api/v1), which doesn't include the social media information that our [federal government social media directory API](http://www.usa.gov/About/developer-resources/social-media-registry.shtml) delivers, but offers another look at what one possible pattern for government directory APIs is.

This is one of the by-products of [my profiling of federal government APIs](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government/), that I will begin to see API patterns that ALL government possess, things like a directory API. There should be a WordPress of the government directory API, a open source PHP Web API, possessing a common API definition, allowing any government agency, of any level, to be able to quickly download and deploy a directory API for their branch of government.

I’m hoping when I’m done with my profiling of 120 federal government APIs, I'll have better suggestions of which APIs patterns government agencies should be offering by default. I will also have API definitions for all of these government API patterns, which I can probably pretty quickly crank out server side API code to support—who knows maybe [Wordpress 4.1 will be available by then and I can use Wordpress as an API deployment framework](http://apievangelist.com/2014/08/02/everyone-is-about-to-get-an-api-with-the-new-wordpress-api/).

Until then I will just start tracking on all the common patterns for government API deployment, and publish as stories her on API Evangelist, and on my [federal government research site](http://federal-government.apievangelist.com/). I'm thinking other things I'm tracking on, like API deployment using containers, and deployment via PaaS platforms like Heroku, will contribute to this type of API deployment across government as well, making it a very interesting time to be in tech.