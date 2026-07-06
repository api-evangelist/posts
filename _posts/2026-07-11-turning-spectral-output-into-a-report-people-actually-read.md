---
published: true
layout: post
title: Turning Spectral Output Into a Report People Actually Read
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/turning-spectral-output-into-a-report-people-actually-read.png
date: 2026-07-11
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - Reporting
  - Tools
---
I am still working my way through the [governance tools I have been building under API Commons](https://apicommons.org/tools/), one a day, and today's is the one that finally makes a Spectral run legible to somebody who did not write the ruleset. Spectral is wonderful, but its native output is a wall of JSON, or a scroll of terminal lines that vanish the moment the CI job ends. Nobody outside the pipeline reads that. So I built [Spectral Reporter](https://reporter.apicommons.org) to take that same lint output and turn it into one self-contained HTML file — inline CSS and JS, no CDN calls, no backend — that you can open offline, attach to a build, or hand to a product owner who just wants to know whether the API is any good.

The honest lineage here is Danny Dainton's newman-reporter-htmlextra, which did exactly this for Postman and Newman runs and became the thing everyone screenshotted into a status update. I wanted that same artifact for API governance. You feed the reporter Spectral's `--format json` output and it emits a report with a pass/fail banner at the top, severity stat tiles for errors, warnings, info, and hints, and per-issue rows that carry the rule code, the message, the file, and the exact `line:character` — expand a row and you get the JSON path and source. It regroups by rule, file, or severity with a toggle, filters client-side with search and severity chips, and ranks the top-offending rules and files so you know where to start instead of drowning in the full list.

The whole thing runs with no install. Point it at a results file with `npx @api-common/spectral-reporter spectral-results.json -o governance-report.html`, or pipe straight from Spectral with `spectral lint -f json openapi.yaml | npx @api-common/spectral-reporter -o report.html`, and drop the resulting file into an `upload-artifact` step so every build leaves behind a report a human can actually open. There is also a `--sarif` mode that converts the same findings to SARIF 2.1.0 for GitHub code scanning, because the research I did on real pipelines found only 3.4% of teams ever surface governance findings on the Security tab, and that gap is a shame when it is one flag to close.

What I care about most is the framing beyond raw violations. Spectral JSON only ever lists what failed, so it can never say "82% of your operations carry a unique id" — supply an optional totals sidecar and the report adds a compliance scoreboard beside the deficit list, and feed it multiple dated runs and it renders a trend view showing which rules improved and which regressed over a quarter. That turns governance from a nag into a progress report, which is the only version of governance anyone sticks with.

This is another in the [daily walk through the API Commons tools](https://apicommons.org/tools/), and like the rest it is open, Apache-2.0, and just Spectral underneath — the report is a pure rendering function shared byte-for-byte between the CLI and the [live demo](https://reporter.apicommons.org). Go run your worst spec through it and see what your rules have been trying to tell you.
