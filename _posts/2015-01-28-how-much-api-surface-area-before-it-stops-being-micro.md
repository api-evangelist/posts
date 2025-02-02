---
layout: post
title: How Much API Surface Area Before It Stops Being Micro?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-map-grid.png
author:
  name: kinlane
tags:
  - Micro
---
I have most of the core platform that I run API Evangelist on [re-engineered as individual microservices](https://kin-lane.github.io/master/), defined on Github, and running using Docker instances. I’m using [APIs.json for discovery, navigation](http://apievangelist.com/2015/01/28/using-apisjson-for-my-microservice-navigation-and-discovery), and to [connect swagger API definitions, to their docker backends](http://apievangelist.com/2015/01/28/using-swagger-as-fingerprint-for-my-microservice-docker-containers). So far I have 18 microservices, which I define as very simple APIs, that do one thing, and focus on doing it well.

I’m very critical about any feature I add in, working hard to keep each service as micro as I can, reducing complexity, and bloat in any single API. However, with each service I reach the point where I have to cut off feature creep, and establish an entirely new API definition--I am at this point with my link service.

I have a pretty bloated link management system in the legacy version of my platform, something which handles links for functions ranging from [Pinboard](https://pinboard.in/u:kinlane) integration, to handling linkrot on my public website. My legacy system runs using an API too, but it is a sloppily designed API, with a wide surface area, something I’m looking to prevent in the next version.

So far I’ve broken out a single API into three separate microservices:

*   **Link -** A dead simple link management tool, allowing me to add a title, and url to a simple link data store, for future use.
*   **Curated -** A service to manage links I curate from many sources, including additional bells & whistles, like pulling text body, taking screenshot, and much more. 
*   **Linkrot -** A link storage system designed for a singe purpose—to address link rot on my public websites. The API works with a simple JS library to store, monitor, and take screenshots of websites I link to across my network.

I have about five other simple, link related, microservices I’m planning, but these three designs represent the main link resources I need to make API Evangelist work. All of the microservices I’m designing will be open sourced at some point, but the linkrot implementation is one I may also be offering as a service. I’m enjoying the feature across my sites, and is something that I think has some viability as a basic service.

I’m sure my own definition of what a microservice is--will evolve, ebb and flow, but for now the first rule of microservice club for me, is keep things doing one thing, and doing it very well—enforcing simplicity in every decision.