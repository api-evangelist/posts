---
layout: post
title: Why is your RESTful API Separate From Your Website?
url: >-
  http://apievangelist.com/2011/06/10/why-is-your-restful-api-separate-from-your-website/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Web
  - REST
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/seevl_logo1.png)](http://seevl.net/)I was having a beer with [Dr. Alexandre Passant](http://twitter.com/#!/terraces) of [Seevl](http://seevl.net/) the other day, we were talking about music, APIs and the [Seevl API](http://developers.seevl.net/).

A while back I wrote a piece about Seevl titled, [With Seevl Music Discovery, the Website is the API](http://apievangelist.com/2011/05/27/with-seevl-music-discovery-the-website-is-the-api/). When building the Seevl API, instead of providing a separate API to access information, Seevl relies on content negotiation principles to deliver alternative representations of web pages.

As I was talking with Passant, I kept thinking about how RESTful APIs are often deployed separately from the web site or application. Both are using HTTP, and often deliver the same information, they are just intended for two different audiences and potential uses.

This is not a new idea. Flickr delivered the Flickr API this way in the early days, and web applications like [Tumblr](http://www.tumblr.com/ "Tumblr") offer their [API](http://www.tumblr.com/docs/en/api "API") and application side by side.

You can visit my Tumblr blog at: [http://kinlane.tumblr.com/](http://kinlane.tumblr.com/ "http://kinlane.tumblr.com/")

Simple add /api/read to the same URL: [http://kinlane.tumblr.com/api/read/](http://kinlane.tumblr.com/api/read/ "http://kinlane.tumblr.com/api/read/")

And you you get back an XML representation of my Tumblr blog.

Add /JSON to that URL: [http://kinlane.tumblr.com/api/read/json](http://kinlane.tumblr.com/api/read/json)

And you get back a JSON representation of my Tumblr blog.

In most cases, it does not makes sense for a web site or application and its RESTful API to be separated, for some reason many developers still see them as two completely separate things.

In my opinion, if the HTML, XML, and JSON representations of information are deployed side by side. And users know they can simple adjust the URL to get other formats, the type of users that hack on, embed, and redistribute information from APIs will grow beyond the developer community.

###### Related articles

*   [With Seevl Music Discovery, the Website is the API](http://apievangelist.com/2011/05/27/with-seevl-music-discovery-the-website-is-the-api/) (apievangelist.com)
*   [Posterous, From SaaS to PaaS Using an API](http://apievangelist.com/2011/06/10/posterous-from-saas-to-paas-using-an-api/) (apievangelist.com)
*   [Discovery Services for Common APIs](http://apievangelist.com/2011/05/21/discovery-services-for-common-apis/) (apievangelist.com)