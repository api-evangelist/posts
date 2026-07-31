---
published: true
layout: post
title: Every Specification Is A Land Grab
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/every-specification-is-a-land-grab.png
date: 2026-09-02
author: Kin Lane
tags:
  - Specifications
  - OpenAPI
  - API Governance
  - Strategy
  - Open Source
  - MCP
---
I want to say something out loud that everyone in this industry already knows and mostly pretends not to: specifications are economic land grabs. Not always cynical ones, not always bad ones, but land grabs. And once you see them that way, a lot of otherwise confusing behavior in the API space becomes very easy to predict.

A specification stakes a claim on a piece of the surface area between systems. Whoever defines the format defines the default. The default determines what the tooling assumes, what the tutorials teach, what the job listings ask for, and eventually what an entire generation of engineers thinks the natural shape of the problem is. That is enormously valuable real estate, and it is acquired by writing a document and convincing people to use it rather than by buying anything.

Look at how consistently this plays out. A vendor builds an internal format, opens it, invests in the community around it, and the investment is genuine — but the roads it builds all lead somewhere. Another vendor invests heavily in a neighboring standard, and the investment is also genuine, and it also happens to make their product the natural center of the resulting ecosystem. A large AI company publishes a protocol for connecting models to tools, and within a year it is the assumed substrate for an entire category — a claim staked on the connective tissue of the agent era, made by writing a document and shipping SDKs faster than anyone else could organize a committee. Everyone involved can be acting in good faith and it is still a land grab. Those are not in tension.

I am not saying that as a complaint. I have benefited from land grabs I liked. The reason the API industry has any interoperability at all is that a group of people staked a claim on the description format and defended it long enough for it to become the assumption. **The question is never whether a specification is a land grab. The question is who is grabbing, what they intend to do with the land, and whether anyone else is allowed on it.**

That is the frame I have been carrying into the work I am doing on the Spectral ruleset format, and it is why I have been blunt about what I am doing. This format is valuable real estate. It is what governments write mandatory API design rules in. It is what runs inside multiple vendors' governance products. It is the format an entire category of API governance tooling has to parse, merge, publish, and reason about. And right now nobody has claimed it, because it has never been written down as a thing to claim — it exists only as configuration for one program.

Unclaimed valuable real estate does not stay unclaimed. It gets enclosed by whoever gets there first, and the usual first-mover is a vendor who needs the format to work a particular way for their product. That is not a hypothetical; it is the ordinary outcome, and the version of it I would like to avoid is the one where five vendors each quietly enclose their own slightly different parcel and users discover the fences later.

So yes, I am grabbing. I would rather be honest about that than pretend I am doing something purer. The distinction I care about is *how*.

**Grab it openly.** The claim gets made in public, in writing, where people can object before it hardens. The naming question, the question of where the specification lives, the scope, the conformance model — all of them are open issues with public threads, not decisions announced after the fact.

**Grab it honestly.** No claim of neutrality while quietly steering the format toward my own tooling. My build is one implementation among several and I have said so on the record, published a map of the others, and committed to a conformance suite that will show where my own engine fails. If the suite makes my implementation look bad in public, it is working.

**Grab it communicatively.** Every other implementer gets invited in before anything is published about them, and corrections to what I have written about their projects get merged on sight. Nobody should first encounter their own failing scores in somebody else's blog post.

**And then give the land away.** The whole point of claiming it is to put it somewhere it cannot be enclosed again — a real home, a governance model with more than one person in it, and a license and a stance that make a commercial tier impossible. I have zero interest in owning this. Owning it would reproduce the exact problem I am trying to fix.

The uncomfortable part of this frame is that it applies to me as much as to anyone. Someone reading this can reasonably ask what I get out of it, and the honest answer is: standing. I make a living on reputation, and doing visible work on a format the industry depends on builds reputation. That is a real interest and it should be declared rather than denied. What it does not give me is control — which is why the governance work and the conformance suite matter more than the code, and why every mechanism I have set up is designed to make it possible for other people to overrule me.

The version of this industry I want is one where the valuable ground between systems is held in common, by people who write things down, rather than enclosed by whoever shipped an SDK first. That is not naive — it is exactly what happened with the API description format, and it worked. It just required somebody to notice the land was valuable while it was still possible to claim it for everyone.
