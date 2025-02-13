---
published: true
layout: post
title: Cloudflare Uses OpenAPI to Standardize the Redaction of Audit Log Data at the API Gateway Layer
tags:
  - Audits
  - Logging
  - Gateways
  - OpenAPI
image: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/cloudflare/cloudflare-api-gateway-openapi-redactor.webp
---
[Cloudflare has a great story about how they handle API audit logging at the API gateway layer](https://blog.cloudflare.com/introducing-automatic-audit-logs/). It is a good read even if you aren’t a Cloudflare customer. What caught our attention was specifically how they are using the OpenAPI specification to redact data as part of their audit data pipeline. [We have covered other ways of extending the OpenAPI specification in support of GDPR and flagging PII](https://apievangelist.com/2024/02/24/twilio-uses-a-pii-openapi-extension-on-their-api/), but Cloudflare introduces a compelling approach to standardizing the customization of audit log redaction across teams.

Each HTTP request to the API gateway, along with its corresponding request and response data, is forwarded to a Worker called the Audit Log Redactor—the API Gateway streams these requests to the redactor Worker via RPC (Remote Procedure Calls) using service bindings. This excerpt from the Cloudflare blog describes the process pretty clearly, something that could be applied across any API gateway.

<blockquote>
Once the Worker receives the HTTP request, it references the Cloudflare OpenAPI Schema to handle sensitive information.       OpenAPI is a widely adopted, machine-readable, and human-friendly specification format that is used to define HTTP APIs. It relies on JSON Schema to describe the API’s underlying data.  

Using the OpenAPI Schema, the redactor Worker identifies the corresponding API schema for the HTTP request. It then redacts any sensitive information, leaving only those explicitly marked as auditable in the schema. This redaction process ensures that no sensitive data progresses further down the pipeline while retaining enough information to debug and analyze how an action impacted a resource’s value.

Each Cloudflare product team defines its APIs within the OpenAPI schema and marks specific fields as auditable. This provides visibility into resource changes while safeguarding sensitive data.

Once redacted, the data moves through Cloudflare’s data pipeline. This pipeline includes several key components including Logfwdr, Logreceiver and Buftea buffers, where the sanitized data is eventually pushed, awaiting further processing.
<blockquote>

Audit log redaction sounds like a perfect use case for [OpenAPI overlays](https://www.openapis.org/blog/2024/10/22/announcing-overlay-specification). It could be an OpenAPI overlay that is created by each team and then governed as part of a standard set of policies and Spectral or Vacuum rules. OpenAPI is used to generate API documentation, mock servers, SDKs, and is a configuration file for the API gateway. The more surface area of the OpenAPI your API gateway supports the better. Bonus points when your API gateways do what Cloudflare does, and extends the OpenAPI specification to standardize other common aspects of our API operations.

This layer of our API operations seems to provide us with another carrot for encouraging the use of OpenAPI, but also begin to expand on how to strengthen the transparency and accountability that Cloudflare leans into in their blog post. The approach to API audit logging can be applied to any APIs powering desktop, web, mobile, device, and artificial intelligence applications, with the configuration of the audit layer itself standardized and configurable at the team, domain, enterprise, and even externally at the industry level. It is an interesting use of OpenAPI specification and we will add some work cycles to better understand how it could be applied as an OpenAPI overlay, providing more opportunity for storytelling here on the blog.

