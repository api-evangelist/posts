---
layout: post
title: Splitting My Blog API Into Two Separate APIs For News And Analysis
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-blog-to-news.png
author:
  name: kinlane
tags:
  - My
  - Analysis
  - Blog
  - News
  - APIs
---
When I started API Evangelist, I knew I didn't want to use WordPress or other common CMS, so I developed my own API, and page and blogging CMS. During the latest migration of my internal API infrastructure, I'm rebuilding everything as a [single stack of APIs](https://kin-lane.github.io/master/) that I  can use to operate API Evangelist. Part of this process is breaking down legacy systems, into the small possible unit of value, something I consider deeply as I rebuild each API.

It started with my link system, which I broke up into [link](https://kin-lane.github.io/link/), [curation](https://kin-lane.github.io/curated/), [keyword](https://kin-lane.github.io/keyword/), and [linkrot](https://kin-lane.github.io/linkrot/) APIs. Now I'm eyeballing my legacy blog API, which historically I also use to publish news pieces to [API.Report,](http://api.report) and sections that I syndicate to white papers I have published. My goal with my blogging API is to get it down to its simplest possible functionality--publishing posts to my blogs.

With this in mind I forked my newer [blog API](https://kin-lane.github.io/blog/), and labeled it my [news API](https://kin-lane.github.io/news/). Right now, my news API behaves very similar to my blog, but it already has new features like automated pulling of press releases, extraction of proper nouns, and a few other bells and whistles that make my news management workflow as painless as possible. Over time I may share some of the features with the blogging API, I think my news and analysis worlds will remain separate beasts, from here forward.