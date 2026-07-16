---
published: true
layout: post
title: 'On API Governance Needing Memory'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/on-api-governance-needing-memory.png
date: 2026-07-14
author: Kin Lane
tags:
  - API Governance
  - Memory
  - Provenance
  - API Commons
  - APIs
---

Daniel Kocot of [Adorsys](https://adorsys.com/) has written an important post titled, ["API Governance Needs Memory"](https://adorsys.com/en/techradar/api-governance-needs-memory/). This story doesn't require, but could be conflated with existing hype and discussions around AI memory--especially if you are using AI as part of API governance across your teams, as I am seeing happen, and enabling across companies I am working with.

Daniel asks, "what infrastructure does effective API governance actually require?". Focusing on the fact that we have style guides, rule sets, CI checks, but I'd also emphasize we apply governance in our IDE, and now via our AI copilots and agents. Highlighting that, "Every linting run produces valuable signals.", and that "Recurring Issues are not noise. They are evidence." Daniel is spot on that one of the core limitations of current governance approaches is that we rely on the OpenAPI, AsyncAPI, JSON Schema, and now Arazzo and Overlays to capture the accumulation and exhaust of this work--where we need intelligent provenance.

He asks, "Where is that provenance kept?", rightfully acknowledging that "Reviews and reports are useful in the moment". I tend to dump each review in GitHub alongside the artifacts I am reviewing, such as this [raw one in the Stripe repository for API Evangelist](https://github.com/api-evangelist/stripe/blob/main/review.yml). When applying API governance within the enterprise, this is how I would capture the exhaust of each peer, self-service, or pipeline review of an API artifact. To deliver on Daniel's vision, I'd make this a first class artifact, giving it its own folder, dumping every single review with timestamp, allowing time series, diff, and other reporting to emerge based upon the exhaust that is produced from the software development lifecycle as API governance is applied in real-time during design, development, and build stages.

This review exhaust should be captured alongside artifact [certification](https://certification.apicommons.org/), API and schema [reusability](https://reusability.apicommons.org/), assessment of [coverage](https://coverage.apicommons.org/), evaluation of [pipelines](https://pipeline.apicommons.org/), rule [waivers](https://waivers.apicommons.org/), security posture, and other governance and compliance work occurring across the lifecycle. We should be capturing, timestamping, and storing the application of governance across the APIs we are producing, but also the APIs we are consuming across web, mobile, and AI applications. Every time we apply governance, we should capture it, and make sure we have it as part of the provenance to help audit and improve upon how we put APIs to work across operations.

This API governance memory should remember everything we did as part of API governance, as well as who did it. We should be using this memory to deliver better guardrails as Daniel focuses upon, but also the documentation, education, and training we provide for teams and make available inline with IDEs, Copilots, and pipelines. It should be made available to agents being employed by teams, and aligned with business strategy (revenue, cost, risk, velocity, quality, etc.), policy (change, observability, traceability, auditability, etc.), and experience (documentation, security, virtualization, testing, etc.). This work should inform and stabilize the capabilities of an organization, domain, and team, while being durable amidst team turnover, priority shifts, and market forces.

I recommend applying governance across all of the artifacts we use and accumulate across the software development lifecycle--take a look at the artifacts I accumulate for both [Stripe](https://github.com/api-evangelist/stripe) and [Twilio](https://github.com/api-evangelist/twilio). It will produce a lot of data, but if we use AI to help refine and make sense of it, and continue [wrapping our API governance in MCP servers](https://github.com/api-commons/api-governance-mcp) that are shaped by [Agent Skills](https://agents.apicommons.org/), we will be able to strengthen, enrich, and leverage the API governance memory that Daniel speaks of. Good stuff Daniel. Lots of great thoughts to build upon. This institutional memory for governance will be key in defining and strengthening the business capabilities that you and I have been working to define throughout the year. I'd love to see the details of capabilities captured by API governance rules and surfaced as part of the strategy and experience that product is needing in this moment--making it all available via the desktop, web, mobile, and AI applications we are already using via APIs and MCP.
