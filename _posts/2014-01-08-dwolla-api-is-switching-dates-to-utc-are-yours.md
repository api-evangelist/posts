---
layout: post
title: Dwolla API Is Switching Dates to UTC, Are Yours?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/timezone_UTC.png
author:
  name: kinlane
tags: []
---
The [Dwolla API](https://www.dwolla.com/developers) sent out an email to developers today, letting us know that, "Effective January 21, 2014, all timestamps returned by REST API endpoints will be in UTC format.” Dwolla is looking to fix the issue of ambiguous timestamps, where the time zone is variable and not indicated in the timestamp.

Currently the timestamps look like: _9/20/2013 12:45:07 AM_

After the switch to UTC they will look like: _2010-11-12T13:14:15Z_

Formatted according to the [ISO 8601 standard](http://en.wikipedia.org/wiki/ISO_8601). This is a much cleaner, internationalized approach. I’ve seen this mistake a lot, and still do it myself on some new systems. As an self-centered american, we tend to think the world evolves around us, and we don’t think about these scaling issues ahead of time.

Are your API data formats in UTC? No? Maybe it is something you want to change before you grow too big and get too many developers on your API.