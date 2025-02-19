---
layout: post
title: Playing With The New SwaggerHub
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tony-kin-swaggerhub.jpg
author:
  name: kinlane
tags:
  - Swagger
---
I received a personal demo of the new [SwaggerHub](https://swaggerhub.com) from Mr. Swagger himself -- Tony Tam, this last week. SwaggerHub is a new API life-cycle hub, centered around the API definition format, developed by the SmartBear Swagger team. The new hub brings together all of the Swagger tooling into a single, collaborative web application, that allows you to manage API definitions through varioius stages of the API life-cycle.

SwaggerHub lets you import and export your JSON or YAML Swagger definitions, giving you an environment for storing, searching, versioning, and collaborating around the definitions. Using the platform, you can edit Swagger definitions using Swagger Editor, generate server and client side code with Swagger CodeGen, and play with the API using Swagger UI--all wrapped in this new versioned and collaborative API design environment.

After importing a handful of my APIs into SwaggerHub, it feels like a solution to help me manage the central truth that are my API definitions, allowing me to bring other people into the process, and generate the code and docs that will be needed at other stops along the API life-cycle. I'm assuming that other stops like testing, monitoring, and virtualization will emerge in future iterations of SwaggerHub.

SwaggerHub works well for API definition centralization, collaboration, and management, but some of the publishing of docs, server and client code didn't work as I'd expect them. There is Github integration for logging into SwaggerHub, and a "Github Push" feature, which I couldn't get to work, so I'm assuming the publishing and orchestration around APIs will only improve -- something I'm really interested in, because I use Github to manage all aspects of APIs life-cycle.

I like what I see so far in the [SwaggerHub](https://swaggerhub.com), and see hints of the future with Docker image references, an API behind the platform, and I know there is APIs.json goodness right behind the surface. For now, I will just keep importing my designs into SwaggerHub, keep playing with, and seeing where Tony and the team takes the new API collaboration destination.