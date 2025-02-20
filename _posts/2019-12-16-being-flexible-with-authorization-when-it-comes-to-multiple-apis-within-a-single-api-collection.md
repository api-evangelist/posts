---
published: true
layout: post
title: >-
  Being Flexible With Authorization When It Comes To Multiple APIs Within A
  Single API Collection
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_aws_deploy_aws_api_gateway_auth.png
author:
  name: kinlane
tags:
  - Authentication
  - Authorization
  - Collections
---
I am working on a Postman collection that deploys an API to AWS. I’m pulling the OpenAPI from Postman using the Postman API API (mind blown), and then publishing the API to AWS as an API using the AWS API Gateway API (mind blown again). As part of this process I also need a DynamoDB instance to use as a persistent data store behind the API, which I will create using the DynamoDB API. I need all of these capabilities organized within a single Postman collection, but because of the need to authenticate with multiple API services I will be organizing each capability by AWS service so I can set the authorization for each folder, and let each individual API request inherit from the folder, otherwise I will have to set each individual API request while working—I abstract away the variables I use across the authorization as part of a Postman environment, but I still want to logically think through how I can apply authorization across services.

When defining Postman collections you can apply the authorization at the collection, folder, or request levels. This allows you to be more thoughtful of how authenticate across multiple APIs within a single Postman collection. This Postman collection is going to end up being what I’d consider to be a workflow collection, meaning it will walk through each step for the deployment of an API to AWS using Postman, so eventually it most likely will just be a series of individual API requests which can be run manually by a user, or automated with a Postman runner or monitor. However, as I am architecting my collection I don’t want to have to define the authorization for each individual request—I just want them to inherit authorizations, so I am just going to add a folder for each service. This gives me the ability to set authorization for Postman at the header level for an individual request, which I will move up to the folder level if I need to make another request to the Postman API.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_aws_deploy_postman_auth_header.png)

Then I can set authorization for AWS API Gateway, and inherit for each individual call that I am making to the AWS API Gateway API to configure the surface area of the API I am deploying to AWS.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_aws_deploy_aws_api_gateway_auth.png)

Then I can set authorization for AWS DynamoDB, and inherit for each individual call that I am making to the configure the persistent data store that I am deploying to AWS behind the API.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_aws_deploy_aws_dynamodb_auth.png)

I am using three separate APIs to deploy my API—Postman, AWS API Gateway, and AWS DynamoDB. I have an API key for Postman, and one set of a key and secret I am using to work with AWS—configuring AWS IAM to allow my key and secret to work with both service. While I am using the same set of key and secrets across both AWS services and relying on AWS IAM to manage access, I am still keeping the variables I use for each service separate so that I can keep all of my AWS variables consistent across the different Postman collections I am developing. I have built a whole list of AWS reference collections, and will be using these parts and pieces across many different workflow collections, with this just being the first one designed to deploy an API.

Once I assemble all of the different AWS capabilities across AWS API Gateway and DynamoDB I may flatten my collection into a single set of ordered API request with authorization existing for each individual request—providing a more logical sequential set of API deployment steps. Right now I am still working out what at the steps will be and just want my API requests to inherit their authorization by service. We’ll see, my steps may still be able to be organized by folder because there will most likely be several steps for each service accomplished in some sort of logical order—I don’t really know until I flesh it all out. I am guessing I will be adding more AWS services as part of this process. I am just thankful that Postman allows me to be so flexible with the way in which I define authorization and then abstract away variables as part of environments, which allows me to use different approaches to defining the authorization layer of my Postman collections, which allows me to orchestrate with many different APIs in a single Postman collection that accomplishes a specific business objective.