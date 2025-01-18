---
layout: post
title: A Machine Readable Definition For Your AWS API Plan
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_02_26_at_7.12.16_pm.png
atomdate: 2017-03-01T23:00:00.000Z
tags:
  - Definition
  - AWS
---
I was learning about the [AWS Serverless Developer](https://github.com/awslabs/aws-api-gateway-developer-portal) [Portal](https://github.com/awslabs/aws-api-gateway-developer-portal), and found their API plan layer to be an interesting evolution in how we define the access tiers of our APIs. There were a couple different layers of AWS's approach to deploying APIs that I found interesting, including the AWS marketplace integration, but I wanted to stop for a moment and focus in on their API plan approach.

Using the AWS API Gateway you can establish a variety of API plans, with the underlying mechanics of that plan configurable via the AWS API Gateway user interface or the AWS API Gateway API. In the documentation for the AWS Serverless Developer Portal, they include a JSON snippet of the configuration of the plan for each API being deployed.

This reminds me that I needed to take another look at [my API plan research](http://plans.apievangelist.com/), and take the plan configuration, rate limit, and other service composition API definitions I have, and aggregate their schema into a single snapshot. [It has been a while since I worked on my machine-readable API plan definition](http://plans.apievangelist.com/2016/02/13/my-tooling-and-api-for-gathering-and-organizing-the-details-of-the-plans-and-pricing-for-apis/), and there are now enough API management solutions with an API layer out there, I should be able to pull a wider sampling of the schema in play. I'm not in the business of defining what the definition should be, I am only looking to aggregate what others are doing.

I am happy to see more folks sharing machine-readable [OpenAPI](http://openapis.org) definitions describing the surface area of their APIs. As this work continues to grow we are going to have to also start sharing machine-readable definitions of the monetization, plan, and access layers of our API operations. After I identify the schema in play for some of the major [API management](http://management.apievangelist.com) providers I track on, I'm going to invest more work into my standard API plan definition to make the access levels of [APIs more discoverable using APIs.json](http://apisjson.org).