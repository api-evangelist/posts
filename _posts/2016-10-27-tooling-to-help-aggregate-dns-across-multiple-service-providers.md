---
layout: post
title: Tooling To Help Aggregate DNS Across Multiple Service Providers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/68747470733a2f2f7261772e6769746875622e636f6d2f4e6574666c69782f64656e6f6d696e61746f722f6d61737465722f64656e6f6d696e61746f722e6a7067.jpeg
atomdate: 2016-10-27T22:00:00.000Z
tags:
  - DNS
  - Tooling
  - Providers
  - Service Providers
---
Adrian Cockroft (@adrianco) turned me on to a DNS aggregation solution the other day while I was working on updating [the API definitions for the API providers that are included in my API DS research](http://dns.apievangelist.com/apis/). It was a very appropriate day for thinking deeply about aggregate DNS, with the DDOS attack against Dyn going on.

> DNS provider redundancy: the idea behind [@denominatorOSS](https://twitter.com/denominatorOSS) - one API/tool for many providers to allow switching. /cc [@adrianfcole](https://twitter.com/adrianfcole)
> 
> — adrian cockcroft (@adrianco) [October 21, 2016](https://twitter.com/adrianco/status/789467783947878400)

[Denominator is a portable Java library for manipulating DNS clouds](https://github.com/Netflix/denominator). It has pluggable backends, including AWS Route53, Neustar Ultra, DynECT, Rackspace Cloud DNS, and OpenStack Designate. Here is a good post on it from back in 2013, [describing it as a multi-vendor interface for DNS](http://techblog.netflix.com/2013/03/denominator-multi-vendor-interface-for.html). 

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/68747470733a2f2f7261772e6769746875622e636f6d2f4e6574666c69782f64656e6f6d696e61746f722f6d61737465722f64656e6f6d696e61746f722e6a7067.jpeg)](https://github.com/Netflix/denominator)

There doesn't look to be a lot of activity around the project in the last year, but it provides a good model for what I'd like to eventually see across all the major stops along the API lifecycle. I picture a wealth of aggregate tooling like Denominator that can act as a broker between API service providers and help switch, migrate, and sync between providers whether you are deploying, managing, testing, monitoring, or dialing in your DNS.

As I read the multiple investigations into what happened with the DDOS attack on Dyn last week, it seems relevant to learn more about aggregate DNS API solutions like Denominator. I will spend some time looking for other similar open tooling that is vendor-neutral, as well as vendor-switchable. We are going to need open source circuit breakers like this to help route, switch, migrate, and sync DNS across many service providers in this volatile landscape.