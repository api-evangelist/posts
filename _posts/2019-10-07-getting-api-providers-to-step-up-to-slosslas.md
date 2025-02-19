---
published: true
layout: post
title: Getting API Providers To Step Up to SLOs/SLAs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/nazi-invasion-IMG_7169.jpg
author:
  name: kinlane
tags:
  - SLA
  - SLO
  - Reliability
---
I am preparing for a busy week of conversation with folks at API World, and with an inbox full of requests to meet and discuss the challenges API providers and service providers face, I want to work on preparing myself by loading up a variety of topics into my old brain. Some of the folks I’m talking with have shared questions with me to prime our conversational pump, so in my way, I figured I’d work through them here on the blog to help put these thoughts on the tip of my tongue.  
  
One interesting question I received this week is around how to get API providers to step up to agreeing to and respecting service level objectives (SLOs) and service level agreements (SLAs). To provide more context, this involves APIs within a large enterprise, where there is a shared catalog of APIs for internal, as well as for external usage, and API providers can step up and publish their APIs for access within the enterprise API catalog--a situation where you have several challenges:

*   **Getting API Providers To Publish APIs** \- Not all groups are going to be competent and confident in publishing their API resources to a shared catalog.
*   **Getting API Providers To Publish Well Designed APIs -** Not all groups have the skills and know how to publish well designed web APIs to a shared catalog.
*   **Getting API Providers To Care About Reliability and Performance -** Most providers will see the publishing of the API as checking the box, not reliably operating.
*   **Getting API Providers To Care About API Consumers -** Even with APIs published and reliably operated, most providers won’t care about those who put to use.

It is tough to find groups and teams who will fire on all cylinders in these areas, especially without a clear definition regarding what is required to play in this game. Since this question was asked in context of not just SLAs, but also SLOs, I would expand to include another acronym, because this is what we do in API land, and include SLI, or service level indicators. I feel like the Venn diagram of these three acronyms gets at some of the answers we might be looking for.

*   Service Level Objective (SLO) - The goal we are both looking to reach with publishing of a service.
*   Service Level Agreement (SLA) - The agreement we enter into that governs the services we are publishing.
*   Service Level Indicator (SLI) - The metric(s) we are using to understand whether or not we are meeting goal.

This Venn diagram reflects what I consider the politics of APIs. Getting different stakeholders together to agree upon what it means to provide and consume a digital resource. 90% of these scenarios playing out not he web are imbalanced, and too often favor the provider. In the situation I’m talking about where these stakeholders are not just about providers and consumers agreeing, but also many disparate providers also agreeing, only further complicates an already challenging reality. Getting all providers to agree on the goal, metrics, and level of service around each API is not easy. Attempting to only one or two of these areas makes things even harder. If you haven’t agreed upon the goal, and the metrics used to measure what is happening, the chances you are going to be successful with only a service level agreement (SLA), are significantly diminished.  
  
I would say that all API providers have to agree on the SLO, SLA, and SLI (Object, Agreement, and Indicator) for it to work. Getting this done is easier said than done. I would say we are going to need a new acronym for service level motivation (SLM) and map out how we are going to motivate all the API providers, otherwise they aren’t always going to step up to any of this. We need to better understand what will motivate each API provider to not just publish their API, but invest in it being well designed, genuinely caring about the reliability, performance, an ultimately the consumers of the API. Otherwise a providers participation levels will be less that desirable, and never rise to the occasion. Without a clear map of who the API providers, and would-be API providers are, and what their motivations are, we will never actually bring them into alignment with the API platform, and other providers who are publishing there.  
  
One of the most frustrating realizations I’ve had about doing APIs, is that not everyone cares about doing them well. Most API providers are just looking to check the box on a list of things leadership has asked them to deliver. A list that rarely involves monitoring, testing, performance, security, and the other areas that help ensure a certain level of service. Most API providers don’t see the bigger picture of how and why they should be doing APIs, and they are just one task they were asked to accomplish as they work to get through their day or week. This is a condition that can be incrementally improved upon with a little more education around modern approaches to delivering APIs, as well as more formal articulation of why we are doing APIs, and working to build an API-driven platform. Getting API providers to step up to SLOs and SLAs by expanding their view of the API landscape, and bringing their motivations and objectives into closer alignment with the platform, and the community emerging to put APIs to use within applications.