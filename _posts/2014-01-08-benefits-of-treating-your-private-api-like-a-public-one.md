---
layout: post
title: Benefits Of Treating Your Private API Like a Public One
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-padlock.png
author:
  name: kinlane
tags:
  - Public
---
I stopped counting the number of successful applications that have had their private APIs reversed engineered by some savvy users, [Most recently Snapchat](http://apivoice.com/2014/01/08/are-your-api-security-practices-in-better-shape-than-the-snapchat-api/ "Snapchat API reverse engineered"), and famously the [original rogue Instagram API](http://blog.programmableweb.com/2010/12/15/the-full-featured-unpublished-instagram-api/) was developed this way, and even auto maker [Tesla had their API reverse engineered](http://www.teslamotors.com/forum/forums/flaws-rest-api-authentication).

This is fresh on my my mind because of the [Snapchat security breach](http://apivoice.com/2014/01/08/are-your-api-security-practices-in-better-shape-than-the-snapchat-api/ "Snapchat security breach"), in which this savvy tech user notified Snapchat back in August, and the company instituted rate limiting, but still left the API exposed for further attack, which the user took full advantage of in December by scraping all users after documenting and expoiting the private API.

If you are developing a mobile application, you are building an API. Even if you never intend on making this API public, there are huge benefits of going through the motions of pretending like it is—you will learn a lot! Every application API I’ve seen reverse engineered was clearly developed in a rush, thinking that security through obscurity was a solid production strategy.

When you are planning your apps API, stop! Consider what you will need to make this publicly available. The exercise is healthy. Allow for registration of developers and apps, even if it will just be your team signing up. Put in place rate limits, analytics, etc. There are a ton of features that have evolved in the public API space that are transferrable to private APIs.

[API infrastructure providers like 3Scale](http://bit.ly/13esk6Q "API Infrastructure Providers") have been working at this for years. You can sign up for a free account, get started without any extra work from your dev team, and you can save any resources for making sure you monitor your API stats on a daily basis and responding to not just security threats, but find tuning how your apps are using your own API.

Don’t make the mistake that the Snapchat, Instagram and Teslas of the world have made. Treat your API like it is public, even if you never intend to open it up publicly. You will think differently and be ahead of the curve when it comes to monitoring and security.

_Disclosure: 3Scale is an API Evangelist partner_