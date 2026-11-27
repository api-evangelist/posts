---
published: true
layout: post
title: 'Validate Bank Details And Track Cross-Border Payments With SWIFT'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/validate-bank-details-and-track-cross-border-payments-with-swift.png
date: 2026-11-27 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - SWIFT
  - Payments & Card Management
  - Payment Initiation Management
  - Cross-Border Payment Management
  - Banking
  - Cross-Border Payments
---

Anyone who has sent money internationally knows the two worries: did I get the bank details right, and where is the payment now? A wrong bank code or account number means a payment bounces days later, often with fees, and a payment in flight between banks can feel like it has disappeared. SWIFT, the network that banks use to move money across borders, offers APIs for both problems. An API is a way for software, or an AI assistant acting for you, to ask SWIFT a question directly and get an answer back in seconds. I keep a profile of SWIFT on [APIs.io](https://apis.io/providers/swift/), and this is what it lets you get done.

## What SWIFT does

[SWIFT](https://www.swift.com), the Society for Worldwide Interbank Financial Telecommunication, is a member-owned cooperative that provides secure financial messaging and reference data to financial institutions around the world. Its APIs cover cross-border payment tracking (known as gpi), checking payment details before a payment is sent, looking up bank reference data (SwiftRef), screening transactions for sanctions, and more. One thing to be clear about up front: these APIs are built for banks, payment service providers and the companies that build software for them. If you run a business, this is what sits behind your bank's ability to tell you a payment's status, and what a treasury or payments platform you use may connect to.

## What you can get done

### [Payments & Card Management](https://apis.io/capabilities/payments-card-management/)

Before money moves, you want to know the bank you are sending to is real and reachable. Every bank on the network has a BIC, the bank identifier code (sometimes called a SWIFT code), and these calls answer questions about it.

- `GET /v2/bics/{bic}` returns the details of a bank behind a BIC.
- `GET /v2/bics/{bic}/validity` checks whether a BIC is valid.
- `GET /v2/bics/{bic}/reachability` checks whether the bank can be reached for SEPA payments, the euro payment scheme.
- `GET /v2/bics/{bic}/lei` returns the bank's legal entity identifier, a global ID for organisations.
- `GET /v2/bics/{bic}/ssis` returns standard settlement instructions, the bank's preferred routes for receiving funds.

### [Payment Initiation Management](https://apis.io/capabilities/payment-initiation-management/)

This is pre-validation: checking a payment instruction before it is sent, so the mistakes are caught while they are cheap to fix.

- `POST /accounts/verification` checks whether a beneficiary account looks able to receive incoming funds.
- `POST /payment/account-format` validates the format of an account number.
- `POST /payment/financial-institution-identity` confirms the receiving institution is a financial institution.
- `POST /payment/purpose-code` validates the purpose code attached to a payment.
- `POST /payment/payment-purpose` validates the stated purpose of a payment.

### [Cross-Border Payment Management](https://apis.io/capabilities/cross-border-payment-management/)

Once a payment is sent, it carries a unique tracking reference called a UETR, much like a parcel tracking number. These calls follow it.

- `GET /payments/{uetr}/transactions` returns the details and journey of a specific payment.
- `GET /payments/changed/transactions` lists payments whose status has changed, so you can update customers without checking each one.
- `PUT /payments/{uetr}/status` confirms the status of a payment, for example that it has been credited.

## What this looks like in practice

A payments platform can check a supplier's bank code and account format the moment someone types them into an invoice form, rather than after a failed transfer. A bank's customer portal can show a business exactly where its international payment is, using the tracking reference, instead of asking them to call. An AI assistant connected to these APIs could answer "is this bank code valid?" or "where is the payment I sent on Monday?" from the same calls.

## Getting started

Access is enterprise, meaning it runs through an agreement with SWIFT rather than a self-serve signup, and the plans I have on file are in the [pricing section of the SWIFT profile](https://apis.io/providers/swift/#pricing). The docs to read:

- [Payment Pre-validation API documentation](https://developer.swift.com/apis/payment-pre-validation-api)
- [SwiftRef API documentation](https://developer.swift.com/apis/swiftref-api)
- [gpi APIs documentation](https://developer.swift.com/apis/gpi-apis)

On APIs.io, the [Payment Pre-validation API](https://apis.io/apis/swift/payment-pre-validation-api/), [SWIFT BICs API](https://apis.io/apis/swift/swift-bics-api/), [SWIFT IBANs API](https://apis.io/apis/swift/swift-ibans-api/) and [Transaction Screening API](https://apis.io/apis/swift/transaction-screening-api/) pages describe each surface, and the [SWIFT provider profile](https://apis.io/providers/swift/) ties them together.

If international payments are part of your business, the practical next step is to ask your bank or payments provider whether they use SWIFT pre-validation and gpi tracking, and how you can see the results.
