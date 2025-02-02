---
layout: post
title: 'Landscape Targeting: Payment APIs'
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-target.png
author:
  name: kinlane
tags:
  - Targeting
  - Landscape
  - APIs
---
When I want to understand a business sector as part of my overall analysis, or part of a specific API strategy, I kick off what I call a **_“landscape targeting”_** campaign. This time around I am interested in better understanding the the landscape of the payment API space.

Every landscape targeting campaign begins with some Googling of the top key phrase, which this time is _"payment API"_. From this I manually build a list of key players in the payment API space. My goal is to not build a complete list, but a list of the players doing it well—screw the rest. I only have time to target the best approaches, and in the payment space I find roughly 35 players, which I will publish later.

While I am conducting this same procedure on all 35 payment companies, I start with the one I know the best, and feel will produce the most meaningful results—[Stripe](https://stripe.com/). To help me quantify Stripe’s ecosystem landscape I execute the following:

*   Pull a Twitter profile for @Stripe, which gives me a snapshot of their Twitter account, via the Twitter API
*   Pull lists of @Stripe Twitter followers and friends Twitter IDs using the Twitter API
*   Pull a Twitter profile for the followers and friends of @Stripe, so I have each of their names, bios, location, and friend / follower count
*   Pull a Github profile for Stripe, which gives me a snapshot of their Github account, with overall activity, via the Github API
*   Pull a list of all Stripe repositories using the Github API
*   Pull a list of each repositories watchers, subscribers and contributors using the Github API
*   Pull each of those repo watchers, subscribers and contributors Github profiles using the Github API
*   Profile each Twitter follower using [Full Contact API](http://www.fullcontact.com/developer/) to obtain their alternate Github or LinkedIn profile
*   Profile each Github user that shared their email address using Full Contact API to obtain their alternate Twitter or LinkedIn profile

For Stripe, I ended up with 21K Twitter users, 30 repositories and over 5K Github users.  You have 25K individuals and companies potentially depending on Stripe for payment API services. Of course a lot of these profiles will be useless, but once again I’m looking for the cream on top of this landscape targeting—I don't have time to look at all details.

Multiple this by 35, and you have a pretty interesting definition of the payment API landscape. This is where the hard work begins. You need to sift through all of this data, find blogs, interesting tweets, leading companies, active developers, and any other gems that will potentially shine within the payment API landscape. I will spend next couple weeks refining, tagging and curating, and will continue in real-time as my research continues.

This approach is derived from what I've been doing to quantify the API space for the last 4 years, and also executing against other sectors like [Baas](http://baas.apievangelist.com/), Real-time, etc. My goal is to help me understand each business sector, while also producing enough data and content to tell stories on API Evangelist, publish open research projects on Github, and sometimes result in an industry white paper.

I Just thought I’d share some of my approaches to using APIs to better understand the landscape of specific API business sectors, and show how I don't just talk about APIs, but I actually use them regularly to produce content.