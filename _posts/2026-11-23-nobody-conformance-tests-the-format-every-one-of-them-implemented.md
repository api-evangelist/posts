---
published: true
layout: post
title: 'Nobody Conformance Tests The Format Every One Of Them Implemented'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/nobody-conformance-tests-the-format-every-one-of-them-implemented.png
date: 2026-11-23 21:00:00 +0000
author: Kin Lane
tags:
  - OpenLint
  - Spectral
  - API Governance
  - Standards
  - Linting
---
Back in August I sat down with Łukasz Górnicki, former executive director of AsyncAPI and now at Open Source Europe, to talk about where a rule set specification should live. Most of [that conversation](https://conversations.apievangelist.com/store/2026-09-01-lukasz-gornicki/) was about foundations, fiscal hosts and trademarks. But a short stretch in the middle has stayed with me longer than the rest, because it describes a problem I can see in the tooling every week and that almost nobody talks about.

## The Survey From The Fork's Front Line

When we got to the tools that have implemented the Spectral rule set format, Łukasz walked through what he sees. Vacuum forked the rule set and is backwards compatible in theory, though, as he put it, "some folks say it's not." Redocly and Apimatic treat it as a one-way import. SAP and IBM support it, abstracted behind their own interfaces. Treblle and Postman support it more openly.

That is eight or more tools implementing the same configuration format. Every one of them is making some kind of compatibility claim, explicit or implied. And here is the part that matters: that format was never published as a specification. It is a config file that grew up inside one tool and got adopted everywhere else.

## Not One Claim Anyone Can Check

Think about what "backwards compatible in theory" means in practice. If a team moves a ruleset from one linter to another, how do they know their rules still run? How does the vendor know? Today the answer is: try it, and hope you notice what broke. Some folks say it works. Some folks say it doesn't. Nobody, including the vendor making the claim, has a shared test they can run to settle it.

I wrote last week about [checking a Spectral ruleset before it silently skips your rules](https://apievangelist.com/2026/11/18/check-a-spectral-ruleset-before-it-silently-skips-your-rules/). That is the same problem seen from the user's side. A rule that one engine runs and another quietly ignores does not produce an error. It produces a governance gap that looks like a clean report.

One-way imports are fine. Abstractions behind your own interface are fine. Partial support is fine. What is not fine is that none of it is measurable. Without a shared definition of the format and a shared set of tests, "we support Spectral rulesets" can mean anything from "we run all of it identically" to "we read the file and keep what we understand."

## What A Conformance Suite Would Change

This is the argument for a conformance suite, and I want to be precise about what I mean. A conformance suite is a public set of rulesets and API documents, with the expected results written down. Any engine can run it. Any vendor can publish how many cases it passes. Any user can check the claim themselves.

That changes the conversation in a few ways:

- **Compatibility becomes a number, not a vibe.** "Passes this many of the shared cases" is something you can act on. "Compatible in theory" is not.
- **Vendors get credit for doing the work.** The tools that invested in faithful support can prove it.
- **Partial support stops being a secret.** A one-way import can say exactly which parts it imports.
- **Users can move between tools with their eyes open.** You know before you migrate which rules will behave differently.

It is also a story I can measure, not just an opinion I can hold. Once there is a suite, running every implementation against it and publishing the results is the kind of work the APIs.io and API Evangelist pipelines already do for other artifacts.

## Where OpenLint Fits

This is a big part of why the fork became [OpenLint](https://openlint.org), an open specification and toolbox for linting API artifacts. The first step toward a conformance suite is having a specification to conform to. You cannot test eight implementations against a config file whose only definition is "whatever the original tool did." You can test them against a written spec.

I want to be clear about where things stand. I am not claiming OpenLint has a conformance suite today. What OpenLint gives us is the thing that has been missing: an open, written specification for the format and a place to do this work in the open. A conformance suite is the natural next thing to build on top of it, and it is the kind of contribution that would help every vendor Łukasz named, not just one.

If you maintain one of those engines, I would love to talk about what a shared set of test cases would look like from your side, and which parts of the format you deliberately support differently.

## The Takeaway

Eight-plus tools implement the same ruleset format, and not one compatibility claim among them can be checked by anyone, including the vendor making it. That is not a vendor problem, it is a missing piece of infrastructure. Write the format down as a specification, build a shared conformance suite against it, and let every implementation publish its results. OpenLint is where the specification half of that is happening. The suite is the work in front of us.
