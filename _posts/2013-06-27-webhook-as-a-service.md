---
layout: post
title: Webhook as a Service
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/webscript-io-logo.png
author:
  name: kinlane
tags:
  - Web
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/webscript/webscript-io-logo.png)](https://webscript.io/)

While [I was at API Days this weekend in San Francisco](http://www.apievangelist.com/2013/06/23/a-great-time-at-api-days-san-francisco/), I managed to catch a handful of talks Saturday afternoon after I landed at OAK. While listening to each talk, I kept hearing one technical API building block, over and over--[webhook](http://en.wikipedia.org/wiki/Webhook).

Webhooks are a common way for API providers to make API integration a two ways street for consumer. Developers, or even non-developers, can setup webhooks via common API platforms, and receive notifications about different events and activities that occur.

Webhooks are also a common tool for [API automation and reciprocity platforms](http://reciprocity.apievangelist.com/companies.html) like [Zapier](http://reciprocity.apievangelist.com/companies-detail.html?id=38) and [IFTTT](http://reciprocity.apievangelist.com/companies-detail.html?id=39). Users can setup webhooks, that respond to just about any action across multiple, API driven platforms.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/webscript/webscripts-io-webhook-script-example.png)](https://webscript.io/)

After hearing webhooks mentioned so often, I wondered if anyone out there is offering web hook as a service (WHaaS) (LOL). Sure enough, John Sheehan ([@johnsheehan](https://twitter.com/johnsheehan)) pointed me to [webscript.io](https://webscript.io/).

Webscripts are short scripts, written in Lua, that run in the cloud servers, and can respond to any HTTP requests.

Exactly what I was looking for. I had heard of webscript.io before, but for some reason it didn't stick in my mind. It is precisely the simple approach I was looking for, and has many common examples like sending emails, counters, parsing RSS and Tweeting.

I really like dead simple implementations like [webscript.io](https://webscript.io/), that solve real world problems in such granular, yet powerful ways. Nice work [@smarx](https://twitter.com/smarx).