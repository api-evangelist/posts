---
published: true
layout: post
title: Controlling The Conversation Around Your Mobile Application APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/desert-dragon-light-dali.jpg
author:
  name: kinlane
tags:
  - Mobile
  - Applications
---
I have seen it play out over and over since I began monitoring the API conversation. Companies who launch APIs to power a mobile application but refuse to, or are unaware of how they should be controlling the conversation around public API infrastructure. The most common reason for this is that companies do not view the APIs behind their mobile applications as public APIs, and that somehow because they are buried within their mobile application, that they are safe from hackers. Completely clueless of the fact that anyone can run any mobile application through a proxy and reverse engineer the API infrastructure behind any mobile application.  
  
Mobile application platforms that do not control the conversation around their public APIs are the ones who end up having security incidents down the road. This is due to the face that these providers end up having a pretty significant blind spot stemming from their lack of awareness and control of the conversation around their APIs, and someone ends up paying closer attention to their APIs and eventually someone finds a vulnerability to exploit. If you have a publicly available mobile application, then you have publicly available APIs, and you should be treating your APIs like they are public. I’m not saying you should offer the public free and unfettered access to your APIs, I am simply saying that you should be operating a public API program around your APIs, controlling who has access, and shaping the message around what your APIs do, or don’t do.  
  
To see examples of companies who do not have a handle on their API conversation, search for TikTok API, or for Tinder API, and you’ll see that hackers own the conversation when it comes to the APIs for these platforms. When you aren’t dealing with this side of your operations, rogue API operators step up and dominate the conversation on GitHub, Stack Exchange, NPM, and other places that coders hang out. We’ve already seen Tinder have security and privacy issues, and I’m betting that we’ll see the same with TikTok, especially with their popularity making them such a vector for attack. Sensible security and privacy is a blind spot for platforms who see a public API presence as simply about offering free access to a public API.  
  
If you have a public mobile application and you search for your company name plus API and you do not own the top listings—it is a problem. It is a sign that you aren’t thinking about the big picture when it comes to the resources you are making available via the web. This isn’t about you becoming the next Twitter with a public API. This is about you looking at your API infrastructure from an external perspective, and controlling public opinion around your infrastructure. With this external perspective you will begin to look at API security, privacy, monitoring, performance, scalability, terms of service, ad other essential aspects of your infrastructure differently. If you are just operating and thinking your APIs are safe behind your mobile application, you will be getting p0wned every time someone publishes the blueprints to your Death Star, revealing your weaknesses, rather than just being public about it all in the first place.