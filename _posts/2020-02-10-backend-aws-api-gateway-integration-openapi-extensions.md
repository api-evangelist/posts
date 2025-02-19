---
published: true
layout: post
title: Backend AWS API Gateway Integration OpenAPI Extensions
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-gears-smoking-cigarette.jpg
author:
  name: kinlane
tags:
  - Extensions
  - Gateways
  - OpenAPI
---
I have spent a lot of time automating my AWS API infrastructure, working to make it so I can automatically deploy API infrastructure to AWS.  I am using AWS API Gateway as part of this suite of API deployments so I have been working hard to understand how AWS speaks OpenAPI as part of their implementation. As part of my work there are three distinct types of APIs I am deploying using AWS API Gateway, which have three distinct ways of extending OpenAPI to describe.

### The Pass Through

Just passing what comes in to an HTTP host and path I give it and then passing the response back through without any transformations or other voodoo along the way. This is a basic OpenAPI extension for defining a pass through API using the AWS API Gateway.

### A DynamoDB Backend

For my basic CRUD databases I am just using a DynamoDB backend because it allows me to quickly launch data APIs that allow me to Create, Read, Update, and Delete (CRUD) data I am storing in the NoSQL database—providing me with a pretty basic approach to delivering data API infrastructure. Here is the OpenAPI vendor extension for wiring things up using a DynamoDB backend.

I like DynamoDB because you can just make API calls to get most of what you need without any sort of business logic or code in between. If I am just looking to manage data using simple web API endpoints, this is what I am doing when it comes to deploying API infrastructure.

### Logic with Lambda

I would say the the previous two types of APIs represent the most common implementations I have, but I am working to evolve my infrastructure to take advantage of newer approaches to delivering APIS like Lambda. Here is the OpenAPI extension for defining a Lambda backend, which I can then wire up to a database and storage or purely implement some business logic to do what I need to accomplish.

I am still not 100% sold on serverless, similar to containers. While there are definitely advantages I am not convinced all of the tradeoffs are worth it. At least for my infrastructure, which probably isn’t as demanding as what some of my readers are facing when it comes to APIs. Regardless, if I actually end up putting these new solutions to work, I like staying up to speed on what is going on.

### Extending OpenAPI for API Deployment and Management

I am dynamically generating these types of OpenAPI extension, populating the OpenAPI for my APIs, and then deploying using the AWS Gateway. Each type of API deployment requires a different backend setup and configuration to support, but these extensions allow me to automatically provision the facade for each API using AWS API Gateway. Once deployed I can then add each API to an existing API plan, or create a new one, and then issue API keys as needed to secure each of my APIs and limit the usage. These extensions are the key to me automating the deployment layer of my API, allowing me to move from a code-first API deployment to an API-first approach, something that is mostly myth in the AP space, but getting closer to reality in my stack.

It is OpenAPI extensions and sister specifications that are going to allow us to eventually automate and govern the API life cycle. Doing for every stop along the API life cycle as OpenAPI has done for API design and documentation. I have been documenting Swagger and OpenAPI extensions for some time now, using them to understand what vendors are up to. Now I am going further when possible and actually applying them to automating and governing my API life cycle to see where I can get traction with them. Along the way I’d like to make further proposals for more formal extensions or sister specifications that help us better define and execute on the API life cycle. In the end there should be a machine readable artifact quantifying every stop along the API life cycle—it will just take us a while to get there, and in agreement on what is needed across different platforms.