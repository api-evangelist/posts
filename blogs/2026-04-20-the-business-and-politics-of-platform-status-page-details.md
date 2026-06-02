---
title: The Business and Politics of Platform Status Page Details
url: http://apievangelist.com/2026/04/20/the-business-and-politics-of-platform-status-page-details/
date: '2026-04-20'
author: ''
feed_url: https://apievangelist.com/atom.xml
---
I like GitHub’s recent blog post on transparency around their status page. Status pages are human and machine-readable properties I’ve tracked on for API providers as part of my APIs.json work for over a decade now. API status pages emerged as a standard shortly after we became dependent on these platforms and their APIs, and have become an expected building block of any serious platform. Seeing more evolution, discussion, and transparency around our platforms is a good thing, and something we should see more of.

You can see GitHub wrestling with the technical details and the best way to communicate around real or perceived instability. They have added a new “degraded performance” state, per-service uptime metrics, and clearer communication around model availability. They are separating things into three buckets now, degraded performance, partial outage, and major outage–with per service metrics determining these states.

The GitHub Status Page breaks things down by Git operations, Webhooks, API requests, issues, pull requests, actions, packages, pages, code spaces, and now copilot, which let’s you asses which part of the platform you care about being up or down, and separates the API from the platform. Each platform will have their own way of breaking things down, but I will be looking for what some of the common patterns are around what status pages report, what services they use, and the separation of API and the rest of the platform.

I’ll have to step back and do some thinking about the business and politics of this transparency from GitHub. What does the introduction of “degraded performance” do when it comes to service level agreements or other general expectations? I am curious to think more about what they might be getting ahead of here. But I don’t want to assume any ill intent behind their blog post. I just get nervous when I see “transparency” used, as I watch transparency pages evolve from something helpful to something that was used to split the business and political hairs in favor of platforms.

I just wanted to write about this so I have a timestamp in the blog, and it is something I can revisit and look at across other providers–then I will likely understand the bigger picture and how GitHub’s changes fit into things.
