---
published: false
layout: post
title: 'Both Sides Of The Auction'
date: 2026-12-21 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Advertising
  - Ad Tech
  - Google
  - Antitrust
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act two: extract.*

Most of the stories in this series rest on settlements, forecasts or allegations. This one rests on a court ruling. In April 2025, Judge Leonie Brinkema found that Google violated Section 2 of the Sherman Act by monopolizing two markets: the ad server that publishers use to sell their space, and the ad exchange where that space is auctioned. She also found Google unlawfully tied the two together, so a publisher who used a rival ad server would lose access to the core of Google's exchange.

That is the extraction pattern in its plainest form. Google ran the tool the seller used, the marketplace where the sale happened, and a big share of the buying. It could take a cut on both sides of every auction, and the publisher could not easily leave.

## The remedy is an API

What I find interesting is what the court did about it. It did not order a breakup. The judge called divestiture "neither realistic nor needed." Instead Google has to make its products interoperable with competing technology, share more auction data with publishers, and accept a compliance monitor. Google is appealing the part it lost.

Interoperability and data sharing are API remedies. The court's answer to a lock-in problem was to require the locked system to open up its interfaces. That is exactly the argument I have been making for years about why APIs matter, showing up in an antitrust order.

## What the APIs show

On APIs.io, [Google Ad Manager](https://apis.io/providers/google-ad-manager/) publishes 5 APIs and scores thin. The business a federal court found to be a monopoly has one of the weakest public API footprints in its own market. By comparison, [The Trade Desk](https://apis.io/providers/trade-desk/), which works the buy side, publishes 11 APIs and scores strong.

A thin public surface is not proof of anything on its own. But when the court's fix is "open up," the starting point tells you how far there is to go.

## Why it matters

Publishers' damages claims are still alive, and the appeal is not settled. I will keep an eye on whether the interoperability the court ordered actually shows up as documented, usable interfaces, or as something only a monitor ever sees.

Sources: [Axios](https://www.axios.com/2025/04/17/google-ad-tech-monopoly-antitrust-ruling), [The Register](https://www.theregister.com/2025/04/17/judge_rules_google_publisher_ad/), [TechSpot](https://www.techspot.com/news/113882-judge-ruled-google-broke-antitrust-law-keep-entire.html), [PPC Land](https://ppc.land/court-rules-google-monopolized-digital-ad-tech-markets/), [Search Engine Land](https://searchengineland.com/topic/adx/).
