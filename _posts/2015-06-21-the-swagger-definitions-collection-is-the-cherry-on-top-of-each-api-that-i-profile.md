---
layout: post
title: >-
  The Swagger Definitions Collection Is The Cherry On Top Of Each API That I
  Profile
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-cherry.png
author:
  name: kinlane
tags:
  - Definitions
  - Definition
  - Collection
  - Swagger
---
[I create a lot of machine readable API definitions for the 1000 companies I monitor as part of my API Stack](https://github.com/api-stack/api-stack/tree/gh-pages/data). I am using [Swagger](http://swagger.io) to define all of my APIs, providing me with a simple, yet powerful way to profile each of the APIs I'm working to understand better. If you aren't familiar with Swagger, it provides a handful of fields you can use to fill out the metadata profile for APIs, like title, description, etc., but where it really gets powerful is when you put the paths collection to work, outline the details of each endpoint.

Most of the APIs I come across that are defined using Swagger, focuses on providing details on each path, including verbs, headers, parameters, and sometimes response status codes. When looking for the benefits of Swagger, many stop here. With basic metadata, and details about the paths, [you can launch interactive documentation using Swagger UI](https://github.com/swagger-api/swagger-ui)\--which is how about 80% of folks are using the API specification format.

When it comes to Swagger, my own motivations are all about [API discovery](http://discovery.apievangelist.com), so when crafting Swagger files for the APIs I track on, I can easily call it quits after defining the basic meta information, and path details, but all of this ignores some of the exremely valuable aspect of using Swagger--with the definitions collection.

Using the Swagger definitions collection you can quantify the underlying data model across API operations, providing a machine readable profile of the XML and JSON that will be part of each API request and response. Once you have the underlying data model defined, including each parameter, description, and type, you can then link to each path and / or parameter, where the data model is being put to use as part of the request or response. 

Swagger definition collections are not a requirement for Swagger UI, or for API discovery currently, but if you want to generate high quality server side code, or client SDKs, you will need a complete set of definitions present. The problem is, this is a shitload of work, and [as I face the Swagger definition for Twitter](https://github.com/api-stack/api-stack/blob/gh-pages/data/twitter/twitter-api-swagger.json), I'm looking at many hours of work if I want to ensure that Twitter's Swagger file has all of its underlying data model present, understanding why many people stop short of a complete Swagger spec.

In the end, the Swagger definition collections is really the cherry on top of each API I am profiling, highlighting the maturity of a particular API definition, demonstrating that you can do more with a machine readable definition, than just discovery, and documentation.