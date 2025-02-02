---
published: true
layout: post
title: >-
  API Governance Policies, Rules, and Guidance For Managing the Versioning Of
  OpenAPI and APIs
tags:
  - Versioning
  - Change
  - OpenAPI
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-new-and-old-building.jpeg
---
I am working my way through each of the moving parts of my API governance for HTTP APIs, showcasing the policy, rules, and guidance I employ for each dimension. This work has two purposes, 1) it helps me further refine each of the machine-readable policies, rules, and guidance which are used across the sites and tools I use for API governance, and 2) helps me generate more attention to my API governance services. I find that most people doing startups right now keep the rules behind governance close to their chest, and I feel pretty strong that this stuff has to be in the API Commons (literally).

Next up in my queue of policy, rule, and guidance work is the policy for managing versioning for my APIs. None of my new APIs have a version applied because I purposely omitted this from my initial set of rules because I wanted to do more research. My current stance and default set of policies reflects the “right way” I’ve learned to version APIs early on in my API journey, which is NOT done in the URI or path for your API. You choose to do via a header, and likely done as part of a wider content negotiation strategy. However, after spending the last year defending an HTTP header based approach and enforcing no versioning in your URI and path, I wanted to make sure I went back to the drawing board on this one. Versioning is one of the most hotly debated subjects out there, so I wanted to revisit my notes and refresh my awareness of versioning APIs.

To ground my work, I start with an API policy that will help me focus on the business rationale for why I need to version the way I will ultimately govern (guide). I have found a significant amount of resistance to versioning APIs in the headers. If you speak with the API-erati you hear the right way—in the headers. If you speak with the developers rolling out APIs in the field, you hear the easy and intuitive way—in the paths. I have evaluated thousands of APIs, and versioning in the path is the dominant approach. I researched a handful of the API style guides I often refer to, and five out of seven using the URI or path to version their APIs. Based upon this evidence, my experience defending a header-based approach, and the argument that a path-based approach is more intuitive and explicit, this is the approach I am taking with my policies, rules, and guidance-—let’s see if I can make this case, the proof is in the work.

## Communicating Change with Versioning (Top Level)
Oftentimes I begin with Spectral rules to define governance, as it is what I am used to, but increasingly I force myself to start from the policy end, then move on to the rules, and guidance. Thinking through as a policy is helping me think more about the business rationale, do my research, and drive more discussion around each area of API governance (guidance). Here is the policy that I have so far, providing an umbrella for my API versioning policies, rules, and guidance.

```
name: Communicating Change with Versioning
slug: communicating-change-with-versioning
scope: Technical Contract
property: none
type: none
guidance: change/versioning
image: /images/versioning.png
description: >-
 Being explicit about how changes made to each existing API is communicated across teams producing APIs, but also with consumers who are putting APIs to work, governing (guiding) teams forward when it comes to how they will slow down and plan for change, but also communicating that change with their consumers. Versioning helps teams be more thoughtful in what they change and how they will communicate it, reducing the friction and breaking changes introduced into applications and integrations using APIs.
 discussion: https://github.com/api-evangelist/policies/issues/1

policies:
 - openapi-info-version

research:

 - name: Adidas
   description: Adidas goes with header based versioning, but specifically media type content negotiation as part of change.
   url: https://github.com/adidas/api-guidelines/blob/1b52a38e90e1d62b8cb808405b6a5881d05892cd/rest-api-guidelines/evolution/versioning.md


 - name: Microsoft
   description: Microsoft core products encourage a URI/path or parameter approach to communicating versioning.
   url: https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#12-versioning

 - name: Azure
   description: Azure encourages a URI/path or parameter approach to communicating versioning.
   url: https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#api-versioning

 - name: Spectral
   description: Stoplight, or Spectral specifically recommends not versioning in URI/path and choosing a header-based approach.
   url: https://github.com/stoplightio/spectral-url-versioning/blob/main/src/ruleset.ts

 - name: Google
   description: Google recommends REST APIs use a URI/path based approach to versioning and communicating change.
   url: https://google.aip.dev/185

 - name: Cisco
   description: Cisco recommends REST APIs use a URI/path based approach to versioning and communicating change.
   url: https://github.com/CiscoDevNet/api-design-guide?tab=readme-ov-file#342-user-scoped-endpoints

 - name: Atlassian
   description: Atlassian recommends REST APIs use a URI/path based approach to versioning and communicating change.
   url: https://developer.atlassian.com/server/framework/atlassian-sdk/atlassian-rest-api-design-guidelines-version-1/

tags:
 - Change
 - Versioning
 - Semantic

Experiences:
 - Alignment
 - Change
 - Communication
 - Consistency
 - Reliability
```
This policy is a wrapper for separate individual policies and supporting guidance and rules. I tend to break up and organize policies like this to help create separate work streams and areas of guidance that can all be aggregated and reported upon at the policy level. Because API versioning spans multiple OpenAPI properties I want separate pieces of guidance and rules for each area—keeping things modular, and able to evolve independently in the future.

