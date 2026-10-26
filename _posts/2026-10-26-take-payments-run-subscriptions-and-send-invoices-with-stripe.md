---
published: true
layout: post
title: 'Take Payments, Run Subscriptions And Send Invoices With Stripe'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/take-payments-run-subscriptions-and-send-invoices-with-stripe.png
date: 2026-10-26 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Stripe
  - Payment Initiation Management
  - Subscription Lifecycle Management
  - Invoicing & Statement Management
  - Payments
  - Commerce
---

Most people who end up at [Stripe](https://apis.io/providers/stripe/) did not set out to use an API. They searched for how to accept credit cards on a website, how to charge customers every month, how to send an invoice that someone can pay online, or how to refund an order. Stripe answers all of those, and it does it through APIs that your website, your billing software, the platform you sell on, or an AI assistant can call for you. Understanding what those APIs can do helps you know what to ask of whoever builds or runs your store.

## What Stripe does

Stripe describes itself as online payment processing for internet businesses, a suite of payment APIs that powers commerce for online businesses of all sizes. You can find it at [stripe.com](https://stripe.com). Stripe covers a lot of ground, from one-time payments to recurring billing, invoices, tax and even issuing your own cards, so it helps to break it down by the job you are trying to get done.

## What you can get done

I map each provider to business capabilities, the plain jobs a business needs done, and then to the API operations that do each job. Stripe maps to 18 capabilities in my index. Here are the ones most businesses come looking for.

### [Payment Initiation Management](https://apis.io/capabilities/payment-initiation-management/)

Getting paid starts here. Stripe uses a "payment intent" to represent a payment you are trying to collect, from the moment you start it until the money is captured.

- `POST /v1/payment_intents` starts collecting a payment from a customer.
- `GET /v1/payment_intents/{intent}` checks the status of one payment.
- `POST /v1/payment_intents/{intent}` changes the amount before the customer pays.
- `GET /v1/payment_intents/search` searches payments by status, amount or other details.

### [Payments & Card Management](https://apis.io/capabilities/payments-card-management/)

What happens after the sale, including refunds, which is one of the most common things a business needs to do and one of the first things customers ask about.

- `POST /v1/refunds` refunds a customer's payment.
- `GET /v1/refunds/{refund}` checks the status of a refund.
- `GET /v1/refunds` shows all the refunds you have issued.
- `POST /v1/refunds/{refund}/cancel` cancels a refund that is waiting on customer action.

### [Subscription Lifecycle Management](https://apis.io/capabilities/subscription-lifecycle-management/)

If you charge every month or every year, this is the job: signing customers up for a plan, checking when they renew, and cancelling when they leave.

- `POST /v1/subscriptions` signs a customer up for a recurring plan.
- `GET /v1/subscriptions/{subscription_exposed_id}` checks a subscription's status and next renewal.
- `GET /v1/subscriptions/search` finds subscriptions by status or other details.
- `DELETE /v1/subscriptions/{subscription_exposed_id}` cancels a subscription immediately.

### [Invoicing & Statement Management](https://apis.io/capabilities/invoicing-statement-management/)

For businesses that bill after the work is done, or bill larger customers who want a proper invoice.

- `POST /v1/invoices` creates an invoice for a customer.
- `GET /v1/invoices` lists the invoices you have issued.
- `GET /v1/invoices/upcoming` previews what a customer will be billed on their next invoice.
- `GET /v1/invoices/search` searches invoices by amount, status or other details.

### [Card Issuance Management](https://apis.io/capabilities/card-issuance-management/)

Less well known: Stripe can issue cards, for example to employees or contractors, and let you approve or decline each purchase as it happens.

- `GET /v1/issuing/authorizations` shows every purchase attempt on the cards you have issued.
- `POST /v1/issuing/authorizations/{authorization}/approve` approves a pending purchase in real time.
- `POST /v1/issuing/authorizations/{authorization}/decline` declines a purchase before it goes through.

## Workflows that put it together

A single call is rarely the whole job. A workflow is a recipe of several calls in the right order, written down so software can follow it. Stripe has 31 of them indexed on APIs.io. A few of the most practical:

- [Authorize and Capture Payment](https://apis.io/arazzos/stripe/stripe-authorize-and-capture-payment-workflow/): authorize a payment now and capture the funds later, which is how you charge only when an order ships.
- [Attach Payment Method](https://apis.io/arazzos/stripe/stripe-attach-payment-method-workflow/): save a card to a customer so they do not have to type it again.
- [Add and Scale Subscription Item](https://apis.io/arazzos/stripe/stripe-add-and-scale-subscription-item-workflow/): add an item to a subscription, then change its quantity, which is how per-seat pricing works.
- [Cancel Subscription](https://apis.io/arazzos/stripe/stripe-cancel-subscription-workflow/): confirm a subscription is active, then cancel it.
- [Calculate and Settle Tax](https://apis.io/arazzos/stripe/stripe-calculate-and-settle-tax-workflow/): calculate tax on line items, then record the tax transaction.

## Ask for it in plain language

More of this is being asked of assistants in a sentence. I write conversational overlays that map the kinds of questions someone might ask to the operation that answers them. For Stripe that includes:

- How do I refund a customer's payment?
- How do I sign a customer up for a recurring plan?
- How do I check a subscription's status and next renewal?
- How do I preview what a customer will be billed on their next invoice?
- How do I approve a pending purchase on one of my issued cards in real time?

These are my phrasings, not a record of what people actually ask. Stripe has 71 of these overlays on APIs.io, and the [account overlay](https://apis.io/overlays/stripe/stripe-account-api-phrasing-overlay/) is a good place to see the shape of one.

## Getting started

Stripe is paid, with a free trial and self-serve signup, and it is a hosted service you call. The reference starts with [accounts](https://stripe.com/docs/api/accounts), [balance](https://stripe.com/docs/api/balance) and [charges](https://stripe.com/docs/api/charges). Everything I have indexed is on the [Stripe profile on APIs.io](https://apis.io/providers/stripe/), including the [Checkout API](https://apis.io/apis/stripe/stripe-checkout-api/), the [Charges API](https://apis.io/apis/stripe/stripe-charges-api/) and the [Balance API](https://apis.io/apis/stripe/stripe-balance-api/). If you are choosing a store builder or billing tool, ask whether it runs on Stripe, because that tells you most of what you will be able to automate later.
