---
published: true
layout: post
title: "VCs Bet the Fund on Agents. Do Their Portfolios Have the Foundation?"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/vcs-bet-the-fund-on-agents-do-their-portfolios-have-the-foundation.png
date: 2026-07-24
author: Kin Lane
tags:
  - Agents
  - AI
  - Kin Score
  - Agent Readiness
  - Venture Capital
  - Investment
  - Machine Readability
  - APIs
---

Every venture capital firm has the same positioning right now. Agentic is the priority. It is where the next fund goes, it is the memo they send their limited partners, and it is the advice they hand to every enterprise that asks them what they should be investing in. If you listen to the top of the market, the future is autonomous software acting on your behalf, and the big money has all moved there. And it has been doing this for some time now.

There is little to argue with the thesis. Meanwhile, there are serious questions about the foundation underneath it. If agents are going to "do the work," they will be calling APIs, which sounds easy, but the devil is always in the details of discovering, onboarding, obtaining keys, and managing costs and rate limits. Developers know these details all too well, but those who are promising that agents are the future don't always have a firm understanding of what it takes for an agent to use one API, let alone many APIs.

Documenting what it takes to discover, onboard, and automate the integration of APIs into ANY application has been behind the API Evangelist work since 2010. Despite the popular storyline that APIs were built for automation and bots, it was just cheaper to use developers.

So which VC portfolios are deeply understanding what it takes for their investments to respect this reality?

