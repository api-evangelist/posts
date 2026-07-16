---
published: true
layout: post
title: 'The OpenAPI Governance Toolchain'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-open-api-governance-toolchain.png
date: 2026-07-14
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - API Commons
  - Tools
  - APIs
---

A little while back I stopped arguing about whether "just turning on Spectral" counts as API governance and went and measured it. I pulled a thousand real public GitHub Actions pipelines that run Spectral and looked at what they actually do. The picture was stark: most teams turn the linter on and stop there. They run its factory-default rules, let the green check go by, and call that governance. The linter is on. Nobody wrote the rules on purpose, nobody owns them, and nobody can tell you which policy any given rule enforces or why a developer who trips it should care.

I've come to believe the reason so many governance programs stall is that we've mistaken one tool for the whole job. Governance is not a linter. It's a stack. A machine *rule* enforces a written *policy*, which is explained by a piece of *guidance*, protects a consumer *experience*, carries a *provenance*, and applies at a point in the API *lifecycle*. The linter is the one part of that stack you can see from the outside — which is exactly why it's the part everyone optimizes and the rest goes missing. Governance is roughly three-quarters people work. The linter is the visible quarter, and turning it on with default rules is the thinnest possible version of even that quarter.

So over the last stretch I've been building out the other pieces — an open, free, browser-first toolchain for the parts of governance that live above and around the linter. Every one of these runs in your browser or your pipeline, is Apache-2.0, and is meant to be forked. None of them replaces the people work. They just make the automatable quarter honest, and they keep pointing back at the three-quarters that isn't. Here's the whole set, walked in the order the work actually happens.

## Author the rules you actually mean

Default rules are the original sin. If you didn't write the rule, you can't explain it, and a rule you can't explain is one a team will route around the first time it's inconvenient. So the toolchain starts before enforcement, with authoring. [Spectral Ruleset Studio](https://studio.apicommons.org) turns a prose style guide into an owned, grounded, well-named Spectral ruleset — it distills the rules you already believe into something executable, with a naming convention so you can find and reason about each rule later. [Ruleset Commons](https://github.com/api-commons/ruleset-commons) is a registry of adoptable, provenanced rulesets you can `extends` from instead of copy-pasting someone's YAML and forgetting where it came from. And [`@api-common/spectral-owasp-ruleset`](https://www.npmjs.com/package/@api-common/spectral-owasp-ruleset) is a grounded ruleset for the OWASP API Security Top 10, for the security floor nobody should be authoring from scratch.

## Enforce without the drama

Enforcement is where governance earns its bad reputation — the wall of red on day one, the blocked build over a missing description. The point of these tools is to enforce *sparingly* and *legibly*. [The API Validator](https://validator.apicommons.org) is a browser-first linter for OpenAPI (3.x and Swagger 2.0), AsyncAPI, Arazzo, and JSON Schema — search your Git host for real artifacts, lint them against a best-of-breed ruleset, tune any rule, and commit back, with nothing leaving your browser. [The Governance Pipeline](https://pipeline.apicommons.org) is a forkable reference CI pipeline that gates on the pull request, pins its tooling, and runs a security job — a worked example of what "wired up on purpose" looks like. And [the API Governance MCP server](https://github.com/api-commons/api-governance-mcp) puts that same Spectral engine behind the Model Context Protocol, so an agent can lint an artifact on demand.

## See what you're actually doing

You cannot improve what you can't see, and the pipeline is where governance leaves a fingerprint. [The Spectral Reporter](https://reporter.apicommons.org) turns a raw lint run into a self-contained HTML governance report a human — or a security scanner — can read. [The Governance Pipeline Auditor](https://auditor.apicommons.org) scores a repo's Spectral CI against a mechanical maturity rubric: does it gate on the PR, run an owned ruleset, pin its tools, fail the build, emit a report? It's the floor test — if the automatable part is thin, the conversations about the invisible part almost certainly never happened. And [Governance Coverage](https://coverage.apicommons.org) answers the question almost nobody asks: of all the addressable locations in your API description, how many does any rule actually look at? Turning the linter on tells you nothing if your rules only inspect a third of your surface.

## Bind the rules back to their why

This is the piece I most wish I'd had years ago. [The API Governance Graph](https://graph.apicommons.org) binds the whole stack into one navigable graph — rule to policy to guidance to consumer experience to lifecycle — and, in its Gaps view, shows you exactly where the stack is broken: rules no policy enforces, policies with no stated why, guidance essays nobody links. It makes the difference between "we have governance" and "here is where our governance is just noise" visible in a way a list of rules never can.

## Keep it honest

Every real program hits a case where a rule can't be satisfied yet — a legacy endpoint, a deadline, a deliberate deviation. Without a sanctioned way to say so, teams route around governance: they disable the rule, delete the CI step, ignore the report. [Governance Waivers](https://waivers.apicommons.org) is the honest alternative — a machine-readable exception with a scope, a reason, an owner, and an expiry. It suppresses exactly that one violation, and when the waiver lapses the violation comes back on its own. A waiver that no longer matches anything is stale, and the tool tells you to delete it. Exceptions stop being how governance quietly dies and start being part of how it's run.

## Prove it to the people who consume you

Most governance tooling faces the producer. [API Certification](https://certification.apicommons.org) faces the consumer. It issues a tamper-evident certificate attesting that a specific API description passed a named ruleset at a profile threshold, on a date — with a SHA-256 fingerprint of the API and ruleset so anyone can re-verify it against the description they hold. If the API drifts by a character, or the certificate is forged, verification fails. It's integrity, not identity: proof of *what* was certified that a consumer can check before they integrate, without taking anyone's word for it.

## Bring the agents in

The last piece is the one that made all the rest feel urgent. Agents are writing and editing APIs now, and a Spectral ruleset is built to be *executed* — it catches problems after the fact. An agent needs the same rules *before* it acts, as guidance it can read. [Agent Rule Export](https://agents.apicommons.org) turns a ruleset into agent-native artifacts: an `AGENTS.md` governance block, a system-prompt instruction set, a per-rule remediation prompt pack, and a compact digest an agent can self-check against. Governance moves left, into the authoring moment, so the agent writes it right the first time — and the MCP server is there for the on-demand check when it doesn't.

## The part no tool can do

That's the toolchain — author, enforce, measure, bind, waive, prove, and hand to the agents — and it's all sitting at [apicommons.org/tools](https://apicommons.org/tools/), open and free, for you to run or fork. But I want to be honest about what it is and isn't. Every one of these tools measures or manages the mechanical quarter of governance: the surface a workflow file exposes, the rules a machine can execute, the exceptions a file can track. None of them can see whether a human wrote those rules on purpose, whether anyone owns them, whether the developer who trips one understands why. That work is still yours.

What the toolchain buys you is that the easy part stops being an excuse. You can score your pipeline, measure your coverage, see where your stack is broken, and give your agents the rules up front — cheaply, today. And once the automatable quarter is honest, you're left staring at the real work: the owned ruleset with a documented why, the guidance that turns a red build into a teachable moment, the provenance that lets a team argue with a rule instead of routing around it. That's the governance that actually holds. The tools just make sure you can't mistake the green check for it anymore.
