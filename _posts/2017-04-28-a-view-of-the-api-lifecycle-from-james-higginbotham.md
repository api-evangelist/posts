---
layout: post
title: A View Of The API LIfecycle From James Higginbotham
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-lifecycle.png
atomdate: 2017-04-28T18:00:00.000Z
tags: []
---
Us API Evangelists have a super secret Slack group where we talk about super interesting API Evangelist things, and one of the folks I regularly learn from in this group is James Higginbotham ([@launchany](https://twitter.com/launchany)). James is a highly skilled enterprise API architect and curator of [the popular API Developer Weekly email newslette](http://launchany.us2.list-manage1.com/subscribe?u=5005148108dfbac726f74e31e&id=239e48d26e)r. James is always dropping wisdom in the group, but I found a recent API lifecycle list to be particularly worth sharing, as many of my readers are looking to bring some coherence to their own API operations.

*   Identify Desired Outcome (maps to Discover)
*   Assess Capabilities Required to Satisfy the Need (activities to achieve the outcome)
*   Capture Actors/Participants Using the Capabilities to Achieve the Outcomes (activity steps)
*   Determine Capability Gaps (what don't I have yet, along with what I have - might be various 3rd parties to fill the need)
*   Find Capability Boundaries (when the problem space is larger than a bounded context for a team, line of business, or some other appropriate boundary)
*   Identify API Resources
*   Design API Resource Lifecycle (endpoints that will be offered, to whom)
*   Document the API Design (OpenAPI, Landing Page for a developer portal section, etc)
*   Consume the API Design using a mock
*   Development/Automated Testing
*   Deploy/Manage/Monitor/Market/Evangelize/Improve/Support

It is a short, but powerful way to look at your life cycle, which often means many different things to many different folks. I particularly like how much focus he puts on the solutions brought to the table, as well as thinking about the realities of actually getting the work done. I come across a lot of companies who know they want APIs but don't have any real plan for getting there, beyond just putting a developer on it. I'm keeping his list handy, augmenting my own, and use to help folks developer their own, custom API lifecycle flow.