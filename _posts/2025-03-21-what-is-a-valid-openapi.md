---
published: true
layout: post
title: What Is A Valid OpenAPI?
date: 2025-03-21T09:00:00.000Z
tags:
  - Validation
  - Governance
  - OpenAPI
  - JSON Schema
  - Rules
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-god-talking-statue.jpeg
---
Continuing to parse the great discussion from the weekly API Evangelist API Governance conversation yesterday, and building on the presentation from Sohaib Tariq of APIMATIC on validating OpenAPIs, I wanted to explore the ways in which we seek to validate things, unpacking what was discussed in the conversation. The definition of validation is, “the action of checking or proving the validity or accuracy of something”. Which depends on who is doing the checking or proving, you will likely get many different perspectives. Let’s look at some of the insights introduced by the guests of the API governance conversation.

- **20% of OpenAPIs Are Invalid** - According to Sohaib Tariq, at APIMATIC 20% of the OpenAPIs that come in are just broken.
- **50% of OpenAPIs Have Major Issues** - Half of the OpenAPIs are not fit for generation of SDKs, possessing major issues.
- **Compliant with OpenAPI 3.x JSON Schema** - A valid OpenAPI begins with compliance of the JSON Schema for OpenAPI 3.x.
- **Valid JSON or YAML** - Dave Biesack took things back a notch by saying we need to be sure it is simply valid YAML or JSON.
- **Default Governance Rules** - Does an OpenAPI meet the table stakes of the API governance rules being used to enforce.
- **Extended Governance Rules** - Does an OpenAPI pass validation on a number of other rulesets that speak to each experience.

There is more insight we can extract from this conversation, but that provides a compelling look at the state of the OpenAPI validation conversation. It reveals the state of things, as well as the first couple of things you can do to tighten up our approach to OpenAPI validation. I would call this an OpenAPI validation policy which would have one or many JSON Schema and governance rules to validate—setting the foundation for how all APIs get governed within the enterprise. I’d love to see additional conversations going further down this rabbit hole, exploring where validation occurs and who is in charge of defining the validation perspective I spoke of earlier, but we’ll leave that for a future API Evangelist API Governance Weekly conversation.

If you want to join future conversations just email me at [mailto:info@apievangelist.com](info@apievangelist.com).

Full Disclosure: APIMATIC is an API Evangelist Partner.

<style>
  .youtube-video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
<center><iframe class="youtube-video" src="https://www.youtube.com/embed/h_hrbamY3nY?si=s2KLGqf6I3_tKsTC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>