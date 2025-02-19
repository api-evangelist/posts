---
layout: post
title: A Limited Medium API Means I Do Not Always Curate What Is Published There
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/medium.png
atomdate: 2017-02-01T17:00:00.000Z
tags: []
---
One of the deciding factors of whether or not I put a new online service to use in my business depends on whether or not they have an API. Sometimes I have no choice in the matter, but if I have any say, a service must allow me to move data in and out of their system programmatically, keeping in sync with my own systems, otherwise I will not adopt the service as part of my regular operations.

One platform I have integrated into my operations is the blogging platform Medium. I handpick some of my content for publishing to Medium, pushing to my account from my own management system using their publishing API. This works well for me, as I require that all of my content, images, and videos are created and originate in my own systems, and then syndicate to other platforms secondarily via APIs--the only downside is that I can't actually pull data from Medium via their API into my management system.

The lack of a read API for Medium content doesn't really hurt me, as I [employ a POSSE philosophy](https://indieweb.org/POSSE), but it does hurt other publishers to the platform because I do not curate their content on Medium on a regular basis. I have to manually go to the Medium.com domain to read API related posts (unless it's a known blog RSS feed), which is something I do not always have the time for. I'm will always prioritize content from platforms that allow me to pull into my news curation systems via RSS, Atom, and APIs, and when I have time I will visit siloed platforms like Medium.

I understand that Medium is concerned about control and monetization of their platform, but a more complete and thoughtful API strategy that involves read and write APIs, embeddable solutions, and considering other leading content API strategies would actually benefit them, as well as their publishers. Not doing this will actually hurt publishers like me. The badly behaved folks will still just scrape what they need, and not having a read API will do nothing to stop this.