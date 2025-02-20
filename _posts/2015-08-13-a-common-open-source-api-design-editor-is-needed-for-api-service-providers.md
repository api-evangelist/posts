---
layout: post
title: A Common, Open Source API Design Editor Is Needed For API Service Providers
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/restlet-studio-screenshot.png
author:
  name: kinlane
tags:
  - Design
  - Editor
  - Open Source
  - Providers
  - Service Providers
  - Open
---
I love the API design editors that have emerged from [Restlet as part of their design studio](http://restlet.com/products/restlet-studio/), and from [APIMATIC as part of their SDK management service](https://apimatic.io/), and if you haven't checked out [Gelato.io](https://gelato.io/), I highly recommend it. All of these solutions provide me with a well designed user interface for working with common API definitions, but even with these offerings, I feel like the overall API universe is very deficient in this area.

It is good that these providers are using common API definitions like Swagger and API Blueprint, but the UI itself is a one-off, and for API definitions to take their place, front-and-center throughout the API lifecycle, we are going to need some common API design tooling. Any successful solution needs to go well beyond just the JSON, YAML, and Markdown, and give us a powerful user interface to craft exactly the APIs we need.

There are several other API definition editors that let you directly edit JSON, YAML, and Markdown, but to move things forward, we need an easy to use, standardized, open source, API interface interface that will work across common API definition formats. Think of what the WYSIWYG editors did for web design--we need a similar, elegant and modern solution for API design.

I have had this conversation with several API service providers, but I wanted to expand the conversation, and see if I can stimulate the development (or release) of an open source API design editor. I am looking for a solution that any API service provider can deploy within their management solutions, encouraging them to not just speak in common API definition formats, but do it in a way that developers, and non-developers alike, can participate at every stage of the API design life-cycle.