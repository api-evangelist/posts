---
published: true
layout: post
title: Where is the API Value?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_value.jpg
author:
  name: kinlane
tags:
  - Value
---
I had some thoughts bouncing around in my head the last couple days about where the value in this whole API game actually resides. When it comes to the types of APIs I am seeing be deployed, and where I see things head in the near future, I wanted to try and map out where the different moving parts of an API are, and assigning value to each component. At first I just wanted to think more deeply about how [Claude Shannon the father of information theory](https://en.wikipedia.org/wiki/Claude_Shannon) would see (or not see) the value in APIs. In [1948 Claude Shanno wrote in his Mathematical Theory of Communicatio](http://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)n:

> _The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have meaning; that is they refer to or are correlated according to some system with certain physical or conceptual entities. These semantic aspects of communication are irrelevant to the engineering problem. The significant aspect is that the actual message is one selected from a set of possible messages. The system must be designed to operate for each possible selection, not just the one which will actually be chosen since this is unknown at the time of design._

In 2020, I feel like the message is still the center of value, but I would disagree about the meaning of those messages being irrelevant, but that is another post. However I would say that other dimensions have emerged in the 70+ years since Shannon wrote his theory. I would argue that Shannon's view of the message still hold true in 2020, but I just think he couldn't have imagined the many ways in which protocols, connections, formats, channels, and the network, performance, and volume of messages would influence the purpose, meaning, and ultimately value of each message, and messages in bulk. This is my first draft at trying to map out the moving parts. It is far from complete, or laid out as I see in my head, but its a start to try and understand where the value lies within doing APIs across the landscape in the 2020s. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_value.jpg)

Here:

**G1 - Protocols** \- This is the protocol layer for each potential API transaction occurring.

*   **1) FTP** \- This is still a relevant way to move messages around.
*   **2) HTTP 1.1** - This is a dominant protocol available across the landscape.
*   **3) SSE -** A relevant way to send one-way streams of messages.
*   **4) HTTP/2** \- The next iteration of the HTTP protocol already in use.
*   **5) HTTP/3 -** The next iteration of the HTTP protocol being laid.
*   **6) TCP -** The foundational protocol that is driving business messaging.
*   **7) UDP  -** A protocol you don't hear much about but is influencing the future.
*   **8) MQTT -** Satisfying the devices that are being connected to the Internet.

**G2 - Connections -** The variety of lego API connectors we have available out there today.

*   **8) Files -** This really doesn't fit here, but it balances out the FTP part of the equation.
*   **9) Request -** Simple requests being made by consumers to APIs.
*   **9) Response -** The responses returend for each of the requests being made.
*   **10) Webhook -** Pushing information out to consumers as part of operations.
*   **11) Sustained -** Dedicated connects providing one-way or two-way connections.
*   **12) Multiple** \- Opening up multiple threads as part of API communication.
*   **13) Lossless** \- Making sure information doesn't get lost along the way.

**G3 - Design** \- The design pattern in use for deliverying each API made available to consumers.

*   **14) EDI** - The electronic data interfachange format is still powering much of the economy.
*   **15) SOAP** - SOAP is still relevant when it comes to integrating with enterprise systems.
*   **16) REST** - This philosophy is simple, easy to use, and ubiquitous giving it an edge over others.
*   **17) RPC** - Still a viable format with a handful of patterns powering heavy hitting APIs.
*   **18) Hypermedia** - Helping make content, media, and other vlauable resources accessible.
*   **19) GraphQL** - Giving more control to consumers when it comes to access complex data.

**20) Headers -** Providing the routing, control, and additional meta data about messages.

**G4 - Formats -** The data formats in use for request, responses, and streaming messages.

*   **21) CSV** - This format is still relevant to users of spreadsheets.
*   **22) XML** - Provides the robust structure for machine readable data.
*   **23) JSON** - Provides a more lighteweight format for developers.
*   **24) YAML** - Simplifying machine readable formats for management.
*   **25) Protobuf** -Helping make APIs more efficient over the wire.
*   **26) Avro** - A common data serialization format for messages.

**G5 - Engagement** \- How API resources are engaged with by human beings putting to work.

*   **27) Request** - A little redundant, but relevant to how APIs are often engaged.
*   **28) Response** - Getting a response back for request that is being made.
*   **29) Push** - Having data pushed to you when some criteria is met.
*   **30) Stream** - Leveraging one-way or two-way streams of messages.
*   **31) Runner** - Orchestrating many API requests and connections.
*   **32) Monitor** - Executing APIs based upon a schedule from regions.
*   **33) Events** - Responding to events that occur across API infrastructure.

**34) Performance -** What is the performance expectations of any API I am using as a consumer.

**35) Volume -** What volume is obtainable via each API to match my desires as a consumer.

**36) Messages -** Coming full circle to the most important ingredient in all of this -- the message.

**37) Humans -** Wait, actually the most important ingredientn is humans, because without us...

My drawing is rough, and the overlapping moving parts of each potential API call are extremely difficult to nail down in a single diagram. I am just trying to get all the moving parts listed, grouped, and somewhat visualized for further processing. I will be hanging the diagram on my wall for a couple of weeks and simmering on how all of these moving parts work together. What has the past looked like, where do we find the value today, and what does the future look like. I'll get better at visually representing this landscape as I progress. I have to start somewhere and spin out on thinking about each gear in the larger machine.

**Where is the API Value?**

Ok, so where is the value for me. Is it the API pipes? What part of the protocols, connections, formats, or ways that I engage with APIs drives the value for me? This provides me with a way to trace the path of each type of API request and understand the value provenence that exists (or doesn't) throughout the stack. I can freeze frame on a single type of resource I am working and think about what atters to me most in the API supply chain. Most importantly for me, contrary to what Claude Shannon believed I can't help but feel like the semantics of the message do matter in this day and age. 

While I think in a general mass digital communication sense we definitely had to ignore the contents of the each message as well as sender and receiver, but I think in today's digitial world these things actually matter a great deal, and we are routing, filtering, prioritising, and limiting based upon these considerations (one reason I put headers up there). I think a one size fits all approach works at scale in general, but there is a lot that can fall through the cracks at this scale, and we need to think more about where the value lies when it comes to API providers, consumers, as well as the end-user of the applications and integrations we are powering with APIs. This type of API-driven communication pushes us to think that single technological ideologies and philosophies are where it is at, when in reality there needs to be a diversity in technological approaches applied, as well as a deeper understanding of who the relevant actors are and what they value the most.

Lots to chew on...