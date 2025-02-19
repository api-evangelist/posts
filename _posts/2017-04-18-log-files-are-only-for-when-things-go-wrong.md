---
layout: post
title: Log Files Are Only For When Things Go Wrong
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/logging_truck_accident.jpg
atomdate: 2017-04-18T22:00:00.000Z
tags: []
---
I'm always amazed at the number of companies I work with that do not consider log files a first class data system. Log files for servers, web servers, and other systems or applications are only for when something goes wrong. I have to admit, I'm in the same situation. I have APIs on the logging for my API management layer, but I do not have easy API access to my Linux servers or the Apache web server that runs on top of them. 

I know that some companies use popular solutions like New Relic to do this, and [I keep track on about eight API friendly logging solutions](http://logging.apievangelist.com/organizations/). I'm going to have to spend some time in my [API logging research](http://logging.apievangelist.com) digging around for a solution I can use to stand up an API for my server(s). I'm not looking for any tooling on top of it, just something dead simple to parse my log files, put into a database, and allow me to wrap in a simple API for developing things on top of it.

The first thing I'll build is some analytics. Maybe there is some ready-to-go solution already out there, that are API-drive and familiar with server, or web server logs? It bothers me that logs aren't a first class data system in my operations. Maybe the awareness of crafting and developing against a logging API would help me get more in tune with this layer of data exhaust being generated from my operations daily. I'm guessing it will also help me get a handle on performance and security across my systems, helping take the health my operations up a notch or two.