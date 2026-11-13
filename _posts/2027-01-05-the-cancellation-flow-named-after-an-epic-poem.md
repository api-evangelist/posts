---
published: false
layout: post
title: 'The Cancellation Flow Named After An Epic Poem'
date: 2027-01-05 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Dark Patterns
  - Subscriptions
  - Amazon
  - FTC
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act two: extract.*

In September 2025 Amazon agreed to pay $2.5 billion to settle the Federal Trade Commission's case over how it signed people up for Prime and how hard it made leaving. That was a $1 billion civil penalty plus $1.5 billion in refunds to around 35 million customers. According to the case, Amazon's own staff called the cancellation process the "Iliad" flow, after Homer's very long poem.

Amazon denies wrongdoing and says customers are clearly told the terms. Consumer advocates criticized the FTC for settling before trial, which meant no court ruling and no case law, and for letting the named executives off.

## Why this is an API story

At first glance this one has nothing to do with APIs. Dark patterns live in the interface: the extra screen, the confusing button, the offer you have to decline three times. That is exactly why I included it.

Signing up for a subscription is usually one call. Cancelling is a journey. The asymmetry is designed. If you can start something in a single request, there is no technical reason ending it should take a multi-page negotiation.

## What the APIs show

On APIs.io, [Amazon](https://apis.io/providers/amazon/) publishes 13 APIs and scores developing. None of them, and almost no consumer subscription business I have looked at, let you manage or cancel your own subscription programmatically.

The FTC's "click to cancel" idea is an interface rule: cancelling should be as easy as signing up. I think there is an API version of that rule worth talking about. A standard, documented way to see and end the subscriptions you hold, one that an agent acting for you could call, would make the Iliad flow pointless.

## Why it matters

As more people let AI agents act on their behalf, the interfaces that were designed to confuse humans will meet software that is not easily confused. Companies will have to choose between giving agents a fair, simple cancel operation or blocking them. Which one they pick will tell you whether the friction was ever an accident.

Sources: [Storyboard18](https://www.storyboard18.com/how-it-works/amazon-to-pay-2-5-billion-to-settle-ftc-case-over-prime-subscription-dark-patterns-82853.htm), [Jurist](https://www.jurist.org/news/2025/09/ftc-settles-amazon-prime-deceptive-practices-suit-for-2-5b/), [Alston & Bird](https://www.alston.com/en/insights/publications/2025/10/ftc-settlement-prime-subscription-practices), [American Economic Liberties Project](https://www.economicliberties.us/press-release/fergusons-ftc-lets-amazon-executives-off-the-hook-after-ripping-off-millions-of-prime-customers-avoids-re-issuing-click-to-cancel-rule).
