---
published: true
layout: post
title: 'Where I Am At With Forking Spectral'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/where-i-am-at-with-forking-spectral.png
date: 2026-08-19
author: Kin Lane
tags:
  - Spectral
  - API Governance
  - Governance
  - Open Source
  - OpenAPI
  - Rulesets
  - Standards
  - APIs.io
  - Kin Score
  - APIs
---
I recorded a twenty-three minute walkthrough of where I am at with the fork of Spectral, two days ahead of Friday's open office hours. It was partly for the working group and partly for my own benefit — an accounting of what is done, what is not, and why I am doing any of it. It turned into the most complete picture of this work that exists anywhere, so I am putting it here with links to everything I clicked through.

<center><iframe width="560" height="315" style="max-width:100%;" src="https://www.youtube.com/embed/ZgsP9MOWXOE" title="Stepping Back Through the Spectral Fork" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>

## The Short Version

Stoplight was acquired by SmartBear. I am not going to claim Spectral is abandoned — there has been a fair amount of work on it recently, which I read as SmartBear feeling the heat. But there is a real backlog, a supply chain incident was brought to my attention, and telemetry was added that has left people concerned. Those are the things that triggered this.

So I forked it, under the name **Spotlight**. That is a joke and a poke — it is what everyone I have ever worked with on a Stoplight issue has mistakenly called them, and it is a nod to the Swagger and OpenAPI naming mess. Will that be the name? No. That is up to the community, and it is one of the first things on the table.

