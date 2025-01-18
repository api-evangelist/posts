---
layout: post
title: Everything Is Fragile In The World Of APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-broken-link.png
atomdate: 2016-09-09T22:00:00.000Z
tags:
  - APIs
---
I was working through some thoughts around programming language dependencies, looking through a service I came across called [Bundler](http://bundler.io/), and found myself thinking about API dependencies (go figure, man I have a problem), and the [reliability of the APIs](http://reliability.apievangelist.com/) we are building on top of. Anyways, when it comes to the latest trends in programming languages in a production environment, I'm out of the mainstream current, and when I'm in over my head like this I usually turn to my API Evangelist Slack group for answers.

I asked the group for any random thoughts about programming language dependencies vs. API dependencies. There weren't that many thoughts, except a single profound one from the king of making sure [everything is 200 OK](http://runscope.com), John Sheehan ([@johnsheehan](https://twitter.com/johnsheehan))--who said:

**_Everything is fragile!_**

Deep shit, and so very true. As I was pondering the weight of these thoughts, I also came across a page within the [USGS water service APIs that was dedicated to helping developers craft fault-resistance code](http://apievangelist.com/2016/09/08/when-working-with-our-api-make-sure-you-build-faultresistance-into-your-code/). I think we are just getting started in our understanding of just how fragile the web is, making services like [Runscope pretty critical](http://runscope.com), but also makes having this conversation within your API portal, with your API consumers, like USGS is doing, pretty critical as well. I will also selfishly add that we should be talking more about good practices for API providers, as well as API consumers, in industry blogs that speak to the API sector.

If I've learned anything in six years as the API Evangelist, it is: Everything is fragile. Everything will break. Everything will change. Everything will eventually go away. This applies the to the tech, business, and politics of APIs. This can be a bad thing, or a good thing, depending on how we manage the design, deployment, management, and communicating around our API operations. I'm going to continue to look for other examples of what API providers are doing to help their developers deal with [API reliability](http://reliability.apievangelist.com/). I am also going to continue to showcase other successful API design, deployment, and management patterns that are helping us stabilize things, and yes that includes [hypermedia](http://hypermedia.apievangelist.com).