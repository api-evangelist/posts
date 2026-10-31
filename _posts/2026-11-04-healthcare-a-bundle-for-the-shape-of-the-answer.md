---
published: true
layout: post
title: 'Healthcare: A Bundle For The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/healthcare-a-bundle-for-the-shape-of-the-answer.png
date: 2026-11-04
author: Kin Lane
tags:
  - Healthcare
  - FHIR
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
Earlier this week I wrote that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/), and started building bundles that pair a JSON Schema with OpenLint-format rules so an inference run can carry its whole contract. When I [looked at healthcare](https://apievangelist.com/2026/10/21/healthcare-the-shape-of-the-answer/) in the first series, I said a model constrained to US Core can't invent a code, but it can still pick the wrong one, which is why the check after generation matters. This is what that check looks like.

## The answer I picked

Turn a clinician's note into a draft MedicationRequest. The [US Core profile](https://hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html) says each one must have a status, an intent, a medication and a patient, and must support things like a prescriber, the date written, and the free-text dosage. I kept to that small core, because a real profile with its value sets is far bigger than anything I'd want to put on a page. This is a subset, and it doesn't make anything US Core conformant.

```yaml
bundle:
  id: healthcare-medication-request
  version: 0.1.0
  status: illustrative            # a subset, not the US Core profile and not conformance
  answers: Turn a clinician's note into a draft MedicationRequest
  derived_from:
    - https://hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html
    - https://hl7.org/fhir/R4/medicationrequest.html
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 1024, seq_seed: 20261104}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [note, encounterDate, patient, requester, candidates]
  rules:
    patient-is-a-reference:
      description: The chart must already tell us who the patient is
      given: $.context.patient
      severity: error
      then: {function: pattern, functionOptions: {match: "^Patient/[A-Za-z0-9.-]{1,64}$"}}
    candidates-resolved:
      description: A terminology step must resolve RxNorm candidates before inference
      given: $.context.candidates
      severity: error
      then: {function: length, functionOptions: {min: 1}}
shape:
  type: object
  additionalProperties: false
  required: [resourceType, status, intent, medicationCodeableConcept, subject, requester, authoredOn, dosageInstruction, evidence]
  properties:
    resourceType: {const: MedicationRequest}
    status: {enum: [draft]}       # a model drafts; a clinician activates
    intent: {enum: [proposal, plan, order]}
    medicationCodeableConcept:
      type: object
      additionalProperties: false
      required: [coding]
      properties:
        coding:
          type: array
          minItems: 1
          maxItems: 1
          items:
            type: object
            additionalProperties: false
            required: [system, code]
            properties:
              system: {const: "http://www.nlm.nih.gov/research/umls/rxnorm"}
              code: {enum: "${context.candidates}"}
    subject:
      type: object
      additionalProperties: false
      required: [reference]
      properties:
        reference: {const: "${context.patient}"}
    requester:
      type: object
      additionalProperties: false
      required: [reference]
      properties:
        reference: {const: "${context.requester}"}
    authoredOn: {type: string, format: date}
    dosageInstruction:
      type: array
      minItems: 1
      items:
        type: object
        additionalProperties: false
        required: [text]
        properties:
          text: {type: string, minLength: 3, maxLength: 240}
    evidence:                     # stripped before the resource is sent to a server
      type: array
      minItems: 1
      items: {type: string}
output:
  rules:
    dose-comes-from-the-note:
      description: Every cited passage must appear in the note
      given: $
      severity: error
      then:
        function: quotedInSource
        functionOptions: {quotes: answer.evidence, source: context.note}
    real-calendar-date:
      description: The decoder checks date syntax, so check the calendar here
      given: $.answer
      severity: error
      then:
        function: schema
        functionOptions:
          schema:
            type: object
            properties:
              authoredOn: {type: string, format: date}
    written-after-the-encounter:
      description: A medication cannot be authored before the encounter
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: context.encounterDate, later: answer.authoredOn}
    single-dosage:
      description: Multiple dosage lines go to a pharmacist
      given: $.answer.dosageInstruction
      severity: warn
      then: {function: length, functionOptions: {max: 1}}
on_failure:
  error: {retry: 2, change: [seq_seed, append_rule_messages_to_prompt], then: send_to_human}
  warn: {action: flag_for_review}
  always: {action: clinician_signs_before_status_changes}
```

## Where the design choices are

**The model can only draft.** FHIR's `status` allows `active`, `on-hold`, `completed` and more, and I narrowed the enum to `draft`. That is the strongest safety property in the whole file and it took one word. A decoder can't produce an active order if `active` isn't a token sequence it can reach. A person signs before the status changes, which `on_failure.always` records as a requirement of the process.

**The patient isn't a guess.** `subject.reference` is a `const` bound from the request. The chart already knows who this is, so there is no reason to give a model the chance to get it wrong. Same for the requester. Anything the system already knows should come in as context and be bound into the shape, not extracted.

**RxNorm codes come from a step before inference.** I could have given the decoder an enum of every RxNorm code, or just a digit pattern. Instead a terminology step resolves candidates from the note, and only those become the enum. That is why `candidates-resolved` is an input rule, because an empty enum raises a compiler error, and the input rule stops that request politely instead. The model then chooses among real drug concepts.

**The answer has to show its work.** `evidence` isn't a FHIR field. It's a list of passages from the note, stripped before the resource goes to a server, and `dose-comes-from-the-note` checks that each passage appears in the note verbatim. Note that this works because the rules can see both the request and the answer.

## How it runs as part of inference

1. **Input rules run first.** No RxNorm candidates or a name where a `Patient/` reference should be, and the request stops before anything compiles.
2. **The context is bound and the shape compiled.** It took 142 milliseconds on my laptop against DeepSeek's real tokenizer, the first time through.
3. **The decoder generates under a mask.** With the patient, requester and status fixed, the only freedom left is the choice of candidate, the intent, the date, the dosage text and the evidence.
4. **Output rules run on the note and the answer together.**
5. **Failures retry with a new seed and the rule's message, up to twice, then go to a person.** Nothing here ends at a server. It ends at a clinician.

## What the fixtures showed

I wrote this test note: "Start lisinopril 10 mg by mouth once daily for hypertension." The candidates were RxNorm 314076, lisinopril 10 MG oral tablet, and 314077, the 20 MG tablet. These are hand-written documents testing each path, not model output.

- A correct draft passed everything.
- A draft with **the 20 mg code**, a dosage of "40 mg by mouth twice daily", a date of February 31, and a fabricated quote **was accepted by the decoder**. The rules caught the fabricated quote, the impossible date and a date before the encounter.
- An `active` order for a different patient was refused by the decoder outright.
- A request naming "Jane Doe" with no candidates was stopped by the input rules.

Read the second result carefully, because it contains the limit I most want to be honest about. **No rule in this bundle catches the wrong candidate on its own.** The fixture got flagged for the quote and the dates. Change only the code to 314077, cite a true passage, and every check in this file passes while the record says 20 mg and the note says 10. I can think of rules that help, such as binding each candidate's strength as context and comparing it to the cited dose, and I'd add one before anyone used this. But it would be a new rule for a failure I imagined, and there are others I haven't imagined. This is the difference between constrained and correct, in the most consequential place in the series.

## What's still missing

The gap I named before is still the gap. A real version needs each server's profiles, since a generic R4 schema is too loose and what a given server will accept lives in its CapabilityStatement. The real validator is a FHIR server's `$validate` and a terminology service, not my rules, so this bundle would sit in front of those and not replace them. Note that I also never touched the Da Vinci prior authorization Bundle, the answer I called the most valuable one in this industry. A Bundle of a Claim and its referenced resources needs rules that check references between entries, and it's a much bigger file than this one.

Dosage is free text here on purpose, because structured dose and timing are where FHIR gets deep, and getting those wrong carries real consequences. I would rather show a small shape with a person at the end of it than a big one that implies more certainty than it has.

Healthcare wrote its shapes down better than almost anyone. What this exercise showed me is how much of a safe answer comes from what you remove from the shape: statuses a model may not set, patients it may not choose, codes it may not reach. The rest still needs a clinician.
