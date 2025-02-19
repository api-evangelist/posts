---
layout: post
title: An API That Scrubs Personally Identifiable Information From Other APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/personally-identifable-information.png
author:
  name: kinlane
tags:
  - APIs
  - Personal
---
One of the best aspects of being the API Evangelist, is I get to hang out with smart folks, doing gaming changing things across all business sectors. Last week I was able to make it to the API Social, an event held in Berkeley by a group of API savvy faculty members. This is my third one, and the group is up to some very interesting things.

I had a conversation with one UC Berkeley analyst about a problem that isn’t just unique to a university, but they are working on an innovative solution for.

The problem:

> _UCB Developers are creating Web Services that provide access to sensitive data (e.g. grades, transcripts, current enrollments) but only trusted applications are typically allowed to access these Web Services to prevent misuse of the sensitive data. Expanding access to these services, while preserving the confidentiality of the data, could provide student and third party developers with opportunities to create new applications that provide UCB students with enhanced services._

The solution:

> _Wrapping untrusted applications in a "Proxied Facade Service" framework that passes anonymous tickets through the “untrusted” application to underlying services that can independently extract the necessary personal information provides a secure way of allowing an application to retrieve a Web User’s Business data (e.g. their current course enrollments) WITHOUT exposing any identifying information about the user to the untrusted application._

I find their problem and solution fascinating, I also think it is something that could have huge potential. When data leaves any school, healthcare provider, financial services or government office, the presence of sensitive data is always a concern. More data will be leaving these trusted systems, for use in not just apps, but also for analysis and visualizations, and the need to scrub personally identifiable information will only grow.

I’m still processing everything the team at UC Berkeley is doing, but want to write about as I’m wrapping my head around it. If you know of any other services out there that do similar things, let me know. I’m curious to hear about other approaches to scrubbing personally identifiable information as it leaves systems via APIs.