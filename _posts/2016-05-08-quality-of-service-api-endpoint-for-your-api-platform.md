---
layout: post
title: Quality of Service API Endpoint For Your API Platform
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twilio-call-feedback-api.png
tags:
  - Platform
  - Quality
---
I'm spending a lot of time in the Twilio API ecosystem this week, so you will hear multiple stories about what they are up to. This one is highlighting their [Call Feedback API](https://www.twilio.com/docs/api/rest/call-feedback) and the growing amount of what I'd consider as infrastructure APIs from leading API platforms. The more API platforms mature, the more I see APIs deployed to assist API consumers manage their integrations, as well as get a the core API resources being made available.

Twilio's feedback API focuses on a single API resource, a call, but could just as easily be applied equally as a quality of service feedback endpoint for anything you are serving up, like video, bot responses, recommendations, and beyond. I like the idea of having one endpoint for serving up a resource, and another endpoint for reporting the quality of service around the resource. 

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twilio-call-feedback-api.png)

Now that I have filed a report on Twilio's approach to using APIs as part of their platform operations, I will be keeping a closer eye out for other platforms doing similar things. I will consider adding it to my stack of existing API infrastructure APIs, alongside access to account, application, billing, and analytics via an API.

As the growth of API integration continues, I will continue looking at the API pioneers for examples of how we can be providing more infrastructure focused API resources, that allow API consumers to manage, orchestrate, and automate their API integrations. As developers use a larger number of APIs to drive any single application or system integration, the need to automate accounts, apps, pricing, billing, analytics and feedback loops is only going to grow.