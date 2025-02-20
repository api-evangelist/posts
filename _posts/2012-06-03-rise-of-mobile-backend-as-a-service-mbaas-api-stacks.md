---
layout: post
title: Rise of Mobile Backend as a Service (MBaaS) API Stacks
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/kinvey-logo-300.png
author:
  name: kinlane
tags:
  - Mobile
  - Stack
  - Backend
---
[![](http://kinlane-productions2.s3.amazonaws.com/mobile-backend-as-a-service/kinvey/kinvey-logo-300.png)](http://www.kinvey.com/)

Mobile is fueling a lot of API growth right now. Or is it APIs fueling a lot of Mobile growth right now? Either way, APIs and Mobile go together like chocolate and peanut butter (or Nutella as my girlfriend would say).

With this growth in mobile, we are seeing a rise of Mobile Backend as a Service (MBaaS) providers, delivering a basic stack of storage, messaging, notifications, user management and other essential components for mobile developers.

The goal of MBaaS providers is to make it very easy for developers to setup and operate a backend for any application. After delivering the essentials like storage, messaging access, push notifications, etc., it makes sense that now developers will need easier integration with the data and resources available in web APIs.

MBaaS provider [Kinvey](http://www.kinvey.com/ "Kinvey") is doing just that. Using [ql.io](http://www.ebaytechblog.com/2011/11/30/announcing-ql-io/ "ql.io"), a declarative, evented, data-retrieval and aggregation gateway for HTTP APIs, they are bringing web APIs to developers, like GeoPlaces data using Google Places, product data from Ebay’s Product API and social data using Twitter.

[![](http://kinlane-productions2.s3.amazonaws.com/api-tools/qlio-logo-300.png)](http://ql.io/)

Kinvey is baking in the most popular and valuable web APIs right into the Kinvey SDK, making data from APIs as easy to access, as data in your local Kinvey data store. Kinvey will deliver an abstracted layer on top of each API, storing data into tables, making them accessible using common queries like SELECT, FROM and WHERE. They will even let you do JOINS on multiple data sources, allowing you to mashup and improve API data performance.

Kinvey will take on the heavy lifting associated with the differences between APIs and maintain access between different API versions. I’m assuming with the amount of work involved, Kinvey will be only delivering the most valuable of web APIs or at least the most stable.

Sounds like API owners need to start building relationships with Mobile Backend as a Service (MBaaS) providers, as this might be the doorway to the next round of growth in your API adoption. Especially if MBaaS providers can truly make APIs a more local, native experience for mobile developers.