---
published: true
layout: post
title: >-
  Validating the FHIR API Contract as You Use the API and Then Leaving Inline
  Comments on the OpenAPI
image: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/validating--the-fhir-api-contract-as-you-use-api-then-leaving-inline-comments-on-the-openapi-2.png
author:
  name: kinlane
tags:
  - Healthcare
  - Specifications
  - Comments
  - Contracts
  - Standards
---
I am working with [the OpenAPI for the Fast Healthcare Interoperability Resources (FHIR)](https://www.postman.com/api-evangelist/workspace/fast-healthcare-interoperability-resources-fhir/api/f22c7845-8b1f-4188-8290-ef990234cc39?version=def0f069-531a-4ef4-b885-eccb87315059&tab=define&ctx=comments), getting more familiar with the specification as I get strengthen my awareness of the [CMS Interoperability and Patient Access Final Rule](https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index#CMS-Interoperability-and-Patient-Access-Final-Rule). I have [the OpenAPI for the FHIR specification published to a public API workspace](https://www.postman.com/api-evangelist/workspace/fast-healthcare-interoperability-resources-fhir/overview), and a collection I generated from it to help me document, mock, and apply contract tests for FHRI APIs, helping ensure they are compliant to the healthcare API standard. As soon as I ran my first request against a sandbox FHIR API I was provided with two alerts letting me know the response was out of sync with the actual spec.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/validating--the-fhir-api-contract-as-you-use-api-then-leaving-inline-comments-on-the-openapi-1.png)

These are pretty simple, yet critical structural issues in the way the OpenAPI is defined that doesn’t actually match the API implementation. I am still unsure if it is the OpenAPI that is wrong, or the sandbox API implementation, so I am just going to leave a comment on the individual API method in the OpenAPI, letting me revisit later and resolve each issue once I have the answer.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/validating--the-fhir-api-contract-as-you-use-api-then-leaving-inline-comments-on-the-openapi-2.png)

I am going to play with more of the API before I submit the issue with the FHIR working group, or at least who is in charge of the OpenAPI for the FHIR specification. I am looking to create a suite of validation collections for the API specification that can be run manually, scheduled and run regularly, or triggered as part of a CI/CD pipeline, so I need to make sure the OpenAPI and derivative collections are correct before I publish them, making them available to Postman healthcare customers who are looking to validate their APIs. Ensuring that healthcare APIs are following the FHIR specification down to the detail will be critical to achieve the interoperability the CMS Interoperability and Patient Access Final Rule is looking to accomplish.