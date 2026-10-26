---
published: true
layout: post
title: 'Calculate Sales Tax And File Returns Automatically With Avalara'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/calculate-sales-tax-and-file-returns-automatically-with-avalara.png
date: 2026-10-26 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Avalara
  - Indirect Tax Management
  - Tax Reporting & Compliance
  - Regulatory Compliance Management
  - Tax
  - Accounting
---

If you sell into more than one state, or more than one country, you have probably found yourself searching for how to charge the right sales tax on every order, how to know where you even owe it, and how to get the returns filed without a spreadsheet marathon at the end of every period. Most people asking those questions are not looking for an API. They are looking for the problem to go away. [Avalara](https://apis.io/providers/avalara/) is one of the companies that makes it go away, and it does it through APIs your store, your billing system, your accounting software, or increasingly an AI assistant can call on your behalf.

## What Avalara does

In Avalara's own words, it helps businesses of all sizes get tax compliance right, with cloud-based solutions that work with existing business applications to calculate tax accurately and file returns automatically. You can find them at [avalara.com](https://www.avalara.com/). The important part of that sentence is "work with existing business applications." Avalara is not another place you go to do your taxes. It is a service that plugs into the places where you already make sales, so the tax is figured out at the moment of the sale, and the record of it is ready when filing time comes.

## What you can get done

I map what a provider can do to business capabilities, the plain-language jobs a business needs done, and then to the specific API operations that do each job. Here is what that looks like for Avalara.

### [Indirect Tax Management](https://apis.io/capabilities/indirect-tax-management/)

This is the heart of it: knowing where you have an obligation to collect tax and getting the amount right on every transaction. A big piece of that is nexus, the connection to a state or jurisdiction that obligates you to collect its tax. Avalara lets you declare and manage nexus for each of your companies, then uses it when it calculates tax.

- `GET /api/v2/companies/{companyId}/nexus` lists the places you have declared nexus.
- `POST /api/v2/companies/{companyId}/nexus` declares nexus in a new state.
- `POST /api/v2/companies/{companyId}/nexus/{nexusId}/parameters` adds details to a nexus, such as flagging yourself as a remote seller.
- `GET /api/v2/companies/{companyId}/nexus/{nexusId}/parameters` shows the details set on a nexus.

### [Tax Reporting & Compliance](https://apis.io/capabilities/tax-reporting-compliance/)

Calculating tax is half the job. The other half is reporting it. Avalara's APIs cover listing, reviewing and submitting VAT returns, and preparing 1099 forms for the people and businesses you pay.

- `GET /returns` lists the VAT returns still waiting to be filed.
- `GET /returns/{returnId}` lets you review a return before it goes out.
- `POST /returns/{returnId}/submit` files a finalized VAT return with the tax authority.
- `POST /forms/1099` creates a 1099 form with a payee's payment amounts.

### [Regulatory Compliance Management](https://apis.io/capabilities/regulatory-compliance-management/)

This one surprised me in a good way. If you ship regulated goods, like wine sold direct to consumers, there are rules beyond tax about what you can ship, where, and how much. Avalara can check an order against those rules before it ships.

- `GET /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/verify` checks whether an order can be shipped direct to the consumer in their state.
- `PUT /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registerIfCompliant` checks compliance and registers the shipment in one step.
- `DELETE /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration` removes an order from the volume being tracked against shipping limits.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

Less exciting, but it matters when more than one person touches your tax setup. You can add team members, see who has access to an account, and remove someone when they leave.

- `POST /api/v2/accounts/{accountId}/users` adds a team member.
- `GET /api/v2/accounts/{accountId}/users` shows who has access.
- `DELETE /api/v2/accounts/{accountId}/users/{id}` removes someone's access.

## Workflows that put it together

A single API call rarely gets a whole job done. A workflow is a recipe of several calls in the right order, written down so software can follow it. Avalara has 12 of them indexed on APIs.io. A few that map directly to things businesses search for:

- [Calculate and Commit a Transaction](https://apis.io/arazzos/avalara/avalara-calculate-and-commit-transaction-workflow/): validate the ship-to address, calculate tax on a sale, commit it, then read it back. This is the everyday "charge the right tax at checkout" job.
- [Estimate Rate Then Quote](https://apis.io/arazzos/avalara/avalara-estimate-then-quote-workflow/): get a free estimated rate for an address, then create a full transaction quote there.
- [Create Company With Nexus](https://apis.io/arazzos/avalara/avalara-create-company-with-nexus-workflow/): set up a new company and declare its first nexus, then confirm the list.
- [Classify an Item and Test Its Tax](https://apis.io/arazzos/avalara/avalara-classify-item-and-test-tax-workflow/): look up tax codes, register a product with one, then quote tax for it.
- [Adjust a Committed Transaction](https://apis.io/arazzos/avalara/avalara-adjust-committed-transaction-workflow/): correct a sale that already went through, with a documented replacement.

## Ask for it in plain language

More and more of this work is going to be asked for in a sentence, not built into a screen. To help with that I write conversational overlays for each API, which map the kinds of questions a person might ask to the operation that answers them, so an assistant knows which call to make. For Avalara, that includes questions like:

- Which states have I declared nexus in?
- How do I declare that my company has nexus in a new state?
- Which VAT returns are still waiting to be filed?
- Can I ship this wine order direct to the consumer in their state?
- Can I create a new 1099 form with a payee's payment amounts?

These are my phrasings, not a record of what people actually ask, but they show how close the API already is to the way a business owner talks. You can see one of them in the [Avalara 1099 forms overlay](https://apis.io/overlays/avalara/avalara-1099-forms-api-phrasing-overlay/).

## Getting started

Avalara offers self-serve signup, and it is a hosted service, meaning you call their endpoints rather than run anything yourself. Start with the [AvaTax reference](https://developer.avalara.com/api-reference/avatax/soap/) and the [tariff classification reference](https://developer.avalara.com/api-reference/selfservicetarrifclassification/selfservicetarrifclassification/) if you sell across borders. Everything I have indexed is on the [Avalara profile on APIs.io](https://apis.io/providers/avalara/), including the [AvaTax SOAP API](https://apis.io/apis/avalara/avatax-soap-api/), the [Tax Content for Retail Configuration API](https://apis.io/apis/avalara/tax-content-for-retail-api/) and the [Self-Serve Tariff Classification API](https://apis.io/apis/avalara/self-serve-tariff-classification-api/). If sales tax is the thing keeping you up at night, find out whether the software you already use connects to Avalara before you build anything yourself.