The thing I am not flexible on is this: **the spec has to be separable from the tool.** Multi-specification first, and eventually multi-engine, so that [vacuum](https://github.com/daveshanley/vacuum) and others are engines we can use rather than competing forks of the same idea.

I do not want to own this. I am pushing it forward aggressively because it needs it and because people asked me to.

## The Fork Itself

- **[Spotlight](https://spotlight-rules.com)** — the project site. The [why](https://spotlight-rules.com/why/), the [scope](https://spotlight-rules.com/scope/), the [implementations](https://spotlight-rules.com/implementations/) it is already embedded in, the [tooling](https://spotlight-rules.com/tools/), the [funding question](https://spotlight-rules.com/funding/), the [roadmap](https://spotlight-rules.com/roadmap/), and [how to get involved](https://spotlight-rules.com/involved/).
- **[The spec, on its own](https://spec.spotlight-rules.com)** — a separate site for the ruleset format as a standalone specification. The documented spec, the JSON Schema for it, a versioning proposal, a conformance suite, how governance could work, and its own roadmap.
- **[spotlight-tools](https://github.com/api-commons/spotlight-tools)** — the CLI fork, and its issues.
- **[spotlight-spec](https://github.com/api-commons/spotlight-spec)** — the spec repo, and its issues.
- **[The discussion thread](https://github.com/orgs/api-commons/discussions/28)** — where the open questions live.
- **[The roadmap repo](https://github.com/api-evangelist/roadmap/issues)** — Spotlight work is filed as `area:spotlight` issues.

The four open questions are the **name**, the **home**, the **roadmap**, and the **money**. Where this ultimately lives is genuinely undecided — it is parked in API Commons right now and does not have to stay there. It could be the OpenAPI Initiative, it could be the Linux Foundation, it could be a nonprofit under API Commons. What matters more to me than the answer is that we can take donations and contract money and actually pay people to do the work.

## Why I Care — The Selfish Reason

Here is the part I want to be honest about. I could do what IBM and SAP and others have done: use Spectral quietly under the hood, contribute nothing, and not care who owns it. But it is foundational to my own work in a way that makes that impossible.

**[APIs.io](https://apis.io)**, my search engine, lints every artifact it holds with Spectral — OpenAPI, AsyncAPI, JSON Schema, JSON Structure, APIs.json, Arazzo workflows, MCP, agent cards, and now agent skills. That last one is why markdown support matters to me and why multi-format is not a nice-to-have. And the **[Kin Score](https://apis.io/rating/)** — my rating system for APIs — has a governance facet built directly on Spectral linting.

I have also spent the summer building rulesets for monetization, rate limits, FinOps, OAuth, and even GitHub Actions. All of that sits on a format owned by a company that has not been a good steward of it.

## The Tool Suite

This is most of the video, and it is the reason a stable, standalone spec matters. Every one of these is open source, forkable to run locally, and most also ship as an npm package so they work in a pipeline rather than only in a browser. They are deliberately modular — pick the ones that match your priorities.

- **[API Governance Certification](https://certification.apicommons.org)** — run a ruleset against an OpenAPI, get a downloadable certificate that it passed, and let anyone verify it. People kept asking for this.
- **[API Governance Graph](https://graph.apicommons.org)** — graph how your rules map to policies, areas, experiences, and the lifecycle, so you can see where the gaps are.
- **[API Governance MCP](https://github.com/api-commons/api-governance-mcp)** — Spectral as an MCP server, so any AI client can lint your artifacts. Also on npm as [`@api-common/api-governance-mcp`](https://www.npmjs.com/package/@api-common/api-governance-mcp).
- **[API Reusability](https://reusability.apicommons.org)** — not strictly Spectral, but it measures how reusable your paths and operations actually are across a set of OpenAPIs pulled from APIs.io or GitHub.
- **[API Validator](https://validator.apicommons.org)** — lint OpenAPI, AsyncAPI, Arazzo, JSON Schema, and APIs.json against rulesets you can edit, fork, and download as an APIs.json.
- **[Code-First Governance](https://codefirst.apicommons.org)** — for teams that are not design-first, bridging annotation-generated OpenAPI (Spring Boot, in this case) into Spectral governance.
- **[Governance Baseline](https://baseline.apicommons.org)** — the simplest possible starting set. Contact, name, description, operation ID. Where a group begins.
- **[Governance Coverage](https://coverage.apicommons.org)** — load a ruleset and find out how much of the specification it actually checks, and which sections it never touches.
- **[Governance Pipeline](https://pipeline.apicommons.org)** — the reference blueprint, built from harvesting Spectral usage across public GitHub Actions. Most people are running default OpenAPI out of the box and no OWASP. This shows what next looks like: pinned commits, an owned grounded ruleset, separate OWASP, a human-readable report.
- **[Governance Pipeline Auditor](https://auditor.apicommons.org)** — the blueprint is the target; this audits your actual pipeline against it and tells you what is missing.
- **[Governance Scorecard](https://scorecard.apicommons.org)** — apply points to rules and watch whether teams are improving or regressing over time.
- **[Governance Waivers](https://waivers.apicommons.org)** — sanctioned, owned, expiring exceptions. Teams vouch for them and renew them, and the pipeline tracks them while still letting the build through.
- **[Rule Federation](https://federation.apicommons.org)** — evaluates rules across repos to find what is reused, what is orphaned, what is baseline, what is contested, and what is waived, so teams across domains can actually talk about it.
- **[Ruleset Commons](https://rulesets.apicommons.org)** — where I am publishing every ruleset I have come across, plus the ones I am writing. FHIR, the Italian government, mine, and others.
- **[Spec Review](https://review.apicommons.org)** — a stakeholder-friendly design diff you can download as a checklist and hand a team.
- **[API Authorization Ruleset](https://apicommons.org/api-authorization)** — a ruleset focused on OAuth 2.1 and FAPI 2.0 at two tiers. Also on npm as [`@api-common/spectral-api-authorization-ruleset`](https://www.npmjs.com/package/@api-common/spectral-api-authorization-ruleset).
- **[Spectral Reporter](https://reporter.apicommons.org)** — runs in your pipeline and turns the output into a visual HTML report.
- **[Spectral Ruleset Studio](https://studio.apicommons.org)** — a YAML and visual editor for building rulesets from starter libraries, because nobody knows how to write these by hand.

There is an agentic layer on top of this — MCP tools and agent skills for authoring and linting — that I am working on but which is not ready for prime time and is not part of this conversation yet.

## What I Actually Need

I am going to keep iterating on all of these regardless. But I need a solid core, and I need the rulesets to be standalone. APIs.io and the Kin Score are my commercial foundation, and both of them — along with every open source tool above — depend on the rules living outside SmartBear, in a foundation, governed openly.

That is the selfish reason. I would rather say it out loud than pretend this is pure community service.

We have **open office hours Friday at 10:00 AM Eastern**, with Phil Sturgeon, Frank Kilcommins, Jakub Rożek, and quite a few others. If you use Spectral — especially if you have it mandated across an organization or a government — [come join the discussion](https://github.com/orgs/api-commons/discussions/28). The name, the home, the roadmap, and the money are all still open, and I would very much like them not to be my decisions alone.
