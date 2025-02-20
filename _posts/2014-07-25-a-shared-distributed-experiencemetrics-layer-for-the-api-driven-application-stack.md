---
layout: post
title: >-
  A Shared, Distributed Experience(Metrics) Layer For The API Driven Application
  Stack
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-analytics-4.jpeg
author:
  name: kinlane
tags:
  - Metrics
  - Stack
  - Experience
---
I’m in the middle of processing multiple emails, as well as coming down off an early morning conversation, all on the subject of analytics. A portion of the conversations are about analytics at the web site, web or mobile app level, and a portion of it was around analytics for API developers, as well as API platform providers—basically the full stack of analytics including platforms, developers, apps, all the way to the end-user.

Increased visibility into the API layer, and how developers and their apps are consuming API resources, is a cornerstone of API management. There are numerous solutions out there to give you analytics in websites and web apps ([Google Analytics](http://www.google.com/analytics/)), and within the mobile app itself ([Mixpanel](http://bit.ly/1rggWl3)), and there are analytics at the API layer for both API providers, and the many developers who are integrating APIs into their applications and systems ([3Scale](http://bit.ly/13esk6Q)).

API providers, with the assistance of API infrastructure solutions like [3Scale](http://bit.ly/13esk6Q), have done very well in making sense of how resources are composed through a service composition layer, that includes a robust number of metrics and analytics for both provider and developer. This is great for allowing API providers to understand how developers, and their applications are consuming API resources, while at the same time delivering a subset of analytics for each individual developer regarding their individual API usage. This is great, but if a developer wants more application level information, they usually have to look elsewhere to other tools and services. (this is evolving)

After my conversations this morning, I was left thinking big picture about the future of analytics for the API driven, multichannel, website, single page, mobile, and Iot application stack. I am left with a vision of a tool that can handle all channels, not just the needs of the platform, and its developers, but also bring the end-users in the conversation. I need a standalone, open source framework, that I can use for not just a single platform, but something that could deployed for each end users, so it can span multiple platforms, for a single user, or group of users.

This is where it gets challenging, I’m trying to think of this from a users perspective, abstracting away the provider, developer, and even the app, making the end-user the focus of the conversation. I still want to meet the needs of the provider and developers, I just want to shift the perspective, to the end deliverable, the actual “thing” we are looking to deliver, aka. the human element—moving the conversation furhter out of the business and geek realm.

I immediately think of the [Tin Can API](http://tincanapi.com/), aka [Experience API](http://bit.ly/1lEVW0y). Ok, I have to admit [@AudreyWatters](https://twitter.com/audreywatters) made me think of it, after I described the solution I was looking for, she said, “that sounds like the Tin Can API”? To which I said DOH!!! If you are unfamiliar with the Experience API, they describe themselves as:

> _...a service that allows for statements of experience to be delivered to and stored securely in a Learning Record Store (LRS)..._

If we swap out the concept of an LRS for education, and call it a Platform Record Store(PRS), or if we are going to give it to each end-user to track across platforms, we call it a User Record Store (URS)—basically a online place to store your experiences. For education its an LRS, but for the wider API world I’m calling it a PRS or URS, depending on how it is deployed.

Regardless of where you store the data, the Experience API lets you record just that, “experiences”. You can define your own objects, and verbs (actions), to be taken against those objects. The Experience API gives you a language map, authentication, authority, and many other goodies to make each “statement of experience” as meaningful as possible. Ok, so you are thinking, WTF is all this? An experience API really? Ok, well to put it in geek speak, its a logging API, just in this scenario we are making it about user experience instead of app, API, or just platform needs. Entering a richer realm of context, and potentially asking much more meaningful questions, rather than just logging on some bullshit metric.

Let’s explore a little--If I’m a platform provider I can track on the experiences that matter to me:

*   /GET of a /user API resource
*   /POST of an /image API resource
*   /POST of a /blog API resource

These are the API metrics that API providers are tracking on currently, and the [Experience API](http://bit.ly/1lEVW0y) model accommodates these common API usage experiences, while also opening up a whole new world of exploration. I think this new model would encourage API providers to explore new ways of measuring their API usage, and how resources are actually being put to use--kind of like we've been doing for years with API infrastructure providers.

From a developer’s perspective, I can now can tap into those platform defined experiences for my account, and use across my apps. This is essentially what we have today from API infrastructure providers like 3Scale. Lets take to the next level, let’s allow each developer to define their own experiences, that they can track on and use in their own applications, for example:

*   View a users settings
*   Share of an image
*   View of a blog post
*   Logged out of app

All of these experiences would be meaningful to the application developer, helping them understand how users are engaging with their apps. This layer of the experience stack would be open, allowing each developer to define—leaving it up to them whether they wanted to share with platform providers or not. (controversial!)

Next, let's talk about end-users of applications that are built. We could also use this to drive end-user analytics, allowing them to see a report of their activity on any application, or depending on how this whole idea is deployed, across applications. It would provide a web and mobile dashboard like app users are growing accustom to, as well as provide a sort of notification layer, if end-users are interested.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/tin-can-api/tin-can-api-scorm-cloud.jpg)](http://tincanapi.com/)

What is important about this model is transparency. It gives platforms, and developers single place to record metrics (experiences), in a way that provides transparency to the end-user.(controversial!) We can also open up the experience definitions to the end-users, letting each end-user define the things that matter to them, and the experiences they want to capture. I imagine, this is only for the savvy app user, seems like you’d end up with a lot of ridiculous experience statements, but even if 1% of the feedback was interesting, it could provide an interesting feedback loop about what really is meaningful to end-users. Not exactly sure how you’d integrate user-defined experiences into the application operations, but at the minimum it could be a feedback mechanism, and integration is manual.

From my perspective, all of the current API analytics stuff is born out of a very necessary, but technical, and boring IT realm. The experiences we are creating are very database, system, platform, app or resource directed experiences, with monetization in mind—all while trying to build the most meaningful app for end-users. We need to flip the paradigm, like we are seeing from API pioneers like Netflx, [who are talking about designing experience based API](http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer/)s, instead of resource based APIs. In this way of thinking, the API is designed with the end-user experience in mind, and not blinded with where the resource came from, or how its structured—it is all based upon how it will actually be used.

Think of what an “experience” based analytics approach could do for business models, rather than focusing on the few experiences we already know, like how to monetize with the page view, app session, ad view, and add click. We could start identifying much more meaningful experiences to end-users, and yes even experiences that people are willing to pay for—the monetized experience! [@audreywatters](https://twitter.com/audreywatters) will love that. Reducing everything to a transaction baby! Its my job.

Well that concludes my analytics brain vomit for the day. I responded to my two emails, and had a fruitful call with a leading tech company about the future of analytics in the API stack, and successfully puked up this post. If you read it, I’m very sorry, and I hope it made sense. I’m still working through these thoughts, but it is a bucket that has been overflowing for a while now. I’ll put on the side burner, stir my thoughts around in future stories, and figure out what is next.