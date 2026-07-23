---
published: true
layout: post
title: "Standards and Artifacts: Why the Agentic Turn Rewards What Australia's Banks Already Ship"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/standards-and-artifacts-why-the-agentic-turn-rewards-australias-banks.png
date: 2026-08-28
author: Kin Lane
tags:
  - Standards
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - Agents
  - Banking
  - CDR
---

I want to zoom out from the banks for a minute, because the reason I score any sector at all is not to rank companies — it's that the reader is changing species. For twenty years the audience for a bank's digital surface was a human: a customer in an app, a developer reading docs, an analyst on a call. You could evangelize that audience — tell a story, run a workshop, inspire a build. **You cannot evangelize a machine.** An agent will never read your blog, sit in your talk, or feel anything about your brand. It needs a machine-consumable contract and the affordances to act, and it evaluates you only on what it can parse.

The agentic turn calls the bluff on any digital strategy that was never backed by real machine-readable substance. And that is exactly why the Australian banking sector — which I just scored end to end in [The State of Australian Banking APIs](https://papers.apievangelist.com/papers/state-of-australian-banking-apis/) — is such a clean specimen. The Consumer Data Right mandate, whatever its product failures, *forced the substance*.

## The mandate dragged a whole sector across the machine-readability line

Fifty banks publish a valid OpenAPI, a consistent auth model, standardized errors, and a discoverable contract — the exact machine-readable foundation most of the world's APIs still lack. Discoverability across the sector scores 99 out of 100. The CDR regime dragged an entire industry across the machine-readability line that most sectors are still arguing about. The pipes an agent needs are in.

That is genuinely rare. When I read a typical enterprise API estate, the very first artifact — a valid OpenAPI, sitting where an agent would look for it — is the thing that's missing. Australia's banks have it by mandate, on every single institution, whether they wanted it or not. If you're building agentic tooling, that uniform, ubiquitous contract is a gift.

## But a parseable contract is not yet an actionable one

Here's the catch, and it's the part every sector — not just banking — needs to internalize. Machine-readable is not the same as agent-*actionable*. Three things stand between the two, and Australia's banks are missing all three:

- **Semantics.** A machine can read that a field is called `productCategory`; it cannot infer what the value *means* without a resolvable vocabulary. Humans "just figure it out," so the semantic layer — JSON-LD, a mapped vocabulary — is perennially skipped. Agents can't skip it, and a thin description produces the *wrong* call, confidently.
- **Onboarding built for machines.** CDR accreditation is a months-long human process. Agentic consumption needs a scoped credential, a rate limit, and a quota provisioned in a single machine-speed round trip. The build-it-and-they-will-come era is over; the get-out-of-the-developer's-way era is over too — agentic consumption looks like a DoS attack, which is exactly why rate limits (published by *two* of the fifty banks) become the front-line business control.
- **Action, not just read.** The whole CDR regime is `GET`. The interesting agentic future — an agent that reconciles, moves, and optimizes your money — requires write surfaces the mandate deliberately withheld.

## The artifact stack an agent actually reaches for

The standards discipline that matters here is not exotic, and it's the same stack whether you're a bank or a SaaS platform. It is **OpenAPI** for the surface, **JSON Schema** for the objects, **JSON-LD** for the semantics, **AsyncAPI** for the events, and a **machine-readable catalog** to index it all — governed in *one* pipeline, because an agent will reach for every one of those artifacts in a single task, not one at a time. It'll read the OpenAPI to find the operation, the schema to shape the payload, the vocabulary to interpret the fields, the event contract to know what happens next, and the catalog to find you in the first place. Any one of them missing and the agent stalls or guesses.

Australia's banks have the first two by mandate. They are missing the semantics, the events (two banks), and machine-speed onboarding (essentially none). That is not a moonshot list — it's a punch-list. And whoever executes it first doesn't just top a ranking; they own agentic banking in that market, because everyone else is starting the same product work from zero.

This is the broader lesson I keep landing on across every sector I score: **the agentic turn does not reward the loudest brand or the biggest balance sheet. It rewards whoever shipped the most complete, most consistent, most resolvable set of machine-readable artifacts.** Australia's mandate accidentally handed a whole sector the hardest-to-get half of that stack. The half that's left is cheap, unclaimed, and decisive.

I lay out the full artifact-by-artifact reading — including which two banks are already building past the mandate — in the sector report: **[The State of Australian Banking APIs](https://papers.apievangelist.com/papers/state-of-australian-banking-apis/)**. Every provider's artifacts are live in the open catalog at [APIs.io](https://apis.io), scored on the same rubric. The pipes are in. The question is who builds the actionable layer on top of them first.
