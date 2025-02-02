---
layout: post
title: 'Caching APIs With CloudFormations Or OpenShift '
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-cache.png
author:
  name: kinlane
tags:
  - Cloud
  - Caching
  - APIs
  - Open
---
During the recent federal government shutdown this last fall, the concept of API redundancy became much more important for me, and I hope for others as well. The need to ensure public open data and APIs, as well as private sector resources, stay available is becoming increasingly vital.

As I work through these thoughts I'm playing with different approaches to caching some types of APIs. In my experimentation, I'm using [AWS CloudFormation](http://aws.amazon.com/cloudformation/) and [RedHat OpenShift](https://www.openshift.com/) to deploy caches of commonly used APIs resources.

Each type of API deployment is designed to sync with the mothership upon activation, and then receive regular updates of data via API + webhooks, with all updates to the code being done with Github.

In the future maybe we can make API addressing work somewhat like peer-to-peer file sharing, where I can receive multiple API endpoints for a common resource. Of course this wouldn't work for more unique APIs, but for commonly used APIs it could be a way to create redundancy and establish in fault tolerance in our applications.

At first I will be testing this out with data APIs like government facility locations by topic or state, then more complex API resources like website screenshots, or image manipulation APIs. If you have any specific type of API you'd like to see deployed in this way, let me know.