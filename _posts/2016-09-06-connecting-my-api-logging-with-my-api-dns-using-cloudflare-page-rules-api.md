---
layout: post
title: Connecting My API Logging With My API DNS Using CloudFlare Page Rules API
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-logging-dns.png
atomdate: 2016-09-06T18:00:00.000Z
tags:
  - Cloud
  - My
  - Logging
  - DNS
  - Rules
---
As I'm spending time learning more about what my DNS provider CloudFlare offers when it comes to securing my APIs. To facilitate this, I am playing around with how I can utilize my Apache log files, to help me better drive the definition of [DNS security using the CloudfFare API](https://api.cloudflare.com/#page-rules-for-a-zone-create-a-page-rule). I guess this is kind of a real time reactive, but also hopefully eventually a proactive solution to quantifying and defining the frontline of my API operations.

I originally embarked on this endeavor to help me manage some of the shift in the API Evangelist network and help mitigate 404 errors across my network of API research. I had recently migrated what I call my API Stack research to a new domain (stack.network), and I am anticipating quite a few broken links in stories over the years that reference this area of my work. I have been trying to attack this from the content level by rewriting links as I find them, but I'm thinking I could automate this using my Apache log files and [setting up PageRules using CloudFlareAPIs](https://api.cloudflare.com/#page-rules-for-a-zone-create-a-page-rule) as well.

Once I started sifting through the Apache log files I began to see other traffic patterns that were more in the area of security, then with the stability of my platform and its linkages. As with any type of log file, it is taking some time for all of this to come into focus for me. I will have to spend a great deal of time evaluating traffic from specific IP ranges, user agents, etc., but I know I should be able to quickly establish some rules at the DNS level that will better help me lock down the front line of my API traffic.

Right now I am just keeping my Apache log files backed up to Amazon S3 to help alleviate server load, and keep around for historical purposes. I have built a log file viewer for sifting through my API traffic, and at the moment I'm manually creating page rules in CloudFlare, but it is something I hope to automate via the CloudFlare API once I have established an awareness of the common types of rules I will be creating. Once I evolve to this point I will write about again, and hopefully talk more about how [API access to the logging for my API traffic](http://logging.apievangelist.com), in conjunction with how [API at the DNS level for my API](http://dns.apievangelist.com) is helping me better define and secure the frontline of my API operations.