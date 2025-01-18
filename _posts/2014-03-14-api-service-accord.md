---
layout: post
title: API Service Accord
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-handshake.jpg
author:
  name: kinlane
tags: []
---
Building off a conversation I had with a fellow evangelist in the federal government today, regarding API service level agreements (SLA), I wanted to talk through some thoughts I’m having about a couple of key [API building blocks](http://management.apievangelist.com/building-blocks.html).

Reflecting what I see across the API space, API terms of service (TOS) are the legal agreement that API consumers agree to before using an API resource. API best practices, tends to reflect what the API TOS lays out, but are delivered in plain english, avoiding the legalese of the standard TOS. When these two building blocks (terms of service, best practices) are deployed well, an API consumer can easily make a decision on whether an API is in alignment with their goals, then also being able to pass it off to the lawyer for a deeper analysis.

Secondarily, API service level agreements (SLA) are the legal agreement that API providers agree to when offering up their service for consumption--setting the bar for what API consumers can expect from a service provider.

While TOS, SLA and best practices involve both API providers and consumers, I’d say the TOS and best practices lean towards guiding API consumer behavior. Where the SLA leans toward guiding the API provider behavior. What I’m looking for is a phrase to describe the friendlier, plain english version of an SLA. I want a building block that API providers can use to set the same eexpectations that a low-level SLA would, but without the legal baggage that comes with an SLA.

After reading through wikipedia entries, and several great articles on SLAs, and looking through what is contained in common SLAs, I’m playing around with several phrases including _operational understanding, operational accord, and service accord_—leaning towards service accord, based upon the definition of accord:

*   1) give or grant someone (power, status, or recognition).
*   2) (of a concept or fact) be harmonious or consistent with.

Like best practices, a service accord would explain service levels in a plain english, non-binding way. An API consumer could read an API accord and get a pretty quick understanding what they can expect of an API service--if they have more questions and concerns they can read the SLA.

I think that API terms of service, best practices, service level agreements, and service accords can provide the building blocks necessary to define what is expected around both consuming, and providing of an API resource. I’d love to hear your thoughts, what phrase do you think best represents a friendly version of an API service level agreements(SLA)?