---
layout: post
title: Defining A Conversational Layer On Top Of APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-conversational-interfaces.png
atomdate: 2016-10-01T00:00:00.000Z
tags:
  - Conversational
  - APIs
---
As I am exploring, and [writing about Meya's Bot Flow Markup Language (BFML)](http://apievangelist.com/2016/09/29/flow-abstraction-and-intent-layer-on-top-of-apis-to-feed-the-bots/),  I came across the announcement from Google about their acquisition of API.AI, titled "[Making Conversational Interfaces Easier to Build](https://developers.googleblog.com/2016/09/making-conversational-interfaces-easier-to-build.html)". I feel like this description reflects what I was writing about "[Beyond Mobile: API Ready For iPaaS, Voice, and Bots](http://apievangelist.com/2016/09/29/beyond-mobile-api-ready-for-ipaas-voice-and-bots/)", and sounds better to me than saying voice, bot, or integration workflow.

Whether its skills for voice enablement, intents and flows for bot interactions, or triggers, actions, and integrations with iPaaS, I'm guessing we are going to need a way to define, and convey meaning through this growing conversation we'll be having using API resources. With [OpenAPI Spec](https://openapis.org/specification) and [API Blueprint](https://apiblueprint.org/) we finally have adequate ways to describe where our data, content, and algorithmic resources reside, and a little bit about what they do, but it feels like we need a similar way of defining the conversational layer on top.

I see the beginning of this present in [Meya's Bot Flow Markup Language (BFML)](http://apievangelist.com/2016/09/29/flow-abstraction-and-intent-layer-on-top-of-apis-to-feed-the-bots/), which is a YAML definition description a flow, made of components that can each make an API call, all in the services of what they consider "intent".  I"ll have to see how other bot providers are defining this layer, as well as learn more about how Alexa is defining the conversational layer for their skills. All of this smells like [we need some Hydra injected into the conversation](http://www.hydra-cg.com/), but I need to do more research before I start evangelizing anything.

The whole Slackbot thing is interesting to me from a technical point of view--not so much from a business side of things. Twitter bots I find intriguing because they are public, and can wreak havoc, or be very creative. Alexa is interesting from both a technical and business perspective for me. But, helping define a conversational layer on top of the world of APIs is intriguing to me, mostly because it continues building on top of what I consider to be one of the key strengths of APIs--making very abstract technical things more accessible and meaningful to humans in a digital world.