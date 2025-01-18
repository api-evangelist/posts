---
layout: post
title: Providing An oAuth Signature Generator Inline In Documentation
image: >-
  https://s3.amazonaws.com/kinlane-productions2/twitter/tweet-bird-blue-white.png
author:
  name: kinlane
tags:
  - Generator
  - Documentation
---
[![](https://s3.amazonaws.com/kinlane-productions2/twitter/tweet-bird-blue-white.png)](https://dev.twitter.com/rest/public)

I talked about [Twitter's inclusion of rate limits inline with documentation the other day, which is something I added as a new building block](http://apievangelist.com/2014/12/29/adding-rate-limits-for-apis-in-the-documentation-for-each-endpoint/), that API providers can consider when crafting their own strategy. Another building block I found while spending time in the Twitter ecosystem, was an oAuth signature generator inline within the documentation.

While browsing the [Twitter documentation](https://dev.twitter.com/rest/public), right before you get to the example request, you get a little dropdown that lets you select from one of your own applications, and generate an oAuth signature without leaving the page.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twitter-oauth-signature-generator.png)](https://dev.twitter.com/rest/public)

I am seeing oAuth signature generators emerge in a number of API platforms, but this is the first inline version I’m seeing. I’ve added this to my tentative list of oAuth and security building blocks I recommend, but will give some time before I add. I like to see more than one provider do something before I put it in there, but sometimes when it is just Twitter, that can be enough.