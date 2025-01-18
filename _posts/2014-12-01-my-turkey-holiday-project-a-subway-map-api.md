---
layout: post
title: 'My Turkey Holiday Project: A Subway Map API'
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-evangelist-metro-map-575.png
author:
  name: kinlane
tags:
  - My
  - Project
  - Subway Map
  - Subway
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-evangelist-metro-map-575.png)](http://apievangelist.com/network.html)

A long time ago I defined the [API Evangelist network](http://apievangelist.com/network.html) using a subway map format, plotting out the different routes you could take, and the locations all along this journey. As with anything I do, this is a work in progress, and I’m needing to regularly update this map. Currently it is in an image, and I use an image mapping tool to generate the links—something that is very time consuming.

I think the subway map is an important metaphor for understanding some potentially complex ideas, and provide a single map, complete with legends, supporting content, and links to more details. My problem is I have several maps I need to create, and maintain on a regular basis. Ideally my subway mapping tool would be dynamic, allowing me to make changes as I went along.

While looking for a solution, I stumbled across [Subway Map Visualization jQuery Plugin](http://kalyani.com/2010/10/subway-map-visualization-jquery-plugin/), by Nik Kalyani. This plugin would work perfectly for what I wanted to do to visualize the API Evangelist network, but I had another project I wanted to do, in which it somewhat fell short in satsifying.

There is a lot of talk about the API lifecycle, and I wanted a way to [map out the API lifecycle](http://subway.map.apievangelist.com/lifecycle.html) as I saw it, but this concept isn’t something there is a single answer for, and I wanted to hear other providers take on their own API lifecycle. I wanted others to potentially build their own API lifecycle subway maps, so I new that the Subway Map plugin needed to be dynamic—so I wrapped it in a web API.

I’m still playing with what is possible, but my new [Subway Map API](http://subway.map.apievangelist.com/) allows you to generate maps, adding routes, and locations along the routes. The API just takes advantage of all the features that Nik Kalyani added into the plugin, I just provided web APis for them. This project will be changing fast, and I will be resetting the database regularly, so if you play with it, make sure and let me know, so I don't step on your toes.