---
layout: post
title: Putting All Your API Resources Into Single Query Parameter Like Flickr Does
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-design.png
author:
  name: kinlane
tags:
  - Resources
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-design.png)](http://design.apievangelist.com)

When you use a well designed, and I hate saying it, but a RESTful API, you know it. I’m not a [restafarian](http://mikeschinkel.com/blog/whatisarestafarian/), who is super strict about API design, but I do know an easy-to-use, intuitive interface when I hack on one. Having API resources defined as intuitive URIs, with a handful of sensible header or query parameters, that allows me to excercise my HTTP Verbs, just makes me happy.

I do not expect all API providers to be API design experts, but one design pattern that always frustrates me is when you pack all of your API resources into a single parameter. [Flickr calls it “method”](https://www.flickr.com/services/api/), and [Brightcove calls it “command”](http://docs.brightcove.com/en/video-cloud/media/references/reference.html#Video_Read), and while both of these media API providers then offer a rich number of “methods” or “commands”, I just can’t help feel this single design decision always detours API integrationa  down bumpier, darker side street or alley.

Ultimately I can still get what I need done with APIs who choose to craft their resources in this way, but it takes more work, and requires me to create a special bucket of APIs, that don’t quite fit in with the rest of the APIs I’m profiling, and integrating with. I’m often tempted, with the high profile APIs like Flickr and Brightcove, to craft a new API, and stand it up as a facade that you can use as a proxy, instead of directly connecting to Flickr and Brightcove APIs, but alas not enough time in the day.

You will almost never catch me giving API design advice on API Evangelist, but in this scenario, I have urge you not to follow the design patterns of Flickr and Brightcove when planning your APIs.