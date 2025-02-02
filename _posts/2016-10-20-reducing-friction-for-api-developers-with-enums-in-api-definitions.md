---
layout: post
title: Reducing Friction For API Developers With Enums In API Definitions
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_19_at_7.24.09_pm.png
atomdate: 2016-10-20T18:00:00.000Z
tags:
  - Definitions
  - Enums
  - Friction
  - Definition
  - Developers
---
I am going through [the Oxford Dictionaries API](https://developer.oxforddictionaries.com), learning about this valuable resource. Their onboarding process for registration, and learning about what the API does using interactive documentation, is very smooth. One of the things that really cuts the rough edges off learning about each API are the enums that are available for each path.

The parameters required for making calls to many of the paths, like language and country, have their enum values populated as part of [their API definition](https://developer.oxforddictionaries.com/swagger/spec/public_doc_guest.json). I look at numerous OpenAPI Specs in the course of my work and they rarely have values present for enum, providing critical default values for developers to use--eliminating some often serious frustration.

Not having the right values available when making even the simplest of API calls can be a significant point of friction when trying to get up and running using an API. While it may seem like a small thing, the work the [Oxford Dictionaries API](https://developer.oxforddictionaries.com) team has put into this level of detail for their API definitions will go a long way towards making their API resources more accessible and usable.