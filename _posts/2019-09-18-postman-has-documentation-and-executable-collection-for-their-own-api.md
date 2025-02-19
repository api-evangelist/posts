---
published: true
layout: post
title: Postman Has Documentation And Executable Collection For Their Own API
image: >-
  https://kinlane-productions2.s3.amazonaws.com/postman/postman-api-collections.png
author:
  name: kinlane
tags:
  - Documentation
  - Colllections
---
A true test of any API service provider is whether or not they have an API. It is one of the most critical tests I have for any company who is selling a service to API providers. If you are sell services to people who provide APIs, and do not have your own API, I’m immediately skeptical about how you are playing the game. Postman passes a lot of quality and ethical tests I have, but the fact that they eat their own food, and has [documentation and a machine readable Postman Collection](https://docs.api.postman.com/) demonstrates they get it.  
  
I’m looking to sync my API catalog a series of my Postman workspaces—ensuring that if an API in my catalog has an OpenAPI, it also has an up to date Postman Collection. Actually, I am going to outsource the profiling of a companies API to a series of Postman workspaces, and only using my catalog for profiling the other elements of a company’s operations. The presence of a Postman Collection, and a Postman Environment has long been the signal that an API in my catalog has a “complete” profile available for its API. This is why profiling APIs with Postman is valuable, if builds the definition around the actual request and response, thus completing the circle for me.  
  
Anyways, I thought it was pretty significant that Postman has an API, and manages it using the same services that they offer to their customers. I also thought it was significant that the completeness of Postman's API is enabling me to move faster when it comes profiling the completeness of other APIs I’m tracking on. It really is a pretty virtuous cycle when you think about it. While I am happy to find an OpenAPI for any API I’m profiling and learning about, I’d rather find a Postman Collection, plus a Postman Environment, accompanied with a frictionless signup process to get my keys. Wouldn’t it be nice if I could just download a collection for an API, call a single signup endpoint using my Postman account, and get a Postman Environment in return—allowing me to make my first API call after just three clicks. Someday.  
  
I am going to get to work wiring up my API catalog with the Postman Collections and Environments API, and syncing things up so that I can use Postman to deploy some mock servers, and also continue to use Postman to successfully make calls to the APIs I don’t already have a complete definition for, including the example that is necessary to actually deploy a mock server. I wish that all APIs had complete Postman Collections plus Postman Environments, then I wouldn’t have to do all this work. I could just spider the web looking for Postman Collections, import them into my system, sign up for API access, and begin actually seeing the value each API offers. Eventually we will get there, but for now I still need to be the one who is connecting the dots.