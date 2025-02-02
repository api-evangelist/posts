---
layout: post
title: Query Parameter Determining Which Fields Are Queried For API Call
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-question-mark.png
author:
  name: kinlane
tags: []
---
I was taking a look through the [NewsCred API](http://www.newscred.com/developer/docs) yesterday and there was a parameter I have seen before, but find interesting, and wanted to share with you. It was a field called query\_fields, which you could include the fields you wished to have searched, using a keyword provided in the parameter “q”.

You often see a parameter which determines which fields I get back with my response, but I like the concept of have a parameter to choose which fields I want searched in the first place. I think it is a simple, parameter based way to give developers more control over their API calls, in a way that will make sense to a wide audience.

Now I need to figure out a way to aggregate these simple little [API design](http://design.apievangelist.com) tricks and make them available to readers when they are designing their APIs. My goal is to help API designers make their APIs as powerful as possible, while keeping the surface area as simple as possible along the way.