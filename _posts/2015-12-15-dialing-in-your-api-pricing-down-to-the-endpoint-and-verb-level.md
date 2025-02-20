---
layout: post
title: Dialing In Your API Pricing Down To The Endpoint And Verb Level
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-getpostputdelete.pn
tags:
  - Pricing
---
I am spending a significant amount of time looking through the pricing pages for leading API providers, working to get a sense for some of the common approaches to API monetization in use across the space. Along the way I am also finding some simple and unique approaches from API providers that I wanted to share as bit-size API planning stories here on the blog.

As the API service composition of leading providers evolve in the space you see platforms getting more granular in not just how they control access to their API resources, but also how they incentivize consumption. When I say granular, I am talking about API pricing for APIs available down to the endpoint, or even HTTP verb level. Here is a description, straight from Amazon S3:

[_PUT, COPY, POST, or LIST Requests = $0.005 per 1,000 requests ,GET and all other Requests = $0.004 per 10,000 requests, with delete requests being free_](https://aws.amazon.com/s3/pricing/)

This approach represents a sophisticated view of API [planning](http://plans.apievangelist.com/) and [monetization](http://monetization.apievangelist.com/). Companies who are earlier on in their API journey often only use their GET verb, afraid of the repercussions of opening up PUT, POST, or DELETE. This is where API service composition comes into play, and gives you greater control over your resources, while also opening up access, and incentivizing the type of behavior that is beneficial to both API provider and consumer.

I've come across a number of providers who are taking this approach, and will link to them more within my [API plan researc](http://plans.apievangelist.com/)h. I have a whole list of bit-size API monetization, pricing, and planning stories queued up. I will try to space them out, alongside other stories, but you will just have to suffer a little as I spend time expanding on my [API monetization](http://monetization.apievangelist.com/), and [API plans](http://plans.apievangelist.com/) research areas.