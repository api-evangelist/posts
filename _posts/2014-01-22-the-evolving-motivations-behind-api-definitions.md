---
layout: post
title: The Evolving Motivations Behind API Definitions
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-evolving.png
author:
  name: kinlane
tags:
  - Definitions
  - Definition
---
I’m spending more time diving into the evolving world of API design over the next couple of weeks. There is a rapidly emerging community of companies, tooling and approaches to designing and developing APIs, that is centered around API definition languages.

Languages for defining web services have been around for a while, with [Web Application Description Language (WADL)](http://en.wikipedia.org/wiki/Web_Application_Description_Language), which was born out of the SOAP WSDL era, representing very technical approach to describing this new world of web APIs. While WADL is still in use, it hasn’t seen the adoption many envisioned.

It wasn’t until recently that we’ve seen new approaches emerge, and get traction, with JSON based API definitions like [Swagger](https://developers.helloreverb.com/swagger/) from [Wordnik](https://www.wordnik.com/), and [I/O Docs](http://www.mashery.com/product/io-docs) from [Mashery](http://www.mashery.com/). The primary motivation behind defining your API using Swagger or I/O Docs has historicaly been to deploy interactive documentation for developers, with discovery, client-side code generation, server-side code generation and other tooling as secondary motivator, if at all.

In the last year we’ve also seen even newer approaches to designing and defining APIs emerge, with the introduction of markdown based API definitions like [API Blueprint](http://apiblueprint.org/) from [Apiary](http://apiary.io/), and [RAML](http://raml.org/) from [Mulesoft](http://www.mulesoft.com/). This new markdown approach is providing languages for describing and defining APIs that holds the promise of even being accessible to non-developers.

I have time scheduled to talk with each of the providers listed above in the coming weeks, but after a talk with the API Blueprint team from Apiary, I’m reminded of how the motivations for API definitions is continuing its rapid expansion. When you are motivated to use API definitions for just generating API documentation, you miss so much opportunity for communicating, collaborating and iterating during the planning and design of your API.

API Blueprint was born out of Apiary, so it is rooted in the desire to design and mockup APIs, all while collaborating with other key players and the actual consumers of the API. If you wait to generate an API definition when you reach the point where you are ready for documentation, you are throwing away valuable design time, and burning costly development hours. Apiary needed a way to articulate, share and communicate around the design of an API from start to finish, pushing the motivation for developers to generate an API definition, from producing interactive docs, to devliering on the entire API planning, design, development, deployment and management lifecycle.

We need these new languages to describe and communicate around APIs. Without them we can’t mockup, iterate and collaborate to find the best possible API design. Without these new languages we can’t quantify APIs to key business, marketing, and sales players, as well as the lawyers, providing a contract for not just machine to machine interaction, but B2B and B2C. Without these new languages we can’t generate standardized tooling and API deployments based upon the best API patterns available today.

I think that the fact that there are now 4 major API design approaches, represents not just an evolution in the motivation for developers to use common definitions for APIs, but also a shift that will make API design accessible to everyone, motivating even non-developers to communicate and interact with APIs, in a simple, but powerful way that can align IT and development, with overall business goals.