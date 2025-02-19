---
published: true
layout: post
title: Use APIs.json To Organize My Swagger Defined APIs Running In Docker Containers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-api-docker.png
author:
  name: kinlane
tags:
  - My
  - Containers
  - APIs.json
  - Swagger
  - Define
  - APIs
  - ai
  - APIs.jso
---
I continuing to [evolve my use of Swagger as a kind of central truth in my API design, deployment, and management lifecycle](http://apievangelist.com/2015/01/10/using-containers-to-bridge-what-swagger-cannot-define-on-the-serverside-for-my-apis/). This time I’m using it as a fingerprint for defining how APIs or micro-services that run in Docker containers function. Along the way I’m also using [APIs.json](http://apisjson.org) as a framework for organizing these Swagger driven containers, into coherent API stacks or collections, that work together to accomplish a specific objective.

For the project I’m currently working on, I’m deploying multiple Swagger defined APIs, each as separate Docker containers, providing some essential components I need to operate API Evangelist, like blog, links, images, and notes. Each of these components have its own Swagger definition, and corresponding Docker image, and specific instance of that Docker image deployed within a container.

I’m using APIs.json to daisy chain all of these APIs or micro-services together. I have about 15 APIs deployed, each are standalone services, with their own APIs.json, and supporting Swagger definition, but the overall project has a centralized APIs.json, which using the includes properties, provides linkage to each individual micro-services APIs.json--loosely coupling all of these container driven micro-services under single umbrella.

At this point, I’m just using APIs.json as a harness to define, and bring together the technical aspects of my new API stack. As I pull together other business elements like on-boarding, documentation, and code samples, I will add these as properties to my parent APIs.json. My goal is to demonstrate the value [APIs.json](http://apisjson.org) brings to the table when it comes to API and micro-service discovery, specifically when you deploy distributed API stacks or collections using Docker container deployed micro-services.