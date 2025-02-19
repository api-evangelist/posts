---
published: true
layout: post
title: API Transit - The Basics
date: 2018-01-02T02:00:00.000Z
tags:
  - API Evangelist
  - API Transit
  - 101
  - Lifecycle
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-transit/api-transt-subway.png
---
<p align="center"><a href="http://basics.apievangelist.com/"><img src="https://s3.amazonaws.com/kinlane-productions2/api-transit/api-transt-subway.png" align="right" width="45%" style="padding: 15px;" /></a></p>I have been evolving my approach to mapping out all the stops along my API research, using a subway map approach lately. It has been something I've been [working on since 2014](http://apievangelist.com/2014/12/01/my-turkey-holiday-project-a-subway-map-api/), and had [developed as a keynote talk in 2015](https://apievangelist.com/2015/11/29/the-api-lifecycle-my-talk-from-defrag-and-apistrat/). My goal is to be able to lay out simple, as well as increasingly complex aspects of consistently operating an API. Something I've historically called the API life cycle, but [will work to call API transit in the future](http://apievangelist.com/2017/08/17/testing-out-the-concept-of-api-transit-instead-of-api-lifecycle/).

Right now, I have two main approaches to delivering the API Transit maps. 1) API Life Cycle, and 2) API Documentation. The first is about applying consistent practices to API operations, and the second is about understanding API operations as they happen. In my mind, both these types of API Transit maps will eventually work in sync, but I have to work my way up to that. Right now, I'm focusing on the API Life Cycle version, which is becoming more about API governance, but I'm going to try and rebrand as API Transit. I'm using transit as a verb, "pass across or through" a standard, and consistent way of doing APIs. What some might consider API design, or governance, but I'm considering more holistically.

To support a couple of my consulting projects I am working on at the moment, [I have published a simple API Transit project to help navigate some API teams through what I'd consider to be the basics they should be considering as they look to standardize how they deliver APIs across teams](http://basics.apievangelist.com/). It's a basic single line, 19 stop API Transit map. It is something I will keep adding stops to, and expand many into their own lines, serving up much more detail, but for this first project I wanted to keep simple, and speaking to a specific enterprise audience. I don't want to overwhelm them with information as they are just getting started on their API journey. They still have so much work to do in these 19 areas, I don't them to get distracted with other areas, or feel like they are drowning in information.

<p align="center"><a href="http://basics.apievangelist.com/"><img src="https://s3.amazonaws.com/kinlane-productions2/api-transit/api-transit-basics.png" align="center" width="90%" style="padding: 5px;" /></a></p>

My API Transit maps all run on Github, using Jekyll as the client. Each transit line, and stop is stored as Siren hypermedia stored in a Jekyll Collection. The resulting transit map, and details of each stop is just a simple HTML client which uses Liquid to render the data. This allows me to add stops, and lines as I need, expanding the API journey for each API Transit implementation. I still have routing challenges for the lines on the map. I have an editor for helping me plot where each line should go, but there are no easy answers when it comes to transit map layout, and is something that is proving to be more art than science, so I'm refraining from automating too much at the moment. I'm working on a routing algorithm, but just don't have the time to perfect it at the moment.

Next, I'm working on more complex iterations of existing APIs, so more about documentation than governance, life cycle, or transit. [I'm doing this with PSD2 as an exercise](http://working.laneworks.net/psd2/psd2-v1.html). Once I've done some more complex transit and specific API maps, I will work on combining the two, and applying the governance that exists in the transit map to a specific API, or set of APIs. Not sure where all of this is going, it is just a work in progress right now. It has been for almost three years, and I expect it will continue for many more years. If you are interested in having an API Transit map created for an existing API, or for a specific API governance process, feel free to reach out. I'm looking for more paid work to help push this work forward. Otherwise, it will just move along at whatever pace I can on my own steam!
