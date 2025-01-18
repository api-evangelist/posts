---
layout: post
title: Going Beyond Just Data APIs With Code Endpoints At Apitite
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apittie-node-endpoints.png
author:
  name: kinlane
tags:
  - Data
  - Code
  - APIs
---
in my time as API Evangelist I've seen a number of API deployment as a service providers come and go. It is something that is technically hard to do properly, and something that historically had been hard to monetize, but as a wider awareness around APIs grows in the mainstream, the demand landscape for API deployment is shifting.

I got a demo of an API provider today called [apitite](https://www.apitite.net/), which provides API deployment and management services in the cloud. The core of the service is built around the common need to deploy APIs from datasources like MySQL, SQL Server, etc. However I wanted to highlight another feature of their platform [which they call code endpoints](http://blog.apitite.net/2015/07/introducing-nodejs-code-endpoints.html).

When I help folks understand what is possible with APIs, I break into four main groups:

*   **Data** - APIs are about making data more accessible, and usable.
*   **Content** - With a focus on data, many forget to talk about serving of media and content via LAPIs.
*   **Functional** - Providing more algorithmic and functional features that accomplish a task.
*   **Hardware** - Allowing for a device to connected to by other applications and systems.

I know this is simplified, and some tech pundits will love to poke holes in it, but when you are explaining the API opportunity to business leaders, as well as the average business user, this has worked well for me. 

apitite delivers on the functional portion of this API equation forward for me, with their endpoints service. Their platform is Node.js based, but allows for very small scripts to be deployed as simple API endpoints. When you couple this with marketplace-like abilities so users can find ready to go scripts they can reverse engineer, as well as a place for developers to publish and share / sell their scripts--you have a potentially very powerful API deployment formula. 

I have seen other similar solutions emerge like [Algorthmia](https://algorithmia.com/), but nothing that is bundled with the data API capabilities that apitite also brings to the table. Anyways, I just wanted to highlight this single point from this conversation, while it was fresh in my head. I will have more to share on [apitite](https://www.apitite.net/) as I play with the platform more, and incorporate into a project I am working on around government data.