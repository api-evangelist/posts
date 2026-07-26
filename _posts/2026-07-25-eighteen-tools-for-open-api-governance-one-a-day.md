---
published: true
layout: post
title: Eighteen Tools for OpenAPI Governance, One a Day
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/eighteen-tools-for-open-api-governance-one-a-day.png
date: 2026-07-25
author: Kin Lane
tags:
  - API Commons
  - API Governance
  - Spectral
  - Discovery
  - Tools
  - Agents
  - Roundup
---
For the last eighteen days I have introduced one [API Commons tool](https://apicommons.org/tools/) each morning, and this is the map of the whole run. I did it as a drip on purpose, because looking at the tools one at a time makes a point that a single big announcement would have buried: none of these is a platform you adopt, each is a small, sharp, open thing you can pick up on its own. Put them side by side, though, and they add up to a full governance and discovery stack that is Spectral underneath and portable all the way through. Here is every stop, in the order I published them.

- **[API Validator](https://apievangelist.com/2026/07/07/a-browser-first-governance-validator-for-your-api-specs/)** — lint OpenAPI, AsyncAPI, Arazzo, and JSON Schema in the browser, with nothing leaving the page.
- **[API Discovery](https://apievangelist.com/2026/07/08/a-browser-first-registry-for-the-api-artifacts-you-depend-on/)** — a browser-first registry for the API artifacts you depend on.
- **[API Documentation](https://apievangelist.com/2026/07/09/standalone-api-documentation-generated-from-apis-json/)** — standalone docs generated from APIs.json, with OpenAPI and Arazzo.
- **[API Reusability](https://apievangelist.com/2026/07/10/scoring-the-reusability-of-your-api-estate/)** — discover, inventory, and score how reusable your API estate really is.
- **[Spectral Reporter](https://apievangelist.com/2026/07/11/turning-spectral-output-into-a-report-people-actually-read/)** — turn a Spectral run into a self-contained HTML report people actually read.
- **[Spectral Ruleset Studio](https://apievangelist.com/2026/07/12/from-a-prose-style-guide-to-a-grounded-spectral-ruleset/)** — turn a prose style guide into an owned, grounded Spectral ruleset.
- **[Ruleset Commons](https://apievangelist.com/2026/07/13/a-registry-of-adoptable-provenanced-governance-rulesets/)** — a registry of adoptable, provenanced rulesets by region and industry.
- **[Spectral OWASP Ruleset](https://apievangelist.com/2026/07/14/a-grounded-spectral-ruleset-for-the-owasp-api-security-top-10/)** — the OWASP API Security Top 10 expressed as grounded Spectral rules.
- **[Governance Pipeline](https://apievangelist.com/2026/07/15/a-reference-pipeline-for-api-governance-in-ci-cd/)** — a reference PR-gating pipeline blueprint for governance in CI/CD.
- **[Governance Pipeline Auditor](https://apievangelist.com/2026/07/16/scoring-your-spectral-ci-setup-against-a-maturity-rubric/)** — score your existing Spectral CI setup against a maturity rubric.
- **[Governance Coverage](https://apievangelist.com/2026/07/17/how-much-of-your-api-do-your-rules-actually-check/)** — measure how much of your API description your rules actually examine.
- **[Governance Waivers](https://apievangelist.com/2026/07/18/making-governance-exceptions-sanctioned-owned-and-expiring/)** — make exceptions sanctioned, owned, and expiring instead of ad-hoc.
- **[API Governance Graph](https://apievangelist.com/2026/07/19/binding-governance-building-blocks-into-one-navigable-graph/)** — bind the governance building blocks into one navigable graph.
- **[API Certification](https://apievangelist.com/2026/07/20/tamper-evident-certificates-for-api-governance/)** — issue and verify tamper-evident governance certificates.
- **[API Governance MCP](https://apievangelist.com/2026/07/21/conversational-api-governance-your-agent-can-call/)** — the same ruleset as an MCP server an agent can call mid-task.
- **[Agent Rule Export](https://apievangelist.com/2026/07/22/giving-agents-the-rules-before-they-author-not-after/)** — turn a ruleset into agent-native guidance so agents follow it while authoring.
- **[MCP Install](https://apievangelist.com/2026/07/23/a-universal-install-interface-for-mcp-servers/)** — a universal install interface for MCP servers across every client.
- **[Context Gate](https://apievangelist.com/2026/07/24/governing-what-agents-are-allowed-to-consume/)** — govern what agents are allowed to consume, not just what you produce.

Read down that list and you can see the arc I have been building toward. It starts with the everyday acts of checking and finding an API, moves through the machinery of writing, running, and measuring governance, and ends where I think the real work is now: governing what agents produce and, with Context Gate, what they are allowed to consume. Every one of these is open, most run entirely in your browser, and all of them treat a `spectral-` ruleset as the portable artifact that travels between them. If you only remember one thing from the series, let it be that the rules are the product, and the tools are just different surfaces for the same rules.

You can find all of them, and whatever I ship next, on the [API Commons tools](https://apicommons.org/tools/) page. Thanks for following along, one morning at a time.
