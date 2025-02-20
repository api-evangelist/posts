---
layout: post
title: RESTful Business Architecture
url: http://apievangelist.com/2011/04/09/restful-business-architecture/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Business
  - REST
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/blueprints.jpg)In my quest to fully understand the underlying principles of Representational State Transfer (REST), i'm re-reading Roy Thomas Fielding original dissertation, [Architectural Styles and the Design of Network-based Software Architectures](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm "Architectural Styles and the Design of Network-based Software Architecture"), where he first introduced the REST architectural style.

His dissertation explored the junction of two disciplines in computer science: _software and networking_.

He identifies that software research:

> _...has long been concerned with the categorization of software designs and the development of design methodologies, but has rarely been able to objectively evaluate the impact of various design choices on system behavior._

While networking research:

> _...is focused on the kinlane-productions2.s3.amazonaws.comavior between systems and improving the performance of particular communication techniques, often ignoring the fact that changing the interaction style of an application can have more impact on performance than the communication protocols used for that interaction._

![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/parthenon.jpg) Fieldings work was motivated by the desire to understand and evaluate the architectural design of network-based application software. He wanted to rethink software design in the context of the World Wide Web.

The World Wide Web is intended to be an Internet-scale, distributed system, interconnecting information networks across organizational boundaries, and cope with the demands of scalability and independent deployment of software.

As Fielding states:

> _REST provides a set of architectural constraints that, when applied as a whole, emphasizes scalability of component interactions, generality of interfaces, independent deployment of components, and intermediary components to reduce interaction latency, enforce security, and encapsulate legacy systems._

As I'm reading his abstract and introduction I can't help but think about where I stand as an [API Evangelist](http://apievangelist.com/2011/04/09/api-evangelism-vs-developer-evangelism/ "API Evangelist"), at the convergence of business and RESTful APIs.

When RESTful APIs are applied to business, what does this look like? Is business currently restricted in the same ways as software? When business is operating on the World Wide Web do we need to consider the network more?

Lots to consider at the intersection of business and RESTful APIs.