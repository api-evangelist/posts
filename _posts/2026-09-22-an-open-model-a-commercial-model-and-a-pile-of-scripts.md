---
published: true
layout: post
title: 'An Open Model, A Commercial Model, And A Pile Of Scripts'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/an-open-model-a-commercial-model-and-a-pile-of-scripts.png
date: 2026-09-22
author: Kin Lane
tags:
  - Profiling
  - Pipelines
  - Open Source
  - Determinism
  - Provenance
  - Kin Score
  - APIs
---
Every provider in the API Evangelist and catalog gets profiled by a pipeline. It reads the company's site and documentation, finds and verifies the contracts they publish, and writes the artifacts the Kin Score reads: the API entries, the pointers, the authentication and error and rate-limit records, the agent-facing surfaces. For most of this year that pipeline was one long prompt handed to Claude, and it worked. It also cost real money per provider, and I could not run it on a laptop with the network cable pulled.

This week I rebuilt it around a question I should have asked earlier: how much of this is actually judgement, and how much is just work?

## The split

I went through every step and sorted it into three piles. Steps a script can do with no model at all. Steps where a model reads something and answers a narrow, bounded question. And steps that need judgement, the kind where a model decides whether a contract on someone else's host really belongs to this company.

The first pile turned out to be most of the pipeline. Probing hosts for well-known documents. Fetching a page and telling a real page from a JavaScript shell. Extracting JSON Schema from a contract's own component definitions. Deriving a vocabulary from what the contract declares. Measuring which conventions a contract already follows and writing that down as a ruleset. Looking up packages on the registries and deciding ownership from the registry metadata rather than from a name match. None of that was ever judgement. It was a model doing arithmetic, expensively, and doing it slightly differently every time.

The second pile is where the interesting engineering happened. Reading a rate-limits page and recording the limit is not judgement either, but it is reading. The trick is to make the model's answer checkable: hand it one page, constrain its output to a schema, and then refuse any row whose quoted value is not on the page verbatim. A price that is not on the pricing page is a price the model remembered, and it gets dropped before it is written. The same shape now covers sandbox details, changelogs, decline codes, and the description and tags on the record itself.

The third pile is small. Identity when the only URL is a trading-venue listing. Ownership of a contract found on a parent brand's portal. Which five resource groups an integrator actually cares about. That is what a model is for.

## Two engines, one pipeline

Once the piles were sorted, the engine question got easier. The pipeline is modular now, four pieces that each own their own files, and each piece can run on Claude or on an open-weight model served locally. I have been running gpt-oss-120b on my own machine, which costs nothing per token and takes about ten minutes per provider.

The local model is honest and conservative. It does not invent endpoints. What it does is stop early. Handed a documentation index of several hundred pages, it reads two and reports that nothing was found. Claude keeps digging for forty turns. That gap, discovery persistence, was the whole difference between the two engines, and it closed once the digging moved into scripts. The pre-flight now finds the documentation routes, renders the pages that need a browser, walks the menus that hide a contract export, and hands both engines the same dossier before either spends a token.

On the benchmark provider I used all week, a payments company whose contract sits behind two menu clicks on a parent brand's portal, the local run went from a score of ten to within a couple of points of the Claude run. The remaining difference is one judgement call I would not want a script to make.

## What the scripts changed for Claude

The surprise was that the commercial side got better too. The deterministic steps run in a finishing pass that does not care which engine did the reading, so the derived artifacts, the harvested documents, and the verification gates land on every profile. The Claude benchmark profile gained twelve points from the same finishing pass, on artifacts the old prompt never asked for.

The gates matter more than the points. A local model registered a self-hosted GitLab's own API endpoint as the provider's GraphQL API. It wrote placeholder files that earned credit for documents the provider never published. It changed a company's website to a different company's brand from memory. Each of those now trips a check that holds the profile back for review, and the checks apply whether Claude or the open model made the mistake. A pipeline that can hold its own output back is worth more to me than one that scores higher.

## When there is no contract

The last piece went in yesterday. When neither engine finds a machine-readable contract but the API is documented, the pipeline reads the reference pages and generates one. It is marked as generated in every way the catalog's provenance layer looks for, every operation names the page it was read from, and it is credited at a quarter of what a published contract earns. That is the right price for a document we wrote about someone else's API, and it is a great deal better than a provider scoring as though they had no API at all.

## What I think this means

I do not think the answer is open models or commercial ones. I think the answer is that a pipeline with a hundred percent model share was a pipeline that had not been thought through. Every step I moved into a script got cheaper, got consistent, and got a validation gate the model version never had. The steps that stayed with a model are the ones I can now explain, and the engine behind those steps is a switch, per module, with the commercial model as the default and the open one a flag away.

The catalog runs on judgement in a few places and on evidence everywhere else. It took a week of arguing with a local model to see which was which.
