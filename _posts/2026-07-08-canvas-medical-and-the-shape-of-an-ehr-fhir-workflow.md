---
published: true
layout: post
title: Canvas Medical and the Shape of an EHR FHIR Workflow
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/canvas-medical-and-the-shape-of-an-ehr-fhir-workflow.png
date: 2026-07-08
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - FHIR
  - Arazzo
  - EHR
  - Workflows
---
When an EHR exposes a clean FHIR R4 API, it is tempting to think the integration problem is solved. Canvas Medical has one of the better developer-first FHIR surfaces I have looked at—a write-capable API across dozens of US Core resources—and yet the gap between "here are the resources" and "here is how you actually do a thing" is still wide. That gap is exactly where I have been putting Arazzo workflows, because the shape of an EHR integration is a sequence of FHIR calls, not a single resource read.

The most basic of these is the SMART on FHIR read flow, and I wrote it down as it actually runs: fetch the CapabilityStatement first, locate the patient, read them by id, and then pull the US Core data classes—conditions, observations, medications, allergies. That conformance-first step is not ceremony; it is the SMART App Launch pattern, and encoding it as the first step of the workflow makes the dependency explicit. From there the Canvas surface fans out into the workflows that clinicians actually live in.

I captured the ones that map to recognized patterns. There is a patient registration upsert that searches by business identifier and branches to update or create, which is the deduplicating intake step at the front of nearly every integration. There is appointment scheduling expressed as the Argonaut Schedule to Slot to Appointment sequence. There is medication prescribing with an allergy and active-medication safety check before the write, a lab order-to-results flow built on ServiceRequest and DiagnosticReport, care plan management across Goal, CarePlan, and CareTeam, and a questionnaire capture flow that follows the HL7 Structured Data Capture pattern underneath Da Vinci's documentation templates. Seven workflows, each one a real clinical sequence rather than a resource catalog.

What I like about doing this against an EHR specifically is that it exposes the assumptions. Writing the prescribing flow forced the allergy check to become a named step instead of an implied best practice. Writing the scheduling flow forced the free-slot search to be explicit rather than hand-waved. None of these steps invent operations—every one references a real operationId in Canvas's own OpenAPI—but stitching them into a workflow turns a pile of capabilities into something you can review, govern, and hand to the next person or the next agent without re-deriving the sequence from scratch.
