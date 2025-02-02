---
layout: post
title: How Do We Handle That Trailing Slash In Our API Endpoints?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-slash-icon.png
author:
  name: kinlane
tags:
  - ai
---
I am participating in several API focused [Slack channels](https://slack.com/) these days, which opens up entirely new channels for conversations across the API community. I think the private channel(s) gives people a safe place to talk about the challenges they face, but there are also some very educational conversations that occur, that should also be shared publicly. 

One of these conversations from yesterday was focused on how we handle the trailing slash in our endpoints, a conversation started by Nicolas Grenié ([@picsoung](https://twitter.com/picsoung)), [@3scale](https://twitter.com/3scale) hacker in residence, who asked about:

*   myapi.com/authors/ **vs** myapi.com/authors
*   myapi.com/authors/1/ **vs** myapi.com/authors/1

Something which Guillaume Laforge ([@glaforge](https://twitter.com/glaforge)) of [@Restlet](https://twitter.com/restlet) said, _"technically speaking, they are different resources… but practically speaking I think an API should accept both to do the obvious thing"_.

Then John Sheehan ([@johnsheehan](https://twitter.com/johnsheehan)) of [@Runscope](https://twitter.com/runscope) brough some simple wisdom to the conversation, _"save a byte, remove the slash, and redirect when it's present to the non-slashed version_". 

Closing up the conversation Darrel Miller ([@darrel\_miller](https://twitter.com/darrel_miller)) shared a previous blog post he had published, [the mystery of the trailing slash and the relative url](http://www.bizcoder.com/2009/02/24/the-mystery-of-the-trailing-slash-and-the-relative-url/), which he concludes with ensuring the trailing slash is present in all his urls.

I tend to flip-flop on topics like this, one month adding slashes to everything, and the next month running around removing them. It is my strange ebb and flow API design, and conversations like this help me draw a line in the sand, keeping my behavior consistent. I think I'm going to stick with making sure the slash is present, for no other reason than it looks better.

I'll keep trying to cherry-pick simple wisdom like this from our conversations, capturing and sharing some of the exhaust from these private Slack channels, making sure the wisdom of the crowd gets shared, while still respecting the private conversations that occur.