---
published: true
layout: post
title: 'Someone Mapped Who Is Standardizing Agentic Commerce'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/someone-mapped-who-is-standardizing-agentic-commerce.png
date: 2026-10-30
author: Kin Lane
tags:
  - Specifications
  - Standards
  - AI Agents
  - Agentic Commerce
  - Discovery
  - Payments
---
I spend a lot of time trying to keep track of who is working on what across the specifications that matter to APIs, and lately most of the motion is in one place: how an AI agent finds a seller, trusts a product, proves who it is acting for, and pays. W3C, the IETF, GS1, UN/CEFACT, the Linux Foundation, the Agentic AI Foundation, FIDO, EMVCo, Visa, Mastercard, Google, OpenAI, Stripe and Shopify are all working on pieces of it at the same time, at different speeds, under different rules. I can't hold all of it in my head, and I've been trying.

[Francesco Marinoni Moretto](https://www.linkedin.com/in/francesco-moretto/) has done the thing I keep wishing someone would do. The [Agentic Standards Map](https://frmoretto.github.io/agentic-standards-map/) puts all of it on one page: 62 entries covering specifications, drafts, working groups, charters and events. Every statement on it is dated and points to a public source. It makes no predictions and doesn't rank anything. It's licensed CC BY 4.0, it has a DOI, and the whole thing is available as [map.json](https://frmoretto.github.io/agentic-standards-map/map.json).

## We documented every standard on it

I've added every specification on the map to the [API Evangelist standards catalog](https://standards.apievangelist.com/). We already had eleven of them, including [A2A](https://standards.apievangelist.com/store/agent2agent/), [MCP](https://standards.apievangelist.com/store/model-context-protocol/), the [AI Catalog](https://standards.apievangelist.com/store/ai-catalog/), [x402](https://standards.apievangelist.com/store/x402/), [Verifiable Intent](https://standards.apievangelist.com/store/verifiable-intent/) and the [EMV Agentic Payments Framework](https://standards.apievangelist.com/store/emv-agentic-payments-framework/). There are twenty-eight new entries:

- **Commerce protocols:** [UCP](https://standards.apievangelist.com/store/universal-commerce-protocol/), [ACP](https://standards.apievangelist.com/store/agentic-commerce-protocol/), [AP2](https://standards.apievangelist.com/store/agent-payments-protocol/), [PACT](https://standards.apievangelist.com/store/pact/) and the [Agent Network Protocol](https://standards.apievangelist.com/store/agent-network-protocol/).
- **Agent identity and payment:** [Visa's Trusted Agent Protocol](https://standards.apievangelist.com/store/visa-trusted-agent-protocol/), [Mastercard Agent Pay](https://standards.apievangelist.com/store/mastercard-agent-pay/), [KYAPay](https://standards.apievangelist.com/store/kyapay/), [Web Bot Auth](https://standards.apievangelist.com/store/web-bot-auth/), the [Payment HTTP Authentication Scheme](https://standards.apievangelist.com/store/payment-http-authentication-scheme/), [OpenID AuthZEN](https://standards.apievangelist.com/store/authzen/), the [FIDO Alliance's agentic work](https://standards.apievangelist.com/store/fido-agentic-authentication/) and the [EMILIA Protocol](https://standards.apievangelist.com/store/emilia-protocol/).
- **Discovery:** [MCP Server Cards](https://standards.apievangelist.com/store/mcp-server-cards/), [WebMCP](https://standards.apievangelist.com/store/webmcp/), [DNS-AID](https://standards.apievangelist.com/store/dns-aid/) and [IEEE P3931](https://standards.apievangelist.com/store/ieee-p3931/).
- **Product identity:** [GS1 Digital Link](https://standards.apievangelist.com/store/gs1-digital-link/), the [GS1-Conformant Resolver](https://standards.apievangelist.com/store/gs1-conformant-resolver/), the [EU Digital Product Passport standards](https://standards.apievangelist.com/store/digital-product-passport-standards/), [W3C DID Resolution](https://standards.apievangelist.com/store/did-resolution/), the [UN Transparency Protocol](https://standards.apievangelist.com/store/untp/) and the [UN Global Trust Register](https://standards.apievangelist.com/store/un-global-trust-register/).
- **Everything around it:** [AI Preferences](https://standards.apievangelist.com/store/aipref/), [vCon](https://standards.apievangelist.com/store/vcon/), [ODRL](https://standards.apievangelist.com/store/odrl/), the [Accord Project](https://standards.apievangelist.com/store/accord-project/) and IAB Tech Lab's [AAMP](https://standards.apievangelist.com/store/iab-tech-lab-aamp/).

Each entry quotes the map's own dated status and links to its sources, with credit. The working groups, draft charters and events that aren't specifications in their own right, like IETF DAWN, the W3C Agentic Web charter and TPAC, are on a new page that mirrors the whole map, venue by venue: **[The Agentic Standards Map](https://standards.apievangelist.com/agentic-standards-map/)**.

## Seams, not layers

The idea on the map I like most is the **seam**. It's a question every venue is answering separately, where the answers will eventually have to meet. There are four:

1. **Discovery.** The map counts at least eight ways an agent might find what a domain offers:
   - `/.well-known/ucp`;
   - A2A's `agent-card.json`;
   - schema.org;
   - ARD;
   - the AI Catalog;
   - MCP Server Cards;
   - DNS-AID;
   - the Personal Agent Protocol's `poppy.json`.

   Only two of those paths are in the IANA well-known registry. One of them, `ucp`, was provisionally registered on October 26th, filed by Ilya Grigorik for UCP's Governance Council. Francesco is the one who told me. My October 13th list still called it unregistered, so I checked IANA and updated our [Well-Known URIs page](https://standards.apievangelist.com/well-known/) to match. Who is actually publishing a profile at that path is still an open question, and a [group of independent researchers is measuring it](https://github.com/Universal-Commerce-Protocol/ucp/discussions/867). This is the same ground I wrote about in [two front doors for agents in one week](https://apievangelist.com/2026/10/12/two-front-doors-for-agents-in-one-week/). It's also why I asked IANA to register [`/.well-known/apis.json`](https://github.com/protocol-registries/well-known-uris/issues/109).
2. **Product and seller identity.** GS1 Digital Link gives a ratified route to a product identifier. The DID route cited for Digital Product Passports depends on a feature the DID Resolution draft marks *at risk*.
3. **Agent identity and delegation.** Visa TAP, Mastercard Agent Pay, UCP and x402 all build on HTTP Message Signatures (RFC 9421) or Web Bot Auth. According to the map, ACP's texts don't mention it.
4. **Signed terms, authorization and receipts.** What each protocol defines differs between the checkout and what happens after it. AP2 chains a merchant-signed checkout, the user's mandate and a checkout receipt. The map couldn't find refunds or cancellation anywhere in AP2's documents. UCP signs its order webhooks and ACP uses HMAC, but those are signatures on a delivery, not on the terms.

That fourth seam is where API people should pay attention. Checkout is the part everyone demos. Refunds, cancellations, returns and a durable record the customer can keep are the parts that become support tickets, and right now they're the least specified.

## Why this matters for APIs

Almost everything on this map is an API underneath. It's a checkout session, a webhook, a resolver, a token exchange or a well-known file. The agent work isn't replacing the API layer. It's standardizing the conversations on top of it, and every one of those standards will need to be described, governed and discovered like any other API. That's the work I do, so having one place that tells me who is moving and what they've committed to next saves me hours every week.

It also complements what I do with [The Specification Layer](https://standards.apievangelist.com/specification-layer/), which reads the Linux Foundation's specification repositories every Monday. Francesco's map goes wider, across W3C, IETF, GS1 and UN/CEFACT and the card networks, and narrower, on commerce. I'm already using it to fill gaps in my own crawl, which checks how programmatic about 35,000 companies are, from the Fortune 100 across the secondary market. I'll be reading it weekly. It's updated on Mondays, and corrections go in as issues on [its repository](https://github.com/frmoretto/agentic-standards-map). If you work in this space, it's worth bookmarking, and worth correcting when you know something it doesn't.
