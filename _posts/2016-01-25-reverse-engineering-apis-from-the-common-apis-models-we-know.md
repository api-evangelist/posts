---
layout: post
title: Reverse Engineering APIs From The Common APIs Models We Know
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - APIs
  - Engineering
---
[As I work to complete more API definitions, with all API endpoints defined as an OpenAPI Spec, API Blueprint, and Postman Collection, with everything wrapped in a complete APIs.json index](http://stack.apievangelist.com/companies.html)\--I can't help but consider the importance of these definitions in helping others reverse engineer these APIs, to help apply in their own API design, development, and management processes.

Whether or not you are learning about an API for consumption purposes, or learning about it from a providers perspective, there is a lot to learn from APIs that are defined using [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification), [API Blueprint](https://apiblueprint.org/), and [Postman Collection](https://www.getpostman.com/docs/collections), and is something I'm working to push [APIs.json to deliver on more](http://apisjson.org). Right now I'm struggling to just get the basics of each API, its individual methods, parameters, and underlying schemas. I am also working to index their overall operations using APIs.json. Soon though, I will reach the point where I will have a nice collection of existing APIs defined, I will be able to do much, much more--this is what I'm planning for now.

Now that I am closing in on having a couple hundred, complete (enough) API definitions for leading platforms, I think I will take another look through the stack, and evaluate how I can position them better to help potential API consumers, as well as API providers. API consumers are going to care about learning only what they need to get at the valuable resources made available via the API, while providers are going to want to better understand the API design, schemas, business models, and other aspects of the operations.

I'm thinking more deeply the API provider and API consumer sides of the same coin, so when you land on the home page of any API service provider, there is personalized, easy to use, visual elements that draw you in to learn more about an existing API you already know about. Want to learn how to connect to APIs using Postman, here is a Twitter guide. Want to learn more about designing a file storage API using Apiary, here is a Dropbox guide. There is no reason that these common guides could be easily available in the tooling we use everyday, and be driven by APIs.json, OpenAPI Spec, and API Blueprint.To help illustrate my point, I am going to pick 10 of the most well known APIs, and craft examples of what I am talking about. Blueprints that could be used in any service, as easily provide reverse engineering lessons from the home page, dashboards, and help sections we are using each day. I learn a lot about APIs from reverse engineering the API definitions of leading APIs, and hoping others will too.

If there is a specific API you'd like to see, let me know, and I'll consider prioritizing.