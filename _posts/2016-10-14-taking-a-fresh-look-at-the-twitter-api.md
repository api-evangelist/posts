---
layout: post
title: Taking A Fresh Look At The Twitter API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/twitter_developers.png
atomdate: 2016-10-14T20:00:00.000Z
tags:
  - Twitter
---
I am working on profiling [the Twitter API](https://dev.twitter.com/) again, and I thought their stack of APIs have evolved significantly beyond what we tend to think of as the Twitter API, and was worth taking another look at. It is easy to think of Twitter API being about tweeting, friends, and following people, and #hashtags, but they have an interesting mix that I think tells its own story about Twitter's journey.

Here is the current Twitter API stack:

*   **[Public REST API](https://dev.twitter.com/rest/public)** - The public REST APIs provide programmatic access to read and write the Twitter data -- what we think of when we talk about the Twitter API.
*   **[Media API](https://dev.twitter.com/rest/media)** - The APi for managing photo, videos or animated GIFs, that are used by other Twitter API endpoints when tweeting, direct messaging, and others.
*   **[Collections API](https://dev.twitter.com/rest/collections)** - The API for managing collections of tweets to tell specific stories, providing a single URL that represents each Twitter collection.
*   **[The TON (Twitter Object Nest) API](https://dev.twitter.com/rest/ton)** - Allowing implementers to upload media and various assets to Twitter, allowing for resumable, and single file uploads.
*   **[Curator API](https://dev.twitter.com/rest/curator)** - Provides broadcasters their curator-created streams for on-air graphics systems, or other digital displays. 
*   **[Streaming APIs](https://dev.twitter.com/streaming/overview)** - Deliver new responses to REST API queries over a long-lived HTTP connection, providing a regular stream of tweets from the platform.
*   **[Ads API](https://dev.twitter.com/ads/overview)** \- The Ads API gives partners a way to integrate Twitter advertising management in their product. Selected partners have the ability create their own tools to manage Twitter Ad campaigns while easily integrating into existing, cross-channel advertising management solutions.
*   **[Gnip](https://www.gnip.com/)** - Gnip is Twitter’s enterprise API platform, delivering real-time and historical Twitter firehose data for large use applications.

It is interesting to think about Twitter's long API evolution that got them here. I hear people often reference Twitter as the most extreme example of a public API out there. Granted, it is definitely the original example and has a very public element to it, but it also has several APIs that require partner status or special permissions to access, with the documentation available publicly--pushing back on the Twitter stereotype often used when we discuss APIs.

While most API providers will never reach Twitter scale, I think there are lessons in growth present here. That you don't always have to be 100% public, that you'll probably need streaming and higher volume solutions, including sensible handling of heavy media objects like images and video, as well as make money--do not forget to make money. It makes me sad that monetization on the Twitter platform is all about advertising, a huge missed opportunity for them in my opinion, but the advertising API is still worth documenting alongside the others.

Ok, that concludes my fresh look at the Twitter API stack. I'm going through each of them and documenting all available endpoints while profiling their current approach to the business of API operations. I figured that I better document everything before they get purchased by someone for Christmas. I haven't heard back on my offer yet, so I' guessing I was outbid. ;-)