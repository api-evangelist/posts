---
published: true
layout: post
title: Mapping Particle Health Record Retrieval as Arazzo Workflows
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/mapping-particle-health-record-retrieval-as-arazzo-workflows.png
date: 2026-06-29
author: Kin Lane
tags:
  - APIs
  - Healthcare
  - FHIR
  - Arazzo
  - Interoperability
  - Workflows
---
Most of the healthcare APIs I profile describe themselves one endpoint at a time, but nobody actually integrates one endpoint at a time. The real work is a sequence: authenticate, register a patient, kick off a query across the national networks, wait for it to finish, and then go collect what came back. That sequence is the product, and it usually lives in a quickstart guide or a developer's head rather than in anything a machine can read. So I have been taking the providers in my API catalog and writing their multi-step flows down as Arazzo workflows, starting with the ones where the sequence really matters. Particle Health is a perfect example.

Particle is connected to all three nationwide health information networks, and its API is built around an asynchronous query model. You submit a patient demographic, you launch a query, you poll until it is complete, and only then do you pull the consolidated record. I captured that as a national patient record retrieval workflow, with the polling step expressed as an explicit success criteria so the wait is part of the contract and not an afterthought buried in prose. I did the same for the FHIR R4 flavor of the flow, where you create a FHIR Patient, run a FHIR-native query, and then search and read individual US Core resources out of the returned bundle.

I did not stop at retrieval, because the interesting parts of Particle map cleanly onto the HL7 Da Vinci implementation guides. There is an ADT event subscription workflow that lines up with the Da Vinci Alerts and Notifications pattern—register a patient, subscribe to admit, discharge, and transfer events, and collect the resulting HL7 v2 messages. There is a clinical document exchange workflow in the spirit of Da Vinci CDex, and a network provider discovery workflow that reads the provider map to see which organizations actually held records for a patient. Each one references a real operationId from Particle's own OpenAPI, and each step spells out its parameters and outputs inline so you can read the flow without opening the underlying API description.

The point of doing this is not to produce more YAML. It is to make the standard-shaped workflows in healthcare explicit, portable, and reviewable. When the patient record retrieval sequence lives in an Arazzo file, you can diff it, you can govern it, you can hand it to an agent, and you can compare how two different vendors implement the same Da Vinci pattern. That is the governance angle I keep coming back to: the workflow is where interoperability either happens or quietly falls apart, and writing it down is the first honest step toward managing it.
