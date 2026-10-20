---
published: true
layout: post
title: 'E-Invoicing: The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/e-invoicing-the-shape-of-the-answer.png
date: 2026-10-29
author: Kin Lane
tags:
  - E-Invoicing
  - Tax
  - Peppol
  - UBL
  - Structured Outputs
  - Determinism
  - APIs
---
Last week I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), and how batch-invariant inference, deterministic sampling and schema-constrained outputs make valid JSON table stakes and push the hard problem back to agreeing on the shape. I want to apply that to one industry at a time, and I can't think of a better place to start than e-invoicing and tax, because this is an industry where governments already wrote the shape down and made it law.

## The answer this industry needs

The business outcomes here are not vague. Turn a purchase order into a valid invoice. Turn a PDF invoice that arrived as an email attachment into a structured e-invoice a buyer's system will accept. Turn a line item into a tax treatment decision: which category, which rate, which exemption reason, as a structured answer and not a paragraph.

Every one of those has a receiving system on the other side that will reject anything that doesn't fit. A tax authority platform, an access point on a network, a buyer's accounts payable system. There is no partial credit. The invoice validates or it bounces.

## The shape is already written down

This is the industry that did the boring work, and did it in public.

- **[Peppol BIS Billing 3.0](https://docs.peppol.eu/poacc/billing/3.0/)**, maintained by OpenPeppol, defines two syntaxes, the UBL Invoice and the UBL Credit Note. The spec says plainly that all element names are inherited from EN 16931, and it ships Schematron for the Peppol rules and for the TC434 rules, the "EN16931 model bound to UBL." It also publishes the code lists: ISO 4217 currency codes, the duty or tax or fee category code (a subset of UNCL5305), the invoice type code (a UNCL1001 subset), payment means (UNCL4461), allowance and charge reason codes, and the VATEX exemption reason list.
- **EN 16931** is the European semantic model for an invoice. It is what Peppol, and the national formats built on it, bind to a concrete syntax.
- **[UBL](https://docs.oasis-open.org/ubl/UBL-2.1.html)**, the OASIS Universal Business Language, is the XML syntax Peppol uses.
- **[XRechnung](https://xeinkauf.de/xrechnung/)** is Germany's standard for invoicing public buyers, implementing Directive 2014/55/EU. It is a CIUS plus an extension, currently at version 4.0.0, and defines the invoice as an XML data set.
- **[FatturaPA](https://www.fatturapa.gov.it/en/norme-e-regole/documentazione-fattura-elettronica/formato-fatturapa/)** is Italy's own XML format, exchanged through the SdI.
- **France** runs its rollout through platforms approved by the DGFiP. Our market sweep on October 15th read the [DGFiP list of plateformes agreees](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees) and counted 166 operators, 155 immatriculated and 11 still awaiting interoperability tests.

Look at what that list of code lists is. It's a set of enums. It is exactly what a constrained decoder wants as terminals in a grammar. A model can't invent a tax category code if the only codes it is allowed to emit are the UNCL5305 subset Peppol publishes.

## What the catalog holds

The [E-invoicing and Tax Compliance market](https://apis.io/markets/einvoicing-tax/) on APIs.io is a certified-operator market. It was built from three registers: the OpenPeppol certified service providers list (740 members, 733 certified as Access Points and 414 as SMPs), the DGFiP list, and the six Streamlined Sales Tax certified service providers in the US. It resolves to 56 providers in the catalog, with a mean Kin Score of 43.3 and a median of 45.2.

The leaders:

- **[Qonto](https://apis.io/providers/qonto/)** 72.3, exemplar, agent readiness 57.0
- **[Avalara](https://apis.io/providers/avalara/)** 69.9, exemplar, agent readiness 45.0
- **[Tradeshift](https://apis.io/providers/tradeshift/)** 65.3, strong, agent readiness 50.9
- **[Visma](https://apis.io/providers/visma/)** 64.7, strong, agent readiness 46.0

Then the gap. 13 of the 56 are strong or better. 15 are thin, emerging or minimal, and that bottom group includes names that sit at the center of the e-invoicing networks: [Seeburger](https://apis.io/providers/seeburger/) at 11.3 and Billtrust at 17.9, both with an agent readiness of 0 in our read. [Basware](https://apis.io/providers/basware/) is at 40.8 and [SAP](https://apis.io/providers/sap/) at 49.9, though SAP has the highest agent readiness in the cohort at 58.4.

On the shape artifacts, 17 of the 56 provider repos hold [JSON Schema](https://apis.io/schemas/), 9 hold [JSON Structure](https://apis.io/json-structure/), 19 have a [vocabulary](https://apis.io/vocabularies/), 11 have [examples](https://apis.io/examples/), and 3 have [Arazzo workflows](https://apis.io/arazzos/) (Avalara 12, Intuit 16, Cadana 3). The depth is concentrated: Xero carries 407 schemas and 327 examples, Axway 380 schemas, Avalara 273 schemas and 137 examples.

Does anyone publish the standard's shape in their API? A few, partially:

- The Avalara E-Invoicing API contract in the catalog (its authorship isn't recorded, so treat it as our reading of Avalara's API) describes submitting documents "through the interoperability network (e.g., Peppol)," with a data format enum that includes `ubl-invoice` and `ubl-creditnote`, plus a `/mandates` resource for the country rules.
- [Teamleader](https://apis.io/providers/teamleader/)'s invoices contract lists `ubl/e-fff`, `ubl/peppol_bis_3` and `ubl/xrechnung` as download formats. That contract is one API Evangelist generated from Teamleader's documentation, so the values are theirs but the OpenAPI is ours.
- Qonto's API documentation has a Factur-X section for client invoices.
- [DDD Invoices](https://apis.io/providers/ddd-invoices/) states Peppol exchange and EN 16931 compliance.

On the [standards page](https://apis.io/standards/), [Peppol](https://apis.io/standards/peppol/) is carried as a tag by 4 providers: Tradeshift, DDD Invoices, Koalaboox and Unit4. [UBL](https://apis.io/standards/ubl/) has no provider tagged yet.

## What determinism changes here

E-invoicing is a reconciliation business. An invoice gets issued, transmitted, validated, booked by the buyer, reported to a tax authority, and matched against a payment. Every one of those steps assumes the document is the same document. If an extraction model reads the same PDF on Tuesday and on Friday and returns different VAT category codes, you don't have a model problem, you have an audit problem.

Batch-invariant and deterministic inference gives you something you can actually defend: the same input produces the same structured invoice, and you can rerun it later and get the same answer an auditor is looking at. Constrained output means the answer is shaped by the Peppol code lists and the EN 16931 element names rather than by the model's best guess. Then the Schematron the spec already publishes checks what the schema alone can't, like totals adding up. That's the pattern from the anchor post, generate inside the shape and check with the rules, and this industry already shipped the rules.

Volume matters too. These networks move invoices in bulk, and batch invariance is what lets you process a backlog in large batches without the batch changing the answers.

## Where it falls short

The standards are open, but the APIs that carry them mostly don't show it. UBL has no provider tagged in the catalog. Peppol has four. Most of what I can find is a format enum or a mention in a description, not the EN 16931 model expressed as JSON Schema in an API contract. The shape lives in XSD and Schematron, and the APIs wrap it as a base64 string field, which is useless to a constrained decoder. Somebody has to translate the semantic model into the schemas and vocabularies an inference engine consumes, and I can't find a provider in the catalog who has done that.

The certified operators are thin. Several of the companies that actually move invoices on these networks score in the bottom of the cohort, and some of the registers can't be read at all. Our sweep found no public SdI intermediary register for Italy, no service-provider register for Poland's KSeF, and the ZATCA list renders only in a browser.

Tax treatment is the weaker half. EN 16931 tells you where the tax category goes. It doesn't tell you which one applies to a given product in a given jurisdiction. That decision lives in proprietary engines, and their shapes are their own.

## The shape was the regulation

Most industries are going to spend the next year arguing about what the answer should look like. E-invoicing doesn't have to. The governments settled the shape, published the code lists, and wrote the validation rules. What's missing is the API layer that exposes that shape as something a model can be constrained to, and the providers who do that work first are going to be the ones whose invoices come back right every time.
