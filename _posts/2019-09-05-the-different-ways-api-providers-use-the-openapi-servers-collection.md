---
published: true
layout: post
title: The Different Ways API Providers Use The OpenAPI Servers Collection
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-server-racks-clouds-copper-circuit.jpg
author:
  name: kinlane
tags:
  - OpenAPI
  - Servers
---
I was looking through the OpenAPI definitions I have harvested via some automated scripts I have running, and I came across an API definition that had a variety of URLs available for their APIs, making this part of the definition something I want to study more, identifying the common patterns in use. I harvest a growing number of OpenAPI definitions and Postman Collections to help me stay in tune with who the interesting API providers are, and documenting what the common building blocks of APIs are, helping shine a light on the useful practices that exist across API providers within many different industries.

The OpenAPI server collection is beeing used to help automate switching between a variety of locations, and is most commonly used to differentiate between the different stages of an API server, as see I this example:

This is just the most common usage of the OpenAPI server collection out there. I’d say the second most common example is publishing multiple regions in which an API is available—leveraging DNS to to make an API more available, performant, and meeting local and regional regulations. After harvesting and processing a couple thousand OpenAPI 30 definitions following doing the same with slightly more Swagger 2.0 files the importance of moving from a single host in Swagger 2.0 to multiple potential servers in OpenAPI 3.0 revealed itself. Signaling that APIs aren’t just being deployed and made available in a single location or way.

I will be regularly pulling the values for the server collection across all the OpenAPI definitions I index to develop a better understanding at how API providers are using it. It provides an interesting look at API providers roll out their infrastructure. I don’t expect every API provider to be documenting their APIs this thoroughly, but since I’m scanning GitHub for most of these API definitions, many of the API providers are publishing their OpenAPI definitions to GitHub because it is part of some CI/CD workflow, resulting in a more honest OpenAPI definition than what you might get with documentation. When I find anything interesting I will publish here as a story, slowly documenting the different ways in which API providers are making their APIs available, scaling them, and distributing them into different regions.