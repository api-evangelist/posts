---
layout: post
title: The New StrongLoop API Server Provides A Look At Future Of API Deployment
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/strongloop/strongloop-logo.png
author:
  name: kinlane
tags:
  - Deployment
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/strongloop/strongloop-logo.png)](http://strongloop.com/)

I’m looking through [the most recent API server release from StrongLoop](http://strongloop.com/strongblog/node-js-api-server-announcement/), and I can’t help but see echoes of what I’ve been researching, and covering across the [API Evangelist network](http://kinlane.com/about/). [API management](http://management.apievangelist.com) has been front and center for years, but [API deployment](http://deployment.apievangelist.com) is something that is just now being productized, with a wealth of new service providers emerging to provide API deployment solutions that go beyond DIY frameworks, and enterprise API gateways.

Let start with walking through their announcement of their StrongLoop API Server:

*   **LoopBack 2.0** \- An open source framework for quickly creating APIs with Node, including the client SDKs.
*   **mobile Backend-as-a-Service -** An mBaaS to provide mobile services like push, offline-sync, geopoint and social login either on-premise or in the cloud.
*   **Connectors -** Connectivity for Node apps leveraging over ten supported data sources including Oracle, SQL Server, MongoDB and SOAP.
*   **Controller -** Automated DevOps for Node apps including profiling, clustering, process management and log management capabilities.
*   **Monitoring -** A hosted or on-premise graphical console for monitoring resource utilization, response times and function tracing with the ability to send metrics to existing monitoring tools.

Just as StrongLoop did in their release post, let’s dive deeper into LoopBack 2.0, the [open source core](https://github.com/strongloop) of StrongLoop, which they say "acts as a glue between apps or devices and data via APIs written in Node”:

*   **Studio -** A graphical interface to complement the command-line tooling and assist developers in building Loopback models.
*   **[Yeoman](http://yeoman.io/) and [Grunt](http://gruntjs.com/) -** The ability to script tasks, scaffold, and template applications and externalize their configurations for multiple environments.
*   **[ExpressJS 4.0](http://expressjs.com/) -** The latest update, for the well known Node.js package, bringing improvements by removing bundled middleware and refactoring them into maintainable modules, revamped router to remove confusion on HTTP verb usage and decoupling Connect, the HTTP framework of Node from the Express web framework. It is also the E in the MEAN stack (MongoDB, ExpressJS, AngularJS, Node.js).
*   **Project Structure -** An expanded directory structure has been expanded to make it easier to organize apps and add functionality via pre-built LoopBack components and Node modules.
*   **Workspace API -** Internal API making it easier to define, configure, and bootstrap your application at design time and runtime by simply defining metadata in the form of JSON.

This is one of the few sophisticated, next generation, API deployment frameworks I have seen. We have had gateways for a while, and we have a new breed of database and spreadsheet to API providers like [APISpark](http://bit.ly/1sgwGpq). We also have a new wave of [scraping](http://scraping.apievangelist.com) to API solutions from [Kimono Labs](http://bit.ly/1kNmUGe) and [Import.io](http://bit.ly/1pKwOg9), but I’d say [Orchestrate.io](http://bit.ly/1wWkDwH) gets us closest to the vision I have for StrongLoop, when it comes to API deployment.

![](https://s3.amazonaws.com/kinlane-productions2/legos.png)

I’ve referenced this ability in my stories on virtual API stacks:

*   [Virtualized API Stacks](http://apievangelist.com/2013/01/28/virtualized-api-stacks/)
*   [Traffic and Weather - Virtualized API Stacks](http://apievangelist.com/2013/02/01/traffic-and-weather--virtualized-api-stacks/)
*   [Virtual Containers, Stacks, APIs And Application Management](http://apievangelist.com/2013/07/15/virtual-containers-stacks-apis-and-application-management/)
*   [Virtual Stack Composition Like The Absolut Drinks Data API](http://apievangelist.com/2014/04/17/api-virtual-stack-composition-like-the-absolut-drinks-data-api/)

This new approach to API deployment allows us to rapidly define, deploy, and orchestrate stacks of API resources for use in our web, single page, and mobile applications. I really feel like [BaaS](http://baas.apievangelist.com), as an entire company, was just a short growth phase, that leading us to this point, where anyone can quickly deploy their own BaaS, for any broad, or niche purpose. I also see my research into the world of [APIs and Single Page Apps (SPAs)](http://spa.apievangelist.com/) reflected here, in StrongLoops API platform vision.

I feel that StrongLoop has an important take on API deployment, one that reflects where leading API, web, single page, and mobile app developers have been for a while now. The difference is that StrongLoop is providing as a standardized platform, allowing developers to much more elegantly orchestrate their entire lifecycle. You have everything you need to connect to existing resources, generate new API resources, and organize work into reusable parts, to deliver the web, single page, mobile apps you need.

I am closely watching this new generation of [API deployment providers](http://deployment.apievangelist.com/companies.html), companies like StrongLoop, Orchestrate, Flynn, and Cosmic. I see these players being the next generation API gateway, that goes way beyond just providing an enterprise gateway to internal assets. This newer vision is much more directly aligned with the needs of developers, enabling them to rapidly design, deploy and manage the API services they need to drive the web, single page, and mobile apps that are the vehicles in the API economy.