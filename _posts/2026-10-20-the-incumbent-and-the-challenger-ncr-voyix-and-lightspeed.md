---
published: true
layout: post
title: 'The Incumbent And The Challenger: NCR Voyix And Lightspeed'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-incumbent-and-the-challenger-ncr-voyix-and-lightspeed.png
date: 2026-10-20
author: Kin Lane
tags:
  - Incumbent And Challenger
  - Restaurant POS
  - Kin Score
  - Agent Readiness
  - Developer Portals
  - APIs
---
I hear the same thing in almost every enterprise conversation I have. We can't have a public developer portal. We can't publish our API documentation. Our customers are big, our deals are negotiated, our partners sign agreements first, and nothing about our business works out in the open. I understand where it comes from. But I want to start answering it with something other than my opinion, because in most markets the answer is sitting right next to you: you can, because your competition is already doing it, and in an agentic world they are coming for your business.

So this is the first in a recurring series. Each one takes a segment of the market, finds the established leader with a middling or low [Kin Score](https://apis.io/rating/), finds a challenger who may not be as big but publishes a lot more, and puts them side by side. Not to embarrass anyone. To show what is already possible in their own market.

## Restaurant point of sale

The first one is restaurant point of sale, from the restaurant POS market in the APIs.io Market layer.

**[NCR Voyix](https://apis.io/providers/ncr/)** is the incumbent. Its Aloha point-of-sale system has been on restaurant counters for decades, and NCR Voyix runs digital commerce for retailers and restaurants around the world. **[Lightspeed](https://apis.io/providers/lightspeed/)** is the challenger: a cloud commerce platform for retail and restaurants, smaller, younger, and built online.

| | NCR Voyix | Lightspeed |
|---|--:|--:|
| Kin Score | 27.5, thin | 83.8, exemplar |
| Agent readiness | 22.9, agent-aware | 42.6, agent-ready |
| Discoverability | 78.6 | 81.7 |
| Contract quality | 25.9 | 74.7 |
| Contract governance | 27.3 | 22.0 |
| Operational transparency | 7.9 | 92.1 |
| Developer ergonomics | 36.9 | 85.1 |
| Access clarity | 5.3 | 92.1 |
| OpenAPI descriptions in the catalog | 7 | 54 |

## What the difference actually is

NCR Voyix is not dark. It has a [developer portal](https://developer.ncrvoyix.com/) and [documentation](https://www.docs.ncr.com/), seven APIs described in OpenAPI, from catalog and orders to sites and selling, and it scores well on discoverability. If your story is "we can't have a public portal," NCR Voyix already proves you can, and so does its score. Being findable is the one facet where the incumbent holds its own.

The gap is everything after you find it. NCR Voyix scores 7.9 on operational transparency and 5.3 on access clarity. There is no status page, no pricing, no sign-up path and no change log I can point an agent at. A developer, or an agent acting for one, can see that the APIs exist, and then has to stop and talk to somebody.

[Lightspeed](https://developers.lightspeedhq.com/) is the opposite. Fifty-four OpenAPI descriptions across retail, restaurant, e-commerce and golf. Public [pricing](https://www.lightspeedhq.com/pricing/), a [status page](https://status.lightspeedhq.com/), a sign-up path, support, SDKs, OAuth scopes, an error catalog, an `llms.txt`, an AsyncAPI description for its events, and an MCP server served through its documentation platform. On the agent side it documents idempotency, reversibility and delegated access, and its errors are a stable envelope an agent can branch on. It is gated just short of agent-native.

Neither of them is perfect. Lightspeed scores lower than NCR Voyix on contract governance, because neither publishes much in the way of rules or conformance. But one of them has done the work to let someone, or something, go from finding the API to using it without a meeting, and one hasn't.

## Why this matters now

A restaurant group choosing a point of sale used to do it through a sales cycle, and the API was a line item in the RFP. That is changing. The integrators, the delivery and loyalty platforms, and increasingly the agents doing the research on someone's behalf, start from what they can read. An agent asked to find a POS that can sync menus, pull orders and post payments to an accounting system will find the one whose contract, pricing, limits and status it can read without asking. In that world, the gap between 27.5 and 83.8 is not a score. It's a shortlist.

None of what Lightspeed publishes is exotic. It is a portal, an OpenAPI per product, a pricing page, a status page, a sign-up, and a few machine-readable files that tell an agent the rules. None of it requires giving away the business. It requires deciding that the interface to your business is something you publish rather than something you negotiate.

## Go look for yourself

Both companies have full profiles, with every artifact we found and where we found it:

- NCR Voyix: [APIs.io](https://apis.io/providers/ncr/) · [API Evangelist](https://providers.apievangelist.com/providers/ncr/) · [GitHub](https://github.com/api-evangelist/ncr)
- Lightspeed: [APIs.io](https://apis.io/providers/lightspeed/) · [API Evangelist](https://providers.apievangelist.com/providers/lightspeed/) · [GitHub](https://github.com/api-evangelist/lightspeed)

If you are NCR Voyix, or any incumbent who sees themselves in this, the GitHub repository is open and every gap in the score points at the artifact that would close it. If you think we got something wrong, tell me. And if you are the one telling your team you can't have a public portal, look at who in your market already does.
