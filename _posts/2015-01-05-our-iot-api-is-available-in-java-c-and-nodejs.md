---
layout: post
title: Our IoT API Is Available In Java, C++, and Node.js
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-chain-broken.png
author:
  name: kinlane
tags:
  - Node.js
  - ai
---
I am spending a lot of time lately reviewing Internet of Things (IoT) providers, as I work on a white paper for Gigaom. There are some very interesting approaches to APIs out there in IoT-land, and I’m starting to get a feel for some of the patterns, trends, and habits of how IoT providers are approaching their developer efforts.

One pattern I see a lot, and can only assume it comes out of the hardware side of engineering, is a focus on programming language when you talk about your API--something I recommend shifting away from. In the world of web APIs, the focus on the interface, and what it does, and actual programming languages are abstracted away, and provided merely as samples, libraries, and SDKs.

I’m guessing that in the mind of developers who are building APIs for devices, they are approaching APIs from their legacy SDK point of view, and there really isn’t any decoupling of thought based upon web APIs. For these engineers, I can’t emphasize enough, the importance of separating your interface, from your SDKs, and when you craft language about your API, you generalize the API speak, and keep language specific elements strictly in the support areas for those specific SDKs.

You never know, it might be that one Go developer who builds the perfect connector for your device, or some scientist wielding Python, who integrates a sensor into their work, and then things go viral. The chances that this will happen is less likely if you are just talking about the one or two programming languages that you (the platform) are familiar with.