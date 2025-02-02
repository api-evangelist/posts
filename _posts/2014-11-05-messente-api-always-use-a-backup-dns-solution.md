---
layout: post
title: 'Messente API: Always Use A Backup DNS Solution'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/messente-sms-api.png
author:
  name: kinlane
tags:
  - DNS
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/messente-sms-api.png)](https://messente.com/)

I found the DNS implementation over at the Messente SMS API interesting, and worth of sharing for deeper evaluation. I've been [considering the various approaches by API providers when crafting their domains, or subdomains for API access](http://apievangelist.com/2014/10/26/gathering-my-thoughts-around-common-patterns-for-base-urls-across-nearly-700-apis/) heavily over the last couple weeks.

During some research time today I stumbled across the M[essente SMS API](https://messente.com/) which opts to provide two domains for making HTTP(S) requests of their API:

*   api2.messente.com
*   api3.messente.com

Messente provides a little disclaimer to handle the developer side of manual load-balancing these API calls:

> _These two domains have the same final destination regarding the API functions. In order to ensure that your requests always reach Messente API services, please use one of them as primary and the second one as backup. Both API domains work as equal, but in case of any unexpected downtime with one of them (HTTP 5xx), the other one must be used on client side._

I'm not sure this manual approach to providing API endpoints is the optimal path when delivering on the stability of your API, let alone the location of your resources, but it does provide an interesting contrast on the perspectives that are available out there in API-land.

Sometimes I feel like I should rebrand as API Anthropologist, as I find the approach of my fellow API providers more interesting than what I'd expect to find in a mature API landscape. This reflects the importance of showcasing what is going on, to help bridge to where we should be, rather than focusing exclusively on where we should be. (deep shit, man)