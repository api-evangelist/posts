---
layout: post
title: The API Behind Every Feature In The User Interface
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_23_at_11.14.58_pm.png
atomdate: 2016-10-24T20:00:00.000Z
tags:
  - User Interface
---
I have blogged about this topic in the last 60 days, but I predict it is an area you will hear from me about regularly until I see it baked into more software solutions. [CloudFlare, one of my favorite DNS API providers](http://cloudflare.com) has what I think is the best approach to linking to an API in the bottom corner of every UI element in their dashboard. If you look in the bottom right corner, next to the help icon you will see an API link.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cloudflare_ui_api_1.png)

When I click on the API link I'm given the API path that corresponds to the UI element. In this scenario it allows me to purge the cache for my domain.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_23_at_11.14.58_pm.png)

[I am also given a link to the full CloudFlare API documentation](https://api.cloudflare.com/#zone-purge-all-files). I have always been an advocate for companies making sure to have an "API" or "Developer" link in the footer of their main website. If you can make sure and have it front and center in the global navigation--all the better. Now I"m going to be advocating for an inline approach like CloudFlare. If all software as a service (SaaS) providers provided API transparency and access in this way, it would be a much different landscape.

The more people that know about APIs, the more people are putting them to work developing web and mobile applications, to assist us in moving our valuable bits and bytes around the cloud using iPaaS services like Zapier, and the increasing number of other applications APIs are being put to work in. When you make APIs accessible in this way, it transforms [API solutions like Push by Zapier](http://apievangelist.com/2016/10/11/ipaas-in-your-browser-with-push-by-zapier/) into some pretty empowering solutions for helping the average business user put APIs to work, whenever and wherever they need.

Inline access to the API resources behind ALL UI elements is something I will be writing about regularly. Hopefully, I won't have to just keep talking about CloudFlare, and some other SaaS providers step up as well. If you are doing this, or know of a software provider that is as well, let me know so I can showcase here on the site.