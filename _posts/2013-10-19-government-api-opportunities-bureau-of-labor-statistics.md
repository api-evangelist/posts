---
layout: post
title: 'Government API Opportunities: Bureau of Labor Statistics'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bureau-of-labor-statistics-logo.png
author:
  name: kinlane
tags:
  - Labor
  - Government
  - Statistics
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/bureau-of-labor-statistics/bureau-of-labor-statistics-logo.png)](http://www.bls.gov/developers/home.htm)

I'm working to expand my awareness of APIs in our federal government by spending time each week discovering, reviewing and trying to brainstorm ways to expand and evolve existing government API efforts.

Today I was reviewing the [Bureau of Labor Statistics API](http://www.bls.gov/developers/home.htm), where I was pleased to find this valuable labor data available via single series, multiple series, one or more series specifying years. The API is a pretty straightforward web API, which could use some polishing, but overall it provides machine readable access to this very important data as I would expect.

When I look at federal government APIs I'm trying to find at least one or two ways to help move the API forward, either as constructive criticism for the API providers or ways that the public (me included) can help evolve the community or the API itself from the outside.

My current contributions to the Bureau of Labor Statistics is to add support for the Series ID to the API stack. The Series ID is the single, central parameter you pass to each of the API endpoints, but nowhere does it link to or help the users understand the Series ID, which plays a central role in API operations.

This type of omission by API providers is common. You have the domain expertise in your area, you know the Series ID is the central character, but to people stumbling across or intentionally pulling up the Bureau of Labor Statistics API, this might not be common knowledge.

With this in mind, the roadmap of the Bureau of Labor Statics API should include an API for all of the building blocks and meta data for the Series ID. [There is a lot of rich data available on a Series ID](http://www.bls.gov/help/hlpforma.htm), and while it would take a significant amount of work to develop additional APIs around this data, I think it would significantly add value to the Bureau of Labor Statistics API and increase adoption.

I'm adding this to my list of potential future projects, which could be done external to the Bureau of Labor Statistics, but also could be something they may consider doing internally as well.