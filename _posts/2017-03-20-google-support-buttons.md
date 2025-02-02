---
layout: post
title: Google Support Buttons
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_20_at_9.47.56_am.png
atomdate: 2017-03-20T16:00:00.000Z
tags:
  - Support
  - Buttons
---
[I talked about the gap between developer relations and support at Google](http://apievangelist.com/2017/03/15/the-relationship-between-dev-relations-and-support/), something that [Sam Ramji (@sramji) has acknowledged is being worked on](http://apievangelist.com/2017/03/15/the-relationship-between-dev-relations-and-support/). Support for a single API can be a lot of work and is something that is exponentially harder with each API and developer to add to your operations, and after [looking through 75 of the Google APIs this weekend](http://google.stack.network/), you see evidence that Google is working on it.

While there are many Google APIs that still have sub-standard support for their APIs, [when you look at Google Sheets you start seeing evidence of their evolved approach to support](https://developers.google.com/sheets/api/support), with a consistent set of buttons that tackle many of the common areas of [API support](http://support.apievangelist.com). For general questions, Google provides two buttons linked to StackOverflow:

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_20_at_9.41.01_am.png)

The search just drops you into Stack Overflow, with the tag "google sheets api", and the ask a new question drops you into the Stack Overflow submit new question form. For bug reporting, they provide a similar set of buttons:

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_20_at_9.45.01_am.png)

The search and report bug buttons drop you into the Google Code issues page for Google Sheets, leveraging the issues management for the Gooogle Code repository--something that can just as easily be done with Github issues. Then lastly, they provide a third set of buttons when you are looking to submit a feature:

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_20_at_9.47.56_am.png)

Even though there is a typo on the first button, they also leverage Google Code issue management to handle all feature requests. Obviously working to centralize bug and feature reporting, and support management using Google Code--something I do across all my API projects using Github organizations, repositories, and their issue management. I'm guessing Google Support is tapping into Google Code to tackle support across projects at scale.

These support buttons may seem trivial, but they represent a more consistent approach by the API giant to be consistent in how they approach support across their API offerings--something that can go a long way in my experience. It gives your API consumers a familiar and intuitive way to ask questions, submit bugs, and suggest new features. Equally as important, I'm hoping it is also giving Google a consistent way to tackle support for their APIs in a meaningful way, that meets the needs of their API consumers.