---
layout: post
title: Some API Embeddable Best Practices Out Of Yelp
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_10_at_8.08.25_pm.png
atomdate: 2016-10-11T18:00:00.000Z
tags:
  - Embeddable
  - Best Practices
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_10_at_8.08.25_pm.png)](https://engineeringblog.yelp.com/2016/10/embedded-reviews-at-yelp.html)

[Yelp has shared some of the wisdom behind how they design, deploy, and operate their embeddable reviews](https://engineeringblog.yelp.com/2016/10/embedded-reviews-at-yelp.html). I like it when leading API providers share the story behind their tooling like this. This type of storytelling generates SEO for their API, educates their API consumers, and provides educational resources for other API providers (and content for analysts like me).

So, what makes for a good embeddable widget, according to Yelp?

*   a minimal amount of HTML code 
*   a consistent & responsive design
*   stay up-to-date with contextual information
*   load fast & gracefully handle traffic spikes
*   record accurate analytics

Yelp shares a little bit about the technical approach to achieving their definition of a good embeddable widget, which "are served as Yelp pages within iframes, adhere to the Yelp Styleguide, and show the most up-to-date review":

*   iframe embeds allow for a simpler widgets.js
*   iframe embeds make development easier
*   iframe embeds can take advantage of HTML caching

I've heard about lightening the load for your JavaScript, and the ease of embeddability before, from other providers. I hadn't thought about the cache-ability of using iframes before. It makes sense, allowing the user's browser to carry more of the load. They close up the post with some more interesting insight into the architectural decisions behind their embeddable(s):

*   The embed HTML snippet consists of unstyled and empty elements so that the HTML snippet is minimal and durable.
*   We use a controller loaded via script tag to create and load iframes. The controller consists of pure JavaScript and doesn’t use any libraries. The controller communicates with the iframes using postMessage.
*   We use a Google Analytics iframe served by Yelp to handle sending events for multiple review widget iframes on a single page. Resources served by Yelp, such as the controller and the iframes are either cached or served via CDN.

The use of Google Analytics is another interesting aspect that I hadn't considered. It gets me thinking about what other examples are there regarding the usage Google Analytics for a tracking layer within API clients. How is Yelp layering this into their wider Google Analytics strategy? Inversely how is Google possibly expanding Google Analytics for tracking of clients beyond straightforward web consumption? All things I need to get more up to speed on.

Yelp's story provides me with a number great nuggets for adding to my [API Embeddable research](http://embeddable.apievangelist.com). It also overlaps nicely with my [API analysis research](http://analysis.apievangelist.com/) and even some of [my recent thoughts on the expanding analytics layer for other API clients and SDKs](http://apievangelist.com/2016/10/04/increased-analytics-at-the-api-client-and-sdk-level/).