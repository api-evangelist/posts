---
published: true
layout: post
title: "The Agent Hype Is at Odds with Your API Foundation"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-agent-hype-is-at-odds-with-your-api-foundation.png
date: 2026-08-11
author: Kin Lane
tags:
  - Agents
  - AI
  - Kin Score
  - Agent Readiness
  - MCP
  - Agent Skills
  - API Governance
  - Machine Readability
---

Everybody is agent-ready now. The MCP server is announced, the Agent Skills are published, the phrase is in the press release and on the pricing page, and the keynote slide has a diagram with an agent in the middle of it. There is a version of this industry where all of that is true and we are further along than we have ever been.

Then you go score the APIs underneath, and a different picture shows up.

I have spent the last stretch of API Evangelist work turning that into something you can actually check. The [Kin Score](https://apis.io/rating/) rates roughly 25,000 providers on two separate instruments. The composite is a 0–100 read on governance fundamentals across six facets — discoverability, contract quality, governance, operational transparency, developer ergonomics, and commercial clarity — plus a conditional regulatory layer that only applies if you are in banking, health, payments, insurance, securities, or government. Agent Readiness is a different 0–100 score across fourteen dimensions, and it asks a narrower question: can an autonomous consumer drive this API safely, without a human standing behind it filling in the gaps?

The two are computed independently. They share no inputs, and they are never rolled up into a single number. That was a design decision, and it turned out to be the most useful one I made, because it means the relationship between them is a finding rather than an assumption I baked in. A blended score can only ever confirm what you already believed when you built it.

## Readiness is a layer, and a layer does not rise above its foundation

That is the finding. Agent readiness tracks the governance composite and does not exceed it. The foundation sets the ceiling.

Look at what actually separates the top band from everyone else and you will not find a single AI feature in the list. Idempotency, so a retry is not a second charge. Error semantics an agent can branch on, rather than a 200 with `"status": "failed"` buried in the body. Auth and consent clarity — who is acting, on whose behalf, with what actually granted. Rate-limit signalling the consumer can read and respect instead of discovering by getting cut off.

Every one of those was supposed to be there already. None of them was invented for agents. What changed is who absorbs their absence. A human developer used to do it — reading the docs when the spec was thin, retrying by hand, guessing what the error meant, backing off by feel, opening a support ticket when something was genuinely ambiguous. That labor was invisible because it was free to the provider. Take the human out of the loop and every one of those gaps becomes load-bearing, all at once.

This is also why an endpoint-level readiness number is close to meaningless. An agent does not consume an endpoint. It tries to complete a capability — open the account, file the claim, move the shipment, settle the payment — and a capability is a chain of contracts across several teams, not a call. The agent fails at whichever contract in that chain is ungoverned. The weakest governed link sets the ceiling for the whole path, which means your readiness is decided by the API nobody has thought about in three years, not by the one you just shipped an MCP server for.

## What the catalog actually looks like

Here is where the announcements and the foundation stop agreeing.

On the composite, **Exemplar is 1.2% of the catalog and Minimal is 42.7%.** On the agent axis, **Agent-Native is 1.2% and Human-Only is 61.4%.** Nearly two-thirds of the providers I can find are APIs a developer can integrate and an agent cannot yet be trusted to drive. That is not a rounding error at the edges of the long tail. That is the shape of the thing.

And a very large cluster of providers sits at a near-identical artifact set producing a near-identical score: a spec, an auth scheme, a documented rate limit. The same three things, nothing else. That is the floor of what an enrichment pipeline can find. It is not readiness, and it is where an enormous amount of the current agentic construction is being poured.

Enterprises and startups are racing to deploy MCP servers and publish Agent Skills to meet this moment. Without a foundation that is designed and governed underneath them, that is a house of cards — and the twenty-five years of systems the enterprise actually runs on is what is supposed to be holding the deck up.

## Shipping an MCP server does not move the number

This is the negative finding, and it is the one people push back on hardest.

An MCP server is a projection of the contract underneath it. It inherits every gap in that contract, and then it hides the evidence of them behind a confident tool surface. On an ungoverned API it does not make the API more drivable; it makes the API easier to call and no safer to act on. Inside an otherwise well-run portfolio it is worse than doing nothing, because a broken thing that looks broken gets fixed and a broken thing wearing a uniform gets deployed.

I know how firmly that lands because the rubric itself got caught doing the optimistic version of it. Earlier revisions awarded twelve points for the presence of an MCP server — the third-largest award in the entire agent model. When Kin Score 0.6 added provenance grading and started asking not "is there an MCP artifact" but "does the provider actually run a server anyone can connect to," the answer came back ugly. Catalog-wide, 1,882 of 3,046 MCP artifacts were derived candidates with no URL behind them. In UK insurance the data credited 14.3% of the cohort with an MCP server and the real number was zero. Across four national banking markets, exactly one institution was running a genuinely hosted one.

The agentic-access dimension had the same disease in a different form. Of 6,388 providers carrying an agentic-access artifact, 6,383 were generated — 99.9% of them. At fifteen points, that dimension was handing out the second-largest award in the model for work my own pipeline had done on the provider's behalf. A dimension nearly everyone earns identically is not measuring anyone. It got reweighted and provenance-graded, and a lot of scores went down.

I am telling you that because it is the whole argument. A measurement that only ever produces flattering numbers is another press release. The instrument has to be able to catch itself being generous, in public, or it cannot be used to check anybody else.

## Being able to tell

That is what this is for. Not to rank anyone for sport.

Right now it is genuinely hard to work out which companies have a handle on this moment, because the signal available to most people is the announcement, and announcements are free. The company that spent two years on idempotency, stable error envelopes, examples and a current contract and the company that spent two weeks wrapping a thin API in a tool surface publish the same blog post. From the outside they read identically.

A score you can look up changes that. You can compare. You can watch a number move over time, which is the only real proof that work happened rather than got announced. You can go and disagree with the rubric, because [it is public and versioned](https://github.com/api-evangelist/kin-score) — currently at 0.9.4 — and the checks are written down rather than vibed. And I can be wrong in public and correct it, which is exactly what happened to the MCP dimension, and which a press release structurally cannot do.

If you want to use it on yourself, the order matters and it is not the order most roadmaps have:

1. **Map the capability, not the endpoint.** Take one business capability that matters and list every contract in its path, including the ones owned by teams you do not like talking to.
2. **Find the weakest governed link**, because it is your ceiling. Not the average. The worst one.
3. **Fix the foundation before the interface** — idempotency, error semantics, consent and identity, rate-limit signalling. This is unglamorous, it predates the agentic era entirely, and it is the actual work.
4. **Then ship the MCP server**, and watch the number move for real.

API governance spent most of its life as an offensive strategy — a way to go faster, ship more consistently, get more out of a platform investment. In a market being flooded with agentic activity it has quietly become a defensive one. The foundation underneath your platform is what determines how much of this era you can absorb, and unlike the announcements, it is something you can measure before it is tested.

Go look up your own score. Then go look up the vendor selling you agents.
