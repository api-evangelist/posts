---
layout: post
title: Email as a Content API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ifthisthenthat-api-evangelist-to-wordpress-via-email.png
author:
  name: kinlane
tags:
  - Content
  - Email
  - ai
---
I think email is highly underrated as a content API. I know its not what we traditionally think of as an API, but has a lot of potential as a basic interface into an application.

An example of this is [If This Then That (iftt)](http://ifttt.com/ "If This Then That"). I use iftt to syndicate content to some of my blog platforms. As part of my blogging strategy I want posts I publish on API Evangelist, to also show up on my [Blogger](http://kinlane.blogspot.com/ "Blogger"), [Posterous](http://kinlane.posterous.com/ "Posterous"), [Tumblr](http://kinlane.tumblr.com/ "Tumblr") and [Wordpress](http://kinlane.posterous.com/ "Wordpress").

Using iftt you can setup tasks that get triggered on certain events. One such trigger is a new post to an RSS feed. So when a new blog posts shows up in the [API Evangelist RSS](http://feeds.feedburner.com/ApiEvangelist "API Evangelist RSS Feed") feed I can have iftt pull the title and body and push to a channel. iftt provides channels for Posterous and Tumblr, allowing me to automatically syndicate using their APIs.  

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/ifthisthenthat/ifthisthenthat-api-evangelist-to-wordpress-via-email.png)

There are no channels for Blogger and Wordpress, so I use their Gmail channel in conjunction with the post by email features on Blogger and Wordpress. So instead of using an API to syndicate my content, I use email as an interface for these blogging platforms.

Using email as a content API is obviously not for every situation, but for some application processes, it might just work for moving content from one application to another, without much overhead.