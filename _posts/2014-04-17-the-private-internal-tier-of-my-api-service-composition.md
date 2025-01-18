---
layout: post
title: The Private Internal Tier Of My API Service Composition
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-windows.jpg
author:
  name: kinlane
tags:
  - My
  - Internal
---
The first consumer of all of my APIs, including my [screen capture API](http://screen-capture.apievangelist.com/) is me. I develop my APIs first for my use, and only recently have decided to make available to the public. So when I sat down to create my [service composition for my APIs](http://apievangelist.com/2014/04/14/service-composition-for-my-screen-capture-api/), I needed to figure out what I was going to do about my internal consumption.

My first instinct was that I didn't need to include my internal API consumption alongside my partner and public API consumption. I quickly changed my tune as I realized that it was going to be important that I monitor my own API usage in the exact same ways I would partners or public consumers.

I need to better understand how I consume my own APIs, identify security breaches or just unhealthy ways I’m consuming my own API resources. I've seen too many APIs like Instagram and even Tesla get burned by not having the proper management layer on their own internally consumed APIs--allowing hackers to get through doorways that weren't monitored.

While my internal API usage won't be billed as it will with my partner, retail or wholesale API consumers, it will be tracked, limited and analyzed alongside the other target API consumption groups.

I need to understand how my API resources are being consumed, and this includes my own usage. This is a very important lesson for all of us API providers to understand, helping us see the complete picture of how APIs are put to use.