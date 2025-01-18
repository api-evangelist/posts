---
layout: post
title: >-
  API Management Infrastructure And Service Composition Is Key To Orchestration
  With Microservices In A Containerized World
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-conductor.png
author:
  name: kinlane
tags:
  - Management
  - Orchestration
  - Microservices
  - API Management
  - Infrastructure
  - ai
  - Micro
---
As I work to r[edefine my world using microservices](https://kin-lane.github.io/master/), I have this sudden realization how important my API management infrastructure is to all of this. Each one of my microservices are little APIs that do one thing, and do it well, relying on my API management infrastructure to know who should be accessing, and exactly how much of the resource they should have access to.

My note API shouldn’t have to know anything about my users, it is just trained to ask my API management infrastructure, if each user has proper credentials to accessing the resource, and what the service composition will allow them to do with it (aka read, write, how much, etc.) My note API does what it does best, store notes, and relies on my API management layer to do what it does best--manage access to the microservice.

This approach to API management has llowed me to deploy any number of microservices, using my API management infrastructure to compose my various service packages—this is called service composition. [I employ 3Scale infrastructure for all my API / microservice management](http://bit.ly/13esk6Q), which I use to define different service tiers like retail, wholesale, internal, and other service specific groupings. When users sign up for API access, I add them to one of the service tiers, and my API service composition layer handles the rest.

Modern API management service composition is the magic hand-waiving in my microservice orchestration, and without it, it would be much more work for me to compose using microservices in this containerized API world that is unfolding.

_**Disclosure:** 3Scale is an API Evangelist partner._