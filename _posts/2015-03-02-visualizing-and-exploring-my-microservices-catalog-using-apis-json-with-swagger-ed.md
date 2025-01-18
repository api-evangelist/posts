---
published: true
layout: post
title: >-
  Visualizing And Exploring My Microservices Catalog Using APIs.json With
  Swagger.ed
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apis-catalog.png
author:
  name: kinlane
tags:
  - My
  - Microservices
  - APIs.json
  - Swagger
  - APIs
  - Micro
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png)](http://apisjson.org)

I'm just getting started exploring the ways to use [APIs.json](http://apisjson.org) when it comes organize my new Docker fueled, micro services stack. I’ve been [using APIs.son to describe each micro service](http://alpha.apievangelist.com/2015/01/10/use-apisjson-to-organize-my-swagger-defined-apis-running-in-docker-containers/), as well as define the overall collection of almost 20 micro services. I’m using the include collection, as a [navigation for the loosely coupled stack of micro-services](http://alpha.apievangelist.com/2015/01/28/using-apisjson-for-my-microservice-navigation-and-discovery/), and my friend Chris Spiliotopoulos ([@chefarchitect](https://twitter.com/chefarchitect)), has done some more work with [his Swagger.ed](https://github.com/chefArchitect/swagger.ed), delivering some [APIs.json](http://apisjson.org) goodness that is in alignment with where I want to take all of this.

Adding to the [discovery and visualization work he did for Swagger](http://apievangelist.com/2015/02/23/i-got-swaggered-last-week-and-now-i-am-seeing-api-visualizations/), Chris enabled Swagger.ed to look for valid APIs.son files as well, so when you browse to any APIs.son, like the one I have for my [micro services stack](https://kin-lane.github.io/master), you see the little APIs.son search icon in the address bar.

[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apis-json-in-browser.png)](https://kin-lane.github.io/master/apis.json)

When you click on the APIs.son search icon in the address bar, you get a very cool visualization. Its pretty basic at the moment, just a visual catalog of the APIs available in the include collection of my stack, but when you connect up with the Swagger visualization work he's already done, we could have a pretty cool API catalog for managing and exploring microservices.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apis-catalog.png)

I have almost 20 micro-services listed, and Swagger.ed gives me the ability to navigate it in a very interactive way. Whats next? We don’t know…it is about exploration, and finding out the most meaningful way of exploring the APIs I deploy and aggregate into APIs.son collections.

I can see having a visual catalog of all of my API design that I collect, then deploy, and evolve them as needed for various parts of my infrastructure or for my clients, into other sub-collections? Disconnected collections? Loosely coupled collections? Not sure how tight I want things, part of [the micro service definition for me](http://alpha.apievangelist.com/2015/01/28/how-much-api-surface-area-before-it-stops-being-micro/) is the size of the network connecting the services, as well as the services theselves.