---
published: true
layout: post
title: Where Is Governance (Guidance) Going?
date: 2026-02-06T09:00:00.000Z
tags:
  - Governance
  - OpenAPI
  - Spectral
  - Pipelines
  - IDE
  - CLI
  - Agent Skills
  - CLAUDE.md
  - SKILL.md
  - RULES.md
  - GEMINI.md
  - AGENTS.md
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-docks-oakland-4.jpeg
---
[I had a fascinating conversation Anna Daugherty on Wednesday](https://www.linkedin.com/posts/kinlane_anna-daugherty-cpmm-from-arnica-came-by-activity-7425565130353983488-Zyio?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAC2eqYB5Eg-JCzGJxAmnBCGS72UBnYyaA8), which will be published as a podcast shortly. If you don’t know Anna, she is a super smart and down to earth product marketer who works at [Arnica](https://bit.ly/4rELy0I), but I first met her when she was working her magic at Stoplight. Anna was educating me on what AppSec is, and I find Arnica’s view of the development lifecycle to be a glimpse at where things are headed with AppSec, but I think reflects where overall API governance is heading from the producer and consumer view.

Over the last couple of months I have been working on what I call [Spotlight rules](https://spotlight-rules.com/), in an effort to understand what is next when it comes to Spectral and Vacuum rules, but also for wider API governance, and specifically from a consumer perspective, and then secondarily the producer perspective — which is the opposite of how it is for most organizations today.

We have spent the last 7+ years creating rules using Speccy, then Spectral, then Vacuum to lint the surface area of our HTTP and eventually TCP APIs. We apply those governance rules in web applications, IDE, and the pipeline alongside our JSON Schema. The goal is to catch as many things early on in the software development lifecycle, but also enforce them at the pipeline level—with many companies choosing to just enforce—with a range of positive and negative consequences. 

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/governance-rules-pipeline.png" width="100%">

A core part of my recent investments into API governance practices involves what I call “inline guidance”, meaning that your API governance is only as good as the guidance and guardrails you provide for your teams. The API Evangelist weekly newsletter is called Weekly Governance (Guidance). You must educate, guide, and meet developers where they are when it comes to producing an API, but also consuming APIs. This happens in web applications, IDEs, CLI, pipelines, and historically via documentation that most engineers do not read.

I have been exploring different ways of injecting Spectral & Vacuum rules into the developer pipeline using mock MCP servers, as well as how I can inject more lifecycle and operational level guidance in there as well. The next step in this exploration is about understanding how this guidance, guardrails, policies, and rules can be further injected into developer workflow using CLAUDE.MD, RULES.MD, GEMINI.MD, .github/copilot-instructions.md, SKILL.MD, and AGENTS.MD—which covers a fairly large base of platforms where developers work.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/governance-rules-pipeline-skills.png" width="100%">

Spectral and Vacuum rules, as well as JSON Schema technically lives at the web application, IDE, CLI, and pipeline levels. What severity you apply, and how you bundle your rulesets by lifecycle stage and other experiences, as well as the other guardrails and guidance you provide in the form of documentation, communication via Slack, and other channels will determine a lot when it comes to aligning with the the technical details with the business details.

This is the current state of API governance while producing and consumer APIs, no matter what type of application you are developing on top of those APIs. With my exploration into injecting Spectral & Vacuum rules, as well as design, lifecycle, and operational guidance into copilot, I wanted to go beyond Spectral and Vacuum rules and how you can generate the CLAUDE.MD, RULES.MD, GEMINI.MD, .github/copilot-instructions.md, SKILL.MD, and AGENTS.MD you need to govern (guide) throughout the software development lifecycle.

[Speakeasy’s Agent Skills repository reflects the progression across the API lifecycle I am talking about](https://apievangelist.com/2026/02/06/thre-is-a-lot-of-knowledge-and-wisdom-packed-into-speakeasy-agent-skills/). Like a [GitHub repository with OpenAPI, Postman Collections, Bruno Collections, Jupyter Notebooks, AsyncAPIs, and other resources](https://apievangelist.com/2024/07/08/more-examples-of-using-github-to-manage-your-openapi/), I see what Speakeasy did as a significant evolution forward in how we express what we are capable of. Speakeasy occurs a specific operational domain for me—code generation. Which is an essential stop along the API lifecycle, and provides a look at how we can generate a new representation of what we are capable of. Even with the new specifications at the core, you can still see the fingerprints of Speakeasy’s API and OpenAPI at the heart of what they do.

I think my conversation with Anna, and an upcoming conversation with Speakeasy will help shape where governance (guidance) is going. I don’t see OpenAPI, JSON Schema, Spectral, or Vacuum going anywhere—they are essential nutrients for all of this. But following Speakeasy’s lead I think there is a path forward for other service providers across every stage of the software development lifecycle, and those of us who are trying to govern (guide) on top of the different stacks that people are applying across the enterprise. Regardless of what shakes out out with copilots and agentic hype right now, there is real value being defined using these artifacts, and important work occurring.