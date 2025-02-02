---
layout: post
title: API Rate Limiting At The DNS Layer
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_rate_limiting_at_dns_layer_cloudflare.png
atomdate: 2017-04-25T22:00:00.000Z
tags:
  - DNS
  - Rate Limiting
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_rate_limiting_at_dns_layer_cloudflare.png)](https://www.cloudflare.com/rate-limiting/)

[I just got an email from my DNS provider CloudFlare about rate limiting and protecting my APIs](https://www.cloudflare.com/rate-limiting/). I am a big fan of CloudFlare, partly because I am a customer, and I use to manage my own infrastructure, but also partly due to the way they understand APIs, and actively use them as part of their business, products, and services.

Their email spans a couple areas of my research that I find interesting, and extremely relevant: 1) [DNS](http://dns.apievangelist.com), 2) [Security](http://security.apievangelist.com), 3) [Management](http://management.apievangelist.com). They are offering me something that is traditionally done at the API management layer (rate limiting), but now offering to do it for me at the DNS layer, expanding the value of API rate limiting into the realm of security, and specifically in defense against DDoS attacks--a serious concern.

Talk about an easy way to add value to my world as an API provider. One that is frictionless, because I'm already depending on them for the DNS layer of my web, and API layers of operations. All I have to do is signup for the new service, and begin dialing it in for my all of my APIs, which span multiple domains--all conveniently managed using CloudFlare.

Another valuable thing CloudFlare's approach does, in my opinion, is to reintroduce the concept of rate limiting to the world of websites. This helps me in my argument that companies, organizations, institutions and government agencies should be considering having APIs to alleviate website scraping. Using CloudFlare they can now rate limit the website while pointing legitimate use cases to the API where their access can be measured, metered, and even monetized when it makes sense.

[I'm hoping that CloudFlare will be exposing all of these services via their API](https://api.cloudflare.com/), so that I can automate the configuration of rate limiting for my APIs at the DNS level using APIs. As I design and deploy new API endpoints I want them automatically protected at the DNS layer using CloudFlare. I don't want to have to do extra work when it comes to securing and managing web or API access. I just want a baseline for all of my operations, and when I need I can customize per specific domains, or down to the individual API path level--the rest is automated as part of my continuous integration workflows.