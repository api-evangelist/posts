---
layout: post
title: The Continuing Evolution of The API Gateway
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-gate.png
author:
  name: kinlane
tags:
  - Gateway
---
I'm feeling like the [recent release of the AWS API Gateway](http://apievangelist.com/2015/07/09/the-new-aws-api-gateway-anyone-who-does-not-do-this-will-be-fired-thank-you-have-a-nice-day--jeff-bezos/) isn't just an isolated product release, but more of a signpost in the overall evolution of the API space. It is quite possible that Amazon's moves, set much of this into motion, but I am seeing a number of new API gateway solutions, as well as engaging in more API gateway conversations as part of my regular monitoring and discussions.

Amazons API Gateway release has left me pretty underwhelmed, but I still have a lot of exploration to do, which includes employing the gateway alongside Lambda--so I may be changing my tune. [When I said AWS launched exactly the API deployment solution the enterprise wanted, not what they need](http://apievangelist.com/2015/07/10/aws-is-selling-the-api-solution-the-enterprise-will-buy-not-necessarily-the-api-solution-they-need/), I'm not necessarily saying it was a stupid move for AWS, my criticism is more about just about making money off the enterprise over providing what they actually need to evolve. (not really a battle I will win--just my ethics bubbling up)

[I've also talked with the AnyPresence team about their JustAPIs gateway release](http://apievangelist.com/2015/07/23/pushing-my-api-gateway-thoughts-forward-api-gateway-anywhere-with-justapis/), which I thought was more progressive than what AWS is up to, pushing into Internet of Things (IoT) territory, over just mimicking what many existing API gateways offer. [Later on in the week, I also noted the "API gateway-light" approach of Wavemaker in their full suite of API-first development solutions](http://apievangelist.com/2015/07/23/pushing-my-api-gateway-thoughts-forward-api-and-single-page-app-development-with-wavemaker/), adding to the mix.

After these conversations, [I also noticed that Apigee launched their new "Edge Microgateway"](https://apigee.com/about/press-release/apigee-delivers-new-hybrid-cloud-capability-boost-api-management-performance), and [StrongLoop launched their new API Gateway which is powered by Node.js](https://strongloop.com/strongblog/api-gateway-node-js/). I have not dug into either of their solutions, but on the surface it seems to reflect this overall shift in the concept of an API gateway, something that better addresses the needs of API providers and consumers.

The concept of an API gateway is nothing new, and honestly is something that doesn't normally excite me, but a much lighter-weight, evented, containerized API gateway that will run anywhere I need, and helps me evolve existing infrastructure forward by employing hypermedia patterns--becomes much more interesting. While not all the new API gateway offerings have what I'd like to see, [when it comes to modern API deployment solutions](http://deployment.apievangelist.com), I am seeing some progressive signs.

I understand the need to deploy APIs from legacy infrastructure, but without actually understanding the resources, evolving the interfaces, and underlying resources forward, API gateways do not move things forward. If you can actually get more precise about how and where you deploy your APIs, and be able to actually apply future thinking API design patterns, I think there are huge opportunities to actually move API deployment forward in a way that supports web, mobile, and IoT development.