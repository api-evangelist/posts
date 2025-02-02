---
layout: post
title: Using Swagger As Fingerprint For My Microservice Docker Containers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-api-docker.png
author:
  name: kinlane
tags:
  - My
  - Containers
  - Swagger
  - ai
  - Micro
  - Fingerprint
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-api-docker.png)](https://kin-lane.github.io/master/)

I'm rebuilding my underlying architecture using microservices, and docker containers, and I'm [using APIs.json for navigation and discovery within these new API stacks](http://apievangelist.com/2015/01/28/using-apisjson-for-my-microservice-navigation-and-discovery/) that I use to make my world go around. As I assign each microservice, and [APIs.json file](http://apisjson.org/format.html), taking inventory of the building blocks that make the service operate, I also begin including docker into the equation, and I find myself using Swagger definitions as a sort of fingerprint for my docker powered microservices.

Each microservice lives as its own Github repository, within a specific organization. I give each one its own APIs.json, indexing all the elements APIs of that specific microservice. This can include anything I feel is important, like:

*   **X-Signup -** Where to signup for the service.
*   **X-Twitter -** The twitter account associated with the service.
*   **X-Samples -** Where you can find client side code samples.

As long as you put X- before the property, you can put anything you want. There are only a handful of sanctioned APIs.json property types, and one of them you will find in almost all my APIs.json files generated for my platform is:

*   **Swagger -** A reference to a machine readable Swagger definition for each API.

Another one I’m starting to use, as I’m building out my microservice infrastructure, is:

*   **X-Docker-Image -** A link to a docker image that supports this API.

Each of my microservices I have a supporting Docker image that is the backend for each API. Sometimes I will have multiple Docker images for variant back-ends for the same API fingerprint. Using APIs.json I can go beyond just finding the API definition, and other supporting building blocks. I can also find the backend needed to actually deliver on the API I have defined by a specific Swagger definition. I’m just in the early stages of this work, and this series of posts reflects me trying to work much of this out.

You can [browse my work on Github](https://kin-lane.github.io/master/), most of it is public. The public elements all live in the gh-pages branch, while the private aspects live within the private master branch. It is all a living workbench for me, so expect broken things. If you have questions, or would like more access to better understand, let me know. I’m happy to consider adding you to the Github organization as collaborator so that you can see more of it in action. I will also chronicle my work here on the blog, as I have time, and have semi-interesting things to share.