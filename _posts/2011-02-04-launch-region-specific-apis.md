---
layout: post
title: Launch Region Specific APIs
url: http://apievangelist.com/2011/02/04/launch-region-specific-apis/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - APIs
---
With the [increase growth in API usage in 2010](http://blog.programmableweb.com/2011/01/03/api-growth-doubles-in-2010-social-and-mobile-are-trends/), and expected growth in 2011, the need for high availability [APIs](http://www.apievangelist.com/) will increase. ![](http://kinlane-productions2.s3.amazonaws.com/global-regional-api.jpg) One way to localize usage and increase API performance is to deploy region specific APIs.

There are several ways to do this including [global cloud load balancing](http://www.kinlane.com/2010/07/zeus-cloud-software/), but a more cost effective tool is [Amazon EC2](http://www.kinlane.com/category/amazon/amazon-ec2/) Availability Zones.

Using [Amazon EC2](http://www.kinlane.com/category/amazon/amazon-ec2/) you could deploy region specific servers in the following regions:

*   United States - West Coast
*   United States - East Coast
*   European Union (EU)
*   Asia Pacific

Using 4 separate servers I can create separate regional APIs sub-domains:

*   api.uswest.apievangelist.com
*   api.useast.apievangelist.com
*   api.eu.apievangelist.com
*   api.asia.apievangelist.com

If API usage grows in one region or another, regional Amazon EC2 servers can be deployed into necessary Amazon Availability Zones.

Something to consider when trying to scale your API and deliver high quality service on a budget.