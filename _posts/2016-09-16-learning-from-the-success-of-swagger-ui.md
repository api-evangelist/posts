---
layout: post
title: Learning From The Success Of Swagger UI
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-openapi-spec.png
atomdate: 2016-09-16T22:00:00.000Z
tags:
  - Swagger
  - Learning
---
I feel like we haven't really sat down and studied the success of Swagger UI. I'm not talking about the OpenAPI Spec (fka Swagger Spec), I am only talking about the interactive API documentation that you can find on Github. Aside from the shitshow that was the movement of Swagger to be OpenSpec API, I'm thinking there are some lessons available around just the interactive API documentation itself.

First, we have to acknowledge that many people think Swagger is the documentation, and do not understand the separate nature of the specification, and the UI layer that is meant to be API documentation, and used within API tooling like the Swagger Editor. While there are numerous benefits realized from the concept of the OpenAPI Spec, the number one reason people implement is to deploy the interactive API documentation.

People need documentation for their API to communicate what it does with consumers, as well as other key stakeholders throughout the API life cycle. From what I can tell, this need is not being addressed in any new and innovative ways since the launch of Swagger UI, aside from the small group of API documentation service provider that have emerged. I can get behind paying for additional API lifecycle solutions as part of a service, but API document just seems like it should always be free by default--as well as evolved separately from the concerns of an aspiring startup.Â 

Let me try and sum up what made Swagger UI so good. It was forkable. You could fork the repo, make tweaks to the core Swagger JSON file, and if you had it published using Github Pages, you had documentation! I feel like this represents the minimum viable expenditures that API developers are willing to make when it comes to providing API documentation -- WSDL +1 (not very much). If you could understand how to tweak the JSON file, which many just see as a config file for Swagger (UI), you could have good looking (enough) API docs.

Nobody has evolved on this concept. Nobody. I'm sorry, there are some slick implementations within leading API service providers, but nobody has even replicated what is Swagger UI, using the Slate, Lucybot, or other evolved and attractive UI. We need a simple, forkable, OpenAPI Spec driven replacement for Swagger UI--just to compete. Then we need to get to work on a better iteration of it, something that can be used in any web, mobile, or desktop solution. Sadly, API providers don't want to work very hard to publish documentation and other resources, and I'm guessing that if they have to cough up some money, they'll most often just keep looking.

I feel like nobody has stopped to consider the success of Swagger UI. Not even the Swagger team. Nobody is building upon the forkability, and plug and playability that Swagger UI brought to API documentation. You know why? Because everyone is focused on building products. The OG Swagger wasn't a product, it was built to deliver on a need that API providers had. Everyone is focusing on building the next service they can sell, not the next solution API providers will need. I know, we need people building good products and services--I agree. The problem is when EVERYONE is focused on products and services, and nobody is interested delivering the open tooling the community needs.