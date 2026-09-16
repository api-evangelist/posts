---
published: true
layout: post
title: 'Arazzo Is Adding SOAP -- Comment on the Pull Request Before the Upcoming Release'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/arazzo-is-adding-soap-and-the-pull-request-needs-two-approvals.png
date: 2026-09-16
author: Kin Lane
tags:
  - Arazzo
  - SOAP
  - WSDL
  - Workflows
  - OpenAPI
  - Specification
  - Standards
---

I sat in on the [Arazzo](https://spec.openapis.org/arazzo/latest.html) bi-weekly call this morning, and the first thing on the agenda was a pull request that has been open since July and is, by the maintainer's own account, ready to merge. [PR #533](https://github.com/OAI/Arazzo-Specification/pull/533) adds SOAP support to Arazzo 1.2. It has been approved once already. It needs to be approved again, by two people, and then it ships in the release the group is now aiming at the end of October. That is the whole story, and I am writing it because the fastest way I know to get a specification finished is to get people looking at the pull request.

Here is what the change actually is, because it is smaller than "add SOAP" sounds. Arazzo describes a workflow as a sequence of steps, and every step points at an operation in a source description — until now an OpenAPI or AsyncAPI document. SOAP runs over HTTP, so nearly everything Arazzo already does works for a SOAP call without modification. Two things were missing: there was no valid source description type for a WSDL, and there was no valid way for a step to point at an operation inside one. The pull request adds `wsdl` to the source description type enum, covering both WSDL 1.1 and 2.0, and adds an `operationName` field to the step object whose value must match the `name` attribute of a `wsdl:operation` in the WSDL's `portType` or `interface`. That is the entire surface area of the schema change.

The `operationName` field is newer than the pull request. The July version reused `operationId` for WSDL steps, on the argument that a second field serving the same purpose was bloat. On August 31 Frank Kilcommins [reversed that](https://github.com/OAI/Arazzo-Specification/pull/533/commits), after a conversation with Naresh Jain about keeping the step schemas properly discriminated — a validator should be able to tell a SOAP step from an OpenAPI step from an AsyncAPI step by looking at which field is present, not by reading prose. The trade-off is that `operationName` is now mutually exclusive with `operationId`, `operationPath`, `channelPath` and `workflowId`, and the schema can enforce that with a `oneOf` instead of a `MUST NOT` in the text. It is a small decision, and it is exactly the kind of decision that gets made well on a call and badly in a vacuum.

The rest of the pull request is guidance, and the guidance is the part a SOAP shop will care about. There is a new subsection on authoring steps against a WSDL source: tools resolve the HTTP method and endpoint from the WSDL binding, so the workflow author never writes them; `SOAPAction` and `Content-Type` are spelled out for SOAP 1.1 and 1.2; there is a pattern for detecting a SOAP Fault in a response; and the request body has to be a full envelope. Response validation needed no change at all, because Arazzo already supports XPath in its success criteria. There are two worked examples — a [WSDL-only customer CRUD workflow](https://github.com/OAI/Arazzo-Specification/pull/533/files) and a hybrid order-fulfillment flow that chains a REST retail API into a SOAP fulfillment service — plus schema tests for the pass, fail and edge cases.

Why prioritize SOAP in a specification most people associate with modern API workflows? Frank's answer on the call was that he had come across two open-source tools advertising Arazzo support that had already worked around the SOAP gap on their own — because XML and XPath were supported, they wired WSDL operations in without the spec's blessing. When your users are patching the specification for you, that is the clearest signal a specification gets. I see the same thing from the catalog side. Seventy-three of the provider profiles in [APIs.io](https://apis.io) reference a WSDL somewhere in their APIs.json, and they are not the long tail — they are Salesforce, Workday, Oracle Siebel and Microsoft Exchange; grid operators like ERCOT, MISO and IESO; insurers like Erie; and federal agencies like the Forest Service and the Bureau of Land Management, running services that have been up for fifteen years and are not going anywhere. A workflow language that cannot describe a call into one of those is a workflow language for half the enterprise.

The pull request was approved by [Nick Denny](https://github.com/ndenny) and [Kevin Duffey](https://github.com/kevinduffey) before the `operationName` change, which dismissed those approvals. Both said on the call they would re-review; Nick started his live while Frank was still talking. Dmitry Anansky has been through it in detail as well. So it is not that nobody has looked. It is that two approvals need to land before the next session for this to be the thing that is definitely in 1.2, and the release date the group settled on — end of October, drifting to mid-November — depends on the queue moving.

So here is the ask, and it is a modest one. If you run SOAP services, read the [authoring guidance in the diff](https://github.com/OAI/Arazzo-Specification/pull/533/files) and tell them whether the `SOAPAction` and fault-handling advice matches what your services actually do. If you build tooling — a validator, a runner, a renderer — read the schema change and tell them whether `operationName` gives you what you need to discriminate a WSDL step. If you just care that this specification keeps its cadence, go leave a review. And if you want to be in the room, the Arazzo call is every other Wednesday at 09:00 Pacific, details in [discussion #5](https://github.com/OAI/Arazzo-Specification/discussions/5), with the `#arazzo` channel on the [OpenAPI Slack](https://communityinviter.com/apps/open-api/openapi) in between. The next one is September 30.

Tomorrow, the pull request that lets an Arazzo workflow stop and wait for a human — or an agent — to answer.
