---
published: true
layout: post
title: Why Business Leadership Will Want You To Use The Latest Draft of JSON Schema
tags:
  - JSON Schema
  - Strategies
  - Policies
  - Versions
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/birth-of-a-nation-nyc-from-lex.jpeg
---
Explaining the nuts and bolts of API operations to business leadership takes some serious workshopping. Very few engineers, let alone business folks across the enterprise, will care about [JSON Schema](https://standards.apievangelist.com/store/json-schema/), let alone why it is essential to business for the latest draft of JSON Schema to be consistently used across the enterprise. Every enterprise today is running multiple versions of JSON Schema, which is something that causes serious instability and impacts everyday business, so API Evangelist wants to keep workshopping reasons why business leadership should care about JSON Schema versions.

- **Security** - The surface area of enterprise operations exposed to the public is defined as JSON Schema, any unknown unknowns or known unknowns in this landscape will be exploited and cost the business time and money.
- **Stability** - Requests for all digital resources and capabilities via HTTP are (hopefully) validated using JSON Schema within the code running in applications, and ideally via the gateway, are being validated in inconsistent ways.
- **Support** - You will need a larger support team to troubleshoot and work with customers when they encounter inconsistencies in behavior across enterprise APIs, requiring more people to support and understand APIs.
- **Automation** - JSON Schema is how API automation is defined, validated, and operating without errors, and when you are using multiple versions of JSON Schema, automation will double with each version of JSON Schema in production.

These are just a handful of the reasons enterprise business leadership should be pushing teams to prioritize running the latest version of JSON Schema across the enterprise. If you don’t feel this is a problem, have one team member do an assessment of all JSON Schema published to source control, and document which versions of JSON Schema are in use. Then do the math on all of the systems that those schemas are being used to configure and validate a pipeline, service, or tool, and you will quickly see that this is not about technical details, but more about lack of security, instability, support costs, and inability to properly automate the enterprise.

<div class="alert alert-danger" role="alert">
This is part of ongoing series to break down the technical details of API operations and governance to make more sense to leadership. If you have questions or would like to add to the discussion, please <a href="https://apievangelist.com/contact">reach out</a>.
</div>


