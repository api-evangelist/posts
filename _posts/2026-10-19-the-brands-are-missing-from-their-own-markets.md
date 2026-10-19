---
published: true
layout: post
title: 'The Brands Are Missing From Their Own Markets'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-brands-are-missing-from-their-own-markets.png
date: 2026-10-19
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - Integrations
  - Consumer Goods
  - Agriculture
---
One of the stranger results from building out the Market layer of the Kin Score is how often the biggest names in an industry don't show up in its structure at all.

## Consumer goods

We built a consumer goods market from GS1's certified data pool list, GS1 US solution partners, and the SPS Commerce partner network. SPS Commerce moved up to gravity. 1WorldSync, Salsify, Trustwell, and Avery Dennison all moved into standard.

And every big consumer brand in the cohort, Procter & Gamble, Unilever, and the rest, is still undeclared.

That isn't because the registers are wrong. GS1's registers name the data pools and solution vendors that carry product data between brands and retailers. The brands publish through them. In consumer goods, the API belongs to the intermediary, not the brand. If you want to understand who is programmable in that market, you look at the pipes, not the products.

## Agriculture

Agriculture told a similar story. AgGateway's member list, the agrirouter solution finder, and Climate FieldView's connected partners moved John Deere, CNH, AGCO, Granular, and xFarm into standard, and FieldView itself up to gravity.

But the providers at the top of the agriculture cohort by Kin Score, Barchart, DTN, farmOS, and ClimateAI, appear in none of those registers. Neither does any nutrition API. Open Food Facts, Spoonacular, FatSecret, and Nutritionix are the most usable food APIs we profile, and food has no register at all. The equipment makers declare their participation. The data businesses, the ones developers actually integrate with, don't appear anywhere.

## Industrial and robotics

Industrial was the starkest. OPC Foundation and ODVA conformance registers moved Siemens, Rockwell, KUKA, and Universal Robots into standard, with real certified products behind them. The API-first companies in the same cohort, Losant, Cumulocity, Viam, and the AWS IoT services, aren't in any of those registers. Neither are ABB, FANUC, or Yaskawa.

Conformance and APIs are two different worlds in industrial. The hardware vendors prove they speak the protocol. The software vendors publish APIs. Almost nobody does both in a way a machine can read.

## Weather, media, and the rest

It keeps happening:

- **Weather.** No commercial weather API is a WMO WIS2 centre. Not Tomorrow.io, OpenWeatherMap, AccuWeather, or Visual Crossing. The public met services are on the register. The APIs developers use are not.
- **News.** No news API in our cohort is a C2PA applicant. The content credentials work is happening at Adobe, OpenAI, Getty, and Cloudinary.
- **Sports.** Sportradar, Genius Sports, and Stats Perform are the companies everyone integrates with for sports data. Leagues name them as official partners in press releases, never in a list a machine can read.

## Why this matters

The Kin Score rule is that declaration is the provider's responsibility. If a provider doesn't articulate its integrations, partnerships, and participation in a form we can read, it reads "undeclared." That is their problem, not ours.

What this week showed is that the undeclared column isn't random. It clusters in a predictable place: the companies whose value is the data itself, sitting next to the companies whose value is moving it. The market structure is published by the pipes. The brands and the data providers are relying on everyone already knowing who they are.

That works until an agent has to decide who to call, and the only thing it can read is the register.
