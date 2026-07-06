---
published: true
layout: post
title: Scoring Your Spectral CI Setup Against a Maturity Rubric
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/scoring-your-spectral-ci-setup-against-a-maturity-rubric.png
date: 2026-07-16
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - CI/CD
  - Pipeline
  - Tools
---
I have been walking through the [governance tools I keep building under API Commons](https://apicommons.org/tools/) one at a time, and today's is the one that turns the lens back on your own plumbing. Most of these tools ask whether your API is any good. The [Governance Pipeline Auditor](https://auditor.apicommons.org) asks a different and more uncomfortable question: is the machinery that is supposed to be checking your API actually doing its job? It scans a repository's Spectral CI setup, scores it against an eight-point maturity rubric, and hands you back a prioritized punch-list of concrete fixes — each with a one-line why and a link to read more. Lint your linting, basically.

The rubric is not something I made up in an afternoon. It is lifted straight from the API Evangelist paper on the state of Spectral in API pipelines, a census of 1,005 real public pipelines where the maturity ceiling topped out at six of eight and not a single repository reached seven or eight. That number has stuck with me. It means the whole industry has a pretty low bar for what "we do API governance" actually means in practice, and most of the gap is mechanical, automatable stuff nobody got around to wiring up. So the auditor measures exactly that: does governance gate the pull request before the merge instead of after, are the rules the organization's own instead of the tool's defaults, do those rules live in an owned home, is the tooling pinned to a chosen version, is there a security layer and not just style, does it fail the build on error or merely annotate, is it path-filtered to run only when the spec changes, and does it emit a machine-readable report a human or another tool can actually consume.

One point per signal, eight signals, and a set of maturity bands from Nominal at the bottom to Blueprint at the top. I want to be honest about what this does and does not see, because I say it right in the tool: it measures only the mechanical quarter of governance, the part a workflow file exposes. It says nothing about whether a human wrote good rules on purpose, which is the three-quarters no file census can ever read. But the mechanical quarter is where almost everyone is leaking, and it is the cheapest quarter to fix. The auditor also calls out the named anti-patterns from the paper by name — the default ruleset, `@latest` and other floating pins, linting after the merge, toothless `continue-on-error`, and rules with no documentation link.

You can paste a workflow and a ruleset into the [browser demo](https://auditor.apicommons.org) and see your score instantly, but the part I care about most is that the same scorer runs on the command line and in a GitHub Action, so `npx @api-common/governance-pipeline-auditor .` gives you byte-for-byte what CI would produce, and `--min-score` lets you gate a pipeline on its own maturity. It is the sequel to Spectral Reporter — that one reports on your API, this one reports on your pipeline — and like everything else here it is free and open under Apache-2.0.

This is another entry in the daily run through the [API Commons tools](https://apicommons.org/tools/). Go [run it against your own repository](https://auditor.apicommons.org), and if it hands you a two out of eight, take that as the good news it is: every one of those failing signals is a specific, boring, one-afternoon fix.
