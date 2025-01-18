---
layout: post
title: Superfeedr XMPP over HTML5 WebSockets
url: http://apievangelist.com/2011/04/04/superfeedr-xmpp-over-html5-websockets/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Web
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/superfeedr-logo.png)](http://superfeedr.com "Superfeedr")[Superfeedr](http://superfeedr.com "Superfeedr") keeps showing what a pioneer they are when it comes to web, API and feed technology, with a [release of an Ejabber module that builds WebSockets into an XMPP server](http://blog.superfeedr.com/xmpp-over-websockets/ "release of an Ejabber module that builds Websocks into an XMPP server").

XMPP provides identity, authentication, presence, and notifications for APIs and other feeds, and with the growing adoption of HTML5, the [WebSockets API](http://dev.w3.org/html5/websockets/ "HTML5 WebSockets API") is the perfect built-in browser client to interact with APIs and feeds in the browser.

The [Superfeedr Ejabber module](https://github.com/superfeedr/ejabberd-websockets "Superfeedr Ejabber Module") is written in Erlang and available over at [Github](https://github.com/superfeedr/ejabberd-websockets "Github"). They recommend you use the module with [Strophejs](https://github.com/metajack/strophejs "SropheJS"), an XMPP library written in Javascript.

XMPP is growing in popularity as a protocol for providing real-time API and feed updates, while increasing the efficiency of API networks by minimizing polling of API endpoints.