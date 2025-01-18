---
layout: post
title: Facebook API Changes to Be in Sync with OAuth
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Change
  - OAuth
  - Facebook
  - Changes
---
In order to be compliant with the [OAuth spec](http://tools.ietf.org/html/draft-ietf-oauth-v2-20 "oAuth Spec"), [Facebook is making changes to their auth APIs](http://developers.facebook.com/blog/post/533/ "Facebook is making changes to their auth APIs"). As part of this update, they will be deprecating 'code\_and\_token' and need developers to use 'code%20token'. Everything else is identical, just replace '\_and\_' with encoded'%20'.

For example, this call:

It will need to change to:

Developers are required to make this change by November 5th, 2011, and Facebook has [updated their roadmap](http://developers.facebook.com/roadmap/ "updated their roadmap") to reflect this.

The communication coming from Facebook Operation Developer Love, and their willingness to [open up their API roadmap](http://apievangelist.com/2011/08/01/how-open-should-we-be-with-our-api-road-maps/ "open up their roadmap") is something other API owners should consider in their own ecosystem.