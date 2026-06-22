---
published: true
layout: post
title: SDK Generation Pitfalls
date: 2025-04-03T09:00:00.000Z
tags:
  - SDKs
  - Languages
  - Authentication
  - Applications
  - Observability
  - Changes
image: https://kinlane-images.s3.amazonaws.com/shared/yellow-journalism-desert-road-mountains.jpg
---
I cannot go into the details of the work required to produce usable high quality software development kits (SDKs) for APIs, you’ll have to talk to [APIMATIC](https://bit.ly/3NyONos), or any of the latest numerous other SDK generations solutions that come and go. I can speak to the high level pitfalls I have seen enterprises make when they go it alone with thinking they can generate SDKs across many different programming languages. I have repeatedly seen enterprises explore the commercial and open-source solutions out there for SDK generation using OpenAPI, and then drive their efforts into the ditch along these highways.

- **Governance** - There just isn’t enough metadata or quality of the metadata required to generate quality code.
- **Language** - Struggle with the devil in the details of each individual programming language they aren’t familiar with.
- **Authentication** - Trying to standardize their non-standardized approach to handling authentication or authorization.
- **Application** - The demands of a single application or stakeholders behind an application dominate the conversation.
- **Observability** - They feel like there isn’t any visibility into how SDKs are being applied after release and want more.
- **Changes** - There is no real plan for API change which trickles down into no plan for handling SDK changes either.

Obviously there are a lot more devil in the details, but after talking with an enterprise this week about the big picture, these are the areas I’d recommend being mindful of as you make the decisions between rolling your own, using an open-source solution, or relying on commercial solutions. SDK generation for a single API might seem doable, but once you need to scale across APIs and the consumers of those APIs, and move beyond just your internal needs, the scope of pitfalls you encounter will expand exponentially. While the nuances of languages, authentication, observability, and change are significant, the lack of governance is a major problem I witness regularly, but the demands of single applications as we are seeing right now with artificial intelligence continues to be the biggest blocker to meaningful work in this area.

**Full Disclosure:** APIMATIC is a sponsor of API Evangelist