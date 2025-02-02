---
layout: post
title: Netflix API Is Much More Than A Public API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/netflix-square.png
author:
  name: kinlane
tags:
  - Public
---
Netflix has [entered the final stages of shuttering its public API last week](http://developer.netflix.com/blog/read/Changes_to_the_Public_API_Program). Its been coming for a while now, [starting in June of 2012](http://developer.netflix.com/blog/read/Upcoming_Changes_to_the_Netflix_API_Program), and now is official with the platform no longer accepting new API registrations.

After reading about the changes to the Netflix Public API program on their blog, and hearing much of the news in response, [everyone seems to file this away, along with the Twitter API](http://www.rethink-wireless.com/2013/03/11/netflix-public-api-program-retired.htm)\--just another API platform screwing over its developers.

As I do, I wanted to take a step back, look at the bigger picture and try understand what happened.  On [October 1st 2008, Netflix launched their public API](http://readwrite.com/2008/09/30/netflix_api_launches_tomorrow), and they appear to have done everything right. They had a blog, [solicited code samples from developers](http://developer.netflix.com/blog/read/Let_Us_Know_About_your_Libraries), [accepted application submissions](http://developer.netflix.com/blog/read/App_Gallery_Open_for_Developer_Submissions) and even [showcased the developers apps in the gallery](http://developer.netflix.com/blog/read/Finding_nice_applications_via_the_Netflix_App_Gallery). Netflix would even help [promote your app to Netflix subscribers](http://developer.netflix.com/blog/read/Promote_Your_App_to_Netflix_Subscribers) and [threw hackathons](http://developer.netflix.com/blog/read/Untitled_1). The Netflix API team worked to [improve API performance](http://developer.netflix.com/blog/read/API_Performance_Improvements), communicate regularly, but really nothing that amazing happened.

There were applications like [InstaWatcher](http://instantwatcher.com/) and [WhichFlicks](http://www.whichflicks.com/) (among others) developed on the API, but as Daniel Jacobson puts it, [a thousand flowers didn’t bloom](http://www.slideshare.net/michaelhart2/api-strategy-evolution-at-netflix). In these situations its easy to blame the API provider, but developers didn’t really step up and build anything that innovative and cool. So is this a failure of Netflix? A failure of developers to innovate? Or could it possibly be a third: failure of the API vision?

I would say the demise of the Netflix public API is equal part Netflix and the developer, and just the nature of the industry it exists in. It didn’t take me long to look through the Netflix API blog, so I can tell they didn’t put alot into evangelizing the API. But I really can’t find any innovation that occurred by developers as part of it, so I think us devs have to share some of the responsibility as well.

Several of the blog posts covering the news last week, [compared this to Twitter](http://www.engadget.com/2013/03/08/netflix-changes-its-current-api-program-by-ending-it-will-no/) which I think for the untrained eye of the mainstream tech blogosphere, this is easy to do. But Twitter is user generated content, via one of the newest types of content platforms, and Netflix is heavily licensed and policed content from one of the oldest content platforms. I think expecting public API success from Netflix and / or developers was a lot to ask.

I love and believe in APIs, but I’m not delusional enough to think they will work magically everywhere they are applied. However, even with the closing of the public Netflix API, I consider Netflix is an API success story. Look what they’ve done with their internal and partner APIs. They’ve managed to scale not just from the data center to the cloud, but globally and across 800+ devices--while also [sharing this knowledge and wisdom with the public](http://techblog.netflix.com/) via their blog:

*   [Public Continuous Integration Builds for our OSS Projects](http://techblog.netflix.com/2013/03/public-continuous-integration-builds.html)
*   [Introducing the first NetflixOSS Recipe: RSS Reader](http://techblog.netflix.com/2013/03/introducing-first-netflixoss-recipe-rss.html)
*   [Karyon: The nucleus of a Composable Web Service](http://techblog.netflix.com/2013/03/karyon-nucleus-of-composable-web-service.html)
*   [Denominator: A Multi-Vendor Interface for DNS](http://techblog.netflix.com/2013/03/denominator-multi-vendor-interface-for.html)
*   [Announcing EVCache: Distributed in-memory datastore for Cloud](http://techblog.netflix.com/2013/02/announcing-evcache-distributed-in.html)
*   [Netflix Queue: Data migration for a high volume web application](http://techblog.netflix.com/2013/02/netflix-queue-data-migration-for-high.html)
*   [Functional Reactive in the Netflix API with RxJava](http://techblog.netflix.com/2013/02/rxjava-netflix-api.html)
*   [Announcing Ribbon: Tying the Netflix Mid-Tier Services Together](http://techblog.netflix.com/2013/01/announcing-ribbon-tying-netflix-mid.html)
*   [NetflixGraph Metadata Library: An Optimization Case Study](http://techblog.netflix.com/2013/01/netflixgraph-metadata-library_18.html)
*   [Optimizing the Netflix API](http://techblog.netflix.com/2013/01/optimizing-netflix-api.html)

If that wasn't enough, they are also [open sourcing much of the technology](https://github.com/netflix) behind their approach:

*   [eureka](https://github.com/Netflix/eureka) - AWS Service registry for resilient mid-tier load balancing and failover
*   [RxJava](https://github.com/Netflix/RxJava) - a library for composing asynchronous and event-based programs using observable sequences for the Java VM
*   [Governator](https://github.com/Netflix/governator) - A library of extensions and utilities that enhance Google Guice to provide: classpath scanning and automatic binding, lifecycle management, configuration to field mapping, field validation and parallelized object warmup
*   [Priam](https://github.com/Netflix/Priam) - Co-Process for backup/recovery, Token Management, and Centralized Configuration management for Cassandra
*   [edda](https://github.com/Netflix/edda) - Service to track changes in your cloud recipes-rss - RSS Reader Recipes that uses several of the Netflix OSS components
*   [astyanax](https://github.com/Netflix/astyanax) - Cassandra Java Client
*   [karyon](https://github.com/Netflix/karyon) - The nucleus or the base container for Applications and Services built using the NetflixOSS ecosystem
*   [netflix-graph](https://github.com/Netflix/netflix-graph) - Compact in-memory representation of directed graph data
*   [asgard](https://github.com/Netflix/asgard) - Web interface for application deployments and cloud management in Amazon Web Services (AWS)
*   [Hystrix](https://github.com/Netflix/Hystrix) - Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable
*   [servo](https://github.com/Netflix/servo) - Netflix Application Monitoring Library
*   [frigga](https://github.com/Netflix/frigga) - Utilities for working with Asgard named objects

When measuring the success or failures of API initatives, we can't use the same yardstick in all scenarios. When you look at the knowledge, wisdom and code that has come out of Netflix, there is no way you can say their API initiative is anything but a success. I don’t see see Netflix as a case study in how to stream movies over the web via public APIs, but a deeply important experiment in how to deliver licensed content to over 800 devices, via the next generation of APIs.  Something that probably isn't an edge case, it actually represents where we all might be headed in the near future.

Let’s not get caught up in the recent deprecation of the Netflix public API.  There is so much going on!  Let's get studying some of the knowledge and technology coming out of Netflix. I know its my motivation for writing this post, and doing this research.