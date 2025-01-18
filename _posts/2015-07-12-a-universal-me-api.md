---
layout: post
title: A Universal Me API
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-me.png
author:
  name: kinlane
tags: []
---
I am pretty demanding today, [I just asked for sandbox environments to be default for all APIs](http://apievangelist.com/2015/07/11/i-wish-all-apis-had-sandbox-environment-by-default/), and now I'd like to see a universal /me API. I am profiling AngelList API, [as part of my API Stack work](http://theapistack.com/), and while AngelList does not have it broke out as its own endpoint on the menu (it is just buried in the oAuth section), I thought it was worth breaking out all by itself.

At AngeList, when I hit the api.angel.co/1/me endpoint, it gives me back everything [about me on AngelList](https://angel.co/kinlane). To make it work, I have to pass along a valid oAuth token, which I generated from my AngelList account, which is how the API knows who I am. As I was playing with this API, and breaking out as its own Swagger file, as part of my AngelList API profiling, I can't help but want this feature everywhere.

Wouldn't it be nice to be given oAuth controls for ANY account online, whether it was a tech company like Twitter, or a government agency like the US Census Bureau. Using oAuth, you could generate an App (w/ token), and easily make a call to /me, and find out everything a company knows about you, and I mean EVERYTHING. Using oAuth you could easily open up this access to anyone 3rd party provider you wanted to, for any period of time you desired.

/me, provides a very powerful endpoint to frame discussions about our digital self. As we continue to spread our lifebits across the Internetz, we are going to have to demand more /me endpoints for platforms, as well as oAuth control over the lifebit exhaust we generate--as a basic human right. I'll keep building on my own definition of what /me endpoints should be available, and who knows maybe someday a universal /me API will be a default approach for any online domain.