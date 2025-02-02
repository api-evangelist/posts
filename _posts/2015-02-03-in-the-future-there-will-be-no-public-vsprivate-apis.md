---
published: true
layout: post
title: In The Future There Will Be No Public vs. Private APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-open.png
author:
  name: kinlane
tags:
  - Public
  - APIs
---
As I continue to evovle my service composition definition, using my [3Scale API infrastructure](https://bit.ly/1cHBhd5), across my [microservices stack](https://kin-lane.github.io/master/), the thought of public vs private doesn’t even enter the equation. I am doing my APIs using the Internet pipes, so they are public by default—then using my service composition I define the layer that actually regulates what is openly accessible by the public, what resources have limited access, and specifically how much of any resource any single person can access.

When I’m working through my API Stack, the concept of public and private doesn't exist. This is a reality that plays out in conversations between people who don’t fully understand the world of API management—aka the tech blogosphere. If it has an http:// in front of the address, it is a public API—sorry. You need to secure it like it is public, and you need to approach service composition in a sensible way, that deals with identity, and access management across all your public infrastructure.

As we move towards a world where the Internet isn’t just on our desktop, laptop, tablet and mobile environments, it is everywhere in our homes, business, cars, and public space, there will be no separation between public and private API resources. Everything will be public, it will just be a matter of properly defining who has access, exactly how much they can consume, and in what way they can actually engage with the valuable API driven resources emerging all around us.

**Update:** This conversation seems to have generated some buzz, and here are some of the responses:

*   [Long Live The Private API (ProgrammableWeb)](http://www.programmableweb.com/news/long-live-private-api/analysis/2015/02/06)
[](http://www.programmableweb.com/news/long-live-private-api/analysis/2015/02/06)*   [](http://www.programmableweb.com/news/long-live-private-api/analysis/2015/02/06)[When You Are Ready For Nuanced Discussion About Who Has Access To Your API I Am Here (API Evangelist)](http://apievangelist.com/2015/02/06/when-you-are-ready-for-nuanced-discussion-about-who-has-access-to-your-api-i-am-here/)
[](http://apievangelist.com/2015/02/06/when-you-are-ready-for-nuanced-discussion-about-who-has-access-to-your-api-i-am-here/)*   [](http://apievangelist.com/2015/02/06/when-you-are-ready-for-nuanced-discussion-about-who-has-access-to-your-api-i-am-here/)[Public v’s Private v’s Internal APIs (3Scale)](https://www.3scale.net/2015/02/public-vs-private-vs-internal-apis/)
[](https://www.3scale.net/2015/02/public-vs-private-vs-internal-apis/)*   [](https://www.3scale.net/2015/02/public-vs-private-vs-internal-apis/)[API Axes - Categorizing APIs (Axway)](http://www.soatothecloud.com/2015/02/this-week-there-has-been-great.html)
[](http://www.soatothecloud.com/2015/02/this-week-there-has-been-great.html)