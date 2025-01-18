---
layout: post
title: AutoDevBot Open Sources Their API Monitor
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/autodevbot/autodevbot-logo.png
author:
  name: kinlane
tags:
  - Open Source
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/autodevbot/autodevbot-logo.png)](http://autodevbot.com/)

The [API monitoring service AutoDevot](http://autodevbot.com/) has opened sourced their JavaScript API monitoring solution, built on Frisby.js, called [API Monitor Runner](https://github.com/AutoDevBot/API-Monitor-Runner). The API monitoring tool, allows for a pretty robust configuration file, that lets you detail exactly what the service should monitor, and how it should behave when something out of the ordinary happens.

I though the trigger actions stood out, allowing you to take common actions when something occurs with an API:

*   **TRIGGER\_EMAIL** - enable email notification
*   **TRIGGER\_PAGER\_DUTY** - enable PagerDuty notification
*   **TRIGGER\_WEBHOOK** - enable a generic webhook notification
*   **TRIGGER\_HIPCHAT**\- enable HipChat notification

AutoDevBot, even takes things to another level, providing a ready to go Docker container, to quickly deploy API Monitor Runner, and then configure it on setup, using Docker environment params--a very interesting approach to deploying open tooling to support APIs.

I really like this type of deployment for vital API services, focusing on providing a simple, valuable, cloud-based service, as well as an open source version that anyone can put to use. We just saw the same moves from [3Scale with the release of APITools](http://apievangelist.com/2014/06/18/apitools-raises-the-bar-with-open-onpremise-api-testing-and-monitoring-tools/), and now AutoDevBot with API Monitor Runner.

I’d love to see other critical building blocks of the API economy emulate this approach—there is plenty of money to be made from cloud services, while also providing open tool that will stimulate API growth across many business sectors. Which, creates more need for services.