---
published: true
layout: post
title: 'Take Payments, Track Inventory And Run Loyalty Rewards With Square'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/take-payments-track-inventory-and-run-loyalty-rewards-with-square.png
date: 2026-11-07 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Square
  - Card Transaction Processing Management
  - Inventory Management
  - Loyalty & Retention Management
  - Item Master Data Management
  - Payments
  - Retail
---

You run a shop, a cafe or a salon on Square. The register works, the money shows up in the bank, and then the questions start. Can the web store and the counter share one product list? Can the stock count update itself when something sells? Can a regular get their loyalty points without a punch card? Can a chargeback be answered without logging into yet another dashboard? Each of those is something [Square](https://apis.io/providers/square/) can do through an API, a way for one piece of software to ask another to do work, so your website, your accounting tool or an AI assistant can do it for you.

## What Square does

[Square](https://www.squareup.com/) describes itself as providing APIs for payment processing, point of sale, and business management solutions that let developers build custom commerce applications. What that means for a business owner is that every part of the Square account you already use has a corresponding set of calls. On APIs.io we list them by area, including the [Catalog API](https://apis.io/apis/square/square-catalog-api/), the [Customers API](https://apis.io/apis/square/square-customers-api/), the [Bookings API](https://apis.io/apis/square/square-bookings-api/), the [Checkout API](https://apis.io/apis/square/square-checkout-api/), the [Disputes API](https://apis.io/apis/square/square-disputes-api/), the [Devices API](https://apis.io/apis/square/square-devices-api/) for the terminals on the counter, the [Transfer Orders API](https://apis.io/apis/square/transfer-orders-api/) for moving stock between locations, and a [Reporting API](https://apis.io/apis/square/reporting-api/) in beta for building your own reports.

## What you can get done

We map Square's operations to 19 business capabilities. These are the five a small business reaches for first.

### [Card Transaction Processing Management](https://apis.io/capabilities/card-transaction-processing-management/)

Taking the payment and defending it afterwards. A chargeback is when a cardholder disputes a charge with their bank, and these 16 operations let you both charge cards and answer disputes with evidence.

- `POST /v2/payments` charges a card or gift card from your own app, or records a cash or external payment taken outside Square.
- `GET /v2/payments` lists payments in a date range, with filters such as card brand or the last four digits.
- `GET /v2/disputes` lists the chargebacks currently open against your account.
- `POST /v2/disputes/{dispute_id}/evidence-files` attaches a receipt image or other file to fight a chargeback.
- `POST /v2/disputes/{dispute_id}/evidence-text` adds a written explanation or a tracking number as evidence.
- `POST /v2/disputes/{dispute_id}/accept` concedes a dispute instead of fighting it.

### [Payments & Card Management](https://apis.io/capabilities/payments-card-management/)

Where the money went. A payout is Square sending your settled funds to your bank account, and these 22 operations also cover the older transaction records and the actions you can push to a Square Terminal.

- `GET /v2/payouts` lists the payouts to your bank account, filtered by status or date.
- `GET /v2/payouts/{payout_id}/payout-entries` breaks one payout down into the charges, refunds and fees that make it up.
- `GET /v2/locations/{location_id}/transactions` lists sales and refund transactions for one location.
- `POST /v2/terminals/actions` sends an action, such as a device pairing check, to a Square Terminal.

### [Item Master Data Management](https://apis.io/capabilities/item-master-data-management/)

Your catalog is the single list of what you sell, with variations, prices and photos. These 14 operations keep it current in bulk, which is how a web store and a counter stay in step.

- `POST /v2/catalog/batch-upsert` creates or updates many catalog items at once, which is how you import a whole product list.
- `POST /v2/catalog/batch-retrieve` fetches many items by their IDs in one call, optionally with related objects such as taxes.
- `POST /v2/catalog/batch-delete` removes a batch of items and their variations.
- `POST /v2/catalog/images` uploads a product photo and attaches it to an item.
- `GET /v2/catalog/info` tells you the batch size limits before you start.

### [Inventory Management](https://apis.io/capabilities/inventory-management/)

Stock levels and the history of how they changed. These 13 operations record recounts, sales and waste, and read the adjustments back.

- `POST /v2/inventory/changes/batch-create` records a stock recount or adjustment for many items at once.
- `GET /v2/inventory/adjustments/{adjustment_id}` shows one adjustment, what it changed and when.

### [Loyalty & Retention Management](https://apis.io/capabilities/loyalty-retention-management/)

The punch card, without the card. These 18 operations enroll buyers, award and correct points, and keep the ledger of what was earned and redeemed.

- `POST /v2/loyalty/accounts` enrolls a customer in your loyalty program, typically by phone number.
- `POST /v2/loyalty/accounts/search` finds a loyalty member by phone number or customer ID.
- `POST /v2/loyalty/accounts/{account_id}/accumulate` awards the points earned on an order.
- `POST /v2/loyalty/accounts/{account_id}/adjust` manually corrects a point balance.
- `POST /v2/loyalty/events/search` searches the history of points earned and redeemed.

Square also covers your people. The [Human Capital Management](https://apis.io/capabilities/human-capital-management/) capability adds team members and job titles, and [HR Operations Management](https://apis.io/capabilities/hr-operations-management/) handles break types, shifts and wages. Your customer list lives under [Customer Data Management](https://apis.io/capabilities/customer-data-management/), with bulk create, update and delete for cleaning up duplicates.

## Ask for it in plain language

We have written 42 conversational phrasing overlays for Square. An overlay is a layer we add on top of the API description that pairs each operation with the kinds of questions a person might ask, so an AI assistant knows which call answers which question. These are the kinds of things it maps:

- When did Square send money to my bank account?
- Which chargebacks are currently open against my account?
- How do I attach a receipt image to fight a chargeback?
- How do I import thousands of products into my Square catalog at once?
- How do I sign a customer up for my Square loyalty program using their phone number?
- How do I bulk add customers from a spreadsheet?

You can see one of them on the [Bank Accounts API phrasing overlay](https://apis.io/overlays/square/square-bank-accounts-api-phrasing-overlay/).

## Getting started

Square is a freemium, hosted service with self-serve signup: you call Square's endpoint, and a developer account comes with the seller account you already have. Square's documentation for the [Reporting API](https://developer.squareup.com/docs/reporting-api) is a good place to see how Square explains itself, and from there the same developer site covers every API named above. On APIs.io you can browse the [Square profile](https://apis.io/providers/square/), the [Catalog API](https://apis.io/apis/square/square-catalog-api/), the [Customers API](https://apis.io/apis/square/square-customers-api/) and the [Disputes API](https://apis.io/apis/square/square-disputes-api/). Start with the payout entries call above; seeing your own bank deposits broken into charges and fees is the quickest way to understand what the rest of this can do.
