---
layout: post
title: >-
  How Open Source API Proxies, And Other API Services And Tooling Can
  Strategically Partner
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puzzle-strategic.png
author:
  name: kinlane
date: 2015-09-24T21:17:26.000Z
tags:
  - Open Source
  - Tooling
  - Open
  - Services
---
[I was gathering my thoughts today around API management solutions can better work together, in response to an industry discussion going on between several creators of open source tooling](https://github.com/NREL/api-umbrella/issues/159). The Github thread is focused on proxies, and how they can work more closely together to facilitate interoperability in this potentially federated layer of the API economy, but as I do, I wanted to step back and look at bigger picture before I responded. 

As I was gathering my thoughts, [I also had an interesting conversation with the creator of API Garage](http://apigarage.com/), in which one of the topics was around how we encourage API service providers to want to work closer, but this time from the perspective of a [API client workspace](http://client.apievangelist.com/). This made me think, that the thoughts I was gathering about how open source proxies can better work together, should be universally applied to every step along the API lifecycle.

**Open APIs**  
It should be a no-brainer for API service providers--have an API! [One of the best examples of this, is with 3Scale API management--they have a very robust API, that represents every aspect of the API management layer](https://support.3scale.net/reference/active-docs). Other service providers like [API Science](https://developer.apiscience.com/), and [APIMATIC](http://docs.apimatic.apiary.io/), who server other stops along the API life-cycle, also have their own APIs. If you want your API tooling to work with other API tooling, have an API--[think about Docker, and their API interface, and make your tools behave this way](http://apievangelist.com/2014/12/20/swagger-20-for-the-docker-api/). 

**Open Source**  
Provide openly licensed tooling around any service you provide. Make your tooling as modular as you can, and apply open source licenses wherever it makes sense. Open licenses, facilitate people working together, and breaks down silos. This is obvious to the folks on the API proxy thread I'm referencing, but will not be as obvious to other service providers looking to break into the market. 

**Open Definitions**  
Speak common API definition formats like Swagger, API Blueprint, and in Postman Collections, and provide indexes using [APIs.json](http://apisjson.org). If consumers can import and export in their preferred definition format they will be able to get up and running much quicker, share patterns between the various proprietary services, and the open tooling they are putting to work. There are a lot of opportunities to partner around common API definitions for API deployment, and management, which would open up a potentially new world of API services that aggregate, integrate, and sync between common API platforms throughout the life-cycle.

**Open Plugins**  
Developers never want their tooling to be a silo. Allow the extensibility of any tooling or services, from design, to management, or client, using common approaches to connectors, plugins, etc. Make plugins be API first, so that other API service providers can easily take their own APIs, craft a plugin, and quickly bring their value to another platform's ecosystem. Plugins are the doorway to the interoperability that open APIs, source code, and definitions bring to the table for platform providers.

**Open Partnerships**  
Open APIs, source code, definitions, and plugins all set the stage for ever deeper levels of partnership. APIs are the pipes, with open source code and definitions providing the grease, and if all API [design](http://design.apievangelist.com), [deployment](http://deployment.apievangelist.com), [management](http://management.apievangelist.com), [monitoring](http://monitoring.apievangelist.com), [testing](http://testing.apievangelist.com), [performance](http://performance.apievangelist.com), [security](http://security.apievangelist.com), [virtualization](http://virtualization.apievangelist.com), and [discovery](http://discovery.apievangelist.com) providers allow for plugins, strategic partners can occur organically.

All of this really sounds familiar? It really sounds like what the API space is telling the rest of the business world, so I can't help but see the irony in giving API service and tooling providers this same advice. If you want more partnerships to happen, expose all your resources as APIs, providing open tooling and definitions, allow other companies to plug their features into your solutions, and a whole new world of business development will emerge.

With the mainstream growth we are seeing in the API space in 2015, there are some pretty significant opportunities for partnership between API service providers right now--that is, if we follow the same API-first approach, currently being recommended to API providers.