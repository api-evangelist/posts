---
layout: post
title: The edX API
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist/edx/edx-logo.jpg
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/edx/edx-logo.jpg)](https://www.edx.org/)

This post should tell you about how behind I am in my storytelling—this story is from an [event I attended in Arlington TX](/admin/blog/google), on April 30th, and May 1st. While in Arlington, I spoke to a group of professionals who were crafting an online data & analytics course. A couple of the participants were from edX, the online course platform partnership between MIT, Harvard, UC Berkeley and other universities.

Over the course of two days, I had a cance ask the question, where was the edX API? Seemed like an obvious question, to which [Emily Watson](https://www.linkedin.com/in/watsonemily), the program manager at edX, responded, “Its on our roadmap”! An answer I get from many online companies, but Emily pulled up their roadmap on the wiki, and [indeed it was on their roadmap](https://edx-wiki.atlassian.net/wiki/display/OPENPROD/Open+edX+Public+Product+Roadmap).

I told Emily, I’d review the edX platform, and provide some feedback, that they could incorporate into their strategy. This one is easy, and is my basic feedback for any company with an online website and/or application—you make everything currently available on your site or application, available via an API. A quick glance at edX, these would be:

*   **Courses** - The 175+ courses available on edX, should also be available in a machine readable format, via the edX API.
*   **Faculty & Staff** \- The 400+ faculty and staff involved in producing edX courses should be available in a machine readable format, via the edX API.
*   **Schools & Partners**\- All edX partners should be available in a machine readable format, via the edX API.

You start with the low hanging fruit, by establishing three, simply designed web APIs for those already, publicly available resources, then move on to providing the essential business building blocks for any API:

*   **Dedicated API Portal -** Simple, dedicated portal for edX API integrations, that isn’t just for developers. It should be easy enough for anyone to learn about the edX API, without too much technical detail front and center.
*   **Simple Landing Page -** The home page of the edX API portal should be dead simple, explaining what the API does, providing easy one click access to get to whatever any API, or potential API consumer will need.
*   **Self-Service Registration** \- The edX API needs to be accessible 24/7, and developers should be able to register without approval, and at least get minimum access to the system to begin playing with resources, even if it takes approval to get higher levels of access. Modern [API management solutions like 3Scale](https://bitly.com/13esk6Q+) work very well in managing this layer of access, and service composition.
*   **Interactive Documentation** \- The standard for all APIs in 2014 is to provide interactive documentation, making learning about an API, a hands on experience. There are some common approaches to defining an API using machine readable formats like [Swagger](http://bit.ly/1w9oKpq), which will automatically generate interactive documentation for consumers.
*   **Code Samples & Libraries -** Developers need all the help they can in getting up and running with an API, and right after interactive API documentation, code libraries and samples are critical to onboarding API consumers.
*   **Blog W/ RSS** \- An active blog, with RSS for syndication provides the necessary stories and resulting SEO that helps communicate the value an API offers, and keeps new and existing consumers in tune with API operations.
*   **Twitter Presence -** An active Twitter presence is common place for leading API platforms, and edX will need an active Twitter account to support its other communications, and support operations.
*   **Support Ticket System** \- An easy to use, trackable support system for the edX API platform will be essential to establishing a feedback loop with API consumers. Github issue management works very well, for an out of the box, API support ticket system for all public APis.
*   **Discussion Forum -** Discussion forums are common place in APIs, and provide potential indirect, community support, that can help new and existing API consumers find what they are looking for. Don’t limit yourself to a local discussion forum, there are SaaS solutions, as well as existing developer driven communities like Stack Overflow.

Next make sure and cover the basic political building blocks:

*   **Terms of Service -** Provide simple, liberal terms of service that incentivize integrations and development.
*   **Content Licensing -** Make sure all licensing for any content is explained front and center.
*   **Code Licensing -** Clearly license all client side code samples, libraries and event potentially server side code for the API.
*   **API Licensing -** Make sure the API definition is openly licensed, so that it can be re-used, re-mixed in many ways--consider putting into [API Commons](http://apicommons.org).
*   **Branding Requirements -** Provide clear direction when it comes to branding requirements around API integrations.
*   **Rate Limits -** Help developers understand what rate limits are in place to keep system stable, and what ways there are to get more access.
*   **Pricing -** Are there any costs for API access? If there are, make sure and clearly explain what is free, and at what points do resources cost.
*   **Partner Tiers -** Establish multiple layers of API access, allowing trusted partners to achieve higher rate limits, and write access to resources.

That should do it! ;-) As you can see the APIs themselves are just the starting point. It is too late for edX to be API-first, which would have been much easier, but you have just get your basic APIs, the [supporting business and political building blocks](http://management.apievangelist.com/building-blocks.html), and get down to the hard work of evangelizing, managing, and iterating on the edX API. The learning doesn't start until you have the API up, being consumed, and have engage users who are providing feedback for the roadmap.

Once a basic edX API is up and running, and edX has some experience under their belt in managing the API community, then some thought can be put into creating a read / write API, allowing access to student information via oAuth, as well as letting trusted partners publish content, and student data into the system. A read / write system could be done in a single release, but since edX is a little behind curve on getting API up, I recommend cutting teeth on a read only system for version 1.0.

In reality, this advice for designing, deploying, managing, and evangelizing an API applies to any company with an online presence. It is a pretty proven formula extracted from watching multiple API leaders like Twitter, Google and Amazon. In this particular scenario, edX needs to get on the ball--it is difficult for me to imagine being an online education platform that operates between multiple universities in 2014, and not having an active API. ;-)