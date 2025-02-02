---
published: true
layout: post
title: >-
  Making Sure The APIs Being Served Up Via Your Enterprise Service Bus (ESB) Are
  Discoverable and Consumable Using APIs.json and Swagger
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/warewolf-esb-logo.png
author:
  name: kinlane
tags:
  - Enterprise
  - Discover
  - APIs.json
  - Swagger
  - APIs
  - APIs.jso
---
Making sure APIs that are available via the enterprise service bus, affectionately known as an ESB, more discoverable, accessible, and consumable via the open Internet, is one of the many challenges organizations will face along their API journey. Striking a balance between internal APIs, and public APIs, even if they aren’t open to the wider public, and only partners, is proving to be a big challenge for many enterprise groups I am engaged in conversations with.

When Steve Willmott ([@njyx](https://twitter.com/njyx)) and I developed [APIs.json](http://apisjson.org), an open API discovery format, we were focused on bringing solutions to the table that were focused on API discovery on the open Internet. We knew that the format could also assist in more controlled environments, like within the enterprise, but wanted to focus on the wider discussion first. Our primary focus is making indexing the current landscape of publicly available APIs, using APIs.json, so that we can make available via [our open source search engine APis.io.](http://apis.io)

We have been working with other [API service providers like WSO2 to integrate into their enterprise offerings](http://wso2.com), but pretty much leaving the enterprise landscape to craft its own APIs.json driven solutions. [So it pleases me to see that Werewolf ESB has integrated not just Swagger into their open source ESB solution, but also APIs.json.](http://warewolf.io/ESB-blog/swagger-apisjson-support/) Any service you expose through the Warewolf ESB security layer, will automatically be published in an APIs.json file--additionally these services will also have a Swagger file generated, providing you a machine readable definition for the surface area of each exposed API. 

Warewofl ESB's usage of APIs.json is exactly what we had envisioned when it comes to providing API discover solutions, for APIs that originate within the enterprise. In this scenarios, APIs.json is acting as a portable, machine readable, JSON definition of what APIs can be found via an company, or organization's ESB. The availablity of Swagger makes these services consumable, as soon as they are discovered via the APIs.json index--showing what is possible when you combine APIs.json with Swagger.

I'm not familiar with exactly how Warewolf ESB manages the security layer for APIs on the bus, but I'd like to learn more, so I can help organizations craft not just single APIs.json indexes, but develop meaningful collections, and begin to broker the resources they are making available via any ESB on their network, in more intelligent ways. The Warewolf release has jump started me brainstorming more around the possibilities for API discovery when it comes to the enterprise, using APIs.json--thanks Warewolf, very nice work!