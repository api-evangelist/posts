---
published: true
layout: post
title: Pulling All My Postman Collections Using The Postman API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_api_all_collections_docs.png
author:
  name: kinlane
tags:
  - Collections
---
I needed access to [all of the AWS Postman collections](https://github.com/api-evangelist/aws) I am building. The problem is they are distributed across multiple different workspaces. I had organized over 50 AWS Postman collections based upon the resource they were making available. Now I just wanted a list of all of them, and report on what I have done. It sounded like a good idea to group them by resource at first, but now that I needed to work with all of them in a single list, I’m thinking maybe not. So I got to work pulling all of my collections from [the Postman API](https://docs.api.postman.com/?version=latest#intro) and filtering out any collection that wasn’t from AWS.

I find it easy to get caught up in what features are available to me via the interface of the services and tooling I use, letting the UI define what is possible. This is why I only use services and tooling that have APIs if I can help it—as the API is always the relief valve for allowing me to get done what I need. In this case, while very robust, I couldn’t get everything I needed done with the Postman UI in the time period required, so I switched to the API, and was able to programmatically get at the data I needed. Allowing me to pull all of my collections from across workspaces, then organize and generate exactly the list of collections I needed for a specific report I’m working on.

While talking with folks about Postman I regularly encounter individuals who speak about the limitations in the product, stating they couldn’t use it to accomplish something because it didn’t do this or that. Without ever considering that they could accomplish it via the API. Personally, I am impressed at how thoughtful Postman has been about adding new features, helping minimize the complexity and bloat of the platform. This is why I expect platforms to have APIs, so that I can get at what I need without feeling like I am blocked by their road map, or vision of the platform. I’m used to having alternative visions of how to apply tools and services, so the API is where I get my work done.

I am doing a lot of work around syncing my legacy API catalog with my Postman workspaces, making sure there are Postman collections available for each API I am keeping an eye on. Postman is definitely not fully ready for managing hundreds of APIs, let alone thousands of APIs without some bottlenecks. This is fine. It will get there. I’m still able to do what I need to accomplish, and I will also be able to benefit from the mocking, testing, documentation, runners, and monitoring, while also potentially influencing the road map with my feedback around streamlining collection, team, and workspace management with thousands of separate APIs.