---
published: true
layout: post
title: 'Payments And Banking: The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/payments-and-banking-the-shape-of-the-answer.png
date: 2026-10-22
author: Kin Lane
tags:
  - Payments
  - Banking
  - Open Banking
  - ISO 20022
  - FDX
  - Structured Outputs
  - Determinism
---
Earlier this week I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/). Batch-invariant inference, deterministic sampling, and output constrained to a JSON schema or grammar now ship together in the open. Valid JSON is table stakes. The hard part is agreeing on the shape. Payments and banking is the industry where I expected that part to be easiest, because the shapes have been written down for a long time. So I went and looked.

## The answer this industry needs

The business outcomes here are not abstract. A finance team gets a PDF invoice and needs a valid credit transfer instruction. A supplier sends a remittance email and someone has to match it to a line on a bank statement. A customer writes three angry paragraphs about a charge and an operations team has to turn that into a structured dispute.

Turn an invoice into a payment instruction. Turn a remittance note into a reconciliation entry. Turn a narrative into a case a bank system will accept. Every one of those ends in a message that a bank, a network, or a ledger will reject outright if one field is wrong. Nobody in this industry wants a creative answer. They want the same correct answer every time.

## The shape is already written down

ISO 20022 is the shape for money movement. The message names are the vocabulary practitioners already use: `pain.001` for a customer credit transfer initiation, `pacs.008` for the interbank credit transfer, `pacs.002` for payment status, and the `camt` family for cash management and statements. I could not load iso20022.org from here today (it returned a 403), so I am leaning on how these names show up in the providers' own contracts, which I did read.

On the account data side, there are several regional shapes. [FDX](https://apis.io/standards/fdx/) in the United States. The [Berlin Group NextGenPSD2](https://apis.io/standards/berlin-group-nextgenpsd2/) framework in Europe. The [UK Open Banking Standard](https://standards.openbanking.org.uk/). Australia's [Consumer Data Standards](https://consumerdatastandardsaustralia.github.io/standards/) under the Consumer Data Right. Each one names the accounts, balances, transactions and payment consents a compliant API has to return.

The [APIs.io standards page](https://apis.io/standards/) shows how many catalog providers carry each as a tag:

- [ISO 20022](https://apis.io/standards/iso-20022/): 20 providers
- [FDX](https://apis.io/standards/fdx/): 13 providers
- [Consumer Data Standards](https://apis.io/standards/consumer-data-standards/): 30 providers
- [Open Banking Standard](https://apis.io/standards/open-banking-standard/): 40 providers
- [NACHA](https://apis.io/standards/nacha/): 53 providers
- Berlin Group NextGenPSD2 and the [UK Open Banking Standard](https://apis.io/standards/uk-open-banking-standard/) entries: no provider tagged yet

There is also a profile for each in the API Evangelist standards catalog, including [ISO 20022](https://standards.apievangelist.com/store/iso-20022/) and [FDX](https://standards.apievangelist.com/store/fdx/).

## What the catalog holds

I used three cohorts from the [Markets](https://apis.io/markets/) layer: payments, open banking, and US open banking (FDX). The payments cohort is 25 providers with a mean Kin Score of 69.1. [Stripe](https://apis.io/providers/stripe/) leads at 81.1, then Uphold at 79.2 and [Square](https://apis.io/providers/square/) at 78.1. The open banking cohort is 24 providers with a mean of 63.4, led by [Plaid](https://apis.io/providers/plaid/) at 84.6, then IBANforge at 72.0 and Token.io at 71.6.

The US open banking cohort is the story. It is 25 providers with a mean of 38.4. Plaid is at the top again at 84.6, MX at 65.4 and [Citi](https://apis.io/providers/citi/) at 61.4. Then it falls off. [Chase](https://apis.io/providers/chase/) is at 33.4, Capital One 32.0, PNC 10.6, Fidelity 7.8, and [The Clearing House](https://apis.io/providers/the-clearing-house/) 13.1. The aggregators that sit between banks and apps score well. Most of the banks whose data is being shared score thin or below in what they publish publicly. Agent readiness tells the same story, with Capital One, American Express and USAA at 3.1 and PNC and Fidelity at 0.

Across the 70 distinct providers in those three cohorts, I counted artifact folders in their repos: 53 have [JSON Schema](https://apis.io/schemas/), 57 have [vocabularies](https://apis.io/vocabularies/), 47 have [AsyncAPI](https://apis.io/asyncapis/), 17 have [examples](https://apis.io/examples/), 15 have [JSON Structure](https://apis.io/json-structure/), and 8 have [Arazzo](https://apis.io/arazzos/) workflows. A good share of those schemas and vocabularies are API Evangelist's own derived work, not something the provider published, so read the counts as what the catalog holds, not what the industry ships.

The part that matters is the provider-published contracts that name ISO 20022 messages directly. Citi's original OpenAPI files reference `pain.001.001.03` and `pacs.008.001.08`. [Barclays](https://apis.io/providers/barclays/) publishes a file payments contract built on `pain.001.001.08`. [SoFi](https://apis.io/providers/sofi-technologies/)'s payment hub contract talks about `pacs.008` or `pacs.004` messages being published to the network and awaiting a `pacs.002` status. [Currencycloud](https://apis.io/providers/currencycloud/) and [Truist (BB&T)](https://apis.io/providers/bbandt-corp/) reference `pacs.008` in their own contracts too. That is the shape of the answer, already sitting inside the [OpenAPI](https://apis.io/apis/) a model would be asked to call.

## What determinism changes here

Payments are reconciled, audited and regulated. Every one of those properties assumes that the same input gives the same output.

If a model turns an invoice into a `pain.001` today and a slightly different one on Friday because another request landed in the same batch, the reconciliation breaks and nobody can explain why. Batch-invariant inference removes that. Deterministic sampling means an auditor can rerun the same invoice through the same model and get the same instruction, which is the closest thing to a reproducible decision this industry will accept from a model. Constrained output means the model cannot invent a currency code, a purpose code, or a status that the scheme does not define, because the vocabulary is the grammar.

Volume matters too. Banks process these messages by the million. A structured answer that comes back valid 99 percent of the time is a queue of exceptions somebody has to work by hand. A structured answer that can only be produced in the schema's shape moves the remaining errors from formatting into meaning, which is where a human reviewer should be spending time anyway.

## Where it falls short

The standards exist. The publishing does not keep up. Berlin Group NextGenPSD2 and the UK Open Banking Standard have no provider tagged in the catalog yet, even though I can see Berlin Group references in several provider repos. That is a tagging gap on our side. The bigger gap is that the large US banks named in the FDX cohort mostly do not have a public FDX contract I can find. The shape is defined, but it sits behind partner agreements and aggregators rather than in a public OpenAPI.

ISO 20022 is published as XML schemas from the registration authority. Most providers who use it describe it in prose or embed XML examples in a JSON API. A few schemas in the catalog, from BB&T, Atlar and Banco Inter, mention `pacs.008` in their fields or descriptions, but I could not find one that is a JSON Schema of the message itself that a constrained decoder could consume directly. That translation is still left to every team.

I left card network dispute and reason codes out of this post entirely. I could not source them from a public machine-readable place today, and I am not going to guess at them.

## The close

Payments is the industry that should benefit first from constrained, deterministic inference, because it already did the hard work of agreeing on the shape decades ago. What is missing is the last step: the banks and networks publishing those shapes as machine-readable contracts where a model, and the people governing it, can find them. The aggregators have done it. The fintechs have mostly done it. I would like to see the banks do it too, because the answer is only as good as the shape you hand the model.
