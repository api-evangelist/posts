---
published: true
layout: post
title: 'Verify Insurance Eligibility, Check Claim Status And Handle Prior Authorization With Availity'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/verify-insurance-eligibility-check-claim-status-and-handle-prior-authorization-with-availity.png
date: 2026-11-01 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Availity
  - Eligibility & Benefits Verification
  - Claim Production & Submission
  - Healthcare
  - Revenue Cycle Management
---

A patient is due in tomorrow morning and someone at your front desk is on hold with an insurance company, trying to find out whether the coverage is active and what the co-pay will be. Someone else is calling about a claim that has not been paid, and a third person is trying to work out whether a procedure needs approval before it can be scheduled. If this is your practice or billing office, what you want is for those answers to arrive on their own. [Availity](https://apis.io/providers/availity/) can provide them through an API, a way for software to talk directly to other software, so your practice management system or an AI assistant can ask the question and bring back the answer without anyone waiting on hold.

## What Availity does

Availity is a healthcare information network and clearinghouse. A clearinghouse sits between healthcare providers and health plans and passes standardized transactions back and forth, so a practice does not need a separate connection to every insurer. Availity offers REST APIs, the common web style of API, for real-time HIPAA EDI transactions. HIPAA is the US health privacy and data law, and EDI, or electronic data interchange, is the standardized format those transactions travel in. Availity says its platform processes over 11 billion healthcare transactions a year, connecting providers, health plans and vendors. More on the [Availity website](https://www.availity.com).

## What you can get done

### Know what a patient's plan covers before they arrive

The [Eligibility & Benefits Verification](https://apis.io/capabilities/eligibility-benefits-verification/) capability answers the two questions that cause the most trouble when they surface too late: is this person covered, and does this service need approval first? Asked before the visit, those questions let your staff warn a patient about costs and sort out any approval while there is still time, which means fewer denied claims and fewer surprised patients later.

- `POST /availity/intelligent-payer-network/v1/eligibilities` checks a patient's insurance eligibility and benefits.
- `GET /availity/intelligent-payer-network/v1/eligibilities` lists the checks you have already run.
- `GET /availity/intelligent-payer-network/v1/payers` lists the health plans, known as payers, that you can check against.
- `POST /value-adds/v1/isauthrequired` asks whether a payer requires prior authorization, its advance approval, for a service.
- `GET /value-adds/v1/isauthrequired/{id}` gets the answer to that question.

Prior authorization usually comes with paperwork, and the same capability covers sending it.

- `POST /value-adds/v2/attachments` submits an authorization along with supporting documents.
- `GET /value-adds/v2/attachments/{id}` checks how far those documents have got.

### Find out where a claim stands and answer payer requests

The [Claim Production & Submission](https://apis.io/capabilities/claim-production-submission/) capability is about the money you are waiting on. Rather than having someone log in to a portal or phone a payer about each claim, your billing software can ask for the status of many claims and bring the exceptions to your team, so people spend their time on the claims that are stuck.

- `POST /availity/intelligent-payer-network/v1/claim-statuses` checks the status of a submitted claim.
- `POST /clmsmgmt/claim-status/claim-status/v1/status/summarySearch` runs a summary search across claims, useful for seeing a member's claims over a range of service dates.
- `POST /clmsmgmt/claim-status/claim-status/v1/status/detailSearch` looks up the full detail of one claim.
- `POST /availity/intelligent-payer-network/v1/claim-attachments` sends supporting documentation for a claim.
- `GET /availity/intelligent-payer-network/v1/claim-attachments/{id}` checks whether that documentation has been processed.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 4 for Availity, and each follows a standard transaction. The X12 numbers in their names are the industry's labels for those transactions, which your billing staff may recognize.

- [Eligibility and Benefits](https://apis.io/arazzos/availity/availity-eligibility-benefits-workflow/) finds a payer that supports the check, submits the request and retrieves the benefit response.
- [Prior Authorization](https://apis.io/arazzos/availity/availity-prior-authorization-workflow/) determines whether authorization is required, creates the request, attaches clinical documentation and reads back the decision.
- [Claim Status Inquiry](https://apis.io/arazzos/availity/availity-claim-status-inquiry-workflow/) submits a status request and keeps checking until the payer's response is final.
- [Claim Attachment](https://apis.io/arazzos/availity/availity-claim-attachment-workflow/) submits an attachment and keeps checking until the payer accepts it.

## Ask for it in plain language

Our conversational overlay for Availity maps everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "How do I verify a patient's insurance coverage before their appointment?"
- "Can I find out a member's co-pay and deductible in real time through Availity?"
- "Does this procedure need prior authorization from the patient's health plan?"
- "How do I attach medical records to an authorization request?"
- "How do I find out whether a payer has adjudicated my claim?"
- "Can I find all claims paid on a particular check number?"

You can browse one in the [Availity Claim Status phrasing overlay](https://apis.io/overlays/availity/availity-claim-status-api-phrasing-overlay/).

## Getting started

Availity is a paid service with self-serve signup. You create an application and subscribe to a plan, and then your software calls Availity's hosted service. Because these calls carry patient information, bring whoever handles your HIPAA compliance into the conversation early, and ask them to review any AI assistant you plan to connect. Start with the [Healthcare HIPAA Transactions product page](https://developer.availity.com/portal/catalogue-products/healthcare-hipaa-transactions-1), then read Availity's posts on [HIPAA transactions](https://developer.availity.com/blog/2025/3/25/hipaa-transactions) and its [eligibility and benefits value-add API](https://developer.availity.com/blog/2025/3/4/ebvalue-add-api). On APIs.io, see the [Availity profile](https://apis.io/providers/availity/), the [Eligibility API](https://apis.io/apis/availity/availity-eligibility-api/), the [Claim Status API](https://apis.io/apis/availity/availity-claim-status-api/) and the [Is Auth Required API](https://apis.io/apis/availity/availity-is-auth-required-api/). Count how many hours your staff spent last week on eligibility calls, and ask your software vendor whether that one check can be automated first.
