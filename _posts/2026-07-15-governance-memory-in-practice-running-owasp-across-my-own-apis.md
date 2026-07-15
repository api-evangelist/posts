---
published: true
layout: post
title: 'Governance Memory in Practice: Running OWASP Across My Own APIs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/governance-memory-in-practice-running-owasp-across-my-own-apis.png
date: 2026-07-15
author: Kin Lane
tags:
  - API Governance
  - OWASP
  - Spectral
  - API Security
  - Provenance
  - Memory
  - API Commons
---
A couple of days ago I published two things that were practically begging to be connected. I shipped the [Spectral OWASP ruleset](https://apievangelist.com/2026/07/14/a-grounded-spectral-ruleset-for-the-owasp-api-security-top-10/) — a grounded, owned Spectral mapping of the [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) you can add to any OpenAPI lint in one line — and I riffed on Daniel Kocot's "API Governance Needs Memory" in [a post of my own](https://apievangelist.com/2026/07/14/on-api-governance-needing-memory/), where I argued that reviews and reports should be a first-class artifact: its own folder, every run timestamped, kept in GitHub alongside the API so you can diff and trend it over time. Today I stopped talking about both and did them at once — I pointed the ruleset at my own APIs and committed the receipts.

I ran [`@api-common/spectral-owasp-ruleset`](https://github.com/api-commons/spectral-owasp-ruleset) across all sixteen of the OpenAPI definitions behind the API Evangelist developer portal and [apis.io](https://apis.io). The [baseline report](https://apievangelist.com/governance/owasp/2026-07-15/report.html) came back with 625 findings across the estate, and — worth saying up front — none of them were blocking errors. The shape was unsurprising and honest. The overwhelming majority were API4 Unrestricted Resource Consumption: strings with no `maxLength`, arrays with no `maxItems`, integers with no `maximum`. After that came operations and specs that never declared a `security` baseline at all, a handful of missing `servers` blocks, and a couple of URL-bearing properties that should carry `format: uri`. That is the exhaust of years of hand-authored specs that were built to describe, not to defend.

Then I remediated and ran it again, and the [second report](https://apievangelist.com/governance/owasp/2026-07-15-remediated/report.html) came back clean — 625 to 0. I added the resource bounds, filled in the `servers` and the `429` responses, and put `format: uri` on the URL-bearing fields. On security I made a deliberate call: because these are public, read-only discovery feeds, the honest fix was to declare `security: []` — explicitly public — rather than fake an authentication requirement the APIs do not have, while leaving the `api_key` scheme defined so I can meter later without a breaking change. And I will keep repeating the caveat from the ruleset itself, because it matters: a clean report is a floor, not a certificate. Static linting cannot see object-level authorization or runtime abuse. It can only make sure the design-time contract is not leaving an obvious door open, and mark the rest as work you still owe your code, your tests, and your gateway.

The part I care most about is not the zero — it is where the reports live. Every one of those sixteen APIs now carries its own governance record in its own repository, under a timestamped folder: [`governance/owasp/2026-07-15/`](https://github.com/api-evangelist/posts/tree/main/governance/owasp) for the baseline and `governance/owasp/2026-07-15-remediated/` for the remediated run. Each folder holds the full set — the standalone HTML report, the raw Spectral JSON, a SARIF file for code scanning, and a README with the counts and provenance of the run. This is exactly the "first-class artifact, its own folder, every review with a timestamp, ready for time series and diff" that I described two days ago as something I *would* do. The baseline and the remediated snapshot sitting side by side in git history are the diff — the before and after of a single afternoon of governance, kept forever, attributable, and readable by a human or an agent.

None of this is a one-time stunt, which is the whole point of calling it memory. I wired the run into a single command so I can re-run it on a schedule, and the folder accrues dated snapshots the way a ledger accrues entries — that accumulation *is* the institutional memory, and it is what makes drift and regressions visible instead of invisible. Along the way I also taught the [Spectral Reporter](https://reporter.apicommons.org) to show a proper success state, because a clean run was rendering as an empty page, and a governance pass should unmistakably look like a pass rather than a blank one.

So this is what governance memory looks like when you stop treating a review as something that happens in the moment and start treating it as an artifact you keep. Run the ruleset against your own APIs, remediate what is honest to remediate, and commit both reports next to the OpenAPI — producers and consumers alike. It produces a lot of data, but that is the good kind of problem: it is the raw material an organization can refine, with AI and MCP, into the durable picture of its own security posture over time. I have been asking for API governance to remember what we did and who did it. The least I could do was start remembering my own.
