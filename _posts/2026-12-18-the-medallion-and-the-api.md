---
published: false
layout: post
title: 'The Medallion And The API'
date: 2026-12-18 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Ride Hailing
  - Uber
  - Lyft
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act one: reprice.*

A New York City taxi medallion was a permission slip. It was the legal right to pick up a passenger who raised a hand on the street, and because the city capped how many existed, it was treated like real estate. Around 2014 medallions were selling for roughly $1.05 million. By 2017 one sold for about $241,000, a drop of 77 percent, according to figures Crain's reported. Transfers since have gone for under $200,000.

What replaced the permission was a request. A phone sends a pickup location to a server, the server finds a driver, prices the trip, and settles the payment. Morgan Stanley estimated that yellow cabs' share of trips in New York fell from 84 percent to 65 percent between 2015 and 2016 alone. A Montana State thesis put total losses to the taxi industry at $9.6 billion in New York and $387 million in Philadelphia.

I want to be fair about the number. R Street has argued that the 2014 peak was partly a bubble, with fleet owners borrowing against medallions they already held to buy more. That is true, and it matters. It also does not change who was holding the debt when the price fell. A lot of those owners were individual immigrant drivers who had financed a medallion as their retirement.

## What the APIs show

On APIs.io, [Uber](https://apis.io/providers/uber/) publishes 20 APIs and scores developing. [Lyft](https://apis.io/providers/lyft/) publishes 8 and also scores developing. The companies that dismantled a regulated market with a software interface do not have a particularly strong developer story of their own. What they publish is mostly for partners, business travel and delivery, not a window into how a trip is priced or how a driver is paid.

That is the part I want people to notice. The value moved from a scarce public permission to a private pricing algorithm. The medallion was at least visible. You could look up how many existed and what they sold for. The algorithm that now decides the fare and the driver's cut is not exposed through any API I can find.

## Why it matters

The ride request API is a genuinely good piece of engineering, and it made getting a ride better for a lot of people. But the economics did not disappear, they moved. Some of the value went to riders, some to the platform, and a lot of it came out of the people who owned the old asset. Later in this series I will come back to the drivers who replaced them, first when the platform began setting their pay individually and then when the platform started testing cars with no driver at all.

Sources: [Business Insider / Crain's](https://www.businessinsider.in/new-numbers-show-just-how-much-new-yorks-taxi-cab-owners-have-lost-thanks-to-the-ascendance-of-uber-and-lyft/articleshow/58156278.cms), [Business Insider / Morgan Stanley](https://www.businessinsider.nl/uber-reaches-tipping-point-new-york-city-hurts-taxi-business-2017-10/), [Montana State University](https://scholarworks.montana.edu/items/046a7dc7-be15-4a41-a314-8254716f0cb9), [R Street](https://www.rstreet.org/commentary/reports-of-the-taxi-industrys-death-have-been-greatly-exaggerated/).
