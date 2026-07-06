---
published: true
layout: post
title: Tamper-Evident Certificates for API Governance
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/tamper-evident-certificates-for-api-governance.png
date: 2026-07-20
author: Kin Lane
tags:
  - API Commons
  - API Governance
  - Certification
  - Trust
  - Tools
---
I have been working my way through the [governance tools I am building under API Commons](https://apicommons.org/tools/) one day at a time, and today's is the one I keep coming back to when I think about what governance is actually for. Most of the tooling in this space faces the producer — it helps the team that publishes an API check their own work. [API Certification](https://certification.apicommons.org) faces the other direction. It faces the consumer, the person standing in front of an API they did not build and quietly asking whether they should trust it. That question deserves a better answer than a marketing claim, and this tool is my attempt to give it one.

The idea is simple enough to explain in a sentence. A certificate is a small, portable artifact that attests a specific API description passed a named ruleset at a chosen profile threshold, on a date. It carries a SHA-256 fingerprint computed over the canonical API description plus the ruleset identity and the profile, so anyone holding the certificate can recompute that fingerprint against the API they actually have in hand. If the API has drifted by even a single character, or if the certificate was forged, the recomputed fingerprint will not match and the certificate fails. That is what tamper-evident means here. It is integrity, not identity — it proves what was certified, not who signed it. Signing and key management is a real and deliberate follow-up, but I wanted the honest, trustless core working first.

There are two modes, and they mirror the two sides of the trust relationship. In Issue mode you paste your API description along with the JSON result from running Spectral, name the ruleset, and pick a profile — baseline requires zero errors, standard requires zero errors and zero warnings, strict requires a fully clean run with nothing left at all. If the result meets the profile, the tool mints a certificate you can download, copy, or reference from an `apis.json` property. In Verify mode you paste a certificate plus the API description you hold, and the tool tells you plainly whether it is valid, tampered, expired, or simply not a passing certificate in the first place. As with everything else in this collection, it all runs client-side in the browser. Your API descriptions, your results, and your certificates never leave the page, because there is no server to send them to.

What I like about this one is how it composes with the rest of the stack. You run the Validator to produce the Spectral result, you certify that result here, and then you reference the certificate from your `apis.json` so that consumers can verify it before they ever write a line of integration code. Governance stops being a private ritual the producer performs and becomes a public signal the consumer can check. That is the whole point — turning "trust us" into something a machine or a person can independently confirm in a few seconds.

Go [try it](https://certification.apicommons.org), and take a look at the [rest of the API Commons tools](https://apicommons.org/tools/) while you are there. This is one more in the daily series I have been publishing, and like the others it is open and free to fork. If you want help standing up an actual certification program around it, that is exactly the kind of work I am happy to do with you.
