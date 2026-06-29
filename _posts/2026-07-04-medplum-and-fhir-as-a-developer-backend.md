---
published: true
layout: post
title: Medplum and FHIR as a Developer Backend
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/medplum-and-fhir-as-a-developer-backend.png
date: 2026-07-04
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - FHIR
  - Arazzo
  - Developers
  - Workflows
---
Medplum treats FHIR R4 as a developer backend, exposing the RESTful API as a generic create, read, update, search, and history surface parameterized by resource type. That generality is powerful, but it also means the meaningful workflows are entirely about how you sequence those generic operations—and that is precisely the kind of thing worth writing down as Arazzo so it does not stay locked in tribal knowledge.

There were already several Medplum workflows in my catalog from an earlier pass—upserting a patient, registering a patient with an observation, scheduling an encounter, finalizing an observation, running a bot—and I added three more that round out the core FHIR RESTful patterns. There is a resource CRUD workflow that creates, reads, updates, and searches a resource by type. There is a clinical data query workflow that finds patients by name, reads one, and then searches that patient's observations. And there is a resource versioning workflow that creates a resource, updates it to mint a new version, reads the full history, and then reads a specific version by id.

That versioning flow is the one I find most interesting, because FHIR's history and versioning semantics are a real standard that almost nobody exercises deliberately. Writing it down as a workflow—update mints a versionId, history lists them, read-version pulls one—makes the provenance story concrete instead of theoretical. Every step references a real operationId in Medplum's spec, with the resource type and id passed as path parameters and FHIR bodies sent as application/fhir+json, so the flow is self-contained and executable on its own.

A generic FHIR backend is the best argument I know for capturing workflows separately from the API description. The OpenAPI tells you that you can create any resource type; it cannot tell you that registering a patient, attaching an observation, and finalizing it is a sequence with an order that matters. The Arazzo files carry that ordering, and that is what makes a developer-first FHIR platform something you can actually govern rather than just call.
