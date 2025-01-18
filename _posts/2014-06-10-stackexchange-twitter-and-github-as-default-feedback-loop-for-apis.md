---
layout: post
title: StackExchange, Twitter, And Github As Default Feedback Loop For APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-recycling.jpg
author:
  name: kinlane
tags:
  - Github
  - Twitter
  - Stack
  - Feedback Loop
  - APIs
  - Feedback
  - Git
---
I’m still extracting great examples of API design, deployment, and management, that other API providers can follow, from recent API projects out of our federal government, with [FBOpen](http://apievangelist.com/2014/04/08/18f-shows-what-is-possible-in-government-with-fbopen-api/) from [18F](https://18f.gsa.gov/), and [OpenFDA out of the Food & Drug Administration (FDA).](http://apievangelist.com/2014/06/04/another-strong-api-implementation-in-federal-government-with-openfda/)

This particular post is about the approach to establishing a feedback loop with consumers of the OpenFDA API. If you visit the [OpenFDA portal,](https://open.fda.gov/) you will find that API consumers can seek help via three self-service channels:

*   [GitHub](https://github.com/FDA)
*   [StackExchange](http://opendata.stackexchange.com/search?q=openFDA)
*   [Twitter](https://twitter.com/search?q=%23openfda)

If you don’t get your question answered by searching through existing Github, StackExchange, and Twitter conversations, you have three ways to directly ask the OpenFDA team questions:

*   [StackExchange](https://opendata.stackexchange.com/questions/ask?tags=openFDA)
*   [GitHub](https://github.com/FDA)
*   Email

What is notable (thanks Gray Brooks), is that OpenFDA uses existing services to establish the feedback loop with API consumers—meaning they use Github, StackExchange, and Twitter rather than rolling their own tool. OpenFDA understands that there are existing conversation that are already occurring on StackExchange, and developers are used to going here to find the answers they need.

Additionally by stimulating the conversation on StackExchange and Twitter you are generating valuable social media and SEO exhaust that will help new consumers, potentially learn about the OpenFDA API, and how it is being used by developers. This type of feedback loop doesn’t just provide support for community, it establishes itself as the heartbeat of your API, showing that someone is home, and is there to support and listen.

The best part is that using Twitter, StackExchange, and Github are free for public conversations, and take almost no time to setup. OpenFDA directly links to the form for asking a question on StackExchange, they don’t for Github, but easily could. They also directly link to #OpenFDA hashtag to join existing conversations on StackExchange and Twitter, which is a pretty slick way to weave external searches into your API feedback loop.

Lots of good patterns to follow, from the leading groups deploying APIs in the US federal government.