---
published: true
layout: post
title: Cerner Oracle Health and the SMART on FHIR Sequence
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/cerner-oracle-health-and-the-smart-on-fhir-sequence.png
date: 2026-07-01
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - FHIR
  - Arazzo
  - SMART on FHIR
  - Workflows
---
The Cerner Millennium platform, now Oracle Health, is one of the EHRs that a huge slice of the country's clinical data actually lives behind, so its FHIR R4 API is worth understanding as a sequence and not just a list of resources. The spec I have for it is intentionally lean—metadata, a handful of patient-scoped searches, and a generic create, update, and patch against any resource type. That leanness is a good thing for this exercise, because it makes the SMART on FHIR sequence stand out clearly.

I wrote three Arazzo workflows against it. The first is the SMART on FHIR patient retrieval flow: fetch the CapabilityStatement, locate the patient, and then pull conditions, encounters, and procedures. That conformance-first step is the SMART App Launch contract, and putting it at the head of the workflow is the honest way to represent how a real app boots against Millennium. The second is a conformance discovery flow that reads the server metadata and CapabilityStatement and then enumerates the operation and structure definitions the server advertises—the homework every integrator does before writing a line of clinical code.

The third is a clinical resource write-back flow that uses Cerner's generic create and update operations to document back into the EHR after locating the patient the resource references. I kept it deliberately generic because that is how the API models writes—one create path parameterized by resource type—and pretending otherwise would invent operations that do not exist. Every step in all three workflows references a real operationId from Oracle Health's own OpenAPI, and the parameters and outputs are inlined so the flow reads on its own.

Writing these down for one of the dominant EHRs is the kind of thing I wish more of the ecosystem did out loud. The SMART on FHIR pattern is a genuine standard, but it tends to be re-implemented from documentation over and over. An Arazzo file turns that pattern into a portable artifact you can compare across vendors—Cerner next to Canvas next to anyone else—and that comparability is what makes governance and procurement conversations in healthcare actually tractable.
