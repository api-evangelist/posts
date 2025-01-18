---
layout: post
title: Lessons in API Deployment From Netflix
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Deployment
  - Lessons
---
[![](http://kinlane-productions2.s3.amazonaws.com/netflix_logo.gif)](http://www.netflix.com/ "Netflix API") I've heard this story several times now, but I think its a story worth telling over and over.

It is the story of the [Netflix API](http://developer.netflix.com/ "Netflix API") and the lessons they learned along the way. Not every API owner will be operating at the scale of Netflix, but the lessons are universal.

It all started when Netflix set out to build an API, where the original charter was:

> _Expose Netflix metadata and services to the public developer community to "let 1,000 flowers bloom". That community will build rich and exciting new tools and services to improve the value of Netflix to our customers._

The concept of 1,000 flowers refers tkinlane-productions2.s3.amazonaws.comargeting with the API, where ideas and applications would flower from each developer.

Fast forward a couple years, and the API has been successful, with growth looking something like this: ![](http://kinlane-productions.s3.amazonaws.com/netflix/growth-of-netflix-api.png) However the innovation did not come from where the original charter identified. The API delivered the greatest value from these groups (in order of importance):

*   Internal Engineering Teams
    *   Netflix Product Owners
    *   Netflix Developers
*   Partner Relationships
    *   External Device Manufacturers
    *   Public Developer Community
*   1,000 Flowers
kinlane-productions2.s3.amazonaws.com

Even with over 18K public developers using the API, it accounts for less than .5% of the traffic to the API. With internal teams and external device manufacturers accounting for the largest consumption.

![](http://kinlane-productions.s3.amazonaws.com/netflix/netflix-api-usage-by-audience.png) With these lessons in mind, the new charter for the Netflix API goes something like this:

> _Build and maintain an infinitely scalable data distribution pipeline for getting metadata and services from internal Netflix systems to streaming client apps on all platforms in the format and / or deliver method that is most optimal for each app and platform._

And moving forward, any future architecture will focus on supporting the key target audience first with a trickle down of features to the other audience segments.

Key lessons you can take away from the Netflix API deployment:

*   Understand the target audience of your API
*   Design for your most critical audiences first
*   Internalize the API as part of your companies engineering DNA
*   if you build a public API, make sure and help them bloom

Its easy to get caught up in the [hype and buzz around having a public API](http://apievangelist.com/2011/06/01/open-vs-closed-apis/ "Hype and buzz around a public API"), where you should be focusing on consuming your API internally, then sharing that value with key partners, and then when ready, take what you've learned and try growing thousands of flowers.

(Thanks to [Daniel Jacobson](http://twitter.com/#!/daniel_jacobson "Daniel Jacobson") for the images and material from his [Mashery presentation](http://www.slideshare.net/danieljacobson/history-and-future-of-the-netflix-api-mashery-evolution-of-distribution "mashery presentation"))

###### Related articles

*   [Open vs. Closed APIs](http://apievangelist.com/2011/06/01/open-vs-closed-apis/) (apievangelist.com)
*   [Netflix API Review](http://apievangelist.com/2011/03/29/netflix-api-review/) (apievangelist.com)
*   [Mashery - Evolution of Distribution](http://apievangelist.com/2011/06/02/mashery-evolution-of-distribution/) (apievangelist.com)