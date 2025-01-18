---
published: true
layout: post
title: >-
  API Governance Policy, Rules, and Guidance to Ensure Usage of Latest Versions
  of Specifications
tags:
  - Experiences
  - Rules
  - Policies
  - Versions
  - Specifications
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-cloks-many-of-them.jpg
---
I am working my way through each of the moving parts of my API governance for HTTP APIs, showcasing the policy, rules, and guidance I employ for each dimension. This work has two purposes, 1) it helps me further refine each of the machine-readable policies, rules, and guidance which are used across the sites and tools I use for API governance, and 2) helps me generate more attention to my API governance services. I find that most people doing startups right now keep the rules behind governance close to their chest, and I feel pretty strong that this stuff has to be in the API Commons (literally).

Today's work is focused on standardizing the versions of API specifications that are in use. Every company I have worked with on API governance has a mix of Swagger 2.0 and OpenAPI 3.x present across their operations, and are rarely using the latest draft of JSON Schema. So having a standardized policy for helping govern, guide, and drive ongoing awareness of what the latest version of a specification is, and what the reality is across the enterprise, makes a lot of sense. As I do with all of my API governance work I try to ground my rules with one or more policies that help align the technical reasons for utilizing the latest version of API specifications with the business reasons.

## API Policies
These are the machine-readable policies that are used to align the technical details with the business details, helping align product and engineering across the API lifecycle.

### Specifications Versions
I have a master policy that helps provide the top-level circus tent for all of the API specifications being applied, providing a single tip of the specification pyramid that each individual specification and version can be managed via other policies and rules.
```
name: Specification Versions
slug: specification-versions
scope:
 - Business Contract
 - Technical Contract
property: none
type: none
guidance: specifications/versions
image: /images/versions.png
description: >-
 Utilizing the latest versions of API specifications, ensuring that there is awareness regarding the change occurring with each specification being used to define API contracts and other supporting artifacts. This policy ensures that operations run on the latest stable specification, encouraging the widest services and tooling support, while also helping keep APIs as security and interoperable as possible.
policies:
 - apis-json-latest-version
 - openapi-latest-version
 - json-schema-latest-version
 - spectral-latest-version
tags:
   - APIs.json
   - OpenAPI
   - JSON Schema
   - Spectral
   - Versions
experiences:
   - Alignment
   - Change
   - Interoperability
   - Reliability
```

