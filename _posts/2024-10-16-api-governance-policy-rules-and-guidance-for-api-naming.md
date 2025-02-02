---
published: true
layout: post
title: API Governance Policy, Rules, and Guidance for Naming APIs
tags:
  - Policies
  - Rules
  - Guidance
  - Governance
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-cotton-candy.jpeg
---
I am working my way through each of the moving parts of my API governance for HTTP APIs, showcasing the policy, rules, and guidance I employ for each dimension. This work has two purposes, 1) it helps me further refine each of the machine-readable policies, rules, and guidance which are used across the sites and tools I use for API governance, and 2) helps me generate more attention to my API governance services. I find that most people doing startups right now keep the rules behind governance close to their chest, and I feel pretty strong that this stuff has to be in the [API Commons](https://apicommons.org) (literally).

Today’s work is focused on the naming of your API, using the APIs.json name property as well as the OpenAPI info object. The name of the API may sound trivial, but I find it to be low hanging fruit for API consistency, and one of the areas that developers putt up stiff resistance when it comes to sensibly naming APIs. In my experience teams producing APIs will put in 25 times the work to explain why they shouldn’t have to change the name of their API than it would have taken to just sensibly name the API in the first place. Let's work through my policies, rules, and guidance for API naming.

## API Naming Policy
The policy for naming of an API is meant to address the different ways teams will approach naming of APIs from their perspective, helping widen their view of how an API should be named to speak to API consumers, and improve discovery, documentation, and elements of the developer experience--both producer and consumer.
```
name: Naming of an API
description: Addressing the info name of an API as defined by the OpenAPI info title meets the policy standards.
summary: Keeps the name of API resources and capabilities as informative and consistent as possible across APIs.
slug: openapi-info-title
schema:
  - type: APIs.json
    property: $.name
  - type: OpenAPI
    property: $.info.title
scope: OpenAPI
property: $.info.title
type: none
guidance: 
  - apis/names
  - openapi/info-title
image: /images/names.png
experience:
  - Discovery
  - Documentation
  - Communication
  - Onboarding
  - Consistency
tags:
  - Names
  - Titles
rules:
  - apis-json-apis-name-info
  - openapi-info-title-error
  - openapi-info-title-info
  - openapi-info-title-length-error
  - openapi-info-title-length-info
  - openapi-info-title-upper-case-error
  - openapi-info-title-upper-case-info
```

This API policy is used to explain why we govern the naming of APIs to product and leadership, organizing the rules used to automate this governance, provide linkage with API guidance, and drive reporting that is organized by impact on API experience. 

My naming policy spans two artifacts, APIs.json and OpenAPI. The naming of an API as described by the APIs.json contract and the OpenAPI Info Object should be the same unless there are unique exceptions. My goal with policies is to address operational and individual API governance needs I have in a consistent way that aligns the automation and guidance with business objectives.

## API Naming Rules
The rules for naming an API span both APIs.json and OpenAPI and come with supporting guidance. All rules currently are Spectral rules applied to both APIs.json and OpenAPI, to help automate the governance of API names. These are the rules I have currently, and will be expanding these rules based upon this work and requests from customers and partners.

### API MUST Have Name

```
description: >-
  The name of your API is one of the most important design decision you can
  make, and will be one you will have to live with throughout the life of your
  API. Take the time to make sure the API accurately describes the API, and
  avoid using common words about the patterns and infrastructure used--keep the
  name of the API simple, easy to read, and meaningful to the consumer of the
  API. You can find details about the <a
  href="https://apisjson.org/schema/name/">name property for APIs.json</a>, and
  explore <a href="https://guidance.apievangelist.com/guidance/apis/names.html"
  target="_blank">API names</a> more via API Evangelist guidance.
message: API MUST Have Name
given: $.apis.*
severity: info
then:
  field: name
  function: falsy
```

### Info MUST Have Title

```
description: >-
  Having a intuitive and helpful title for your API using the OpenAPI info title
  is the first impression you will make on the consumers of your API. Your title
  should be about what the API does and not how you built the API, focusing on
  how the consumers will see things. You can find details about the <a
  href="https://spec.openapis.org/oas/latest.html#info-object">info object for
  OpenAPI</a>, and explore <a
  href="https://guidance.apievangelist.com/guidance/openapi/info-title.html"
  target="_blank">API title</a> via API Evangelist guidance.
message: Info MUST Have Title
severity: error
given: $.info
then:
  field: title
  function: truthy
```

###  Info Title MUST Be Less Than 50 Characters

```
description: >-
  Having a limitation on the length of the title for your API helps provide
  constraints for teams naming it, but also keep consistent with other APIs from
  across teams. You can find details about the <a
  href="https://spec.openapis.org/oas/latest.html#info-object">info object for
  OpenAPI</a>, and explore <a
  href="https://guidance.apievangelist.com/guidance/openapi/info-title.html"
  target="_blank">API title length</a> via API Evangelist guidance.
message: Info Title MUST Be Less Than 50 Characters
severity: error
given: $.info
then:
  field: title
  function: length
  functionOptions:
    max: 50
```

### Info Title Has First Characters Capitalized

```
description: >-
  Having a consistent casing for the title for your API helps provide
  constraints for teams naming the API, but also keep consistent with other APIs
  from across teams. You can find details about the <a
  href="https://spec.openapis.org/oas/latest.html#info-object">info object for
  OpenAPI</a>, and explore <a
  href="https://guidance.apievangelist.com/guidance/openapi/info-title.html"
  target="_blank">API title casing</a> via API Evangelist guidance.
message: Info Title Has First Characters Capitalized
severity: error
given: $.info.title
then:
  function: pattern
  functionOptions:
    match: '[A-Z]\w*'
```

Each rule has an error and info severity, or in more plain language, a negative and positive version of the rule. I have only listed the negative version, but the positive are just the exact opposite of the error with slightly different phrasing. The goal is to report up on the status of both the governance pattern and anti-pattern, and ensure that teams can learn from guidance in both situations (when they get right or wrong).

This blog post is just an output on my policy and rules work in this area, and I am missing several rules that would help round off my API naming policy:

- **API Name Length** - The APIs.json name doesn't not have length rule.
- **API Name Casing** - The APIs.json name doesn't not have casing rule.
- **Info Title Length (Info)** - The OpenAPI title length doesn't have info rule.
- **Vocabulary Lookup** - I want to create a vocabulary look rule for names.

I will create these new rules and associate them with the policy. Rules coverage for policies is one of my greatest concerns and until I have more automated tools to help me out in this area, I manually keep an eye on as part of this work.

<img src="https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-please-do-not-feed-the-pigeons.jpeg" style="padding: 15px;">

Right now rules are primarily achieved using Spectral default functions, but I will be creating more custom functions to help me tackle some of the more complex rules, multi-specification rules, as well as making API calls as part of rule execution like I will need for the vocabulary lookup.

## API Guidance
In my opinion API governance is just API guidance, and each policy will have associated API guidance to help teams move forward and understand why an API policy matters. API guidance is linked as part of each rule, traveling to any service, tooling, or IDE that a developer is using, linking them back to the how and why this governance exists in the first place, and what they can do to move forward.

### APIs.json API Name

```
title: API Names
subtitle: This is the first impression you will make on consumers of your API.
tags:
- APIs
- Metadata
- Naming
author: Kin Lane
visibility: public
business: >-
  The name of your APIs are the names of your digital products, which are something that are increasingly discovered and read by business stakeholders who make the purchasing decisions.
technology: >-
  The names of APIs are defined using the APIs.json name property and the OpenAPI info title property, providing common places to apply the names of APIs, which will show in tooling.
policies: >-
  There are policies in place to ensure each API has a name, that the names are of a proper casing and length, with additional policies in the works to help address consistency of vocabulary.
people: >-
  Names of APIs should reflect the needs of an API consumer, speaking to what they are looking for in a digital resource or capability, rather than what the needs are of those who produced the API.
