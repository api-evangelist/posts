---
published: true
layout: post
title: A Summary of Version 0.12 of the Kin Score
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-summary-of-version-012-of-the-kin-score.png
date: 2026-08-21
author: Kin Lane
tags:
  - Ratings
  - Kin Score
  - Agent Readiness
  - API Governance
  - Open Source
  - Regulation
  - APIs
---

I spent three days this week on version 0.12 of the [Kin Score](https://apis.io/rating/). Alongside it I have been processing three to five vendor submissions a day and adding roughly five hundred new providers out of venture capital, secondary market, and industry research. I have also been working through the top industries, areas, and tags to gather insight into how the score can better reflect what is actually being rolled out across each of those dimensions. That work is perpetual and will not stop, but 0.12 is a genuinely mature version of something I have been grinding on all summer.

The Kin Score is a self-service, open source, and automated way to apply what I would consider when profiling any API, through the same technology, business, and politics of APIs lens I am known for. It has six core facets in the composite score, and together they define the foundation of an API operation--not just the technical bits, but everything a consumer will care about when they bake your API into their own operations.

* **Contract Quality (25%)** — Technical depth and richness of the API contract artifacts: OpenAPI, AsyncAPI, JSON Schema, JSON-LD.
* **Developer Ergonomics (20%)** — How easy is it to get started? SDKs, CLI, portal, getting started, documentation, sandbox and console, MCP server, and authentication clarity.
* **Access Clarity (20%)** — What it costs, what you are permitted to do, and how you get in: plans, pricing, sign-up, terms of service, privacy, FinOps mapping, and compliance or trust. Renamed in 0.12 from "Commercial Clarity." For a free statutory interface, a public-interest open data API, or a provider whose own OpenAPI states "no authentication, no registration, no rate limit, no quota," there is no commercial surface to measure and only the permission and access questions apply. The old word described a subset of the catalog and was read as a deficiency by the rest of it.
* **Operational Transparency (13%)** — Does the provider expose how the API behaves operationally? Rate limits, status, change log, deprecation, and security disclosure.
* **Contract Governance (12%)** — Artifacts that describe and constrain the contract: rulesets, vocabulary, declared conformance, and overlays. Renamed in 0.12 from "Governance," because it never measured how an organization governs itself, and the standalone accountability layer now does. One word could not carry both. A note on what this facet actually scores: these checks read what a ruleset *declares*, not the result of running it. Spectral is never executed against the provider's own spec. The facet text through 0.11 described lint outcomes, which was the source of a reported and confirmed defect. Outcome-based linting is a separate artifact class and is not in this release.
* **Discoverability (10%)** — Can the API be found and understood from machine-readable metadata alone? Driven by apis.yml completeness, tagging, and identity signals.

With this release I also added two optional facets. They only apply to providers in specific industries and areas, or to providers who take a different approach to licensing and operations, and they give me additional dimensions that change how I compare providers and what they deliver.

* **Regulatory Posture (15%)** — For providers in a regulated industry only: does the API publish the consent, security, legal, and standards conformance posture its regime demands? Consent-scoped authorization through OAuth and OIDC scopes, a published security and vulnerability disclosure posture, terms and privacy as legal basis, and evidence of conformance to the industry's data standard. It is not applied to unregulated industries.
* **Open Source Surface (10%)** — For providers whose product is itself open source only: does the repository publish the maintainership surface a consumer needs in order to depend on it? A vulnerability disclosure path, a documented contribution route, a published release history, and a stated code of conduct. It is not applied to closed source products--a company with no CONTRIBUTING.md is not deficient, it is differently shaped. It is also not applied where the repository could not be read, because unreadable is not the same as missing.

While a lot of work went into the Kin Score over the summer of 2026, the first work on it began back in 2014. MuleSoft approached me to research what an API ratings system might look like, then never followed through, and I kept investing in the idea incrementally over the years as other API service providers came around asking the same question. It was the explosion of hype around agentic API consumption that finally pushed me over the line on finalizing the version I work with today. I got to work augmenting the base composite score with an agent readiness layer, which introduced fifteen dimensions that add up to a standalone agent readiness number.

* **Machine-Readable Contract (18)** — A public OpenAPI document exists, because agents call APIs from contracts, not HTML docs.
* **MCP Server (12)** — A Model Context Protocol server makes the API callable over a uniform tool surface. It is provenance-graded, so a derived candidate earns a fraction of a hosted one.
* **Agentic Access Contract (10)** — The provider publishes `x-agentic-access`, classifying each operation by action class, consequence, and human-in-the-loop escalation.
* **Machine-Readable Auth (10)** — The auth model is negotiable without reading prose, via OIDC discovery, declared scopes, and OpenAPI security schemes.
* **Idempotency (9)** — Mutating operations accept an idempotency key, so an agent's retry does not double-charge a card or open a duplicate ticket.
* **Stable Error Semantics (8)** — Errors come back as a typed, stable envelope an agent can branch on, instead of free text.
* **A2A Agent Card (8)** — The provider serves a conformant agent discovery manifest at the A2A well-known path. It is the one dimension that cannot be derived on their behalf.
* **Request/Response Examples (7)** — Meaningful examples let an agent learn payload shape before it makes a call.
* **Rate-Limit Signaling (7)** — Live rate limit state in response headers, so an agent knows when to back off and not just what the ceiling is.
* **Typed Event Surface (6)** — The event and webhook surface is described by a contract, using AsyncAPI or OpenAPI webhooks and callbacks, rather than example payloads.
* **Documented Reversibility (6)** — The contract says what can be undone, how, and within what window, before an agent acts.
* **Agent Skills (5)** — Packaged operating instructions for using the API, rather than leaving usage to be inferred from the spec.
* **Well-Known Catalog (4)** — A `/.well-known/api-catalog` linkset per RFC 9727, the canonical machine entrypoint an agent hits first.
* **Dry-Run / Simulate Mode (4)** — Destructive operations can be planned before they are committed. It is the only dimension that prevents damage rather than limiting it.
* **Consent & Bot Identity (3)** — Machine-readable AI usage preferences via AIPREF and Content-Signals, plus cryptographically identified agent traffic via Web Bot Auth and RFC 9421.

What I really like about this list is that it is not exclusive to agent readiness. It speaks to the overall programmability of the API surface area of a business. It gives me a repeatable way to quantify the level of investment being made by a startup, or by any other size of company, institution, or government agency. It quantifies the API foundation and the programmable surface area, and with this release it also quantifies standardization, open source investment, and regulatory compliance. I will keep refining and expanding it to strengthen the score across industries and areas of the tech sector, while still responding to the AI moment we are all working through.

The Kin Score reflects my experience and my belief about what the bar should be for the API space. It also reflects what I recently read in Cory Doctorow's *Enshittification*, in which he argues that competition, interoperability, and regulation are what discipline platforms and keep them from decaying. I see the Kin Score as one contribution to that. I am just getting started, too. I have enough data--more than 26,000 providers and over 116,000 APIs, with more added daily. Every conversation I have with a provider and every market I research puts new learning onto the Kin Score road map. I will probably ship one or two more minor releases before I stabilize it.
