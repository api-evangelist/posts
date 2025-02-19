---
layout: post
title: Considering Standards In Our API Design Over Being A Special Snowflake
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_spectrum_database.png
atomdate: 2017-03-21T20:00:00.000Z
tags:
  - Design
  - Standards
---
Most of the APIs I look at are special snowflakes. The definition and designs employed are usually custom-crafted without thinking other existing APIs, or standards that already in place. There are several contributing factors to why this is, ranging from the types of developers who are designing APIs, to incentive models put in place because of investment and intellectual property constraints. So, whenever I find an API that is employing an existing standard, I feel compelled to showcase and help plant the seeds in others minds that we should be speaking a common language instead of always being a special snowflake.

One of these APIs that I came across recently was the [Google Spectrum Database API](https://developers.google.com/spectrum/v1) which has employed a standard defined by the [IETF Protocol to Access White Space (PAWS)](https://datatracker.ietf.org/doc/draft-ietf-paws-protocol/).  I wouldn't say the API is the best-designed API, but it does follow a known standard, that is already in use by an industry, which in my experience can go further than having the best-designed API. The best product doesn't always win in this game, sometimes it is just about getting adoption with the widest possible audience. I am guessing that the Google Spectrum Database API is targeting a different type of engineering audience than their more modern, machine learning and other APIs are, so following standards is probably more of a consideration.

I wish more APIs would share a little bit about the thoughts that went into the definition and design of their APIs, sharing their due diligence of existing APIs and standards, and other considerations that were included in the process of crafting an API. I'd like to see some leadership in this area, as well as some folks admitting that they didn't have the time, budget, expertise, or whatever the other reasons why you are a special snowflake. It is a conversation we should be having, otherwise, we may never fully understand why we aren't seeing the adoption we'd like to see with our APIs.