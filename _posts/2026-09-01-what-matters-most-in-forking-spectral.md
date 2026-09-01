---
published: true
layout: post
title: 'What Matters Most In Forking Spectral'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-matters-most-in-forking-spectral.png
date: 2026-09-01
author: Kin Lane
tags:
  - Spectral
  - API Governance
  - Governance
  - Rulesets
  - Open Source
  - OpenAPI
  - AsyncAPI
  - JSON Schema
  - Arazzo
  - Standards
  - Community
---
In preparation for this week's office hours I needed to summarize what matters most when it comes to forking [Spectral](https://github.com/stoplightio/spectral). It helps me to go back through all of the conversations, issues, and roadmap items I have accumulated since [announcing I was going to fork it](https://apievangelist.com/2026/08/19/where-i-am-at-with-forking-spectral/), so that I can focus in on what actually matters. There is a lot more detail on [the roadmap](https://spotlight-rules.com/roadmap/), but I wanted to go through it all and cherry-pick the things I want on the tip of my tongue.

## The Top Two Priorities

- **Name** — I temporarily named the work Spotlight, but we have [an issue dedicated to voting on the name](https://github.com/api-commons/spotlight-spec/issues/39) of the spec and tooling family, and I have given it a deadline. The name is called on Thursday, September 11th.
- **Home** — The first step in finding [a home](https://github.com/api-commons/spotlight-spec/issues/8) is agreeing on the name and setting up a repository. From there we stand up a GitHub organization, and repos for the spec and the tools, and then move forward.

## Separating The Specification From The Tooling

It is critical that the specification is separated from the tooling, with a focus on the following.

- **Normative** — Using normative language to describe what the specification does and does not do.
- **Conformant** — Establishing a conformance suite that will help align the tooling with the specification.
- **Testing** — Making it so anyone can test tooling for conformance and ensure that their rules work.
- **Building** — Making it really easy to build, evolve, standardize, and validate your rules.
- **Education** — Providing consistent education on how to develop and apply rules across an organization.
- **Federation** — Offering solutions for enabling the federated development and application of rules.

## Maturing The Rules Themselves

The rules themselves need to mature and evolve beyond the origins of the spec being just for OpenAPI.

- **Formats** — Embracing [OpenAPI](https://spec.openapis.org), [AsyncAPI](https://www.asyncapi.com), [JSON Schema](https://json-schema.org), and [Arazzo](https://spec.openapis.org/arazzo/latest.html), but also many other formats by default.
- **Aliases** — Making aliases a first class citizen to abstract away the complexities of JSONPath.
- **Modularity** — Making it easy to implement the basics, and then add on exactly the rules you need.
- **Industries** — Making industry rulesets more formal across sectors, doing the work for implementors.
- **Custom** — Ensuring default rules cover what is needed, but making it easy for custom rules to be created.

## Establishing A Robust Toolbox

It is important that the spec exists on its own, but establishing a robust toolbox matters in these ways.

- **Modularity** — Ensuring the modularity of tooling to implement the rules, allowing people to pick what they need.
- **Telemetry** — Ensuring there is no telemetry in the open-source solutions that will phone home anywhere.
- **Supply Chain** — Making sure there are no supply chain issues, and that every library is not just being forked.
- **Pipelines** — Establishing common standards and guidance for running tooling and applying rules in CI/CD pipelines.
- **Commercial** — Making sure we have a strong awareness of, and a relationship with, commercial tooling.
- **Open-Source** — Making sure we have a strong awareness of, and a relationship with, open-source tooling.
- **Adoption** — Providing robust guidance for how to switch from Spectral and onboard new users of the spec.

## What Surrounds And Guides All Of It

Beyond the specification and the tooling, but also surrounding and guiding both, we need.

- **Governance** — Establishing strong but very transparent and accountable governance for the specification and the tools.
- **Community** — Ensuring that all activity is occurring with community input and involvement along the way.

## Where This Leaves Me

These are the things that will matter the most. We need to settle in on a name, and set in motion the actual GitHub organization, repo, and website for the specification and the tooling. But this list provides a set of guidance that I think is essential to setting all of this in motion with the right tone, and the right trust with the community.

If you want to get involved, just email me at [kin@apievangelist.com](mailto:kin@apievangelist.com) and I will add you to the weekly office hours, which are [now on Thursdays at 10:00 AM Eastern](https://github.com/api-commons/spotlight-spec/issues/18). We should have settled in on the name by next week, set up the GitHub for the project, and begun working on the roadmap. We already have a pretty solid turnout of people showing up each week, as well as votes on the name, and we would love to have you involved.
