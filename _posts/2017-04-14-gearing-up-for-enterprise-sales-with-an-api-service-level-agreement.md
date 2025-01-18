---
layout: post
title: Gearing Up For Enterprise Sales With An API Service Level Agreement
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_sla.png
atomdate: 2017-04-14T19:00:00.000Z
tags:
  - Enterprise
  - Sales
  - Service Level Agreement
---
I am working through the [AWS APIs](http://amazon.web.services.stack.network/) and the [Google APIs](http://google.stack.network/), and profiling the building blocks across both of these API operations. My objective in doing this work is to learn as much as I possibly can about how these companies are doing APIs. After diving into Google's APIs I noticed that they were slightly more ahead of the curve when it comes to providing server level agreements (SLA) for their cloud APIs, than AWS.

I noticed nine while working through Google APIs:

*   **BigQuery** - [https://cloud.google.com/bigquery/sla](https://cloud.google.com/bigquery/sla)
*   **StackDriver** - [https://cloud.google.com/stackdriver/sla](https://cloud.google.com/stackdriver/sla)
*   **Key Management Service** - [https://cloud.google.com/kms/sla](https://cloud.google.com/kms/sla)
*   **Datastore** - [https://cloud.google.com/datastore/sla](https://cloud.google.com/datastore/sla)
*   **Pub/Sub** \- [https://cloud.google.com/pubsub/sla](https://cloud.google.com/pubsub/sla)
*   **Maps** - [https://enterprise.google.com/maps/terms/maps-sla.html](https://enterprise.google.com/maps/terms/maps-sla.html)
*   **Prediction** - [https://cloud.google.com/prediction/sla](https://cloud.google.com/prediction/sla)
*   **Compute -** [https://cloud.google.com/compute/sla](https://cloud.google.com/compute/sla)
*   **App Engine** \- [https://cloud.google.com/appengine/sla](https://cloud.google.com/appengine/sla)

I noticed five SLAs while working through AWS APIs:

*   **EC2** - [https://aws.amazon.com/ec2/sla/](https://aws.amazon.com/ec2/sla/)
*   **Route 53** - [https://aws.amazon.com/route53/sla/](https://aws.amazon.com/route53/sla/)
*   **S3** - [https://aws.amazon.com/s3/sla/](https://aws.amazon.com/s3/sla/)
*   **CloudFront** - [https://aws.amazon.com/cloudfront/sla/](https://aws.amazon.com/cloudfront/sla/)
*   **RDS** - [https://aws.amazon.com/rds/sla/](https://aws.amazon.com/rds/sla/)

I am sure there are other dedicated SLA pages I'm missing, as well as SLAs embedded in the documentation and terms of service of systems. From what I can tell, these dedicated SLAs for APIs are in response to a shift in the landscape to sell more services to the enterprise, requiring that these details of doing business move front and center. With the volatility often associate with APIs in recent years, I'm guessing an API SLAs will continue to become an essential element in all API integration decisions in coming years.

There has been enough movement in the area of API service level agreements for me to consider adding a dedicated research area to my work. [I've written about the SLA APIs I've stumbled](http://apievangelist.com/2016/10/03/a-service-level-agreement-api-for-api-service-providers/) [across](http://apievangelist.com/2016/10/03/a-service-level-agreement-api-for-api-service-providers/), and seeing SLAs float to the top with the bigcos, so it makes sense to pay closer attention to what is happening. Eventually, I'll aggregate the common building blocks across the API SLAs I'm finding, and the other more unique approaches to ensuring API reliability and stability when doing business online today.