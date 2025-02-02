---
layout: post
title: OneBusAway as a Model for Other Transit APIs
url: >-
  http://apievangelist.com/2011/09/12/onebusaway-as-a-model-for-other-transit-apis/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/OneBusAway.png
author:
  name: kinlane
tags:
  - Transit
  - APIs
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/onebusaway/OneBusAway.png)](http://onebusaway.org/)The response to Sundays post about the [Need for More Transit APIs](http://apievangelist.com/2011/09/11/the-need-for-city-transit-apis/ "Need for More Transit APIs") was impressive.  I receive quite a few emails and tweets about other APIs, and it started a [good discussion on Hacker News](http://news.ycombinator.com/item?id=2984807 "good discussion on Hacker News"). Adding more targets for my [public transit API](http://apievangelist.com/industries/public_transit.php "public transit API") research.  
  
While doing my research, I just finished looking at [OneBusAway](http://onebusaway.org/), a provider of real-time transit information for the Puget Sound region.  The API was started by University of Washington students to support research on improving the usability of public transportation.  
  
At first look, OneBusAway seems like the start of a great model for other city and regional transit API initiatives to follow.   
  
First they start with a RESTful API providing data about transit agencies, routes, arrivals, stops and tripping planning, using an application key for authentication and all the documentation and tools you need to successfully integrate with the API.  
  
Next OneBusAway provides a very complete list of tools to make it easier to use public transit

*   **Web** - A map-based web interface for finding stops, routes, and real-time arrival information.
*   **Phone** - A touch-tone phone interface for real-time arrival information.
*   **SMS** - A text-messaging interface for real-time arrival information.
*   **iPhone** - A native OneBusAway client for iPhones, with location-aware features.
*   **Android** \- A native OneBusAway client for Android phones, with location-aware and notification features.
*   Windows Phone 7 - A native OneBusAway client for Windows Phone 7 phones.
*   **Mobile Web** - Real-time arrival information optimized for mobile web browsers and text-only web browsers.
*   **Explore** - The Explore Tool lets you search for nearby restaurants, businesses, parks, and other amenities that are easily accessible by public transit.

In addition to providing a API and a full set of interfaces for accessing data from the API, they open-source it all, which means they release all the code that powers OneBusAway, for anyone to use.   That includes their [iPhone](http://code.google.com/p/onebusaway-iphone "iPhone App") and [Android](http://code.google.com/p/seattle-bus-bot/ "Android App") mobile applications, letting other developers take advantage of all the work that's been put into OneBusAway.  
  
The OneBusAway website is very simple, yet contains all the essential tools and information any local transit would need to be successful.  Before hacking on the transit API and mobile tools for your local community I recommend taking a look at OneBusAway site for pointers.