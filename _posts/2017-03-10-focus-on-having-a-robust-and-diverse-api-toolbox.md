---
layout: post
title: Focus On Having A Robust And Diverse API Toolbox
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-toolbox.jpg
atomdate: 2017-03-10T23:00:00.000Z
tags:
  - Toolbox
---
I'm learning a lot about HTTP/2 and gRPC this week, so I have been thinking about how we isolate ourselves by focusing in on individual toolsets, where we should really be expanding our horizons, helping ensure we have the most robust and diverse API toolbox we possibly can. Depending on what part of the tech universe an engineer comes from they'll have a different view on just exactly what I mean when I say API to them.

The most common perspective that people respond with is REST. Folks automatically think this is what I mean when I say API--it isn't. That is your dogma or your gullibility to other people's dogma--please expand your horizons. When I say APIs, I mean an application programming interface that leverages web technology (aka HTTP, HTTP/2). Sure REST is the dominating philosophy in this discussion, but I see no benefit in limiting ourselves in this fashion--I see API as a toolbox, with the following toolsets:

*   **REST** - Considering Roy Fielding's guidance when it comes to leveraging HTTP in my API design.
*   **Hypermedia** - Considering the web, and the role that links can play in your API design.
*   **Webhooks** - Helping keep APIs a two-way street, expanding your API to respond to events not just single requests.
*   **GraphQL** - Helping put powerful query tooling in the hands of API consumers when working with large and complex datasets.
*   **gRPC** - Acknowledging that the HTTP protocol is evolving, and our API contract can evolve along with the specification.

This represents the major toolsets that are currently in my API toolbox. Sure there are a number of other individual tools and specifications in there as well, but this represents the top tier toolsets I am looking at when it comes to getting things done. In my opinion, there is a time and place for each of these toolsets to be put to use. I can easily geek out on any of these areas, but because I'm not selling you a product or service, I'm more interested in finding the right tool for the situation.

I do not expect that all providers have this robust of API toolbox from day one--it is something that will come with time. My recommendation is everyone begins with REST, developing proficiency in this domain, while you are also learning about hypermedia webhooks. As your understanding evolves, then you should start looking at GraphQL, gRPC, and other more advanced approaches to round off your skills. Do not let your religious technological beliefs or any single vendor motivations limit the scope of your API toolbox, you should be working to make it as robust and diverse as you possibly can.