---
published: true
layout: post
title: >-
  I Love The API Enthusiasm Predix, But Please Publish An API Style Guide For
  Your Team
date: 2018-07-09T09:00:00.000Z
tags:
  - API Evangelist
image: https://s3.amazonaws.com/kinlane-productions2/predix/predix-diagram.png
---
<p></p>I was profiling [the volume of API from the Internet of Things platform Predix](https://www.predix.io/api) this last week. Luckily they have OpenAPI definitions for each of the APIs, something that makes my life a lot easier. As, they have a wealth of APIs available, doing an amazing amount of work when it comes to connecting devices to the Internet--I love their enthusiasm for putting out APIs. My only critical feedback for them after working my way through their API definitions, is they should invest some time to develop an API design guide, and distribute across their teams. The wild variances in definition and design of their APIs made me stumble a number of times while learning about what they do.

While looking through the definitions for the Predix APIs, I found many inconsistent patterns between them, and you could tell that they had different teams (or individuals) working across the suite of APIs. The inconsistencies ranged from the naming, description, and how the meta data was provided for each API, all the way to acronyms used in API paths, and other things that prevented me from understand what an API did all together. While I am stoked they provide OpenAPI definitions for all of their APIs, I still struggled to understand what was possible with many of their APIs. It kind of feels like they need an external editor to review each API definition before it leaves the door, as well as some sort of automated validation using JSON schema, that would work against a common set of API design standards.

I can tell that Predix has an extremely powerful stack of Internet of Things API resources. They have insight, predictive, and event-driven layers, and a wealth of resources for device operators to put to work. They just need another layer of API design polish on their APIs, as well as ensuring their API documentation reflects this design polish, helping bring it all home. If they did, I'm guessing they would see their adoption numbers increase. It can be tough to come into someone's world and understand the value they bring to the table, even with simple API resources, but with something as robust and complex as what Predix is up to, even an experienced integrator like me is having trouble getting up to speed on what was possible. A little API design and documentation polish would go a long way to reduce the friction for new consumers getting up to speed.

I struggle with making sure some of my writing gets the editing love before it gets out the door. I also struggle with making sure my own API definitions and designs get the love they need before they see the light of day. As a one person show I just do not have the resources it always takes to deliver at the scope I need. So I fully understand the challenge of small startups when it comes to investing in proper API design across their operations--you just don't always have the time to slow down and invest in a common API design guide, and the training and awareness across teams. I don't want to shame the Predix team, as I can tell they've invested a lot into their APIs. I just want to make sure they understand that a little investment in API design will go a long ways in helping them better achieve their goals as an Internet of Things API provider.
