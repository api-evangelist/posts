---
layout: post
title: 'Amazon Dash: Ok Idea. Dumb Implementations'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/1027205_health_and_personal_care_project_snake_always_accessible_v2_1920x1080.png
atomdate: 2017-02-01T23:00:00.000Z
tags:
  - Amazon
---
[The AWS IoT Button](https://aws.amazon.com/iotbutton/), based on the Amazon Dash Button hardware, was kind of sorta an interesting model, allowing you to trigger virtual things with a physical click of a button, but now they've virtualized their approach, which I guess is a decent enough of an idea (not new), but their implementation is just not that smart. I think they just went from virtual to physical, and back again that they kind of got whiplash, and didn't really think it through before launching.

I'm not big on bashing people's technology implementations, as I would rather focus on shining a light on what is progressive in the space, but the area of [embeddable tooling built using APIs](http://embeddable.apievangelist.com) has suffered so much in the last couple years, I'm not keen on big providers further sucking the oxygen out of the room--AWS can do better. Having a big branded virtualized button with a click for more info on one side, and purchase if you click on the other side seems like something your brands suggested, and not your actual consumers or developers.

I can see the physical AWS IoT button getting some traction, even though the majority of the implementations will be cheezy. Making virtualized buttons should behave like the physical thing seems kind of useless. It seems like AWS could have designed a suite of well-designed HTML + JS button and bookmarklets that engineers can make very useful on the web as well as in a mobile environment. The branding, analytics, and overall experience could make things much more interesting than what you have now, and brand partners could get to work wiring these experiences up to make some pretty valuable API calls, and even daisy chain together multiple API calls across providers.

[API powered embeddable buttons is one of the areas of the API space that has left me underwhelmed](http://embeddable.apievangelist.com). After we saw significant movement from Twitter and Facebook with some of their embeddable social buttons, there wasn't much else. This seems to common in the wake of big tech companies doing stuff like this, sucking the innovation out of the room--which is why AWS implementation concerns me. I think there is a big opportunity in this conversational interface, bot driven frenzy for someone to step up and do API driven buttons properly, but alas, we end up with [cheezy big brand buttons like Amazon Dash](https://aws.amazon.com/iotbutton/).