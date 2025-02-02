---
layout: post
title: Including The Twitter Object Nest API As A File Upload API Example
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_13_at_9.17.46_pm.png
atomdate: 2016-10-14T16:00:00.000Z
tags:
  - Twitter
---
One request I get from folks on a regular basis, is an example of file upload APIs. Each time I get one of these requests I regret that I do not have more file upload and storage APIs profiled, allowing me to share a list of examples. So file upload APIs are high on my list to keep an eye out for as I'm doing my regular monitoring and mapping of the API universe. 

An API I wanted to add to this list was [the TON (Twitter Object Nest) API](https://dev.twitter.com/rest/ton), which "allows implementers to upload media and various assets to Twitter". The TON API is an interesting model for me because it supports resumable, and non-resumable uploads--with all files over 64MB required to be resumable. I wanted to profile the API in a story, and add some of the key aspects to my research on file upload APIs, so that I could reference in future conversations.

Some of the core features of how the TON API operates are:

*   The Content-Type of requests cannot be application/x-www-form-urlencoded.
*   The Content-Type of requests are a valid media type as defined by [IANA](http://www.iana.org/assignments/media-types/media-types.xhtml).
*   Chunks should be in integer multiples of X-TON-Min-Chunk-Size (except the last).
*   The Location header after upload needs to be saved to be used in other Twitter API calls.

Here is the basic makeup of the initial request to kick off a resumable upload:

*   Authorization: See 3-legged authorization
*   Content-Length: Set to 0
*   Content-Type: The Content-Type of the asset to be uploaded.
*   X-TON-Content-Type: Identical to Content-Type
*   X-TON-Content-Length: Total number of bytes of the asset to be uploaded

The initialization response contains a Location which can then be used in other calls to the Twitter API. After you make the resumable upload initialization call, you can make each of the follow-up chunk uploads for the file--here is an example resumable video upload request:

*   PUT /1.1/ton/bucket/{bucket}/SzFxGfAg\_Zj.mp4?resumable=true&resumeId=28401873 HTTP/1.1
*   Authorization: // oAuth1.0a (3-legged) details here
*   Content-Type: video/mp4
*   Content-Length: {number of bytes transferred in this request}
*   Content-Range: bytes {starting position, inclusive, 0-indexed}-{end position, inclusive}/{total content length}

Anything under 64MB in size can just be done in [a single chunk](https://dev.twitter.com/rest/ton/single-chunk). Next, I'm going to create an OpenAPI Spec for [the Twitter TON API](https://dev.twitter.com/rest/ton), and hack together a simple server side edition of it in PHP, just so I can play with a complete example, in a sandbox environment. I will play with the Twitter TON API as well, and get familiar with how it works in relationship to the rest of the Twitter API.

Once I profile the file upload APIs for a couple of other providers I will add as a single area of my API stack research. I'm hoping to establish a common set of design patterns that I can point people to when designing their own file upload APIs, providing a single repository of API definition patterns that anyone can fork and put to use.