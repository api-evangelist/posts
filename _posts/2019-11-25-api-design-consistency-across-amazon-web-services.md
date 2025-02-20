---
published: true
layout: post
title: API Design Consistency Across Amazon Web Services
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/scream-IMG_8494.jpg
author:
  name: kinlane
tags:
  - Consistency
  - Design
  - AWS
---
[I have been crafting Postman collections for as many AWS APIs as I can before re:Invent](https://github.com/api-evangelist/aws). As I work my way through the different APIs I”m reminded of the difficulties involved in API consistency and governance at large enterprise organizations. While most AWS APIs employ a pretty formulaic XML RPC design, there are variations within how these RPC APIs work, but there are also several outliers of other more RESTful and even full blown hypermedia APIs present. Making for a pretty wild mix of API resources to put to work, something that has been abstracted away as part of their SDKs, but is painfully present when directly integrating with APIs across multiple services.

From the lay of the land I’m guessing AWS had instituted their primary XML RPC approach, and baked that into governance law across the organization in early days. Over the years, after significant growth, some groups were able to publish APIs outside of this pattern, resulting in the patchwork quilt of services that are present. The most notable and ironic deviation from this pattern is the API for the AWS API Gateway, which employs a RESTful approach using the HAL media type. Which personally, I would prefer as the dominate pattern across all the service, but sadly it is the more legacy XML RPC pattern that dominates. I get it, you can’t go changing the AWS S3 or EC2 APIs now, they are known for their stability, but I still think there are some important API design and governance lessons present in the valuable cloud API stack.

The first lesson in all of this I’d say is that we need to make sure and establish your API design governance early on and socialize across all teams—even new ones. The second lesson I’d say is to make sure and review your API design governance regularly to make sure you aren’t missing any healthier patterns that may have come along. You don’t want to get stuck with the one pattern that will introduce friction into the API integration process. Thirdly, I’d say you can really smooth out bumps in your API design with some decent SDKs, as Amazon has. I’ve used both their Node.js and PHP SDKs, and have found them to be pretty straightforward, and that they go a long way to smooth out the rough design that exists across different services. I don’t think you should be always relying on your SDKs as.a crutch here, but it is good to know that you have options once you’ve baked something into your production APIs.

I think course correcting the API design governance ship at AWS will be very hard, and take over decade. I’m more using this as a lesson for other API providers. I’m not saying Amazon shouldn’t change, on the contrary, they should take the lead in publishing an API design guide like Microsoft and Google have, setting the tone for how future teams will delver their APIs. If done well, the guides can also provide a blueprint for AWS customers to follow when publishing their own APIs to the AWS API Gateway. Ideally, API design governance should be baked into the AWS API Gateway workflow, and if AWS believes in their own services, they’d be using AWS API Gateway and their own prescribed API design workflow for all future APIs being delivered on the cloud platform. Some day, I will better document the geological layers of API design that have been played down over the entire history of AWS--I just need more time in my schedule. ;-)