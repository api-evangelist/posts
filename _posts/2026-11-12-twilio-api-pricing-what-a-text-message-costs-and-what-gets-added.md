---
published: true
layout: post
title: 'Twilio API Pricing: What a Text Message Costs, and What Gets Added'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/twilio-api-pricing-what-a-text-message-costs-and-what-gets-added.png
date: 2026-11-12 16:00:00 +0000
author: Kin Lane
tags:
  - Twilio
  - Pricing
  - Messaging
  - SMS
---
Twilio charges for what you send, not for seats or a subscription. That makes the price of one text message easy to find and the monthly bill harder to predict. The message rate is only one of several charges.

I read Twilio's US SMS pricing and Conversations API pricing pages on November 9, 2026. Every price below comes from them, and the same figures are on Twilio's [APIs.io provider page](https://apis.io/providers/twilio/#pricing). Twilio's own page says its SMS pricing is "current as of October 2026".

## You can start for free

Twilio offers a free trial, with no credit card required, to build and test before paying. After that, everything is pay-as-you-go.

## What a US text message costs

Through the [Messages API](https://apis.io/apis/twilio/twilio-messages-api/), the rate depends on the kind of number you send from and whether it's SMS or MMS:

| Number type | SMS out | SMS in | MMS out | MMS in |
|---|---|---|---|---|
| Long code (10-digit) | $0.0083 | $0.0083 | $0.022 | $0.0165 |
| Toll-free | $0.0083 | $0.0083 | $0.022 | $0.02 |
| Short code | $0.0083 | $0.0083 | $0.022 | $0.0165 |

Twilio charges incoming messages as well as outgoing, at the same SMS rate, so a two-way conversation costs twice what the outgoing side alone suggests.

SMS is billed per segment. A long message, or one with emoji and other special characters, splits into several segments, and each one is charged.

## What gets added to the message rate

The per-message rate is the start of the bill, not all of it:

- **Carrier fees.** US carriers add their own fee per message. Twilio applies it automatically by destination carrier and lists the fees on its pricing page, and they vary by carrier.
- **Your phone number.** A long code is $1.15 a month leased from Twilio, and a toll-free number is $2.15 a month. Bringing your own number is $0.50 a month either way.
- **Failed messages.** A message that fails costs $0.001 to process.
- **Registration.** US business texting requires registering your numbers with the carriers, and that onboarding has its own fees, which the pricing page links to.

So a realistic estimate is: messages × (Twilio rate + carrier fee), plus numbers, plus registration. Twilio's volume discounts lower the message rate as you scale.

## If you're building chat, not just texting

The [Conversations API](https://apis.io/apis/twilio/twilio-conversations-api/) is for ongoing, multi-channel threads, such as a support chat that moves between SMS, WhatsApp and the web. It's priced by active user, not by message:

| Monthly active users | Price per active user |
|---|---|
| Up to 200 | Free |
| 201 to 5,000 | $0.05 |
| 5,001 to 10,000 | $0.0475 |
| 10,001 to 20,000 | $0.045 |
| Above 20,000 | Contact sales |

Media your users share is $0.25 per GB per month. Twilio says standard SMS, MMS and WhatsApp rates still apply on top, so a Conversations bill is the active-user fee plus the message charges for each channel.

## Working out your bill

- **For notifications and alerts:** count your monthly segments, not messages, and add the carrier fee for your audience's carriers.
- **For two-way texting:** count both directions.
- **For a multi-channel chat product:** compare Conversations' per-user pricing against Messages at your expected messages per user. A light user is cheaper on per-message pricing, and a chatty one isn't.
- **For anything with real volume:** talk to Twilio about volume pricing before launch, not after.

## The APIs behind it

Twilio scores 90.3 on the Kin Score, in the Exemplar band, and publishes first-party MCP servers and agent skills alongside its OpenAPI. Besides the Messages and Conversations APIs, the [Messaging Services API](https://apis.io/apis/twilio/twilio-messaging-services-api/) manages pools of sending numbers, and the [Voice API](https://apis.io/apis/twilio/twilio-voice-api/) covers calls. Twilio also publishes its [rate limits](https://apis.io/rate-limits/twilio/twilio-rate-limits/), and the [plans page](https://apis.io/plans/twilio/twilio-plans-pricing/) has everything above.

Prices change. These were read on November 9, 2026, so check [Twilio's SMS pricing](https://www.twilio.com/en-us/sms/pricing/us) before you commit.
