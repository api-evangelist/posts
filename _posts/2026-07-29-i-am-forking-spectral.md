---
published: true
layout: post
title: I Am Forking Spectral
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-am-forking-spectral.png
date: 2026-07-29
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Rules
  - OpenAPI
  - API Commons
  - Specifications
---
On July 14th someone filed an issue on the Spectral repository titled ["SUPPLY CHAIN ATTACK — @stoplight/spectral pulls in compromised dependencies."](https://github.com/stoplightio/spectral/issues/2999) Ten days later, one other person commented on it: "Has anything been done about this? I see that a new release has been made, but did that fix this issue?" Nobody answered. [The issue](https://github.com/stoplightio/spectral/issues/2999) is still open as I write this.

I want you to sit with that for a second, because of who is downstream. The **Dutch government's** [REST API Design Rules](https://gitdocumentatie.logius.nl/publicatie/api/adr/2.2.1/) — a mandatory standard on the Netherlands' official comply-or-explain list, the one its agencies are required to meet — are written as Spectral rulesets. Go read them; the linter is right there in the normative text. There are enterprises running the engine behind an internal facade where their developers never even learn it is there, called millions of times a day in CI. There are small startups who wired it into their pipeline in week one and never thought about it again. All of them are downstream of an unanswered security question in a repository with 241 open issues.

So I am forking it. Two repositories, live now:

- **[api-commons/spectral-rules](https://github.com/api-commons/spectral-rules)** — the ruleset and rules format as a standalone specification with a portable JSON Schema.
- **[api-commons/spectral-cli](https://github.com/api-commons/spectral-cli)** — a maintained build of the linter at v6.16.2, full history preserved, telemetry stripped, and issues open.

I have been writing about this for three years and asking nicely for eighteen months. [In January of 2025 I asked SmartBear publicly to donate Spectral to the OpenAPI Initiative](https://apievangelist.com/2025/01/31/please-put-spectral-into-the-openapi-initiative-smartbear/), alongside OpenAPI, Arazzo, and Overlays. I got no response. That invitation still stands and I would genuinely rather they took it than that I do this. But I am not waiting anymore.

## The rules have to stand on their own

This is the part I care about most, and it is the least dramatic thing in this post.

Spectral is two things fused into one artifact: a **specification** for how you express a governance rule, and a **tool** that evaluates it. They have never been separated. The rules format lives inside the linter's source tree, described by five internal draft-07 meta-schemas coupled to that linter's runtime, versioned with the tool rather than on its own.

Which means: when the tool stops moving, the format stops moving with it. There is no way to fix one without a home for the other.

And your rules are the *durable* thing. Not the linter. Your API style guide, your security baseline, your design standards — those outlive the CLI, they outlive the vendor, they usually outlive the APIs they govern. I have watched organizations spend a year negotiating what "good" means across their teams, encode it into a ruleset, and then discover that this hard-won institutional knowledge is technically a config file for a piece of software nobody is maintaining.

So `spectral-rules` treats the ruleset as a first-class artifact in its own right — independently versioned, with a portable JSON Schema, so rules can be authored, validated, published, exchanged, and consumed by *any* tool. Not just by the linter that happens to run them.

Concretely, that meant collapsing those five draft-07 meta-schemas into [**one self-contained JSON Schema draft 2020-12 document**](https://github.com/api-commons/spectral-rules/blob/main/schema/v1/spectral-ruleset.schema.json) — the current draft, not the decade-old one — with the linter's runtime hooks and validator-specific error-message extensions stripped out, and a stable `$id` you can `$ref` from anywhere. It validates in any 2020-12 validator, `npx ajv-cli validate --spec=draft2020` included, which is the whole difference between a format you can describe and a format you have to reverse-engineer from someone's `node_modules`.

Everything else in this post is logistics. That is the actual point.

## Why now

I did not want to do this on a hunch, so I went and pulled the numbers off the GitHub API. [All of it is published](https://spotlight-rules.com/research/), and you can re-run it yourself.

**The acquisition.** SmartBear acquired Stoplight, and the investment that would have kept the project healthy did not follow. This is not an accusation, it is just visible in the commit history.

**Abandonment, and it is measurable.** The cleanest measure of whether anyone is home on an open source project is how many issues get *closed*. Spectral closed 157 issues in 2021. It closed 12 in 2025, and 10 so far in 2026. That is a 93% collapse from peak. Meanwhile intake never slowed — 61 of the currently-open issues were filed in 2024, 40 in 2025, 26 already this year. The backlog is not old and settled. It is accumulating.

**A backlog nobody is draining.** 241 open issues and 39 open pull requests. The oldest open issue was filed in October 2019. The oldest open community pull request has been waiting **five years**. Several of these are finished, useful, uncontroversial contributions — a runtime expression validator, OpenAPI 3.1 external reference validation, a formatter improvement, an AsyncAPI 3.1.0 upgrade submitted five days ago. Nobody has looked at them. The single most-reacted open issue in the entire repository is a security advisory with 24 thumbs-up and *zero comments*.

**The supply chain incident.** Covered above. Still open.

**Telemetry.** [I wrote about this on July 2nd](https://apievangelist.com/2026/07/02/if-youre-using-spectral-it-is-now-gathering-data-opt-out/), and I tried to be fair about it then and I will be fair about it now: Scarf is a legitimate tool, the opt-out is real, and it is documented in the README rather than buried. Maintainers deserve to know who uses their work. But install-time telemetry in a modern governance setup means every CI run, every image build, every ephemeral container — and if you are a government or a bank, "our IP resolves to our employer's network on every pipeline run" is a conversation you would rather have on purpose. The API Commons build removes it from the CLI, core, rulesets, formats, functions, and the Docker image. Nothing phones home.

**The format has nowhere to grow.** More on this next.

I want to be precise about one thing, because overclaiming would let all of this be waved away: **Spectral is not unmaintained in the sense that nobody is there.** People are committing. What they are committing is dependency bumps, nine consecutive attempts in one day to unbreak a Docker release, and seven pull requests instrumenting the packages with analytics. No features. No triage. That is a project on life support, which is a different and sadder thing than a project that has been abandoned outright.

## Beyond OpenAPI, and beyond one engine

Here is the thing almost nobody says out loud: **the Spectral ruleset format is a general-purpose JSON/YAML rules language that happened to be born inside an OpenAPI tool.**

People figured this out years ago and have been quietly extending it ever since. I know of teams validating geospatial document formats with it — the successor to GeoJSON, specifically, which has nothing to do with APIs in the OpenAPI sense. I know of enterprises linting OData metadata, which is XML. GraphQL schemas. Agent cards. MCP server descriptors. Proprietary internal metadata formats. I use it myself for JSON-LD and APIs.json.

Every single one of those people is extending a format that has no specification to extend.

So the scope here is deliberately wide: OpenAPI, **Swagger 2.0** (upstream started blocking it, and banks still run it — keeping the bar low is how adoption actually happens), AsyncAPI, Arazzo, Overlays, JSON Schema, GeoJSON, OData, GraphQL, A2A agent cards, MCP, JSON-LD, APIs.json, and Markdown. That last one is the hardest and the one my customers ask for most, because agent skills are half YAML frontmatter and half prose.

And multi-engine, which brings me to the part I want to be careful about.

**Vacuum is supported. This is not a competition.** I have had Dave Shanley on the podcast twice, and the thing that has always struck me is that when he rewrote the engine in Go, he explicitly refused to fork the format. His words: *"What I didn't want to do was create a whole new standard, you know, like yet another standard, yet another DSL for describing rule sets."* He treated the format as the fixed point and competed on the implementation. He was right to.

My concerns with Go are narrow and specific. Browser support is a hard requirement for real users — people lint in editors, in playgrounds, in web-based governance tooling, in places a compiled binary cannot go. That is why the JavaScript engine has to stay JavaScript. And on speed: I think the honest read is that the bottleneck is code quality, not the language. The engine has grown organically for years and is nowhere near what it could do on its own platform. It will never match a compiled binary and it does not need to.

The real problem between engines is that **compatibility claims cannot be adjudicated**, because there is nothing to adjudicate them against. Everyone who has attempted parity says the same thing: the happy paths are easy, and the gnarly production rulesets are where you find out. So a **public conformance test suite** is a first-class deliverable here, not a nice-to-have. That is a gift to vacuum, not a weapon against it. It is what lets several engines coexist honestly instead of drifting apart quietly and arguing about it in three years. The same logic extends to expressing policy in Open Policy Agent or Cedar — a documented rules format is the interchange layer.

## What I am not doing

**Not rewriting it.** The fork starts from the exact ruleset format and exact CLI behavior of v6.16.2. Your rulesets keep working. Divergence, when it comes, will be deliberate, versioned, and documented — never silent.

**Not using a GitHub fork.** This is a copy with full commit history, not a fork, for a boring reason: GitHub forks cannot have their own Issues. People need somewhere to report a problem and be answered, and that is the entire point. I keep [an upstream-tracking fork](https://github.com/api-commons/spectral) separately so the lineage stays visible and I can pull changes in cleanly.

**Not being precious about the name.** Both repos keep the upstream name for now so the lineage is obvious. It will not stay that way — trademark alone makes a rename likely — and the right name is a community question, not mine. If you have watched the Swagger/OpenAPI confusion play out over ten years, you know how much a name matters.

**Not claiming a home.** API Commons is where this lives now, and maybe permanently. The OpenAPI Initiative is a candidate, though its charter explicitly bars tooling — a clause SmartBear and MuleSoft helped put there years ago to protect their tooling investments, and the same clause that pushed AsyncAPI and JSON Schema out. That is awkward when the whole point is keeping the spec and the tool aligned. The Linux Foundation is a candidate. A European home is a candidate — a surprising amount of the most advanced adoption is in European public-sector programs, and several of those countries are having the same conversation right now.

## The one thing I am asking for

If you depend on the Spectral ruleset format, **[say so in the discussion](https://github.com/orgs/api-commons/discussions/28)**.

That is it. Not an endorsement. Nothing legally binding. No obligation to contribute a line of code. Just: *we rely on this, and we would like to see it keep moving.*

Here is why it matters. Every conversation about a permanent home — a foundation, a standards body, a nonprofit — comes down to the same question: who actually uses this? And that question has never had a public answer, because this format's users are structurally invisible. They are governments with mandated rules. They are enterprises running it behind a facade. They are the team that set it up in CI two years ago and has not thought about it since.

I have spent the last month talking to some of them. The [Dutch government](https://gitdocumentatie.logius.nl/publicatie/api/adr/2.2.1/) has already told me I can name them publicly — not as a backer of anything, just as a dependent user who wants it to keep moving. There are large enterprises with deep public investments in this format, small startups shipping products on it, and vendors who have embedded the engine so thoroughly they could swap it underneath and nobody would notice. Almost none of them are visible from the outside.

**A public list of organizations saying "we depend on this" is the single most useful artifact this effort can produce in its first month.** It costs you nothing. It is the difference between a fork and a standard.

And if you have a pull request rotting in the upstream queue — bring it here. Getting those merged is the fastest way I can prove that a fork means your work actually lands.

## Where things go

- **Problems with the CLI or engine** → [spectral-cli issues](https://github.com/api-commons/spectral-cli/issues)
- **Problems with the ruleset format or spec** → [spectral-rules issues](https://github.com/api-commons/spectral-rules/issues)
- **Direction, governance, naming, where this should live** → [the discussion](https://github.com/orgs/api-commons/discussions/28)

Everything is at [spotlight-rules.com](https://spotlight-rules.com), including [all the research](https://spotlight-rules.com/research/) behind every number in this post. I scrubbed the company and individual names out of the research pages deliberately — publishing a ruleset makes you a dependent user, not a supporter of my fork, and nobody gets volunteered into a public position they did not take. Identify yourselves if and when you want to.

I have twelve governance tools already built on this format — a validator, a ruleset registry, a CI pipeline, baselines, scorecards, coverage, waivers, certification, federation. Every one of them had to answer the same question, "what exactly is a valid ruleset?", and the only available answer was "whatever the linter accepts today, discovered by reading its source." That is a workable answer for one tool. It is not a workable answer for an ecosystem.

Spectral was built by Stoplight and its contributors over many years, and grew out of Speccy before that. It is genuinely good software and it deserves better than this. The Apache-2.0 license and the full commit history carry forward untouched, and if SmartBear wants to make all of this unnecessary by donating it to the OpenAPI Initiative, the offer from January 2025 still stands.
