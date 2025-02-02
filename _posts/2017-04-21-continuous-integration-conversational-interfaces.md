---
layout: post
title: Continuous Integration Conversational Interfaces
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-conversational-interfaces.png
atomdate: 2017-04-21T16:00:00.000Z
tags:
  - Integration
  - Conversational Interfaces
  - Conversational
  - Conversational Interface
  - Interfaces
---
[I recently wrote about how Zapier's new command line interface has a continuous integration feel to it](http://apievangelist.com/2017/04/20/continous-integration-platform-as-a-service-at-the-command-line/), and while I was writing the piece, I kept thinking about how these integration apps could be used as part of conversational interfaces. I'm thinking about messaging, voice, or even [embeddable conversational interfaces](http://apievangelist.com/2017/02/08/api-embeddables-in-a-conversational-interface-world/), and [Zapier's CLI](https://zapier.com/engineering/zapier-command-line-interface/) could be used to define some known conversational scenarios we encounter on a regular basis.

I'm thinking about the side of conversational interfaces that is more known and scripted. I'm not thinking about creating applications that could hold their own in a natural language conversation, but ones could be defined as part of known business processes, matching a well-defined question and set of rules. "put new RSS feed post into Google Sheet", or "take new Instagram photos, and Tweet it out". A well-scripted set of business actions that I conduct on a regular basis. Applications defined and managed via Zapier CLI, that are continuously integrated, into the conversational interfaces I use regularly use - Slack, Twitter, Facebook, my browser, and SMS on my iPhone.

I want an application for each of the micro conversation I have with online services each day. If a new conversation hasn't been defined, I want an easy way to articulate myself in terms of [the 750+ applications that Zapier integrates with](https://zapier.com/engineering/), and a way to have these Node.js applications introduced into the continuous integration for my conversational interfaces. I want all my conversational interfaces to be automated, with hundreds or thousands of little conversations going on in the background of my operations each day. The command line seems like an appropriate layer to make these conversational requests a reality--especially since Zapier is already having the conversations with the service I'm depending each day.