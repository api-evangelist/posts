---
published: true
layout: post
title: DrChrono and the Clinical Day as Workflows
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/drchrono-and-the-clinical-day-as-workflows.png
date: 2026-07-05
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - Arazzo
  - EHR
  - Revenue Cycle
  - Workflows
---
DrChrono is a full EHR with a sprawling REST API—over three hundred operations covering everything from scheduling to billing. An API that large is exactly where workflows earn their keep, because no one reads three hundred endpoints to figure out how to do a thing. They want the five-step sequence that gets a patient registered, scheduled, charted, and billed. So I picked the sequences that make up a clinical day and wrote them down as Arazzo.

It starts with a patient registration upsert that searches for an existing patient and branches to update or create—the same deduplicating intake pattern that fronts every EHR integration, expressed here with an explicit branch on the result count. From there an appointment scheduling workflow reads the patient and books and confirms the appointment, and a clinical documentation workflow captures the visit itself by recording a problem, a medication, and a clinical note against the patient and doctor. These are the operations a provider actually touches over the course of seeing someone.

The last two close the loop on the parts that keep a practice running. A chart export workflow reads the patient, lists their problems and medications, and exports a C-CDA—the continuity-of-care document that moves a record between systems. And an eligibility and billing workflow walks the revenue cycle: check eligibility, review the day-sheet charges, and add a claim billing note. Every step references a real operationId in DrChrono's spec, with the patient and doctor passed as the query parameters the API actually expects. Nothing is invented; these are the honest shapes of how the API gets used.

A three-hundred-operation API is overwhelming until you realize most of the value lives in a dozen short sequences. Capturing those sequences as Arazzo is how you make a large EHR approachable—for a new integrator, for a governance review, or for an agent that needs to accomplish a task without reasoning over the entire surface. The size of DrChrono's API is the whole reason writing its workflows down is worth doing.
