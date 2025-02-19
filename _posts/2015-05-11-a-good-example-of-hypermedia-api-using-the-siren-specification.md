---
layout: post
title: A Good Example Of Hypermedia API Using The Siren Specification
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/wurl-developer.png
author:
  name: kinlane
tags:
  - Hypermedia
---
I am spending a small amount of time each week, adding a new hypermedia layer to my link curation API. My goal is to better understand hypermedia, while also improving the designs of the APIs that I depend on for my own operations. During todays work, I was looking for a more extensive example of [Siren](https://github.com/kevinswiber/siren) being used by an actual API provider, taking me beyond what Kevin Swiber ([@kevinswiber](https://twitter.com/kevinswiber)) provides in his examples. 

The example I found that has really helped me go from 0-60 when it comes to Siren (well maybe more like 0-15), was the [TV and streaming video API platform Wurl](http://developers.wurl.com/). The API has a pretty robust example of Siren being used in the wild, allowing me to reverse engineer the design patterns and apply in my own way--this is one way I learn things, through breaking down other people's work. 

[Wurl has 11 entities defined](http://developers.wurl.com/pages/reference), demonstrating the really versatile power of Siren in defining the resources an API is serving up. They have some really nice workflows around each video episode, allowing them to be organized into series, bundles, and providing user management and search. For me it is a great introduction into what hypermedia is, and more specifically what Siren offers, in a working, real-world example.

I only have so much bandwidth to spend on this work, but after [getting my feet wet adding a hypermedia layer link curation API using Siren](http://apievangelist.com/2015/05/11/applying-a-little-hypermedia-is-helping-me-tighten-down-my-api-design-and-tell-a-better-api-story/), and playing with the Wurl API, I've got a lof of new thoughts floating around my head around how I can improve my own API designs, and better present the large amount of information, visualizations, and other information available within my API curation lifecycle.