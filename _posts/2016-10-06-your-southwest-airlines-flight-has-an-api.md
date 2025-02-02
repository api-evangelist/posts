---
layout: post
title: Your Southwest Airlines Flight Has An API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/14500451_10157473672265368_6769931295752399398_o.jpg
atomdate: 2016-10-07T00:00:00.000Z
tags: []
---
A friend of mine messaged me this photo of the Southwest Airlines flight API on Facebook the other day. After doing a little homework I found that every flight has this available on the planes local network. There is a pretty interesting [write up on it from Roger Parks](http://rogerparks.com/projects/southwest-flight-logging/) if you care to learn more.

Looking through the response it has all the information you need for your flight update screen. It might seem scary for folks like us poking around the network on airplanes looking for things like this, but this is just the nature of the Internet and something any network operator should consider as normal.

The API is available at getconnected.southwestwifi.com/current.json when you are on the planes local network, and I'd consult Roger's post if you want more details about how to sniff it out using your browser. Anytime I am on a guest network on a plane or in a hotel, I enjoy turning on my [Charles Proxy](https://www.charlesproxy.com/) to log a list of all the domains and IP address in use.

This is a good way to learn about how people are architecting their networks, and delivering their resources to web, mobile, and device users. The problem with this activity is that sometimes you can discover things that you shouldn't. A line that I worry about a lot. I feel pretty strongly that if companies are using public DNS, or opening up their private network to the public, they should be aware that this is going to happen.

I hope that someday this type of behavior is embraced by companies, institutions, and government agencies. Not everyone will have good intentions like I do, but network operators should know this will happen, and make the those of us where white hats welcome, so that we will report insecure infrstructure, and help keep things locked down--before the bad guys get in.

Thanks to my friend Jason for pinging me with this. From reading up on it, it is nothing new, but still worthy of noting, and talking about. I love learning about all the APIs that exist in the cracks.