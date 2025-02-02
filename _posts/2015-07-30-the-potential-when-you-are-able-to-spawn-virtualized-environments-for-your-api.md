---
layout: post
title: The Potential When You Are Able To Spawn Virtualized Environments For Your API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Citi-Mobile-Challenge.png
author:
  name: kinlane
date: 2015-07-30T19:59:21.000Z
tags:
  - Environment
  - Environments
---
[I was made aware of the Citi Mobile Challenge](http://www.citimobilechallenge.com/APIs/index.php) during a conversation last week [with the Anypresence team about their new JustAPIs offering](http://apievangelist.com/2015/07/23/pushing-my-api-gateway-thoughts-forward-api-gateway-anywhere-with-justapis/). The conversation with them has triggered several potential stories, but one that stood out for me, was the API virtualization opportunities that emerge when [you use solutions like the JustAPIs gateway](http://justapis.com/). 

To support the Citi Mobile Challenge, the bank launched a set of virtual APIs to support the event. I think their descriptions tells a lot of the story:

_The APIs made available through Citi® Mobile Challenge power some of Citi's latest digital offerings around the globe. These APIs will give developers an opportunity to create solutions that could function with existing Citi technology. No customer data will be shared. Citi encourages developers to also use APIs outside of Citi to support and add additional features to their innovations._

The bank needed to mimic their production environment, but in a way that developers can still build meaningful mobile apps,without the immediate security and privacy concerns that are present when working with live systems. [While I wish sandbox environments were default via all API platforms](http://apievangelist.com/2015/07/11/i-wish-all-apis-had-sandbox-environment-by-default/), which unfortunately is not a reality, however I think when it comes to fintech, the stakes are much higher--which smells like an opportunity for API definitions to me.

It can be a lot of work to establish and maintain both sandbox and production environments, but is something that if you do, can open up even more opportunity when it comes to supporting hackathons, providing QA environments, and much more. Additionally, if you embrace modern API definition formats like Swagger and API Blueprint in this process, as well as approaches to containerization like Docker, a whole new agility and flexibility can be realized as well.

Like API monitoring, performance, security, and [other growing incentives for embracing modern API definition formats](http://apievangelist.com/2014/06/05/what-are-the-incentives-for-creating-machine-readable-api-definitions/), I see the demand for API virtualization growing. When your APIs are well defined, a new world of API definition driven services emerges, making things like virtualization for hackathons, QA, load testing, simulation, as well as just a permanent sandbox possible

I have an API virtualization research area started, I just need to spend the time organizing the companies who are doing interesting things in the space, and consider some of the possible building blocks, before it is ready for prime time--stay tuned!