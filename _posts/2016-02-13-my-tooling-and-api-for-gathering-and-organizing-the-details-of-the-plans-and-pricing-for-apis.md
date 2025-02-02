---
layout: post
title: >-
  My Tooling And API For Gathering And Organizing The Details Of The Plans And
  Pricing For APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-plans-spec-interface-algolia.png
tags:
  - My
  - Plans
  - Tooling
  - Pricing
  - APIs
  - ai
---
[A couple of weeks ago I started playing with a machine readable way to describe the pricing, and plans available for an API](http://alpha.apievangelist.com/2015/12/15/playing-with-a-json-representation-for-the-plans-for-many-of-the-leading-apis/). I spent a couple of days looking through over 50 APIs, and how they handled the pricing, and their API access plans, and gathered the details in a master list, which I am using for my master definition. I picked up this work, and moved it forward over the last two days, further solidifying the schema, as well as launching an API, and set of admin tools for me to use.

While my primary objective is to help me establish a machine readable definition that I can use to describe the plans of the APIs I provide, as well as the ones that I monitor as part of my regular work in the space--I needed an easier way to help me track the details of each API's plan. So I got to work creating an simple, yet robust admin tool that allows me to add one or many plans, for each API that I track on. 

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-plans-spec-interface-algolia.png)

To help me drive this administrative interface I needed an API (of course), that would allow me to add, edit, and delete the details for each plan, using my API plan schema as a guide. I got to work designing, developing, and launched [the first beta version of my API plans API](http://plans.apievangelist.com/api/), to help me gather, and organize the details for any API I want, whether its mine, or one of the many public APIs I track on.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-plans-ui-interface.png)](http://plans.apievangelist.com/api/)

Now that I have an API, and an administrative interface, I'm going to get to work adding the data I gathered from my previous research. I have almost 60 APIs to enter, then I hope to be able to step back, and see the API plan data Ive gathered in a new light. Once I get to this stage, I'm looking to craft a simple embeddable page for viewing an API's plan, and create some visualizations for looking across, and comparing multiple APIs. I'm looking to apply this concept to verticals, like with business data via APIs like Crunchbase, AngelList, OpenCorporates, and others.

While my API plan schema is far from a stable version, it at least provides me with a beginning definition that I can use in my API profiling process. Here is the current version I have for the Algolia API, to demonstrate a little bit of what I am talking about.

This current version allows me to track the pages, timeframes, metrics, geo, limits, individual resources, extensions, and other elements that go into defining API plans, and then actually organizing them into plans, that pretty closely match to what I'm seeing from API providers. For each plan I define, I can add specific entries, that describe pricing structures, and other hard elements of API pricing, but then I can also track on other elements, giving me a looser way to track on aspects that impact API plans, but may not be pricing related.

I am pretty happy with what I have so far. Something I hope in a couple of years this could be used as a run-time engine for API operations, in a similar way that the OpenAPI Spec, and API Blueprint are being used used today, but rather than describing the technical surface area, this machine readable definition format will describe the business surface area of an API.