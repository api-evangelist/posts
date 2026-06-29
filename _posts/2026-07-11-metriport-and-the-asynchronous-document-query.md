---
published: true
layout: post
title: Metriport and the Asynchronous Document Query
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/metriport-and-the-asynchronous-document-query.png
date: 2026-07-11
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - FHIR
  - Arazzo
  - Interoperability
  - Workflows
---
Metriport is an open-source take on health data interoperability, and like most of the record-retrieval platforms its API is fundamentally asynchronous. You do not ask for a patient's documents and get them back in the response; you start a query, you wait, and you collect. That shape is exactly what gets lost when an API is documented endpoint by endpoint, and it is exactly what an Arazzo workflow is good at making explicit.

The document retrieval workflow I wrote captures the full loop: create the patient, start the document query, poll the query status until the download completes, list the documents, and then fetch a download URL. The polling step uses a real status enum from Metriport's own schema rather than a hand-waved "done," so the wait is part of the contract. Alongside it I captured the consolidated FHIR query workflow, which is the same async pattern aimed at a structured FHIR R4 record—create the patient, start the consolidated query, poll the status that lives inside a queries array, and count the resources that came back.

The other two workflows cover the bookends of an interoperability integration. There is a patient matching workflow that follows the master patient index pattern—create a facility, create a patient, and run a demographic match—and a wearables connect workflow that captures Metriport's device side, creating a user, getting a connect token, and pulling activity and biometric data. The clinical and the consumer-health sides of the platform both come down to multi-step sequences, and both are clearer as a workflow than as a pile of endpoints. Every operationId is real, pulled from Metriport's spec.

What I keep noticing as I do these is how much the asynchronous query pattern repeats across healthcare—Particle does it, Metriport does it, the document exchange networks all do it. Writing each one down as Arazzo, with the poll expressed honestly, turns a vague "it's eventually consistent" into a precise, reviewable artifact. That is the difference between documentation that describes a system and a workflow that can actually be governed and automated against.
