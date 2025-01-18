---
published: true
layout: post
title: API Governance Rules for APIs Used in Infrastructure As Code
tags:
  - Terraform
  - Ansible
  - Infrastructure as Code
  - Governance
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/purple-circuit-statue-supreme-court.jpg
---
It is interesting to think of the different ways in which APIs are put to use and how some of those applications have a loud venture-backed bullhorn, while others do not. Mobile definitely possessed a loud bullhorn at one point in time, and now AI has the bullhorn in this moment, but there are other approaches to integrating with APIs, like in support of infrastructure as code that could have even more of an impact. I was just reading [API characteristics that make it harder to integrate Infrastructure as Code tools by Brian Grant](https://itnext.io/api-characteristics-that-make-it-easier-or-harder-to-integrate-infrastructure-as-code-tools-7a1910e6ed94), and enjoyed distilling down their list of concerns and doing a diff with my own API governance policies and rules. 

In the post they begin with, “what API characteristics make these providers expensive to implement?”, and highlighting “dozens of ways in which they [APIs] could be inconsistent”.

- Nonstandard operation names, such as Insert or Add rather than Create
- Nonstandard update operations, such as operations that modify specific attributes, that have special preconditions, that cannot operate concurrently, etc.
- Missing operations, such as no Get/Read operation
- Nonstandard operation parameters, return results, status codes, etc.
- Nonstandard protocols, content types, API versioning schemes, API endpoint patterns, resource paths, path parameters, header fields, call features, etc.
- Resource attributes specified for Create and Update and returned by Get are not consistent (e.g., they could be named or located differently, or some attributes may not be present in some calls)
- Inconsistent forms of resource cross-references
- Input attributes provided by the client are dynamically modified by the service, which makes computing a diff hard (unless there’s support in the service for handling this, as with Kubernetes server-side apply)
- Resources with some attributes that can be modified through other resources, or more generally changing some attributes automatically changes other attributes, which appears to cause configuration drift
- Lack of read-after-write consistency, which could cause the planning procedure described above to fail
- Immutable resources (e.g., AWS ECS TaskDefinition)

Then they get more precise in that “essential information unavailable in machine-readable forms”, further adding to the cost and complexity of using infrastructure as part of your APIs.

- No published API resource schemas, which make it harder to generate clients of any kind
- Input value validation information only in human documentation
- Resource schemas are missing relevant attribute behavior specifications, such as immutability, which Terraform would use to determine that resource replacement would be necessary upon a change, or identification of sensitive fields, which would be converted to Secrets in Kubernetes-based APIs
- No explicit distinction between management or control-plane and data-plane APIs
- If enough of these issues exist, automatically generating provider code for a service can become infeasible.

Everything echoed here is reflected in the APIs.json, OpenAPI, and JSON Schema Spectral rules and policies I am developing. I wanted to document this very honest list of the friction that exists at the infrastructure as code layer to help inform me as to how to build a custom API governance ruleset that could be applied and iterated upon at this layer. This great post also helps identify [another place I’d like to [find evidence of the most common APIs being implemented](https://apievangelist.com/2024/11/20/where-is-the-api-evidence/) to support infrastructure as code. I will add it to my API discovery layer and search GitHub, Bing, and Google for Terraform, Ansible, and other examples of APIs being called in service of infrastructure as code. 

I imagine Spectral rule sets and likely OpenAPI overlays that govern web, mobile, device, AI, and infrastructure API layers. You really want your rules engine to be variable and dynamic across these dimensions. Even though there are many common patterns and anti-patterns across these dimensions, there are also nuances to each approach to automating and integrating with APIs. I guess it will come down to knowing your consumers and investing in which dimension they care about the most. Another thing I like about this blog post is that it continues to help me continue to see the API artifact and rules landscape as costing or saving the enterprise money, which can be articulated in terms of a rules-based governance engine, and made variable based upon different types of APIs.