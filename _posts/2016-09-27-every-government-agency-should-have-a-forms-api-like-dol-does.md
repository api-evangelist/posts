---
layout: post
title: Every Government Agency Should Have A Forms API Like DOL Does
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_09_26_at_4.59.29_pm.png
atomdate: 2016-09-27T20:00:00.000Z
tags:
  - Forms
  - Government
  - Agency
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_09_26_at_4.59.29_pm.png)](http://developer.dol.gov/others/form)

[I was taking another look at the API efforts out of the Department of Labor (DOL)](http://apievangelist.com/2016/09/26/taking-another-look-at-the-department-of-labor-api-efforts/), to help refresh my awareness of what they are serving up, and I came across the [DOL Forms API](http://developer.dol.gov/others/form). The API does what it says, providing access on " the most frequently requested Department of Labor forms", which seems like to me should be the default for ALL government agencies.

The API returns some valuable details about each agency from including OMB number, URL, file extension, file size, and other meta information like a description, tags, and revision. I know that many in the API community would like all forms to be APIs, but I would be happy if we just started by making the concept of a forms API default across all government agencies first.

Before I dig into this individual API, I'm thinking that I will craft an OpenAPI Spec for the DOL Forms API, and see if there are any other form APIs available across US federal agencies that I should be considering. With a little work maybe I can merge them into a single open API definition that any government agency can follow, when thinking about which APIs they should be making available.