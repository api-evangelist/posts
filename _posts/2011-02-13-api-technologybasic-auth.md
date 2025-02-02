---
layout: post
title: API Technology - Basic Auth
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Technology
---
Basic Auth is a way for a web browser or application to provide credentials in the form of a username and password.

Because Basic Auth is integrated into [HTTP protocol](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") it is the easiest way for users to authenticate with a [RESTful API](http://en.wikipedia.org/wiki/Representational_State_Transfer "Representational State Transfer").

Basic Auth is easily integrated, however if [SSL](http://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") is not used, the username and password are passed in plain text and can be easily intercepted on the open Internet.

OAuth is a much better choice for RESTful API authentication, but Basic Auth is perfectly suited for APIs that are intended for a wider audience and do not give access to sensitive information.

###### Related articles

*   [Instapaper Launches Full API](http://apievangelist.com/2011/02/10/instapaper-launches-full-api/) (apievangelist.com)
*   [Google Adds API For URL Shortener and Link Analytics](http://blog.programmableweb.com/2011/01/11/google-adds-api-for-url-shortener-and-link-analytics/) (programmableweb.com)
*   [API Status Dashboard with Pingdom](http://apievangelist.com/2011/02/12/api-status-dashboard-with-pingdom/) (apievangelist.com)