## OpenAPI Version (Individual)
The OpenAPI is a very central artifact that is used across the API lifecycle, so having a policy dedicated to governing (guiding) the Info Version property in OpenAPI is a good idea. However, it is important to understand that the version of your OpenAPI may move at different rates then your API version. According to the OpenAPI specification, “REQUIRED. The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).” Which in my opinion, warrants a different set of policies, rules, and guidance to help deal with versioning at this layer.

```
name: OpenAPI Version
slug: openapi-info-version
scope: Technical Contract
property: $.info.version
type: none
guidance: openapi/info-version
image: /images/versions.png
description: >-
 Ensuring that the info version object of an OpenAPI for an API is present and possesses a Semantic Versioning property, communicating major, minor, and patch changes.

rules:
 - openapi-info-version-error
 - openapi-info-version-info
 - openapi-version-semantic-info

research:

 - name: When to version bump your OpenAPI description
   description: An excellent article that helps you understand versioning at the OpenAPI dimension.
   url: https://lornajane.net/posts/2023/when-to-version-bump-your-openapi-description

 - name: OpenAPI Info Object
   description: Reference documentation for the OpenAPI Info Object, providing a basis for how it is used.
   url: https://spec.openapis.org/oas/latest.html#info-object

tags:
 - Change
 - Versioning
 - Semantic
 - OpenAPI

Experiences:
 - Alignment
 - Change
 - Communication
 - Consistency
 - Reliability
```
Lorna Mitchell provides a really great overview of versioning in the OpenAPI, which I linked as part of the research. It is important to think about the governance of your OpenAPI versioning separately but adjacent to the version of your APIs. I personally struggle with coherently doing this, so this policy helps ground me, separate my rules, and keep guidance simple. Simplicity and being explicit are hallmarks of my API governance (guidance) approach.

## API Version (Individual)
Now we get to the part where we are actually talking about versioning the APIs I will be developing. As stated above, I am going with a URI / path based approach. I believe this is the simple and most intuitive, while making sure to be explicit about communicating change with consumers. It may not be “right” in a REST or HTTP sense, but it is one of those areas I feel we have to embrace some of the messiness of having humans in this layer. I guess when y'all get the AI you want, none of this will matter. ;-) Regardless, here is my policy to set the table for how I will version my APIs.

```
name: API Version
slug: api-version
scope: Technical Contract
property: none
type: none
guidance: change/versioning
image: /images/versions.png
description: >-
Guiding teams to use a URI / path based approach to versioning, placing the Semantic major version of an API at the base of the path for each API being published.

tags:
 - Change
 - Versioning
 - URI
 - Path

rules:
 - openapi-version-in-path-error
 - openapi-version-in-path-info
```
One thing I really like about this policy and its rules is that it is simple. For me, simple wins when it comes to API design, governance, and guidance. I agree that API versioning SHOULD be in the header, and prefer it as part of content negotiation, but I just don’t think my consumers will ever be that advanced. I leave this type of policy to be adopted where there is a more sophisticated or automated approach to integration and won’t cause friction with teams producing APIs.

## Rules
Now we have the actual Spectral rules which will be enforcing and guiding the design, development, and build of APIs. These Spectral rules are referenced in each of the two policies above, but also can be run independently, or as part of API lifecycle automated enforcement. Spectral rules keep this portion of governance something that is modular and reusable across services, tooling, and at the pipeline, CLI, and IDE layers of the API lifecycle.

### Info MUST Have Version
This is the error triggered when you do not have an OpenAPI Info Version object, alerting you to the fact that you need to have the version property present, with supporting guidance as part of the message.

```
openapi-info-version-error
 description: >-
   Publishing a version for your OpenAPI technical contract helps you communicate
   change with consumers using Semantic or date-based versioning published to the
   info version property. You can find details about the <a
   href="https://spec.openapis.org/oas/latest.html#info-object">info object for
   OpenAPI</a>, and explore <a
   href="https://guidance.apievangelist.com/guidance/openapi/info-version.html"
   target="_blank">API versioning</a> via API Evangelist guidance.
 message: Info MUST Have Version
 given: $.info
 severity: error
 then:
   field: version
   function: truthy
```

## Info Has Version
This rule is the positive side of the above rule, identifying when an OpenAPI has the version property so that it can be reported upon and used as guidance for teams learning from existing implementations.

