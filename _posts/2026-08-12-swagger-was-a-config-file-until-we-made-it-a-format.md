---
published: true
layout: post
title: Swagger Was A Config File Until We Made It A Format
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/swagger-was-a-config-file-until-we-made-it-a-format.png
date: 2026-08-12
author: Kin Lane
tags:
  - OpenAPI
  - Specifications
  - API Governance
  - Spectral
  - Rules
  - History
---
Everything I am doing with the Spectral ruleset format right now is a move I have watched work before, and I want to write down how it worked, because the people arguing with me about it are making the same argument that was made in 2012.

Swagger did not start life as a specification. It started as a configuration file. It was the thing that told the code generator and the documentation UI what to render — a serialization of one tool's internal model, useful precisely because those tools were useful. The people who created it were building tooling, and the file was a byproduct of the tooling. That is not a criticism. That is how almost every important format in our industry begins.

And then a group of us started saying, out loud and repeatedly, that this thing needed to be a format in its own right. Not a config file for a code generator. A document you could write without ever touching that code generator, that another vendor could implement against, that you could cite in a contract, that could outlive whoever happened to be maintaining the tool that read it first.

The pushback then sounded exactly like the pushback now. Why would you separate it — the tool works. Nobody is asking for a spec, they are asking for features. A specification is paperwork; the code is the truth. If you want it to do something different, send a pull request.

That argument was wrong, and it took roughly 2012 to 2014 to prove it wrong. The elevation of the spec was the single most consequential thing that happened to that format, and everything after it — the donation, the rename to OpenAPI, the initiative, the second and third and tenth implementations, the whole industry that now assumes an API has a machine-readable description — was the continuation of one decision. **A format that exists independently of its tool can be adopted by people who do not use the tool.** That is the entire mechanism. There is nothing else to it.

I bring this up because I am watching the identical situation, one layer up the stack, with the rules people write to govern those descriptions.

The Spectral ruleset format is, today, exactly what Swagger was in 2011: a configuration file for one program. It is described nowhere except in that program's source, its meta-schemas are internal implementation detail coupled to that program's runtime, and the only available definition of a valid ruleset is "whatever the linter accepts this week." Meanwhile that config file has escaped its container completely. It is what national governments write their mandatory API design rules in. It is what large vendors run inside their governance products. It is what a dozen tools I have built — registries, baselines, scorecards, coverage reports, waiver reconcilers, federation layers — have to parse, merge, publish, and reason about.

Every single one of those tools had to answer the same question: *what exactly is a valid ruleset?* And every one of them answered it by reading somebody else's source code. That is a workable answer for one tool. It is not a workable answer for a registry that publishes rulesets, or a federation layer that merges them, or a certification tool that has to prove what was checked, or an agent export that has to translate them into something else entirely.

So the move is the same move. Lift the format out. Write it down normatively — not "here is what happens when you write `given` as an array," but "an implementation **MUST** treat an array `given` as a set of independent path expressions." Give it a conformance definition, a public test suite, a versioning policy, and a stable identity that is safe to cite. Let the tool become one implementation among several, and let the several be measured against the document rather than against each other's bugs.

There is a difference worth naming between then and now, and it cuts in favor of moving faster. In 2012 there was essentially one implementation and a nascent ecosystem, and elevating the spec was mostly an act of faith about what would come. Today there are already multiple engines, at least two hyperscaler-adjacent products embedding the format, national standards written in it, and an entire category of in-house implementations nobody can see. The ecosystem showed up first this time. **The specification is not getting ahead of adoption — it is running years behind it.**

The second difference is less comfortable. Swagger's elevation happened while the company behind it was still actively investing in it, which made the donation a decision somebody could take. That is not the situation here, and it is why the work is happening from outside rather than inside. I would still rather it happen inside; the invitation I made publicly in January 2025 to donate the linter to the OpenAPI Initiative stands, and it would make most of what I am doing unnecessary.

But the lesson from the first time around is that **you do not wait for permission to write down what people are already depending on**. Nobody asked permission in 2012 either. A group of people decided the config file was actually a format, started treating it like one in public, and kept treating it like one until enough of the industry agreed that the question stopped being interesting.

That is the whole play. It worked once, on something far more consequential than a linting format, and the argument against it has not gotten any better in fourteen years.
