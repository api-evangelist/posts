---
layout: post
title: Generating Client Side Code From Machine Readable API Definitions
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-gears.png
author:
  name: kinlane
tags:
  - Definitions
  - Client
  - Definition
  - Code
---
This post has been open for almost two weeks now in Evernote. It began as a simple story about the possibility for generating code samples and libraries using Swagger. The longer it stays open, the wider the definition becomes, so I have to post something, just to draw a line in the sand. I’m not talking about generating code that runs on the server, this post is all about everything on the API consumption side of things.

Shortly after Wordnik launched the machine readable API definition format [Swagger](http://swagger.io), they launched a [library for generating client side code samples in a variety of languages](https://github.com/swagger-api/swagger-codegen). This was something that was evolved upon by [Apiary](http://bit.ly/1pb4H8k), with the launch of their API design platform, and introduction of [API Blueprint](http://bit.ly/1arUHCU). Even with these advances forward, there were still many shortcomings, and debate around what you could actually auto-generate on the client-side using a machine readable API definition continued. I can’t tell you how many random Tweets I get from people saying, “Oh is auto-generation of code cool again?” or “I thought you couldn’t auto-generate client code or SDKs ;-)"

Amidst the debate about what is really possible, and the jokes about our SOA past, new players have emerged like [Apimatic](http://bit.ly/1qnXcI0) that are looking to raise the bar when it comes to generation of not just simple code samples, libraries or stubs, but sophisticated API SDKs. I am sure the jokes about automating client code will still occurs, but there is no denying that the overall conversation is moving forward.

As I’m exploring my own limitations of what is possible when generating client-side code with Swagger, I also come across new players like [Lucybot](http://bit.ly/1DwAaXo), who are [moving the conversation forward with API cookbooks, and Single Page App (SPA) generated from Swagger definitions](http://apievangelist.com/2015/02/24/driving-your-single-page-applications-and-api-cookbooks-using-api-definition-formats-like-swagger-and-api-blueprint/). I’m not in denial that there is a lot of work ahead, but in the two weeks that I’ve been crafting this post, I’d say I have gotten a glimpse of what is next. When you bundle the latest movements in virtualization and containerization, and using API definitions like Swagger and API Blueprint to auto-generate client side code, I feel like the current potential is unlimited, and things are just heating up.