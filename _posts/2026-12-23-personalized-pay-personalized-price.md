---
published: false
layout: post
title: 'Personalized Pay, Personalized Price'
date: 2026-12-23 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Gig Economy
  - Surveillance Pricing
  - Algorithmic Pay
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act two: extract.*

This is the story that ties the series together. The same technique is being pointed in two directions at once, at the people who buy and at the people who work, and in both directions it runs on data moving between systems through APIs.

## Pointed at the customer

In January 2025 the Federal Trade Commission released preliminary findings from a study of what it called surveillance pricing. Staff found that retailers often use people's personal information to set tailored prices for goods and services. Examples included raising prices on baby products for new parents. Bloomberg reported that more than 250 companies use tools of this kind.

The caveats matter. The findings were preliminary, the vote to release them split 3 to 2 along party lines, and the FTC did not find that anyone broke the law. Some of the companies said their tools are not built for individual pricing.

## Pointed at the worker

Legal scholar Veena Dubal spent years interviewing ride-hail and delivery workers. In her 2023 paper "On Algorithmic Wage Discrimination," she describes platforms using data about each driver's behavior to set personalized, unpredictable pay. She compares it not to classic discrimination by race or gender but to consumer price discrimination, turned on labor. Uber disputes her findings.

## What the APIs show

[Uber](https://apis.io/providers/uber/) and [Lyft](https://apis.io/providers/lyft/) score developing on APIs.io. [DoorDash](https://apis.io/providers/doordash/) scores exemplar. None of them publish anything that explains how a price or a driver's pay is calculated, and I would not expect them to. That is the point. The inputs flow in through APIs: location, history, device and behavior. The decision comes out as a number with no interface to inspect it.

Meanwhile there is a thriving, well-documented market for the inputs. Data enrichment providers like [People Data Labs](https://apis.io/providers/peopledatalabs/) and [ZoomInfo](https://apis.io/providers/zoominfo/) score exemplar. They sell B2B data, not consumer pricing, but they show how good the industry has become at making data about people easy to call.

## Why it matters

In the first act of this series, platforms repriced whole sectors. Here they reprice the individual. When the price you pay and the wage you earn are both set by a model you cannot see, transparency is not a nice-to-have. An API that explained the decision, even partially, would be the most useful API these companies could publish, and the one they are least likely to.

Sources: [FTC](https://ftc.gov/policy/advocacy-research/tech-at-ftc/2025/01/surveillance-pricing-update-work-ahead), [Bloomberg](https://www.bloomberg.com/news/articles/2025-01-17/ftc-says-retailers-use-consumer-data-for-surveillance-pricing), [Dubal, SSRN](https://papers.ssrn.com/abstract=4331080), [Marketplace](https://www.marketplace.org/2023/04/10/how-ride-hail-companies-use-data-to-pay-drivers-less).
