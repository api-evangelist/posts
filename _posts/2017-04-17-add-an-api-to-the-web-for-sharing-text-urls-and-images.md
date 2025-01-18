---
layout: post
title: Add An API To The Web For Sharing Text, URLs And Images
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/share_mobile_web_native.png
atomdate: 2017-04-17T22:00:00.000Z
tags:
  - Images
  - Web
  - Sharing
---
I am working to push forward [my embeddable API research](http://embeddable.apievangelist.com/) today, so I'm on the hunt for new tools and standards that can be included in my research and put to work by API providers. One of the top reasons for doing embeddable tools is the sharing of information and media on the web. Share buttons have become ubiquitous, so I wanted to have some standard approaches to making them a default part of API operations.

While monitoring the API space I came across "[a proposal to add an API to the web for sharing text, URLs and images to an arbitrary destination of the user's choice](https://github.com/WICG/web-share)":

_[Web Share](https://github.com/WICG/web-share) is a proposed web API to enable a site to share data (text, URLs, images, etc) to an arbitrary destination of the user's choice. It could be a system service, a native app or another website. The goal is to enable web developers to build a generic "share" button that the user can click to trigger a system share dialog._

 The current options for sharing content from a web page are:

1.  Share buttons to specific web services (e.g., Facebook and Twitter buttons).
2.  Share buttons built into the browser UI. Many browsers, especially on mobile, have a "share" button that sends the current page URL to a native app of the user's choice.

[Web Share](https://github.com/WICG/web-share) provides a pretty simple, yet useful example for sharing links. I'm adding it to [tmy toolbox for my embeddable research](http://embeddable.apievangelist.com/tools/). Once I gather a variety of other tools and standards I will step back to look at the 100K view. I'm hoping to stimulate a more embeddable approach to conversational interfaces, something that us asynchronous antisocial folk can work with, going beyond just voice, and messaging.