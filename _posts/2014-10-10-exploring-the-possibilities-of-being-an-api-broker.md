---
layout: post
title: Exploring The Possibilities of Being An API Broker
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-broker.png
author:
  name: kinlane
tags: []
---
I’m playing around with different ways of building API collections using [APIs.json](http://apisjson.org/), and building on a concept I saw introduced by [Cyril Gaillard’s story titled "I don’t need a business co-founder, I need an API broker](https://medium.com/@cyrilgaillard/i-dont-need-a-business-co-founder-i-need-an-api-broker-c9be536cf8fa)", something which was expanded on by Patricio Robles ([@probles](https://twitter.com/probles)) on [ProgrammableWeb with "would your company benefit from having an API broker](http://www.programmableweb.com/news/would-your-company-benefit-having-api-broker/analysis/2014/09/29)?"

The concept of an API broker is interesting. If you had talked to me a year ago, I would have framed my thoughts on API brokering in a more algorithmic way, but after reading these posts, I am looking to merge in my thoughts around API evangelism, taking more of a human approach to API brokering. While I think API brokering in the future might look like more like high speed trading with algorithms doing the heavy lifting, I’m thinking for right now it is something we need humans to bridge, bringing a more personal approach during the wild wild west days of APIs.

To push forward my thoughts on API brokering, I’m playing around with describing various APIs using [Swagger 2.0](http://swagger.io/), then building a collection of these APIs using APIs.json, and publishing it all to a Github project—which for now I’m calling the [Utility Stack](http://utility-stack.apievangelist.com/). In this exercise I’m organizing 10 separate APIs that provide me with a very useful stack of API resources. I’m not quite sure what I will be building with all of this, but the current stack reflects what I’m already using to manage the API Evangelist network, so I know they are useful.

Here are the 10 APIs I’m working with:

*   AlchemyAPI Author Extraction API
*   AlchemyAPI Keyword & Term Extraction API
*   AlchemyAPI Text Extraction API
*   Angellist Startup API
*   Bitly URL Data API
*   FullContact Location Normalization API
*   FullContact Name Normalization API
*   Pinboard Bookmark API
*   Wordnik Word Lists API
*   Wordnik Words API

These are all API resources that provide some very useful elements in my operations. I use them to pull details about blog posts, look-up start-ups, shorten URLs, organize bookmarks, and other very utilitarian functions that I perform across my platform. I use these APIs for my own purposes, but for this project I’m looking to assemble them potentially as a collection that can be used in the development of a specific application, or for ongoing development within specific company or group.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swaggerLogo360.png)](http://swagger.io/)

I’m using Swagger version 2.0 to describe these APIs, and publishing all of it to Github, using APIs.json as an index of the collection. This allows me to generate interactive documentation for each API in the collection, which makes the entire stack accessible via a [single development portal](http://utility-stack.apievangelist.com/). I’m still working on the authentication across all of these resources, some of which are basic API keys, and other are BasicAuth or oAuth. Its all doable though, and based upon work I’ve done before I can easily store API keys, and oAuth credentials in the master branch of the Github repository which I keep as private.

To summarize this exercise, as an API broker I could easily find the resources my clients will need to build a specific web or mobile application, or accomplish a specific system integration. I could setup all of the accounts for each of the resources in a central, private configuration file that can be used by the developer hub I’ve setup so developers can explore using interactive documentation, as well as use directly within an application.

Think of this applied to Cyri’s vision of needing an API broker, or possibly something that every company would have as Patricio suggests in his ProgrammableWeb post. With this project, I’m not deploying any APIs, I’m merely aggregating and brokering a machine readable collection across numerous other API resources. This exercise has also shown me that I can easily identify gaps within any stack I’m working on, and make suggestions for new APIs that help developers accomplish a specific project objective.

[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

Imagine if I needed to add an image stack, like my [screen capture API](http://screen-capture.apievangelist.com/), or my [image manipulate API](http://image.manipulation.apievangelist.com/)? I could easily added in other features, and resources that developers are needing, allowing them to do what they do best, building applications, and delivering on system integrations. As a broker I can do the legwork of finding the resources they need, and aggregating into a single developer hub.

The fun in all of this is that I have each of these API definitions in a central system, allowing me to orchestrate collections like this [utility stack](http://utility-stack.apievangelist.com/), or possibly [API stacks like my poem of the times](http://apievangelist.com/2014/10/10/launching-25-apis-to-assemble-a-single-poem-for-each-day/) that all work towards a single objective, no matter whether its for developing a specific mobile application, single page application, or any other system integration you can imagine—even just writing a simple poem each day.