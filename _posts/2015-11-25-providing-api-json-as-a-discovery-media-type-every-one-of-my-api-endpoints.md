---
published: true
layout: post
title: Providing API.json As A Discovery Media Type Every One Of My API Endpoints
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png
author:
  name: kinlane
tags:
  - My
  - Discovery
  - Discover
  - API.json
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png)](http://discovery.apievangelist.com/)

It can be easy to stumble across the base URL for one of my APIs out on the open Internet. I design my APIs to be easily distributed, shared, and as accessible as possible--based upon what I feel the needs for the resource might be. You can find most of my APIs, as part of my [master stack](https://kin-lane.github.io/master/), but there are other APIs like my [screen capture API](https://kin-lane.github.io/screen-capture/), or maybe my [image manipulation API](https://kin-lane.github.io/screen-capture/), that are often orphaned, which I know some people could use some help identifying more of the resources that are behind API operations.

To help support discovery across my network of APIs, I'm going to be supporting requests for Content-Type: application/apis+json for each endpoint, as well as an [apis.json file](http://apisjson.org) in the root of the API, and supporting portal. An example of this in action, can be seen with my [blog API](https://kin-lane.github.io/blog/), where you can look into the root of the portal for API ([kin-lane.github.io/blog/apis.json](https://kin-lane.github.io/blog/apis.json)), and in the root of the base URL for the API ([blog.api.kinlane.com/apis.json](http://blog.api.kinlane.com/apis.json)), and for each individual endpoint, like the ([blog.api.kinlane.com/blog/](http://blog.api.kinlane.com/blog/)) endpoint, you can request the Content-Type: application/apis+json, and get a view of the APIs.json discovery file.

It will take me a while to this rolled out across all of my APIs, I have worked out the details on my [blog](https://kin-lane.github.io/blog/), and [API](https://kin-lane.github.io/api/) APIs. Providing discovery at the portal, API, and endpoint level just works. It provides not just access to documentation, but the other critical aspects of API operations, in a machine readable way, wherever you need it. It is nice to be on the road to having APIs.json exist as the media type (application/apis+json), something that isn't formal yet, but we are getting much closer with the latest release, and planned releases.

Next, I will push out across all my APIs, and do another story to capture what things look at that point. Hopefully it is something I can encourage others to do eventually, making API discovery a little more ubiquitous across API operations.