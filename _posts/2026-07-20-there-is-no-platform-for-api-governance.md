---
published: true
layout: post
title: There Is No Platform for API Governance
tags:
  - Governance
  - Spectral
  - API Commons
  - Tooling
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/there-is-no-platform-for-api-governance.png
date: 2026-07-20
---
I had a conversation this week with someone who spent years inside Stoplight and was a core contributor to Spectral and Stoplight Studio. I wanted their read on where the linter everyone governs with actually stops, because they are one of the few people who has seen it from the inside. One thing they said has been rattling around in my head ever since: there is no platform for governance. Everyone is building for documentation, or everyone is building for SDKs — and nobody is building for governance.

They are right, and once you see it you cannot unsee it. Look at the vendors. Redocly is mostly after docs. Speakeasy is mostly after SDKs. The company that owns Spectral acquired it and, as far as anyone on the outside can tell, has left it to stall — the people who built it do not even have write access to the thing they helped create anymore. The forks that exist mostly optimize for one company's edge case. Governance is a slice of the market that startups do not think they need and enterprises desperately do, and it is hard to build for because every enterprise's problems are a little different. So it goes unbuilt.

### Why the linter alone was never going to be enough

The most useful part of the conversation was being walked through where Spectral runs out of road. The framing: the CLI is fine for an individual contributor who drops it into CI and moves on. But at scale, the thing you actually need is governance — and Spectral does not give you that.

- You cannot easily point one ruleset at a whole workspace when your specs live across many repositories, which is how real organizations are structured.
- There is no health over time. You cannot see that a spec has a growing list of problems and act before it goes the wrong direction. Scorecards, where they exist at all, are a single point in time.
- There are no shared, versioned design libraries. Spectral will never tell you that you have three variants of a `User` model across four teams, and it will not help you version a model or propagate a change.
- Introducing rules to a spec that already exists is finicky. It either passes or it fails; you can turn things into warnings, but then everything is a warning and the real issue drowns. Nobody ships with a wall of red, so they turn the check off.
- The hard problems are organizational, not technical. Teams cannot even agree on what counts as a breaking change. Reviewing a spec change as raw JSON or YAML in a pull request is hostile to the non-engineers who need to weigh in, and a `$ref` hides the very shape you are trying to review.

None of that is a knock on Spectral. It is a linter, and a good one. It is a knock on the idea that a linter was ever going to be the whole answer. Governance is a platform-shaped problem, and the linter is one tool on it.

### One platform will not solve it either

Here is where I part ways with the instinct to go build The Governance Platform. I do not believe one product can own this, and I have the scars to prove it. I spent a year standing up API governance at Bloomberg, where every line of business was its own tribe with its own strong opinions, and they would fight. The thing that worked was not a monolith that dictated to everyone. It was a set of composable pieces, a place where the artifacts lived, and a sanctioned way to take exceptions — you could have one, but it was owned, time-boxed, and if you wanted to reuse it you came and argued for it.

So the answer is not a platform in the SaaS sense. It is a **composable, Git-native governance surface**: many small, open tools that each give you one honest view of the same artifacts, that you can adopt one at a time and keep forever. That is exactly what I have been building in the open under [API Commons](https://apicommons.org/tools/), and that map of the gaps lines up almost perfectly with a batch of tools I just shipped:

- **[Governance Baseline](https://baseline.apicommons.org)** — snapshot the violations an estate already has, then fail only *new* ones and burn the baseline down. This is the answer to the wall-of-red problem that stops adoption dead.
- **[Governance Scorecard](https://scorecard.apicommons.org)** — health per spec and per estate *over time*, with the specs whose problem lists are growing ranked at the top. The longitudinal view nobody builds.
- **[Model Library](https://library.apicommons.org)** — a shared, versioned component library with change-propagation and a drift detector that finds those three variants of `User` for you.
- **[Spec Review](https://review.apicommons.org)** — a `$ref`-resolving, stakeholder-friendly diff of two specs that flags the breaking changes and hands you a plain-English summary to paste into the PR.
- **[Code-First Governance](https://codefirst.apicommons.org)** — for the teams that generate their OpenAPI from code annotations, it tells you which findings must be fixed in code and how.
- **[Governance Waivers](https://waivers.apicommons.org)** — sanctioned, owned, expiring exceptions, now with the override/masking policy that came up in the conversation: is this deviation allowed at all, may it be shared, is it a one-time grant?

Those sit alongside the tools already there — [Ruleset Studio](https://studio.apicommons.org), [Coverage](https://coverage.apicommons.org), the [Governance Graph](https://graph.apicommons.org), the [Validator](https://validator.apicommons.org) — and the whole point is that they bind to the same artifacts and each show you a different face of them. Many views, one artifact store, no lock-in.

### The other half: keep the standard open

Tools are only half of it. The reason we are in this spot is that the ruleset format lives inside one vendor's linter as a config file, with no separate specification and no owner willing to invest. The fix is to lift it out and make it a first-class, documented standard the community owns — which the conversation independently pointed to as the thing that unlocks a healthy ecosystem, the way Swagger's canonical implementation did for OpenAPI. That work is underway as [Spotlight Spec](https://github.com/api-commons/spotlight-spec), and I would rather do it as a community-led effort than as one more strong personality declaring "here is my approach" and walking off. If you depend on this format, you should have a seat at that table.

I am grateful for the time and the candor. That conversation handed me a map of exactly where the road ends, and it turns out the road ends right where the work begins. There is no platform for API governance — so let's build the open, composable one that should exist.

*If any of this maps to what you're wrestling with, I help organizations with [governance rollout](https://apievangelist.com/services/governance/rollout/) and [stewarding the standard](https://apievangelist.com/services/governance/stewardship/). Get in touch.*
