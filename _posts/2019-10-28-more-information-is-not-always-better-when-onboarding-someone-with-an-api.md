---
published: true
layout: post
title: More Information Is Not Always Better When On-Boarding Someone With An API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stories-beach-rocks-currents-internet-numbers.jpg
author:
  name: kinlane
tags:
  - On-Boarding
---
I process a lot of API documentation, trying to make sense of what each API does. As I wade through the human and machine generated API documentation for the different APIs I am profiling I am reminded that more information isn’t always better when it comes to getting started with an API. When it comes to understanding what is possible with each API, it is more meaningful to begin making API calls and seeing results than it is read lengthy descriptions about what is possible. Especially when it is rambling technical speak that doesn’t provide you with any sort of narrative about what is happening, often leaving me more confused than when I first stumbled across an API in the first place.  
  
I know it may seem like more information is better, but most of the time developers will just need a summary of an API that is less than 50 characters, and a description that is less than 250 characters. The path, parameters, headers, body, and resulting response should tell the rest of the story. If you have to list too many parameters, enumerators, and write a chapter about what is possible with a single API path, then you probably need to spend more time refining the design of the API. I just don’t have the time to read multiple paragraphs about what each API path does, I want the design of the API request and response to tell the story for me in a standardized way that makes sense.  
  
Take the time to think about your consumers when writing your API documentation. Better yet, rely on the schema for OpenAPI, Postman collections, and other machine readable definitions to provide the constraints necessary to distill down the human readable portions of your API definitions. Both of these API definition formats provide you with a limited about of space to tell your story, and populate what is needed for publishing coherent API documentation. Pushing you to fill in the blanks with short concise descriptions of what each API path and verb delivers, allowing you to lean on the specifications when it comes to dialing in how you describe your API capabilities.  
  
Our APIs should always be as precise as they can be. So should the documentation and other resources we provide to support hem. We should always be working to refine how we speak about what our APIs do. This is one of the reason for establishing feedback loops like blogs, road maps, and social media accounts supporting our APIs, so that we can be regularly thinking about how we communicate about our APIs, done in a way that allows for other stakeholders to respond, critiquing our approach, and pushing us to be more coherent in how we talk about our APIs. The more we talk about our APIs, the better we will get at talking about them. Pushing us to be more thoughtful, informative, and precise in how we design, document, and tell stories about what our APIs do, helping us make them more approachable by our consumers.