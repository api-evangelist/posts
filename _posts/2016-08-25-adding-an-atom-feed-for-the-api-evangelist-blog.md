---
layout: post
title: Adding An Atom Feed For The API Evangelist Blog
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-atom-feed.png
atomdate: 2016-08-25T16:00:00.000Z
tags:
  - API Evangelist
  - Blog
  - Evangelist
  - ddi
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-atom-feed.png)](http://apievangelist.com/atom.xml)

The API Evangelist platform is far from perfect, there are always portions of it that just aren't finished yet (always work in progress). I am always thankful that people put up with my API Evangelist workbench, always changing and evolving. Even with this unfinished status, there are some unfinished or broken elements that are just unacceptable--one of these is the lack of an Atom feed for my blog.

Thankfully I have other folks in the space who are kind enough to remind me of what's broken when it comes to specifications, and ultimately what is broken on my website.

> all very much agreed: syndicate everything! but if you're setting it up, please use [#Atom](https://twitter.com/hashtag/Atom?src=hash). [#RSS](https://twitter.com/hashtag/RSS?src=hash) simply is broken. [https://t.co/Hm9DHZ17ud](https://t.co/Hm9DHZ17ud)
> 
> — Erik Wilde (@dret) [August 16, 2016](https://twitter.com/dret/status/765674961105133568)

Thanks Erik for gently pushing back. In response I went ahead and [added an Atom feed for the API Evangelist blog](http://apievangelist.com/atom.xml), to add to the existing RSS feed. I made sure the Atom feed validated and added a link relation to the header of the blog. I am going to do the same to all my individual research areas with the next push of their website template.

Syndication of my writing is important, so my blog is now available via [RSS](http://apievangelist.com/blog.xml), [Atom](http://apievangelist.com/atom.xml), and [JSON](http://blog.api.kinlane.com/blog/). Thanks Erik for helping make sure the web is not entirely broken. ;-)