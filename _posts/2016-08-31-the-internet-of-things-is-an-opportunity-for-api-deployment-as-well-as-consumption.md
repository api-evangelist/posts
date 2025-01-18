---
layout: post
title: >-
  The Internet of Things Is An Opportunity For API Deployment As Well As
  Consumption
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-two-way-arrows.png
atomdate: 2016-08-31T22:00:00.000Z
tags:
  - Deployment
  - Internet of Things
  - Consumption
---
Overall I am pretty underwhelmed by the Internet of Things. Most of the ways in which devices are being connected to the Internet are not very interesting, if not just a bad idea. Even with the overwhelming ways in which I am being underwhelmed by IoT, there are a handful of areas that I do find interesting, [like industrial implementations](http://industrial.apievangelist.com), drones, and the general potential of the concept when you do it thoughtfully and securely.

One of the differences between IoT and the other areas that are fueling APIs in 2016 is that they can be both an API provider, as well as an API consumer. While mobile applications have historically been the biggest driver of API development, they are just API consumers, as are most websites. There is a handful of API aggregation and integration as a service providers who consumer APIs, then also provide APIs who pay this forward ([sadly not all API service providers do this](http://apievangelist.com/2016/04/05/api-integration-service-providers-should-have-an-api-so-that-their-actions-are-embeddable/)), but in the end, most endpoints are just consumers.

When it comes to IoT devices, this is where it gets interesting to me. These Internet-enabled devices can be both API consumers, and API providers--which I think everyone should be, but that is another dimension to this conversation. Deploying Linux, virtualized containers like Docker, and a web server on Raspberry Pi and other popular IoT devices is pretty trivial. This opens up the ability to not just send and receive data to the cloud via APIs, but also a number of possibilities for redefining the network--where APIs are not just about the current incarnation of cloud APIs.

I'm not saying that all implementations of IoT devices in this way will be interesting, but It does evolve the definition of what is possible when it comes APIs, especially when you couple this with the expanding definition of what is the network (ie. cellular, mesh, SDN, etc.). However, it does also continue expanding the attack surface area when it comes to IoT security, but I'm sure everyone is thinking deeply on this subject when it comes to evaluating whether or not a device should be connected to the network at all. ;-)