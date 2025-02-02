---
layout: post
title: Planning Everything Upfront vs Iterating On An API Over Time
image: https://s3.amazonaws.com/kinlane-productions2/bw-planning.png
author:
  name: kinlane
tags:
  - Planning
  - Time
---
I just finished up participating in an API specification session for [Green Button](http://www.greenbuttondata.org/) data with [Southern California Edison (SCE)](https://www.sce.com), [San Diego Gas & Electric (SDG&E)](http://www.sdge.com/), and [Pacific Gas and Electric (PG&E)](http://www.pge.com/).

The discussion at one point during the last day was around “chunking” of huge data sets that a provider wants to allow for download over http. The group has been talking about scenarios for how this will work, and after over an hour they are getting to some pretty edge case scenarios surrounding “chunking”.

As I listen, I can’t help but thinking about he pros and cons of upfront planning vs. iterating on your API over time. Are they planning for scenarios that will never happen, and building in development time for use cases that may never become a reality? They know their data and industry best, so I am not educated enough to make a determination, but it doesn't stop me from having these thoughts.

I understand that large companies, like wihtin the utility inudstry, have to plan as much as they can, as they operate in a pretty unforgiving environment when it involves physical integrations, government regulations, and other constraints in the industry. Even with this understanding, I think some larger institutions are very used to planning, and covering every possible scenario that they can think of, and in the process, spending unnecessary resources, and also limiting any positive unknowns from occurring.

Developers from the open API space definitely have to better understand planning, and doing their due diligence before just leaping, but I also think the enterprise will have even more challenges when it comes to letting go and realizing the innovation that can occur around APIs. That you can cover your ass by considering the obvious negative scenarios, then building quality management tooling and processes, and identify other negative scenarios in realtime--when you actually have the data evidence to support.

With too heavy of a governance hand, you might just end up re-living many of the suffocating aspects we experienced in the SOA world.