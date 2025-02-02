---
layout: post
title: >-
  Defining The Industrial Programmable Automation Controller (PAC) Strategy
  Using An API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/pcbased_io_320x224.jpg
atomdate: 2016-08-16T18:00:00.000Z
tags:
  - Automation
  - Strategy
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/pcbased_io_320x224.jpg)](http://developer.opto22.com/static/generated/pac-rest-api/swagger-ui/index.html#/)

I was learning more about [the Programmable Automation Controller (PAC) API](http://developer.opto22.com/static/generated/pac-rest-api/swagger-ui/index.html#/) from [Opto 22](http://www.opto22.com/) and fouind myself intrigued by their usage of the word strategy to describe the role a web API can play when it comes to making the industrial automation process more programmable. I'd say the over API design is still very rough and represents the engineer's view of a PAC, but the potential for industrial IoT strategy orchestration is still present.

I'm learning about PAC APIs through the lens of my drone API research, where the role an API can play in the devices strategy creation, as well as execution. Meaning, with a drone, I can use the API to get at the data from one or many drone flights, as well as use the data, then the API again, to help me execute on the strategy. When this line of thought is applied in an industrial setting, the potential for an API driven strategy increases pretty dramatically.

A PAC API takes this strategy concept further down the road for me than it did with the drone alone. Each PAC can have its own DNS, and its own API, and the overall industrial process I am building a strategy for might contain many different PACS--allowing me to orchestrate in an unlimited number of industrial scenarios. I guess the API surface area for a PAC-enabled industrial workflow expands, contracts, and communicates very differently than it has for a single drone or even a drone fleet. I will have to take what I've learned from PACs and apply to drones.

This is the part of my API Evangelist existence I enjoy the most--the cross-pollination between the different sectors I am learning about.