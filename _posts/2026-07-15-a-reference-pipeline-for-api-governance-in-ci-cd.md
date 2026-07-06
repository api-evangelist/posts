---
published: true
layout: post
title: A Reference Pipeline for API Governance in CI/CD
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-reference-pipeline-for-api-governance-in-ci-cd.png
date: 2026-07-15
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - CI/CD
  - Pipeline
  - Tools
---
This daily walk through the [governance tools I have been building under API Commons](https://apicommons.org/tools/) has stayed close to the desk so far — things you open in a browser tab and reach for in the moment. Today I want to move it into CI/CD, because governance eventually has to live in a pipeline, and the pipeline is where most teams get it wrong. So the tool for the day is [Governance Pipeline](https://pipeline.apicommons.org), a reference blueprint for how an API governance pipeline should actually be built — shipped as forkable GitHub Actions, a one-step composite action, and an owned starter ruleset you are meant to rewrite.

This one comes straight out of research. When I read 1,005 real public GitHub pipelines running Spectral in CI and scored each against an eight-point maturity rubric, the ceiling was six and only two repositories reached it. Nobody assembled the whole blueprint — even though every single piece of it is already shipping somewhere in that corpus. The good fragments are lying around the scrapyard; no one has bolted them together. Governance Pipeline bolts them together into a single artifact you fork, so you copy the good fragment instead of the bad one you would otherwise find first.

The blueprint is a set of decisions, each tied to a finding it fixes. Gate on the pull request rather than push to main, so governance is the last cheap checkpoint before the spec is in instead of a ticket filed after the merge. Add a `paths:` filter so the job runs when the spec or the ruleset actually changed, not on every unrelated commit. Pin Spectral by commit SHA, because a governance tool floating on `@latest` is itself ungoverned — of 215 pipelines using the official Action, only 14 pinned to a commit. Run a separate OWASP security job so you can tell at a glance whether an API failed on design or on security. And emit a human-readable report at the end, because a linter by nature only ever tells people what is wrong, and a scoreboard with a trajectory survives the budget conversation in a way a wall of red never does.

The decision I care about most is the ruleset. The headline finding was that 63% of pipelines run Spectral with no ruleset of their own — the most common way to use a governance tool is to not govern with it. So the starter ruleset ships small, roughly a dozen rules, each written on purpose with a prose description and a documentation link, and exactly three of them set to block. You are explicitly told not to adopt it unread. The identical YAML is a real governance artifact in one repo and an empty gesture in another, and the only difference is whether human work exists behind it. Copy it, replace my example org with yours, point the docs links at your own handbook, and the fork becomes yours.

That is the whole idea — a map of the pieces that already work, bolted into one thing you can fork in an afternoon and gate a PR with before you break for coffee. Go [try it](https://pipeline.apicommons.org), and if you want the ruleset written and grounded against your own operations rather than mine, that is the part I do alongside teams. More of the [API Commons tools](https://apicommons.org/tools/) tomorrow.
