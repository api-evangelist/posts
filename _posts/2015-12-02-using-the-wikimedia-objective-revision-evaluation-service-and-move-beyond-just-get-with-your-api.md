---
layout: post
title: >-
  Using The Wikimedia Objective Revision Evaluation Service And Move Beyond Just
  GET With Your API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Objective_Revision_Evaluation_Service_logo.svg.png
author:
  name: kinlane
tags: []
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Objective_Revision_Evaluation_Service_logo.svg.png)](https://meta.wikimedia.org/wiki/Objective_Revision_Evaluation_Service)

I stumbled across [Objective Revision Evaluation Service (ORES)](https://meta.wikimedia.org/wiki/Objective_Revision_Evaluation_Service) last night, a web service running in Wikimedia Labs that provides machine learning as a service across Wikimedia Projects, and is designed to help automate vandalism detection and removal for content, being developed as part of the [R:Revision scoring as a service](https://meta.wikimedia.org/wiki/Research:Revision_scoring_as_a_service "Research:Revision scoring as a service") project.

As I came across, I was also considering [different access plans across my APIs](http://plans.apievangelist.com/), with some of the plans allowing for updating existing content in the system--[the topic of abuse of API access was on my mind](http://apievangelist.com/2015/11/29/the-bad-actors-on-both-sides-of-the-api-fence/). I'm curious if ORES could be applied to any sort of content or data post via a PUT / PATCH API request?

Even if it didn't 100% out of the repo, maybe it could it be evolved to help manage the PUT / PATCH layer of API operations, allowing platforms to open up a little bit more, and open up more of their HTTP verbs, to a wider audience. Something like this could go a long way to helping API providers secure, and stabilize their API operations, and loosen service composition restrictions a little further.

Just a thought, as I'm kicking the tires of some of the open source API offerings I come across. Seems like to me, there is an opportunity for someone to deploy these open solutions as a service, and help API providers open up a little more. Just sharing with my audience, as a possible service that would benefit the API space, and hopefully make someone a little beer money--who knows!