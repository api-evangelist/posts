---
layout: post
title: What Is Missing On My Microservices Using APIs.json
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - My
  - Microservices
  - APIs.json
  - APIs
  - Micro
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

I'm using [APIs.json to organize my swagger defined microservices running in docker containers](http://apievangelist.com/2015/01/10/use-apisjson-to-organize-my-swagger-defined-apis-running-in-docker-containers/), and using the [machine readable API index to drive navigation between microservices organized in a single collection](http://apievangelist.com/2015/01/28/using-apisjson-for-my-microservice-navigation-and-discovery/). APIs.json provides a simple, machine readable way to index the technology, business, and political elements of each microservice I deploy.

As I was auditing the [18+ microservices I’ve setup for my core operations](https://kin-lane.github.io/master/), I wanted to audit each one, and make sure I had included various elements in each APIs definition, like where developers can onboard, terms of service, and where to find related code samples. To accomplish this, I was able to just compare each microservice APIs.json, with a master APIs.json template I had established while planning my original microservice stack. 

Sometimes it is just as important to know what is missing, right alongside what is available for all of my microservices, and [APIs.json](http://apisjson.org/) is proving to be a simple way of understanding this layer of my API operation at scale.