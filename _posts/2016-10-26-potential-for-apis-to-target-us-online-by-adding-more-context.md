---
layout: post
title: Potential For APIs To Target Us Online By Adding More Context
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_25_at_1.08.16_pm.png
atomdate: 2016-10-26T16:00:00.000Z
tags:
  - APIs
  - ddi
  - Context
---
Many folks see me simply as a cheerleader for APIs when in reality I am more of an evangelist for the bad that can happen with APIs. I believe that sharing of data, content, and algorithms using web APIs has the potential for good, but in reality, they are often be used for doing some pretty shady shit. 

An example of this is found in my inbox this morning, and I'm sure is something everyone will encounter at some point in their daily lives. It is an email for an undelivered Fedex package, which I know better than to click on, but sadly I think it is one that many folks will fall for.

Why do they fall for this? Because the email potentially has relevance, as I just ordered a handful of packages from Amazon, which were being shipped via Fedex (I do not order much online). Using the FedEx API, anyone can query the status of a package. I'm assuming that there are folks out there who are scanning for the presence of delivering notifications--I'm not up to speed on the details of how you can do this. I'm unsure if they can get my email alongside this information, but I don't think this matters. I think they can correlate data about where I live, and the fact I'm receiving packages--whether the email came from API, or through other forms intelligence, it doesn't matter. 

My point is more around the fact that APIs are increasingly opening up signals about our daily lives, providing a wealth of context for phishing campaigns, increasing the chance that people will fall for these attacks. My solution to this problem does not involve a knee-jerk response to providing APIs, I am just looking to just warn API providers that they should be monitoring for this type of behavior on top of an API, and we should help the average email users and Amazon package receiver that these dangers exist. Everyone should pause and think deeply about each link or file attachment we click on--no matter how relevant it might seem in our daily flow.