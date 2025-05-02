---
published: true
layout: post
title: Reverse Engineering the APIs Behind Everything With Mitmproxy
date: 2025-04-21T09:00:00.000Z
tags:
  - Proxies
  - Reverse Engineer
  - Traffic
  - Add-Ons
  - OpenAPI
  - Command Line Interface
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/birth-of-a-nation-old-man-crossing-border.jpg
---
Pulling back the curtain on the web and mobile applications we use each day is a common way for us to make sense of how things work. I have regularly used Charles Proxy to map out my personal and professional API landscape, and made the most of Postman Interceptor for many years to do the same in Chrome. To continue the journey, but provide an open-source and free approach that my readers and customers can use I have shifted to using [Mitmproxy](https://bit.ly/4jtATCs) which provides me with the following capabilities.

- [**Command Line**](https://bit.ly/4jtATCs#mitmproxy) - Provides a command line I can use locally and via automation.
- [**Web-Based**](https://bit.ly/4jtATCs#mitmweb) - Provides a simple but powerful web interface anyone can use.
- [**Add-Ons**](https://github.com/mitmproxy/mitmproxy/tree/main/examples/contrib) - Is open to the community using add-ons to accomplish your goals.
- [**OpenAPI**](https://github.com/alufers/mitmproxy2swagger) - Will translate the traffic behind your applications into OpenAPI specs.

Routing all the traffic on your MacBook through Mitmproxy is the best way to understand the APIs in use by any web or mobile application you are using. It is the quickest way to bootstrap the mapping of the API landscape you produce behind your applications, as well as understand the APIs in use behind the 3rd-party applications you depend on. You can learn a lot about APIs by proxying your traffic, revealing how tech companies are using your data, tracking on your usage of technology that is connected to the Internet.