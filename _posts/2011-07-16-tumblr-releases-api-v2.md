---
layout: post
title: Tumblr Releases API v2
url: http://apievangelist.com/2011/07/16/tumblr-releases-api-v2/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags: []
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/tumblr/Tumblr-Engineering-Blog.png)[Tumblr just released version 2.0 of the popular blogging platform API](http://engineering.tumblr.com/post/7541361718/introducing-tumblrs-new-api "Tumblr just released version 2.0 of the blog platform API"), in an effort to make developers lives a little easier when integrating with the Tumblr platform.

The previous version of the API made distinctions between read and write operations and pushed different activity to two separate domains, the www.tumblr.com and the blog subdomain.

The new API version consolidates all API access to api.tumblr.com and exposes two major resources in the URI: /blog and /user. Consolidation under one domain will allow Tumblr to effectively measure and balance traffic using DNS.

The new URLs will follow a pattern, making them intuitive, allowing developers to easily discover and experiment with the API without having to rely exclusively on documentation.

Instead of adhering to strict RESTful practices, Tumblr is looking to create simple URLs that enable manipulation by the average human.

For example, to pull the avatar of my tumblr blog I use the following URL: [http://api.tumblr.com/v2/blog/kinlane.tumblr.com/avatar](http://api.tumblr.com/v2/blog/kinlane.tumblr.com/avatar)

The API returns the default avatar image, and if I want a larger size, I just append the size to the URL: [http://api.tumblr.com/v2/blog/kinlane.tumblr.com/avatar/512](http://api.tumblr.com/v2/blog/kinlane.tumblr.com/avatar/512)

In the first version of the Tumblr API, all data was available in XML, with JSON support added largely as an afterthought. Now Tumblr has just decide to eliminate XML, and focused on dialing in their JSON implementation. A common approach for API owners.

The new API implements OAuth 1.0a for authentication and they are looking at upgrading to OAuth 2.0 in the neear future.

I like how Tumblr has consolidated under a single domain, and I favor their approach to intuitive URL's over a strict RESTful implemntation.

The Tumblr API v2 is definitely an improvement, I will see how it sizes up against the [new Posterous API launched last month](http://apievangelist.com/2011/06/10/posterous-from-saas-to-paas-using-an-api/ "new Posterous API launched last month").