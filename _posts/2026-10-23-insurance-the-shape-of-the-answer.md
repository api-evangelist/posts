---
published: true
layout: post
title: 'Insurance: The Shape Of The Answer Is Behind A Login'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/insurance-the-shape-of-the-answer.png
date: 2026-10-23
author: Kin Lane
tags:
  - Insurance
  - ACORD
  - Structured Outputs
  - JSON Schema
  - Determinism
  - Standards
  - APIs
---
Earlier this week I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), and how batch-invariant inference, deterministic sampling and schema-constrained output move the hard problem from "get valid JSON" to "agree on the shape." Insurance is the industry where that argument gets interesting, because the shape has been agreed on for fifty years. You just can't easily see it from outside.

## The answer this industry needs

Insurance runs on unstructured input turning into structured records. An adjuster's notes from a site visit. A customer email that says a pipe burst on Saturday. A phone call that becomes a first notice of loss. A broker's submission packet with loss runs and a schedule of locations. Every one of those has to become something a core system will accept.

The outcomes are concrete. Turn a first notice of loss into a valid claim, with a claim type, the policy it attaches to, the coverage it falls under, and an initial reserve. Turn a submission into a quote request with the right lines of business, limits and insured parties. Turn a claimant's email into a party record and a contact that matches the one already on file. None of these is a yes, no or score. Each is a specific object with specific fields and specific code lists, and the system on the other side rejects anything else.

## The shape is already written down

ACORD has been the insurance industry's data standards body since the 1970s. Its [data standards page](https://www.acord.org/standards-architecture/acord-data-standards) lists the families: Property & Casualty XML and AL3, Life & Annuity XML, Global Reinsurance & Large Commercial XML and JSON covering claims, placing, and accounting and settlement, and the Next-Generation Digital Standards, which ACORD describes as "granular, transaction-centric Standards for APIs, microservices, IoT, and more."

