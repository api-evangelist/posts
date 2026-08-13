---
published: true
layout: post
title: 'The APIs That Charge Per Call And The APIs That Let You Rehearse Are Two Different Sets'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-apis-that-charge-per-call-and-the-apis-that-let-you-rehearse-are-two-different-sets.png
date: 2026-10-01
author: Kin Lane
tags:
  - Agents
  - Monetization
  - x402
  - Agent Readiness
  - APIs.io
  - Kin Score
  - APIs
---
I ran two queries against the catalog this week for someone working on signed receipts for agent actions. He wanted a targeting list rather than an abstract adoption problem, and two cohorts looked like the obvious place to start.

The first: providers that publish a **dry-run mode** — a way to model a call without performing it. Seventy-one of 26,568, which I [wrote about separately](https://apievangelist.com/2026/09/29/seventy-one-apis-will-let-you-try-a-call-without-committing-it/).

The second: providers doing **payment per call** — pricing individual endpoints and returning a real `402 Payment Required` before executing, most of them via [x402](https://apis.io). Sixty-nine providers reference it somewhere in their profile; forty-nine carry the signal inside an actual contract or commercial artifact — the APIs.json, an OpenAPI, the plans, the FinOps record, the authentication description, or an MCP manifest — rather than only in prose.

Both cohorts have already solved a hard half of the same problem. A dry-run provider has separated *what would happen* from *what happened*. A per-call payment provider produces a settlement record tied to a specific request, across a trust boundary, between parties with no prior relationship. If you are trying to get an API to sign an attestation of what it just did, either group is most of the way there.

So the interesting question was the overlap. Which providers do both?

## None of them

Not one. The intersection of those two sets is empty.

I expected a handful. What you would want, if you were building this, is a provider that already models actions separately from executing them *and* already settles value against a specific request — because then "sign what you just did" is a small addition to machinery that exists. That provider does not appear to exist in a catalog of 26,568.

Once you look at who is in each list, the reason is not mysterious. They came from different places and solved different problems:

- The **dry-run cohort** is infrastructure and developer tooling. Xquik, DoiT, Modulr, PingCAP, ActiveCampaign, RingCentral, Netcracker, Atlassian, Azure DevOps, Backstage, Argo CD, Portainer. Plus fourteen universities. These are teams whose users would break something expensive by accident, so they built a way to rehearse. They are not thinking about money per request at all.
- The **x402 cohort** is almost entirely crypto-native. Arkham, thirdweb, Covalent, Figment, Fireblocks, Celo, Zerion, MoonPay, Zero Hash. They arrived at per-call settlement from the payments side, because that is what their infrastructure already made easy. Very few of them offer any way to preview what a call will do before you pay for it.

Two populations, two instincts, no meeting point.

## Why the empty cell is the finding

It would have been a nicer story if there were an overlap. It is a more useful result that there is not, for two reasons.

**First, it tells you the market has not converged on "agent-safe" as a category.** If safety-for-automated-callers were a coherent thing vendors were building toward, you would expect the properties to cluster — the same handful of forward-looking providers doing dry-run *and* idempotency *and* per-call payment *and* consent signalling. Instead each property has its own separate constituency, arrived at for its own local reason. Nobody is assembling the set. They are each solving one problem that happened to land in front of them.

**Second, it means there is no perfect-fit design partner**, and anyone building for this has to make their case twice. To the dry-run group the pitch is *sign what you already simulate.* To the x402 group it is *sign what you already settle.* Those are different conversations with different people, and pretending they are one market is how you end up with a product nobody's roadmap has room for.

## The x402 cohort is worth watching regardless

Set the receipts question aside — the per-call payment list is the more interesting half on its own, because it is the first group of APIs in the catalog whose commercial model assumes the caller is a machine.

A `402` returned before execution, against a specific request, priced in a stablecoin, settled without an account or a contract or a sales call, is a genuinely different shape from every API business model that came before it. No signup. No key issued to a human. No monthly tier that assumes someone is forecasting usage. The transaction is the relationship.

I have written before that the [default spend cap on most agent x402 clients is around ten cents](https://apis.io), which tells you what these APIs are actually being built for — high-frequency, low-value, machine-to-machine calls where the cost of negotiating access would exceed the cost of the call. That is a market that could not have existed before, and forty-nine providers in the catalog are already building for it.

What none of them do yet is let you ask what the call would cost you in consequences rather than cents.

## The honest limits on both numbers

Same caveat as always, and it matters more when a number is small. Both lists measure **what is discoverable in machine-readable form**, not what exists.

A provider with a validate-only flag that never made it into the OpenAPI is missing from the first list. A provider settling per call without using the x402 vocabulary is missing from the second. Both are floors, not censuses. And the twenty of the sixty-nine x402 mentions that I excluded — the ones where the reference appears only in prose, a blog post or a README rather than in a contract — are excluded precisely because announcing a thing and shipping it are different, and the catalog should be able to tell them apart.

Which means the empty intersection is a floor result too. It is possible some provider out there does both and has told nobody in a form a machine can read. If so, the point stands anyway: for every automated caller in the world, a capability nobody can discover is a capability that does not exist.