```
openapi-info-version-info:
description: >-
 Publishing a version for your OpenAPI technical contract helps you communicate
 change with consumers using Semantic or date-based versioning published to the
 info version property. You can find details about the <a
 href="https://spec.openapis.org/oas/latest.html#info-object">info object for
 OpenAPI</a>, and explore <a
 href="https://guidance.apievangelist.com/guidance/openapi/info-version.html"
 target="_blank">API versioning</a> via API Evangelist guidance.
message: Info Has Version
given: $.info
severity: info
then:
 field: version
 function: falsy
```

### Info MUST Have Semantic Version
This rule is specifically looking for a Semantic Version in the OpenAPI Info Version object, alerting teams producing an API when they have not properly communicated any changes being made to an API.

```
openapi-info-version-error:
 description: >-
   Publishing a version for your OpenAPI technical contract helps you communicate
   change with consumers using Semantic versioning published to the info version
   property. You can find details about the <a
   href="https://spec.openapis.org/oas/latest.html#info-object">info object for
   OpenAPI</a>, and explore <a
   href="https://guidance.apievangelist.com/guidance/openapi/info-version.html"
   target="_blank">API versioning</a> via API Evangelist guidance.
 message: Info MUST Have Semantic Version
 severity: info
 given: $.info.version
 then:
   function: pattern
   functionOptions:
     notMatch: >-
       ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$     
```

## Info Has Semantic Version
This rule is the positive side of the rule above, identifying when an OpenAPI has the proper Semantic Versioning in the OpenAPI Info Version object, and properly communicating changes to an API.

```
openapi-info-version-info:
 description: >-
   Publishing a version for your OpenAPI technical contract helps you communicate
   change with consumers using Semantic versioning published to the info version
   property. You can find details about the <a
   href="https://spec.openapis.org/oas/latest.html#info-object">info object for
   OpenAPI</a>, and explore <a
   href="https://guidance.apievangelist.com/guidance/openapi/info-version.html"
   target="_blank">API versioning</a> via API Evangelist guidance.
 message: Info Has Semantic Version
 severity: info
 given: $.info.version
 then:
   function: pattern
   functionOptions:
     notMatch: >-
       ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$     
```

## Must Have Major Version in Path
This is the rule that will look at the path for the major Semantic Version of an API, communicating major changes as the base segment for the API, putting the major version front and center.

```
openapi-version-in-path-error:
 description: >-
   The majority of public APIs available on the Web today put the major version of the API as part of the path for each API. It is recommended that you public the major version of your API as the first segment of base path for each API. You can find details about the <a href="https://spec.openapis.org/oas/latest.html#paths-object">paths object for OpenAPI</a>, and explore <a href="https://guidance.apievangelist.com/guidance/openapi/paths.html" target="_blank">paths</a> via API Evangelist guidance.
 message: Must Have Major Version in Path
 severity: error
 given: $.paths[*]~
 then:
   function: pattern
   functionOptions:
     notMatch: /((?:/)(v|version)?[0-9]{1,3}(?:/)?)/i
```

## Has Major Version in Path
This is the rule that identifies when the major Semantic Version of an API was properly communicated as part of the first segment of the base path, properly communicating change with consumers.

```
openapi-version-in-path-info:
 description: >-
 description: >-
   The majority of public APIs available on the Web today put the major version of the API as part of the path for each API. It is recommended that you public the major version of your API as the first segment of base path for each API. You can find details about the <a href="https://spec.openapis.org/oas/latest.html#paths-object">paths object for OpenAPI</a>, and explore <a href="https://guidance.apievangelist.com/guidance/openapi/paths.html" target="_blank">paths</a> via API Evangelist guidance.
 message: Major Version is in Path
 severity: info
 given: $.paths[*]~
 then:
   function: pattern
   functionOptions:
     match: /((?:/)(v|version)?[0-9]{1,3}(?:/)?)/i
```

We have three rules to support the OpenAPI versioning policy and two rules to support the actual URI / path based versioning of each API. It is pretty simple and straightforward, but will make many purists snicker and cringe. It’s all good. I will work on other policy examples, but for APIs.io and API Evangelist, this is a good start, and I can add more rules later.

## API Versioning Guidance
There are now three separate policies supporting the versioning of APIs, the top-level one, as well as the individual ones for OpenAPI versioning and the other for actual API versioning. I want to make sure I have guidance to support all three. The top-level guidance should reflect higher level business concerns, with the other two going a little deeper on the specifics of versioning and the rules that are applied to enforce.

## Communicating Change with Versioning (Top Level)
This is higher level guidance meant to speak to product and business leadership, helping make the case for why versioning matters and teams should be governed (guided) to consistently communicate change with Semantic Versioning.

```
