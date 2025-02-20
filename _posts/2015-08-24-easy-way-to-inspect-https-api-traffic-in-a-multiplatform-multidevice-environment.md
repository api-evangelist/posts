---
layout: post
title: >-
  Easy Way to Inspect HTTP(S) API Traffic in a Multi-platform, Multi-device
  Environment
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/mitmproxy-long.png
author:
  name: kinlane
tags:
  - Environment
  - HTTP
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/mitmproxy-long.png)](https://mitmproxy.org/)

_This is a deep dive from one of my loyal readers, who doesn't just listen to what I write, he is pushing my own research in new directions, and reporting back to me. You have read his work before in [API Police Report: Raw Thoughts From On-Boarding With Your API](http://apievangelist.com/2015/07/06/api-police-report-raw-thoughts-from-onboarding-with-your-api/), and this time Bob Salita is building on [my own proxy work with Charles Proxy](http://apievangelist.com/2015/06/21/parsing-charles-proxy-exports-to-generate-swagger-definitions-while-also-linking-them-to-each-path/). Guest posts isn't something I do on API Evangelist, but when you are pushing the conversation forward like Bob does, I can't help but share._

I'm a multi-platform, multi-device developer. I wanted an easy way to inspect HTTP(S) API traffic (requests, responses) from one of my many development devices. Inspection can be achieved by using (reverse) proxy software such as [Charles](http://www.charlesproxy.com/), [Fiddler](http://www.telerik.com/fiddler), [squid](http://www.squid-cache.org/), or [mitmproxy](https://mitmproxy.org/). The usual method is to make proxy changes to a device so traffic is forced to a system running a reverse proxy. This process is inconvenient and error prone in multi-device environments. For every device, one has to discover how to make a proxy change, then manually effect the change, and then manually reverse the change when inspection is done. I found the process annoying and error-prone. There had to be a better way.

It occurred to me that the ideal setup would be a router where the WAN's gateway was a system running a transparent proxy. Thus simply by connecting the device to the router, the transparent proxy software would capture HTTP and HTTPS traffic. After weeks of research, testing of many configurations and software, I am pleased to document a working configuration.

The first step is to install [mitmproxy](https://mitmproxy.org/) (Linux, OS/X), or [mitmdump](https://mitmproxy.org/) (Linux, OS/X, Windows) on a system. I've tested mitm software on OS/X and Windows only. The same software is known to run on Linux, I personally haven't tested there yet. OS/X proved to be a better platform than Windows because it can run the console UI program called mitmproxy, whereas Windows users have to settle for the simplistic screen scrolling text program called mitmdump. There actually is another option, called mitmweb, but it's beta. mitmweb a fascinating variation of proxy UI, I highly recommend giving it a try. It may become a killer proxy UI.

The second step is to configure a dedicated router, call it "PROXY", that gatways traffic to the transparent proxy created in step 1. PROXY router eliminates the need for the annoying proxy changes for every device. You simply connect the device to PROXY and your traffic instantly becomes inspected. I used a super cheap router (TP-Link WR841N $20), loaded dd-wrt, but I think any router will probably work. Configure the router's WAN gateway to point to the transparent proxy system (e.g. 192.168.1.27). You may need to explicitly configure the WAN's DNS servers too, if so, I used Google's DNS servers at 8.8.8.8 and 8.8.4.4. Configure the LAN to be some private IP, I used 192.168.3.1. When you connect a device, the router will assign a private IP address (e.g. 192.168.3.50).

You're now done. Connect any of your devices to PROXY router and the HTTP(S) traffic will appear in mitm software on the transparent proxy (gateway'ed) system. When finished inspecting, reconnect to your everyday router. No device fiddling ever needed.

Although the above steps are simple, it took considerable time to investigate all the alternative configurations. In the end, I found no other working software option, only mitm transparent proxy worked. Charles and Fiddler are lacking a working transparent proxy feature. squid transparent proxy likely works on Linux but I didn't test it. It's unfortunate that Charles and Fiddler proxy software didn't work as a transparent proxy. I âmuch prefer Fiddler over mitmproxy because of Fiddler's superior UI and my personal preference for C# and .Net.

_I am sharing Bob's instructions, so that you all can play with as well. I have an API setup to process any Charles Proxy file, and generate Swagger definitions from them, something I'd like to see occur from this implementation as well. Understanding how the web and mobile applications we depend on are using APIs, is becoming increasingly important. Thanks for your work Bob!_