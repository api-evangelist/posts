---
published: true
layout: post
title: 'Regulation Writes The API'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/regulation-writes-the-api.png
date: 2026-10-27
author: Kin Lane
tags:
  - Australia
  - Consumer Data Right
  - Open Banking
  - Regulation
  - Energy
  - Insights
---
Outside of tech, Australia's API contracts were written by the regulator.

Yesterday I ranked [the most programmable sectors in Australia](/2026/10/26/the-most-programmable-sectors-in-australia/) using 227 of the country's largest companies. Tech came out on top because it sells its API. Banking and energy landed in the middle of the table, and when I opened up the contracts behind that ranking, the reason was the same almost every time: the Consumer Data Right.

## 31 companies, one source of contracts

31 of the 227 companies carry a Consumer Data Right signal in their profile — 22 in banking and finance, 8 in energy and utilities, and one elsewhere. And when you look at the contracts the banks and energy retailers publish themselves, nearly every one of them is a Consumer Data Standards contract.

| Company | What it publishes |
|---|---|
| AMP | One contract: CDS banking product data |
| ANZ | CDS banking product data |
| Westpac | CDS banking |
| Commonwealth Bank | CDR accounts, balances, customer and related CDS APIs |
| NAB | CDS banking product data, plus a gateway payments API |
| EnergyAustralia | CDS energy and CDS common |
| Red Energy | CDS energy and CDS common |
| AGL | CDS energy and CDS common |
| Origin | CDS energy and CDS common, plus its Kraken platform APIs |

AMP is the cleanest example. Its only published contract is its CDR product data. EnergyAustralia, Red Energy and AGL publish the energy standard and the common endpoints that go with it, and that is the whole of their public machine-readable surface. NAB and Origin are the exceptions that prove the rule — they publish one or two things beyond the standard, and that is where the list ends.

## Why that is a good thing

This is not a complaint. The Consumer Data Right did something the market never did on its own: it made every bank, and now every energy retailer, publish a contract in the same shape. The same paths, the same schemas, the same security profile, across competitors. That is exactly what an agent needs. An agent that knows how to read one bank's product data knows how to read all of them.

It is also the clearest evidence I have seen that standards plus a mandate produce programmable markets faster than anything else. The banks did not each design a products API. They implemented one. The energy retailers did not each decide to open up tariff data. They were required to, in a standard everyone shares.

## Why it is also a ceiling

The same table shows the limit. When the regulator writes the API, the API stops where the regulation stops.

- **Product data, not products.** Most of these contracts are the public product reference data — what a bank offers, what a tariff costs. The consumer data behind consent sits behind accreditation, which is the point, but it means the open, discoverable surface is narrow.
- **Nothing beyond the mandate.** Outside of NAB's payments gateway and Origin's Kraken APIs, the banks and retailers in this cohort publish nothing else. No pricing for developer access, no sandbox for a partner to try something new, no MCP server, no agent card. The CDR contract is the API program.
- **Action initiation is still waiting.** The law to let accredited apps act on a customer's behalf, such as making a payment, passed in 2024. As far as I can find, no specific actions have been designated yet. Until they are, the CDR is a read surface. Agents want to act.

## Where the regulation goes, the APIs follow

The best predictor of which Australian sectors become programmable next is not technology. It is where the Consumer Data Right goes next. It reached non-bank lenders this year, with product data sharing from July and consumer data sharing due in November. Superannuation is outside it, and the six largest super funds publish nothing an agent can use. Telco was assessed and not designated. Mining has no equivalent regime, and 41 miners publish one Swagger file between them.

That gives the room at [The API Economy Roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) at apidays Australia tomorrow two questions — regulation, privacy and digital identity are one of the conversations on the agenda. For the regulated sectors: what would it take to publish beyond the mandate, so the CDR becomes the floor of the API program instead of the whole of it? And for everyone else: does Australia have to wait for a regulator to write each sector's API, or can the market start doing it on its own?

The banking and energy profiles, contracts included, are on [APIs.io](https://apis.io) after this week's build. If you are in Melbourne on Wednesday, October 28th, [come join the roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) and bring your own answer.
