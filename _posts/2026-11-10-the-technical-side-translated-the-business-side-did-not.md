---
published: true
layout: post
title: 'The Technical Side Translated. The Business Side Did Not.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-technical-side-translated-the-business-side-did-not.png
date: 2026-11-10
author: Kin Lane
tags:
  - Building Blocks
  - Machine Readable
  - API Commons
  - APIs.json
  - Agent Readiness
  - Kin Score
  - Onboarding
---
For more than a decade I've showcased the common building blocks of an API. Documentation, a getting started page, SDKs, authentication, sign-up, pricing, rate limits, terms of service, a privacy policy, a status page, a change log, and support. Since 2014 my work has been about turning each of those from something a human reads into something a machine can read, so discovery and onboarding can be automated. That is what [APIs.json](https://apisjson.org) was for. It is also why Steve Willmott and I started [API Commons](https://apicommons.org): to give the business and political building blocks a machine-readable home, starting with licensing.

Today every one of those building blocks is a check in the Kin Score. Each one also has a machine-readable, agentic counterpart in Agent Readiness. So this week I put them side by side across the catalog to see how the translation is actually going.

## How the building blocks feed the score

The classic building blocks are spread across four facets of the Kin Score. Discoverability covers the APIs.json index, descriptions, tags, and a human docs URL and base URL for each API. Operational transparency covers change logs, status pages, rate limits, deprecation, security disclosure, and webhooks. Developer ergonomics covers the portal, docs, reference, getting started, auth docs, SDKs, CLI, sandbox, and support. Access clarity covers plans, pricing, sign-up, terms, privacy, FinOps, compliance, and trust centers.

The rubric already leans toward machine-readable. The heaviest award in operational transparency is rate limits published as data, not as a page. The heaviest award in access clarity is plans published as data, not as a pricing page.

## Building block by building block

These numbers come from the latest score for 33,045 providers. In the right-hand column I count only what the provider published. Artifacts that API Evangelist generated on a provider's behalf are noted separately.

| Building block | Human-readable | Agentic counterpart | Provider-published |
|---|---|---|---|
| Documentation | 43.3% | OpenAPI contract | 31.5% |
| Authentication docs | 32.7% | Auth an agent can use | 36.4% |
| API reference | 20.9% | OpenAPI examples | 15.8% |
| SDKs | 14.3% | MCP server | 12.4% |
| Getting started | 20.7% | Agent Skills | 2.8% (+12.2% we derived) |
| Rate limits | 6.3% | Machine-readable rate limits | 17.1% (+15.1% we derived) |
| Webhooks | 7.8% | Event contract | 7.6% |
| Support | 41.2% | Error semantics | 15.2% |
| Sign-up | 18.5% | Dynamic client registration | 5.4% |
| Sandbox | 7.9% | Dry-run mode | 0.6% |
| Developer portal | 21.0% | `/.well-known/api-catalog` | 3.4% |
| llms.txt | 32.6% | A2A agent card | 1.3% |
| Privacy policy | 46.8% | Delegated identity | 10.3% |
| Pricing page | 22.5% | Agentic commerce | 1.1% |
| Terms of service | 40.9% | AI usage and consent signals | 0.4% |

Some of these pairings are my own judgment. Sign-up and dynamic client registration aren't the same thing. But each pair answers the same question for a different reader: a person or an agent.

## The technical side translated

Look at the top of the table. Documentation became OpenAPI. SDKs became MCP servers. Authentication docs became auth an agent can use. These pairs are roughly even, and auth is slightly ahead. That doesn't surprise me. Engineers see the opportunity, and they produce the artifacts and the code to make it happen. They've been doing that the entire time. The API vs. MCP argument mostly takes place in this top half, where the translation has already happened.

## The business side did not

Look at the bottom of the table. 40.9% of providers publish terms of service, and 0.4% publish anything an agent can read about what it is agreeing to. 22.5% publish a pricing page, and 1.1% publish anything an agent can buy through. 46.8% publish a privacy policy, and 10.3% let an agent act on behalf of a specific person. Only 5.2% host their own APIs.json, and 1.7% map their cost to usage in a form a machine can read.

This is the friction in discovery and onboarding. An agent can read the contract and call the API. What it can't do is find out what it is allowed to do, what it will cost, what happens to the data, or what it is agreeing to without a human opening a browser. That is the gap API Commons was started to close, and it is still the gap.

## Who is doing the translating

For Agent Skills, rate limits, agentic access, and error semantics, the versions API Evangelist generated match or outnumber what providers publish themselves. We've derived agentic access classifications for 7,345 providers, and 50 publish their own. That supports the argument that machine-readable is where this is headed. It also means part of the agent-ready web right now is our work and not the provider's. That's why every derived artifact is labeled as derived and scored with that provenance.

## What I'm doing about it

We already generate the business layer for a large part of the catalog: plans for 15,404 providers, rate limits for 12,766, FinOps for 9,464, and, as of this month, SLAs in [SLA4OAI](https://github.com/isa-group/SLA4OAI-Specification) for 7,530. The [API Onboarding Descriptor](https://apicommons.org/onboarding/) already covers the path from sign-up to credentials. The next step is to fill in the rest of the business and political building blocks as API Commons schemas and to publish them as generated layers alongside each provider's APIs:

- **Terms of service**: the clauses an agent actually needs to know, including permitted use, AI and training use, caching and storage, redistribution, attribution, jurisdiction, and termination notice.
- **Privacy and data processing**: data categories, retention, subprocessors, data residency, and roles, built on existing vocabularies rather than a new one.
- **Deprecation and sunset policy**: notice periods and support windows, tied to the Deprecation and Sunset headers. Only 4.2% of providers publish a policy at all.
- **Compliance attestations**: what a trust center says, as data. That means which certifications, which scope, which period, and where the report is.
- **Eligibility and availability**: which countries, which entities, and which use cases are allowed, and what verification is required before a key works.
- **AI usage preferences**: whether an agent can onboard, act, and train, stated by the provider instead of guessed.
- **Data and output licensing**: the license on what comes back, separate from the [interface license](https://apicommons.org) on the contract itself.

None of this is new to me. It's the same list I was building in 2014. What's changed is that there is now a reader on the other side, an agent, that needs it badly enough that someone will finally do the work. I'd rather that work happen in the commons than in a hundred private formats. If you publish any of these as data today, or you want to, I want to hear from you.
