---
layout: post
title: >-
  An API Monetization Framework To Help Me Standardize Pricing For The APIs I
  Bring Online
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-monetization.png
author:
  name: kinlane
tags:
  - Monetization
  - Pricing
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-monetization.png)](http://monetization.apievangelist.com/)

I'm almost to the point with [my API stack](https://kin-lane.github.io/master/), where I can start plugging in new APIs I have planned. Up until now, the APIs i have deployed, are of little use to a wider commercial audience. However some of the APIs I have planned for the next year, I'm looking to monetize their usage, and operate as part of a larger commercially viable API stack. (practice what I preach baby!)

To run this stack, I need a plug and play way to define what an API is costing me, and potentially how much revenue I am generating from each API. With this in mind, here is my draft look at an API monetization framework, that I am employing across my API Stack. 

**Acquisition** (One Time or Recurring)

*   **Discover -** What did I spent to find this. I may have had to buy someone dinner or beer to find, as well as time on the Internet searching.
*   **Negotiate** - What time to I have in actually getting access to something. Sometimes its time, and sometimes it costs me. 
*   **Licensing** - There is a chance I would license a database from a company or institution, so I want to have this option in there. Even if this is open source, I want the license referenced.
*   **Purchase** - Also the chance I may buy a database from someone outright, or pay them to put the database together, resulting in one-time fee. 

 **Development** (One Time or Recurring) 

*   **Normalization** - What does it take me to cleanup, and normalize a dataset, or across content. This is usually he busy janitorial work necessary.
*   **Design** - What does it take me to generate a Swagger and API Blueprint, something that isn't just auto-generated, but also has a hand polish to it.
*   **Database** - How much work am I putting into setting up the database. A lot of this I can automate, but there is always a setup cost.
*   **Server** - Defining the amount of work I put into setting up, and configuring the server to run a new API, including where it goes in my operations plan.
*   **Coding** - How much work to I put into actually coding an API. I use the Slim PHP framework, and using automation scripts I can generate 75% of it usually.
*   **DNS** - What was the overhead in me defining, and configuring the DNS for any API, setting up endpoint domain, as well as potentially a portal URL. 

******Operation****** (Recurring)

*   **Compute** - What percentage of my AWS compute is dedicated to an API. Flat percentage of the server its one until usage history exists.
*   **Storage** - How much on disk storage am I using to operate an API? Could fluctuate from month to month, and exponentially increase for some.
*   **Bandwidth** - How much bandwidth in / out is an API using to get the job done.
*   **Management** - What percentage of API management resources is dedicated to the API. A flat percentage of API management overhead until usage history exists.
*   **Evangelism** - How much energy do I put into evangelizing any single API? Did I write a blog post, or am I'm buying Twitter or Google Ads? How is word getting out?
*   **Monitoring** - What percentage of the API monitoring, testing, and performance service budget is dedicated to this API. How large is surface area for monitoring?

********Pricing******** (Recurring)

*   **Tier(s) -** Which of the 7 service tiers is an API available in, and which endpoint paths + verbs are accessible in the tier (api-pricing definition).
*   **Credit(s) -** How many credits does an API use when any single endpoint is engaged, specified as entire endpoint or individual paths + verbs (api-credit definition).

********Revenue******** (Recurring)

*   **Monthly** - How much revenue is being brought in on a monthly basis for an API and all of its endpoints.
*   **Users** - How much revenue is being brought in on a monthly basis for a specific user, for an API and all of its endpoints.
*   **Applications** - How much revenue is being brought in on a monthly basis for a specific application, for an API and all of its endpoints.

I am looking for this framework to help me set pricing, and rate limits for any API I publish. My goal is to rapidly make available some valuable databases, and more functional APIs using common open source software, available for free, but also generate enough revenue from high volume users, to run the whole thing. To do this, I need to understand exactly what an API is costing, allowing me to set a price, with the intent of breaking even, and then generating some revenue where it makes sense.

As part of this work I will be generate an APIs.json type I am calling [api-pricing](http://api-pricing.apievangelist.com), which I am looking to help be balance out consumption across my API stack. Using my [3Scale API infrastructure](http://3scale.net) I am able to easily add and subtract credits for API usage across users, and apps, then handle the billing based upon what pricing I have set for all my API usage.

My pricing will not just be about retail usage. Some of my APIs I will be deployed in other people's infrastructure, and letting them control the pricing, credits, and service composition. This is the wholesale layer to my strategy, allowing me to go beyond my own internal usage, by B2D usage, and open up new opportunities for API deployment and consumption.

As with most of my work, I'm going to be very transparent about my pricing, making sure it is indexed within each APIs.json file, and available alongside each APIs Swagger, API Blueprint, Postman Collection, and API Science monitor--encouraging wider consumption, and processing.