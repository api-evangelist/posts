---
published: true
layout: post
title: Company Specific API Workspaces
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_api_collection_workspace_api_evangelist.png
author:
  name: kinlane
tags:
  - Worspaces
---
I have many different workspaces defined within my Postman team account. I’m organizing a couple thousands APIs into different topical categories that help articulate the value they deliver. Once I’ve sufficiently profiled a company and their APIs, producing a reference Postman collection, I’ll share to, or create a workspace for each tag I have applied to each API as part of my profiling process. Depending on the company, I am looking to establish a complete (as possible) Postman reference collection, as well as some more specialized capability, workflow, and other relevant collects that are derived from, and compliment the reference APIs present, but go further towards accomplishing specific business objects with each API path available.

I am currently profiling [the Postman API](https://docs.api.postman.com/?version=latest#99810ef3-3cc0-a6cc-06f5-d8e2ae9d84e4), while also defining the capabilities present within the API that I depend on to conduct API Evangelist business. I have already added the Postman API to several other workspaces including design, mocking, documentation, testing, and client, but now I’m going to create a company specific workspace for managing my API collections for Postman. My master copy of the Postman collection which I’ve downloaded from the Postman API Network will act as the master API collection for Postman, and I will share the collection out to any relevant workspace, but I will also be creating some more specific workflow and capability collections that reflect how I use the Postman API to run API Evangelist.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_api_collection_workspace_api_evangelist.png)

I’m not sure this approach will scale, but I’m purposely looking to push the number of collections and workspaces I’m managing using Postman to see where the friction is. I’m using the Postman API to help me organize and audit how I’m managing APIs at scale, so I I can adapt and pivot based upon how I’m breaking things up. If I had to manage everything through the Postman interface it would take me days to get things reorganized each time I change my strategy, but since I have the API I am confident that I can rapidly make changes at scale. The process should really harden the way I view collections, workspaces, and environments at scale, helping realize the pros and cons of different ways of organizing thousands of APIs, and derivative collections.

Next, I will consider how I want to sync my API workspaces to GitHub. I want to maintain a mirror image of each API workspace on GitHub. I’m just not sure exactly the format, and how I will automate at scale. For now, I will just look to publish a copy of any collection within a workspace to the corresponding company GitHub repository with the API Evangelist organization. Then I will look at how I will keep it in sync with the OpenAPIs I also want to publish, as well as the overall APIs.json for the wider operations around each API. Seamlessly integrating Postman into my overall API discovery process, while using Postman as the ultimate truth for what is possible with each API, because it is where I”m actually sending requests and saving request and response examples, which ultimately certify that an API is real or not in my world.