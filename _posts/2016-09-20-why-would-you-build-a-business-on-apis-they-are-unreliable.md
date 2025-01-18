---
layout: post
title: Why Would You Build A Business On APIs? They Are Unreliable!
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-unstable.png
atomdate: 2016-09-20T16:00:00.000Z
tags:
  - Business
  - APIs
---
People love to tell me how unreliable APIs are, while also echoing this sentiment across the tech blogosphere. I always find it challenging [to reconcile how the entrenreurs who spread these tales choose to put the blame on the technology](http://apievangelist.com/2016/08/05/reconciling-how-reliable-apis-are-while-also-embracing-tone-set-by-vc-investment/), and not the companies behind the technology, or more appropriately the investment behind the companies. APIs are just a reflection of what is going on already within a company, and are good, nor bad--they are just a tool that can be implemented well, or not so well.

I was taking some time this last week to work on my API monitoring system, which I call Laneworks. In addition to having my own API stack, [I depend on a variety of other APIs to operate my business](http://stack.apievangelist.com/companies.html). As I was kicking the tires, poking around the code for some of my most valuable integrations I found myself thinking about the stability and reliability of APIs, and how stable some APIs have been for me.

Since 2011 I have stored ALL heavy objects (images, video, audio) used in my API monitoring and research on S3. I have NEVER had to update the code. Since 2012 I have used Pinboard as the core of my API curation system, aggregating links I favorited on Twitter, and added using my browser bookmarklet--again I have NEVER updated the code that drives this. Since 2013 all of my public websites run on Github using Github Pages, employing the Github API to publish blog posts, and all other content and data used in my research.

The Amazon S3, Pinboard, and Github APIs make my business work. Three suppliers who have been working without a problem for 5, 4, and 3 years. The only thing I have had to do is pay my bill, and keep my API keys rotated, and the reliable API vendors to the rest. Storing images, video, and audio, curated the news and other stories I share with you and publish the blog posts and web pages you use to browse my API research. So explain to me, why would you want to build a business on APIs, when they are so unreliable?