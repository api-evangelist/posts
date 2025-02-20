---
layout: post
title: HTML to Markdown API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/fuck-yeah-markdown-api.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/fuck-yeah-markdown/fuck-yeah-markdown-api.png)](http://fuckyeahmarkdown.com/#api)

I'm slowly getting my blog world in order after the move from my own proprietary blogging platform to using Github + Jekyll hosted using Github Pages.

I've been using HTML pages for blog posts at [API Evangelist](http://apievangelist.com "API Evangelist"), [Kin Lane](http://kinlane.com) and other blogs, with 3 years of blog posts at API Evangelist and about 6 years at Kin Lane. There is a lot of legacy content to move from my EC2 driven blogs to Github.

Every time I would try and publish the posts as is, Github would reject my commit when it hit posts that didn't have compliant HTML, making it near impossible to publish everything. I was trying to clean up as much of it as I could, but it wasn't good enough. I needed a way to convert to markdown and clean house.

Thankfully, Ben Balter([@BenBalter](/admin/blog/BenBalter)) from Github recommend a very cool API called [Fuck Yeah Markdown](http://fuckyeahmarkdown.com/#api), which takes my legacy HTML pages and converts it to much cleaner markdown.

When I first started using Jekyll I wasn't really sold on markdown, in my mind I didn't mind hand rolling my HTML tags--I have been doing it for years. After Ben suggested I use markdown in my newly minted Github Jekyll projects I started to see the benefits. It is way easier to manage content that is being published as a blog, page or otherwise when it is markdown.

I am just finishing up converting all of API Evangelist and Kin Lane to use markdown, and will be using the [Fuck Yeah Markdown API](http://fuckyeahmarkdown.com/#api) to convert blog posts from HTML generated in my blog editor to markdown before publishing to Github.