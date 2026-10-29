---
published: true
layout: post
title: "Google Ships Agent Skills Like Products, And That's The Lifecycle They Need"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/google-ships-agent-skills-like-products-and-thats-the-lifecycle-they-need.png
date: 2026-10-29
author: Kin Lane
tags:
  - Agent Skills
  - Google
  - MCP
  - API Lifecycle
  - Governance
  - Standards
---
Google published a good look at [how it ships its Agent Skills like products](https://cloud.google.com/blog/topics/developers-practitioners/behind-the-scenes-two-months-later-how-we-ship-google-agent-skills-like-products), two months after the first behind-the-scenes post. The [Google Agent Skills repository](https://github.com/google/skills) now holds more than 170 skills from teams across Google, and has passed 21,000 GitHub stars, up from 15,000. The line that frames the whole post is one I've been trying to say for a while: a skill is a living product, not a one-off document.

That's the API lifecycle, applied to a new artifact, and it's worth walking through what Google built because almost all of it is something we already know how to do with APIs.

## A skill is a behavioral contract

Google's argument is that documentation explains concepts to a person, while a skill steers an agent's reasoning, tool selection and execution. A misplaced phrase can send an agent to invalid command flags, an infinite loop or wasted tokens. So every edit to an instruction is a behavioral change, and it gets treated like one.

Their pipeline has six automated gates before a human approves anything: structural conformance, skill linters, semantic versioning, evaluation suite validation, link validation, and an AI review agent that uses a skill to review skills. Every behavioral change needs a version bump. New skills start at `1.0.0`. Every pull request has to link a fresh evaluation report comparing the skill to its previous version, or to an agent without it. Links get checked before merge and again every Monday.

Swap "skill" for "API" and that's a mature API governance program: a contract, a style guide enforced by linting, versioning with rules, tests as evidence for every change, and a human who owns the decision. I'm glad to see it arrive this early in the life of a new artifact type instead of ten years in.

## The deterministic trap

The part I'd underline is what Google calls the deterministic trap. Authors write rigid, numbered sequences of CLI commands into Markdown, and hand a probabilistic engine something that needed to be exact. Google's reviewer moves those sequences into scripts and keeps the instructions for work that needs judgment: choosing an architecture, diagnosing logs, synthesizing code. Scripts have to run without interactive prompts, take flags, offer `--help` and a `--dry-run`, and write JSON to standard output.

I learned the same lesson running the APIs.io pipeline. When I went step by step through it, 20 of its 41 steps didn't need a model at all, and moving those into scripts is what made the pipeline repeatable. Google's companion rule, stage the cheap deterministic checks first and only run the expensive LLM checks when those pass, is the same idea applied to CI. So is their advice to prefer remote MCP tools and wrap any other CLI or API call in a script. The model does the judgment. The contract and the code do the rest. It's the same principle behind [the MCP Style Guide](https://apievangelist.com/2026/10/27/writing-the-style-guide-for-the-tools-an-agent-reads-first/).

Their documentation drift lesson is another one I recognize. Google's `index.json` opens with "This file is generated. Do not edit it by hand." The [APIs.io skills](https://apis.io/skills/) publish a manifest the same way, at `/skills/index.json` and `/.well-known/agent-skills/index.json`, generated from the skills themselves. Every hand-maintained index I've ever run fell out of date within weeks. Generate it and test it, or it will lie to you.

## Where the standards come in

Google's review checklist requires frontmatter that follows the [Agent Skills specification](https://agentskills.io/specification), which is one of the specifications I now track every week in [The Specification Layer](https://standards.apievangelist.com/specification-layer/). That's what makes a catalog of 170 skills portable across platforms instead of tied to one.

The other standard that matters here moved today. The Model Context Protocol's Skills extension is now [officially Beta](https://apievangelist.com/2026/10/29/skills-over-mcp-is-now-officially-beta/), which gives skills a way to be served by an MCP server, with a `skill://` URI per skill and a defined change process behind it. Google distributes its skills through GitHub and package tooling like `npx skills update`, and makes the point that skills don't auto-update in the background, so teams can pin a known-good version. That's the right default for a repository. When a week ago I [counted who serves skills over MCP the way the spec says](https://apievangelist.com/2026/10/21/four-companies-serve-skills-over-mcp-the-way-the-spec-says/), I found four companies. APIs.io serves its own twenty skills that way too.

What I'd like to see next is the two coming together: the version Google already puts in each skill's metadata, served from the same MCP server as the tools the skill teaches an agent to use, so a client can see which skill version goes with which tools. Google has built the product discipline. The protocol now has a lifecycle to carry it. A skill shipped like a product deserves a distribution channel that treats it like one.
