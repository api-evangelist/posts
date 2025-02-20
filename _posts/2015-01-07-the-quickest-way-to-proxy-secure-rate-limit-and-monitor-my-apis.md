---
layout: post
title: The Quickest Way To Proxy, Secure, Rate Limit, and Monitor My APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/3scale-apicast.png
author:
  name: kinlane
tags:
  - My
  - Proxy
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/3Scale/3scale-logo.png)](/admin/blog/bit.ly/13esk6Q)

As I am designing my APIs, one of the first things I decide is whether or not I will be making this public. If its a simple enough resource, and doesn't put too much load on my servers, I will usually make it publicly available. However if an API has write capabilities, could potentially put a heavy load on my servers, or just posses some private resource that I want to keep private, I will secure the API.

I use [3Scale for my API management infrastructure](/admin/blog/bit.ly/13esk6Q)\--I have since 2011, long before I ever started working with them on projects, and organizing [@APIStrat](https://twitter.com/apistrat). When it comes time to secure any of my APIs, I have a default snippet of code that I wrap each API, validating the application keys, and recording their activity--which 3Scale calls the plugin integration approach.

This time around, I logged into my 3Scale admin area, went to my API integration area, and saw the setup for the 3Scale Cloud API proxy that they are calling [APICast](http://www.3scale.net/apicast/). I can't help but notice the simple setup of the proxy--I give it a private base URL for my API, it gives me a public base URL back, and then I can configure the proxy rules, setting the rate limits for each of my API resources.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/3scale-apicast.png)

That is it. I can set up my APIs in a sandbox environment, then take it live when I am ready. It is the quickest way to secure my APIs I've seen, allowing me to instantly lock down my APIs, and require anyone who uses it to register for a key, and then I am able to track on how it is being put to use—no server configuration or setup needed.

This easy setup, bundled with the fact you can setup 3Scale for free, and get up to 50K a day in API calls, makes it the perfect environment for figuring out your API surface area. Then when ready, you can pay for heavier volume, and take advantage of the other advanced features available via 3Scale. I'm still using the plugin feature for 90% of my endpoints, but some I will be using APICast to quickly stand-up, secure, and monitor some of my APIs. I will publish a how-to after I finish setting this one up.

_**Disclosure:** 3Scale is an API Evangelist partner._