NGDS is the one that matters for this conversation. The [NGDS page](https://www.acord.org/standards-architecture/acord-data-standards/next-generation-digital-standards) lists a v1-13-0 final release from May 2026 and a v1-14-0 candidate release this month, plus user stories broken out by capability, including Claims, Sales, Customer Service and Agreement Administration, and an API glossary. That is exactly the material a constrained decoder needs: the objects, the code lists, and the transactions they move through.

Here is the honest part. ACORD says on the same page that it offers its standards, implementation guides and construction tools "to ACORD members," and that you need the right membership or participation program and an acord.org account to get the files. The landing pages are public. The schemas are not. The [APIs.io profile for ACORD](https://apis.io/standards/acord/) puts it plainly: the machine-readable schema exists as XML Schema, and it is members only. ACORD is also moving toward agents. In May its Solutions Group announced MCP-enabled architecture across products including ADEPT and ACORD Transcriber. But that is a product, not an open shape.

The [APIs.io standards page](https://apis.io/standards/) lists six insurance standards. ACORD is carried as a tag by 17 catalog providers, CIECA by 3, CSIO by 4, and CLIEDIS, IVANS and the Market Reform Contract by none yet. The ACORD profile is careful to say a tag is the provider's own statement, not a verified implementation.

## What the catalog holds

The [insurance industry page](https://apis.io/industries/insurance/) counts 704 providers and 2,291 APIs. The insurance [market](https://apis.io/markets/) cohort, built from core-system marketplaces and carrier coverage, has 25 members. Three of them score in the strong band:

- [Canopy Connect](https://apis.io/providers/canopy/) at 66.4, agent readiness 40.5.
- [1Fort](https://apis.io/providers/1fort/) at 64.5, agent readiness 29.9.
- [Guidewire](https://apis.io/providers/guidewire/) at 63.6, agent readiness 40.5.

Aclaimant follows at 54.5, also strong. Everyone else in the cohort is developing or thin, down to Coalition at 33.3. The best agent readiness score in the cohort belongs to [Socotra](https://apis.io/providers/socotra/) at 52.3, and it is the only member above 50. The gap between "has an API" and "an agent can safely act on it" is wide across the whole market.

On artifacts, 24 of the 25 cohort members have OpenAPI in the catalog. Far fewer have the pieces a constrained decoder actually wants. Seven have a [JSON Schema](https://apis.io/schemas/) folder, five have a [vocabulary](https://apis.io/vocabularies/), and seven have [examples](https://apis.io/examples/). [Root](https://apis.io/providers/root/) stands out with 85 JSON Schema files and 239 examples, while scoring thin overall at 37.5, which is a reminder that the shapes and the score measure different things. Duck Creek has 24 schema files and AmTrust has 7.

The ACORD repo itself is the uncomfortable example. [ACORD's catalog profile](https://apis.io/providers/acord/) has claims, policy, party and underwriting OpenAPI, 16 JSON Schemas, 16 JSON Structure files and 16 examples, including an NGDS claim request and an underwriting submission. I have to be clear: those OpenAPI files are API Evangelist's work, marked `generated` with an example.com server, and the claim request schema has six fields, `policyId`, `lossDate`, `lossDescription`, `lossLocation`, `claimant` and `estimatedLossAmount`. It is a placeholder for the shape, not the shape. The real one is behind ACORD's member login.

The most interesting thing I found is in 1Fort's own harvested OpenAPI. It has operations that stream the blank Acroform PDF of an ACORD form linked to a coverage, and a setting described as "use ACORD form tables to generate questions instead of LLM." That is a provider choosing the standard over the model when it needs the answer to be right. That is the whole argument of this series in one boolean.

## What determinism changes here

Insurance is regulated, audited and reconciled, and claims are litigated. If a model reads a first notice of loss and sets a reserve, someone will eventually ask why that number, and whether you would get the same number again. With sampling that varies run to run, and results that change depending on what else was in the batch, the honest answer is "probably not." That isn't acceptable for a reserve that hits financial statements, or for a coverage determination a regulator or a court may review.

Batch-invariant, deterministic inference means the same FNOL text produces the same claim payload on reprocessing, during an audit, or when a market conduct examiner asks for it. Constrained output means the claim type comes from the code list and the coverage is one the policy actually carries, not a plausible string. Volume matters too. After a catastrophe, carriers take in claims by the thousands in days, and that is exactly when batches are full and when a result that shifts with the batch would do the most damage.

The pairing ACORD already has, an object model plus code lists plus transactions, maps directly onto a JSON Schema for the payload, a vocabulary for the enums, and an [Arazzo](https://apis.io/arazzos/)-style sequence for FNOL to claim to reserve. The [agentic access](https://apis.io/agentic-access/) layer is where you say that setting a reserve needs a human to approve it.

## Where it falls short

The standard exists. The open, machine-readable form of it doesn't, at least not anywhere I can reach without a membership. So the industry with one of the oldest agreed shapes is set up to repeat the decision-model problem anyway. Every insurtech and every carrier team writes its own claim schema, or prompts a model with a description of ACORD in prose, and hopes.

The public APIs are thin. Of the 17 providers that tag themselves with ACORD, only two, Whitespace at 45.7 and PPL at 45.3, score above 40, and most are emerging or minimal. I can't find a provider in the catalog publishing JSON Schema that is plainly ACORD's object model. Where the ACORD names show up in public, they show up as PDFs of forms.

Guidewire, Duck Creek and Socotra each publish their own APIs and their own object models. They are real shapes, but each is one company's.

## Close

Insurance did the boring work decades ago. What it hasn't done is put that work where a constrained decoder, or anyone outside a membership program, can pick it up. If ACORD published NGDS as open JSON Schema and vocabularies, even just the claim, coverage, party and submission core, deterministic inference could make "turn this email into a valid claim" a solved problem across the market instead of a separate build at every carrier. Until then, the shape of the answer in insurance is real, and it is behind a login.
