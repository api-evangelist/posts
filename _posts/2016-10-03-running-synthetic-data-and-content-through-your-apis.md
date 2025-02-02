---
layout: post
title: Running Synthetic Data And Content Through Your APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bw_synthetic_api.png
atomdate: 2016-10-03T16:00:00.000Z
tags:
  - Data
  - Content
  - APIs
  - Synthetic Data
---
I was [profiling the New Relic API](http://monitoring.apievangelist.com/organizations/) and came across their [Synthetics service](https://newrelic.com/synthetics),which is a testing and monitoring solution that lets you "send calls to your APIs to make sure each output and system response are successfully returned from multiple locations around the world"--pretty straight forward monitoring stuff. The name is what caught my attention, and got me thinking the data and content that we run through our APIs.

Virtualization feels like it defines the levers and gears our API-driven systems, and synthetics feels like it speaks to the data and content that flows through flows through these systems. It feels like everything in the API stack should be able to be virtualized, and sandboxes, including the data and content, which is the lifeblood--allowing us to test and monitor everything.

It also seems like another reason we'd want to share our data schemas, as well as employ common ones like [schema.org](http://schema.org/), so that others can create synthetic data and content sets for variety of scenarios--then API providers could put these sets to work in testing and monitoring their operations. A sort of synthetic data and content marketplace for the growing world of API testing and monitoring.

I see that New Relic has the name Synthetics trademarked, so I'll have to play around with variations to describe the data and the content portion of [my API virtualization research](http://virtualization.apievangelist.com/). I'll use virtualization to describe gears of the engine, and something along the lines of synthetic data and content to describe everything that we run through it. I am just looking for ways to better describe the different approaches I am seeing, and tell more stories about API virtualization, and sandboxing in ways that resonate with folks.