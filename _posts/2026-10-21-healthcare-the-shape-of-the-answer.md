---
published: true
layout: post
title: 'Healthcare: The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/healthcare-the-shape-of-the-answer.png
date: 2026-10-21
author: Kin Lane
tags:
  - Healthcare
  - FHIR
  - Structured Outputs
  - JSON Schema
  - Determinism
  - Standards
---
Yesterday I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), and how batch-invariant inference, deterministic sampling and schema-constrained output together make valid JSON table stakes and push the real work back onto agreeing on the shape. Healthcare is the industry I want to look at first, because it is the one that has done the most work writing its shapes down.

## The answer this industry needs

Healthcare runs on paper that isn't paper anymore. A referral arrives as a fax. A clinical note is a block of dictated text. A prior authorization request is assembled by someone reading a chart and retyping it into a payer portal. The business outcome is almost always the same sentence: turn this document into valid FHIR resources a server will accept.

That means a Patient, an Encounter, the Observations and Conditions in the note, the MedicationRequest the clinician wrote, and when money is involved, a Claim. Not a summary of those things. The resources themselves, in a shape an EHR, a payer, or a data platform can take in without a human retyping them.

## The shape is already written down

HL7 has been writing these shapes down for more than a decade. The [FHIR R4 resource list](https://hl7.org/fhir/R4/resourcelist.html) defines [MedicationRequest](https://hl7.org/fhir/R4/medicationrequest.html), [Claim](https://hl7.org/fhir/R4/claim.html), Patient, Encounter, Observation and Condition, each with a StructureDefinition that is machine-readable. In the United States, the [US Core Implementation Guide](https://hl7.org/fhir/us/core/) narrows those base resources into profiles. It is at version 9.0.0, STU 9, based on R4, and it describes itself as establishing "the floor" for US interoperability, including pages on writing clinical notes and vital signs. [SMART App Launch](https://hl7.org/fhir/smart-app-launch/) covers who is allowed to read and write, and [Bulk Data Access](https://hl7.org/fhir/uv/bulkdata/) covers moving whole populations instead of one record.

The payer side is written down too. The [Da Vinci Prior Authorization Support](https://hl7.org/fhir/us/davinci-pas/) guide (v2.2.1, STU 2, on R4) defines a variant of the FHIR Claim `$submit` operation. The input is one Bundle containing a single Claim plus its referenced resources. The output is a Bundle with a single ClaimResponse, or an OperationOutcome. The guide is explicit that it supports mapping to the X12 278 transaction, and equally explicit that the X12 mapping itself is published by X12 under its own licensing, not by HL7.

So the shape of a prior authorization request is a Bundle. The shape of a medication order is a MedicationRequest profiled by US Core. This is about as close to a ready-made constraint for a decoder as any industry has.

## What the catalog holds

The [APIs.io standards page](https://apis.io/standards/) lists the providers whose own APIs.json carries each standard as a tag. That is their statement, not a measurement. [HL7 FHIR](https://apis.io/standards/fhir/) is carried by 169 providers. SMART on FHIR by 44. US Core by 11. Da Vinci by 5. FHIR Bulk Data Access by 2. The API Evangelist standards catalog has its own [FHIR profile](https://standards.apievangelist.com/store/fhir/).

Two Market-layer cohorts cover this ground. The [Healthcare (FHIR) market](https://apis.io/markets/healthcare/) has 24 providers, all scored, with a mean Kin Score of 70.6. [Elation Health](https://apis.io/providers/elation-health/) leads the clinical side at 79.4, with DrChrono at 77.5, Paubox at 77.0, [Flexpa](https://apis.io/providers/flexpa/) at 72.2 and [Medplum](https://apis.io/providers/medplum/) at 71.7. Gainsight sits at the top of the cohort at 82.1, which tells you the cohort includes vendors serving healthcare, not only clinical systems. The medtech cohort, built from certified health IT developers and FDA AI-enabled device makers, is 47 providers with a mean of 40.7. [Epic](https://apis.io/providers/epic-systems/) leads it at 62.5, with [Medblocks](https://apis.io/providers/medblocks/) at 62.1. The bottom of that cohort is the device makers, several of them under 10.

Agent readiness is the gap. In the healthcare cohort the highest is Paubox at 63.3 and Medplum at 54.9, and most sit between 30 and 45. In medtech, Medblocks is the one provider above 60, at 64.4.

Across the 71 providers in both cohorts, here is what their repos hold:

- 47 have [OpenAPI](https://apis.io/apis/)
- 34 have [AsyncAPI](https://apis.io/asyncapis/)
- 27 have [JSON Schema](https://apis.io/schemas/)
- 25 have a [vocabulary](https://apis.io/vocabularies/)
- 17 have [examples](https://apis.io/examples/)
- 7 have [JSON Structure](https://apis.io/json-structure/)
- 7 have [Arazzo workflows](https://apis.io/arazzos/)

Fifteen of them have OpenAPI that names FHIR clinical resources directly. [Oracle Health](https://apis.io/providers/oracle-health/) has per-resource contracts for Patient, Encounter, Observation, Condition and MedicationRequest. [Canvas Medical](https://apis.io/providers/canvas-medical/) and [ModMed](https://apis.io/providers/modernizing-medicine/) publish a FHIR spec that we split into one contract per resource, so the per-resource files are our work on top of their published shape. Some of the Oracle Health files carry an `x-generated-by` marker, meaning they were written from Oracle's documentation by our pipeline rather than downloaded as a spec, and for many of the rest the authorship isn't recorded. Epic's repo has a `fhir/` folder rather than an OpenAPI one. Only five providers in the two cohorts have contracts that reference Claim, ClaimResponse or ExplanationOfBenefit: athenahealth, Canvas Medical, Independence Blue Cross, Medplum and Flexpa.

## What determinism changes here

Healthcare has three problems that deterministic, constrained inference speaks to directly.

The first is audit. A prior authorization decision, or a claim, has to be explainable after the fact. If the same fax produces a different Bundle on a re-run because of what else happened to be in the batch, you cannot reconstruct what the system did. Batch-invariant, deterministic output means the same document produces the same resources, and you can replay it.

The second is safety. A MedicationRequest with a free-text dose that "looks right" is a liability. Constraining output to the US Core profile, with value sets as enums, means the model can't invent a code that isn't in the value set. It can still pick the wrong one, which is why the check after generation still matters, but it can't produce something the server will silently mangle.

The third is volume. Payers and health systems process documents by the million. Reconciliation at that volume depends on the answer being stable, so that a diff between two runs is a real change and not sampling noise.

## Where it falls short

The base resources are well covered. The money side is not. Five providers out of 71 have a Claim-shaped contract I can find in the catalog, and Da Vinci is carried as a tag by five providers across the whole catalog. The guide that defines prior authorization as a FHIR Bundle depends on an X12 mapping that is not openly published, so the most valuable shape in this industry is only partly open.

Much of the FHIR surface in the catalog is also our work rather than the provider's. Per-resource contracts that we split, or generated from docs, are useful, but they are not the same as a provider publishing the profile it actually enforces. A generic FHIR R4 schema is too loose to constrain a decoder well. What you want is each server's CapabilityStatement and profiles, and those are rarely in the catalog as artifacts. The device makers in the medtech cohort are barely present at all.

## The shape was the hard part

Healthcare already did the boring work. HL7 wrote the resources, US Core wrote the floor, Da Vinci wrote the payer Bundle. What's missing is providers publishing the exact profiles they enforce, as artifacts a decoder can load. Do that, and turning a fax into a valid Bundle stops being a project and becomes a call that returns the same answer every time.
