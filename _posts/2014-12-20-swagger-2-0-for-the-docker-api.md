---
published: true
layout: post
title: Swagger 2.0 For The Docker API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/docker-swagger.png
author:
  name: kinlane
tags:
  - Swagger
---
[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/docker-swagger.png)](http://theapistack.com/data/docker/docker-remote-api-swagger.json)

I’m developing a common API for all the APIs I deploy via Docker containers, meaning that each API that I design as a Docker image, will have an API to control all aspects of deployment, and its operations. I will be keeping most of the surface area available in [current version of the Docker API](https://docs.docker.com/reference/api/docker_remote_api/#v116), but I'm thinking I will add a handful of endpoints, and maybe alter a couple of the existing Docker defined endpoints to better meet my needs.

To support my work, I need a Swagger 2.0 definition for the v1.16 of the Docker API. I wish everyone would create machine readable API definitions for their APIs by default, but until that is the norm, I will be creating myself. I’m getting pretty good at writing scrape scripts for harvesting API documentation (if they are well formed).

This Swagger definition not 100% complete, but [here is what I have so far of a Swagger 2.0 representation of the Docker v1.16 API](http://theapistack.com/data/docker/docker-remote-api-swagger.json). Its on Github, so if you use this definition, and fix anything, or add parts and pieces i didn't, please submit back, so everyone can benefit from it. I haven't completed the data model for the endpoints, but I'm storing the JSON responses for each endpoint, and just need to set aside some time to finish.

You can find the [Swagger 2.0 definition for the Docker v1.16 API on The API Stac](http://theapistack.com/data/docker/docker-remote-api-swagger.json)k, where [I publish all my Swagger definitions for the APIs](https://github.com/kinlane/api-stack/tree/gh-pages/data) I integrate with, and monitor as part of my research. I’m adding definitions all the time, so check back often, and if you have any API definitions I do not, feel free to fork the repo, and submit them via pull request. I’m not just looking for Swagger, I'd love to have any format you generate machine readable API definitions in—it is important that all of this layer of the API space, is accessible, and machine readable, so please help make it so.