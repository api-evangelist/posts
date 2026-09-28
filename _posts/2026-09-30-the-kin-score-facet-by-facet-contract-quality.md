---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Contract Quality'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-contract-quality.png
date: 2026-09-30
author: Kin Lane
tags:
  - Kin Score
  - Contract Quality
  - OpenAPI
  - Provenance
  - Agent Readiness
  - APIs.io
  - APIs
---
This is part two of nine, one facet of the [Kin Score](https://apis.io/rating/) each business day. Yesterday I covered [Discoverability](https://apievangelist.com/2026/09/29/the-kin-score-facet-by-facet-discoverability/), which asks whether your API can be found. Today is [Contract Quality](https://apis.io/rating/facets/contract-quality/), which asks the question everything else rests on: is there a machine-readable contract for this API, and is it any good?

It is the heaviest facet in the score, 25% of the composite. It is 42 checks worth 211 points, grouped by the artifact each one reads: OpenAPI, AsyncAPI, GraphQL, FHIR, JSON Schema and JSON-LD.

## What it measures

The sub-score is what you earned divided by what applied to you. A check needing an artifact you do not publish at all, say an AsyncAPI document, leaves both sides of the fraction.

The checks that carry the most weight:

- **Publishes a machine-readable contract** (20 points). The largest single award in the rubric. OpenAPI, AsyncAPI, a GraphQL SDL or a FHIR CapabilityStatement all count, because SDK generation, mocking and agent tool-calling all start there.
- **The format-specific presence checks.** An AsyncAPI document (12), a FHIR CapabilityStatement (12), a published GraphQL schema rather than only a playground (10).
- **The craft inside an OpenAPI.** Summaries on 80% of operations (6), descriptions on 80% (6), tags (4), unique operationIds (4), a success response on every operation (5), a 4xx schema on at least half of them (4), and the share of operations carrying an example (4).
- **Servers you can actually call** (3 plus 5). A localhost server fails, and since 0.15 hosts are resolved in DNS. A templated host like `{region}.api.acme.com` still passes.
- **Security that is declared and current.** Security schemes defined (4) and applied (3), no implicit or password OAuth grant (4), no API key in the query string (3), and OAuth scopes that are actually enumerated (4).
- **Who operates it** (6). Whether the surfaces a contract describes are the provider's own to run.

Smaller rewards cover create/read/update/delete round trips, domain standards like SCIM or OData, webhooks and a published example corpus.

## Where the catalog stands

Across the 27,274 providers scored on 0.23:

- The mean sub-score is **16.2** and the median is **0.0**.
- **17,597 providers, 64.5%, score exactly zero.** Nearly two-thirds of the catalog has no contract I can read.
- **21 providers, 0.1%, score 75 or above.** Nobody scores 100.
- [New Relic](https://apis.io/providers/new-relic/) leads the facet at 80.6.

The zero line is the number that matters. Those companies either publish no contract or publish one I have not found, and I cannot tell you how much of the 64.5% is the second case.

The top end has also thinned. The facet page, built just before the re-score, counted 188 providers at 75 or above. On 0.23 it is 21. I have not broken that drop down check by check, but provenance is the obvious place to look.

## Provenance, and what 0.23 actually changed

The [London release](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) did not add or remove a contract quality check. It changed what an unmarked contract is worth. Since 0.8 every check in the OpenAPI block has been graded by who authored the document, and a spec API Evangelist modeled for you is credited at 0.25. Until 0.23 an OpenAPI with no marker either way got full credit. Now it gets **0.90**, and the same rule reaches the two JSON Schema checks.

You get the 10% back by saying the work is yours: a `method:` of declared, authored, published or self-reported, a `publisher:`, and a `source:` that resolves. The details are on the [provenance section of the rating page](https://apis.io/rating/#provenance).

When I measured it for this release, marker coverage was 7.6%. Most artifacts were unmarked because nothing had asked anyone to mark them, so this costs providers for a gap in my metadata. I accepted that, because at full credit a contract a company publishes and one I wrote for them read the same.

That is not hypothetical. [Stripe](https://apis.io/providers/stripe/) scores 65.8 on this facet across 71 contracts. [Segment](https://apis.io/providers/segment/) scores 65.9 across 23. Stripe publishes its OpenAPI. When I last checked, Segment's spec URLs returned a 401 and a 404, and what I hold was derived from its documentation. Neither corpus carries a single authorship marker, so the rubric cannot see the difference. The haircut does not fix that. It gives providers a reason to.

## Why it matters more with agents

An agent works from the contract, not the docs page. The summary is what it reads to pick an operation. The operationId becomes the tool name, and duplicates break that silently. The 4xx schema is how it recovers when a call fails. The example is how it learns a payload shape before sending one. Examples, error semantics and reversibility all show up again as [agent-readiness](https://apievangelist.com/2026/09/28/the-standards-that-make-your-business-agent-ready/) dimensions.

The [roadmap](https://github.com/api-evangelist/kin-score/blob/main/ROADMAP.md) for Stockholm (0.24.0) is blunt: marker coverage is the binding constraint, and every contract stamped with provenance at harvest time is a provider who gets the 10% back honestly. A lot of real specs are laid down by a script and then edited by a person. There is no special category for that, and there will not be one: if you finished it, mark it as authored, the same way you would anything else you wrote.

## What to do

1. **Publish a contract at a URL you control.** Twenty points and every downstream check depend on it. OpenAPI, AsyncAPI, GraphQL SDL or FHIR all count.
2. **Mark it as yours.** A `method:`, a `publisher:` and a resolvable `source:` take the credit from 0.90 back to full on every OpenAPI check.
3. **Fill in the operations.** Summaries, descriptions, tags and unique operationIds are 20 points of mostly editorial work.
4. **Document failure, not just success.** 4xx schemas and examples are what integrators and agents need most, and the parts most often skipped.
5. **Clean up your security block and your servers.** Drop implicit and password grants, get the key out of the query string, enumerate your scopes, and make sure every server resolves.

Every check, its rule and its points are on the [Contract Quality facet page](https://apis.io/rating/facets/contract-quality/) on APIs.io.

Tomorrow: Contract Governance.
