---
layout: post
title: Different API Rate Limits For Verified And Unverified Free Tiers Of Access
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/factual-developers.png
author:
  name: kinlane
tags:
  - Rate Limits
  - Diff
  - Access
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/factual-developers.png)](http://developer.factual.com/data-docs/)

One of the approaches to [API plans](http://plans.apievangelist.com/) I was studying recently is from the data provider [Factual](http://developer.factual.com), who provides access to places, products, and other valuable data-sets. I felt Factual had a pretty straightforward approach to the free tier of access for their platform, that was worthy of sharing.

[When you visit the page for the Factual data services](http://developer.factual.com/data-docs/), they offer two distinct levels of free access to data resources:

*   **Free (unverified) -** Up to 100 read requests per day. No access to resolve or write APIs.
*   **Free (verified) -** Up to 10,000 requests per day for most tables.

When I look at the plans for many APIs, they almost always have free tiers of access, but normally there is just one dimension to it. You get a certain amount of API calls per second, day, or month, for free. What is unique about the approach from Factual is they offer another free level, which gives you more API calls if you verify yourself--this is a pretty interesting approach, that other providers should consider.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/factual-data-services-overview.png)](http://developer.factual.com/data-docs/)

You want free access, but don't want to verify yourself, and you get 100 red requests per day, but if you go through [the verification process](http://www.factual.com/keys/verify), you get 10,000 requests per day--a pretty significant difference. I am talking with a number of providers lately about how they are tightening up the free tiers of API access, and working to incentivize users to become paying customers, which made me take another look at Factual's approach.

I think free access to APIs is essential to operations, but I think providers need to be more thoughtful about just how much of their resources they give away at this tier. It is OK if you want to get to know your consumers, before you give away too much of the farm. There can be a lot of bad behavior from API consumers at the free tier level, and developer verification is one way you can minimize the impact on your API operations.