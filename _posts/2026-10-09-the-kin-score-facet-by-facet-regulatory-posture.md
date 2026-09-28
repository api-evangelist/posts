---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Regulatory Posture'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-regulatory-posture.png
date: 2026-10-09
author: Kin Lane
tags:
  - Kin Score
  - Regulation
  - Compliance
  - Privacy
  - Agent Readiness
  - APIs.io
  - APIs
---
This is the last of nine posts, one Kin Score facet each business day. [Yesterday I covered Open Source Surface](https://apievangelist.com/2026/10/08/the-kin-score-facet-by-facet-open-source-surface/). Today is [Regulatory Posture](https://apis.io/rating/facets/regulatory/), and it asks one question: does your API publish the consent, security, legal and standards posture that the law reaching your business actually demands?

This facet is conditional by design. For most of its life it only applied when a provider matched a sector like banking, health or payments, so two thirds of the catalog was scored as if no law reached it. Since [the London release](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) a horizontal regime applies wherever no sector matches, so the facet now reaches everyone.

## What it measures

The facet is now 32 checks worth 164 points, up from 18 checks and 108 points before 0.23.0 added fourteen checks at four points each. The facet page was built before that re-score, so it still shows the old totals.

The foundation every regime shares:

- **Consent-scoped authorization (10 points).** Published OAuth or OIDC scopes, the machine-readable expression of least-privilege, consented access. The single strongest regulatory signal.
- **Authentication model, security posture and a vulnerability disclosure program (6 points each).** A regulated API that will not say how it authenticates, or where to report a hole, is not holding the line the regime draws.
- **Terms of service and a privacy policy (4 points each).** The legal basis for access and the statement of how data is handled.
- **Conformance to the standard named for your regime (8)**: FDX or Berlin Group for open banking, US Core for health, ACORD for insurance, Green Button for energy. A `Standard` tag credits an intention. Naming the instrument credits a fact.
- **Mandate implemented, not merely claimed (8).** Evidenced by a resolvable endpoint or register entry, not a compliance page. In energy, a claimed-but-unverifiable mandate scored below organizations under no obligation at all.

Then come regime-specific checks: FAPI for open banking, a served SMART-on-FHIR configuration for health, PCI scope and strong customer authentication for payments, CAMARA for telecom, and a published consent model.

The fourteen new checks are the horizontal layer: an SBOM, a declared support lifetime, an accessibility conformance report, AI transparency and training-data summaries, Global Privacy Control, a data-subject request route, a subprocessor list, data residency, incident notification, and exit assistance terms, among others. Each maps to a law that asks for it, from GDPR Article 28 to the Cyber Resilience Act.

## Where the catalog stands

Across the 27,360 provider pages built on 0.23.0, every one now carries this facet. 17,354 of them fall to the horizontal regime. The rest split across ten sectors, led by health at 3,102, payments at 1,398 and energy and utilities at 1,028, with employment and payroll, new in 0.23, at 435.

The mean sub-score is 15.2 and the median 12.5. 2,612 providers, 9.5%, score exactly zero. Not one provider scores 75 or above. The best score I can find anywhere in the catalog is 63.7.

That is the arithmetic of a bigger facet, not the catalog getting worse. When I shipped the new checks, a subprocessor list was on nine repos and the other thirteen on none. [Airwallex](https://apis.io/providers/airwallex/) shows it: one of the strongest payments providers in the catalog, a composite of 85.3, and a regulatory sub-score of 57.1 on the payments regime.

What protects providers is how the facet enters the composite. It is re-centred on the regime's own mean, so a provider at its peers' average scores exactly its base. I re-measured every regime mean against the 164-point facet: horizontal 15.6, health 12.4, payments 19.7, banking 20.6. Nobody is docked for checks nobody can pass yet.

## The bigger picture

I accepted near-zero adoption on purpose. A rubric that never asks can never drive adoption, and the published rubric is how a provider learns the artifact exists. The empty rows are the work list.

This matters for agents more than it looks. An agent choosing an API on someone's behalf is making a compliance decision, whether it knows it or not. A subprocessor list or data residency statement published where a machine can find it is something an agent can check before sending data somewhere. The same policy in a PDF behind a sales form is something only a lawyer will read.

## What to do

1. **Publish scopes, and say how you authenticate.** Sixteen points for the two artifacts most providers already have and never make findable.
2. **Point at a vulnerability disclosure path and your security posture.** Table stakes, and cheap.
3. **Pick off the horizontal checks.** A subprocessor list, a data residency statement, a data-subject request route, an incident notification commitment. Most companies already have these for their lawyers.
4. **Name your standard and prove the mandate.** Declare the specific standard in a conformance artifact, and make sure the mandated endpoint actually resolves.

Every check is on the [Regulatory Posture page](https://apis.io/rating/facets/regulatory/).

## The nine facets as one picture

That is the series. Six core facets make up the composite for every provider: Contract Quality at 25%, Developer Ergonomics and Access Clarity at 20% each, Operational Transparency at 13%, Contract Governance at 12% and Discoverability at 10%. Three conditional facets take a fixed slice only where they apply: Regulatory Posture at 15%, Open Source Surface and Create-or-Update Ergonomics at 10% each. Together they ask whether someone can find, trust and depend on your API.

Agent readiness sits beside the composite, never blended into it. It asks whether an agent can drive the API safely: a machine-readable contract, a live MCP server, negotiable auth, idempotency, stable errors. The two are correlated because they read the same artifacts, and work on these nine facets builds most of what an agent needs.

The whole rubric is at [apis.io/rating](https://apis.io/rating/), and the [London release post](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) has what changed last. Next up is Stockholm, 0.24.0, on October 13th. It settles a question London exposed, about artifacts a script laid down and a person then edited, without inventing a new category: if you finished it, you mark it as authored, like anything else you wrote. The numbers will move again. That is the point of versioning an argument rather than freezing one.
