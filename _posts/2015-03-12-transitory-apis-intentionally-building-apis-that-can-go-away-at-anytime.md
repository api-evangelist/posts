---
layout: post
title: 'Transitory APIs: Intentionally Building APIs That Can Go Away At Anytime'
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-hourglass.png
author:
  name: kinlane
tags:
  - Transit
  - APIs
---
I use many types of APIs. Some are public APIs, operated by other people, and then there are the APIs I have designed, operate, and consume on my own. As I design, redesign, deploy, and manage my APIs, I'm in a fortunate place that I get to push the boundaries of API operations, without much of the friction of normal API platforms. I'm the only one providing and consuming many of my APIs, essentially running an API dictatorship.

Over time I have built quite a few APIs that are still up, active, but nobody is using them. I have built them during some specific research, or to support a prototype, which once I was done with core work, I do not need the API to actually be alive and running. At some point in the future when I revisit the research, I may want to fire back up the APIs, but for now its ok if they are down, with a dormant Docker image, and server-side code living within its requisite Github repo.

This is just one example of how I’m building APIs that could possibly go away at anytime. It is an area that, as I think about more, the more use cases I come up with. It is helping me rethink some of my architecture, and workflow. Another potential approach I am contemplating involves having a single UI that may use one or many APIs, but those APIs aren't even live until I load the screen—which triggers the containerized deployment of the last known snapshot of each of the dependent microservices.

If nothing else I’m having fun. I’m not sure if all these scenarios are viable in the real world, but it makes for an interesting exercise, and provides me with a kind of fire drill approach to my workflow that lets me rethink my APIs, and the workflow around them, with each drill. For me, it shines a whole new light on [the old APIs can go away at any time, no wait you have to support them forever argument](http://apievangelist.com/2012/04/20/apis-are-forever-wait-nothey-can-go-away-at-any-time/). Docker and containerized deployment of my APIs are really warping how I see the services I depend on—fun, fun!