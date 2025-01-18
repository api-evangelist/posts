---
layout: post
title: >-
  Your API Access Replicated Into Multiple Regions Around The Globe For
  Additional Charge
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/algolia-world-wide-replication-slider.png
author:
  name: kinlane
tags:
  - Regions
  - Access
  - ddi
---
I am finding all sorts of interesting examples as I push forward my [API plans research](http://plans.apievangelist.com/), where I study the API planning approaches employed by over 50 of the leading APIs. One of the items, on my API plan story list, comes from [Algolia](https://www.algolia.com/), the search API, who I think has [one of the more sophisticated API plans](https://www.algolia.com/pricing) of all of the APIs I looked at this round. 

One of the cool aspects I found [was a "world-wide replicator" option on the pricing page for Algolia](https://www.algolia.com/pricing). The feature is interesting to me because of the UX / UI approach employed, as well as the concept of offering API replication to different regions as a dimension of API plans. You have to admit the separate section, as part of API pricing, is pretty forward leaning, and not something you see often.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/algolia-world-wide-replication-slider.png)

What is even cooler, is that when you move the slider, increasing the number of regions the API is available in, your price per package is adjusted to include the replication. I believe they apply just a flat rate increase for each plan level, but I could see this be something that has unique cost per region (ie. US being more expensive than EU). As the debate about in-country data storage and compute evolves, I think this will become pretty significant.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/algolia-world-wide-replication-slider-2_png.png)

The goal for the Algolia world-wide replication, is to decrease latency for end-users, when searches are made. Providing up to five separate regions around the globe, where your API can be deployed, as part of your Algolia API plan. While not something that could be accomplished by every API, the approach is in alignment with wholesale API movements I've talked about before.

[Using API infrastructure like 3Scale offers](http://3scale.net), you could establish this type of variability in plan levels, that are tailored for containerized-enabled, world-wide replication similar to what Algolia offers. [I have added world-wide or regional replication as one of the API plan building blocks](http://plans.apievangelist.com/building-blocks.html), and will keep documenting other examples of this very technical, but potential business and politically driven aspect of the API plan line of the life cycle I am working to define.