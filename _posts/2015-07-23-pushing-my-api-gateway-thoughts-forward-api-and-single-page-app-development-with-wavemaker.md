---
layout: post
title: >-
  Pushing My API Gateway Thoughts Forward: API and Single Page App Development
  with Wavemaker
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - My
  - Gateway
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/wavemaker/wavemaker-logo.png)](http://www.wavemaker.com/)

I open up my Thursdays to briefings, calls, demos and other phone, skype, and hangout related activities. This morning I received a walk-through of the [Wavemaker Online platform](https://www.wavemakeronline.com), and got a look at the intersection of API design and API gateway in this new cloud-based, single page application design studio. 

[I bitched a little the other day about the Amazon API Gateway released, talking about how I was underwhelmed](http://apievangelist.com/2015/07/10/aws-is-selling-the-api-solution-the-enterprise-will-buy-not-necessarily-the-api-solution-they-need/), and I also [blew some hot air about deploying APIs using a gateway solution vs. what I call farm to table API development](http://apievangelist.com/2015/07/22/thoughts-on-api-gateway-deployment-over-artisan-farm-to-table-api-design-and-deployment/), but ultimately I'm just pushing myself to think harder about how we not just deploy our APIs, but keep in alignment with our design, and management processes. It was interesting that more than one call this Thursday are in alignment with this journey I find myself on--good timing Wavemaker. 

The screenshot below from my WaveMaker Studio workspace tells an important story. This is API design, deployment, and management, all in the service of rapidly deploying a single page app client, via a single platform. [While Wavemarker has their own gateway solution as well](http://www.wavemaker.com/gateway/), the WaveMaker Online Studio has "gateway-esque"features in it, allowing me to design and deploy APIs in support of my single page application, and widget development.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/wavemaker/WaveMaker-Studio.png)](http://www.wavemaker.com/)

Wavemaker speaks the common gateway speak I would say that your average application designer would need to speak, allowing you to craft APIs for your apps from other web APIs, SOAP, APIs, feeds, and databases (the common gateway building block). You just define each of the resources you depend on, and they are available in your toolbox.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/wavemaker/WaveMaker-Studio-Web-Service.png)](http://www.wavemaker.com/)

I'm going to call this API gateway light(wish I had better word). This gateway is in the service of single page application development (which is another spect I like), and I'm assuming they could be part of your larger Wavemaker API strategy, but they might also never be used past this single implementation. With all of your newly configured, "gatewayed" resources in your toolbox, you can being crafting apps, widgets, visualizations, and other common API driven implementations.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/wavemaker/WaveMaker-Studio-3.png)](http://www.wavemaker.com/)

Ideally any application designer who was using the Wavemaker Studio to craft their APIs, would also have a wealth of internal API resources to depend on, who are managed by skilled API teams, but even if they don't, Wavemaker acts as an API gateway to existing internal infrastructure, as well as the wealth of public API resources available to us today. To me, API design solutions like Wavemaker are beginning to look like web design solutions of the last 10 years, but are applying gateway logic to help move beyond just data and document stores for sources, and going API-first.

This is just the start of API gateway discussions I am having with Wavemaker. They are going to schedule regular conversations with me, and the next one is specifically about their actual API gateway offering. While there are aspects of Wavemaker I think are slightly behind where API design is going (ie, [Hypermedia](http://hypermedia.apievangelist.com), [Swagger](http://swagger.apievangelist.com), Postman, [APIs.json](http://apisjson.org)), I think their approach to baking in common features of gateways into existing API, as well as app design workflows, is pushing the conversation forward.

Stay tuned as I keep gathering my thoughts on how to push the API gateway conversation forward, as well as learn more about Wavemaker.