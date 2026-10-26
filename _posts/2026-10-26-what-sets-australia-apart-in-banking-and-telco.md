---
published: true
layout: post
title: 'What Sets Australia Apart In Banking And Telco'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-sets-australia-apart-in-banking-and-telco.png
date: 2026-10-26
author: Kin Lane
tags:
  - Australia
  - Banking
  - Telco
  - Consumer Data Right
  - Open Banking
  - Insights
---
Australia is the only country I track that treats data access as a right across the economy, and that one decision explains almost everything that is different about its banks and its telcos.

I have been getting ready for [The API Economy Roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) at apidays Australia in Melbourne this Wednesday, and two of the people at the table, Will Fettke from Telstra and Erik Tveitnes from REA Group, live inside these questions. So I put Australia next to the UK, the EU, the US, Singapore, New Zealand and Canada — first on how each country got its banks and telcos to open up, and then on what the API Evangelist catalog actually holds for the biggest banks and telcos in each.

## Banking: six countries, six ways in

| | How access is driven | Who writes the standard | Can an app act, or only read? |
|---|---|---|---|
| **Australia** | Consumer Data Right — a legislated right, designated sector by sector | Government (the Data Standards Body) | Read. Action initiation has been legislated, but no actions have been designated |
| **UK** | Competition order on the nine largest banks, plus PSD2 | Industry (Open Banking Limited, now handing over to a successor entity) | Act. Commercial variable recurring payments went live in June 2026 |
| **EU** | PSD2 | No single standard — Berlin Group, STET and others | Payments. PSD3 and the PSR have a provisional deal and are still waiting on final adoption; FIDA, the open finance regulation, is stalled |
| **US** | Market-led, with the CFPB's 1033 rule now on hold | Industry (FDX) | Mostly read, through aggregators. A court has blocked enforcement of 1033 while the CFPB reconsiders it, and the first compliance date in April passed with no effect |
| **Singapore** | Voluntary — the 2016 MAS and ABS API Playbook | Guidance, not mandate | Read. SGFinDex shares data with consent through Singpass, the national digital identity |
| **New Zealand** | Customer and Product Data Act 2025 | Moving from industry (the Payments NZ API Centre) to government (MBIE) | Act. The four big banks have been designated for data and payment initiation since December 2025 |
| **Canada** | Consumer-Driven Banking Act, 2026 | Still being set, with the Bank of Canada as regulator | Not yet. Read-access regulations are in draft, payments are targeted for 2027 |

Three things set Australia apart.

**One right, many sectors.** Nobody else runs banking and energy under the same law and the same standard, and Australia keeps adding to it — non-bank lenders started sharing product data this July. Every other country on this list has a banking regime, and then separate regimes for everything else, if it has them at all.

**The government writes the standard.** In the UK, the US and, until recently, New Zealand, the standard came out of an industry body. In Australia, the Data Standards Body writes the Consumer Data Standards and every bank implements the same thing. You can see it in the catalog. All eight Australian banks we profile have their own published contract, and all eight conform to the Consumer Data Standards. No other country's banks line up like that.

**It reads, it does not act.** The UK now has commercial variable recurring payments in production. New Zealand designated payment initiation alongside data from day one. Australia legislated action initiation and has not yet designated a single action. For anyone building agents that are supposed to *do* something for a customer, that is the gap.

## What the catalog shows for the banks

| Country | Banks found | Own contract | Nothing machine-readable | Standards signal |
|---|---:|---:|---:|---|
| Australia | 8 | 8 | 0 | CDR / CDS 8, FAPI 6 |
| UK | 10 | 8 | 2 | UK Open Banking 7, FAPI 7 |
| US | 8 | 6 | 2 | FDX 3 |
| Canada | 7 | 3 | 4 | FAPI 1 |
| EU | 13 | 3 | 10 | none recorded |

Australia is the only complete row. The UK goes deeper — Barclays alone has 112 specs — but HSBC and Monzo show nothing in our profiles. US banks publish plenty, Citi with 289 specs and JPMorgan Chase with 96, but only three show an FDX signal. The EU row is the one I trust least: PSD2 obliges these banks to publish APIs, so ten of thirteen showing nothing says more about how old and thin our EU bank profiles are than about the banks. Deutsche Bank, with 84 specs and a public simulator, is the exception that shows what the others probably have.

## Telco: no mandate, so scams are doing the work

Telco is where the comparison flips.

Australia did designate telecommunications for the Consumer Data Right, back in 2022. No rules or standards were ever made, and the expansion into telco, along with superannuation and insurance, was paused in 2023. So the regime that made Australian banking uniform never reached the telcos.

What is pushing Australian telcos instead is fraud. The Scams Prevention Framework, passed in February 2025, puts banks, telcos and digital platforms under one set of obligations, each with its own regulator. That makes the telco network APIs for SIM swap, device swap and number verification something the banks need, not just something the telcos sell.

Telstra is ahead here. It was first in Australia on GSMA Open Gateway, it is a founding partner in Aduna, the global operator joint venture for network APIs, and in our catalog it publishes 38 specs built on the CAMARA commonalities for SIM swap, device swap and KYC. Optus participates through Singtel's exchange. And the most structured telco APIs in the country sit somewhere no other country has an equivalent: NBN Co, a government-owned wholesale network, behind a developer portal open to retail service providers.

Elsewhere, the operators are moving through Aduna as well. AT&T, T-Mobile and Verizon have offered network APIs through it since February 2025, and added KYC, device swap and call forward detection this month. Canada's carriers come in through EnStream, their joint venture. Singtel is an Aduna partner.

What the catalog says about it is the uncomfortable part:

| Country | Telcos found | Own contract | Nothing machine-readable |
|---|---:|---:|---:|
| Australia | 3 | 2 | 1 |
| UK | 4 | 0 | 4 |
| US | 3 | 2 | 1 |
| Canada | 3 | 1 | 2 |
| EU | 10 | 8 | 2 |

European operators — Telenor, KPN, Orange and Deutsche Telekom — are the most programmable telcos we track, which makes sense given that Open Gateway and CAMARA started there. The UK operators publish nothing we can read, even though two of them are on record as conforming to CAMARA. That is a standard claimed with no contract behind it.

## Agent-ready? Nobody is

Across all seventy banks and telcos in this comparison, there are no agent cards, and no live hosted MCP servers. The only first-party MCP server is one Orange contributed to CAMARA, and it runs locally. Four serve their own llms.txt: Westpac, NAB, Crédit Agricole and UniCredit. Two of the four are Australian.

So Australia is not behind on agents. Nobody is anywhere yet. What Australia has is the most uniform foundation to build them on, in banking at least.

## What I am taking to Melbourne

Australia leads the world on the breadth and uniformity of read access, and trails the UK and New Zealand on letting apps act. Its telcos never got the mandate its banks did, and scams, not open data, are what is pushing them to publish. The two meet in the middle: an agent acting on a customer's behalf is going to need both the bank's data and the telco's fraud signal before it moves any money.

Those are the questions I want to put to the room on Wednesday. If regulation made Australian banking programmable, what makes it actionable? And if scams are what finally open up the telcos, does that land under the Consumer Data Right, under the Scams Prevention Framework, or under a commercial deal like Aduna? [Join us at the roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) if you are in Melbourne.

A note on the catalog numbers. They measure what we have profiled, not the market. The Australian profiles were refreshed this week; most UK, US and Canadian profiles date from July. And Singapore and New Zealand are almost entirely missing — DBS, OCBC, UOB and every New Zealand bank and telco — which I am fixing next.
