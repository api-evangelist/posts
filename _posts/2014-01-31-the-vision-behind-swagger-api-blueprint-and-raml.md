---
layout: post
title: The Vision Behind Swagger, API Blueprint and RAML
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-design.png
author:
  name: kinlane
tags:
  - Blueprint
  - Swagger
  - API Blueprint
  - RAML
  - Vision
---
I am working through some deeper research into the world of [API design](http://design.apievangelist.com), and specifically into the world of API definitions. This research involves talking to each of the leading providers, crafting a series of stories along the way, resulting in a white paper that provides an overview of the space and possibly where things are going.

During my conversations with Tony Tam ([@fehguy](https://twitter.com/fehguy)) of [Wordnik](https://www.wordnik.com/), creator of [Swagger](https://github.com/wordnik/swagger-core), Jakub Nesetril (@jakubnesetril) and Z ([@zdne](https://twitter.com/zdne)) of [Apiary](http://apiary.io/), creators of [API Blueprint](http://apiblueprint.org/), and Uri Sarid ([@usarid](https://twitter.com/usarid)) of [Mulesoft](http://www.mulesoft.com/), creators of [RAML](http://raml.org/), I asked a simple question:

**What is the vision behind your API definition format?**

Resulting in a little insight behind each approach:

*   **Swagger** - The vision behind Swagger was not to make a company or to get people to use our service, it was strictly to solve a workflow problem. Initially the goal was centered around documentation and client tooling, but quickly realized it was much bigger, and became about managing the overall lifecycle of APIs.
*   **API Blueprint** - API Blueprint is all about simplicity, and allowing people to have a structured conversation around an API, with the people who are actually going to be using it. Apiary is the conduit for this conversation, allowing developers to easily create a mock interface from the blueprint, share with consumers, and iterate as necessary.
*   **RAML** - The motivation behind RAML was about seeking one source of truth, and a basic representation of an API. We used Swagger and API Blueprint, but neither fully met our vision. RAML was born, and is in alignment with Mulesoft's design first approach, and gave them the ability to design an API in a format that allowed them to sit down with stakeholders in a webinar and get instant feedback—bringing the API to forefront, not the implementation.

These are my summarizations of what Tony, Jakub, Z and Uri said in response to my question, not direct quotes. I think they get at the essence of why each company has invested so much in defining an API definition that delivers on their separate visions, and meets their goals

I also think there is a lot of overlap in these visions, as well as being in sync with where the overall demand in the API space is going. I don't endorse one solution over the other—I think each API designer will choose, and the fact there are multiple approaches is a good thing.

API definitions play a central role in my API design process, but in my personal approach, theAPI server and client code is regularly thrown away, where my API designs remain constant—something I work to iterate on, much like my writing.

Even with my personal passion for API definitions, I don't think they will be for everyone. I think API designers who find they deliver value in their work will use, while many successful API designers will have no use for them, and be just fine without them.

For some in 2014 API design will be about sharing, collaborating and communicating, in which API definitions will play a central role. For others the API implementation will be where the sharing, collaborating, communicating and ultimately the rubber meets the road.