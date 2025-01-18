---
layout: post
title: Google Adjusts Adwords API Access Tiers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/google-adwords-300x125.jpeg
author:
  name: kinlane
tags:
  - Access
---
[![](https://s3.amazonaws.com/kinlane-productions2/google-adwords/google-adwords-300x125.jpeg)](https://developers.google.com/adwords/api/)

[Google is adjusting their pricing model for the Adwords API](http://googleadsdeveloper.blogspot.com/2013/01/new-simplified-adwords-api-pricing.html), acknowledging that having a free usage tier is important.  Making the API easier to access, while also ensuring a certain QOS.

Google has opted to go with two levels of API access:

*   **Basic** - Basic access is provided by default and allows up to 10,000 operations per day
*   **Standard** - Standard access is available to qualified developers and has no daily limit on operations

With both basic or standard access, there are no charges for [AdWords API](https://developers.google.com/adwords/api/) usage. Google is just looking to maintain quality over which developers can hammer on the API, while acknowledging a free tier allows for experimentation and innovation.  All you have to do is apply to be part of the standard level, if you reach limits of basic tier.

This is a good model for even a totally open data of free resource APIs. While you want your data and resources to be open, you also want to be able to offer a certain quality of service, and keep infrastructure costs to a minimum.

To do this, you will need to to secure the API interface to some degree.