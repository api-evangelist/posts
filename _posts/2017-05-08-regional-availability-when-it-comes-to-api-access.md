---
layout: post
title: Regional Availability When It Comes To API Access
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/azure_regions.png
atomdate: 2017-05-08T22:00:00.000Z
tags:
  - Access
  - ai
---
[I have been profiling the Microsoft Azure platform over the last couple of weeks](http://microsoft.stack.network/), and I found [their approach to talking about the regions that were available was worth taking note of](https://azure.microsoft.com/en-us/regions/services/). I haven't actually assessed who has more regions, but Azure's approach seems to be pretty advanced, even if AWS might possess more regions (gut feeling). By profiling these cloud services and their available APIs using OpenAPI I am hoping to eventually develop a machine-readable approach to comparing which providers are available within which regions.

[Google has a regions page](https://cloud.google.com/compute/docs/regions-zones/regions-zones), but it doesn't feel as forward leaning as [AWS](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) and [Azures](https://azure.microsoft.com/en-us/regions/services/). It is interesting to watch how each of these providers is handling the availability of API services in a variety of regions across North and South America, Europe, Asia, Africa, and the Middle East. I've been [watching how providers are thinking about the availability of API resources in different geographic regions for a while](http://apievangelist.com/2016/01/05/your-api-access-replicated-into-multiple-regions-around-the-globe-for-additional-charge/), but after seeing Azure evolve in this area, it is something I'll keep a closer eye on it moving forward.

Increasing the number of available regions is definitely the biggest concern for providers, something that small providers will be able to piggyback on and expand using as the top cloud providers grow and expand their regions. API providers and API service providers should be expanding the number of regions available, but everyone involved needs to also get more organized about how they communicate with customers about which regions available--region availability should be communicated at the highest level, like we see with the AWS, Google, and Azure deployment pages, but should also work to articulate which regions are available at the individual API level.

As data and algorithmic nationalism continue to grow, we are going to see more focus from providers when it comes to enabling their customer's deployment and operation of APIs into exactly the region they need. I"m guessing with the evolution of software-defined networking (SDN), we are going to see more control over the transport and routing of the data, content, and other resources we are making available via our regionally deployed APIs. Along with other channels and building blocks that I tune into I will start working to define a schema for tracking on regions, allowing me to index which APIs are available in specific regions using [APIs.json](http://apisjson.org).