---
layout: post
title: AWS API Reference Architecture
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-ecommerce-reference-architecture.png
author:
  name: kinlane
tags:
  - AWS
  - Reference
---
I was checking out the [updates to the AWS Reference Architecture](http://aws.typepad.com/aws/2013/02/three-new-aws-reference-architectures-for-e-commerce.html), where they provide blueprints for how you can use AWS. In this version AWS provides an e-commerce architecture reference--providing a system overview, a detailed architectural diagram, and a list of the AWS services used in the architectural approach.

The AWS e-commerce architecture reference provides three separate areas:

*   **Web Frontend** \- This is a reference architecture for the web frontend of an e-commerce site. It makes use of Route 53, CloudFront, Elastic Beanstalk, S3, ElastiCache, DynamoDB and CloudSearch
*   **Checkout Pipeline** \- This is a reference architecture for a secure and highly available checkout pipeline service for an e-commerce site. It uses the Virtual Private Cloud, the Simple Workflow Service, Elastic Beanstalk, the Relational Database Service, and the Simple Email Service
*   **Marketing & Recommendations Service** - This is a reference architecture for a marketing and recommendation service for an e-commerce site. It uses Elastic MapReduce, S3, Elastic Beanstalk, the Relational Database Service, DynamoDB, and the Simple Email Service

Beyond providing the [detailed reference card](http://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_ecommerce_webfrontend_14.pdf), AWS provides more information on a [three-day course in AWS Architecture Training](http://aws.amazon.com/aws-training/architect/) that will be held in numerous U.S. cities this spring.

I will add API architecture references as a [building block for API owners](/) to consider when planning and managing an API. If you can provide clear blueprints for developers to follow, you can increase the chances developers will be successful with integration of an API into their application or systems.