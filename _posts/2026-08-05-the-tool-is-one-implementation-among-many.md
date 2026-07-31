---
published: true
layout: post
title: The Tool Is One Implementation Among Many
date: 2026-08-05
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - Rules
  - Specifications
  - Open Source
  - API Commons
---
When I say the ruleset format matters more than the linter that runs it, that is a claim, and a claim is worth almost nothing without a list behind it. So I built the list. Every engine that executes the Spectral ruleset format, every product that embeds it behind its own interface, and the adjacent tooling that solves the same problem a different way — with a link to the evidence for each one. It is published at [spotlight-rules.com/implementations](https://spotlight-rules.com/implementations/), it renders from a machine-readable data file, and corrections from the maintainers of anything on it get merged on sight.

Making that list is what convinced me the split was not optional.

Start with the engines, because that part is easy and mostly known. There is the upstream linter, still the most widely installed implementation and the reason a specification is needed at all — for years the only definition of a valid ruleset has been whatever that codebase happened to accept, discovered by reading its source. There is my maintained build of it. And there is [vacuum](https://github.com/daveshanley/vacuum), the independent Go implementation, actively maintained and by far the most complete alternative. Dave did something worth pointing at when he wrote it: he did not fork the format. He treated the format as the fixed point and competed on the implementation. That decision is the entire reason there is something worth specifying here — and it is also why vacuum has added capabilities of its own, rule categories among them, that a specification and a conformance suite should be able to absorb rather than argue about in three years.

Then you get to the category that actually changed my mind: the products that embed the format and never mention it.

IBM's [OpenAPI Validator](https://github.com/IBM/openapi-validator) supports Spectral rules, and its README documents something that stopped me — the tool will pick up a standard Spectral ruleset file from the working directory or any containing directory, in preference to IBM's own Cloud Validation Ruleset. That is not a tool that borrowed an idea. That is a tool whose behavior is defined in terms of a file format nobody ever wrote down.

Microsoft's Azure API Center lints API definitions whenever you add or update one, using Spectral as the analyzer, with `spectral:oas` as the default analysis profile. You customize the ruleset locally in the VS Code extension and deploy it back. Microsoft's own [documentation](https://learn.microsoft.com/en-us/azure/api-center/enable-managed-api-analysis-linting) states that Spectral is currently the only supported analyzer type. A hyperscaler's API governance product, running on a file format with no specification, no conformance suite, and — until a few weeks ago — no maintainer draining the issue queue.

I could keep going, and the roundup does. But the shape is already clear, and it is a shape I have watched before in this industry. **A format goes load-bearing inside other people's products faster than anyone writes it down, and then the writing-down never happens, because everybody who depends on it has already solved their own version of the problem privately.**

That is why the invisible category is the one that matters most, and it is the one I cannot map. Several large enterprises wrote their own engine rather than depend on an unmaintained one. Several more run the incumbent behind an internal validation platform nobody outside the company has heard of. None of that shows up in a package registry, in a GitHub search, or in any download count. It is real, it is significant, and it is completely dark.

That darkness is not a curiosity. It is the reason every conversation about giving this format a permanent home stalls in the same place. Whether you are talking to a foundation, a standards body, or someone considering sponsoring maintenance, the question is always *who actually uses this?* — and the answer has never existed in public. The users are governments with mandatory design rules, enterprises behind a facade, and small teams who wired it into CI in 2021 and never thought about it again. Invisible users cannot make a case for themselves.

There is a second thing the list does, and it is the part I care about as much as the map itself. Every one of these vendors solved the same problems separately. What exactly is a valid ruleset? What is a rule's stable identity? What does a finding look like as data? What happens when two rulesets are merged? Each of them answered those questions privately, in their own codebase, in a way that is invisible to everyone else and incompatible with everyone else. **Naming that work publicly is how parallel private effort turns into an ecosystem.** Not by asking anyone to standardize on my build — I have zero interest in that — but by giving all of them one document to point at instead of one another's source code.

I set rules for how the roundup gets kept, because a list like this can go bad quickly. Evidence, not opinion — every relationship claim links to something checkable, and no performance claim gets repeated without a reproducible benchmark. No ranking and no scoring, because the person maintaining one of the implementations does not get to grade the others. Corrections take priority over completeness: if you maintain something on that page and I have it wrong, open a pull request and I will merge it, because being publicly wrong about someone else's project is worse than being incomplete. And one entry is currently marked "relationship not established" rather than guessed at, which I would rather do openly than fake precision.

Where this ends up is the interesting part. Right now the page is a map. Once the [conformance suite](https://github.com/api-commons/spotlight-spec/issues/9) exists, it becomes a register of what actually conforms — run and reported the same way for every engine, with the output published, including where my own build fails. That is the moment "compatible with the Spectral ruleset format" stops being a marketing line and becomes a testable statement, and it is also the moment the implementers doing quiet parity work finally get credit for it.

I am not trying to win an engine competition. I am trying to make it possible for several engines to coexist honestly instead of drifting apart on undocumented behavior and arguing about it later. A map is the first step. A suite is the second. Neither of them requires anyone's permission, and both of them are more useful to the people building on this format than another linter would be.

If you maintain something that belongs on that page, or you run one of the invisible in-house implementations, [the roundup is tracked in the open](https://github.com/api-commons/spotlight-tools/issues/13). Tell me what I got wrong.
