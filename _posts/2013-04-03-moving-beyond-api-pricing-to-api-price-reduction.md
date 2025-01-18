---
layout: post
title: Moving Beyond API Pricing to API Price Reduction
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/aws-pricing.png
author:
  name: kinlane
tags:
  - Pricing
---
I get a lot of inquiries from API owners about how they should price their API access in a way that will make sense to developers, but also help them generate revenue from their valuable API resources.

As most of us are still trying to figure out sensible pricing for our new APIs, or better understand how to adjust and evolve pricing to better suit existing developers--Amazon is busy reducing their cloud API pricing.  

I got a simple email from Amazon today:

_Dear Amazon S3 Customer,_

_We are excited to announce that we are reducing [Amazon S3 request prices](http://www.amazon.com/gp/r.html?R=2SXVU4T3VRUWB&C=J2HG6JVZ1C5L&H=PVA7GS7QEGLCGOTDJIF9KXXMGHEA&T=C&U=http%3A%2F%2Faws.amazon.com%2Fs3%2Fpricing%3Fref_%3Dpe_12300_29052180_8) in all nine of our regions. We are lowering the prices for GET requests by 60% and the prices for PUT, LIST, COPY, and POST requests by 50%. For example, in the US Standard Region, we are reducing the price of every 1,000 PUT requests from $0.01 to $0.005 and the price of every 10,000 GET requests from $0.01 to $0.004._

_We are happy to pass along these savings to you as we continue to drive down our costs. The new lower prices for all regions can be found on the [Amazon S3 pricing page](http://www.amazon.com/gp/r.html?R=2SXVU4T3VRUWB&C=J2HG6JVZ1C5L&H=PXMXBBGNPMWR1VAGFSTZAJIJ7Y8A&T=C&U=http%3A%2F%2Faws.amazon.com%2Fs3%2Fpricing%3Fref_%3Dpe_12300_29052180_7). New prices are effective April 1st and will be applied to your bill for all requests on or after this date._

_Sincerely,_  
_The Amazon S3 Team_

These price reductions are becoming more frequent across the numerous AWS APIs I depend on like S3, EC2 and RDS.  I have been an S3 user since 2006 and EC2 since 2008, and I didn't see price reductions at all in the early days, but they seem to be a common part of doing business in the cloud today.

The obvious explanation is that competition in the cloud space is heating up, especially with Google stepping up their game, but I think there are other lessons for API owners here. That spending the time to initially develop a sensible pricing model for your API is important, but also continuing to understand how it is working for developers and how they are accessing and putting your API resources to use--which will allow you to reach a place where you know your API, developers and the space you operate so well, you can reduce pricing, while actually increasing your revenue.  

At some point I would like to go back and document all the AWS pricing, to see at what point they were able to have enough of an understanding to begin delivering price reductions, and also see if there are any other correlations in the market that I can identify that have coincided with their pricing decisions.