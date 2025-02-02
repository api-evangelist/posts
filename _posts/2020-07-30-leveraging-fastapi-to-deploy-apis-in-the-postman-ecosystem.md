---
published: true
layout: post
title: Leveraging FastAPI to Deploy APIs in the Postman Ecosystem
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/fastapi_logo_teal.png
author:
  name: kinlane
tags:
  - FastAPI
  - Deployment
---
I am doing deep dives into each stop along the API lifecycle, beginning with deployment and management, to better understand how we can bring other features into Postman, without actually developing the features ourselves. There are two primary ways we are accomplishing this, by identifying open source solutions, and by partnering with services and tooling providers. Next up on my list is to flesh out is how we leverage the [FastAPI framework](https://fastapi.tiangolo.com/) as part of the Postman platform, helping developers deploy their API using the “ _high performance, easy to learn, fast to code, ready for production”_ FastAPI framework_._

If you aren’t familiar with FastAPI, [it is one of the top open source API frameworks on Github](https://github.com/tiangolo/fastapi). It is built in Python 3.6+, and based on standard Python type hints. Taken directly from the web page for FastAPI, the key features are:

*   **Fast:** Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic).
*   **Fast to code:** Increase the speed to develop features by about 200% to 300%. 
*   **Fewer bugs:** Reduce about 40% of human (developer) induced errors. \*
*   **Intuitive:** Great editor support. Completion everywhere. Less time debugging.
*   **Easy:** Designed to be easy to use and learn. Less time reading docs.
*   **Short:** Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.
*   **Robust:** Get production-ready code. With automatic interactive documentation.
*   **Standards-based:** Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.

I know that most Postman customers will care about all of those bullet points, but the one that really grabs my attention is the last one, and the fact that it is centered on the OpenAPI specification. As part of [my OpenAPI Initiative (OAI) DemanGen](https://github.com/oai-demandgen/home) efforts at Postman, and my work to flesh out different stops along the API lifecycle, I am interested in amplifying what FastAPI delivers, and work to further bake it into the Postman ecosystem. Allowing developers to rapidly deploy APIs using FastAPI across multiple cloud platforms, while also tightening the relationship between API providers who use FastAPI and Postman, by making it easier for them to document, and test their APIs using Postman. Let me break down what I am thinking to help drive the conversation around a partnership between Postman and FastAPI.

### Deploy a FastAPI Powered API from within Postman

I have been developing prototypes for a new type of Postman collection called “deployment collections”. These are collections that will deploy any API you have defined in Postman using OpenAPI, using the infrastructure APIs beneath your APIs—APIs aren’t just for applications, they are also for deploying and managing your APIs. I built an [AWS API Gateway backed by DynamoDB](http://apievangelist.com/2020/04/21/api-deployment-collections--aws-api-gateway-and-dynamodb/) and [AWS API Gateway backed by Lambda and RDS](https://apievangelist.com/2020/04/21/api-deployment-collections--aws-api-gateway-lambda-and-rds/) earlier this year. These are focused on AWS, but I’m looking to build similar end-to-end API deployment solutions that can operate as a Postman collection—this means it has to be done via an HTTP interface. These are some of the thoughts I am having when it comes to deploying APIs using FastAPI from within Postman:

*   **Multi-Cloud** \- I’d like to start with one platform, but eventually I’d like there to be the ability to deploy a FastAPI backed API to AWS, Azure, Google, and Heroku.
*   **Containerized** - Clearly a containerized approach to deploying Fastly is optimal, but I’d like to make sure and explore all possibilities when it comes deployment.
*   **OpenAPI** - Each deployment should be able to occur from a single, complete, validated OpenAPI definition that exists within Postman and synced to GitHub.
*   **Collection** - The entire API from start to first API call should be able to executed from a single Postman collection, resulting in a completely functional API on run.
*   **Environment** - All keys, tokens, and other key / values will be abstracted away from the collection, and allow for storing of everything it will need to be deployed.

There are a number of ways to deploy APIs according [the FastAPI deployment page](https://fastapi.tiangolo.com/deployment/). These are primarily CLI-based solutions, and I am looking to define API-based deployment options. I know this isn’t the normal way developer are accustom to, but there is no reason for it to be on par with CLI options, and bundled up as a collection that can be manually run, or delivered as part of any pipeline. All Postman partnerships begin as a Postman collection, and the road to tighter integration requires a collection. The future of the Postman integration program will all be driven by well-defined and hardened Postman collections. Initially I am just operating Postman deployment collections within the workspace of each OpenAPI being managed via the platform, but eventually Postman customers will be able to expose and execute these collections natively as part of the Postman interface.

### Use Postman to Manage the API Lifecycle For Fastly APIs

Supporting deployments within Postman, but also supporting FastAPI deployments that do not occur from within Postman, I would like to further flesh out how Postman can be used across the lifecycle for APIs that are powered using FastAPI. OpenAPI is the heart of FastAPI, and it can operate as the heart of Postman, making it the perfect bridge for managing many different stops along the API lifecycle using Postman. I am looking to explore how we can leverage Postman for managing the following areas:

*   **Documentation** - FastAPI has SwaggerUI built in, but I’d love to also see the ability for users to easily deploy documentation using Postman.
*   **Testing** - It would be beneficial for users to be able to automate and streamline the testing of APIs deployed using Fast API with Postman.
*   **Client** - All APIs deployed with FastAPI should automatically have a Postman collection generated from the OpenAPI, providing a ready to go client.
*   **Discovery** - All APIs deployed with FastAPI should have the option to be published to the Postman private or public API network, allowing it to be found.

These are just a handful of the core stops along the API lifecycle I’d love to see Postman support FastAPI users. Even if API providers aren’t deploying APIs from within Postman using FastAPI, they should have the option to easily manage one or more stops along the API lifecycle with Postman. API providers should be able to learn about FastAPI in Postman, as well as learn about Postman while working with FastAPI. Both Postman and FastAPI already possess significant mindshare with developers, establishing our own overlapping API communities—I’d just like to take a closer look at how we can increase the overlap between our communities, and make it easier for both our consumers to leverage all of the API solutions brought to the table by Postman and FastAPI.

I am going to use FastAPI as a poster child for API deployment as part of my Postman API lifecycle and OpenAPI DemandGen work. There are many ways in which enterprise organizations are deploying APIs, and it makes sense for Postman to be leveraging the best of breed open source solutions for API deployment, rather than reinventing the wheel. I am looking to make deployment of APIs with FastAPI as one-click as possible, making it dead simple for Postman users to define their APIs using OpenAPI, then click once to deploy, and then easily manage other stops along the API lifecycle like documentation, testing, and discovery. I will keep pushing this conversation forward as part of my work at Postman, and see where we can move things along with it comes to FastAPI and Postman working together.