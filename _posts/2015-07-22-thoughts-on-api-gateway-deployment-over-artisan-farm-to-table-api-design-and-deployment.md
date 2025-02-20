---
layout: post
title: >-
  Thoughts On API Gateway Deployment Over Artisan Farm To Table API Design And
  Deployment
url: >-
  http://apievangelist.com/2015/07/22/thoughts-on-api-gateway-deployment-over-artisan-farm-to-table-api-design-and-deployment/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-farm.png
author:
  name: kinlane
tags:
  - Deployment
  - Design
  - Gateway
  - Art
---
[I was wallowing in the exhaust of my previous story on Amazon API Gateway](http://apievangelist.com/2015/07/09/the-new-aws-api-gateway-anyone-who-does-not-do-this-will-be-fired-thank-you-have-a-nice-day--jeff-bezos/), and talking with an API development team about their preferred way to launch an API today. Leaving me thinking...what is the better way to design, and deploy an API? Gateway or hand-crafted?  Ok, cut to the chase, its a bullshit question, but for the sake of working through my own anxiety, I'm going to explore.

For my audience, I'm going to oversimplify what an API gateway is by stating it is a hardware and / or software appliance you can you use to connect to any existing, internal system like a database, CRM, or other, and then quickly and efficiently design, deploy and manage APIs driven by these resources.

Personally I am from the artisan, farm to table guild of API architects--I prefer to hand craft my APIs. Well OK, that is bullshit--I use an API framework, but I wire it up by hand to whatever is the original resource is (database, file-store, other API). This is just my style, and probably most aligned with the fact that I cannot afford any API gateway--something the release of Amazon API gateway has me thinking more about. 

My overall opinion of the gateways I've used is that they lack the amount of granular level control I desire--maybe this is just me. However this is something that is being re-examined for me because of the emergence latest cloud-based API service providers like [Restlet APISpark](http://restlet.com/products/apispark/), [Wavemaker](http://www.wavemaker.com/), [DreamFactory](http://www.dreamfactory.com/), [Apitite](https://www.apitite.net/)\--and AWS. Honestly I think Amazon will skew the concept of what is an API gateway with their new offering, [they just took the name to sell it to the enterprise](http://apievangelist.com/2015/07/10/aws-is-selling-the-api-solution-the-enterprise-will-buy-not-necessarily-the-api-solution-they-need/).

I guess I didn't even have a real point to this story. I just wanted to talk to my API therapist about my own enterprise API gateway baggage and PTSD, and justify my hippie dippe, artisan approach to APIs. Sucka...I got you to listen!! In the end I think I support your API offering, by any name, as long as you help move the conversation forward, which I have to admit I think AWS is doing with their new AWS API Gateway offering--even though they used that name!!!