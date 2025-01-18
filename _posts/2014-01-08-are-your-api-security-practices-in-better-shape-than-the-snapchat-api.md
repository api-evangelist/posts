---
layout: post
title: Are Your API Security Practices In Better Shape Than The Snapchat API?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/snapchat.png
author:
  name: kinlane
tags:
  - Security
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/snapchat.png)](http://www.snapchat.com/ "snapchat")

If you weren't following the news over the holidays, a rogue group released [SnapchatDB](http://www.snapchatdb.info/), containing the 4.6 million [Snapchat](http://www.snapchat.com/ "snapchat") user profiles, after exploiting the poorly secured mobile application API.

There are opposing views of what's happened, but apparently the group contacted Snapchat in August 2013 letting them know of a potential vulnerability in their API, in which Snapchat claims they responded by instituting rate limiting to address the problem.

Apparently the actual vulnerability wasn't addressed, and in December the group mapped the private API, the company uses for their mobile app. They don't officially have an API, but like most mobile applications, it is right beneath the surface.

After mapping the interface the group proceeded to suck all the data, organized and publish as SnapchatDB, in an effort to raise awareness of the issue and point out that Snapchat was to slow in responding to the exploit.

Regardless of the exact facts, it is clear that Snapchat was lax on security. API rate limiting and other common security measures are pretty common place. [API providers like 3Scale have been around for years delivering plug and play infrastructure](http://bit.ly/13esk6Q "API infrastructure provider") to help you deal with this. There is no reason to be caught with your pants down.

It doesn't matter whether your API is public, private or just for partners, you need to have your security practices tight. You owe it to your users and developers.

_Disclosure: 3Scale is an API Evangelist partner._