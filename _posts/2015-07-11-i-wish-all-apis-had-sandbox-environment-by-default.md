---
layout: post
title: I Wish All APIs Had Sandbox Environment By Default
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-sandbox.png
author:
  name: kinlane
tags:
  - Environment
  - Sandbox
  - APIs
---
[I am working through every endpoint of the AngelList API](https://angel.co/api), making sure I make as many successful calls as I can, as I work to generate Swagger definitions for the API, using Charles Proxy. To support this effort I setup each endpoint in Postman, and populate enough detail about an API to make a successful call--which I record through Charles, and then import to generate a semi-complete Swagger spec.

Some of the API endpoints requires adding and deleting of information. For example I will add a comment to my profile, then update in, and remove it, all in a series of API calls. Most of the time I can accomplish this without doing much damage to my live profile, but sometimes it requires sending messages to people, initiating processes that trigger other system aspects that I may not be able to undo.

As I'm playing with the AngelList Reservations API, which "are non-binding commitments to invest in a startup's current fundraising round", I can't help but think how nice a sandbox environment would be, as well as some dummy data to help me in my API journey. Some APIs I play with provide a sandbox environment, but I'd say it is not a common enough occurrence. 

[I'm seeing service emerge to cater to this need, as with Sandbox](https://getsandbox.com/), which is a service layer of the API lifecycle I think will only grow in coming months. I can see the need to create simple sandbox for any APIs as you are kicking tires, but I can also see the need for sophisticated simulation environments built on top of common APIs, allowing some apps to test out more advanced, and specialized scenarios.

If you need an example of this, [take a look at what Carvoyant is up to in the connected car realm](https://www.carvoyant.com/). While sandboxes, and simulations may not be as critical as in the world of cars, I think be critical for developers to build the next generation of web, mobile and IoT apps, and may not be something that every API provider can deliver on their own.