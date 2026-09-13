---
published: true
layout: post
title: "Microsoft Works In The Open With 70,000 Engineers. You Can Publish Your API Documentation."
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/microsoft-works-in-the-open-you-can-publish-your-api-documentation.png
date: 2026-09-14
author: Kin Lane
tags:
  - Open Source
  - Microsoft
  - API Documentation
  - Competition
  - API Discovery
  - Agent Readiness
  - API Governance
  - Business of APIs
  - Agents
  - AI
---

I have written twice recently about the two excuses I hear most often when I walk a company through their public API presence. The first is that [they have partner APIs, not public APIs](https://apievangelist.com/2026/08/12/we-have-partner-apis-not-public-apis/). The second is that [if they publish their API documentation their competition will just copy what they do](https://apievangelist.com/2026/08/13/if-we-publish-our-api-documentation-our-competition-will-copy-us/). Both excuses are really the same excuse wearing different clothes, and I have been looking for one link I can send to the people who keep making it. This is that link.

Go read [Microsoft's open source program page](https://opensource.microsoft.com/program/). Not the marketing, the program. It is a company that two decades ago called open source a cancer, publishing the operational details of how it now puts **over 70,000 engineers on GitHub Enterprise Cloud** across more than **100 GitHub organizations**, consuming **more than 200,000 open source components every month**, "working in the open." Their stated release policy is that Microsoft code "should be released under the MIT license absent a compelling reason to do otherwise." The default is open. The burden of proof sits on the person who wants to keep something closed.

That is source code. That is the crown jewels, the actual implementation, the thing your API documentation is *not*. And a company with more intellectual property to lose than almost anyone on earth decided the default answer is yes.

## They Did Not Get There By Being Careless

The part worth reading closely is how they made it safe, because this is where the "our competition will copy us" objection actually lives. Nobody at these companies is really afraid of the competition. They are afraid that publishing means losing control, and they have no machinery for publishing with control, so "no" is the cheapest answer available to them.

Microsoft built the machinery. Their program rests on three words — eliminate, automate, delegate. Eliminate the dated policies. Automate the detection, the inventory, the legal and security alerts. Delegate the decisions to the business groups closest to them. Every build at the company is connected to an internal inventory system that registers the open source it contains, generating a bill of materials, security alerts against known CVEs, and legal alerts when a component carries obligations. Every employee has an open source attorney assigned to their organization who is familiar with their business goals. The legal review, when one is triggered, arrives as a work item in the engineering system the developer already lives in, not as a meeting they have to beg for. They self-certify against OpenChain 2.1 so that everyone downstream can trust the result.

That is not recklessness. That is a governance program that makes the open path the cheap path, which is exactly what most API teams have never built and exactly what they are describing when they tell me their legal team will not let them publish. Your legal team has not said no. Nobody has ever built them a process for saying yes.

## Their Release Checklist Is Your API Documentation Checklist

Here is the part that made me want to write this post. Microsoft's checklist for releasing a project to the world maps almost line for line onto publishing an API publicly. It is the same work.

| What Microsoft requires to open source a project | What that is for your API |
|---|---|
| Register the release — every open source use is inventoried automatically | An API inventory. You cannot publish what nobody can enumerate |
| MIT by default, absent a compelling reason | Public documentation by default. Private is the exception you justify, not the rule you inherit |
| Remove internal paths, codenames, proprietary fonts, internal telemetry and email aliases before publishing | The cleanup pass on your OpenAPI. This is the real work, and it is finite |
| A README describing purpose and state | A portal and a getting-started page that says what this is and who it is for |
| A LICENSE file with OSI-approved text | Terms of service, rate limits, and access tiers — the thing that actually governs who consumes what |
| A CONTRIBUTING file with build instructions and a roadmap | Support channels, a changelog, and a published roadmap |
| A NOTICE file for third-party code | What is inside your API that is not yours |
| Staffing: at least one person committed to merging, responding, releasing | Somebody answers the email. An API nobody staffs is not a product |
| Buildable and runnable, with binaries available | Time to first call. A working curl, an SDK, a key you can get today |
| InnerSource in Azure Repos if you are not releasing publicly | Yes — some things stay private, and they have a named home for that too |

That last row is the one I want the partner-API crowd to sit with. Microsoft does not say everything must be public. They say **decide**, and they give both answers a real home. What most companies telling me "we only have partner APIs" have actually done is *not decide*. There is no inventory, no review path, no publishing pipeline, no cleanup pass, and no owner. "Partner" is the label they hang on the absence of a program, and it sounds strategic right up until you compare it to a market where their competitors made the other choice on purpose.

## And Then There Is Microsoft's Own API Estate

I would be a hypocrite if I held Microsoft up as the model and did not measure them with the same ruler I use on everyone else. [Their API estate on APIs.io](https://apis.io/estates/microsoft/) is 176 rated provider profiles across 1,453 APIs, and the blended estate rating is **34.0**. The spread is **75.6 points**, from Power Query at 80.0 all the way down to 4.4. Eleven surfaces are exemplar. Fifty-one are thin. Eighteen are barely there at all.

So the same company that built a world-class program for releasing source code has not run that program over its APIs. The open source side got the inventory, the automation, the default-yes policy, the assigned attorney, and the staffing requirement. The API side, by and large, did not — and you can see the result as a 75-point spread in what an agent meets when it shows up at different Microsoft doors.

That is the actual lesson here, and it is a more useful one than "be like Microsoft." This was never about being big enough, brave enough, or unafraid of your competition. It is about whether anyone has built the program. Microsoft built one for source code and it worked at a scale nobody thought possible from that company. The same company's API surface shows you, in public and in numbers, what it looks like when nobody has.

## So Publish The Menu

If your position is that publishing your API documentation hands something to your competition, you are arguing that your API documentation is more sensitive than Microsoft's source code. It is not. It is [the menu, not the recipe, and not the kitchen](https://apievangelist.com/2026/08/13/if-we-publish-our-api-documentation-our-competition-will-copy-us/). You still control access with authentication, authorization, rate limits, plans, and contracts — the same way Microsoft still controls what ships in a product while its code sits on GitHub in the open.

Meanwhile the cost of not publishing has changed. Your documentation is not just read by developers now. It is crawled, indexed, and turned into the training data and the live context that decides whether the agents your future customers are using know your API exists. Those agents do not know to email your sales team for a PDF. They evaluate the market they can see, and you are not in it.

Your competition already published. Microsoft published its source code and then published the playbook for how it did it safely. If you want to know where you actually stand before you argue about this any further, [the Kin Score rubric is public](https://apis.io/rating/) — go read what it measures, look up your own company, then look up the three competitors you worry about most.
