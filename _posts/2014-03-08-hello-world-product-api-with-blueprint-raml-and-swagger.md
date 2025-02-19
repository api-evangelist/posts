---
layout: post
title: Hello World Product API With Blueprint, RAML And Swagger
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-building-blocks-design.png
author:
  name: kinlane
tags:
  - Blueprint
  - Swagger
  - RAML
  - Product
---
Over the last couple months I’ve been taking a deeper look at the API design space, trying to understand more about the tools and services that are emerging, and the different approaches being employed throughout the API design lifecycle.

I started first with trying to [understand the evolving motivations behind why people are using API definitions](http://apievangelist.com/2014/01/22/the-evolving-motivations-behind-api-definitions/), then I spoke with API with the creators of API Blueprint, RAML and Swagger, the three leading API design providers out there, to understand more about the [vision behind their various approaches to API design](http://apievangelist.com/2014/01/31/the-vision-behind-swagger-api-blueprint-and-raml/).

After talking to each of the providers, I wanted to understand more about the tooling that was emerging from each of the providers, and went through what has emerged out of each of the Blueprint, RAML and Swagger communities.

I’m continuing my research this week this time and expanding my understanding of the differences between the three API definition formats of [API Blueprint](http://apievangelist.com/2014/02/27/api-design-tooling-from-api-blueprint/), [RAML](http://apievangelist.com/2014/03/01/api-design-tooling-from-raml/) and [Swagger](http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/). To push my understanding of each approach I worked on developing an API definition for a simple product API, in each of the three formats.

**API Blueprint**  

**RAML**  

**Swagger**  

I’m not done with each of these definitions, I’m still learning the nuances of each of the approaches to describing an API, but I learned a lot about each of the definition formats. Honestly, each format has its pros and cons, but all of them get you to the end goal of being able to describe an API interface.

**JSON vs. Markdown**  
While evaluating the I can’t help but bring some of my personal baggage to the table. When it comes to JSON vs. Markdown I feel like I’m in 2008 and struggling to leave my love of XML behind and learn JSON, secondarily some of the same emotions I’m having switching my blogs to use Jekyll where I can use either HTML or Markdown for my posts. In short, I have more experience with Swagger, and I love me some JSON, so the markdown is harder for me to adopt. This is just my baggage, but I’m sure others will face it as well.

I personally have a preference for Swagger, because of my experience with it and the JSON formatting, but I can buy into the promise of a markdown approach like RAML and API Blueprint. I feel like Swagger is machine readable formats, while Blueprint and RAML are more technical specifications. I’m not completely sold on the fact that markdown will be significantly more easier for non-developers than the JSON format, something I’ve stated before, but I could see a new breed of API designers emerge who will have a fondness for markdown over the JSON.

**All About The Tooling**  
The big thing I experienced in this process is understanding the difference the tooling makes. Using Apiary.io for designing with API Blueprint, the API Designer from from Mulesoft for working with RAML, makes a huge difference in the process. There is no design tooling for Swagger, using Apiary and API Designer showed me the importance the tools will play in the future of API design—I think it will be the tools, not necessarily the API definition formats that become the differentiator.

I think it will be the tools that will help API designers become fluent in either RAML, Blueprint or Swagger, much like WYSIWG editors have done for HTML. Each API definition format will be how we share, communicate and collaborate through the API design lifecycle, but the tooling will be how we create, manage and publish API definitions--few will hand-write API definitions.

**Templates**  
Maybe its just the way that I learn, but one thing that would help through the process of becoming fluent in RAML, Blueprint or even Swagger would be templates that act as live examples. I was able to find hello world examples for both Blueprint and RAML that I could work backwards from to learn each API definition format, but making templates more available would help. Apiary gives you a nice starter template when you first kick off a new API, and both provide you with a wealth of documentation to work from, but a library of API design templates of various complexity and applications would facilitate the learning process.

These are just some of my thoughts after spending time trying to define the same API design in three different API definition formats. I will keep pushing forward with my research into [API design](http://design.apievangelist.com), and share as many stories as I can. I think I need to generate more API definitions in RAML and API Blueprint, before I will truly understand the nuances between each of the platforms.

**Update:** I'm adding Mike Amundsen's ([@mamund](https://twitter.com/mamund)) [Hello World Products API in ALPS](https://gist.github.com/mamund/9443276) he referenced below. I think it is a very intuitive, and clean approach to defining API interfaces, and it makes me happy to see so many roads to get to the same place--some roads are short, some are long, some have scenery and some are just on the freeway.