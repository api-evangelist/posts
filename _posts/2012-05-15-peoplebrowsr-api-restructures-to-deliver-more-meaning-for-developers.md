---
layout: post
title: PeopleBrowsr API Restructures to Deliver More Meaning for Developers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/kr_pb_logo.png
author:
  name: kinlane
tags:
  - Developers
  - People
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/peoplebrowsr/kr_pb_logo.png)](https://developer.peoplebrowsr.com/ "PeopleBrowsr Kred API")

Explaining to developers, what an API does, can be hard. How you describe your API, the underlying endpoints, can make or break user adoption. You shouldn’t be afraid to evolve, and keep trying to find the sweet spot in both the language and branding that you use in your API area.

I saw an example of this today, with the restructuring of [PeopleBrowsr's APis](https://developer.peoplebrowsr.com/). When I first starting playing with PeopleBrowsr's APIs, they were broken into 3 separate APIs:

*   PeopleBrowsr API
*   Kredentials API
*   Kred API

On the surface its really hard to know what each of these APIs does, but after I dove in I saw lots of value within individual methods, but I really had to spend time, getting to know each method, one by one. I saw the value, but the structure and presentation of the PeopleBrowsr API area, and the way the interfaces were assembled, didn’t immediately speak to this value.

Today they’ve restructured their three APis into a single API, dubbed the [PeopleBrowsr Kred API](https://developer.peoplebrowsr.com/ "PeopleBrowsr Kred API"), and grouped all the API methods into four logical groups:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/peoplebrowsr/kred-dashboard.png)

*   **[Find Influencers](https://developer.peoplebrowsr.com/find "Find Influencers")** - Pinpoints influential people on any subject or within communities connected by shared interests or affinities.
*   **[Deep Analytics](https://developer.peoplebrowsr.com/deep "Deep Analytics")** - Author-based analytics which includes Kredentials (a single-screen summary of anyone’s social presence), historical Kred scores, reach, and friends & followers.
*   **[Action Analytics](https://developer.peoplebrowsr.com/action "Action Analytics")** - Aggregated social data metrics for any keyword, hashtag or @name, including mention counts, word clouds and hashtag clouds.
*   **[Global Kred Score](https://developer.peoplebrowsr.com/kred "Global Kred Score")** - Appends global Kred scores to @names or twitter IDs in web-based applications.

This new presentation immediately helps me understand which methods I should use based upon my goals. PeopleBrowsr took the time to understand how developers were using their API, and worked to present the API in a way that best speaks to this.

PeopleBrowsr also took the time to understand the value delivered via their API in each of these new areas and restructure pricing to reflect this value:

*   Find Influencers - $1.00 per call
*   Deep Analytics - .10 cents per call
*   Action Analytics - .01 cent per call
*   Global Kred Score - Free

Only time will tell if the new structure of the [PeopleBrowsr Kred API](https://developer.peoplebrowsr.com/ "PeopleBrowsr Kred API") will truly speak to developers that are looking to harvest insights from social media, but I like what they did to understand the needs of their developers, and work to better deliver the API presentation, documentation and pricing to reflect this need.

Make sure you are tuned into what your API developers are looking for and aren’t afraid to evolve and better serve your developer community.

_Disclosure:  I have consulted for PeopleBrowsr in the past._