---
layout: post
title: Reverse Engineering Of The Kayak API From The Mobile App
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-reverse.png
author:
  name: kinlane
tags:
  - Mobile
  - Engineering
---
I am beginning to track on reverse engineering API story that I come across, so if you find any, feel free to share my way. If you aren’t familiar with this growing trend, I’m talking about the reverse engineering of APIs from popular mobile apps, specifically in situation where the company doesn’t have a public API or developer presence.

APIs are driving the mobile applications tht we are increasingly depending on, but for some reason in 2015 not all companies expose, or share information about this API surface area with the public. The latest story I came across in this trend is [the reverse engineering of the Kayak API using mitproxy](http://www.shubhro.com/2014/12/18/reverse-engineering-kayak-mitmproxy/).

Once upon a time, [there was a public Kayak API,](https://www.kayak.com/labs/api/search/) but somewhere along the way it went away. There tends to be a lot of misconceptions around how to conduct a public API presence, and when coupled with the ignorance around the tech, business, and politics of APIs, you see a lot of failed public API attempts--that quietly go away.

I’m continuing to track on this because I think this is a security, and privacy conversation that will continue to unfold in the public sphere, whether we want it to or not. [If your APIs are driving a publicly available mobile app, you have public APIs](http://apievangelist.com/2014/10/27/if-you-have-a-publicly-available-mobile-app-you-have-a-public-api/). Period. You might as well treat these APIs like they are public. I’m not saying you have to be the next Twitter--I’m saying your company needs to get educated on modern technological, business, and legal approaches to making resources available over the open Internet.

You do not have to open up your APIs to the general public, but your API surface area is public, and you should be transparent about how you operate them, how you onboard partners, how data flows publicly via your API pipes, and how you manage the security and privacy of your network. This is a theme you will hear more from me, alongside every reverse engineer story, security and break of a popular mobile app, until more companies possess a public API developer area that properly addresses the tech, business, and politics of their public digital footprint.