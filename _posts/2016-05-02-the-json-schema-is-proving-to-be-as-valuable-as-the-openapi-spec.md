---
layout: post
title: The JSON Schema Is Proving To Be As Valuable As The OpenAPI Spec
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Schema
  - JSON
  - JSON Schema
  - Open
---
As [my API Stack](http://theapistack.com/) work gets more attention, folks are reaching out to me to see if I have done certain APIs, or see if I'd prioritize some of the ones already on the list. One thing I'm also noticing is that people are often looking for the JSON schema of each of the API responses, just as much as they are looking for the OpenAPI Spec for the API surface area.

I had someone looking for the [complete schema for the Reddit API](http://stack.apievangelist.com/companies.html) today, while I was [working to authenticate, and record the responses to each endpoint for AngelList, AlchemyAPI, CenturyLink, NTT Docomo, Stripe, Twilio, and Verizon](http://apievangelist.com/2016/05/02/working-to-establish-a-complete-openapi-spec-for-leading-apis/). An OpenAPI Spec for the request structure of an API will get you a long ways in on boarding and learning about an API, but you will need the schema to complete any integration.

This is one of the reason I'm working to establish a better process for certifying that an OpenAPI Spec is complete, because without the definitions, providing a JSON schema, will only get you part way--still so much work to be done. This is why API service providers are looking to have it defined, because a complete spec is what will be used to map to other systems, tools, and services.

[After spending a couple days going through Schema.org](http://schema.org.apis.apievangelist.com/), and working on the [Human Services Data Specification (HSDS)](http://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/), I'm feeling the gravity of having common, machine readable schema available for the industry to work from. I've spent a number of cycles in the last two years creating OpenAPI Specs for APIs, but often stopping short of requiring the JSON schema to be present. From here forward, I will equally prioritize the response schema --it is proving to be just as valuable as the response described using OpenAPI Spec.