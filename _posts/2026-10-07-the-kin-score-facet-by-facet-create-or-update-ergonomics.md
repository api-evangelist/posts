---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Create-or-Update Ergonomics'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-create-or-update-ergonomics.png
date: 2026-10-07
author: Kin Lane
tags:
  - Kin Score
  - Upsert
  - Write Safety
  - Agent Readiness
  - OpenAPI
  - APIs.io
  - APIs
---
This is part seven of nine, one [Kin Score](https://apis.io/rating/) facet each business day. [Yesterday I covered Operational Transparency](https://apievangelist.com/2026/10/06/the-kin-score-facet-by-facet-operational-transparency/). Today is [Create-or-Update Ergonomics](https://apis.io/rating/facets/upsert/), and it asks one question: if you accept writes, can a caller create-or-update a record in one call, keyed on an identifier they already hold, and find out afterwards which of the two actually happened?

## The first facet that asks whether an API is safe to call twice

This is the newest facet in the rubric, added in 0.20.0 on September 7th. The contract facets ask whether an API is described and callable. None asked what happens when the same write arrives twice. For most APIs you search first, then branch into a create or an update, and the day somebody skips the search, the customer's records grow a duplicate. The roadmap entry from that release put the share of write-accepting providers in that position at 82.8%.

Four checks, 36 points, and I priced them by what they commit the provider to, not by how common they are:

- **The response says which branch ran (14 points).** A boolean like `created`, `is_new` or `was_created` on the create-or-update response. When it shipped, 1.4% of the scorable providers had it. Without it, telling an insert from an update means reading the record again, the search the upsert was supposed to remove.
- **The caller declares the key to match on (10 points).** `idProperty`, `external_id`, `match_on`, `on_conflict`, or an alternate-key path like Salesforce's `PATCH /sobjects/{OBJECT}/{FIELD}/{value}`. This is where identity resolution changes hands: the provider agrees to match on an identifier you own, instead of making you look up theirs first. 9.8%.
- **A named create-or-update operation (8 points).** It's discoverable from the contract without reading prose. 12.3%.
- **Duplicate handling stated at all (4 points).** A conflict flag on create, or a sentence that says "creates it if it does not exist." It's real, but you can't find it from the shape of the contract. 9.2%.

The short version: naming an operation `upsert` is a claim, accepting the caller's key is a commitment, and telling the caller which branch ran is the only one of the three they can check afterwards.

One signal is left out on purpose: a documented 200-versus-201 split. A 200/201 pair gets documented for plenty of unrelated reasons, and counting it would have matched 569 providers against 94 with a real discriminator field. It's recorded and scores nothing.

## What "applies" means

This is a conditional facet, and the condition is the whole design. It applies only to providers that accept writes. A weather API or a reference dataset can't upsert, and scoring it zero would dock it for a capability it has no business having. So every provider lands in one of three states:

- **Scorable:** a first-party contract parsed and it has write operations. A zero here is a real zero.
- **Read-only:** a contract parsed with no writes. Not applicable.
- **No specs:** nothing parseable to read. Not applicable.

When it shipped, 7,955 providers held a parseable first-party contract, 1,125 accepted no writes, and 6,803 were scorable. Everyone else is neither measured nor penalized.

There's a second guard. Applied raw at a 10% weight, this facet would have docked 5,635 providers about six points each for lacking something almost nobody had. So it's re-centered on its observed mean, 7.06 when it shipped: a provider at the mean is unchanged, above it gains, below it loses a little. It's the same correction the regulatory facet got in 0.12.

## Where the catalog stands on 0.23

0.23.0 didn't touch this facet's checks or points. On the current provider pages:

- **6,794 providers are scored on it**, 24.8% of the catalog. Everyone else is not applicable.
- **5,138 of those score exactly zero**, 75.6% of the ones that accept writes.
- **The mean sub-score is 7.4 and the median is 0.**
- **28 providers score 75 or above.**

[HubSpot](https://apis.io/providers/hubspot/) scores 100.0. Its `POST /crm/objects/{version}/contacts/batch/upsert` is the reference implementation I built the facet around. [Salesforce](https://apis.io/providers/salesforce/) scores 72.2.

These numbers have limits. The facet reads contracts, so it measures what's declared, not what the API does at runtime, and an upsert that lives only in a help article scores as if it doesn't exist. The other three quarters of the catalog aren't bad at this. We just can't see them.

## Why agents care

An agent retries. A request times out, it doesn't know whether the write landed, and it sends it again. With a plain `POST` create, that retry is a duplicate. With an upsert keyed on an identifier the agent already holds, the retry lands on the same record. With a discriminator in the response, the agent can tell what happened without another round trip, and it can report it accurately.

That's why this facet sits next to the idempotency check in agent readiness, where no provider reaches agent-native without idempotency and error semantics. An idempotency key protects one request. A natural-key upsert protects the record.

The roadmap says plainly that this facet opens the write-safety gap rather than closing it. Idempotency keys, conditional requests with `If-Match` and ETags, and documented retry semantics are all measurable from the same contracts, and I'd rather they arrive together in a later version than get bolted onto this facet. They aren't in the Stockholm queue (0.24.0, October 13th). The [0.23 release post](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) covers what just changed.

## What to do

1. **Put the discriminator in the response.** A `created: true|false` on your create-or-update response is worth 14 of the 36 points, and hardly anyone has it.
2. **Let callers match on their own key.** Accept an `external_id` or `idProperty` on writes, or expose an alternate-key path.
3. **Name the operation.** Put `upsert` or "create or update" in the path, operationId or summary so the contract says it without prose.
4. **Don't hide it in a paragraph.** A `PUT /{id}` that quietly creates missing records earns a fraction of the credit until the contract's shape says so.
5. **Publish the contract that carries it.** If we can't parse your OpenAPI, this facet can't see any of the above.

Every check and its rule is on the [Create-or-Update Ergonomics facet page](https://apis.io/rating/facets/upsert/).

Tomorrow: Open Source Surface.
