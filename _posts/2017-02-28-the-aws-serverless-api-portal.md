---
layout: post
title: The AWS Serverless API Portal
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/aws_serverless_portal.png
atomdate: 2017-02-28T20:00:00.000Z
tags:
  - Serverless
  - Portal
  - AWS
---
I was looking through the Github accounts for Amazon Web Services and came across [their Serverless API Portal](https://github.com/awslabs/aws-api-gateway-developer-portal)\--a pretty functional example of a forkable developer portal for your API, running on a variety of AWS services. It's a pretty interesting implementation because in addition to the tech of your API management it also helps you with the business side of things. 

The AWS Serverless Developer Portal _"is a reference implementation for a developer portal application that allows users to register, discover, and subscribe to your API Products (API Gateway Usage Plans), manage their API Keys, and view their usage metrics for your APIs..\[\]..it also supports subscription/unsubscription through a SaaS product offering through the AWS Marketplace."--p_roviding a pretty compelling API portal solution running on AWS.

There are a couple things I think are pretty noteworthy:

*   **Application Backend (/lambdas/backend) -** The application backend is a Lambda function built on the aws-serverless-express library. The backend is responsible for login/registration, API subscription/unsubscription, usage metrics, and handling product subscription redirects from AWS Marketplace.
*   **Marketplace SaaS Setup Instructions -** You can sell your SaaS product through AWS Marketplace and have the developer portal manage the subscription/unsubscription workflows. API Gateway will automatically provide authorization and metering for your product and subscribers will be automatically billed through AWS Marketplace
*   **AWS Marketplace SNS Listener Function (Optional) (/listener) -** The listener Lambda function will be triggered when customers subscribe or unsubscribe to your product through the AWS Marketplace console. AWS Marketplace will generate a unique SNS Topic where events will be published for your product.

This is the required infrastructure we'll need to get to what I've been talking about for some time with my [wholesale API](http://apievangelist.com/2014/01/30/what-will-it-take-to-sell-my-api-as-a-wholesale-resource/) and [virtual API stack](http://apievangelist.com/2013/01/28/virtualized-api-stacks/) stories. Amazon is providing you with the infrastructure you need to set up the storefront for your APIs, providing the management layer you will need, including monetization via their marketplace. This is a retail layer, but because your infrastructure is setup in this way, there is no reason you can't sell all or part of your setup to other wholesale customers, using the same AWS marketplace.

I had AWS marketplace on my list of solutions to better understand for some time now, but the AWS Serverless Developer Portal really begins to connect the dots for me. If you can sell access to your API infrastructure using this model, you can also sell your API infrastructure to others using this model. I will have to set up some infrastructure using this approach to better flush out how AWS infrastructure and open templates like this serverless developer portal can help facilitate a more versatile, virtualized, and wholesale API lifecycle. 

There is [a more detailed walkthrough of how to get going with the AWS Serverless Developer Portal](https://aws.amazon.com/blogs/compute/generate-your-own-api-gateway-developer-portal/), helping you think through the details. I am a big fan of these types of templates--forkable Github repositories, with a blueprint you can follow to achieve a specific API deployment, management, or any other lifecycle objective.