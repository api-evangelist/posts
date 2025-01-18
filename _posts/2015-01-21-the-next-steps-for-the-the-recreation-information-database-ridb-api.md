---
layout: post
title: The Next Steps For The The Recreation Information Database (RIDB) API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ridb-api.png
author:
  name: kinlane
tags:
  - Database
  - Data
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ridb-api.png)](http://ridb-dev.nsitellc.com/docs/api/v1/#introduction)

I referenced the [Recreation Information Database (RIDB)](https://ridb.recreation.gov/), in my story late last year, when I was [asking for your help to make sure the Department of Agriculture leads with APIs in their parks and recreation RFP](http://apievangelist.com/2014/10/16/i-need-help-to-make-sure-the-dept-of-agriculture-leads-with-apis-in-their-parks-and-recreation-rfp/). I'm not exactly sure where it fits in with the RFP, because the RIDB spans multiple agencies.

Here is the description from the RIDB site:

> _RIDB is a part of the Recreation One Stop (Rec1Stop) project, initiated as a result of a government modernization study conducted in 2004. Rec1Stop provides a user-friendly, web-based resource to citizens, offering a single point of access to information about recreational opportunities nationwide. The web site represents an authoritative source of information and services for millions of visitors to federal lands, historic sites, museums, and other attractions/resources._

When I wrote the post last October, I referenced the [PDF for the REST API Requirements for the US Forest Service Recreation Information Database (RIDB](http://ridb-dev.nsitellc.com/docs/api/v1/RIDB_API_Requirements_20150113.pdf)), but this week I got an update, complete with [fresh links to a preview of a pretty well designed API](http://ridb-dev.nsitellc.com/docs/api/v1/#introduction), complete with [documentation developed using Slate](https://github.com/tripit/slate).

I haven’t actually hacked on the endpoints, but I took a stroll through the docs, and my first impression was it is well designed, and robust, including resources for organizations involved with the RDB, recreational areas, facilities, campsites, permit entrances, tours, activities, events, media, and links. The RIDB documentation also includes details on errors, pagination, version, and a data dictionary, and the on-boarding was frictionless when looking to get a key.

Everything is in dev mode with the RIDB API, and the team is looking for feedback. I’m not entirely sure they wanted me to publish as story on API Evangelist, but I figure the more people involved the better, as I’m not sure when I’ll get around to actually hacking on the API. I’m happy to see such a quick iteration towards the next generation of the RIDB API, and it makes me hopeful to be covering so many new API efforts out of the federal government in a single day.