---
published: true
layout: post
title: 'Register Patients, Order Tests And Share Lab Results With FHIR'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/register-patients-order-tests-and-share-lab-results-with-fhir.png
date: 2026-11-09 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Fast Healthcare Interoperability Resources
  - Patient Registration Management
  - Diagnostic Results Management
  - Laboratory Services Management
  - Healthcare
  - Health IT
---

You run a clinic, a lab, a pharmacy or a small health software company, and the same patient keeps getting typed into three different systems. The front desk registers them, someone re-keys the lab order, and the results come back as a PDF that has to be attached by hand. What you want is for those systems to simply hand the information to each other. That is what [Fast Healthcare Interoperability Resources](https://apis.io/providers/fhir/), better known as FHIR (pronounced "fire"), is for. It describes health information as an API, which is a way for one piece of software to ask another for data or to do work, so your electronic health record, your lab system or an AI assistant can register a patient, place an order or read a result without anyone retyping it.

## What FHIR does

FHIR is not a company selling a product. It is a [specification developed by HL7](https://www.hl7.org/fhir/), the healthcare standards organization, and it defines a common set of building blocks for use across healthcare, in many clinical and administrative settings. Each building block is called a resource: a Patient, an Encounter, a Condition, a DiagnosticReport, an Immunization. Because every system that speaks FHIR describes a patient the same way and exposes it over the same kind of REST API, a hospital, a lab and an app built by a two-person startup can exchange records without writing a custom translation for each pair.

On APIs.io we break the specification into its resources, including [Care Teams](https://apis.io/apis/fhir/fhir-careteam-api/), [Conditions](https://apis.io/apis/fhir/fhir-condition-api/), [Encounters](https://apis.io/apis/fhir/fhir-encounter-api/), [Diagnostic Reports](https://apis.io/apis/fhir/fhir-diagnosticreport-api/), [Immunizations](https://apis.io/apis/fhir/fhir-immunization-api/), [Coverage](https://apis.io/apis/fhir/fhir-coverage-api/), [Devices](https://apis.io/apis/fhir/fhir-device-api/), [Goals](https://apis.io/apis/fhir/fhir-goal-api/) and [Locations](https://apis.io/apis/fhir/fhir-location-api/).

## What you can get done

Every FHIR resource follows the same pattern: search for records, create one, read one, replace it, change part of it, or delete it. Learn it once and it works everywhere. We map the operations to five business capabilities.

### [Patient Registration Management](https://apis.io/capabilities/patient-registration-management/)

Registration is where every visit starts: who the patient is, how to reach them, and how to tell them apart from someone with the same name. The Patient resource holds that demographic and identity data, so a check-in kiosk, a scheduling app or a referral partner can look someone up before creating a duplicate.

- `GET /Patient` searches for patients, for example by name or date of birth.
- `POST /Patient` registers a new patient record.
- `GET /Patient/{rid}` reads one patient's current record.
- `PATCH /Patient/{rid}` changes part of a record, such as a new phone number or address.

### [Computerised Provider Order Entry](https://apis.io/capabilities/computerised-provider-order-entry/)

Order entry means a clinician placing an order for a test, procedure or service in software rather than on paper. In FHIR that order is a ServiceRequest, and referral orders flow through the same resource.

- `POST /ServiceRequest` places a new order.
- `GET /ServiceRequest` searches existing orders, for a patient or a status.
- `GET /ServiceRequest/{rid}` reads one order.
- `PUT /ServiceRequest/{rid}` updates an order, for example when it is completed or cancelled.

### [Laboratory Services Management](https://apis.io/capabilities/laboratory-services-management/)

A lab tracks the specimens it collects: the blood draw, the swab, the biopsy. The Specimen resource records each sample so the collection site and the lab agree on what was taken and when.

- `POST /Specimen` records a collected specimen.
- `GET /Specimen` searches specimens.
- `GET /Specimen/{rid}` reads one specimen.
- `PATCH /Specimen/{rid}` changes part of a specimen record.

### [Diagnostic Results Management](https://apis.io/capabilities/diagnostic-results-management/)

Results are the reason the order existed. A DiagnosticReport holds lab and imaging results, so they can land in the chart, the patient portal or a follow-up reminder system instead of a fax tray.

- `POST /DiagnosticReport` publishes a new result report.
- `GET /DiagnosticReport` searches reports for a patient.
- `GET /DiagnosticReport/{rid}` reads one report.
- `PUT /DiagnosticReport/{rid}` replaces a report when a result is corrected.

### [Pharmacy & Medication Management](https://apis.io/capabilities/pharmacy-medication-management/)

When a pharmacy hands a medication to a patient, that is a dispense. The MedicationDispense resource records it, which helps a prescriber see what was actually picked up, not just what was prescribed.

- `POST /MedicationDispense` records a dispense.
- `GET /MedicationDispense` searches dispenses for a patient.
- `GET /MedicationDispense/{rid}` reads one dispense.
- `DELETE /MedicationDispense/{rid}` removes a record entered in error.

## Getting started

Because FHIR is a standard, you do not sign up with FHIR itself. You use it against a FHIR server: one your electronic health record vendor exposes, one a cloud provider hosts, or one you run yourself. Ask your current vendors whether they offer a FHIR API, and if so, which resources. The [HL7 FHIR documentation](https://www.hl7.org/fhir/) is the reference for every resource and how search works. Anything about cost depends on the server you use, and what we have recorded sits in the [pricing section](https://apis.io/providers/fhir/#pricing). On APIs.io you can browse the [FHIR profile](https://apis.io/providers/fhir/), the [Encounter API](https://apis.io/apis/fhir/fhir-encounter-api/), the [Diagnostic Report API](https://apis.io/apis/fhir/fhir-diagnosticreport-api/) and the [Immunization API](https://apis.io/apis/fhir/fhir-immunization-api/). Pick the one record your staff retypes most often, usually the patient or the lab result, and ask your vendor for the FHIR call that moves it for you.
