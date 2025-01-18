---
layout: post
title: The Monitoring Layer Of The DevOps Aggregation API Platform
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puzzle-four-pieces.png
atomdate: 2016-10-14T22:00:00.000Z
tags:
  - Monitoring
  - Aggregation
  - Platform
  - DevOps
---
While spending some time going through my [API monitoring research](http://monitoring.apievangelist.com/) I found myself creating [an OpenAPI spec and APIs.json index for the DataDog API](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/api-commons/datadog/apis.yaml), and had the realization that this is the beginning of what I'm looking for when [I was talking about a DevOps aggregation API platform](http://apievangelist.com/2016/08/23/who-is-going-to-do-the-devops-aggregation-api-platform/). DataDog is just the monitoring layer of this vision I have, but it has many of the other elements I'm looking for.

[DataDog has all the monitoring elements present in their API platform](http://docs.datadoghq.com/api/), and they have [all the platform integrations I'm envisioning in a DevOps aggregate API](http://docs.datadoghq.com/integrations/). We just need the same thing for [design](http://design.apievangelist.com), [deployment](http://deployment.apievangelist.com), [virtualization](http://virtualization.apievangelist.com), [serverless](http://serverless.apievangelist.com), [DNS](http://dns.apievangelist.com), [SDK](http://sdk.apievangelist.com), [documentation](http://documentation.apievangelist.com), and the other [critical stops along a modern API life cycle](http://apievangelist.com).

I'll keep profiling the APIs for the service providers in my life cycle research until I get more of this DevOps aggregate API definition mapped out. Hopefully, I will stumble across other providers like DataDog who are doing such an interesting job with the choreography, and orchestration that will be needed to work across so many platforms. I appreciate API aggregation service providers who 1) have an API, and 2) share so much of the definition behind their work.

The next thing I will work on is profiling the metrics that DataDog has defined across the platforms they integrate with. [Take a look at the metrics they have defined for each integration](http://docs.datadoghq.com/integrations/awskinesis/), there are some valuable patterns available in their work. I'd love to see a common set of API monitoring metrics emerge from across providers, something that if we standardize and share in a machine readable way, others will emulate--making interoperability much smoother when it comes to monitoring.

I just wanted to keep beating my drum about the fact that APIs aren't just about building applications, they are also critical to the API life cycle, and making sure there are stable, scalable APIs to build applications on top of in the first place.