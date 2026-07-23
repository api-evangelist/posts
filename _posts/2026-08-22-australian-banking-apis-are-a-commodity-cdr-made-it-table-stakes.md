---
published: true
layout: post
title: In Australian Banking, the API Is a Commodity — CDR Made It Table Stakes
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/australian-banking-apis-are-a-commodity-cdr-made-it-table-stakes.png
date: 2026-08-22
author: Kin Lane
tags:
  - Banking
  - Australia
  - CDR
  - Open Banking
  - Regulation
  - Commodity
  - Discovery
---

I spent a decade skeptical of governments dictating APIs. My position was simple and, I thought, principled: companies should do APIs because they make sense, not because a regulator forces them to. I watched the voluntary version of open banking fail for that entire decade — Capital One's DevExchange was the lone US exception that proved the rule — and I watched the *mandated* version work. PSD2 in Europe, Open Banking in the UK, and in Australia, the Consumer Data Right. I changed my mind in public, and I'll say plainly what changed it: incumbents do not open on their own. The mandate is the only force that has ever actually worked.

I just read the whole Australian banking sector the way an integrator or an agent would — not the marketing site, the machine-readable evidence — and wrote it up as a full sector report: [The State of Australian Banking APIs](https://papers.apievangelist.com/papers/state-of-australian-banking-apis/). Fifty banks, scored on the same Kin Score rubric I apply to Stripe. The single fact that frames everything else is this: **these are not fifty APIs. They are one API deployed fifty times.**

## One regulator's contract, fifty base paths

Under the Consumer Data Right, the Data Standards Body publishes a single OpenAPI contract — the Consumer Data Standards *Banking API, v1.36.0* — and every accredited data holder re-hosts that identical contract under its own host. I confirmed it the boring way, by reading the specs. NAB's own provenance notes say the surface is "NOT NAB-proprietary… shared CDS Banking API v1.36.0," and Suncorp, Teachers Mutual, Newcastle Permanent, IMB, Macquarie, and ANZ all carry the same near-identical note. The Big Four plus Macquarie dominate the balance sheets, but at the API layer they are indistinguishable from a two-person mutual — because the API is literally the same file.

There are only two doors into a CDR bank, and both are the same on every bank:

- **Product Reference Data (PRD)** — `GET /banking/products` and `GET /banking/products/{id}`. Public, unauthenticated, a version header and nothing more. Anyone can call it, and I confirmed it live and reachable on nearly every bank in the cohort.
- **Consumer data sharing** — everything else, gated behind OAuth2/OIDC with FAPI over mTLS, consent-scoped, and reachable only by CDR-accredited data recipients.

Behind those doors, the resources are uniform and read-only across all fifty: products, accounts, balances, transactions, direct-debits, scheduled-payments, payees, customer. Every one is a `GET`. There is no `POST /payments`, no write, no action endpoint in the baseline. **Australian CDR is a data-sharing regime, not a payment-initiation regime** — unlike the UK and EU, where payment initiation gives the ecosystem something to *do*, not just something to *read*. An agent can read your Australian bank; it cannot act on it.

## Commodity is the point — and the trap

Let me be honest about the trade, because mandated interoperability delivered real public goods the market would not have produced on its own. A consumer can move their banking data. A fintech can build on a predictable contract. The insecure screen-scraping era — where aggregators logged in as you with your own credentials — is over. Those are genuine wins, and I'm done pretending otherwise.

But the mandate creates *existence*, not *quality*. The UK figured this out and paired its spec with conformance testing and an implementation entity, and got working APIs. Where a regime mandates the contract but not the experience, you get what I've long called malicious compliance: "we're CDR-compliant, but you can't sign up, can't find the docs, and can't do anything you actually wanted to do." Australia is closer to that second case than the first.

So the contract is a commodity. It is table stakes. Publishing it earns a bank exactly nothing competitively, because the bank two hosts over publishes the byte-identical thing. Value in this sector does not accrue at the API resource — the resource is a legal commodity that must be given away. **It accrues, if it accrues anywhere, in the developer experience, the product surface, and the trust posture built *around* the mandated contract.**

## The frontier is two companies wide

Out of fifty banks, exactly two ship anything beyond the mandated baseline. Up — a brand of Bendigo & Adelaide Bank — authored its own developer API with resources that *do not exist in CDR*: attachments, categories, tags, webhooks, a real AsyncAPI event contract, published rate limits, and a self-serve personal-access token. It treats its API as a product a developer would choose, not a filing a regulator demanded. Commonwealth Bank, partially, dresses the CDR endpoints as its own developer product with first-party portal renderings and a business-banking variant. Everyone else — forty-eight banks, including three of the four majors and Macquarie — ships the verbatim Data Standards Body file and adds nothing.

When I say the differentiation is two companies wide, I mean it literally. And that is either a thin market or a wide-open one, depending on whether you think agentic finance is coming. I think it is.

If you run one of these banks, the liberating news is that the moves that would lift you above the entire field are small, cheap, and almost entirely unclaimed — publish request/response examples (nobody has), publish your rate limits (two banks have), ship an event surface, write your own changelog. If you invest in the space, the commodity contract is your diligence shortcut: the mandated API tells you nothing, so the optional artifacts around it tell you everything.

I laid out the full anatomy — the resource taxonomy, the provider-by-provider read on the Big Four and the leaders, and the investable thesis — in the sector report: **[The State of Australian Banking APIs](https://papers.apievangelist.com/papers/state-of-australian-banking-apis/)**. Every score in it is live and reproducible against the open catalog at [APIs.io](https://apis.io). Compliance produced existence, not quality. The gap between those two things is the market.
