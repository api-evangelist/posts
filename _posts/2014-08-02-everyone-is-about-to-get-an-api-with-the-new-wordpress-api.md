---
layout: post
title: Everyone Is About To Get An API With The New Wordpress API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/wordpress/wordpress-logo-stacked-rgb.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/wordpress/wordpress-logo-stacked-rgb.png)](http://wp-api.org/)

While at [API Craft in Detroit](http://bit.ly/1zIq2sl) this week I had the pleasure of hanging with two leads on the WordPress(org) development team, and discuss the API strategy for the blogging platform. Andrew Nacin ([@nacin](https://twitter.com/nacin)), Lead Developer, and Ryan McCue ([@rmccue](https://twitter.com/rmccue)), WordPress Plugin Developer, facilitated an open circle discussion to work through the challenges that WordPress is facing when developing an API for the open source blogging platform.

At face value, I know a number of API developers who will be less than pleased when they hear about a [WordPress API](http://wp-api.org/), as both PHP, and WordPress are easy targets for developer’s hatred, for generating less than perfect code. ;-) But, in the end you can’t ignore some of the stats on WordPress usage:

*   [Used by more than 22.0% of the top 10 million websites as of August 2013](http://en.wikipedia.org/wiki/WordPress)
*   [Most popular blogging system in use on the Web, used in more than 60 million websites](http://en.wikipedia.org/wiki/WordPress)
*   [Over 409 million people view more than 15.5 billion pages each month](http://en.wordpress.com/stats/)
*   [Users produce about 41.7 million new posts and 60.5 million new comments each month](http://en.wordpress.com/stats/)

These stats don’t even touch on the number of WordPress plugins and mobile solutions there are developed on the insanely popular website, and blogging platform. I couldn't think of a better platform to start rolling APIs out APIs to the masses, and quickly educating a very large group of tech savvy folks along the way.

[![](https://s3.amazonaws.com/kinlane-productions2/wordpress/wordpress-traffic.png)](http://en.wordpress.com/stats/)

Many of these WordPress sites are already integrated with popular API platforms like Twitter, Facebook, Google, and Amazon, so it makes sense to educate WordPress administrators on the APIs they are already using, as well as introduce them to the concept of having their own API around the potentially valuable content they generate.

**We Are Talking About Developing 60 M+ Distributed APIs**  
There is no API deployment or management service provider that is even close to numbers of this magnitude. When ready, the WordPress API will give millions of websites, and the individuals, companies, organizations and government agencies behind them, an Application Programming Interface (API). (weird, I haven't spelled that out in a while) What does this mean for the API sector? I do not know yet, but to me it definitely resembles the long tail of API deployment, that I, and [3Scale](http://bit.ly/13esk6Q) have been advocating for the last four years. 

**Building For The Lowest Common Denominator**  
One dominant theme in the conversation around the WordPress API at API Craft, was about building an API for the lowest common denominator. WordPress is an open source blogging platform built using PHP and MySQL, something that enables it to be installed on just about any hosting platform, which has contributed to the platform's growth. However, many of these platforms restrict common aspects of the Internet like the ability to use all of your HTTP verbs, like PUT or DELETE, or simply do not offer essentials like SSL, which is needed for oAuth. The bar for developing an API that will be used by 60 M+ providers has to be set pretty low, ensuring it will work across the entire ecosystem—something WordPress is already pretty damn good at.

**Ensuring That The WordPress API Is Extensible**  
One of the hallmarks of WordPress is the ability to create custom themes and plugins, that extend the functionality of the blogging platform, and the API will be no different. WordPress is much more than just a collection of pages, posts, tags, and links. WordPress has been used as the core of just about any time of website, serving up books, photos, videos, maps, and any other content type you can dream up. The WordPress API has to be able to provide a common interface that can be used to create, read, update, and delete core WP content types, like pages and posts, as well as be extended to any other interpretation the WordPress community can dream up—adding another dimension to the already massive scope of delivering an API to 60M+ websites.

**Single Place To Educate Everyone About APIs**  
I can't think of another platform that has introduced the average person to web programming, more than WordPress (maybe Drupal?). When you go back to the concept of lowest common denominator, WordPress employs PHP and MysQL to drive its functionality, and combined with the plugin and theme extensibility, the platform has provided a rich gateway to the world of web, and mobile app development. The opportunities to introduce, and educate the masses of the benefits (and downside) of APIs, is huge! While the already established API developer community may not want the WordPress community developing APIs, it will be the quickest way we from 10K APIs, into the millions of APIs. WordPress drives 22.0% of the top 10 million websites, which will instantly provide access to some potentially high value content and data, that will significantly increase the size of the overall API economy, as well as contribute to API literacy in every business sector, around the globe.

At the time of this post, the [WordPress API is only a plugin](http://wp-api.org/), which means it is an optional part of the platform, requiring a WordPress site administrator to know about the plugin, and install as part of their individual WordPress installation. However, the goal is to bake the API into WordPress as part of the 4.1 release, which could happen as soon as this fall, or at the latest the first or second quarter of 2015. While not all 60 M+ WordPress sites will immediately update to the 4.1 release, a significant portion of websites around the world will instantly have an API--good or bad.

I’m pretty excited at the idea of so many websites having APIs, then at the same time I'm completely terrified. It is kind of like flooding the market, with some very high value APIs, while also adding millions of very shitty APIs, and I'm sure a lot in the middle. With a lot of the problems we are facing around discovery and integration at 10K, imagine what things will look like with millions of APIs all of a sudden. Do we want every website to have an API this fast?

Beyond just giving a website an API, I'm also very interested in the potential of using WordPress API as purely an API core, allowing it to be used to drive content and data for mobile, and [single page applications (SPA)](http://spa.apievangelist.com/). Considering the innovation we've seen around the core WordPress platform, from the community, I imagine we'll see similar when it comes to just raw API deployment, and when you start considering the potential when bundled with the [latest containerization movement](http://apievangelist.com/2014/04/07/containers-will-do-for-apis-what-apis-do-for-companies/), led by [Docker.io](http://docker.io), and being driven by [Amazon](http://aws.amazon.com/about-aws/whats-new/2014/04/23/aws-elastic-beanstalk-adds-docker-support/), [Google](https://developers.google.com/compute/docs/containers), [Microsoft](http://azure.microsoft.com/blog/2014/06/09/docker-and-azure-coolness/), and [Red Hat](http://www.redhat.com/about/news/press-archive/2014/4/red-hat-docker-expand-collaboration)—your head will start to spin.

> **_WordPress API + Virtual Containers = API Deployment As Part Of The Fabric Of The Cloud_**

I will be carving out more time to consider the implications of the introduction of the WordPress API, and hopefully provide more feedback to the WordPress API development team. If you are a seasoned WordPress developer, and experienced API consumer, you might consider getting involved too. You can get access to the source code for [WP API over at Github](https://github.com/WP-API/WP-API), and you can [submit issues via the issue management](https://github.com/WP-API/WP-API/issues) for the project—they also provide updates via the [WP blog tagged as json-api](http://make.wordpress.org/core/tag/json-api/).