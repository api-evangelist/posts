---
layout: post
title: Discovery Services for Common APIs
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Discovery
  - Discover
  - APIs
  - Services
---
I just wrote about the potential of[open source API billing and traffic control](http://apievangelist.com/2011/05/21/open-source-api-billing-and-traffic-control/ "open source billing and traffic control") building blocks, if Google would open source their [Google API Console](http://apievangelist.com/2011/05/21/google-apis-console/ "API Console"), like they did with the [Google API Explorer](http://apievangelist.com/2011/05/21/google-apis-explorer/ "Google API Explorer").

I started bundling in thoughts on [Google APIs Discovery Service](http://code.google.com/apis/discovery/index.html "Google APIs Discovery Service") into that post, but then realized it is a separate issue, needing its own blog post.

First, Google isn't about to open source Google API Discovery Service. They issue developers of the Google APIs Discovery Service a [patent license](http://code.google.com/apis/discovery/patent-license.html "patent license"). I couldn't find any more details tonight, but I'm assuming it puts this service in a different category than the rest.

I wrote an [overview of Google APIs Discovery Service](http://apievangelist.com/2011/05/21/google-apis-discovery-service/ "overview of the Google APIs Discovery Service"), but essentially it is a way to discover and describe Google APIs using an API. Think [Web Application Description Language (WADL)](http://en.wikipedia.org/wiki/Web_Application_Description_Language "Web Application Discovery Language (WADL)"), with a API to access, and focused only on supported Google APIs.

As the number of web APIs grow, the need for a discovery APIs and a standard description language will only grow. We wil see services like Google APIs Discovery Service popup within specific industries and API areas.

You see potential for this with [Mashsery's API Network,](http://developer.mashery.com/apis "Mashery's API Netowrk") and even more evidence with [Mashape's Marketplace](http://www.mashape.com/index "Mashape's Marketplace").

There aren't many companies with the number of APIs that Google has, so you won't see any single company building an API discovery service like that.

However, I'd like to see API discovery services for cloud computing, social media, location-based, and telcommunication APIs appear making it easier for developers to discover, build code libraries, and integrate with common APIs.