---
published: true
layout: post
title: 'Three Hundred Eighty-Nine Agent Cards Are Live, And We Are Not Counting Ours'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/three-hundred-eighty-nine-agent-cards-are-live-and-we-are-not-counting-ours.png
date: 2026-10-20
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - A2A
  - Agents
  - Agent Readiness
---
We built an AI agents market for the Kin Score this week, and it is the first market where the strongest evidence is something a provider publishes about itself.

## What we read

The A2A protocol lets a provider publish an agent card at a well-known address on its own domain, describing the agent, what it can do, and how to talk to it. The catalog already tracked 487 of these. We re-probed every one of them live.

- 389 are live.
- 62 are "flavored," meaning they exist but drift from the spec.
- 27 are gone.
- 7 aren't agent cards at all.

Of the 371 we could tie to a provider, 276 conform to the spec. We also read the a2aregistry.org register, 566 listings across 304 hosts. One host alone accounts for 98 of those listings, which is why we count one fact per host, never the listings.

## A card on your own domain is a declaration

The Kin Score rule for markets is that declaration is the provider's responsibility. An agent card served from a provider's own domain is about the cleanest declaration there is. Nobody else can put it there.

So we decided that once we have four weekly snapshots, a provider's own agent card will count as its own declaration in the market. The first snapshot was October 15. The fourth lands November 2. When that happens, most of the 122 undeclared providers in this cohort move to declared. That would be the largest single shift any market has produced so far.

Registry listings are different. Anyone can list an agent in a registry. Those stay report-only, the same way we treat MCP registry listings.

## The cards we didn't count

Here is the part I want to be clear about. API Evangelist and APIs.io host agent cards ourselves, for companies like Oracle, SAP, MuleSoft, SendGrid, and Splunk. We built those to show what a well-formed card looks like for those APIs.

We held all thirteen of them, and our own, out of the market. Crediting a provider for a card we wrote would be crediting our own work. A provider gets credit when it publishes its own card, on its own domain, and not before.

We held other cards back too:

- About 22 docs-platform cards with generic names like "Developer Documentation," where the card describes the docs host rather than the company.
- Cards served from someone else's domain, or naming a different product than the company that serves them.
- Cards on shared hosting platforms, where the domain proves nothing about who wrote it.

## What it says about the frontier

Two things stood out. First, conformance is higher than I expected for a protocol this young: three quarters of the linked cards follow the spec. Second, the highest-scoring API companies in the cohort mostly don't publish a card yet. The early adopters are agent-native companies, not established API providers.

That is the frontier pattern we keep seeing. The shape gets agreed on by new entrants first, and the established providers follow once someone can measure the difference. We'll be watching the weekly snapshots to see how fast that happens.
