---
layout: post
title: We Need An Open Library Of The Most Common Utility API Implementations
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-utility.png
author:
  name: kinlane
tags:
  - Open
---
I was spending time profiling APIs late last night while putting back a couple of IPAs. Yes this is what I do on a Friday night, you have a problem with that? Anyways, I was crafting Swagger definitions for the [7digital music APIs](http://developer.7digital.com/), and the I came across [their territories API](http://developer.7digital.com/resources/api-docs/territories-api). "The Territories API serves data about countries that 7digital operates in, data about those counties, and a one or more languages with shop urls in each country”, something that I could see being pretty useful to developers when building music apps on top of the platform.

There has been numerous APIs I’ve developed in the past, where the need for some supporting, utility APIs, such as a list of states, zip codes, counties, or other resources was called for. Two layers to doing this: 1) Acknowledging the little things developers need goes a long way in building trust with them, letting them know you actually care, and get what they are facing 2) You want devs to achieve integration as quickly as possible, provide them with the little things that they will have to go hunt for, and possibly prevent them from achieving their objectives. — Reduce any friction possible!

I'd like to see an open source library of utility API design, complete with a variety of server side code, and data stores emerge, that help API providers deliver a more complete stacks of API resources. If you need a state / province API, or a language API, you could just grab one off the shelf and install it seamlessly into your API stack. This is just one of those little areas, that I think could be slowing the overall advancement of APis (just a wee bit), and with a little community effort, could really grease the wheels in API adoption, and fuel more meaningful integrations.