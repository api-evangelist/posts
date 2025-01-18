---
layout: post
title: 'Small Utility APIs: Roll Dice'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/roll-dice.jpeg
author:
  name: kinlane
tags:
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/roll-dice.jpeg)](http://roll.space/)

I enjoy documenting APIs that I come across on the Internet. Not all designs catch my attention, but when they do, I like to add them to my monitoring systems, and with some of the smallest, open source designs, I like to fork them. 

[Today I came across the Roll Dice as a Service API](http://roll.space/), a simple resource for rolling dice, [while reading Today in Tabs](http://tinyletter.com/todayintabs). I love simple, micro API designs like this, and in addition to adding it to my database, I wanted to make sure I documented the API using Swagger.

You never know when an API will go away, so I wanted to capture a snapshot of the API as a machine readable API definition. [The code behind is also open source, so I went ahead and forked the Github repository as well](https://github.com/toddself/roll-space).

I would like to see more APIs like this. I think they are fun, and potentially very useful, depending on their function. I'd like to see a push button deploy on Heroku, and in Docker containers, so people could build little, localized API stacks.