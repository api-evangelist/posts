---
layout: post
title: What API Documentation Do You Suggest?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Swagger-Screenshot-1.png
author:
  name: kinlane
tags:
  - Documentation
---
As I spend time in Washington DC, I get a lot of questions regarding API design, deployment and management. It is quite likely my writing will evolve here at API Evangelist during the next year. You will see me quickly scrub answers that I'm giving to questions that I receive from any number of federal agencies.

One question I received today was a classic one: what are some good examples of API docs? But in this particular case it wasn't just for an API, there is also a full download of data available as well.

First, regardless of whether or not it is data download (CSV, XML, JSON) or API you need to provide a wrapper area, or portal, that will onboard users and helps them understand what you are delivering, enabling them to go from 0-60 with as little friction as possible.

This is what I have studied for the last 3 years. After looking at thousands of APIs areas, you start to see patterns. You will find [my research in the form of "building blocks" on a section of my site](http://management.apievangelist.com/building-blocks.html). Even though most of my research is focused on APIs, these patterns can apply universally to data download or API delivery.

But specifically to question of what API documentation I like? I also recommend looking at:

*   [Stripe](https://stripe.com/docs/api)
*   [Twilio](http://www.twilio.com/docs/api/rest)
*   [Parse](https://www.parse.com/docs/rest)
*   [Full Contact](http://www.fullcontact.com/developer/docs/person/)
*   [Box](http://developers.box.com/docs/#folders)
*   [Dwolla](https://developers.dwolla.com/dev/docs)

When looking through these make sure and take notice of how [Dwolla separates their intro page, between non-devs and devs](https://developers.dwolla.com/). This is a very significant concept for delivering onboarding materials for users where not everyone will be a developer.

Beyond those suggestions for API docs, here are [Thirty APIs To Look At When Planning Your AP](http://apievangelist.com/2012/08/08/thirty-apis-to-look-at-when-planning-your-api/)I, if you are looking for more examples of quality API areas + documentation.

Another thing to consider when actually deploying specifically an API, is making your API documentation "interactive". There are several solutions for doing this right now, but the leading solution (in my opinion) is called [Swagger](https://developers.helloreverb.com/swagger/). This is a evolution from [WADL](http://en.wikipedia.org/wiki/Web_Application_Description_Language), but has come a long ways since just describing a web API in XML.

Swagger is developed by [Wordnik](http://www.wordnik.com/), and you can view the [documentation in action on their developer site](http://developer.wordnik.com/docs.html). In my examples above, Full Contact uses swagger to deliver their documentation in a very elegant way. Why Swagger is important, is the fact that it doesn't just deliver elegant documentation, it makes it interactive and learning about an API a hands on experience, which increases the potential for adoption.  

The benefits of Swagger only begin with interactive documentation, it will also [generate code samples in Java, Objective-C, PHP, Python, Ruby](https://github.com/wordnik/swagger-codegen) automatically. 

Just some thoughts. I hope it helps. Remember, open data and APIs only start with the download or interface. The success of your implementation really depends on the richness of the area around your data download and API.