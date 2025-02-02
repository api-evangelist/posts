---
layout: post
title: Intercom Providing Docker Images Of Their SDKs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_10_at_7.57.42_pm.png
atomdate: 2017-01-11T20:00:00.000Z
tags:
  - Images
  - SDK
  - SDKs
---
I regularly talk about [the evolving world of API SDKs](http://apievangelist.com/2016/09/30/api-sdks-getting-more-specialized/), showcasing [what API service providers like APIMATIC are up to when it comes to orchestration, integration](http://apievangelist.com/2016/10/05/evolving-the-api-sdk-with-apimatic-dx-kits/), other dimensions of providing client code for API integrations. A new example of this that I have found in the wild is from [communication and support API platform Intercom](https://www.intercom.com/), with their [publishing of Docker images of their API SDKs](https://medium.com/intercom-developers/new-docker-images-for-intercom-sdks-835810cc4ba1#.2b201mdlq). This overlaps my [SDK research](http://sdk.apievangelist.com/) with the influence that [containerization](http://containers.apievangelist.com) is having on the the world of providing and integrating with APIs.

[Intercom provides Docker images for their Ruby, Node, Go, and PHP API SDKs](https://developers.intercom.com/docs/docker-sdk-environments). It's a new approach to making API code available to API consumers that I haven't seen before, (potentially) making their integrations easier, and quicker. I like their approach to providing the containers and specifically the fact they are looking for feedback on whether or not having SDK Docker containers offer any benefit to developers. I'm guessing this won't benefit all API integrators, but for those who have successfully adopted a containerized way of life, it might streamline the process and overall time to integration.

I just wanted to have a reference on my blog to their approach. I'll keep an eye on their operations, and see if their SDK Docker images become something that gets some traction when it comes to SDK deliver. Since they are sharing the story on their blog, maybe they'll also provide us with an update in a couple months regarding whether developers found it useful or not. If nothing else, their story has reminded me to keep profiling Intercom, and other similar API providers, as part of my wider API [communication](http://communications.apievangelist.com/) and [support](http://support.apievangelist.com/) research.