---
layout: post
title: A Service Level Agreement API For API Service Providers
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-service-level-agreements.png
atomdate: 2016-10-03T18:00:00.000Z
tags:
  - Service Level Agreement
  - Providers
  - Service Providers
---
I am spending some time profiling the companies who are part of my API monitoring research, specifically learning about [the APIs they offer as part of their solutions](http://monitoring.apievangelist.com/organizations/). I do this work so that I can better understand what API monitoring service providers are offering, but also for the discoveries I make along the way--this is how I keep API Evangelist populated with stories. 

An interesting API I came across during this work was from the [Site24X7 monitoring service](https://www.site24x7.com), specifically [their service level agreement (SLA) API](https://www.site24x7.com/help/api/#sla-settings). An API for adding, managing, and reporting against SLA's that you establish as part of the monitoring of your APIs. Providing a pretty interesting API pattern that seems like it should be part of the default API management stack for all API providers.

This would allow API providers to manage SLA's for their operations, but also potentially expose this layer for each consumer of the API, letting them understand SLA"s that are in place, and whether or not they have been met--in a way that could be seamlessly integrated with existing systems. An API for SLA management for API providers seems like it could also be a standalone operation as well, helping broker this layer of the API economy, and provide a rating system for how well API providers are holding up their end of the API contract.