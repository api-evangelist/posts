---
layout: post
title: Common Building Blocks of Cloud APIs
image: https://s3.amazonaws.com/kinlane-productions2/AWS_LOGO_CMYK.jpg
author:
  name: kinlane
tags:
  - Cloud
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/AWS_LOGO_CMYK.jpg)](http://aws.amazon.com/)

I’ve been profiling the API management space for almost four years now, and one of the things I keep track of is what some of the [common building blocks of API management](http://management.apievangelist.com/building-blocks.html) are. Recently I’ve pushed into other areas like [API design](http://design.apievangelist.com/building-blocks.html), [integration](http://integration.apievangelist.com/building-blocks.html) and into [payment APIs](http://payments.apievangelist.com/building-blocks.html), trying to understand what the common elements providers are using to meet developer needs.

Usually I have to look through the sites of leading companies in the space, like the [38 payment API providers](http://apievangelist.com/2014/02/26/payment-apis-that-i-am-watching/) I’m tracking on to find all the building blocks that make up the space, but when it came to cloud computing it was different. While there are several providers in the space, there is but a single undisputed leader—[Amazon Cloud Services](http://aws.amazon.com/). I was browsing through AWS yesterday and I noticed their new products & solutions menu, which I think has a pretty telling breakdown of the building blocks of cloud APIs.

**Compute & Networking**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-compute.png)

**Compute** - Virtual Servers in the Cloud (Amazon EC2)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-autoscaling.png)

**Auto Scaling** - Automatic vertical scaling service (AutoScaling)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-loadbalancing.png)

**Load Balancing** - Automatic load balancing service (Elastic Load Balancing)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-instance.png)

**Virtual Desktops** - Virtual Desktops in the Cloud (Amazon WorkSpaces)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-network.png)

**On-Premise** - Isolated Cloud Resources (Amazon VPC)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-route53.png)

**DNS** - Scalable Domain Name System (Amazon Route 53)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-directconnect.png)

**Network** - Dedicated Network Connection to AWS (AWS Direct Connect)

**Storage & CDN**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-s3.png)

**Storage** - Scalable Storage in the Cloud (Amazon S3)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-glacier.png)

**Bulk Storage** - Low-Cost Archive Storage in the Cloud (Amazon Glacier)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-ebs.png)

**Storage Volumes** - EC2 Block Storage Volumes (Amazon EBS)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-importexport.png)

**Data Portability** - Large Volume Data Transfer (AWS Import/Export)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-storagegateway.png)

**On-Premise Storage** - Integrates on-premises IT environments with Cloud storage (AWS Storage Gateway)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-cloudfront.png)

**Content Delivery Network (CDN)** - Global Content Delivery Network (Amazon CloudFront)

**Database**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-rds.png)

**Relational Database** - Managed Relational Database Service for MySQL, Oracle, SQL Server, and PostgreSQL (Amazon RDS)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-dynamo.png)

**NoSQL Database** - Fast, Predictable, Highly-scalable NoSQL data store (Amazon DynamoDB)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-elasticache.png)

**Data Caching** - In-Memory Caching Service (Amazon ElastiCache)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-rds.png)

**Data Warehouse** - Fast, Powerful, Fully Managed, Petabyte-scale Data Warehouse Service (Amazon Redshift)

**Analytics**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-emr.png)

**Hadoop** - Hosted Hadoop Framework (Amazon EMR)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-kinesis.png)

**Real-Time** - Real-Time Data Stream Processing (Amazon Kinesis)

**Application Services**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-appstream.png)

**Application Streaming** - Low-Latency Application Streaming (Amazon AppStream)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-search.png)

**Search** - Managed Search Service (Amazon CloudSearch)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-workflow.png)

**Workflow** - Workflow service for coordinating application components (Amazon SWF)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-sqs.png)

**Messaging** - Message Queue Service (Amazon SQS)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-ses.png)

**Email** - Email Sending Service (Amazon SES)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-sns.png)

**Push Notifications** - Push Notification Service (Amazon SNS)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-dollar-sign.png)

**Payments** - API based payment service (Amazon FPS)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-transcoding.png)

**Media Transcoding** - Easy-to-use scalable media transcoding (Amazon Elastic Transcoder)

**Deployment & Management**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-console.png)

**Console** - Web-Based User Interface (AWS Management Console)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-iam.png)

**Identity and Access** - Configurable AWS Access Controls (AWS Identity and Access Management (IAM))

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-cloud.png)

**Change Tracking** - User Activity and Change Tracking (AWS CloudTrail)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-cloudwatch.png)

**Monitoring** - Resource and Application Monitoring (Amazon CloudWatch)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-elasticbeanstalk.png)

**Containers** - AWS Application Container (AWS Elastic Beanstalk)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-cloudformations.png)

**Templates** - Templates for AWS Resource Creation (AWS CloudFormation)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-opsworks.png)

**DevOps** - DevOps Application Management Services (AWS OpsWorks)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/aws-hsm.png)

**Security** - Ops Application Management Services (AWS OpsWorks)Security - Hardware-based Key Storage for Regulatory Compliance (AWS CloudHSM)

The reason I look through at these spaces in this way, is to better understand the common services that API providers are, that are really making developers lives easier. Through assembling a list of the common building blocks, it allows me look at the raw ingredients that makes things work, and not get hunt up with just companies and their products.

There is a lot to be learned from API pioneers like Amazon, and I think this list of building blocks provides a lot of insight into what API driven resources the are truly making the Internet operate in 2014.