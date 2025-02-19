---
layout: post
title: >-
  If An Algorithm Impacts Our Life It Should Be Opened Up With An API For
  Auditing
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-algorithm-flow.png
atomdate: 2016-09-13T20:00:00.000Z
tags:
  - Open
---
As I was reading [artificial intelligence is hard to see](https://medium.com/@katecrawford/artificial-intelligence-is-hard-to-see-a71e74f386db#.rmv7mf65l) by Kate Crawford ([@katecrawford](https://twitter.com/katecrawford)), my brain once again begins crunching the different ways APIs can be applied to help us "see" the algorithms evolving around us. API all by themselves do not move things forward much, but when you combine with modern approaches to applying [API definitions](http://definitions.apievangelist.com/), introduce the [access and authentication benefits of OAuth](http://authentication.apievangelist.com), employ [sensible and robust logging practices](http://logging.apievangelist.com), and work to develop [API driven visualization](http://visualization.apievangelist.com/) layers for algorithms--I'm thinking we can really begin to move the conversation forward.

**Defining the Algorithmic Surface Area With An API And API Definition**  
Leading API specifications formats like [OpenAPI Spec](https://openapis.org/specification) and [API Blueprint](http://apiblueprint.org) are allowing API providers and architects to define the request and response model for web APIs. Many APIs are serving up data and content, but for the algorithmic variety, API definitions allow for the description the inputs and outputs for the algorithm--giving us an important way to describe what an algorithm actually does. 

**Opening Up Access To Algorithmic Resources Using OAuth**  
It is common for OAuth to be used to help manage authentication and access to data, content, and algorithms being made available via APIs. OAuth is used to securely open up access to the proper 3rd party developers, or in this scenario regulators, journalists, and researchers, in a way that defines the scope of what they have access to, whether they can just read, as well as write via an API. OAuth could easily be applied, and evolved to meet the needs of algorithmic transparency and auditing, giving us access to the levers and controls that are driving decisions behind the algorithmic curtain.

**Record And Measure Algorithmic Responses Across A Variety Of Uses**  
Logging is used to measure almost every layer of the Internet today, from the server and database backends, all the way up to the web and mobile applications that are driving our front ends. API management providers have applied logging to the API layer, carefully recording how data, content, and algorithms are being accessed, and the system, application, or user who is accessing them. Logging could be used to record how algorithms are performing across a wide variety of auditing and test scenarios, providing a possible baseline for determining what an algorithm does, and how it can be improved upon--in a open, but secure and controlled environment.

**Using An API Driven Visualization Layer To Help Us See Algorithms**  
Using API definitions that give us a way to quantify the inputs and outputs of algorithmic resources, along with the logging of a range of requests, and resulting responses, it is then possible to [craft visualizations using open libraries like D3.js](http://d3js.org/), to help us "see" an algorithm. We can see what goes in, what comes out, and how this works across a variety of scenarios. While visualizations will only be as good as the API itself, and the sampling of requests made, they give us the tools we will need to begin seeing and understanding the impact algorithms are making in our lives. 

APIs do not equal transparency, and understanding of how algorithms work, but they can help us define and communicate around what they do, and open up access to researchers, regulators, and journalists looking to validate and make sense of what an algorithm does, or does not do. An API for Facebook or Twitter censorship algorithms will not ensure they are fair and balanced, but they can give us the tools to evaluate, and potentially course correct these algorithms out in the open, as they evolve.

I'm seeing a steady build in the number of questions being asked about how algorithms work or don't work, and are impacting our lives. I do not think it is unreasonable to ask owners and operators of these algorithms to open up their solutions for review by trusted 3rd party researchers, regulators, and journalists. We are going to have to get to work opening up this technical infrastructure, as well as developing the API talent that will be needed for reviewing algorithms in this way. I understand that many companies will be resistant to this, but if your algorithm is impacting our lives, we deserve to understand how they work.

I will keep writing on this subject whenever possible, and hopefully, begin to evolve a more coherent approach to employing modern API infrastructure in the service of "seeing algorithms". We tend to think of using APIs for developing web, mobile, and increasingly device-based apps, but increasingly they are also being used to migrate our bits and bytes around the Internet using what is called Integration Platform as a Service (iPaaS), and I see no reason why we can begin to evolve API infrastructure specifically for enabling algorithmic transparency.