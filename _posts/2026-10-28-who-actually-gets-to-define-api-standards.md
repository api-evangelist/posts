---
published: true
layout: post
title: 'Who Actually Gets To Define API Standards'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/who-actually-gets-to-define-api-standards.png
date: 2026-10-28
author: Kin Lane
tags:
  - Standards
  - Specifications
  - Governance
  - OpenLint
  - Community
  - Open Source
---
Every API standard I've watched take shape was decided by somebody, and it was rarely the people who end up living with it. I've been thinking about this a lot since [forking Spectral into OpenLint](https://apievangelist.com/2026/10/27/why-i-forked-spectral-and-why-it-became-openlint/), because the first real question a fork has to answer is not technical. It is who gets a say.

As far as I can tell, there are four groups shaping API standards, and they do not have anything close to equal volume.

## The market

Customers, the people who actually build and consume APIs, are the ones a standard is supposed to serve. They have the most at stake and the least organized voice. They show up as demand: a format everyone quietly adopts, a pattern that spreads because it works, a feature request repeated across a hundred issue trackers. Spectral rulesets became a de facto standard this way. Governments and banks started publishing their API design rules in a format nobody had ever specified, because it was what worked.

The market defines standards by adoption, after the fact. It rarely gets a seat while the thing is being written.

## Vendors

Vendors have the seats. They build the tools, fund the foundations, staff the working groups and ship the implementations everyone else has to be compatible with. That's not a bad thing. Most of the specifications I depend on exist because a company paid people to write them. But a vendor's priorities are its roadmap, and a standard that depends on one vendor depends on that roadmap. I watched Swagger become OpenAPI. I'm watching Spectral's format live inside one company's CLI. The vendor is usually the first to define a standard and the last to want it pinned down.

## VCs and their portfolios

This is the loudest group right now, and the least discussed. Investors don't write specifications, but they decide which companies get the budget to show up, and their portfolios carry the biggest megaphone in the room. When a funded wave of companies all adopts the same protocol at the same time, it becomes a standard by sheer volume, whether or not anyone ever agreed on it. Much of what is being called a standard in the agent space this year looks like this to me. Momentum gets mistaken for consensus.

## Academia

Then there's the group with the deepest work and the quietest voice. Researchers have been working on machine-readable APIs for a long time. [Hydra](https://www.hydra-cg.com/) described hypermedia-driven web APIs on top of [JSON-LD](https://www.w3.org/TR/json-ld11/) years before agents needed them. [SLA4OAI](https://github.com/isa-group/SLA4OAI-Specification) extended OpenAPI to describe service-level agreements, plans and rate limits, exactly the things I now spend my days trying to get providers to publish. Most of the industry never read either.

And there's another version of this group that I run into constantly: academics inside organizations, disguised as architects. People doing careful, rigorous standards thinking inside enterprises, whose work never leaves the building. A lot of what the public conversation is rediscovering already exists in somebody's internal wiki.

## Why this matters

When a standard is defined mostly by vendors and VCs, it tends to serve the people selling, not the people building. When it's defined mostly by academia, it tends to be right and unused. When it's defined only by the market, it's useful but never written down, which is how a configuration file ends up as the API design rules of entire governments.

The work I want to do, and that I try to do with [The Specification Layer](https://standards.apievangelist.com/specification-layer/), is to make the quiet groups louder. Read what actually merged, not just what was announced. Bring the research back into the room. Measure what the market actually adopted instead of what got the press release. And, with [OpenLint](https://openlint.org), set the table so that the people who live with a standard have as much say as the people who sell it.

If you're one of the quiet ones, a customer with an opinion, a researcher whose work got skipped, or an architect sitting on something good inside your company, the rooms are open. Most specification calls are public, recorded and looking for people who don't have a product to sell. Show up.