### Latest APIs.json Version
This policy ensures that the latest version of the APIs.json specification is being used when defining the business contract for any API being made available internally, and externally via 1st-party or 3rd-party applications.
```
name: Latest APIs.json Version
slug: latest-apis-json-version
scope:
 - Business Contract
property: $.specificationVersion
type: none
guidance: apis-json/version
image: /images/versions.png
description: >-
 Utilizing the latest versions of APIs.json, ensuring that API business contracts have the latest properties to describe the surface area of API operations. New properties and property types are regularly being added to the specification, and keeping up with the latest stable version increases the surface area of how operations can be described, made discoverable and able to be governed and reported upon.
tags:
   - APIs.json
   - Versions
experiences:
   - Alignment
   - Change
   - Interoperability
   - Reliability
rules:
   - apis-json-version-error
   - apis-json-version-info 
```
### Latest OpenAPI Version
This policy ensures that the latest version of the OpenAPI specification is being used when defining the technical contract for any API being made available internally, and externally via 1st-party or 3rd-party applications.
```
name: Latest OpenAPI Version
slug: latest-openapi-version
scope:
 - Business Contract
property: $.openapi
type: none
guidance: openapi/version
image: /images/versions.png
description: >-
 Utilizing the latest versions of OpenAPI, ensuring that API technical contracts have the latest properties to describe the surface area of APIs. The latest version of OpenAPI supports Webhooks, as well as the latest version of JSON Schema, increasing the surface area of APIs that can be defined, but also be validated as part of operations.
tags:
   - OpenAPI
   - Versions
experiences:
   - Alignment
   - Change
   - Interoperability
   - Reliability
rules:
   - openapi-version-20-error
   - openapi-version-3x-error
   - openapi-version-31-info
```
### Latest JSON Schema Version
This policy ensures that the latest version of the JSON Schema specification is being used when defining the business contract for any API being made available internally, and externally via 1st-party or 3rd-party applications.
```
name: Latest JSON Schema Version
slug: latest-json-schema-version
scope:
 - Business Contract
property: $.specificationVersion
type: none
guidance: json-schema/version
image: /images/versions.png
description: >-
 Utilizing the latest versions of JSON Schema, ensuring that all data used within APIs are well-defined and validated. The latest version of OpenAPI also uses the latest version of JSON Schema, but JSON Schema is used wider when it comes to validation, testing, and form submission. All data is described as JSON Schema and by utilizing the latest version we are reducing the entropy that exists across operations to ensure everything is validated and well-known.
tags:
   - JSON Schema
   - Versions
experiences:
   - Alignment
   - Change
   - Interoperability
   - Reliability
rules:
   - apis-json-version-error
   - apis-json-version-info
```
### Latest Spectral Version
This policy ensures that the latest version of the Spectral specification is being used when crafting the governance rules used to validate business and technical contracts in a manual or automated way.
```
name: Latest Spectral Version
slug: latest-spectral-version
scope:
 - Business Contract
 - Technical Contract
property: none
type: none
guidance: spectral/version
image: /images/versions.png
description: >-
 Utilizing the latest versions of Spectral, ensuring that all governance rules for business or technical contracts have kept up with services and tooling. Spectral rules are used to describe every individual detail of API governance, and keeping up with the latest version ensures the consistency of governance across teams and across the API lifecycle.
tags:
 - Spectral
 - Versions
experiences:
 - Alignment
 - Change
 - Interoperability
 - Reliability
```
## API Rules
These are the machine-readable rules that are used to automate governance in design and development tooling, as well as via CI/CD pipelines and other automation.

### APIs.json 0.17 Or Less Should Be Upgraded
A rule with a severity of error to identify the usage of previous versions of APIs.json.
```
 apis-json-version-error:
   description: Versions prior to 0.18 of APIs.json are not used and should be upgraded to use the latest version of the APIs.json specification. You can find details about the <a
     href="https://apisjson.org">latest version of the</a>, and explore <a
     href="https://guidance.apievangelist.com/guidance/apis-json/version.html"
     target="_blank">APIs.json version</a> via API Evangelist guidance.
   message: APIs.json 0.17 Or Less Should Be Upgraded
   severity: error
   given: $
   then:
     field: specificationVersion
     function: pattern
     functionOptions:
       match: ^\b(0.18)\b     
```

### APIs.json 0.17 and Less Should Be Upgraded
A rule with a severity of info to identify the usage of the current version of APIs.json.

```
apis-json-version-info:
   description: The 0.18 of APIs.json is the latest version that should be used in business contracts for APIs, allowing for the widest possible vocabulary to describe operations. You can find details about the <a
     href="https://apisjson.org">latest version of APIs.json</a>, and explore <a
     href="https://guidance.apievangelist.com/guidance/apis-json/version.html"
     target="_blank">APIs.json version</a> via API Evangelist guidance.
     target="_blank">OpenAPI version</a> via API Evangelist guidance.
   message: APIs.json Version 0.18 Is The Correct Version
   severity: info
   given: $
   then:
     field: specificationVersion
     function: pattern
     functionOptions:
       notMatch: ^\b(0.18)\b
```


### OpenAPI Version 2.0 (Swagger) Not Used
A rule with a severity of error to identify the usage of Swagger, or OpenAPI version 2.0.

```
openapi-version-20-error:
   description: Version 2.0 of the OpenAPI specification also known as Swagger is not used anymore and has been deprecated for a decade. You can find details about the <a
       href="https://github.com/OAI/OpenAPI-Specification?tab=readme-ov-file#current-version