---
layout: post
title: API Discovery Continues Its Move Into The IDE With Eclipse Che
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/eclipse/eclipse-logo.png
author:
  name: kinlane
tags:
  - Discovery
  - IDE
  - Discover
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/eclipse/eclipse-logo.png)](https://projects.eclipse.org/proposals/flare)

Another layer to the [release of Codenvy this week](http://apievangelist.com/2014/10/29/now-our-development-environment-is-now-containerized-and-scalable-like-our-production-environment/), was the [announcement of the Eclipse project Che](https://www.eclipse.org/org/press-release/20141027_cloud_initiative.php), an open source "project to create a platform for SAAS developer environment that contains all of the tools, infrastructure, and processes necessary for a developer to edit, build, test, and debug an application”. Che represents the next generation IDE that runs in the cloud, which coincides with other signs I've seen around [API discovery](http://discovery.apievangelist.com) moving into the IDE with signals from API pioneers like [SalesForce and Google](http://apievangelist.com/2014/07/03/expanding-the-layer-of-api-discovery-from-with-the-developers-ide/), or from [Microsoft in Visual Studio](http://apievangelist.com/2014/08/19/bing-developer-assistant-for-visual-studio-delivers-relevant-api-code/).

I’m still learning about Che, but I’m beginning to see two distinct ways Che and APIs can be employed. First lets start with the environment:

> _You can build extensions for Che, and when those extensions are compiled into the kernel, Che creates server-side microservices, a RESTful API, and cross-browser optimized JavaScript, which is then pluggable into a browser IDE. With Che, developers are given the pluggable structure of Eclipse, but accessible through a cloud environment._

This means you can orchestrate development workflows, with APIs. You can predefine, deploy, customize, maintain and orchestrate very modular development environment where everything can be controlled via API. What a perfect environment for orchestrating the next generation of application development.

Next I see APIs leading the development lifecycle as well, not just defining the development environment and process. Earlier stories I’ve done on API discovery via SDKs, showcase SaleForce and Google providing native discovery of their APIs directly in Eclipse. In an Eclipse Che driven development environment, you could define pre-built, or custom API stacks, bringing exactly the API resources developers will need and bake them directly into their IDE—meaning APIs find the developers, developers don’t have to find their own APIs.

This approach to API discovery via the IDE provides some various interesting opportunity for marrying with [earlier thoughts I’ve had around being an API broker](http://apievangelist.com/2014/10/10/exploring-the-possibilities-of-being-an-api-broker/). I can envision a future where API evangelism evolves to a point where you don’t just represent one API, you can represent many APIs, and configure API fueled developer environments for building any type of application. Think of what [Backend as a Service (BaaS) providers like Parse and Kinvey](http://baas.apievangelist.com/companies.html) have been doing since 2011, but now think of pre-configured, or custom tailored IDE environments with exactly the resources you need.

I’m just getting started with [Che](http://docs.codenvy.com/che/), and [Codenvy](https://codenvy.com/), so it will take me a while to work through my thoughts on using it as an API brokerage platform. The one thing you can count on me for, is that I will tell stories all along the way as I figure it out.

_**Disclosure:** API Evangelist is an advisor to Codenvy._