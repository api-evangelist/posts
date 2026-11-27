---
published: true
layout: post
title: "Your Standards Need To Be Public Or They Won't Be Standard With Agents"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-standards-need-to-be-public-or-they-wont-be-standard-with-agents.png
date: 2026-12-01 16:00:00 +0000
author: Kin Lane
tags:
  - Standards
  - Specifications
  - Open Source
  - Agents
  - Governance
  - Interoperability
---

A standard is only a standard if people can actually use it. That has always been true, but agents raise the bar in a way I don't think every standards body, industry group or enterprise architecture team has caught up with yet. If your standard lives behind a paywall, a membership login, a PDF request form or an internal wiki, it is not going to be standard for agents. It is going to be invisible.

## Agents learn from what they can read

Agents know what they know from two places: what was in the public material the model learned from, and what they can fetch while they are working. A standard that was never on the open web isn't in the first. A standard behind a login isn't in the second. So when an agent is asked to design an API, validate a payload, map a field or generate an integration, it reaches for whatever it has actually seen.

That is why OpenAPI, JSON Schema, OAuth, the IETF RFCs and the W3C specs show up everywhere in agent output. They are good, but more importantly they are public, versioned, linkable and machine readable. Every model has read them many times over, along with years of examples, blog posts, issues and tooling built around them.

A paywalled standard gets none of that. The agent either guesses, hallucinates something that looks like it, or quietly uses the public alternative instead. Either way your standard loses, not because it is worse, but because it wasn't there.

## What "public" should mean

Public isn't just "you can read it if you ask." For agents it means:

- **A stable URL** for every version, with no login, form or paywall in front of it.
- **Machine readable artifacts**, not only prose: JSON Schema, OpenAPI, vocabularies, example payloads and rulesets alongside the PDF.
- **A license that lets people use it**, including in tooling, validators, and yes, training and retrieval.
- **Examples and test cases**, because agents (and people) learn more from a valid example than from a paragraph of normative text.
- **A changelog and versioning** an agent can follow, so it knows which version it is looking at.
- **Discoverability**, linked from an `llms.txt`, an APIs.json, a `.well-known` entry or anywhere else agents look first.

## This applies inside the enterprise too

It isn't only industry standards. Most companies I work with have API design guidelines, naming conventions, data models and governance rules. Too often they live in a Confluence space, a slide deck or someone's head. Those internal standards are exactly what you want coding agents to follow, and they can't follow what they can't read. Publish them, at least internally, as machine readable rulesets and schemas, in the same places your agents and pipelines already look. A style guide turned into lint rules is a standard. A style guide in a deck is a suggestion.

## The business model question

I understand that some standards bodies fund their work by selling the documents, and that membership has real value. I'm not saying that work is free to produce. I'm saying the distribution model is about to decide which standards survive. The organizations that figure out how to fund the work while publishing the result openly are going to see their standards used by every agent out there. The ones that keep them locked up will watch the public alternatives get adopted by default, one generated integration at a time.

## What I'm doing about it

This is a big part of why I track standards on APIs.io and API Commons: which ones are published openly, which ones ship machine readable artifacts, and which ones providers actually adopt. When I measure a provider on the Kin Score, I'm looking for the standards that agents can find and verify. If you steward a standard, or your company has internal ones you want agents to respect, the simplest thing you can do this year is make it public, make it machine readable, and make it easy to find. Otherwise it may be a standard on paper, but it won't be the standard agents use.
