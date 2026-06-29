---
published: true
layout: post
title: Stedi and EDI as Modern API Workflows
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/stedi-and-edi-as-modern-api-workflows.png
date: 2026-07-16
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - Arazzo
  - X12
  - EDI
  - Workflows
---
Stedi has taken one of the oldest, crustiest corners of healthcare—X12 EDI—and wrapped it in a modern API. That is genuinely useful work, because the X12 transaction sets that govern eligibility, claims, and remittance are not going anywhere, and most teams would much rather call a clean JSON endpoint than hand-assemble an 837. But a clean endpoint still does not tell you the sequence, and the revenue cycle is nothing but sequence. So Stedi was the last and in some ways the most satisfying provider in this batch to capture as Arazzo workflows.

The eligibility check workflow is the X12 270/271 round-trip—search for the payer, then run the eligibility check. The professional claim lifecycle workflow is the one that really shows why workflows matter: submit the claim with an 837, check its status with a 277, and then convert the 835 to get the remittance. That is the whole revenue cycle in three steps, and it is asynchronous and stateful in a way that no single endpoint can convey. There is also a claim status inquiry workflow for the 276/277 pattern and an insurance discovery workflow with an honest polling step that waits on Stedi's real status enum.

The fifth workflow is provider enrollment—creating a provider, creating the enrollment, uploading the supporting document, and reading the enrollment back—which is the unglamorous onboarding work that has to happen before any of the transaction flows can run. Each workflow references real operationIds from Stedi's own specs, and because Stedi splits its API across several specs, I kept each workflow pointed at the single spec its operations come from so the references stay unambiguous.

EDI is the perfect closing argument for this whole effort. It is a decades-old standard that still moves a staggering amount of healthcare money, and modernizing the transport without capturing the workflows would only get you halfway. Writing the eligibility, claim lifecycle, and enrollment sequences down as Arazzo means the X12 patterns become portable, reviewable artifacts—the same treatment I gave the FHIR providers—so the clinical and administrative halves of healthcare interoperability finally get described in the same language.
