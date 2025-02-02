---
layout: post
title: The Voice Chat API Is Great Example Of An Simple, Open, API Driven Resource
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/voice-chat-api/voicechatapi_logo.png
author:
  name: kinlane
tags:
  - Voice
  - Open
---
A free, open-source, API driven conference solution called [Voice Chat API](http://voicechatapi.com/) popped up on my API monitoring radar today, as I was going through my feeds. The Voice Chat API is a very cool, dead-simple conferencing solution. As a tool it provides clear value, and I really like the approach from [Plivo](https://plivo.com/) to rollout out an open, API driven resource like this—a model that could be applied to other valuable resources.

What really stands out is the Voice Chat API does one thing and does it well—audio conferences. It is easy to tell what it does. We aren't having to convince users of a problem, then sell them on a solution. The problem is clear, the solution is simple.

**Open Source**  
The [Voice Chat API is open source and available on Github](https://github.com/plivo/voicechat/), built using "Plivo WebSDK and APIs”. I haven’t investigated the separation between what code is open source, and where the dependencies on Plivo is, but regardless the approach is interesting.

**Add-Ons**  
Providing users with more ways to deploy a conference, the Voice Chat API provides a set of add-ons including a [Hubot Plugin](https://github.com/dhfromkorea/hubot-scripts/blob/master/src/scripts/voicechat.coffee/), that works in Campfire or Hipchat, a [Chrome extension](https://chrome.google.com/webstore/detail/voice-chat/mmamadaodppejbaffaagddokjjekifoe), and a [bookmarklet for deploying a conference from any other browser](http://voicechatapi.com/create).

**API**  
The [Voice Chat API centers around its API,](http://plivo.github.io/voicechat/) which allows developers to create a unique audio conference, the call mobile & landline phone numbers (PSTN) into the bridge. The API deploys to your Heroku account, allowing you do manage your ad-hoc audio conference deployments in the cloud.

I’m still playing around with the [Voice Chat API](http://voicechatapi.com/), understanding how the application and the API works, as well as considering how this new open source approach dovetails with Plivo's business model, but now I’m intrigued which the approach, and how they crafted this API driven resource.