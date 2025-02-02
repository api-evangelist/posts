---
layout: post
title: Deploy and Manage API on Amazon Web Services (AWS)
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-logo.png
author:
  name: kinlane
tags:
  - Web
  - AWS
  - Amazon
  - Amazon Web Services
  - Services
---
[![](https://s3.amazonaws.com/kinlane-productions2/AWS_LOGO_CMYK.jpg)](http://aws.amazon.com/)

For the longest time I would get asked, "Which API service provider should I use to deploy my APIs?". This was a tough question, because historically the API management providers don't help you deploy your APIs, they only help you manage them.

Deploying your APIs was up to you. Generally you already had some sort of internal system that you would use to generate RESTful interfaces or you'd go find your own open source API framework and deploy. Then you'd proxy or connect your API to one of the API service providers.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/3scale-logo.jpg)](http://www.3scale.net/)

These lines are now blurred by providers like [Intel with their enterprise API gateway](http://cloudsecurity.intel.com/), and through API deployment resources from [3Scale](http://3scale.net). 3Scale is investing in open source server technology for [NGINX](http://wiki.nginx.org/Main), and blueprints for API deployment using Amazon Web Services.

3Scale recently published a quickstart tutorial on [how to deploy an API on Amazon EC2 for Amazon Web Services](http://www.3scale.net/2013/02/quickstart-tutorial-on-how-to-deploy-an-api-on-amazon-ec2-for-amazon-web-services-aws-rookies/ "how to deploy an API on Amazon EC2 for Amazon Web Services") (AWS), and manage it using 3Scale API management. My favorite part is that everything in this tutorial is completely FREE. A critical element to experimenting with APIs.

The 3Scale, AWS walk-though provides details for:

*   Creating and configuring EC2 Instance
*   Preparing Instance for Deployment
*   Deploying a demo API solution
*   Enabling API Management with 3Scale
*   Implementing an Nginx Proxy for Access Control

There are several important things going on here, beyond being able to do this for free with an entry level AWS and 3Scale accounts. But I can’t emphasize enough, the value of this being free and allowing you to explore, experiment and iterate with your API--without spending a fortune! This is critical to not just your API initiative, but contributes to a more healthy API space in general.

After being free, you are using proven open source technology like Ubuntu for server OS and NGINX for your web server. [3Scale has invested in tools for NGINX](http://apievangelist.com/2012/11/15/3scale-launches-open-source-api-proxy-build-on-ngnix/), rather than building their own proprietary solutions, because NGINX has been proven to deliver at scale and has large community to support it.

[![](https://s3.amazonaws.com/kinlane-productions2/nginx/nginx-logo.png)](http://wiki.nginx.org/Main)

Third, with this solution, you retain control over your infrastructure. You are deploying on the proven Amazon cloud (which I hope you are already using in other areas), and you are connecting to free API management services with the opportunity to buy premium services. You are not proxying all your data and valuable API resources through a 3rd party proxy. You are connecting to the API management services you need like rate limits, access controls and analytics without giving up control over your data and resources.

I’m going to do the [3Scale API deployment tutorial](http://www.3scale.net/2013/02/quickstart-tutorial-on-how-to-deploy-an-api-on-amazon-ec2-for-amazon-web-services-aws-rookies/) myself, so that I know the process inside and out, have my own AMIs ready to deploy on AWS, and be able to walk others through, when possible.