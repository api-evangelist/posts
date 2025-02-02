---
layout: post
title: >-
  I See A Number Of Incomplete API Efforts That Come Out Of Connected Device
  Providers
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-footprint.png
atomdate: 2016-08-05T21:00:00.000Z
tags:
  - Providers
---
I've seen quite a few incomplete API efforts in my time as the API Evangelist. It is why I aggregate the most common building blocks I see across successful API providers like Twilio and organize them into blueprints anyone can follow like [my minimum viable API footprint definition](http://apievangelist.com/2015/04/10/my-minimum-viable-api-footprint-definition/). It doesn't take much effort to pull together a basic API presence like this and is something that can go a long ways to help onboard new API consumers. 

There are a number of interesting APIs out there like [the AirControl API](https://dl.ubnt.com/aircontrol/aircontrol-api-alpha.pdf), which gives you [programmatic access to enterprise-grade wifi and wireless network solutions from Ubiquiti Networks](https://www.ubnt.com/products/), but then quickly reduces a pretty robust API effort to being just a PDF document. I still keep an eye on these APIs like this because they offer value, and give a look at how ubiquitous web APIs are becoming. It also demonstrates how much more work I have ahead of me when it comes to educating the coming wave of device API providers. 

Another thing this demonstrates for me is that this wave of Internet-connected device APIs will also suffer from many of the same illnesses that API providers have had when deploying APIs for mobile applications. These APIs are often hastily designed and deployed, where documentation, authentication, and security are often an afterthought or not even a thought at all.

I am working on reworking some of my forkable Github templates for deploying API portals. I am going to c[reate a minium viable API portal solution](http://apievangelist.com/2015/04/10/my-minimum-viable-api-footprint-definition/) that can be easily forked, helping API providers quickly launch a more coherent presence without much effort. I'm going to also create a complete API portal solution that takes into consideration [the complete list of building blocks for an API presence](http://apievangelist.com/2016/04/07/i-have-an-api-now-i-need-some-help-to-identify-what-is-needed-to-manage-my-api-presence/) that I've gathered from across the API landscape.