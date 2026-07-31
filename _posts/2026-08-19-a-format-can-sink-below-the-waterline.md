---
published: true
layout: post
title: A Format Can Sink Below The Waterline
date: 2026-08-19
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Rules
  - Specifications
  - Open Source
  - Strategy
---
There is a specific way that important infrastructure disappears, and it does not look like a project getting archived. It looks like success.

The format goes into more and more products. Vendors build on it, wrap it, abstract it away behind their own interface, and stop mentioning it by name because their users do not need to know. Enterprises deploy it inside internal platforms with a different name on the front. Governments write their standards in it. Adoption goes up the whole time. And underneath all of that, the thing itself stops moving — the issue queue stops draining, the pull requests stop merging, and the number of people who could tell you how it actually behaves drops toward zero.

I have started calling this sinking below the waterline, and it is the honest description of what has happened to the Spectral ruleset format over the last two years.

The evidence is not vibes. Issue triage on the upstream project peaked in 2021 with 157 issues closed. It closed 12 in 2025, and 10 so far in 2026. There are 241 open issues and 39 open pull requests, and the oldest community pull request has been waiting five years. A compromised dependency reached the project through its rulesets package in July 2026; the issue reporting it is still open, and the single follow-up question on it was never answered. Install-time analytics were added across the packages on 30 June 2026. Meanwhile the format's usage kept climbing.

That combination — flat maintenance, rising dependency — is the actual danger, and it is worth being precise about why.

When the format is only alive inside other people's products, the incentive to write it down goes to zero. Every vendor embedding it has already solved their own version of the problem. They know what their build accepts, they pinned a version, they wrapped it, they moved on. The cost of the format having no specification is paid entirely by people who are not in the room: the next implementer, the team trying to migrate between engines, the government trying to cite a version number in a standards document that will outlive everyone's interest, the tool author who has to parse a ruleset and has nothing to parse it against.

The analysts stopped talking about it too, and for a reason that should worry anyone who cares about this space: it stopped being a thing you could point at. A format that only exists inside other products is not a market category. It is an implementation detail of other people's products.

Here is the part that made me act rather than write another post about it. **Below the waterline is not a stable state. It is a phase on the way to unrecoverable.**

Every month of this makes extraction harder. The vendors who abstracted it away drift further from the original behavior, because they have no shared document to drift *toward* — each one's private answer to an ambiguity becomes their permanent answer. The people who understood the internals move on to other jobs, and the knowledge that was never written down goes with them. New entrants build their own thing instead, because reimplementing beats depending on something unmaintained. And the rulesets that governments and enterprises have written accumulate, each one an asset whose meaning is defined by a program nobody is maintaining.

Give that another six months to a year and there is no coherent thing left to lift out. Not because anyone killed it — because the format will have quietly become five slightly different formats, each one correct inside its own vendor, none of them documented, with no basis left for saying which behavior was ever the real one. You cannot write a specification for that. You can only pick a winner and tell everyone else they were wrong, which is not a thing anyone has the standing to do.

That is the urgency. Not that the tool is broken today — it works, it is genuinely good software, and people are shipping with it right now. The urgency is that **the window for extracting a format cleanly closes quietly**, and you only notice it closed from the other side.

So the response is deliberately narrow. Lift the ruleset format out and write it down normatively while there is still a single coherent answer to lift. Build a conformance suite so that divergence becomes visible and adjudicable instead of silent. Publish the map of who implements and embeds it, so the invisible dependency becomes a visible one. Give it a home and a governance model so that the answer to "who maintains this" is never one person again.

None of that requires the tool to be a competitor to anything, and none of it requires anyone to switch. It requires the format to exist as a document before the moment it can no longer be written.

The vendors quietly running this thing inside their products have the most to gain and are the least likely to say so publicly. If that is you: a written specification, a conformance suite, and a maintained engine are all cheaper for you than the alternative you are currently exposed to, which is a private dependency on an unmaintained codebase whose behavior nobody has ever documented. You do not have to endorse anything. Saying "we depend on this" is enough, and [it can be said privately](https://spotlight-rules.com/involved/).
