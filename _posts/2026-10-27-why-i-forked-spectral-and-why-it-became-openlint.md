---
published: true
layout: post
title: 'Why I Forked Spectral, And Why It Became OpenLint'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/why-i-forked-spectral-and-why-it-became-openlint.png
date: 2026-10-27
author: Kin Lane
tags:
  - OpenLint
  - Spectral
  - Linting
  - Governance
  - Open Source
  - Specifications
  - MCP
---
I get asked why I forked Spectral. The honest answer is that I almost did it the wrong way, by myself, for my own reasons. What came out instead is [OpenLint](https://openlint.org), a community fork with a name, a formal specification, a home at Open Source Europe, and a weekly [office hours](https://openlint.org/meetings/office-hours/) that I've been hosting since September. Four calls in, I want to write down the why.

## Spectral became a standard nobody wrote down

[Spectral](https://github.com/stoplightio/spectral) is the open-source linter Stoplight created, and SmartBear now owns. Over the years its ruleset format quietly became the way the API world writes down its design rules. Governments publish their national API design rules as Spectral rulesets. Banks and enterprises run them in CI. Other tools import them. When I study how companies govern their APIs, a Spectral ruleset is usually where the rules actually live.

But the format was never specified. It is whatever the Spectral CLI happens to do. Development has slowed, and the direction depends on one vendor's priorities. That is a fragile place to keep something that so many public institutions and companies depend on.

## The fork I almost made

I didn't come to this as a standards project. I came to it as a builder. I was building an API and an MCP server for API Evangelist, with linting at the center of it. The idea was an open-source server you run and own yourself, with a support package around it: I'd help you configure it with your rules and style guides, and build a set of skills for how your teams work. I needed Spectral to go places it wasn't going, so I was going to soft-fork it and take it down my own path.

I kept having the same conversation at company after company, though. Lots of teams have implemented Spectral rules. Other than keeping them in Git and running a VS Code plugin, very few have any way to distribute them: how rules are versioned, updated and evolved across teams. Everyone had the same itch, and a private fork would have scratched it for exactly one person. I saw that being a bad decision. A fork only one company maintains is the same problem Spectral has, with a different name on it.

So instead of forking it for me, we forked it for everyone.

## A community fork, done carefully

The work started under API Commons as "Spotlight" back in July, and took the OpenLint name by community vote in September. I'll admit it isn't the name I would have picked. I liked Swagger and I liked Spectral, the flashier names. But I lived through Swagger becoming OpenAPI, and I watched a boring, explainable name win. OpenLint is something you can explain to people who don't know what an API or a linter is.

A few decisions from the first office hours shaped what kind of fork this is:

- **Not a GitHub fork button.** We started a new repository that carries Spectral's full history, so fixes can still be cherry-picked across, without the "forked from" framing that implies we're just trailing upstream.
- **Spectral's license carries forward**, because it has to. Existing Spectral rulesets are meant to keep working.
- **The vendorisms come out.** Rules that crept in from Speccy and Stoplight and have nothing to do with validity get cleaned out of the default ruleset. We say vendorism rather than Stoplightism, because we don't want any vendor pulling the project toward itself down the road, including the ones in the room.
- **AI use stays minimal and agreed per pull request**, not used to write issues.
- **SmartBear is welcome.** There has been talk of donating Spectral to the group. We're not waiting on it, and if they keep building Spectral, the goal is for it to conform, along with Vacuum, Speakeasy and everyone else.

## The specification is the point

The most important part of this work is taking what is really just a configuration of a CLI and making it a formal specification, with normative wording, versioning, and a process. Last week the group merged a formal draft, now published at [spec.openlint.org](https://spec.openlint.org), along with tooling that compiles it and runs conformance tests against the current implementation. It also records, inline, every place where behavior had to be reverse-engineered from Spectral instead of read from documentation. There are a lot of them, which is the whole argument for doing this.

A specification is what lets any tool, open source or commercial, say it conforms. It's what lets a government cite it in procurement. And research we've done on rulesets shows most teams use the default ruleset unchanged, so the defaults the specification sets will end up being the API design rules most of the world actually runs.

## Back to what I needed it for

The thing that pushed me toward forking in the first place is now on the roadmap in the open. There is an [MCP server in progress](https://github.com/openlint/openlint/issues/13), designed MCP-first rather than generated from an API. People are building agent skills that run linting and open pull requests for the easy fixes. And the distribution problem, versioning and shipping rules to teams and to their agents, is now a shared problem with a lot more people working on it than just me.

I'm also curious where this goes beyond API design. If you can constrain what a model produces to a schema like FHIR or ISO 20022, rules on top of that schema could check that the data meets a team's criteria, not just the shape. That's a side experiment for now, but it's the kind of thing a rules standard makes possible.

## Come help

The code is at [github.com/openlint/openlint](https://github.com/openlint/openlint), the conversation is at [github.com/openlint/community](https://github.com/openlint/community), and the office hours are open, recorded and transcribed on [openlint.org](https://openlint.org/meetings/office-hours/). If your organization depends on Spectral rulesets, you depend on this work, and [the Open Collective](https://opencollective.com/openlint) is where you can help fund the maintainers doing it. I forked Spectral because I needed to. It became OpenLint because everyone else needed to as well.
