---
published: true
layout: post
title: 'Markdown Became the Control Plane for AI'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/markdown-became-the-control-plane-for-ai.png
date: 2026-08-10
author: Kin Lane
tags:
  - Markdown
  - AI
  - Agents
  - Standards
  - Machine Readability
  - Documentation
  - Papers
---

A Perl script published on a blog in March 2004, given away, vaguely specified, and declared obsolete about once a year since is now the format your AI stack runs on. Your agent reads its standing instructions from a `.md` file. Your skills are `.md` files. Your model was trained on a corpus where markdown is the dominant prose serialization, and it emits markdown back at you whether you asked for it or not. Somewhere in your organization, someone is quietly converting your documentation into it right now.

I spent the last stretch writing down what that layer actually is, and it turned into a new paper — [The Fundamentals of Markdown](https://papers.apievangelist.com/papers/fundamentals-of-markdown/). Every `.md` file that matters, where it came from, who owns it, and what the catalog says about who is actually publishing any of it. Anil Dash is threaded through the whole thing, because he was the product manager for Movable Type — the platform `Markdown.pl` first shipped as a plugin for — and because he told me something in [our conversation in June](https://conversations.apievangelist.com/store/2026-06-23-anil-dash/) that I have not been able to put down: *"markdown has become the control plane for AI. You can have the most cutting-edge frontier model from a trillion-dollar company, and you're making a plain text markdown file to try to orchestrate it."*

## Why it won, and why the obvious answer is wrong

The usual explanation is "it's simple." Plenty of simple formats lost. Markdown won on a property John Gruber named as his primary design goal and almost nobody else optimized for: **it is readable when nothing parses it**. Hit a markdown file with an engine that does not understand half its syntax and you still get a legible document. Put a trailing comma in a JSON file and you get an error.

That is graceful degradation of *meaning*, not just of layout, and it is the exact reason a language model handles markdown better than any structured alternative you could hand it. The model does not parse markdown. It reads it. So does a person. That was designed in 2004 for reasons that had nothing to do with machine learning, and it is why every attempt to improve on it has been a rounding error.

## The part that argues with me

My reflex — the one this practice is built on — is that an unspecified format is not a gift, it is a deferred bill, and somebody always pays it. Markdown had no specification for a decade and everyone paid: the same document rendered differently on GitHub, on Reddit, in Stack Overflow, and through Pandoc, in ordinary lists and ordinary emphasis.

Anil thinks my reflex is wrong, and he has receipts. *"The fact that markdown is a little bit of a toy is part of why it's so good. 'Markdown enterprise-grade' would have been a nightmare."* His evidence is not markdown, it is the standards he helped build — OpenID, OAuth, RSS — each of which he could implement in the early days as a self-described lousy coder, and each of which then got enterprised up until *"what I used to hack together by viewing source now took all weekend just to get running."* And then the structural point that should worry anyone who does this for a living: technical correctness and standardization make capture easy for whoever can afford to send someone to a standards meeting.

I think he is right and I think I am too, and in the paper I work out why those are not actually in conflict — the short version being that looseness of syntax is what let markdown spread, ambiguity of implementation is what taxed everyone building on it, and CommonMark is the rare proof that you can fix the second without inflicting the first.

That argument is not a history lesson. It is the correct lens to bring to what is happening right now.

## A dozen companies are deciding what your instruction file is called

Between September 2024 and late 2025 the industry produced more new named-markdown-file conventions than in the previous twenty years combined. `llms.txt` from Jeremy Howard at Answer.AI. `AGENTS.md`, now stewarded by the Agentic AI Foundation under the Linux Foundation. `SKILL.md`, which Anthropic opened as a public specification in December 2025. And then the vendor set — `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, `.cursor/rules/*.mdc` — which are the same concept with five different filenames and five different owners.

The convergence on *a markdown file in your repo that tells the AI how to behave* is real and useful. The five-way split on which filename is a land grab, and you have paid this tax before, in every gateway policy format and every cloud descriptor you have ever had to maintain twice.

## What the catalog actually shows

Claims about adoption in this space are usually made by whoever is selling the adoption, so I counted instead — across the **26,099 API providers** profiled in the [APIs.io](https://apis.io) catalog, in August 2026:

- **6,260 providers (24.0%) publish a fetchable `llms.txt`** — faster uptake than OpenAPI managed in its first two years. But only **31** ship the full-corpus companion, which means the overwhelming majority published an index and stopped.
- **2,495 providers (9.6%) declare agent skills**, and those that do publish about eight apiece — top-heavy enough that skills are still a differentiator rather than a baseline, roughly where OpenAPI sat in 2014.
- **`AGENTS.md` appears at 0.4%** of commercial API providers despite 60,000+ open-source projects using it. The convention is winning in repositories and has not crossed into published API surfaces yet, because providers think of agent instructions as something that happens inside their codebase rather than something they publish to consumers. I think that is a mistake, and the correction is the opportunity.
- And across every markdown file in the catalog, plain `.md` beats `.mdx` **257,980 to 269**. If you are choosing a format for anything an agent might read, that ratio is your answer.

## The one thing to take from it

If you do nothing else: start serving markdown as a *representation*, not just authoring it as a source file. The quiet, important part of the `llms.txt` proposal was never the index — it was serving a clean `.md` version of each page at the same URL. That is content negotiation, a twenty-five-year-old web mechanism finally getting the use case it deserved, and it is spreading faster than `llms.txt` itself among the teams who have thought it through.

The paper is the full version: the 2004 origin and the four formats it borrowed from, the specification vacuum and the fight to close it, every dialect and who owns it, the repo convention layer from `README.md` to ADRs, the whole agentic file explosion with my honest read on each one, the catalog census with its method stated, the anti-patterns I watch for, and a self-assessment you can run against a repository this afternoon.

[The Fundamentals of Markdown](https://papers.apievangelist.com/papers/fundamentals-of-markdown/) is $50 at [papers.apievangelist.com](https://papers.apievangelist.com). The conversation with Anil Dash that runs through it is [free, in full, with audio and transcript](https://conversations.apievangelist.com/store/2026-06-23-anil-dash/).
