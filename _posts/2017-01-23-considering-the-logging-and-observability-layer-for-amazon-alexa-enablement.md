---
layout: post
title: Considering the Logging and Observability Layer for Amazon Alexa Enablement
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/alexa_history.png
atomdate: 2017-01-23T23:00:00.000Z
tags:
  - Logging
  - Observability
  - Amazon
  - Enablement
---
I am going through [the Amazon Alexa platform](https://developer.amazon.com/alexa), profiling it as part of [my voice API research](http://voice.apievangelist.com/), and also thinking deeply about the impact voice-enablement, and conversational interfaces will or will not make in our lives. I've been pretty vocal that I am not too excited about voice-enablement in my own world but it is something I understand other folks are, and I'm also interested in Amazon's approach to operating their platform--making it something I'm digging deeper into. 

I do not own any of the voice enabled Amazon devices, but I am playing with [their simulator Echosim.io](https://echosim.io/). I'm not interested in building any skills or applications for Alexa, but I am curious to learn how the platform functions, so I will be developing prototypes so that I can understand things better. One of the things I'm looking to understand as I'm getting up to speed is how the logging for the platform works, so I can evaluate the observability of the voice platform from developers, as well as an end-user perspective.

From a developer perspective, I see that you have access to device synchronize state, user inactivity, and exceptions encountered via the [Alexa Voice Service System Interface](https://developer.amazon.com/public/solutions/alexa/alexa-voice-service/reference/system), and from an [end-user perspective, there is a history section under device settings](http://alexa.amazon.com/spa/index.html#settings). It is a decent start from a logging perspective, but I'm thinking that transparency and observability at this level are going to be important to establish trust between end-users and the platform. With a lot of the speculation around the ambient capabilities of these devices, I'm thinking a robust logging, reporting, and auditing layer to Alexa will be critical to making folks feel like it is something they want in their homes.

I'm thinking through the logging layer of my drone platform usage, and what is available to me as end-user, and developer. Alexa provides me another dimension of this logging layer, but this time in the service of voice-enablement. Further rounding off my view of what should be available when it comes to logging, reporting, and observability of the different types of devices we are connecting to the Internet. As I push forward in both these areas of my Internet of Things (IoT) research I will publish my work here on API Evangelist, as well as the individual [voice](http://voice.apievangelist.com/), [drone](http://drones.apievangelist.com/), and [logging](http://logging.apievangelist.com) research areas.