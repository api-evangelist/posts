---
published: true
layout: post
title: Binding Governance Building Blocks Into One Navigable Graph
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/binding-governance-building-blocks-into-one-navigable-graph.png
date: 2026-07-19
author: Kin Lane
tags:
  - API Commons
  - API Governance
  - Graph
  - Building Blocks
  - Tools
---
I am still working my way through the [governance tools I have been building under API Commons](https://apicommons.org/tools/), one per day, and today I want to show the one that finally made the whole picture click for me: [API Governance Graph](https://graph.apicommons.org). I have spent years arguing that governance is not a list of rules but a stack — a machine rule enforces a written policy, which is explained by a piece of guidance, which protects some consumer experience, which carries a provenance, and which applies at a point in the API lifecycle. That is easy to say in a talk and surprisingly hard to see. This tool takes all six of those building blocks and binds them into a single navigable graph you can walk from any node, in the browser, with no backend and no account.

The Stack view is where I start. Every node lives in one of six columns — Guidance, Policy, Rule, Provenance, Experience, and Lifecycle — and when I click any one of them, everything directly bound to it lights up, with a detail rail I can keep walking from. It turns the abstract stack into something you can actually trace with your finger: this rule enforces that policy, which is explained by this essay, which improves that experience. When those links are all present, governance is legible. That is the quiet payoff of doing the cross-linking work I have been publishing on apievangelist.com for so long — it finally has a surface where the connections are the interface.

The view I keep coming back to, though, is Gaps. It scores the loose ends per layer: rules that no policy enforces, rules tied to no consumer experience, policies with no stated why, policies enforcing rules that are not even in the executable catalog, and guidance essays that nothing points at. This is the view that turns "we have governance" into "here is exactly where it is thin." A rule with no policy behind it and a beautifully written essay that nothing links to are both just noise, and Gaps names them out loud instead of letting them hide in a spreadsheet.

The third view rolls the whole stack up by the experience axis, which is the question the governance book keeps returning to — what does turning a rule on actually buy the consumer. All of this is assembled at build time from two sources I already maintain in the open: the full 769-rule, twelve-format API Commons rule catalog out of api-validator, and the apievangelist.com building blocks — the policies, guidance, experiences, lifecycle, properties, and strategies collections, joined by their published cross-link arrays. The join spine is explicit, not fuzzy. A policy names the rule slugs it enforces and points at the guidance that explains it; a rule carries its own experience tags and its source lineage. The graph just renders what is already declared.

That is the whole idea — governance you can see the shape of, breaks and all, running client-side against a committed snapshot so nothing you do leaves the page. Go [walk the graph](https://graph.apicommons.org), find where your own stack is broken, and if you want help mapping it for a real organization, that is exactly the work I do. This is one more in the daily run of [API Commons tools](https://apicommons.org/tools/), and there are still a few to come.