The [VCs section on APIs.io](https://apis.io/vcs/) profiles 106 venture firms and their portfolio graphs, in an attempt to quantify the machine-readable API foundation portfolio companies possess, as well as their investment in the standards and specifications required to meet the demand of what agents will need when it comes to automating the integration of AI into the enterprise.

- Which companies in each VC's portfolio have publicly available API information on APIs.io.
- The Kin Score™ for each company based on API portfolio quality and Agentic AI readiness.

The Kin Score is made up of two axes.

**The foundational Kin Score Composite.** It rates a provider 0–100 across six facets — discoverability, contract quality, governance, operational transparency, developer ergonomics, and commercial clarity — and places it in a band from Exemplar (70+) down to Minimal. It answers the questions: How well can a machine find this API, read its contract, understand how it behaves in production, and know what it costs? Are all the answers to these machine-readable artifacts rather than needing a human to read the website?

**The Kin Score Agent-Readiness** sets the bar for this agentic moment in time. It is a separate 0–100 score that asks a narrower, sharper question: Can an autonomous agent — not a human developer with judgment and a Slack channel — safely drive this API? It rewards a machine-readable contract and documented auth, and then it looks for the things that actually keep an agent from doing damage: an agentic-access classification, an MCP server, idempotency keys so a retry does not double-charge a card, stable error semantics so a failure is something to branch on rather than guess at, examples, and rate-limit signaling. The score bands run from Agent-Native (60+), Agent-Ready (45+), Agent-Aware, down to Human-Only.

A great API with no agent rails has a composite Kin Score of 73.5 but may still sit at Agent-Ready 48.1 because it has not shipped idempotency and stable errors. A thin API with a bolted-on MCP server could have a composite Kin Score of 42.5, scoring Agent-Native 64.4 on the readiness axis while its foundation is still half-built. The company you want an agent to run against needs a composite score in the 70s and an agent-readiness score in the 90s. This means the foundation is real, and the rails are on.

## "Agent-ready" is the floor, not the finish line

Read a VC's page quickly, and you see big, reassuring "agent-ready" counts next to every marquee firm. Read the rubric and your reassurance evaporates.

Agent-Ready is the 43%-of-catalog floor. It means a spec exists, auth is documented, and someone classified the operations — the minimum for an agent to read the API. Agent-Native (60 and over) is the band with the safety rails, and it represents just 1.4% of the entire catalog. The gap between "an agent can read this" and "an agent can act on this without a human papering over the cracks" is the gap almost nobody has closed.

So the honest way to grade a portfolio is not "How many companies cleared the floor?" It is "How many cleared the bar?" Here is the roll-up for the five firms most associated with the agentic thesis, as at the end of July 2026 and scored against their entire tracked portfolio on the network:

| Firm | Scored portfolio | Strong+ (≥60 composite) | Agent-Native (≥60 readiness) | Human-Only |
|---|---|---|---|---|
| Andreessen Horowitz | 1,086 | 35 (3.2%) | 99 (9.1%) | 768 (71%) |
| Accel | 759 | 29 (3.8%) | 76 (10.0%) | 492 (65%) |
| Insight Partners | 791 | 24 (3.0%) | 66 (8.3%) | 515 (65%) |
| Y Combinator | 837 | 16 (1.9%) | 97 (11.6%) | 576 (69%) |
| 500 Global | 2,095 | 10 (0.5%) | 103 (4.9%) | 1,746 (83%) |

Whatever the marketing page says, this is what the foundation looks like. The best-performing firm on the agentic axis, Y Combinator, has 11.6% of its portfolio at Agent-Native, and roughly seven in ten of its companies are Human-Only: a developer could integrate them; their agent cannot yet. Across all five firms, the Exemplar band (70+ composite) is under 1% of the portfolio. The agentic future is being underwritten on a foundation that, portfolio-wide, is largely transparent.

## The roll-up suggests each firm's bets

This single table separates two strategies that blur together in the press releases.

a16z and Accel are quality-dense. Accel has the highest hit rate in the group, 3.8% strong-or-better and one in ten Agent-Native, from a focused 759-company book. The top of its portfolio reads like an agent's shortlist: Anthropic (75.5 / 86.5), UiPath (73.6 / 70.2), Vercel (71.2 / 65.4), Merge, Airbyte. a16z is the same shape at larger scale: Stripe (81.3 / 100), Twilio (79.0 / 77.9), Asana, Okta, Figma (73.0 / 79.8). When these firms say "agent-ready," a real slice of the portfolio can back it up.

500 Global is a volume play, and the roll-up exposes it. 2,095 companies on the network, the largest footprint of any firm here, and ten of them at 60+ composite. Five Exemplars. Eighty-three percent Human-Only. Breadth is a fine venture strategy; it is not the same thing as an agentic foundation, and a firm-level score makes that impossible to hide. Techstars and the other accelerator-shaped portfolios show the identical signature: enormous network presence, a thin band of companies an agent could actually drive.

Insight Partners is the cautionary tale in miniature. It owns two of the best developer-infrastructure APIs in the catalog, Postman (75.5 / 69.2) and JFrog (73.1 / 70.2), and it also holds SentinelOne (composite 16.7, agent-readiness 0, Human-Only) and monday.com (composite 8.8, agent-readiness 0), two companies whose entire market narrative is AI and automation, sitting at the bottom of both scores as indexed on the network. The agentic story and the agentic foundation are, inside the same fund, on opposite ends of the chart.

## The tell: the darlings are thin, and the old guard is native

Sort every firm's portfolio by agent-readiness and the same names surface at the top: Stripe, Twilio, Anthropic, Zapier, GitLab, Webflow, Figma, Cloudflare. Notice what most of them have in common. They are API-first companies that built rich, idempotent, well-documented contracts years before "agentic" was a category — because that is what good API engineering looked like all along. Stripe is the only provider in the catalog scoring a perfect 100 on agent-readiness, and it got there by shipping idempotency keys and a stable error envelope a decade ago, not last quarter.

Now sort by the marketing. The companies leaning hardest on the AI-and-agents pitch, SentinelOne, monday.com, Talkdesk (32.6 / 5.8, Human-Only), Intercom (45.8 / 53.8), Segment (44.3 / 53.8), are exactly the ones thin on the operational foundation an agent needs. It is an uncomfortable finding: being an "AI company" and having a portfolio that agents can safely operate are almost unrelated. The former is a positioning. The latter is idempotency, error semantics, examples, and a machine-readable contract — the unglamorous work that shows up in the score whether or not it shows up in the deck.

And the safety rails are the industry-wide gap. Pull the readiness dimensions across even the strongest providers and the same three come back false again and again: idempotency, stable error envelopes, request/response examples. GitHub, Figma, GitLab, and Twilio all live in the 70s and 80s and still miss idempotency. That is the frontier. Not another MCP server bolted onto a thin API, but the retry-safety and error-branching that an autonomous agent needs before you let it act unattended.

## What to do with this information

If you are a founder in one of these portfolios, the roll-up is an early draft of your diligence memo. Your firm's agentic thesis is a promise your API has to keep. Run the agent-readiness scan on yourself and close the three rails everyone is missing before your Series B does it for you.

If you are an enterprise taking the "invest in agentic" advice, apply it to the vendors selling to you. The readiness band is your procurement question. An agent deployed against a Human-Only API is a human process wearing an agent's costume — you will be the human papering over every gap it hits.

And if you are a VC: the portfolio graph rolls up into a number, and the number is a truer read on your agentic thesis than any slide. The firms that win the agentic decade won't be the ones that funded the most companies calling themselves AI. They will be the ones whose portfolios can be driven, foundation-first, then the bar.

The Kin Score is based upon publicly available signals. Missing elements don't mean they do not exist. It just means that they aren't communicated in a way that an agent and human can easily find. It just means that many of the standards in place guiding API integration and agentic onboarding aren't in play. Some companies will need a little attention to raise the bar; otherwise, they haven't been properly investing in the foundation required.
