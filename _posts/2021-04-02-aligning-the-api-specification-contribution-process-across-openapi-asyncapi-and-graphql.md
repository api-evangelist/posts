---
published: true
layout: post
title: >-
  Aligning the API Specification Contribution Process Across OpenAPI, AsyncAPI,
  and GraphQL
image: >-
  https://kinlane-productions2.s3.amazonaws.com/aligning-the-api-specification-contribution-process-across-openapi-asyncapi-and-graphql.png
tags:
  - AsyncAPI
  - OpenAPI
  - GraphQL
---

Mike Ralphson (@permittedsoc) suggested that the OAI follow AsyncAPIs lead when it comes to adopting a GraphQL like approach to managing contributions to the specification in the OpenAPI specification technical steering committee (TSC) yesterday. AsyncAPI has followed GraphQL lead as it enters the Linux foundation, and it is something that the OAS TSC is strongly considering. Here are links to the existing contribution guidelines for these three specifications:

- [GraphQL Contribution Guidelines](https://github.com/graphql/graphql-spec/blob/main/CONTRIBUTING.md)
- [AsyncAPI](https://github.com/asyncapi/spec/blob/master/CONTRIBUTING.md)
- [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/README.md#participation)

Admittedly, the OAS “participation” framework is a bit of a special snowflake, which has been mentioned might be one aspect of operations that might be preventing the specification from shifting gears into its next phase of development.  To help me learn more about the approach I wanted to break down the GraphQL and AsyncAPI approach.

### GraphQL - Guiding Principles

- Backwards compatibility - Once a query is written, it should always mean the same thing and return the same shaped result. Future changes should not change the meaning of existing schema or queries or in any other way cause an existing compliant GraphQL service to become non-compliant for prior versions of the spec.
- Performance is a feature - GraphQL typically avoids syntax or behaviors that could jeopardize runtime efficiency, or that make demands of GraphQL services which cannot efficiently be fulfilled.
- Favor no change - As GraphQL is implemented in over a dozen languages under the collaboration of hundreds of individuals, incorporating any change has a high cost. Accordingly, proposed changes must meet a very high bar of added value. The burden of proof is on the contributor to illustrate this value.
- Enable new capabilities motivated by real use cases - Every change should intend on unlocking a real and reasonable use case. Real examples are always more compelling than theoretical ones, and common scenarios are more compelling than rare ones. RFCs should do more than offer a different way to reach an already achievable outcome.
- Simplicity and consistency over expressiveness and terseness - Plenty of behaviors and patterns found in other languages are intentionally absent from GraphQL. "Possible but awkward" is often favored over more complex alternatives. Simplicity (e.g. fewer concepts) is more important than expressing more sophisticated ideas or writing less.
- Preserve option value - It's hard to know what the future brings; whenever possible, decisions should be made that allow for more options in the future. Sometimes this is unintuitive: spec rules often begin more strict than necessary with a future option to loosen when motivated by a real use case.Understandability is just as important as correctness - The GraphQL spec, despite describing technical behavior, is intended to be read by people. Use natural tone and include motivation and examples.

### AsyncAPI - Guiding Principles

- Favor no change - As AsyncAPI is implemented in many languages under the collaboration of a lot of individuals, incorporating any change has a high cost. Accordingly, proposed changes must meet a very high bar of added value. The burden of proof is on the contributor to illustrate this value.Enable new capabilities motivated by real use cases - Every change should intend on unlocking a real and reasonable use case. Real examples are always more compelling than theoretical ones, and common scenarios are more compelling than rare ones. RFCs should do more than offer a different way to reach an already achievable outcome.Simplicity and consistency over expressiveness and terseness - “Possible but awkward" is often favored over more complex alternatives. Simplicity (e.g. fewer concepts) is more important than expressing more sophisticated ideas or writing less.Preserve option value - It's hard to know what the future brings; whenever possible, decisions should be made that allow for more options in the future. Sometimes this is unintuitive: spec rules often begin more strict than necessary with a future option to loosen when motivated by a real use case.
- Understandability is just as important as correctness - The AsyncAPI spec, despite describing technical behavior, is intended to be read by people. Use natural tone and include motivation and examples.

### GraphQL - Contribution Stages

- Stage 0:&nbsp;Strawman - An RFC at the&nbsp;strawman&nbsp;stage captures a described problem or partially-considered solutions. A&nbsp;strawman&nbsp;does not need to meet any entrance criteria. A&nbsp;strawman's&nbsp;goal is to prove or disprove a problem and guide discussion towards either rejection or a preferred solution. A&nbsp;strawman&nbsp;may be an issue or a pull request (though an illustrative pull request is preferrable).
- Stage 1:&nbsp;Proposal - An RFC at the&nbsp;proposal&nbsp;stage is a solution to a problem with enough fidelity to be discussed in detail. It must be backed by a willing&nbsp;champion. A&nbsp;proposal's goal is to make a compelling case for acceptance by describing both the problem and the solution via examples and spec edits. A&nbsp;proposal&nbsp;should be a pull request.
- Stage 2:&nbsp;Draft - An RFC at the&nbsp;draft&nbsp;stage is a fully formed solution. There is working group consensus the problem identified should be solved, and this particular solution is preferred. A&nbsp;draft's&nbsp;goal is to precisely and completely describe the solution and resolve any concerns through library implementations. A&nbsp;draft&nbsp;must be a pull request.
- Stage 3:&nbsp;Accepted - An RFC at the&nbsp;accepted&nbsp;stage is a completed solution. According to a spec editor it is ready to be merged as-is into the spec document. The RFC is ready to be deployed in GraphQL libraries. An&nbsp;accepted&nbsp;RFC must be implemented in GraphQL.js.

### AsyncAPI - Contribution Stages

- Stage 0:&nbsp;Strawman - An RFC at the&nbsp;strawman&nbsp;stage captures a described problem or partially-considered solutions. A&nbsp;strawman&nbsp;does not need to meet any entrance criteria. A&nbsp;strawman's&nbsp;goal is to prove or disprove a problem and guide discussion towards either rejection or a preferred solution. A&nbsp;strawman&nbsp;may be an issue or a pull request (though an illustrative pull request is preferrable).
- Stage 1:&nbsp;Proposal - An RFC at the&nbsp;proposal&nbsp;stage is a solution to a problem with enough fidelity to be discussed in detail. It must be backed by a willing&nbsp;champion. A&nbsp;proposal's goal is to make a compelling case for acceptance by describing both the problem and the solution via examples and spec edits. A&nbsp;proposal&nbsp;should be a pull request.
- Stage 2:&nbsp;Draft - An RFC at the&nbsp;draft&nbsp;stage is a fully formed solution. There is consensus the problem identified should be solved, and this particular solution is preferred. A&nbsp;draft's&nbsp;goal is to precisely and completely describe the solution and resolve any concerns through library implementations. A&nbsp;draft&nbsp;must be a pull request.
- Stage 3:&nbsp;Accepted - An RFC at the&nbsp;accepted&nbsp;stage is a completed solution. According to a spec Committer it is ready to be merged as-is into the spec document. The RFC is ready to be deployed in AsyncAPI libraries. An&nbsp;accepted&nbsp;RFC must be implemented in the&nbsp;AsyncAPI JS Parser.
- Stage X:&nbsp;Rejected - An RFC may be&nbsp;rejected&nbsp;at any point and for any reason. Most rejections occur when a&nbsp;strawman&nbsp;is proven to be unnecessary, is misaligned with the&nbsp;guiding principles, or fails to meet the entrance criteria to become a&nbsp;proposal. A&nbsp;proposal&nbsp;may become&nbsp;rejected&nbsp;for similar reasons as well as if it fails to reach consensus or loses the confidence of its&nbsp;champion. Likewise a&nbsp;draft&nbsp;may encounter unforeseen issues during implementations which cause it to lose consensus or the confidence of its&nbsp;champion.

Both AsyncAPI and GraphQL require a contribution champion to push anything forward. I applaud AsyncAPIs approach to reuse what is already out there when it comes to not just the specification, but also their process. It is something that will be setting up the event and message driven API specification for success in the future. Understanding what already exists, and emulating the healthiest and most familiar patterns out there is what the API game is all about, and I think it makes sense for API specification stewards to follow this approach in everything they do.

I’ll keep reporting on what I am seeing come out of the OAS contribution process discussion within the TDC. This is just one of several areas I am looking to help p drive more discussion across the specifications. Like with APIs, I want interoperability, reuse, and standardization across API specifications. GraphQL, AsyncAPI, and OpenAPI are all essential specifications in our API toolbox and there should be alignment between these worlds. I really feel like both OpenAPI and GraphQL suffer from not working well with each other for a variety of reasons, and I am finding AsyncAPIs approach to all of this very refreshing, and reflects the future of API specifications that I would like to see. Not just in how you contribute to the spec, but how you build upon and work with other existing specifications that came before. You end up with more momentum in the end if you do it this way, rather than trying to go at it all alone.