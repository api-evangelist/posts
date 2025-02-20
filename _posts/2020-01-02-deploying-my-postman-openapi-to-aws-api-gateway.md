---
published: true
layout: post
title: Deploying My Postman OpenAPI To AWS API Gateway
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/braceros-domingo-ulloa-nyc-subway-train-125th.jpg
author:
  name: kinlane
tags:
  - Gateways
  - Deployment
---
I created [a bunch of different Postman collections for AWS services](https://github.com/api-evangelist/aws) leading up to re:Invent this year, and now I’m using individual requests to deliver on [some different Postman AWS API life cycle workflows](http://apievangelist.com/2020/01/02/a-postman-collection-for-managing-the-life-cycles-of-my-apis/). To flesh out the scaffolding for how I define and deliver APIs throughout their API life cycle I got to work on [a Postman collection for defining and executing every single stop in my API life cycle](http://apievangelist.com/2020/01/02/a-postman-collection-for-managing-the-life-cycles-of-my-apis/) in a way that I could consistently apply across many different APIs. I am using Postman to define the central truth of each of my APIs with OpenAPI, and I want to use Postman to deliver and execute on that truth across every single stop along the API life cycles. One of the more critical stops I wanted to provide a solution for was API deployment, providing me with a simple way to immediately deploy an API from an OpenAPI definition.

Deploying APIs are hard. It is one of the most complicated and least standardized stops along the API life cycle. Regardless, I wanted a simple straightforward Postman collection that would allow me to take an API definition within Postman, and publish an API to one of the major cloud platforms—AWS won out for simplicity. Ultimately, using Postman I was able to pull an OpenAPI for one of my APIs, then deploy an API in five steps. Providing a basic, introductory Postman collection for deploying a Postman API to AWS API Gateway.

1.  **Pull API** - Loads up the specific version of a Postman API into the environment for processing within each of the next steps.
2.  **Create Table** - Actually creates an AWS DynamoDB table derived from the name of the API being pulled from Postman.
3.  **Prepare OpenAPI** - Takes the OpenAPI and generates AWS API Gateway integration extensions that define the backend.
4.  **Publish OpenAPI** - Takes the new OpenAPI with integration extensions and publishes to AWS API Gateway.
5.  **Deploy API** - Actually deploys the API to a specific development or production stage in the gateway.

All of this could easily be distilled down into a single Postman request, but I want to pause and make sure that is what I need. It has already been distilled down from multiple API calls to Postman, AWS DynamoDB, and AWS API Gateway. So, I am just pausing to make sure of the workflow I want for deploying an API to a development or production environment.  Ultimately the database might be switched out depending on my implementation, and the prepartion of the OpenAPI will vary depending on backend being used, so keeping things separate and modular for now makes a lot of sense, giving me ultimately flexibility around how I evolve this API life cycle workflow collection.

This collection depends on an environment to authenticate with the Postman API, AWS DynamodDB API, and AWS API Gateway API, as well as to store data used across the deployment process. You can import this environment into your Postman, enter your keys and tokens, and it should work as long as your AWS IAM is configured properly—you will need to have AWS DynamoDB, and API Gateway full access for it all to work. I use the same AWS access key and secret across the API requests for both services, and depend on IAM to be properly defined for the keys, as well as AWS role which is used as part of each API backend integration definition. I’ll document this all better in the near future.

[If you want to kick the tires on ithe collection you can grab the Postman collection and the Postman environment here](https://documenter.postman.com/view/35240/SWLce9Vf?version=latest). Of course, this is all a work in progress, and meant to flesh out a process for deploying APIs using Postman. Next I will flesh out a couple of the different types of APIs I deploy, then work to create a process to accommodate each one, preparing the OpenAPI as it leaves Postman to deliver the proper backend for each type of API I’m publishing. Eventually I will have a suite of API deployment patterns for AWS, and I will be assessing the delivery of comparable APIs using Azure and Google—after initial work, I deemed AWS as being the easiest, as well as being the lowest hanging fruit when it comes to developing Postman collections that deploy an API you have defined using Postman.