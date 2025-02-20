---
layout: post
title: Monitoring APIs and Their Availability
url: http://apievangelist.com/2010/11/07/monitoring-apis-and-their-availability/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Monitoring
  - APIs
  - ai
---
Applications are being built around APIs at an ever-increasing pace. Developers put a lot of trust in these service providers, and we depend on them to provide a certain quality of service.

As a developer, you should build in error handling to deal with service outages properly. When deciding to use an API you might want to look at a service that monitors the availability of Public APIs called [API Status](http://api-status.com/). API Status monitors almost 50 top APIS and provide information on whether the API is:

*   Operating Normally
*   Experiencing Performance Issues
*   Having a Service Disruption

The real-time status report for Public APIs is provided by [WatchMouse](http://www.watchmouse.com). WatchMouse provides online monitoring services and has an API as well.

In addition to monitoring, I would like to see a rating system for API service providers based upon their availability and up-time. This would help developers make decisions around whether an API is quality enough to integrate with or not.

I would also like to see more competition in the API space, then in addition to gracefully handling of API failures, we could also build in failover into our applications. This would not work with specific services like Twitter for example, but if it is a service that provides a calculation like IP address lookup, or address verification you could have a plan A or plan B when making API calls.

We put a lot of trust into API service providers and hope they take their API seriously enough to not only keep up and running, but also provide a high quality of service. API availability and service level agreements will be critical in the future API-driven economy.