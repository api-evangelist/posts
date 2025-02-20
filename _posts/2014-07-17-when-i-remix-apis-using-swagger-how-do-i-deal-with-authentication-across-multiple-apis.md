---
layout: post
title: >-
  When I Remix APIs Using Swagger How Do I Deal With Authentication Across
  Multiple APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key.png
author:
  name: kinlane
tags:
  - Authentication
  - Swagger
  - APIs
---
One of the things I’m loving about where the API space is going, is the simplicity, and remixability of available API resources, when they are defined with machine readable API definitions like [Swagger](http://swagger.wordnik.com/). An example of this, can be found in [my recent work to make federal government APIs more discoverable](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government/).

I generated machine readable API definitions using Swagger, for four separate APIs out of the GSA. The APIs were spread across two separate domains: [usa.gov](http://www.usa.gov.apievangelist.com/) & [explore.data.gov](http://explore.data.gov.apievangelist.com/). You can follow the details of research, at each of the project repositories, but as I continue with my work, I keep thinking about the power that having a machine readable definition for all four of these APIs, and my ability to now remix these simple, and powerful API resources into [virtual stacks](http://apievangelist.com/2014/04/17/api-virtual-stack-composition-like-the-absolut-drinks-data-api/). After I work my way through the 120 government APIs I have targeted, I will have an amazing index of government API resources to compose from.

My vision around all of this goes beyond just [API discovery](http://discovery.apievangelist.com), and finding government APIs. I want to make it so we can compose virtual stacks of API resources, that can be used in different scenarios. If you are building a public engagement app for an election, you can assemble exactly the API resources your developers will need, aggregate them using their API definition, into a single developer area—even though the APIs may span multiple federal agency developer areas.

In this scenario, developers don't have to go find all the API resources they need, an architect, or API lead can aggregate everything into a one-stop-shop for what the developers will need. This evolution in API delivery makes me very happy, right up until I come up against the current state of on-boarding with APIs, to get the credentials you need to use the API resource. In this particular scenario, you would have to sign up for an account with 10 or 20 separate agencies, or outside groups—stripping away any benefits gained through the remixing and aggregation of APIs.

How do we solve API consumer access for the API economy? I know that API providers like Mashape, and Mashery have tried to solve with their platforms. These touch on the problem, but are providing very siloed solutions--I feel we need one that works for API consumers who are using many APIs, across many providers, in an adhoc manner. As a lead architect for a mobile project, I shouldn't have to spend hours signing up my application across many different API consumer accounts.

As part of the [APIs.json specification](http://apisjson.org), we encourage API providers to include a link to their signup page, but this is just a link. Eventually we need a machine readable API registration flow, where trusted developers can ping, receive authentication instructions, and easily obtain keys to use an API resource. I’m sure there are legacy SOA scenarios my readers will school me on, and I’m hoping to also learn about any existing standards available that address this. My motivation here, is to push my understanding of what is available, and hopefully jump start a conversation with API providers, about any viable solutions to authenticating across multiple APIs as seamlessly as possible, when you are developing distributed apps.