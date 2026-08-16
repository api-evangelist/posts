---
published: true
layout: post
title: Editing JSON Schema in YAML
date: 2025-03-31T09:00:00.000Z
tags:
  - JSON Schema
  - OpenAPI
  - YAML
  - JSON
  - Data Formats
image: https://kinlane-images.s3.amazonaws.com/shared/eugenics-berlin-wall-down.jpg
---
There are many little areas of friction I encounter while doing APIs that fascinate me as visible areas of separation between that classic line and often canyon between business and IT. But there are few that pop up as much as the relationship between JSON and YAML, but also JSON Schema and YAML. I once had a guy show up to every workshop within a company I worked at to argue with me that JSON and YAML were not the same thing. I would agree with him, but for the sake of defining the surface area of an API using OpenAPI, JSON and YAML can be interchangeable, as long as you have an awareness of what can be lost as well as what can be gained. Like most areas of API operations, friction when it comes to working between JSON and YAML, but more importantly understanding that you can edit JSON Schema in JSON or YAML format, tends to be introduced when there is a lack of...

- **JSON Schema Awareness** - If you are not used to working with JSON Schema as a standard and only see it as a configuration.
- **Bridge Building** - Engineering teams are not used to working to build bridges with business groups when producing APIs.
- **Operational Exposure** - Teams lack exposure to DevOps, PlatformOps, and other more operational approaches to configuring infrastructure.
- **OpenAPI Understanding** - Do not have an awareness of how the OpenAPI specification uses JSON Schema—already editing in YAML.
- **Stakeholder Empathy** - Teams do not generally need to think about how others will be using their specifications, artifacts, and API solutions.

I hear a lot of engineers snicker at using YAML, instead of JSON. I hear even more snicker at editing JSON Schema in YAML. I am a long-time proponent of design and development using YAML OpenAPI and JSON Schema, but then converting to JSON as part of pipelines, gateways, and the runtime. XML is not the same as JSON, which is not the same as YAML, but you can convert between these data formats. As with OpenAPI, editing JSON Schema using YAML during defining, designing, and iterating upon the artifacts we need to produce APIs helps widen the scope of who is involved in the API lifecycle. Being able to edit your JSON Schema in YAML makes them more accessible to business stakeholders who may help you translate your internal data or object model into just the right message your consumers will need in their applications.

<a href="https://json-schema.hyperjump.io/"><img src="https://kinlane-images.s3.amazonaws.com/apievangelist/hyperjump-editing-yaml.png" width="100%"></a>
<p align="center"><a href="https://json-schema.hyperjump.io/"><Try Editing JSON Schema Using YAML in Hyperjump</a></p>

<!-- paper-link -->

---

**Going deeper: [The JSON Schema Standard](https://reports.apievangelist.com/reports/the-json-schema-standard/?ae_ref=apievangelist.com&ae_pos=post-footer)**

9,439,146 schema objects measured inside published API contracts — and an industry still writing with the vocabulary it had in 2013.

[Read the paper — $500](https://reports.apievangelist.com/reports/the-json-schema-standard/?ae_ref=apievangelist.com&ae_pos=post-footer)
