---
layout: post
title: Considering A Web API Ecosystem Through Feature-Based Reuse
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_04_at_11.24.39_am.png
atomdate: 2016-10-05T16:00:00.000Z
tags:
  - Web
  - Ecosystem
---
I recently carved out some time to read [A Web API ecosystem through feature-based reuse](https://arxiv.org/pdf/1609.07108v1.pdf) by Ruben Verborgh (@RubenVerborgh) and Michel Dumontier. It is a lengthy, very academic proposal on how we can address the fact that "the current Web API landscape does not scale well: every API requires its own hardcoded clients in an unusually short-lived, tightly coupled relationship of highly subjective quality."

I highly recommend reading their proposal, as there are a lot of very useful patterns and suggestions in there that you can put to use in your operations. The paper centers around the notion that the web has succeeded because we were able to better consider interface reuse, and were able to identify the most effective patterns using analytics, and pointing out that there really is no equivalent to web analytics for measuring an APIs effectiveness. 

_In order to evolve Web API design from an art into a discipline with measurable outcomes, we propose an ecosystem of reusable interaction patterns similar to those on the human Web, and a task-driven method of measuring those._

To help address these challenges in the world of web APIs, Verborgh and Dumontier propose that we work to build web interfaces, similar to what we do with the web, employing a bottom-up to composing reusable features such as full-text search, auto-complete, file uploads, etc.--in order to unlock the benefits of bottom-up interfaces, they propose 5 interface design principles:

1.  Web APIs consist of features that implement a common interface
2.  Web APIs partition their interface to maximize feature reuse.
3.  Web API responses advertise the presence of each relevant feature
4.  Each feature describes its own invocation and functionality.
5.  The impact a feature on a Web API should be measured across implementations.

They provide us with a pretty well thought out vision involving implementations and frameworks, and the sharing of documentation, while universally applying metrics for being able to identify the successful patterns. It provides us with a compelling, "feature-based method to construct the interface of Web APIs, favoring reuse overreinvention, analogous to component-driven interaction design on the human Web."

I support everything they propose. I cannot provide any critique on the technical merits of their vision. However, I find it lacks an awareness of the current business and political landscape that I find regularly present in the hypermedia, and linked data material I consume.

Here are a few of the business and political considerations that contribute to the situation we find ourselves in that Verborgh and Dumontier are focused on, which will also work to slow the adoption of their proposed vision:

*   **Venture Capital** - The current venture capital driven climate does not incentivize sharing and reuse, and their startups investing time and energy into web technologies.
*   **Intellectual Property** \- Modern views of the intellectual property, partially fueled by VC investment, but further exacerbated by legal cases like Oracle v Google force developers and designers to hold patterns close to their chest, limiting sharing and reuse again.
*   **Lazy Developers -** Not all developers are knowledge seekers like the authors of this paper, and myself, many are just looking to get the job done and get home. There are few rewards for contributing back to the community, and once I have mine, I'm done.
*   **The Web Is Shit** \- One area that linked data and hypermedia folks tend to lose me is their focus on modeling things after the web. I agree the web is "working", but I don't know which one you use, but the one I use is shit, and only getting worse--have you scraped web content lately?
*   **Metrics & Analytics -** Google Analytics started out providing us with a set of tools to measure what works and doesn't work when it comes to the parts and pieces of our websites, but now it just does that for advertising. Also we do have analytics in the API space, but due to the other areas cited above, there is no sharing of this wisdom across the space.

These are just a handful of areas I regularly see working against the API design, definition, and hypermedia areas of the space, and will flood in slow the progress of their web API ecosystem vision. It doesn't mean I'm not supportive. I see the essence of a number of positive things present in their proposal, like reuse, sharing, and measurement. I feel the essence of existing currents in the world of APIs like microservices, DevOps, and continuous integration (aka [orchestration](http://orchestration.apievangelist.com/)).

My mission, as it has been since 2010, is make sure really smart folks like Ruben and Michel at institutions, startups, and the enterprise better understand the business and political currents that are flowing around them. It can be very easy to miss significant signals around the currents influencing what is working, or not working with APIs when you are heads down working on a product, or razor focused on getting your degree within an institution. The human aspects of this conversation are always well cited, but I'm thinking we aren't always honest about the human elements present on the API side of the equation. Web != API & API !=Web.