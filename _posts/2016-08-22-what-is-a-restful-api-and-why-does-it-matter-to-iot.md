---
layout: post
title: What Is A RESTful API And Why Does It Matter To IoT?
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-internet-of-things.png
atomdate: 2016-08-23T00:00:00.000Z
tags:
  - REST
---
I'm pretty skeptical about many of the reasons behind why companies are connecting devices to the Internet using APIs--I am just not convinced this is the best idea when we already have so many security issues with the standard, and mobile web. Regardless, I'm constantly working to understand the motivation behind a company's motivation to do APIs, as well as what they are telling their customers. 

I published a story last week about [defining the industrial programmable automation controller (PAC) strategy using an API](http://apievangelist.com/2016/08/16/defining-the-industrial-programmable-automation-controller-pac-strategy-using-an-api/), which focuses on the approach by Opto 22. To support their efforts the industrial automation provider [offers up a dedicated page to educating their customers](http://info.opto22.com/snap-pac-rest-api-thank-you) on why you would want to use REST, providing some bullets:

*   Archive I/O and variable data from the PAC directly into Microsoft SQL Server using Microsoft's T-SQL—no OPC or ODBC required
*   Read data from and write data to the PAC from your browser or web-based application using JavaScript.
*   Read or write PAC data using your favorite programming language—C, C++, C#, Java, PHP, Python, and many more
*   Build a mobile application that directly accesses data on your PAC—using Java, Swift, or Xcode 
*   Build a data flow application for communicating with cloud platforms and cloud APIs, using Node-RED and our new SNAP PAC Nodes.

Each of the industrial controllers "includes an HTTP/HTTPS server and RESTful API, compatible with any programming language that supports JavaScript Object Notation (JSON)". In my opinion, this reflects the wider API space that is serving the web and mobile objectives, allowing for integration using any programming language, as well as opening up the devices to API orchestration solutions using [iPaaS](http://ipaas.apievangelist.com), and the variety of other API service provider solutions available in the market.

Ultimately I think using web technology is inexpensive, and avoids the usage of proprietary, vendor specific solutions. As the ability to offer up a web server on any physical object becomes easier and cheaper, the usage of web APIs to interact, integrate, and orchestrate around physical objects will only increase, for better or worse.