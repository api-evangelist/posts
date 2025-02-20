---
layout: post
title: Take That Data Dump Access To Your Organizations Database And Build Your API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-dump-truck.jpg
author:
  name: kinlane
tags:
  - Database
  - Data
  - Access
  - Organization
---
I have a long, winding history of database administration in my past. I've been managing databases since my first job working on school district databases in the State of Oregon in 1988. So I've been that database administrator you are asking for data access from, and I've personally managed and interacted with too many of these DBAs to keep track.

I was discussing strategies for getting access to your organizations central database today, and realized I don't have enough of these data acquisition stories on API Evangelist.

This data access quest will start with a burning need to build a website, mobile app or provide access to a 3rd party partner to some data. You know that this data is in your organizations database, all you need is access to make your project come to life.

In many organizations this can be easier said than done. There could be numerous reasons why this will be difficult ranging from technical to political, and be fuly prepared for it to often be political, masked as technical. 

Database access bottlenecks can range from security concerns to cranky, unfriendly DBAs or possibly just that the central database system has been in operation for many years and cannot handle large number of additional requests.

Unwinding the politics of database access can often be more time consuming than the technical side of database access. In many organizations your time is better spent just getting what you need and moving on. Make it only about access, and not looking to change the legacy process.

This legacy is why the most common way of getting at your organizations data will be a data dump to a network or FTP location, in a CSV, XML or JSON format. If your database administrator offers this to you, take it. You can make use of this, design the application you need need, without the headache of battling to change things or getting direct access.

A data dump is a great for DBA's to give you the data you requested, but offload the processing and responsibility to someone else. So take it, if it will meet your minimal requirements.

Once you get your data dump, build your applications datastore, API and site or application. Then at a later date, you can take your blueprint and sell it back to your database administrator, IT or further up the management chain, on how things can be done better.

While a data dump may not be optimal, it might be all you can get for now. A great deal of education of IT and database folks is needed, to help them understand that APIs are not all publicly available like Twitter, and they actually provide much granular level security and access than traditional IT access levels. But we have many years of education to occur before we will change the tides.

So take that data dump, build your own API and application and make evolving IT a separate battle from your project goals.