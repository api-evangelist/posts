---
layout: post
title: Server Side API Templates On AWS Cloud Formation And OpenShift
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-CloudFormation.png
author:
  name: kinlane
tags:
  - Cloud
  - Templates
  - AWS
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/amazon/cloud-formation/aws-CloudFormation.png)](http://aws.amazon.com/cloudformation/)

I created [11 very simple API designs](http://apicommons.org/apis.html) for the launch of [API Commons](http://apicommons.org/). We needed some API definitions to show the potential of the commons, so I wanted to design a handful of common API patterns to seed the launch.

For all 11 API designs I started with a [Swagger definition](https://github.com/wordnik/swagger-core/wiki), then using PHP and the Slim framework I quickly generated server side code for each API. I generate this code programmatically from the Swagger spec, but I also prefer going through the generated code and giving it a human touch.

This approach isn't just for these 11 API design templates, I'm using it for all my projects right now. I'm designing the API definition, generating and modifying the server side code, publishing Swagger UI documentation, then any client side code libraries I will need.

[![](https://s3.amazonaws.com/kinlane-productions2/openshift/openshift-logo.png)](https://www.openshift.com/)

I'm publishing the API definition and Swagger UI, plus a project overview completely on Github. Currently I'm generating PHP / Slim framework driven code on AWS EC2 instance. I'm will expand this to include server side frameworks in Ruby, Python, Node.JS.

Next I will take each API definition + server-side code in PHP, Ruby, Python and Node.js and running on Amazon EC2 and port to run in [AWS Cloud Formation](http://aws.amazon.com/cloudformation/) and [OpenShift](https://www.openshift.com/) from RedHat--providing an open API blueprint that others can deploy in the cloud.

This will be my basic process for any standard API design I'm evolving for [API Commons](http://apicommons.org), APIs I develop internally, as well any API that I design, develop and build for external projects. As with my stories and open data, I want any API I design to be open and reusable by anyone who is in need of the same API.