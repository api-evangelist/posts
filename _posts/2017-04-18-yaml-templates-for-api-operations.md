---
layout: post
title: YAML Templates For API Operations
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_04_16_at_5.38.15_pm.png
atomdate: 2017-04-18T16:00:00.000Z
tags:
  - Templates
  - YAML
  - Operations
---
I am seeing a significant number of infrastructure orchestration solutions in the cloud start using YAML templates as the core setting of settings and instructions for workflows. [Amazon recently introduced YAML templates for your AWS CloudFormations](https://aws.amazon.com/about-aws/whats-new/2016/09/aws-cloudformation-introduces-yaml-template-support-and-cross-stack-references/), where you can define the infrastructure templates you are using throughout the API life cycle. These AWS YAML templates are fast becoming the central definition to be used across AWS operations, with [support in the AWS Service Catalog](https://aws.amazon.com/about-aws/whats-new/2017/02/aws-service-catalog-introduces-support-for-yaml-formatted-aws-cloudformation-templates/).

Whether you use AWS or not, working to define your infrastructure using YAML templates help define what is going on. I'm seeing significant adoption of [OpenAPIs](https://www.openapis.org/) in YAML, and I'm even beginning to create API operational indexes using [APIs.json](http://apisjson.org) converted into YAML (there is a naming lesson in there). I also have YAML templates for [each area of my API lifecycle research](http://apievangelist.com), providing me machine readable definitions for everything from news to patents, that I then use across my API research and storytelling.

[I feel the same way about YAML as I did about JSON a decade ago](http://apievangelist.com/2016/09/20/i-am-feeling-the-same-about-yaml-as-i-did-with-json-a-decade-ago/), and it is quickly becoming my preferred format for any structured data, no matter where it is used in my operations. YAML + Github is quickly becoming the engine for some interesting ways of delivering infrastructure, and specifically API infrastructure, in a consistent way that is easy to communicate with others. This example focuses on AWS usage of YAML, but it is something I'm seeing from Google and other tech giants. I think the readability of YAML (minus quotes and brackets) makes it accessible to a wider audience beyond developer groups, something that is going to be critical to doing APIs at scale.