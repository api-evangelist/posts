---
published: true
layout: post
title: The Venn diagram of API Governance and API Observability
date: 2025-03-21T09:00:00.000Z
tags:
  - Governance
  - Observability
  - Traceability
  - Deprecation
  - Plans
  - Usage
  - SLA
  - SLO
  - SLI
image: https://kinlane-images.s3.amazonaws.com/shared/norman-rockwell-ruby-bridges-nyc-57th-3.jpeg
---
Continuing to parse the great discussion from the weekly API Evangelist API Governance conversation yesterday, and building on the presentation from Paul Bruce on observability, I want to further process what I learned. Paul does a great job of making the overlap between API governance and API observability, well….observable. Paul distills down several definitions, eventually getting us to the fact that we are trying to “understand how the components, the infrastructure and the data all contribute to achieving a business outcome or objective”.  You’ll have to listen to the full discussion, but a few of the takeaways for me regarding the overlap of API observability and governance were:

- **Business Goals** - Defining and being able to quantify if business goals were met — event, dare we even say business API observability?
- **Usage** - Are we able to effectively see and factor in the usage of APIs as part of our API governance, shaping guidance and enforcement.
- **Plans** - Bringing in the service composition, rate limits, and other parts of the plans we have in place for all the consumers of our APIs.
- **Troubleshoot** - Where does the ability understand problems encountered, and how does the ability to troubleshoot an API shape governance.
- **Traceability** - The need for traceability as part of API observability and governance, and asking can you even have governance without tracing.
- **SLA / SLO / SLI** - What the role of service level agreement, service level objectives, and service level indicators when it comes to API governance.
- **Deprecation** - Ensuring that the sunsetting and deprecation of APIs is part of the API governance strategy and we always have a plan in place.

I have been [working to expand my API governance policies and rules to the operational level](https://rules.apievangelist.com/apis-json/) and touching on some of the areas we discussed. I have pipeline and gateway rules, as well as monitoring and testing rules. I’d like to do more work on governance rulesets for API plans, rate limiting, deprecation, and the things you’d need to inform SLA, SLO, and SLIs. API governance overlaps with every aspect of enterprise operations, so looking at API observability through the API governance lens, and looking at API governance through the API observability lens makes a lot of sense. I also really like that discussion around the concept of API business observability and being able to see beyond the API plans and rate limits and be able validate business goals, and even possibly the concept of API business traceability to better connect these dots.

If you want to join future conversations just email me at [info@apievangelist.com](mailto:info@apievangelist.com).

<style>
  .youtube-video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
<center><iframe class="youtube-video" src="https://www.youtube.com/embed/h_hrbamY3nY?si=s2KLGqf6I3_tKsTC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>