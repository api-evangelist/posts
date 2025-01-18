---
layout: post
title: Increased Analytics At The API Client And SDK Level
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/aws_coding_analytics.png
atomdate: 2016-10-05T00:00:00.000Z
tags:
  - SDK
  - Analytics
  - Client
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/aws_coding_analytics.png)](http://docs.aws.amazon.com/mobileanalytics/latest/ug/welcome.html)

I am seeing more [examples of analytics at the API client and SDK level](http://docs.aws.amazon.com/mobileanalytics/latest/ug/welcome.html), providing more access to what is going on at this layer of the API stack. I'm seeing API providers build them into the analytics they provider for API consumers, and more analytic services from providers for the web, mobile, and device endpoints. Many companies are selling these features in the name of awareness, but in most cases, I'm guessing it is about adding another point of data generation which can then be monetized (IoT is a gold rush!).

As I do, I wanted to step back from this movement and look at it from many different dimensions, broken down into two distinct buckets:

*   **Positive(s)**
    *   **More information -** More data than can be analyzed
    *   **More awareness -** We will have visibility across integrations.
    *   **Real-time insights -** Data can be gathered on real time basis.
    *   **More revenue -** There will be more revenue opportunities here.
    *   **More personalization -** We can personalize the experience for each client.
    *   **Fault Tolerance -** There are opportunities for building in API fault tolerance.
*   **Negative(s)**
    *   **More information -** If it isn't used it can become a liability.
    *   **More latency** \- This layer slows down the primary objective.
    *   **More code complexity -** Introduces added complexity for devs.
    *   **More security consideration -** We just created a new exploit opportunity.
    *   **More privacy concerns -** There are new privacy concerns facing end-users.
    *   **More regulatory concerns -** In some industries, it will be under scrutiny.

I can understand why we want to increase the analysis and awareness at this level of the API stack. I'm a big fan of building in resiliency in our clients & SDKs, but I think we have to weigh the positive and negatives before jumping in. Sometimes I think we are too willing to introduce unnecessary code, data gathering, and potentially opening up security and privacy holes chasing new ways we can make money.

I'm guessing it will come down to each SDK, and the API resources that are being put to work. I'll be aggregating the different approaches I am seeing as part of my [API SDK research](http://sdk.apievangelist.com/) and try to provide a more coherent glimpse at what providers are up to. By doing this, I'm hoping I can better understand some of the motivations behind this increased level of analytics being injected at the client and SDK level.