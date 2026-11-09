---
published: true
layout: post
title: 'DocuSign API Pricing: What the Developer Plans Cost, and What You Get'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/docusign-api-pricing-what-the-developer-plans-cost-and-what-you-get.png
date: 2026-11-11 16:00:00 +0000
author: Kin Lane
tags:
  - DocuSign
  - Pricing
  - eSignature
  - Agreements
---
If you want to put DocuSign signing inside your own product, you're looking for the developer plans, not the eSignature plans most people see first. Both are priced differently, and the difference matters once you're sending agreements from code. I read both DocuSign pricing pages on November 9, 2026. Every price below comes from them, and the same figures are on DocuSign's [APIs.io provider page](https://apis.io/providers/docusign/#pricing).

## Building is free

You don't pay to build. DocuSign gives you a free developer account that works against a demo environment with the advanced features turned on, so you can write and test your whole integration before paying anything. You pick a paid plan when you're ready to send real agreements from production.

## The developer API plans

These are the plans for sending agreements through the API from your own application. DocuSign shows them with annual billing, and says that saves up to 44% compared with paying monthly.

| Plan | Price | Billed annually | What it adds |
|---|---|---|---|
| Starter | $50 a month | $600 | A starting amount of 40 envelopes a month, the API usage center, SDKs and OAuth |
| Intermediate | $300 a month | $3,600 | Everything in Starter. A starting amount of 100 envelopes a month, collaborative commenting, scheduled sending and custom branding |
| Advanced | $480 a month | $5,760 | Everything in Intermediate, plus PowerForms for the API, Recipient Connect, signer attachments and Bulk Send |
| Enhanced | Contact sales | | A five-user minimum, higher send volumes, custom workflows and features like masked fields and multi-factor authentication |

An envelope is DocuSign's unit of work: one package of documents sent to one or more people to sign. The envelope allowance is what you should size against, more than the feature list.

A few things stand out:
- **The jump from Starter to Intermediate is big:** $50 to $300 a month, for 60 more envelopes plus workflow features. If what you need is volume rather than features, ask DocuSign about envelope allowances before upgrading.
- **[Bulk Send](https://apis.io/apis/docusign/docusign-bulksend-api/) starts at Advanced.** Sending the same agreement to many people at once through the API, such as a policy update or a contract renewal, needs that tier.
- **Specialized APIs are priced separately.** The plan comparison lists the Admin API, ID Evidence and Notary as "contact sales" on every tier.

## The eSignature plans

These are for people sending agreements from DocuSign's own app. Many teams start here, and every plan includes API access:

- **Personal:** $11 a month, for 5 envelopes a month
- **Standard:** $30 per user per month, with 100 envelopes per user per year
- **Business Pro:** $45 per user per month, with 100 envelopes per user per year
- **Enhanced:** through sales

Envelopes over the allowance are billed pay-as-you-go at a per-envelope rate.

Two add-ons apply on any plan:
- sending by SMS, from $0.36 per delivery
- verifying a signer's identity, from $2.40 per attempt

## Which plan fits

- **If your product sends agreements on behalf of your customers,** you want a developer plan. Start on Starter and watch your monthly envelope count.
- **If your own staff send agreements and you want to automate a few steps,** an eSignature plan with its included API access may be enough. Standard's 100 envelopes per user per year is the number to check.
- **If you send in bulk,** price Advanced, since that's where Bulk Send through the API starts. Then call sales about Enhanced if your volume is high.

## The APIs you'll be calling

APIs.io indexes DocuSign's API surface in detail. The ones most integrations touch first:
- the [Envelopes API](https://apis.io/apis/docusign/docusign-envelopes-api/) to create and send agreements
- the [Templates API](https://apis.io/apis/docusign/docusign-templates-api/) to reuse documents
- [Connect configurations](https://apis.io/apis/docusign/docusign-connectconfigurations-api/) to receive webhooks when something is signed

DocuSign scores 71.4 on the Kin Score, in the Exemplar band. You can browse all of its APIs, OpenAPI files and plans on the [DocuSign provider page](https://apis.io/providers/docusign/) or the [DocuSign plans page](https://apis.io/plans/docusign/docusign-plans-pricing/).

Prices change. These were read on November 9, 2026, so check [DocuSign's developer pricing page](https://ecom.docusign.com/plans-and-pricing/developer) before you commit.
