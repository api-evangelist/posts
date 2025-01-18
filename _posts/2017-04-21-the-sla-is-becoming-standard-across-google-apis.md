---
layout: post
title: The SLA Is Becoming Standard Across Google APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_04_21_at_11.16.22_am.png
atomdate: 2017-04-21T22:00:00.000Z
tags:
  - SLA
  - APIs
---
[I've been working my way through all of the Google APIs,](http://google.stack.network/) making sure I have an OpenAPI for each API, as well as an [APIs.json](http://apisjson.org) for the entire API operations. One of the things I index as part of each APIs.json when it is present, is a service level agreement (SLA). Something I found to quickly becoming standard across Google APIs.

In this round of research, I found 17 API-driven services at Google that had an SLA present:

*   App Engine - [https://cloud.google.com/appengine/sla](https://cloud.google.com/appengine/sla)
*   BigQuery - [https://cloud.google.com/bigquery/sla](https://cloud.google.com/bigquery/sla)
*   Compute - [https://cloud.google.com/compute/sla](https://cloud.google.com/compute/sla)
*   Container Engine - [https://cloud.google.com/container-engine/sla](https://cloud.google.com/container-engine/sla)
*   DataFlow - [https://cloud.google.com/dataflow/sla](https://cloud.google.com/dataflow/sla)
*   DataProc - [https://cloud.google.com/dataproc/docs/resources/sla](https://cloud.google.com/dataproc/docs/resources/sla)
*   DataStore - [https://cloud.google.com/datastore/sla](https://cloud.google.com/datastore/sla)
*   DNS - [https://cloud.google.com/dns/sla](https://cloud.google.com/dns/sla)
*   Cloud Key Management - [https://cloud.google.com/kms/sla](https://cloud.google.com/kms/sla)
*   Machine Learning Engine - [https://cloud.google.com/ml-engine/sla](https://cloud.google.com/ml-engine/sla)
*   Maps - [https://enterprise.google.com/maps/terms/maps-sla.html](https://enterprise.google.com/maps/terms/maps-sla.html)
*   Prediction - [https://cloud.google.com/prediction/sla](https://cloud.google.com/prediction/sla)
*   Pub/Sub - [https://cloud.google.com/pubsub/sla](https://cloud.google.com/pubsub/sla)
*   Spanner - [https://cloud.google.com/spanner/sla](https://cloud.google.com/spanner/sla)
*   SQL - [https://cloud.google.com/sql/sla](https://cloud.google.com/sql/sla)
*   StackDriver - [https://cloud.google.com/stackdriver/sla](https://cloud.google.com/stackdriver/sla)
*   Storage - [https://cloud.google.com/storage/sla](https://cloud.google.com/storage/sla)

Like the rest of the startup space recently, Google has been making the shift towards selling to the enterprise. The days of having open access to APIs, with no business model involved, and no guarantees a certain level of service are gone. Before any large organization is going to bake an API into their operations, they are going to need an SLA present as part of the deal.

I'll keep an eye out for other API providers who make an SLA available, and see if I can keep track of this shift to doing business the enterprise in startup land. I have some more questions about SLA beyond just revenue exchanged for an API, and how an API contract, backed by an SLA holds up as part of the startup life cycle--more specifically, how it holds up as part of an acquisition.