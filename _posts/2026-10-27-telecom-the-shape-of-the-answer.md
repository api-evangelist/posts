---
published: true
layout: post
title: 'Telecom Network APIs: The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/telecom-the-shape-of-the-answer.png
date: 2026-10-27
author: Kin Lane
tags:
  - Telecommunications
  - CAMARA
  - GSMA Open Gateway
  - Structured Outputs
  - Determinism
  - Standards
  - APIs
---
Last week I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), and how batch-invariant inference, deterministic sampling, and schema-constrained output make valid JSON table stakes and move the hard problem to agreeing on the shape. I want to walk that idea through one industry at a time, and I am starting with the one that has done the most to write its shapes down in the open: telecom network APIs.

## The answer this industry needs

In telecom the answer a model produces is rarely the end of anything. It is a decision that feeds the next API call. Should this bank transfer trigger a SIM swap check before it goes through, and over what window? Does this login need the network to confirm the phone number, or is the one-time password enough? What quality of service does this video session or remote inspection need, and for how long?

So the business outcome reads like this. Turn a transaction, a login, or a session request into a valid network API request body. Then turn the network's response into a valid decision your own systems can act on. Both halves have a shape, and in this industry somebody already agreed on it.

## The shape is already written down

[CAMARA](https://standards.apievangelist.com/store/camara/), the Linux Foundation project that defines mobile network capabilities as OpenAPI, publishes each API in its own repository under [github.com/camaraproject](https://github.com/camaraproject). GSMA Open Gateway is the operator commitment around those definitions. I read three of them on the main branch today.

- **[SIM Swap](https://github.com/camaraproject/SimSwap)** has two operations, `POST /check` and `POST /retrieve-date`. The check request is a `CreateCheckSimSwap` with a `phoneNumber` and a `maxAge` in hours, an integer from 1 to 2400 with a default of 240. The answer is a `CheckSimSwapInfo` with one required boolean, `swapped`. The date operation returns a `SimSwapInfo` with `latestSimChange`.
- **[Number Verification](https://github.com/camaraproject/NumberVerification)** exposes `POST /verify`, which answers with a required `devicePhoneNumberVerified` boolean, and `GET /device-phone-number`.
- **[Quality on Demand](https://github.com/camaraproject/QualityOnDemand)** exposes `/sessions`, `/sessions/{sessionId}`, `/sessions/{sessionId}/extend`, and `/retrieve-sessions`. A `CreateSession` takes a `device`, a `qosProfile`, and a required `duration` in seconds. The session comes back with a `QosStatus` enum of `REQUESTED`, `AVAILABLE`, or `UNAVAILABLE`.

That is about as constrained-decoder-ready as an industry gets. A boolean, a bounded integer, a three-value enum. The one place the shape opens up is `QosProfileName`, which the spec describes as a string pattern that may be a UUID, a predefined `QOS_S`, `QOS_M`, `QOS_L` or `QOS_E`, or a descriptive name, with the real list coming from each operator through the QoS Profiles API. That is honest of the spec, and it tells you exactly where the vocabulary has to come from.

On APIs.io, the [CAMARA standard page](https://apis.io/standards/camara/) lists 36 providers in the catalog that carry CAMARA, and the [GSMA Open Gateway page](https://apis.io/standards/gsma-open-gateway/) lists 5. Our [CAMARA profile](https://apis.io/providers/camara-project/) holds 21 of the project's OpenAPI definitions, from device swap and location retrieval to QoS sessions, QoS profiles, and phone number verify.

## What the catalog holds

The [Telecom Network APIs market](https://apis.io/markets/telecom-network-apis/) cohort has 25 members, and it splits cleanly into two worlds. The communications platforms lead. [Twilio](https://apis.io/providers/twilio/) scores 91.6 (exemplar), [Telnyx](https://apis.io/providers/telnyx/) 86.1 with the highest agent readiness in the cohort at 78.6, [Infobip](https://apis.io/providers/infobip/) 84.9, [Sinch](https://apis.io/providers/sinch/) 71.5, and [Vonage](https://apis.io/providers/vonage/) 71.3. The operators sit lower. The highest-scoring carrier is [Orange Business](https://apis.io/providers/orange-business/) at 65.3. Verizon is 56.7, América Movil 55.7, MTN Group 52.1, and AT&T, Telstra, and Kaleyra sit around 43 to 44 at the bottom of the cohort. [Aduna](https://apis.io/providers/aduna/), the operator aggregator, is outside the cohort and scores 32.3, thin.

That gap matters for this argument because the CAMARA shapes live with the operators, and the operators publish the least around them. When I searched every provider's OpenAPI folder for the CAMARA SIM Swap response field `swapped`, I found SIM or device swap contracts at [Orange Business](https://apis.io/providers/orange-business/), [Telefónica](https://apis.io/providers/telefonica/), [Telkomsel](https://apis.io/providers/telkomsel/), América Movil, and Nokia Network as Code, alongside the CAMARA and GSMA definitions themselves. `devicePhoneNumberVerified` shows up at Infobip, Orange, Telefónica, and Nokia. The `QOS_` profile names appear most at 3GPP, then CAMARA, GSMA, Telefónica, Orange, and Nokia. [AT&T](https://apis.io/providers/att/) has SIM Swap, Number Verification, and Quality on Demand contracts too, but those three are ones API Evangelist authored from AT&T's documentation, not files AT&T published, and I want to be clear about that.

Around the contracts, the supporting artifacts are uneven. Bandwidth carries 71 JSON Schema files, 54 [JSON Structure](https://apis.io/json-structure/) definitions, and 54 [examples](https://apis.io/examples/). AT&T carries 82 schemas and 72 examples. Telnyx has 236 [schemas](https://apis.io/schemas/), Sinch 188, Twilio 183, and Twilio is the only cohort member with [Arazzo workflows](https://apis.io/arazzos/), 29 of them. Most of the operators carry an [OpenAPI](https://apis.io/apis/) folder and little else. Swisscom, Optus, Orange Business, MTN Group, and KPN have no JSON Schema, JSON Structure, or examples folder in the catalog that I can find.

## What determinism changes here

Three things make deterministic, constrained inference matter more in telecom than in most places.

The first is fraud and audit. A SIM swap check sits in front of money movement and account recovery. If a model decides that a transfer warrants a check with a `maxAge` of 72, a bank needs to show a regulator or a customer why, and it needs to get the same decision when it replays the same input next month. Batch-invariant, deterministic sampling makes that replay real. A constrained decoder makes it impossible for the model to ask for a `maxAge` of 5000 or invent a `swapped` value of "probably."

The second is the operator boundary. The spec itself notes that an operator may cap `maxAge` below 2400 because of local privacy rules, and returns `400 OUT_OF_RANGE` when you go past it. That is exactly the kind of constraint you add per operator, as an [overlay](https://apis.io/overlays/) on the CAMARA contract, and then hand to the decoder. The model only produces requests that operator will accept.

The third is volume and cost. Quality on Demand is paid network capacity. A model that maps a session to `QOS_L` for an hour when `QOS_M` for ten minutes would do is spending money, and a nondeterministic one spends it differently each time. Constraining the answer to the operator's own profile list from the QoS Profiles API, and getting the same answer for the same session, turns that into something finance can reconcile.

## Where it falls short

The shape is written down. The adoption around it is not. Thirty-six providers carry the CAMARA tag, but only a handful of them have a CAMARA contract I can find in their own published OpenAPI. The aggregator scores thin. The operators that would actually answer these calls sit at the bottom of the market cohort, with few schemas, examples, or workflows around their contracts. GSMA Open Gateway returned a 403 when our market work tried to read it, and Nokia's supported-networks list is client-rendered, so even the question of who answers which API in which country is hard to get as data.

The other gap is the vocabulary. `QosProfileName` is deliberately open, so the enum a decoder needs lives in each operator's QoS Profiles response, not in the standard. I can't find any operator in the catalog publishing that list as a [vocabulary](https://apis.io/vocabularies/) or schema. Until they do, every team building on Quality on Demand will write its own.

Telecom did the hard part already. It agreed on the questions and the contract, in the open, under a foundation. What it needs now is for the operators to publish their side of that contract as completely as the communications platforms publish theirs, so a model can be told exactly what shape the answer has to take, and give that answer the same way every time.
