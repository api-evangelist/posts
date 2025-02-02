---
published: true
layout: post
title: Developing An API Environment Naming Strategy
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/telephone_wires_drawing.jpg
author:
  name: kinlane
tags:
  - Environments
  - Naming
---
I’m creating more Postman environments lately. I’m realizing the potential for using environments as a pivotal layer in defining and working with Postman collections. Environments are the missing ingredient from OpenAPI, and provide a powerful way to abstract away key value pairs, including keys and tokens from the Postman collections, allowing me to apply the same Postman collection over and over but in different contexts. As I’m pushing the boundaries of working with API environments I’m being pushed to think more deeply about how I name my variables so that they stay in sync with Postman collections, but more specifically work seamlessly across many different types of Postman collections.

An example of this shift has emerged while I am crafting [Postman collections for AWS APIs](https://github.com/api-evangelist/aws), and was defining a base environment for each collection with a handful of key / value pairs which I will need to actually fire up a collection and begin making calls to each AWS API I am targeting with each Postman collection.

*   **baseURL** - The baseURL for use across all the requests I have organized into collections.
*   **accessKey** - One half of the keys needed for authenticating against any AWS API.
*   **secretKey** - The other half of the keys needed for authenticating against any AWS API.
*   **region** - The region where each of the APIs I’m engaging with are operating within AWS.

As I build each Postman environment I am naming each one with the same name as I am applying to the Postman reference collection I am creating for each AWS API. This works well in isolation, but the approach begins to break down as I begin crafting capability, workflow, and walk through Postman collections that will be putting multiple AWS from across multiple AWS services to work. This realization has made me aware that I am going to need to begin developing a more comprehensive and long term strategy for crafting my environments, as well as the variables I use across them, making my environments more flexible and adaptable to many different Postma collection scenarios. 

When defining access and secret keys I can increase or decrease the scope of keys across the AWS services I am using, but when it comes to baseURL and region I am going to need to get more precise when it comes to the service I’m targeting within each collection. I am considering appending two namespace tags to each Postman environment key I am crafting.

*   **Provider** - Using provider\_ as a prefix for all baseURL and regions.
*   **Service** - Using service\_ as a prefix for  all baseURL and regions.

This will help me better define the baseURL and regions I am applying, allowing me to strategically targeting specific services within collections, and abstracting away the context of the services baseURL and which region it is operating in as part of each Postman environment—applying the following patterns to two of my AWS Postman environments.

*   **aws\_ec2\_baseURL** \- Making the baseURL specific to AWS EC2.
*   **aws\_ec2\_region -**  Making the region specific to AWS EC2.
*   **aws\_s3\_baseURL** \- Making the baseURL specific to AWS S3.
*   **aws\_s3\_region -**  Making the region specific to AWS S3.

I will use this approach within my AWS API reference Postman collections even though I do not have any collisions between services. It allows me to use my AWS reference Postman collections as the seeds for other workflow, capability, and walk through Postman collections without having to rename variables. Which then allows me to mix multiple services within a single collection, while preventing collisions between similar variables that will have different values.

Moving forward I am going to work to establish some guidance for naming of environments, variables and globals, considering how they’ll be applied to requests and folders within collections, as well as across multiple types of collections across different workspaces. I’m looking to begin laying the groundwork for how we can better manage the environments we apply manually or in automated ways across our API collections, being more thoughtful and intentional when it comes to how we define the environmental context we are applying—something that will affect both how APIs are implemented, as well as how secure and scalable our implementations are.