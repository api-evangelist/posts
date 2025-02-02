---
layout: post
title: An Auditing API For Checking In On API Client Activity
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_auditing.gif
atomdate: 2016-10-06T18:00:00.000Z
tags:
  - Client
---
[Google just released a mobile audit solution for their Google Apps Unlimited users](https://gsuite-developers.googleblog.com/2016/05/google-mobile-management-introducing.html) looking to monitor activity across iOS and Android devices. At first look, the concept didn't strike me as anything I should write about, but once I got to thinking about how the concept applies beyond mobile to IoT, and the potentially for external 3rd party auditing of API and endpoint consumption--it stood out as a pattern I'd like to have in the filing cabinet for future reference.

Using the Google Admin SDK Reports API you can access mobile audit information by users, device, or by auditing event. API responses include details about the device including model, serial numbers, user emails, and any other element that included as part of device inventory. This model seems like it could easily be adapted to IoT devices, bot and voice clients.

One aspect that stood out for me as a pattern I'd like to see emulated elsewhere, is the ability to verify that all of your deployed devices are running the latest security updates. After [the recent IoT launched DDOS attack on Krebs on Security](https://krebsonsecurity.com/2016/09/krebsonsecurity-hit-with-record-ddos/), I would suggest that the security camera industry needs to consider implementing an audit API, with the ability to check for camera device security updates.

Another area that caught my attention was their mention that _"mobile administrators have been asking for is a way to take proactive actions on devices without requiring manual intervention."_ Meaning you could automate certain events, turning off, or limiting access to specific API resources. When you open this up to IoT devices, I can envision many benefits depending on the type of device in play.

There are two dimensions of this story for me. That you can have these audit events apply to potentially any client that is consuming API resources, as well as the fact that you can access this data in real time, or on a scheduled basis via an API. With a little webhook action involved, I could really envision some interesting auditing scenarios that are internally executed, as well as an increasing number of them being executed by external 3rd party auditors making sure mobile, devices, and other API-driven clients are operating as intended.