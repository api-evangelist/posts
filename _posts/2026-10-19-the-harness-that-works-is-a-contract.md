---
published: true
layout: post
title: 'The Harness That Works Is A Contract'
date: 2026-10-19
author: Kin Lane
tags:
  - Agents
  - Contracts
  - OpenAPI
  - AsyncAPI
  - Spec-Driven Development
  - APIs.io
---
Naresh Jain published [Are Harnesses Worth the Cost?](https://martinfowler.com/articles/are-harnesses-worth-the-cost.html) on martinfowler.com last week, and it is the most useful thing I have read about coding agents this year. It's useful because it measures something, not because it argues something.

He had agents build the same backend-for-frontend service ten times with a harness and ten times without, using a frontier model and a cost-optimized one. A separate suite of 178 acceptance tests that the agents never saw judged every run. The frontier model passed 10 out of 10 either way, and the harness made it about seven times more expensive. The cheaper model passed 3 out of 10 without the harness and 10 out of 10 with it. Harnessed, it cost about a third less per run than the frontier model did on its own.

## Where the agents failed

The failures are the part I keep coming back to. The unharnessed runs were mostly right, passing at least 144 of the 178 checks. What they got wrong was the edges: a timeout returning a `503` instead of a `202` with a monitor link, a Kafka message delivered with an extra type header and a `null` where the schema said otherwise, a `415` where the brief asked for a `400`, an environment variable named `ORDER_API_API_KEY` when the integration expected `ORDER_API_KEY`.

None of these are reasoning failures. They are contract failures, at the seams where one system meets another. Naresh calls the harness "executable attention." The requirement was in the brief all along. It just lost its grip on the agent partway through the work, and a failing check put it back in front of it.

## Most harnesses are not built like this

When people talk about agent harnesses today, they mostly mean an `AGENTS.md` file, some skills, a set of MCP tools, linters, type checkers, hooks, and increasingly another model acting as a judge or reviewer. All of that is useful, but it is generic. A linter knows what good Java looks like. It does not know that the Order API returns a `202` when creation is deferred.

Naresh's harness is something different. Its core is an OpenAPI contract for the service being built, an OpenAPI contract for the downstream Order API, an AsyncAPI contract for the Kafka events, and request and response examples covering timeouts, malformed payloads, filter violations and retries. Mocks generated from those contracts make the downstream failures real enough to test against. Tests check conformance, response values and side effects. And one step I want everyone to notice runs before any test: it validates that every example actually conforms to its contract, so the harness cannot contradict itself.

The checks that decide pass or fail are not a model's opinion. They are deterministic and they come from the contract. The agent was told to fix the implementation, never to weaken the expectations.

## Spec-driven development is the other half

The spec-driven development crowd is closing in on the same idea from the other direction. GitHub's Spec Kit takes you from specification to plan to tasks to implementation. Kiro builds a three-phase spec workflow into the IDE. Tessl goes further and treats the spec as the real source and the code as something generated from it. These are good tools, and they get people writing down what they want before an agent writes code.

Most of those specs, though, are prose: requirements, user stories, plans written in Markdown. Prose is what an agent reads, and it is also what an agent stops paying attention to forty minutes into a run. Naresh's results show that what keeps a cheaper model honest is a spec that a machine can execute against. A requirements document only tells the agent what you wanted, while a contract will fail the build when the implementation doesn't match.

## The contract is the part nobody hands you

The detail in the experiment that matters most to me is one Naresh is upfront about. He wrote the contracts himself. The brief was unusually detailed, and the Order API spec came from the same person who designed the experiment.

That isn't how integration works in the real world. Most of the seams an agent has to get right belong to someone else: a payments provider, a messaging API, a CRM, a shipping carrier. Those are exactly the places where his agents dropped requirements, and they are the places where no team has time to hand-write an OpenAPI contract and a set of examples before letting an agent loose.

That's what we are working on at [APIs.io](https://apis.io). We are building out the contracts, examples, and supporting artifacts for public APIs, and attaching provenance that tells you where each one came from. If you want to point a cheaper model at a third-party integration and wrap it in a harness, the harness has to start from the provider's contract. Ideally that contract is published by the provider, and otherwise it is clearly marked as derived from their docs and validated before anyone trusts it.

Provenance matters here because of a caveat Naresh states plainly: checks can only enforce the expectations humans encode. A harness built on a wrong contract will be confidently wrong. We have pulled fabricated specs out of our own catalog, and we gate the contracts we generate from documentation so they can't pass themselves off as the provider's own. A contract catalog is only worth building a harness on if you can tell which contracts are real.

## Our own numbers point the same way

We see a version of this inside our own enrichment pipeline at APIs.io, which profiles tens of thousands of API providers. When we audited it, 20 of its 41 steps turned out to need no model at all, only scripts and schemas. When we ran Claude head-to-head against a local open-weight model on the same top providers, Claude won or tied every time, but every large margin traced back to a deterministic probe that had failed, not to the model's reasoning. When we gave the local model a better set of derived artifacts to work from, its scores went up, and fixing the scripts moved its scores more than changing the model did.

[Naresh's conclusion](https://martinfowler.com/articles/are-harnesses-worth-the-cost.html) is that model capability decides *when* you run the checks, not *whether* you need them. Cheaper models need them throughout, and frontier models need them at least once, as a final gate. I'd add one thing from where I sit: either way, someone has to write the contract. For the APIs you build, that's you. For the public APIs your agents integrate with, it's what we are trying to have ready on APIs.io before you need it.
