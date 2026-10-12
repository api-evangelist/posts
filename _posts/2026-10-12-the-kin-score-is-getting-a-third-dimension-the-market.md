---
published: true
layout: post
title: 'The Kin Score Is Getting A Third Dimension: The Market'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-is-getting-a-third-dimension-the-market.png
date: 2026-10-12
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - Integrations
  - Capabilities
  - Methodology
---
I want to draw a line in the sand with this one, while acknowledging we are just getting started.

For the last year the Kin Score has measured two things about an API provider: what they publish, and how ready that is for agents. Both are about the provider looking at itself. Over the last couple of days we started building a third dimension that looks outward. It reads a provider in its market. We are calling it the Market layer.

I think this is quickly becoming our intellectual property, sitting on top of all the open-source data we produce about providers. The OpenAPI, the capabilities, the tags, the conversational overlays, the Arazzo workflows, and now the integrations: each of those is useful on its own. Connected together, they start to say something none of them can say alone, which is what an API is actually worth to the businesses that depend on it.

## Connecting the dots

The chain we are building is deterministic, and every link is something we can show:

**operation → tag → business capability → workflow → integration → market**

An OpenAPI operation belongs to a tag. Tags map to business capabilities, the units businesses actually buy and depend on. Capabilities are carried out by workflows, which we generate as Arazzo. Conversational overlays phrase those workflows the way business stakeholders talk about getting things done. Integrations connect one provider's workflows to another's. And every integration between two providers is a vote. It is the market saying this workflow matters enough that someone built it.

That last piece is new. Over the last day the profiling pipeline started harvesting integrations for every provider. It writes a machine-readable integration graph and recreates each provider's integrations page as Arazzo workflows we generate, with every edge citing its evidence.

## Rules we are holding ourselves to

**Breadth is not credit.** Integrations are easy to articulate and hard to make deep. A provider listing three hundred logos earns nothing for the list. We score the depth of each integration: is there real evidence, does a valid workflow actually implement it, does it cross business capabilities. A short list can be the stronger one.

**Declaration is the provider's responsibility.** If a provider doesn't articulate its integrations and partnerships, we can't measure them, and we won't infer them. We report them as "undeclared." That is their problem, not ours, and the published rating is the incentive to fix it.

**Attribution stands.** When a workflow can't be built, we record whose gap it is: the provider's contract, the partner's contract, or our own catalog. Our gaps never count against a provider.

**Deterministic first.** Wherever a market publishes its own structure, we read that structure rather than asking a model.

## Bedrock: four markets in a first pass

We have taken four established markets through a first pass, and each one taught us something different.

- **Payments** (213 providers). Integrations here live in contracts. Card networks, rails, and payment methods show up as enum values in partners' APIs, so we detect them there and never from a bare name match. The bottleneck was partners' missing contracts.
- **E-commerce and CRM.** Platforms are markets. Salesforce's AppExchange lists 6,115 apps, HubSpot's 2,578, BigCommerce's 1,404. We read those stores with deterministic adapters and keep a partner investing to build on a platform separate from a platform listing its own connectors. Long lists didn't buy rank: Optimizely's 334 integrations scored below Tabby's ten.
- **Open banking (PSD2).** Almost nothing is in marketplaces or workflows. Only 13% of the providers in this regime declare any integration at all. But in regulated markets, standards are the market structure. So we read the regulators' own public registers, Australia's Consumer Data Right register, Open Finance Brasil, and the UK Open Banking directory, along with the bank-coverage lists aggregators publish.
- **Healthcare (FHIR).** The same lesson. The structure is in the EHR vendors' published FHIR endpoint directories, 448 customer endpoints for Epic and 2,730 for Oracle Health. A live sample of their CapabilityStatements gives FHIR 4.0.1 with SMART on FHIR across every endpoint that answered.

The four-market finding is the one I keep coming back to: **open markets integrate through workflows, regulated markets integrate through standards.** A provider gets read in its position, and then by depth within that position.

## Frontier: measured by movement

Bedrock markets are measured by depth and structure. Frontier markets are measured by movement over time: who is entering, whose shape is converging, who declares compatibility with whom, how fast it is all changing.

We just published the first example. [Decision models agreed on the questions, not the contract](/2026/10/12/decision-models-agreed-on-the-questions-not-the-contract/). Eleven providers now ask the same three kinds of question, there are two competing URLs, only four publish a contract, and nobody publishes calibration. That analysis is the Market layer in frontier mode. A `compatible` edge, like Telnyx declaring its API is System One-compatible, is an integration too. It is a vote for a shape.

Integrations and API design standardization are what let us quantify market value across that whole spectrum, from the frontier to the bedrock.

## What this is not, yet

This is a standalone layer. It does not touch the composite Kin Score or agent readiness, and it won't until it has proven stable across several weekly releases. The depth scores we have are a first prototype, with weights we are calibrating against my own read of each market. Some of what we found was our own catalog being thin, not providers being weak, and we are fixing that first.

## Through the fall and early winter

We are just getting started. Over the coming weeks I'll take more markets through this: healthcare interoperability networks, more of the platform marketplaces, more regulated industries, and more frontier markets as they emerge. We'll publish a Market layer design that providers can read and respond to. If you are a provider, the fastest way to show up well is simple: declare your integrations and partnerships in a form a machine can read.

The API economy powers every part of business now, including AI. The Market layer is how we intend to measure what it is actually worth.
