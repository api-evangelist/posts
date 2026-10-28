---
published: true
layout: post
title: 'Connect To Your Customers Accounting, HR And CRM Systems With Merge'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/connect-to-your-customers-accounting-hr-and-crm-systems-with-merge.png
date: 2026-10-28 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Merge
  - Financial Management
  - Talent Acquisition Management
  - HR Operations Management
  - Integration
  - Accounting
---

If you build software for other businesses, sooner or later every customer asks the same question: does it work with our accounting system, our HR system, our CRM? There are dozens of each, and building a connection to every one is a job that never ends. [Merge](https://apis.io/providers/merge/) offers one API that sits in front of many of those systems, so your product, or an AI assistant acting for you, can read and write invoices, candidates, payroll and deals the same way no matter which system your customer happens to use.

## What Merge does

Merge describes itself as connective infrastructure for production AI. Its Unified API is one surface across HRIS (HR information systems), ATS (applicant tracking systems), accounting, CRM, ticketing, file storage, knowledge bases and chat. It also offers Agent Handler, which exposes pre-built enterprise connectors to AI agents, and Gateway, a unified API across several large language model providers. More on the [Merge website](https://www.merge.dev/).

## What you can get done

### Work with invoices in any accounting system

[Financial Management](https://apis.io/capabilities/financial-management/) lets your product see and create invoices in whatever accounting platform your customer has connected.

- `GET /accounting/v1/invoices` lists invoices, such as the ones still unpaid.
- `POST /accounting/v1/invoices` creates an invoice in the connected platform.
- `GET /accounting/v1/invoices/{id}` shows the line items and totals of one invoice.
- `PATCH /accounting/v1/invoices/{id}` changes an invoice that already exists.

### Move candidates through hiring

[Talent Acquisition Management](https://apis.io/capabilities/talent-acquisition-management/) connects to applicant tracking systems, so a job board or assessment tool can hand candidates over without copy and paste.

- `GET /ats/v1/candidates` lists candidates, and finds one by email.
- `POST /ats/v1/candidates` adds a new candidate.
- `GET /ats/v1/candidates/{id}` shows what the system has on file for one person.
- `PATCH /ats/v1/candidates/{id}` updates a candidate's details.

### Read payroll results

[HR Operations Management](https://apis.io/capabilities/hr-operations-management/) reaches into HR and payroll systems, useful for benefits, lending or finance products that need to see pay.

- `GET /hris/v1/payroll-runs` lists the payroll runs a company has processed.
- `GET /hris/v1/payroll-runs/{id}` shows the dates and status of one run.
- `GET /hris/v1/employee-payroll-runs` lists individual employees' pay results.
- `GET /hris/v1/employee-payroll-runs/{id}` reads one employee's paystub-level record.

### Keep deals in sync with the CRM

[Opportunity & Pipeline Management](https://apis.io/capabilities/opportunity-pipeline-management/) works with deals in your customer's CRM.

- `GET /crm/v1/opportunities` pulls open deals.
- `POST /crm/v1/opportunities` adds a new deal.
- `GET /crm/v1/opportunities/{id}` looks up one deal.
- `PATCH /crm/v1/opportunities/{id}` moves a deal to a new stage or changes its amount.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 19 for Merge, including:

- [Accounting Link an Account](https://apis.io/arazzos/merge/merge-accounting-link-account-workflow/) connects a customer's accounting platform to your product.
- [Accounting Bill a Customer](https://apis.io/arazzos/merge/merge-accounting-create-contact-and-invoice-workflow/) creates a customer contact, raises an invoice and confirms it.
- [Bulk Create Expenses and Poll the Batch](https://apis.io/arazzos/merge/merge-accounting-bulk-create-expenses-poll-workflow/) submits a batch of expenses and waits for it to finish.
- [ATS Add a Candidate and Application](https://apis.io/arazzos/merge/merge-ats-create-candidate-and-application-workflow/) creates a candidate and applies them to an open job.
- [ATS Advance an Application Stage](https://apis.io/arazzos/merge/merge-ats-advance-application-stage-workflow/) moves an application to the next interview stage.

## Ask for it in plain language

Our conversational overlay for Merge maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "Which invoices are still unpaid in my customer's accounting system?"
- "How do I add a new candidate to a customer's applicant tracking system?"
- "How do I get the payroll runs a company has processed in its payroll system?"
- "Can I move a deal to a new stage or change its amount?"
- "How do I create an invoice in a connected accounting platform?"

You can see one in the [Merge HRIS phrasing overlay](https://apis.io/overlays/merge/merge-hris-api-phrasing-overlay/).

## Getting started

Merge is paid and is a hosted service you call. Start with the [HRIS overview](https://docs.merge.dev/merge-unified/hris/overview) and the [ATS overview](https://docs.merge.dev/merge-unified/ats/overview), and there is a [support site](https://help.ah.merge.dev/) for Agent Handler. On APIs.io, see the [Merge profile](https://apis.io/providers/merge/), the main [Merge API](https://apis.io/apis/merge/merge/) and the [Accounting Periods API](https://apis.io/apis/merge/merge-subpackage-accountingperiods-api/). Pick the category your customers ask about most and connect that one first.
