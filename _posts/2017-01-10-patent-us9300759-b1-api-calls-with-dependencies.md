---
layout: post
title: 'Patent US9300759 B1: API Calls With Dependencies'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_09_at_11.11.55_pm.png
atomdate: 2017-01-10T20:00:00.000Z
tags:
  - Dependencies
---
I understand that companies file for patents to build their portfolios, and assert their stance in their industry, and when necessary use patents as leverage in negotiations, and in a court of law. There are a number of things that I feel patents logically apply to, but I have trouble understanding why folks insist on patenting things that make the web work, and this whole API thing work.

One such filing is [patent number US9300759 B1](http://patft.uspto.gov/netacgi/nph-Parser?Sect2=PTO1&Sect2=HITOFF&p=1&u=/netahtml/PTO/search-bool.html&r=1&f=G&l=50&d=PALL&RefSrch=yes&Query=PN/9300759): API Calls With Dependencies, which is defined as:

_Techniques are disclosed for a client-and-server architecture where the client makes asynchronous API calls to the client. Where the client makes multiple asynchronous API calls, and where these API calls have dependencies (i.e., a result of one call is used as a parameter in a second call), the client may send the server these multiple asynchronous API calls before execution of a call has completed. The server may then execute these multiple asynchronous API calls, using a result generated from one call as a parameter to another call._

Maybe I live in a different dimension than everyone else, but this doesn't sound unique, novel, and really just feels like folks are mapping out all the things that are working on the web and filing for patents. I found this patent while going through the almost [1300 API related patents in Amazon Web Services portfolio](http://amazon.patents.apievangelist.com/). Many of their patents make sense to me, but this one felt like it didn't belong.

When I read these patents I worry about the future of the web. Ultimately I can only [monitor the courts for API related patent litigation](https://www.courtlistener.com/?q=%22application+programming+interface%22&type=o&order_by=dateFiled+desc&stat_Precedential=on), and keep an eye out for new cases, as this is where the whole API patent game is going to play out. I'll keep squawking every time I read a patent that doesn't just belong, and when I see any new legal cases I will help shine a light on what is going on.