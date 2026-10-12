---
published: true
layout: post
title: 'Sixty-Four Talks In Stockholm, And The Agenda Aligns With My Keynote'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/sixty-four-talks-in-stockholm-and-the-agenda-agrees-with-my-keynote.png
date: 2026-10-12
author: Kin Lane
tags:
  - Nordic APIs
  - Events
  - Kin Score
  - Agent Readiness
  - Agents
  - MCP
  - Stockholm
  - APIs
---
The [Nordic APIs Platform Summit](https://nordicapis.com/events/platform-summit-2026/) opens in Stockholm tomorrow, Tuesday and Wednesday, 13 and 14 October, and I close it on Wednesday at 15:45 with a talk called [The Agent Hype is at Odds with Your API Foundation](https://talks.apievangelist.com/2026-nordic-apis-platform-summit/2026-nordic-apis-platform-summit-agent-hype.html). Before any event I read the whole agenda and map every session to the [Kin Score](https://apis.io/rating/) facet it speaks to, and I did that for Stockholm this weekend: 64 sessions, both days, all three rooms. The [full mapping is on talks.apievangelist.com](https://talks.apievangelist.com/events/nordic-apis-summit-2026/), filterable by facet, track and day.

I spent the two weeks before this writing [one post per facet](https://apievangelist.com/2026/10/09/the-kin-score-facet-by-facet-regulatory-posture/), nine of them, as a drumbeat toward this talk. So I came to the agenda with the catalog numbers fresh from APIs.io. And the thing I did not expect is that the agenda itself makes the talk's argument. Count the sessions by the facet they are mostly about, and the shape of the programme is the shape of my argument around agent hype and the foundation we are building upon.

## The agenda, counted

The summit's theme is "Evolving APIs for the Agentic Era," and it shows. Forty-seven of the 64 sessions touch Agent Readiness, and 34 are mostly about it. The four foundation facets I walk through on stage, Contract Quality, Operational Transparency, Access Clarity and Contract Governance, are the main subject of 23 sessions between them. Here is the count next to what the catalog says about each facet on rubric 0.23, from the facet series.

| Facet | Sessions, primary | Sessions, touching | Catalog on 0.23 |
|---|--:|--:|---|
| Agent Readiness (the layer) | 34 | 47 | 4.8% of providers score readiness above their composite |
| [Contract Quality](https://apievangelist.com/2026/09/30/the-kin-score-facet-by-facet-contract-quality/) | 4 | 15 | 64.5% score zero. Median 0 |
| [Operational Transparency](https://apievangelist.com/2026/10/06/the-kin-score-facet-by-facet-operational-transparency/) | 9 | 25 | 45.9% score zero. Median 2.6 |
| [Access Clarity](https://apievangelist.com/2026/10/05/the-kin-score-facet-by-facet-access-clarity/) | 1 | 8 | 30.5% score zero. Median 21.1 |
| [Contract Governance](https://apievangelist.com/2026/10/01/the-kin-score-facet-by-facet-contract-governance/) | 9 | 19 | 64.5% score zero. Six providers above 75 |
| [Discoverability](https://apievangelist.com/2026/09/29/the-kin-score-facet-by-facet-discoverability/) | 2 | 11 | Mean 55.3. The one facet most of the catalog passes |
| [Developer Ergonomics](https://apievangelist.com/2026/10/02/the-kin-score-facet-by-facet-developer-ergonomics/) | 1 | 7 | Median 9.5. A docs link and a support page |
| [Regulatory Posture](https://apievangelist.com/2026/10/09/the-kin-score-facet-by-facet-regulatory-posture/) | 2 | 10 | Nobody above 75 |
| [Create-or-Update Ergonomics](https://apievangelist.com/2026/10/07/the-kin-score-facet-by-facet-create-or-update-ergonomics/) | 0 | 2 | 75.6% of write APIs score zero |
| [Open Source Surface](https://apievangelist.com/2026/10/08/the-kin-score-facet-by-facet-open-source-surface/) | 0 | 2 | Applies to 739 providers. Median 60 |
| Accountability (not scored yet) | 2 | 13 | No check reads it |

The room will spend two days on the layer. The catalog says the layer is the part almost nobody has, because the foundation underneath it is the part almost nobody wrote down. Those are not two different stories. The talk's finding is that readiness is a layer and a layer does not rise above its foundation: across 28,597 providers the correlation between the governance composite and agent readiness is 0.874, and not one of the 12,369 providers in the bottom band is agent-native. The agenda is what that looks like as a programme. Thirty-four sessions on what an API needs to become, and a handful on what it would have to be first.

## What the foundation talks will tell you

The sessions that are about the foundation are some of the best on the programme, and they line up with what the series found facet by facet.

On Contract Quality, [Milton Carranza of MSD](https://nordicapis.com/sessions/your-bad-api-design-is-costing-you-tokens/) has a benchmark showing the same business API, designed well and badly, costs frontier models 30 to 77 percent more tokens. That is the series' point about operation distinctiveness turned into an inference bill. [Miriam Greis of adorsys](https://nordicapis.com/sessions/schema-based-contract-testing-preventing-api-drift-in-practice/) is on contract testing against drift, which is the discipline behind the 64.5 percent of the catalog that has no contract I can read at all.

On Contract Governance, [Daniel Kocot](https://nordicapis.com/sessions/spec-driven-api-design-from-consumer-capability-to-api-contract/) makes the specification the governance source of truth, [Gareth Faull of LSEG](https://nordicapis.com/sessions/spacetime-crystals-and-coherent-apis/) measures organisational coherence through the API estate, and [Lorna Mitchell](https://nordicapis.com/sessions/api-standards-for-ai-agents/) lays out layered standards for agents, shared vocabulary and expected behaviour including errors. This is the thinnest facet in the catalog. [Ninety-five companies publish their design rules](https://apievangelist.com/2026/10/12/ninety-five-companies-publish-their-api-design-rules-and-apis-io-lists-them-first/), and nobody publishes an Overlay the catalog can fetch.

On Operational Transparency, [Mayur Upadhyaya of APIContext](https://nordicapis.com/sessions/taking-the-p-out-of-apis-dependability-in-the-age-of-machine-speed-execution/) has the number I most want the room to hear: across 5,600 monitored endpoints, a third degrade silently while the status page stays green. The facet post said this facet measures disclosure, not truth. His talk is the measurement of the gap between them.

Access Clarity gets one primary session, [Josh Twist of Zuplo on MCP monetization](https://nordicapis.com/sessions/mcp-monetization/), with [Sumit Amar of WEX](https://nordicapis.com/sessions/when-agents-become-customers-building-pay-per-use-apis-with-the-machine-payments-protocol/) on an agent paying per call with no sign-up and no key. That facet is a fifth of the composite and the one that decides whether an agent is permitted to act at all. It is the least talked about foundation facet on the programme.

## The four disciplines, and who is teaching them

The second part of my talk is the four disciplines that separate agent-native from everyone else. None was invented for agents. Each has a session in Stockholm, and each has a catalog number from the deck's re-measure of the 3 October snapshot.

- **Idempotency.** [Hongliu Cao of Amadeus](https://nordicapis.com/sessions/beyond-status-codes-enforcing-process-integrity-when-ai-agents-call-your-apis/) found that 27 to 78 percent of "successful" agent transactions broke a procedure, and argues for execute, verify, confirm on irreversible writes. [Natalia Venditto of Adobe](https://nordicapis.com/sessions/the-agent-harness-your-new-api-gateway/) has the harness quietly doing your retries. The catalog: 1,088 providers earn the dimension, 3.8 percent, and 443 of those are verified in the contract.
- **Error semantics an agent can branch on.** Amadeus again, and Lorna Mitchell's expected behaviour including errors. The catalog: 20.9 percent earn it, 8.9 percent verified.
- **Auth and consent clarity.** [Jonas Iggbom](https://nordicapis.com/sessions/agent-identity-the-missing-layer-in-your-api-security-stack/) and [Judith Kahrer of Curity](https://nordicapis.com/sessions/cultivating-the-right-standards-for-api-security-as-ai-agents-take-root/) on agent identity and which parts of the OAuth toolkit agents need, [Curtis Schofield of PagerDuty](https://nordicapis.com/sessions/from-2-scopes-to-global-identity/) on going from two scopes to a hundred, and [Roland Baum](https://nordicapis.com/sessions/register-once-integrate-everywhere-fapi-2-0-and-a-federated-authorization-foundation-for-public-sector-apis/) on FAPI 2.0 and sender-constrained tokens in German public-sector APIs. The catalog: eighteen providers issue a credential bound to the agent. Everything else is a shared secret that names nobody.
- **Rate-limit signalling.** [Lin Sun of Solo.io](https://nordicapis.com/sessions/agent-gateway-the-one-decision-that-eliminates-ai-engineering-complexity/) on rate-limiting LLM traffic at the gateway, and the gateway sessions from ICA Gruppen, Aman and Akamai. The catalog: 8,935 providers describe their limits in prose, and 441 surface live state in headers.

## The press release

Sixteen sessions are about MCP servers. The catalog has 3,363 providers with one, and 1,620 of those are verified by a probe of the manifest. An MCP server is twelve points on the readiness score, so it moves the number. What it does not do is move the band. Of the 1,266 providers whose MCP server lifts them high enough for agent-native, 997 lose the band at the gate, because the contract underneath has no idempotency or no typed errors. Of the 870 MCP servers sitting on minimal or emerging foundations, four are agent-native. That is the slide I expect people to quote, and the sessions from [WunderGraph and MaintainX](https://nordicapis.com/sessions/stop-building-mcp-tools-a-better-way-to-connect-ai-to-enterprise-data/) on going from an MCP facade over REST to a capability graph are the honest version of the same lesson from the inside.

## What the series taught me to say on stage

I love that the emphasis of talks are on agent readiness. It matches what I call the "press release", or the stories we tell in this moment. [I crafted my composite score combined with my agent readiness score](https://apis.io/rating/) to help me ground these press releases. I will try to sit in as many of these agent-readiness talks as I possibly can to understand how deep into the foundation they go. I don't have the mechanisms to rate each talk deterministically, like I do with the MCP and Agent Skills press releases coming out of each API provider, but I will do my best.

Since I am the closing keynote for the entire event I will work to include what I learn into my narrative the best that I can. You should also come share with me in the hallways based upon what you learn. I am most curious what you see between the API foundation we all depend on and the agent hype we are all experiencing. I am also on the [Designing For The Agentic Experience panel](https://talks.apievangelist.com/events/nordic-apis-summit-2026/) on Wednesday morning with Erik Wilde, Daniel Kocot and Gertrude Chilufya. Come find me.
