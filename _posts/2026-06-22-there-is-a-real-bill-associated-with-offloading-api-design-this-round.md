---
published: true
layout: post
title: There is a Real Bill Associated With Offloading API Design This Round
date: 2026-06-22
author: Kin Lane
tags:
  - API Design
  - MCP
  - AI
  - APIs
  - Business of APIs
image: https://kinlane-images.s3.amazonaws.com/algorotoscope/uncle-sam-ship-bird-foreground.jpg
---
When API design first emerged in 2012, and grew in popularity over the next decade, some folks embraced, while others revolted, and the rest just sat with the usual blank stare they have for work each day. While many design conversation were led by technical folks and focused on REST dogma, over the last decade many smart product folks began doing the hard work to align design principles with what customers were actually needing. This is the sweet spot.

Along the way, there are multiple factions who revolted when it came to doing the API design required to deliver simple and intuitive APIs that customers loved, with one of the loudest being the GraphQL folks. Many of the loudest GraphQL proponents within API communities and within the enterprise are people who know the schema and have strong opinions about which part of the schema they need when accessing an API, and werent' interested in waiting for the design process. They just wanted access to the schema to grab what they needed for their web and mobile interfaces, and us design folks should just get out of their way.

Fair enough. Makes sense when you have a large schema with large groups of opinionated people who understand that schema. Except, that many API producers learned along the way that they could offload the design work to people who didn't know the schema and didn't have opinions about the schema. Here is everything. You just figure it out. Rather than designing paths, and being thoughtful about each request and reqsponse you craft, you provide a single path and offload the design work to API consumers. While this left a bad taste in a lot of folks mouths, it still worked, because like many other API experiences, human being developers are used to rolling up their sleeves and just figuring shit out.

This shifting of the design responsibility when accessing APIs isn't unique to GraphQL, it has been done for quite some time in absence of there being people producing APIs that care and have API design experience. But, it was taken to new levels with GraphQL. Now with MCP and context engineering we are 10Xing it again. Except this time we are offloading the design responsibility to agents. They will just figure it out. Only they always won't. And they will do a lot of other really weird shit along the way. And it will be a lot more expensive that it was offloading the API design work to some more human schmuck who doesn't have a choice but to read the docs, learn the schema, ask questions, and then begin getting to work.

There is a real bill associated with offloading API design work this round. There are also a lot more security implications as well. The tokenization and financialization of API consumption by AI and that DDOS'ing of API consumption is making offloading of API design work a lot more costly. I am guessing that unless it is an internal API, few are likely to give a shit. I am neck deep in thinking about what the evolution of API design has been with MCP right now. I know the cool kids are calling it context engineering, but it still just API design. They are just buying into the vendors rebranding it so that they will buy an entirely new suite of services and tools to solve this "new" problem. Good API design has always been much more affordable that just shifting the load to your consumers and pushing it downstream, and with MCP it will have even more cost savings. Just wait until the AI bill fully lands here in coming months and years.
