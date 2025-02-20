---
published: true
layout: post
title: API Observability Is More Than Just Testing And Monitoring
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-seatlle-shipping-mountain.jpg
author:
  name: kinlane
tags:
  - Observability
  - Testing
  - Monitoring
---
[API observability](http://observability.apievangelist.com/) is something I have written about for a while now after learning about it from Stripe. It is a phrase that has grown popular in API testing, monitoring, and performance circles. Borrowed from the physical world of control systems, observability is a measure of how well internal states of a system can be inferred from knowledge of its external outputs. I am all about getting on API observability train when it comes to monitoring of our systems, but if you’ve read my work you know I am all about expanding the definition to not just include the technical, but also the business and politics of API operations.

One of the key aspects of observability is using the outputs or exhaust from the existing services and tooling used to operate your system. To help increase API observability within the enterprise I am always on the hunt for what the existing services and tooling that are in place so that I can better understand what the existing outputs are. If a service or tool is already in place within the enterprise, and we can tap into existing outputs, the chances for successfully changing behavior significantly increases. One tool that is ubiquitous across enterprise organizations is Postman, which provides a whole wealth of opportunity when it comes to tapping into the existing outputs to provide more observability into what is going on across the API life cycle.

90% of the Postman usage within the enterprise I come across occurs in isolation. One developer working with internal and external APIs within Postman. This occurs hundreds, or thousands over within medium and large enterprise organizations. Developers are profiling APIs, building requests, and saving them into collections with very little communication, coordination, and sharing of API awareness across teams. While it represents a pretty concerning trend across enterprise organizations where leadership has such little visibility into what teams are working on, it also represents a pretty significant opportunity for leadership to take advantage of the fact that developers are already using Postman. All they have to do is began actively managing users under a single organizational license (which you think would be the default), organizing collections into teams, and being more proactive about how Postman is used.

API observability isn’t just about measuring the outputs of testing and monitoring. That is a good start, but there are other services and tooling already in place across enterprise API operations that can be measured and made sense of in real-time. First, enterprise organizations should be getting a handle on what internal, partner, and 3rd partner APIs are being used by developers—Postman is the best place to develop an understanding of API consumption looks like. Once an organization begins to be more structured in how it manages Postman users, and begin defining teams, organizing collections and environments, the API observability opportunities increase significantly. Allowing business and technical leadership to obtain a better view of the enterprise landscape, and begin making more strategic decisions around how APIs are deployed and consumed, helping guide and direct what developers are up to on a daily basis.