---
published: true
layout: post
title: The Alibaba Cloud vs. The OpenAPI Doctor
tags:
  - OpenAPI
  - Editor
  - Governance
  - Producers
  - Consumers
  - Portals
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/purple-circuit-audrey-nyc-skyline.jpeg
---
We were working through [the Alibaba Cloud APIs](https://api.alibabacloud.com/document/Ecs/2014-05-26/overview), profiling them as part of our wider work. After first glance the portal seems pretty busy, but once you begin working through it you realize how well planned things are, and every API has the building blocks you’d expect from an API producer such as documentation, SDKs, and other bits. While Alibaba is a very consumer view of their API landscape it reminds us of where [OpenAPI Doctor](https://bit.ly/3UTwuOF) is headed from a producer perspective—which maybe down the road could merge into a single view depending on your role.

## Producer View - OpenAPI Doctor
While the OpenAPI Doctor is very focused on editing, exploring, documenting, and governing a single API, once you begin to play with the solution behind you realize that it can easily be turned into a producer-side hub or catalog as we’ve seen from the road map of other providers, but one that goes well beyond just discovery and editing.

<a href="https://bit.ly/3UTwuOF"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/openapi-doctor/doctor-one.png" style="width: 100%: padding: 15px;"></a>

It wouldn’t take much work to turn the OpenAPI Doctor into a portal, hub, marketplace, or catalog using its modular and extensible framework. OpenAPI Doctor is very much the producer side of things, but with a little authentication and authorization it could easily become a producer as well as a consumer side conversation around APIs similar to Alibaba. 

## Consumer View - Alibaba Cloud
The Alibaba Cloud isn’t that impressive when you first land on it, but once you begin scratching at what is available and how it is consistently applied across many different APIs you see the evidence of operational level governance, which is what we are alluding to with the comparison with OpenAPI Doctor. The governance and validation that the OpenAPI Doctor brings to individual APIs could easily be expanded across multiple APIs, and exposed to serve API consumers.

<a href="https://api.alibabacloud.com/document/Ecs/2014-05-26/overview"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/alibab-cloud-compute-screenshot.png" style="width: 100%: padding: 15px;"></a>

Sadly, Alibaba declares OpenAPI throughout their portal, but while the metadata artifact is provided for each API it isn’t OpenAPI-—they are just using the word as a general phrase to describe a public API. However I can see the mechanisms at work behind this consumer portal, and I am guessing there is a substantial amount of standardization behind the scenes to make the Alibaba Cloud available to consumers—this is what interests us. 

## Producer and Consumer API Healthcare
We can’t help but feel like there is an important API healthcare narrative present here. We will explore more of the possibilities with expanding OpenAPI Doctor across many different APIs and governing APIs at scale. Then we will also put more thought into how the modularity and composability of the OpenAPI Doctor could be exposed to not just API producers but also API consumers as we’ve seen with other editors like SwaggerUI, Mashape (RapidAPI), and others.

As some of our storytelling in the queue will showcase, there is a lot going on under the hood of OpenAPI Doctor that makes it stand out from anything else there, as well as anything similar that has come before. Vacuum is just the tip of this iceberg, and we’ll be unpacking all of the goodness available behind the [OpenAPI Doctor](https://bit.ly/3UTwuOF) to help us better understand what is possible from both the producer and consumer side of things. We feel like there is a solid foundation to build upon there, and would like to see it used by the enterprise folks we are talking with to establish a more solid foundation for their API operations.

