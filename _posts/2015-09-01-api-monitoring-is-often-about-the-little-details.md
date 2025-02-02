---
layout: post
title: API Monitoring Is Often About The Little Details
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/api-fortress.png
author:
  name: kinlane
tags:
  - Monitoring
  - ai
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/api-fortress.png)](http://apifortress.com/landing/)

As I make my way across my research projects, I'm learning more about how [companies like Metacert can deliver valuable security services to API providers](http://apievangelist.com/2015/09/01/breaking-down-the-layers-of-api-security-and-considering-link-integrity/). I'm also getting a better idea of the nuance that goes into monitoring APIs, from [API Fortress](http://apifortress.com/landing/). 

[API Fortress has very interesting API monitoring story, derived from the Etsy API](http://apifortress.com/even-billion-dollar-brooklyn-companies-arent-perfect/). This isn't the API monitoring story you'd think, it isn't about the overall stability of the Etsy API, and whether its up or down, it is about the details of API payloads, and inconsistencies they found scanning the API.

Through a payload toast of the Etsy API, the API Fortress team found an occurrence of NULL values in 3,600 out of 50,100 items scanned--which negatively affected what results that were actually accessible via the API vs the Etsy interface. Something that can result in loss of exposure for products, translating into reduced sales. 

While full API outages are definitely front and center when you think about monitoring, things like this could potentially drain revenue over a long period of time, in a way that makes it very difficult to discover. I can only imagine, when you are doing things at the scale Etsy is, this kind of monitoring could plug some pretty big holes in your sales bucket.

[API Fortress is already part of my API monitoring research](http://monitoring.apievangelist.com/companies.html), but just like with API security, I am going to add content analysis, and pattern matching like this as building blocks for API monitoring. After I make my way through all of the current companies I have listed in my API monitoring, I will publish the master list of common building blocks I've collected.