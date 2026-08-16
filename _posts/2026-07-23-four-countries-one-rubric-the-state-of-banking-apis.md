---
published: true
layout: post
title: 'Four Countries, One Rubric: The State of Banking APIs in Australia, the UK, the US, and Canada'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/four-countries-one-rubric-the-state-of-banking-apis.png
date: 2026-07-23
author: Kin Lane
tags:
  - Banking
  - Open Banking
  - Financial Services
  - APIs
  - Governance
  - Agents
  - Sector Reports
---

I have spent the last stretch scoring banks the way an agent would read them — not the marketing site, the machine-readable evidence: the OpenAPI, the scopes, the security posture, the discovery surface. I did it one market at a time, and it turned into four [API Evangelist Sector Reports](https://papers.apievangelist.com): [Australia](https://reports.apievangelist.com/reports/state-of-australian-banking-apis/), the [United Kingdom](https://reports.apievangelist.com/reports/state-of-uk-banking-apis/), the [United States](https://reports.apievangelist.com/reports/state-of-us-banking-apis/), and [Canada](https://reports.apievangelist.com/reports/state-of-canadian-banking-apis/). Two hundred and sixty-odd institutions, every one scored on the same [Kin Score](https://apis.io) I apply to Stripe and to every other API in my catalog, published openly. You can browse the rankings for each on the providers site — [Australian banks](https://providers.apievangelist.com/australian-banks/), [UK banks](https://providers.apievangelist.com/uk-banks/), [US banks](https://providers.apievangelist.com/us-banks/), and [Canadian banks](https://providers.apievangelist.com/canadian-banks/) — and the paid reports are the anatomy behind the numbers.

What I did not expect is that the interesting story is not in any one country. It is in what you see when you lay all four next to each other, because the same rubric produces four completely different shapes, and the differences are not about how good the banks are. They are about two forces: whether a regulator forced the banks to open, and whether a competitive market gave them a reason to. Everything else follows from those two questions.

## The two forces, and the four shapes

Here is the frame I backed into after the fourth report. Open banking is decided by **mandate** and by **competition**, and the four markets happen to fill out the grid.

- **The UK and Australia mandated it.** Regulators wrote a standard and made the banks publish it. Both markets top out in my "Developing" band and go no further — the UK's best is NatWest at 59.2, Australia's is around 56. Nobody reaches "Strong," let alone "Exemplar." The mandate got an entire sector across the machine-readability line and stopped there.
- **The US left it voluntary in a fiercely competitive market.** The result is the widest spread in my whole catalog — genuine "Exemplar" APIs at the top (Plaid at 74.8, Unit at 72.7) and a long "Minimal" tail at the bottom, with sixty-four of a hundred and thirteen institutions scoring flat-zero on agent-readiness.
- **Canada left it voluntary in a concentrated one.** Six banks hold roughly 90% of the market and no rule yet forces them open, and the result is the emptiest banking market I have measured — an average composite of 20.1, and only four of forty-two institutions publishing any machine-readable contract at all.

Four markets, one rubric, four shapes: a ceiling (UK/Australia), a chasm (US), and a near-flatline (Canada). Now the parts that repeat across all of them, because those are the real findings.

## Finding one: the mandate produces existence, not quality

I spent a decade insisting banks should open because it made business sense, not because a government forced them. I was wrong, and I have said so in public more than once — incumbents are notoriously closed, and the mandate is the only force that has ever reliably moved them. But scoring the mandated markets sharpened the point into something more uncomfortable: the mandate produces *existence*, and it never produces *quality*.

Australia is the cleanest specimen. Its Consumer Data Right publishes one standard contract and every bank re-hosts the identical file, so these are not fifty APIs — they are one API deployed fifty times, and governance scores 0.0 across all fifty, because a bank cannot govern a contract the regulator wrote and versions for it. The UK did the mandate better than anyone — it paired the spec with conformance testing, an implementation entity, and real payment-initiation write surfaces, so a UK agent can *act* on your account and not just read it (idempotency coverage hits 87% in the UK versus 0% in read-only Australia). And the UK *still* tops out at 59.2. The best-executed mandate on earth gets you a conformant, consent-scoped, machine-readable API — and not a good product. The facets that separate "Developing" from exemplary are the ones a legal obligation never touches: your own governance, your operational transparency, your product surface. Compliance buys the pipes. It does not staff the building.

## Finding two: the value never sits with the chartered bank

This is the finding that survived all four reports intact, and it is the one investors should sit with. **In every market I scored, the API value accrues to the infrastructure, not to the bank.**

In the mandated markets, the mandated contract is a legal commodity the bank must give away, so it earns nothing competitively — the differentiation is whatever thin product surface a bank builds *around* the contract, and it is almost entirely unclaimed. In the US, the six highest scores in "banking" are not banks at all; they are aggregators and banking-as-a-service platforms — Plaid, Unit, Highnote, Dwolla, MX, Cash App — and of forty large chartered banks, exactly two publish genuinely downloadable specs. In Canada it is starker still: the three top scores are the payment rails and processors (Moneris, Payments Canada, then Scotiabank), and the Big Six sit at the *bottom* of the table. My favorite single data point in all four reports is that National Bank of Canada scores 14.9 on its own API while **owning Flinks**, the aggregator through which much of Canada's open banking actually flows. The incumbent bought the rail rather than build a surface — which tells you exactly where it thinks the value is.

The durable money in financial APIs was never the balance check or the payment call. It is the products built on the velocity the API layer creates, and that value lands on the layer that monetizes everyone else's activity. Across four countries, that layer is never the deposit-holding bank.

## Finding three: nobody is ready for the agent

The reason I score any of this is that the reader is changing species, and here the four markets agree completely. **You cannot evangelize a machine.** An agent will never read your blog, sit in your webinar, or feel anything about your brand; it evaluates you only on what it can parse — and on that axis, every one of these markets is failing in the same specific ways.

Request/response examples — the single cheapest agent-readiness win on the board — sit at **0% in all four markets**. A machine-readable consent surface, in sectors whose entire regulatory premise is consented data sharing, is in the single digits everywhere. And a genuinely hosted agent surface — an MCP server the provider actually operates — exists at exactly one institution across all two hundred and sixty (Cash App, in the US); every other agent artifact in my data is a derivation I generated from whatever contract existed. The mandated markets are accidentally more agent-legible than the voluntary ones, but only because uniformity is what tooling likes, not because any bank set out to serve an agent. The whole industry published for humans and is about to be read by machines, and the gap between those two things is the story of the next five years.

## What it means, depending on who you are

**If you run a bank or a credit union:** the bar is on the floor, and that is a gift with a clock on it. In three of these four markets, publishing one real downloadable OpenAPI with examples, a rate limit, a `security.txt`, and a consent surface would vault you over most of the field — because most of the field has done none of it. In the mandated markets the contract is a commodity, so your entire opportunity is the product work *around* it. Either way, the moves are cheap, unclaimed, and increasingly urgent as your next customer becomes an agent.

**If you invest or acquire:** the score inverts the balance sheet. The most valuable API assets in banking are the rails and the aggregators, not the chartered banks — and where a mandate is coming (Canada's consumer-driven banking framework, the US's contested 1033 rule), the pending question of whether the regulator forces those rails open is the question that decides who captures the market.

**If you write the rules:** the UK is your model, and the lesson is that a mandate has to reach past existence to usefulness. A contract without conformance testing and an implementation entity produces malicious compliance — "we're compliant, but you can't find the docs, can't onboard, and can't do anything you actually wanted." Australia mandated the contract and skipped the experience; Canada has legislated a framework and not turned it on. The UK mandated the whole thing, and it is the only market where the mandate produced APIs a competent team could actually build against.

The four reports are the detail — the resource taxonomies, the facet-by-facet scores, the provider-by-provider intelligence, and the investable thesis for each market. But the thing worth carrying out of all four is simple: a mandate gets you existence, competition gets you quality, and the absence of both gets you nothing. The banks that understand which of those forces is coming for their market — and start publishing before it arrives — will be the only ones an agent can use. Today, in four countries, that bank mostly does not exist yet.

*The four Sector Reports are available at [papers.apievangelist.com](https://papers.apievangelist.com), and the full rankings are open on [providers.apievangelist.com](https://providers.apievangelist.com). The Kin Score rubric is published openly at [APIs.io](https://apis.io) and on [GitHub](https://github.com/api-evangelist/kin-score).*
