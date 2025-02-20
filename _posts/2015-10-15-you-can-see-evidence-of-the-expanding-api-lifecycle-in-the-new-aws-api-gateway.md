---
layout: post
title: You Can See Evidence Of The Expanding API Lifecycle In The New AWS API Gateway
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-lifecycle.png
author:
  name: kinlane
tags:
  - Lifecycle
  - Gateway
  - AWS
  - Evidence
---
It is up to API providers to establish a coherent approach regarding how they rollout and manage their APIs, something that historically has just involved deploying and managing, but in the last couple of years we have seen more formal approaches emerge, something we are all calling the API lifecycle. 

In 2012, after we started standardizing our API development and management thinking using API definitions, the expansion of the API lifecycle was set into motion with the introduction of an API design-first way of thinking from the Apiary team. API definitions allowed us to get our development and management house in order, but also begin collaborating, mocking, and having a conversation around our API designs, way before we began the costly process of writing code.

In 2015, I am tracking on API definitions driving over 17 separate stops along this fast evolving API lifecycle. While some API providers who are further along in their API journey are incorporating all of these stops, many API providers who are just getting going, are still learning about all the stops along this modern API lifecycle. Part of this evolution is establishing just exactly what is your companies API lifecycle, something that can be a very personal thing, and we'll need more of our tooling to help us quantify this.

This is why I was happy to see evidence of API lifecycle management built into the tooling with the new AWS API Gateway. In my [earlier post on the potentially very powerful API orchestration with the Amazon API Gateway](http://apievangelist.com/2015/09/11/some-potentially-very-powerful-api-orchestration-with-the-amazon-api-gateway/):

_Going beyond the types of integration you can employ when crafting, and deploying APIs using the Amazon API Gateway, the platform also provides a way to define stages that APIs will exist in from design, development, QA, production, or any other stage you wish. I like the concept of having a stage defined for each API, designating where it exists on the API life-cycle. I tend to just have dev and prod, but this might make me consider this a little more deeply, as it seems to be a big part of defining the API journey._

In my opinion, this is a sign of things to come. Right now it is just basically a way to tag your APIs, and define which stage of the API lifecycle they are in, but I can see see these stages being used to organize various stops along the API lifecycle, in a meaningful way for your API team. You could put testing and performance as part of your QA stage, and you can setup monitoring and security for your APIs that are in production, and much more.

While it is still coming into focus for me, I see the [17+ stops along the API lifecycle](http://apievangelist.com/) as something that could be organized into these various API lifecycle stages. I do not think there will be one API lifecycle blueprint to rule them all, but this new approach would allow API teams to craft their own vision, and allow them to share these blueprints for other teams to follow, either internally, or even publicly.

I hope we'll see more API service providers consider where they fit into the overall API lifecycle of their consumers, and provide features that helps users define what this means to their team. Maybe eventually we'll end up with a common language and tooling for helping API providers discuss and operate within a more coherent, flowing, and meaningful API lifecycle.