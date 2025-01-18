---
published: true
layout: post
title: Is it an Amazon or AWS Branded Service
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/copper_circuit_img_7072.jpg
author:
  name: kinlane
tags:
  - Amazon
  - Business
  - Branding
---
[I’m working on 50+ AWS Postman collections at the moment](https://github.com/api-evangelist/aws), as well as [crafting Postman environments for use across them](https://github.com/api-evangelist/aws/blob/master/environments.md). I’ve encountered some namespace challenges in this work, and I was needing to establish a naming convention for the key / value pairs I’m using within my Postman environments. To help establish the namespaces I am just taking the display name for each of the APIs I am profiling, but one thing I’m noticing is that there are two different names in use across APIs, being either AWS or Amazon—with no rhyme or reason why a service is labeled one way or the other. 

[Looking down the list of all the services they have](https://docs.aws.amazon.com), I would say that **AWS** is more prominent than **Amazon** as the beginning namespace for each service. I’m just curious if there is any guidance or rhyme or reason to the naming of services launched under AWS. At first it feels like I’m being too pedantic, but from a branding, and even programmatically across services, it seems like having a common naming convention for services would make sense. [Like my thoughts on the API design consistency across AWS APIs](http://apievangelist.com/2019/11/25/api-design-consistency-across-amazon-web-services/), I’m not trying to shame AWS, I am just trying to learn from what is happening, and share what I find with other API providers. I regularly use Amazon as an example to learn from in my API storytelling, which unfortunately sets them up for constructive criticism as well--I am sure they can handle. ;-)

For my environment variable challenge I am simply going to prefix my variables with aws as the service namespace. I’m just standardizing for shortness, ease of use, and distinguishing AWS APIs from the other API providers I’m profiling. I was more interested in just pausing and thinking about why this occurs, and work to think more deeply about how we name our APIs. For me, the lessons around naming our APIs is more about pushing us to put ourselves in our consumers shoes, and see our platform from the outside in. Something like naming of our services might seem trivial when you are inside of the firewall, but when it comes to working externally with the rest of the world these things matter a lot.

When you [look down the list of services on their primary documentation page](https://docs.aws.amazon.com) it is interesting to see whether a service is prefixed with AWS or Amazon, and I also notice there are a handful like Service Quotas, Tag Editor, and Elastic Load Balancing that have no prefix at all. Interesting. I love working with Amazon APIs because there are always a lot of lessons present. Amazon has been doing APIs for a long time, and they have a lot of different services available. Like every other API provider they have to make a lot of decisions along the way across many different teams, and sometimes these little things can fall through the cracks if we aren’t talking about, and telling stories about what is happening. The naming of our APIs is one of the most important steps you can take early on in an APIs life cycle, and having a well branded approach that is communicated consistently across teams can make a big impact down the road.