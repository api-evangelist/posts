---
published: true
layout: post
title: The API You Produced Is Not An API Until It Is Consumed
tags:
  - Producer
  - Consumer
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-chess-in-the-park-with-pigeons.jpg
---
I love the confidence that exists within the enterprise when it comes to knowing everything you need to produce an API, but also the simultaneous anxiety and lack of awareness regarding the external consumption of the same APIs. My experience with the dissonance of API producers can be seen in this API lifecycle visualization I contributed to while working at Postman as the Chief Evangelist.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/postman-api-lifecycle.jpg" style="padding: 15px;">

I worked for months to negotiate this representation of the API lifecycle and with the help of [Shruthi Venkatesh](https://www.linkedin.com/in/shruthivee/) at Postman, it was brought to life as this meaningful visualization. So why does it matter?

**1) It Is THE API Lifecycle** - The API lifecycle is almost always represented as simply an API producer lifecycle because vendors are trying to sell solutions to API producers—-this is what made Postman different. 
**2) Producer & Consumer** - This API lifecycle reflects both the producer and consumer perspective, but the hand-off in the middle is what really matters when it comes to APIs that are ultimately successful.

An API is not an API until it is consumed. The design of your API is shaped by consumers, the languages and platforms they use, and the feedback and constraints of API consumption at scale. APIs are not simply a mechanism for exposing your database and other systems to the outside world. They are an interface. They are a two-street. I know that our cozy insulated enterprise environments afford us a lot of protection when it comes to the consumers of our APIs, but expanding our horizons beyond our vantage point as an API producer is one of the most critical reasons do APIs.

As part of my API governance services I will produce and require robust JSON Schema and OpenAPI artifacts for any of the APIs you produce and consume. I will also require there be a minimum amount of coverage of these OpenAPI and JSON Schema artifacts with Spectral rule coverage, defining all of the patterns and anti-patterns that exist across the APIs you produce and consume. I do not do this to tell your team how they should produce APIs. As long as they are HTTP APIs, I don’t care. But I do want 90%+ of the landscape of APIs you produce and consume defined as OpenAPI, JSON Schema, Postman Collections, and 80%+ of the patterns and anti-patterns defined as Spectral rules. 

I need these artifacts in place for your APIs, not to tell your teams how to design APIs, or to tell the API producers of the APIs you consume how to design their APIs. This is a very producer-centered way to look at API governance, and is one that works very well when you are selling API governance services. It is effective for me to tell you that you are doing something wrong, and sell you a service. Honestly, I am not in the business of telling you what is right or wrong with your APIs, I am in the business of mapping your API landscape, which happens to include mapping the design patterns and anti-patterns you have employed. However, I am less worried about said pattern being right or wrong, I am interested in said pattern being consistent. I don’t care if you use POST for updates, as long as it is consistent behavior across your APIs.

The need to externalize digital resources and capabilities will be the biggest driver of change within the enterprise. This change won’t come easy, and I am here to help with the transition. I will always be an advocate for the consumer of APIs, primarily because the loudest voices out there tend to speak for the producer of APIs. This was one of the reasons I went to work at Postman as the Chief Evangelist—-it was one of the few centers of power for API consumers. API consumers make or break your APIs. Successful APIs are about both balance between producers and consumers-—something that is difficult for many to see, but is reflected in the visual above. I will work to commission a new visual for the next area of evolution for APIs, and continue demonstrating that APIs are a two-way street, and not something you do in isolation.