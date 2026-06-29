---
published: true
layout: post
title: Health Gorilla and the Lab Order to Result Loop
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/health-gorilla-and-the-lab-order-to-result-loop.png
date: 2026-07-02
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - FHIR
  - Arazzo
  - Lab Network
  - Workflows
---
Lab ordering is one of those healthcare workflows that looks simple from the outside and is anything but. You do not just call an endpoint and get a result back; you place an order, it routes to a lab, the lab does the work, and a diagnostic report with discrete observations comes back hours or days later. Health Gorilla exposes this as a FHIR R4 API across a national lab network, and it is a great candidate for writing the sequence down as Arazzo rather than leaving it implied across a documentation site.

The lab order workflow I captured runs the way it actually runs: discover the server capabilities, find the patient, create a ServiceRequest for the order, submit it inside a RequestGroup, and confirm the group came back. Then the results retrieval workflow closes the loop—find the patient, search the diagnostic reports, read the report, and pull the discrete observations. Separating the order from the result is deliberate, because in the real world they are separated by time, and a workflow that pretends a result is synchronous is lying about the clinical reality.

I added two more that round out the patient-data side of the network. There is a patient $everything workflow that follows the US Core pattern—find the patient, read them, and collect the full bundle—and a coverage workflow that walks from patient to Coverage to the insurance detail. Every step references a real operationId in Health Gorilla's FHIR spec, with the patient reference passed as the standard FHIR search parameter and reads done by id. Nothing is invented; the workflows are just the honest shape of how you use the network.

Here is the order half of that loop, taken straight from the repo—the ServiceRequest that places the order and the RequestGroup that binds it:

```yaml
- stepId: createOrder
  description: Create the ServiceRequest that places the laboratory order.
  operationId: createServiceRequest
  requestBody:
    contentType: application/fhir+json
    payload: $inputs.serviceRequest
  successCriteria:
  - condition: $statusCode == 201
  outputs:
    serviceRequestId: $response.body#/id
- stepId: submitRequestGroup
  description: Submit the RequestGroup that binds the lab order for processing.
  operationId: createRequestGroup
  requestBody:
    contentType: application/fhir+json
    payload: $inputs.requestGroup
  successCriteria:
  - condition: $statusCode == 201
  outputs:
    requestGroupId: $response.body#/id
```

All four Health Gorilla workflows live in the repo at [api-evangelist/health-gorilla/arazzo](https://github.com/api-evangelist/health-gorilla/tree/main/arazzo), including the [lab order workflow](https://github.com/api-evangelist/health-gorilla/blob/main/arazzo/health-gorilla-lab-order-workflow.yml) excerpted above and the [results retrieval workflow](https://github.com/api-evangelist/health-gorilla/blob/main/arazzo/health-gorilla-results-retrieval-workflow.yml) that closes the loop.

This is the part of healthcare interoperability that does not get enough attention. Everyone talks about reading a patient record, but the order-to-result loop is where a lot of the actual clinical and financial value moves, and it is asynchronous and multi-step by nature. Capturing it as a reviewable Arazzo artifact means the sequence can be governed, tested, and reasoned about—by a person or an agent—instead of being rediscovered every time someone integrates with the lab network.
