---
layout: post
title: Just The Best Parts Of The API Documentation Please
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/slate/slate-tripit.png
author:
  name: kinlane
tags:
  - Documentation
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/slate/slate-tripit.png)](https://github.com/tripit/slate)

I was just talking API documentation with Brent Baker ([@norcaljhawk](https://twitter.com/norcaljhawk)), and Jordan Lampe ([@JsLampe](https://twitter.com/JsLampe)) from [Dwolla](https://www.dwolla.com/). As we were going through their API documentation, they mentioned how they were using [Slate](https://github.com/tripit/slate) for the version 1.0 of their API documentation, but for this round they took what they felt were just the best parts of Slate, and were looking to craft a new experience. 

Interestingly [I had written about their use of Slate for API docs back in 2014](http://apievangelist.com/2014/10/24/dwolla-using-slate-for-an-evolved-api-documentation-experience/), so it makes sense for me to keep tracking on, but more importantly I think the move reflects the wider evolution of API documentation. If you aren't familiar with Slate, it is a very attractive way to document your APIs, that many API providers and consumers have latched on to. Slate, in contrast to the very utilitarian style of Swagger UI, has certain elements developer prefer--something I can see why, after looking at a lot of API docs.

Dwolla's evolution from their old static API docs to Slate, and then [to their current version](https://docsv2.dwolla.com/) highlighted two important aspects of the modern API documentation evolution for me. First, the feedback to the Dwolla team revealed that the three column format which Slate used for documentation, made the documentation seem like it was not part of the overall Dwolla experience--it was separate. Which is one unique thing Swagger UI did, is that allowed it to be embedded within any API portal, even though the look was not as attractive as Slate is.

As they evolve overall their portal experience, [Dwolla](http://dwolla.org) was sure they wanted to keep the code sample viewer, which allows for inline viewing of raw, PHP, Ruby, Python, and JavaScript samples for each API. In rethinking their API docs, the Dwolla team wanted to decouple the three-pane experience, but keep the attractiveness, flowing navigation, and inline language sample experience that Slate delivered--keeping just the best parts of the increasingly ubiquitous API documentation format.

For me this highlights some of the elements, the latest wave of API documentation developers, like [Any API](https://any-api.com/), may want to consider as they help push forward the overall API documentation conversation. [Any API did what I wanted to see, and combined the interactive functionality of Swagger UI, and the clean UI / UX that Slate brought to the table](http://apievangelist.com/2015/06/25/we-should-be-generating-slate-from-swagger-so-we-maintain-a-machine-readable-core/). I recommend to anyone crafting the next generation of API documentation solutions, consider the overall layout, making things more decoupled, responsive, and allowing of more embeddability of all, or even just portions of the API documentation--making the API documentation experience more portable, and re-mixable.

Even though I'm not seeing everything I would like to when it comes to the evolution of API documentation, I am optimistic about what I am seeing, and my conversation with the Dwolla team shows me there is a lot of positive momentum forward in how leading API providers are really thinking about what matters, when it comes to API documentation.