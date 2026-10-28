---
published: true
layout: post
title: 'Send Contracts For Electronic Signature And Track Them With Docusign'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-contracts-for-electronic-signature-and-track-them-with-docusign.png
date: 2026-10-28 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Docusign
  - Contract Management
  - Webhook & Event Subscription Management
  - Identity & Access Management
  - E-Signature
  - Contracts
---

Getting a contract signed should not mean printing, scanning and chasing people by email. If your business sends the same agreements over and over, whether offer letters, service contracts or rental agreements, you want them to go out automatically, get signed, and come back filed, with someone told when it is done. [Docusign](https://apis.io/providers/docusign/) does this, and it does it through an API, which means your own software, your CRM, or an AI assistant can send and track agreements for you without anyone opening the Docusign website.

## What Docusign does

Docusign says it helps organizations connect and automate how they prepare, sign, act on, and manage agreements, as part of what it calls the Docusign Agreement Cloud, which includes eSignature. Beyond signing, its APIs reach into web forms, notary, contract lifecycle management (CLM) and Navigator for working with agreements after they are signed. You can find out more on the [Docusign website](https://www.docusign.com/).

## What you can get done

### Send and manage agreements

The [Contract Management](https://apis.io/capabilities/contract-management/) capability is the heart of it. Docusign calls a package of documents sent for signature an "envelope". Your software creates one from a template, fills in who needs to sign, and can find it again later.

- `POST /accounts/{accountId}/envelopes` creates an envelope from a template or your own documents.
- `GET /accounts/{accountId}/envelopes` searches envelopes by date, status or text.
- `GET /accounts/{accountId}/envelopes/{envelopeId}` shows an envelope's sender, recipients and documents.
- `PUT /accounts/{accountId}/envelopes/{envelopeId}` changes an envelope's subject or message.

### Hear about it the moment something is signed

[Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/) is how you stop checking. A webhook is Docusign calling your system when something happens, such as an envelope being completed, so your records update on their own. Docusign calls this Connect.

- `POST /v2/accounts/{accountId}/connect` sets up real-time status updates pushed to your server.
- `GET /v2/accounts/{accountId}/connect` lists the Connect configurations on your account.
- `PUT /v2/accounts/{accountId}/connect` changes where an existing configuration sends updates.
- `GET /v2/accounts/{accountId}/connect/{connectId}` shows the events and address one configuration uses.

### Control who can do what

[Identity & Access Management](https://apis.io/capabilities/identity-access-management/) matters as soon as more than a handful of people are sending agreements. It lets you manage users, groups and permission profiles across your organization.

- `GET /v2/organizations/{organizationId}/accounts/{accountId}/permissions` lists an account's permission profiles.
- `GET /v2/organizations/{organizationId}/accounts/{accountId}/groups` lists the groups in an account.
- `POST /v2/organizations/{organizationId}/users/profiles` updates people's profile details.
- `DELETE /v2/organizations/{organizationId}/users/{userId}/accounts` removes someone's access, for example when they leave.

### Set up and look after accounts

[Tenant Provisioning & Lifecycle](https://apis.io/capabilities/tenant-provisioning-lifecycle/) covers the accounts themselves, useful if you offer signing to your own customers.

- `POST /v2/accounts` creates new eSignature accounts.
- `GET /v2/accounts/{accountId}` shows an account's basic details.
- `GET /v2/accounts/{accountId}/billing_charges` lists recurring and usage charges.
- `DELETE /v2/accounts/{accountId}` closes an account.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 18 for Docusign, including:

- [Bulk Send From Template](https://apis.io/arazzos/docusign/docusign-bulk-send-from-template-workflow/) sends one template to a whole list of recipients.
- [Correct Recipient Email and Resend](https://apis.io/arazzos/docusign/docusign-correct-recipient-email-and-resend-workflow/) fixes a mistyped email address and sends again.
- [Create Template and Send Envelope](https://apis.io/arazzos/docusign/docusign-create-template-and-send-envelope-workflow/) makes a reusable template and sends from it.
- [Download Completed Documents](https://apis.io/arazzos/docusign/docusign-download-completed-documents-workflow/) confirms an envelope is done and downloads the signed PDF.

## Ask for it in plain language

Our conversational overlay for Docusign maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I create an envelope from a template and fill in the template roles?"
- "How do I get real-time envelope status updates pushed to my server?"
- "How do I remove a user's access to specific accounts in my organization?"
- "What recurring and usage charges are on my account?"
- "How do I programmatically create a new DocuSign account for a customer?"

You can see one in the [Account Brands phrasing overlay](https://apis.io/overlays/docusign/docusign-accountbrands-api-phrasing-overlay/).

## Getting started

Docusign is paid, with self-serve signup, and it is a hosted service you call. Its developer documentation includes the [Web Forms API reference](https://developers.docusign.com/docs/web-forms-api/reference/) and the [Notary API](https://developers.docusign.com/docs/notary-api/), plus a guide to [authentication](https://developers.docusign.com/docs/clm-api/clm101/auth/). On APIs.io, see the [Docusign profile](https://apis.io/providers/docusign/), the [Web Forms API](https://apis.io/apis/docusign/docusign-web-forms-api/) and the [Navigator API](https://apis.io/apis/docusign/docusign-navigator-api/). Pick the one agreement you send most often, turn it into a template, and automate that first.
