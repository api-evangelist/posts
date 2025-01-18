---
published: true
layout: post
title: >-
  Creating A Postman Collection For The Fast Healthcare Interoperability
  Resources (FHIR) Specification
image: >-
  https://kinlane-productions2.s3.amazonaws.com/fhir/fhir-specification-screenshot.png
author:
  name: kinlane
tags:
  - Collections
  - Healthcare
  - Standards
  - FHIR
---
I have been working on healthcare APIs in government for over five years now, providing feedback regularly to the Blue Button API effort over at Health and Human Service (HHS), [including having them speak at APIStrat last year in Nashville](http://apievangelist.com/2018/09/18/talking-healthcare-apis-with-the-cms-blue-button-api-team-at-apistrat-in/), and [me speaking at the White House as part of the Blue Button 2.0 summit](http://apievangelist.com/2018/09/18/talking-healthcare-apis-with-the-cms-blue-button-api-team-at-apistrat-in/). I’m always looking for more ways that I can contribute to the healthcare API ecosystem, especially when it comes to investing in [the Fast Healthcare Interoperability Resources (FHIR) specification](https://www.fhir.org/). Now that I have bandwidth to invest in healthcare APIs again, I wanted to get my mind thinking about the potential of the FHIR specification, and find ways to help move the conversation forward.  
  
To jumpstart my work on the Fast Healthcare Interoperability Resources (FHIR) specification I generated [a Postman Collection](https://www.postman.com/collections/28f36ef9615b6e5b13b7) from the FHIR test server, reverse engineering the specification and creating my first draft of a collection to center my effort around. The Postman Collection covers the following resource types:

*   Account
*   ActivityDefinition
*   AdverseEvent
*   AllergyIntolerance
*   Appointment
*   AppointmentResponse
*   AuditEvent
*   Basic
*   Binary
*   BiologicallyDerivedProduct
*   BodyStructure
*   Bundle
*   CapabilityStatement
*   CarePlan
*   CareTeam
*   CatalogEntry
*   ChargeItem
*   ChargeItemDefinition
*   Claim
*   ClaimResponse
*   ClinicalImpression
*   CodeSystem
*   Communication
*   CommunicationRequest
*   CompartmentDefinition
*   Composition
*   ConceptMap
*   Condition
*   Consent
*   Contract
*   Coverage
*   CoverageEligibilityRequest
*   CoverageEligibilityResponse
*   DetectedIssue
*   Device
*   DeviceDefinition

*   DeviceMetric
*   DeviceRequest
*   DeviceUseStatement
*   DiagnosticReport
*   DocumentManifest
*   DocumentReference
*   EffectEvidenceSynthesis
*   Encounter
*   Endpoint
*   EnrollmentRequest
*   EnrollmentResponse
*   EpisodeOfCare
*   EventDefinition
*   Evidence
*   EvidenceVariable
*   ExampleScenario
*   ExplanationOfBenefit
*   FamilyMemberHistory
*   Flag
*   Goal
*   GraphDefinition
*   Group
*   GuidanceResponse
*   HealthcareService
*   ImagingStudy
*   Immunization
*   ImmunizationEvaluation
*   ImmunizationRecommendation
*   ImplementationGuide
*   InsurancePlan
*   Invoice
*   Library
*   Linkage
*   List
*   Location
*   Measure

*   MeasureReport
*   Media
*   Medication
*   MedicationAdministration
*   MedicationDispense
*   MedicationKnowledge
*   MedicationRequest
*   MedicationStatement
*   MedicinalProduct
*   MedicinalProductAuthorization
*   MedicinalProductContraindication
*   MedicinalProductIndication
*   MedicinalProductIngredient
*   MedicinalProductInteraction
*   MedicinalProductManufactured
*   MedicinalProductPackaged
*   MedicinalProductPharmaceutical
*   MedicinalProductUndesirableEffect
*   MessageDefinition
*   MessageHeader
*   MolecularSequence
*   NamingSystem
*   NutritionOrder
*   Observation
*   ObservationDefinition
*   OperationDefinition
*   OperationOutcome
*   Organization
*   OrganizationAffiliation
*   Parameters
*   Patient
*   PaymentNotice
*   PaymentReconciliation
*   Person
*   PlanDefinition
*   Practitioner

*   PractitionerRole
*   Procedure
*   Provenance
*   Questionnaire
*   QuestionnaireResponse
*   RelatedPerson
*   RequestGroup
*   ResearchDefinition
*   ResearchElementDefinition
*   ResearchStudy
*   ResearchSubject
*   RiskAssessment
*   RiskEvidenceSynthesis
*   Schedule
*   SearchParameter
*   ServiceRequest
*   Slot
*   Specimen
*   SpecimenDefinition
*   StructureDefinition
*   StructureMap
*   Subscription
*   Substance
*   SubstanceSpecification
*   SupplyDelivery
*   SupplyRequest
*   Task
*   TerminologyCapabilities
*   TestReport
*   TestScript
*   ValueSet
*   VerificationResult
*   VisionPrescription

[The FHIR API specification collection points at the FHIR test server by default](http://test.fhir.org/r4), and some of the paths need parameters dialed in a little better to work. Next I’ll work on cleaning up the ecollection some, making sure the properties have descriptions, and every request has examples defined. Then I’ll publish some documentation and a FHIR API mock server. Once I get to this point I’ll look at defining an environment, as well as tests that cover the entire surface area for all resource types. Rounding off the FHIR Postman collection a little more, making sure it isn’t just a definition, but a contract that can be used to certify any FHIR API deployment.  
  
I am looking to refresh my FHIR knowledge using the most recent 4.0 version of the healthcare specification, while also evolving my storytelling around how to define API contracts that can be applied to APIs spanning an entire industry. I’d say that the FHIR specification is the most important API definition we have right now. It is the most sophisticated openly defined industry schema that has both government and industry support, supportsing critical deployments like the Blue Button API for Medicare and the Department of Veterans Affairs, and is something that has the potential to impact millions of people. It’s a relevant API, and something I want to continue helping evangelize and invest in the API specification as part of my work with Postman.