---
layout: post
title: Get A List Of All Classes At UC Berkeley With API Call
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/berkeley-api-central.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/university/uc-berkeley/berkeley-api-central.png)](https://developer.berkeley.edu/)

I see a lot of dead simple, yet meaningful uses of APIs come across my desk (I don’t have a desk, why do I keep saying this?) each day. One I saw today is something every school, whether K-12, college or university should have.

Using the UC Berkeley API, you can get a list of all departments:

> _\_curl -v -X GET "https://apis-dev.berkeley.edu/cxf/asws/department?departmentCode=a&app\_id=309fe68e&app\_key=51b9d67dc4f0501eed763822a641b17b"\__

Then with the proper department code you can pull a list of classes:

> _\_curl -v -X GET "https://apis-dev.berkeley.edu/cxf/asws/classoffering?departmentCode=ARCH&app\_id=your-id&app\_key=your-key"\__

With the proper keys, anyone can easily pull relevant UC Berkeley department and class data to use in website or app, or even populate a Google Spreadsheet for other purposes.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/university/uc-berkeley/uc-berkeley-get-classes.jpg)](https://developer.berkeley.edu/)

The [UC Berkeley API Management Portal](https://developer.berkeley.edu/ "UC Berkeley API Management") is brand new, I’m still working on separate story regarding their approach, but I wanted to talk about how good it is to see such straightforward, valuable uses of an API at a leading university.

This simple example is something you should be able to do by default at all schools across the country.

The best part is that the API team is actively communicating these uses of the API on Google+, which is how I came across the story.