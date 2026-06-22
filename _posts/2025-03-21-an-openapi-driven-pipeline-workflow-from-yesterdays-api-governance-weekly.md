---
published: true
layout: post
title: An OpenAPI-Driven Pipeline Workflow From Yesterday’s API Governance Weekly
date: 2025-03-21T09:00:00.000Z
tags:
  - Pipelines
  - Governance
  - OpenAPI
  - Terraform
  - SDKs
image: https://kinlane-images.s3.amazonaws.com/shared/green-circuit-gears-pipes-plumbing.jpg
---
Continuing to parse the great discussion from the weekly API Evangelist API Governance conversation yesterday, and building on the presentation from Yarra Letz of Tyk on where to store our OpenAPIs. Yarra provided a nice sequence or flow diagram that gets real world pipeline workflows that I want to shine a light on to drive discussion around how we govern our APIs. Her process offers a rich look at what your pipeline can be doing when it comes to a code-first or design-first approach to not just governance, but also generation, publishing, and distribution of your APIs.

- **Proposed Changes via PR**
- **Start Approval Process**
- **Run CI Checks**
- **Merge to Master**
- **Official Release**
- **Trigger Auto Pipeline**
- **Generate SDKs**
- **Generate Terraform**
- **Update Product Repos**
- **Publish to Postman Workspace**

I like the Terraform and Postman Workspace additions. I wish we had more time to dig into what happens at Run CI Checks and Trigger Auto Pipeline steps. One bit of feedback Yarra shared was that next API Governance Weekly we should just do two, instead of the four discussions, so we’d have time to go deeper on these topics. I agree. I recommend giving the discussion a watch or listen, and I look forward to Yarra and others coming back to go deeper at the pipeline layer of API governance guidance and enforcement at build time. I will bring pipelines up in future discussions, but would also like to get at the SDK, gateway, terraform, workspace, and documentation aspects of how we automate our API operations as presented by Yarra.

If you want to join future conversations just email me at [mailto:info@apievangelist.com](info@apievangelist.com).

Full Disclosure: APIMATIC is an API Evangelist Partner.

<style>
  .youtube-video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
<center><iframe class="youtube-video" src="https://www.youtube.com/embed/h_hrbamY3nY?si=s2KLGqf6I3_tKsTC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>