---
layout: post
title: >-
  Using Containers To Bridge What Swagger Cannot Define On The Server-Side For
  My APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-api-docker.png
author:
  name: kinlane
tags:
  - My
  - Containers
  - Swagger
  - Define
  - APIs
  - ai
---
When I discuss what is possible when it comes to generating both server and client side code using machine readable API definitions like [Swagger](http://swagger.io), I almost always get push-back, making sure I understand there are limitations of what can be auto-generated.

Machine readable API definitions like Swagger provide a great set of rules for describing the surface area of an API, but is often missing many other elements necessary to define what server side code should actually be doing. The closest I’ve gotten to fully generating server side APIs, is when it came to very CRUD-based APIs, that possess a very simple data models--beyond that it is difficult to make "ends meet".

Personally, I do not think my Swagger specs should contain everything needed to define server implementations, this would make for a very bloated, and unusable Swagger specification. For me, Swagger is my central truth, that I use in generating [server side skeletons](http://apievangelist.com/2015/01/06/server-skeletons-in-restlet-studio-and-apispark/), client side samples and libraries, and to define testing, monitoring, and interactive documentation for developers.

Working to push this approach forward, I’m also now using Swagger as a central truth for my Docker containers, allowing me to use virtualization as a bridge between what my Swagger definitions cannot define for each micro-service or API deployed within a specific container. This approach is leaving Swagger as purely a definition of the micro-service surface area, and leaving my Docker image to deliver on the back-end vision of this surface area.

These Docker images are using Swagger as a definition for its container surface area, but also as a fingerprint for the value it delivers. As an example, I have a notes API definition in Swagger, for which I have two separate Docker images that support this interface. Each Docker image knows it only serves this particular Swagger specification, using it as a kind of fingerprint or truth for its own existence, but ultimately each Docker image will be delivering its own back-end experience derived from this notes API spec.

I’m just getting going with this new approach to using Swagger as a central truth for each Docker container, but as I’m rolling out each of my API templates with this approach, I will blog more about it here. Eventually I am hoping to standardize my thoughts on using machine readable API definition formats like Swagger to guide the API functionality I'm delivering in virtualized containers.