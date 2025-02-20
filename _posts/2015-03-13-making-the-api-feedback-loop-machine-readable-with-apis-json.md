---
published: true
layout: post
title: Making The API Feedback Loop Machine Readable With APIs.json
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-feedback-loop.png
author:
  name: kinlane
tags:
  - Feedback Loop
  - APIs.json
  - APIs
  - Feedback
  - APIs.jso
---
If you are following some of my recent stories, I’m heavily focused on [APIs.json](http://apisjson.org), as [I work to organize my own stack of microservices](https://kin-lane.github.io/master/index.html), using APIs.son and [Swagger](http://swagger.io). I’m working hard to define additional, machine readable layers to my microservices index that answer as many of the questions that I have about the microservices and APIs that I depend on.

The first machine readable definition I include in any [APIs.json collection](http://apievangelist.com/2015/03/04/making-sure-my-api-roundup-stories-are-machine-readable-by-designing-them-as-apisjson-collections/) I’m building is Swagger, which provides a JSON or YAML definition of the surface area for any microservice or API that I depend on. The second thing I put to work for my own APIs, is [API Commons](http://apicommons.org), which provides a JSON definition for the licensing of my APIs. Beyond that I’m pushing forward a couple of other machine readable definitions, that help me make sense of not just a handful of APIs in my own collections, but potentially thousands of APIs in the public space.

I just published two potential new machine readable definitions to add to my stack of APIs.json properties:

*   **[api-pricing](http://api-pricing.apievangelist.com/)** - My quest to understand the API pricing across the API space, from providers like Amazon to Twilio, there are some healthy patterns to follow when crafting API pricing.
*   **[api-questions](http://api-qa.apievangelist.com/)** - My realization that nobody would give a shit about a machine readable terms of service, so I created a simple JSON list of questions and answers that can be applied to APIs.

These are two areas that I am trying to better understand, as I build my machine readable index of the APIs, that I call [the API Stack](http://theapistack.com), which also helps fuel [APIs.io](http://apis.io). Another area I’m struggling to get a handle on, is the message layer around APIs, and more widely what I’d consider the feedback look around APIs. So, what the heck do I mean by this? I’m not entirely sure, I’m still trying to figure it out in real-time--which is why I'm writing this post. 

If an API is one of my internal APIs, the messaging, communication, and feedback loop starts with issue management in Github. Each API has its own Github repo as its home base, and any communication around its design, deployment, and management, happens there. However there may be other references to the API made on Twitter, Stack Overflow, or other channel, and I am looking for a way to aggregate them all in a single machine readable away, that is connected to the API.

To do this, I’m employing the same approach I’m using to get a handle on pricing, and other questions I have around API operations, and creating a new APIs.json API property type, which I’m going to call api-conversations. Right now I’m just going to include message entries for Github issues, but work to make as inclusive as I can, to include any possible channel. We’ll see where I go with api-conversations, right now I’m going to use it to manage the feedback loop within my own microservices stack, but then I’m also going to apply to the API Stack, and see what it looks like when I try and aggregate the feedback loop around public APIs.