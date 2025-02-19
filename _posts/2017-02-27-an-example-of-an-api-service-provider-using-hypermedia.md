---
layout: post
title: An Example Of An API Service Provider Using Hypermedia
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-api-gateway-icon.png
atomdate: 2017-02-27T23:00:00.000Z
tags:
  - Hypermedia
---
There is a growing number of hypermedia APIs available in the wild these days. However there aren't a lot of examples of hypermedia API service providers making the API lifecycle more dynamic and living. When people ask me for examples of hypermedia APIs out there I like to have a handful of URLs I can share with them, providing a diverse set they can consider as part of their own operations.

One really good example of an API service provider putting hypermedia to use is Amazon Web Services--specifically with [the AWS API Gateway](http://docs.aws.amazon.com/apigateway/api-reference/).  AWS describes it best in the documentation for the gateway API:

_The Amazon API Gateway web service is a resource-based API that uses Hypertext Application Language (HAL). HAL provides a standard way for expressing the resources and relationships of an API as hyperlinks. Using HAL, you use HTTP methods (GET, PUT, POST, DELETE) to submit requests and receive information about the API in the response. Applications can use the information returned to explore the functionality of the API._

If you have used other common AWS APIs like EC2 or S3, then you know that they aren't the best designed APIs out there. They provide a lot of functionality but leave a lot to be desired when it comes to the actual design. The AWS API Gateway API is a well designed, highly functional API for managing the operations of your API. With each API call, you get the desired response, along with a collection of links defining what else is possible.

I wish that all tools in our API toolbox were designed like the AWS API Gateway is. In this single API call you can see how hypermedia contributes to the life cycle of any API being managed. You can manage access, and evolve into a staging or production environment, and the other possibilities available when each resource is put to work. Instead of having to go back to the API documentation to learn what options are available, they are given to you in a tailored collection of links.

[I have already added the AWS API Gateway to my list of hypermedia APIs](http://hypermedia.apievangelist.com/apis/), but I will now also be referencing as a blueprint of an API service provider who is putting hypermedia to work in their API design. I think hypermedia helps make applications be more flexible and resilient, and I also think hypermedia does the same at the API level, allowing us to more honestly manage change across the API lifecycle.