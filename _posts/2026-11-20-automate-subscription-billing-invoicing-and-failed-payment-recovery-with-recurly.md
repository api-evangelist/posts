---
published: true
layout: post
title: 'Automate Subscription Billing, Invoicing And Failed Payment Recovery With Recurly'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/automate-subscription-billing-invoicing-and-failed-payment-recovery-with-recurly.png
date: 2026-11-20 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Recurly
  - Subscription Lifecycle Management
  - Payment Collection & Dunning
  - Invoicing & Statement Management
  - Subscriptions
  - Billing
---

If you sell anything on a monthly or annual basis, you already know the hard part is not the first sale. It is everything after it: charging the right card on the right day, sending invoices that match what the customer actually signed up for, handling the upgrade someone asked for mid-month, and chasing the payment that quietly failed because a card expired. Recurly is a company that does that work, and it does it through an API, which is a way for your software, or an AI assistant you use, to ask Recurly to do things on your behalf without anyone clicking through a dashboard. You can find the full profile on [APIs.io](https://apis.io/providers/recurly/).

## What Recurly does

[Recurly](https://recurly.com) is a subscription management and recurring billing platform. It handles signups, plans, add-ons, coupons, dunning, invoicing, tax, revenue recognition and analytics for subscription businesses. Its product family includes Recurly Subscriptions, Recurly Commerce for Shopify, Recurly Engage, Recurly RevRec and an AI layer it calls Recurly Compass. The main way to work with it programmatically is the Recurly v3 REST API, which covers accounts, subscriptions, invoices, transactions, plans, purchases and subscriptions that come in through the app stores.

## What you can get done

### Start, change and end subscriptions

The core job is [Subscription Lifecycle Management](https://apis.io/capabilities/subscription-lifecycle-management/): creating a subscription when someone signs up, looking it up when they call support, and ending it when they leave. Your signup form, your CRM or your internal tools can all do this directly.

- `POST /subscriptions` creates a new subscription for a customer.
- `GET /accounts/{account_id}/subscriptions` lists everything one customer is subscribed to.
- `PUT /subscriptions/{subscription_id}` updates a subscription.
- `DELETE /subscriptions/{subscription_id}` terminates a subscription.

When a customer wants to move up a tier or add seats, that is [Subscription Modification](https://apis.io/capabilities/subscription-modification/). The useful part here is that you can show the customer what a change will cost before you make it.

- `POST /subscriptions/{subscription_id}/change/preview` previews what a change would look like.
- `POST /subscriptions/{subscription_id}/change` creates the change.
- `GET /subscriptions/{subscription_id}/change` fetches a change that is pending.
- `DELETE /subscriptions/{subscription_id}/change` removes a pending change if the customer changes their mind.

### Send invoices that match reality

[Invoicing & Statement Management](https://apis.io/capabilities/invoicing-statement-management/) is about producing, finding and correcting the invoices your customers receive. Your accounting team or finance tools can pull them without anyone exporting spreadsheets.

- `GET /invoices` lists every invoice on your site.
- `GET /accounts/{account_id}/invoices` lists the invoices for one customer.
- `POST /accounts/{account_id}/invoices/preview` previews a new invoice for pending charges.
- `POST /accounts/{account_id}/invoices` creates an invoice for those pending charges.
- `GET /invoices/{invoice_id}` fetches a single invoice.

### Recover failed payments

Dunning is the industry word for the polite, escalating process of asking a customer to fix a payment that failed. Recurly's [Payment Collection & Dunning](https://apis.io/capabilities/payment-collection-dunning/) capability lets you set those campaigns up and manage the cards and bank details on file, so revenue that would have quietly slipped away has a chance to come back.

- `GET /dunning_campaigns` lists your dunning campaigns.
- `POST /dunning_campaigns` creates a new one.
- `PUT /dunning_campaigns/{dunning_campaign_id}` updates a campaign.
- `GET /accounts/{account_id}/billing_infos` lists the payment methods stored on a customer.
- `POST /accounts/{account_id}/billing_infos` adds new billing information to a customer.

### Design plans and run promotions

Before anyone can subscribe, you need something to subscribe to. [Plan & Entitlement Design](https://apis.io/capabilities/plan-entitlement-design/) covers the plans themselves, with their billing intervals and pricing.

- `GET /plans` lists your plans.
- `POST /plans` creates a plan.
- `PUT /plans/{plan_id}` updates a plan.

And when it is time to run a sale, [Discount & Promotion Management](https://apis.io/capabilities/discount-promotion-management/) handles coupons, including batches of single-use codes for a campaign.

- `POST /coupons` creates a new coupon.
- `POST /coupons/{coupon_id}/generate` generates unique coupon codes.
- `DELETE /coupons/{coupon_id}` expires a coupon.
- `PUT /coupons/{coupon_id}/restore` brings an inactive coupon back.

### Bill for what customers actually use

If part of your pricing depends on usage, such as messages sent, gigabytes stored or hours booked, [Usage Metering](https://apis.io/capabilities/usage-metering/) lets your product report that usage so it lands on the next invoice.

- `POST /subscriptions/{subscription_id}/add_ons/{add_on_id}/usage` logs a usage record.
- `GET /subscriptions/{subscription_id}/add_ons/{add_on_id}/usage` lists the usage recorded so far.
- `PUT /usage/{usage_id}` corrects a usage record.

Recurly also covers [Gift Cards, Gifting & Cashback](https://apis.io/capabilities/gift-cards-gifting-cashback/), with `POST /gift_cards` to create a gift card and `POST /gift_cards/{redemption_code}/redeem` to redeem one, which is handy if you want people to give your subscription as a present.

## Getting started

Recurly is a hosted service, so you call their endpoint rather than running anything yourself. The v3 API uses HTTP Basic authentication with a site API key; Recurly documents how to create and manage those in its [API keys guide](https://docs.recurly.com/recurly-subscriptions/docs/api-keys). The [integration paths](https://docs.recurly.com/recurly-subscriptions/docs/integration-paths) page is the best place to decide how to connect, and if you are on the older XML API there is an [upgrade guide to v3](https://docs.recurly.com/recurly-subscriptions/docs/upgrade-to-api-v3).

If you work with an AI assistant, Recurly publishes a public [Compass MCP server](https://docs.recurly.com/recurly-subscriptions/docs/compass-public-mcp-server), which lets tools like Claude or Cursor search Recurly's docs and API reference directly. It is also listed on APIs.io as the [Recurly Compass MCP server](https://apis.io/apis/recurly/recurly-compass-mcp-server/).

On cost, Recurly's Starter plan is listed at $249 per month plus a share of billing volume; see the [pricing section on APIs.io](https://apis.io/providers/recurly/#pricing) for the details we have on file.

For the individual APIs, start with the [Recurly Account API](https://apis.io/apis/recurly/recurly-account-api/), the [Recurly Billing Infos API](https://apis.io/apis/recurly/recurly-billing-infos-api/) and the [Recurly Add On API](https://apis.io/apis/recurly/recurly-add-on-api/), and browse the rest from the [Recurly profile on APIs.io](https://apis.io/providers/recurly/).

If recurring revenue is leaking out through failed cards and manual invoicing, pick the one capability above that hurts most and hand it to Recurly's API first.
