---
published: true
layout: post
title: 'Australian Government Is Open But Not Yet Discoverable By Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/australian-government-is-open-but-not-yet-discoverable-by-agents.png
date: 2026-10-28
author: Kin Lane
tags:
  - Australia
  - Government
  - Open Data
  - Agents
  - MCP
  - Insights
---
Australian government publishes more than almost anyone, and an agent still cannot find most of it on its own.

This is the third in a short series ahead of [The API Economy Roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) at apidays Australia today. On Monday I ranked [the most programmable sectors in Australia](/2026/10/26/the-most-programmable-sectors-in-australia/), and yesterday I looked at how [regulation writes the API](/2026/10/27/regulation-writes-the-api/) for banking and energy. Government was the second most programmable sector in the ranking, and the only one where every single publisher had something on offer. It is also the one with the clearest gap.

## Thirteen publishers, zero dark

I profiled 13 Australian government API publishers: the ATO, ABS, Services Australia, the Australian Business Register, the Bureau of Meteorology, the Australian Digital Health Agency, CSIRO, Trove, data.gov.au, Transport for NSW open data, NSW open government, Public Transport Victoria and Translink Queensland.

- **12 of 13 have a developer portal.** That is the highest rate of any sector, tech included.
- **7 of 13 publish their own contracts.** Not contracts we generated from their docs — OpenAPI the agencies publish themselves.
- **None of them has nothing.** Government is the only sector in the cohort with no company in the "nothing for an agent to read" column.

The contracts are real and substantial. The ATO publishes its digital service gateway APIs, from stapled super fund lookups to GST property settlement and the new global minimum tax returns. CSIRO publishes its Data Access Portal APIs. Transport for NSW publishes more than forty contracts across its open data hub. NSW open government publishes fuel prices, the pharmacy register and property data. Trove, ABS and PTV publish theirs too.

## And not one of them is agent-ready

Here is the other column.

| Signal | Government publishers |
|---|---:|
| Developer portal | 12 of 13 |
| Own contract | 7 of 13 |
| MCP server | 0 |
| A2A agent card | 0 |
| OAuth protected resource metadata | 0 |
| llms.txt on their own domain | 2 |

Australian government did the hard part. It published the contracts, stood up the portals, and documented the data. What it has not done is the thin layer on top that tells an agent where all of that is and how to use it. No MCP servers. No agent cards. No protected resource metadata telling an agent which authorization server guards an API. Two llms.txt files out of thirteen.

## The front door problem

There is a second, more practical issue. Several of these publishers turn agents away at the door.

- **The ATO, data.gov.au and Public Transport Victoria** answer an automated visitor with an anti-bot challenge. data.gov.au returned a 503.
- **The ABS** serves a JavaScript-only shell that has to be rendered before there is anything to read.
- **Services Australia and the Australian Digital Health Agency** did not answer our probes at all.

This matters more for government than for anyone else. Public data is published to be used, and increasingly it is going to be used by an agent acting for a citizen, a small business or a researcher. The ATO still publishes its contracts behind its challenge — and it even supports OAuth dynamic client registration, which is exactly the kind of machine-native onboarding agents need. But an agent that stops at the homepage never gets that far.

## Why this is the easiest gap to close

Of all the gaps in the Australian data, this is the one I am most optimistic about. Government has already done the expensive work. Adding an MCP server in front of a published OpenAPI, an agent card that points at the portal, protected resource metadata on the APIs that already use OAuth, and an llms.txt that indexes the docs is a small amount of work compared to what already exists. It is also the kind of thing that can be standardised once and applied across every agency.

The timing lines up. The Commonwealth has stood up an Office of AI and promised AI standards legislation. Finance has been consulting on a whole-of-government verifiable credentials policy. Digital identity, credentials and AI policy are all moving at the same time. The API layer underneath is ready. Making it discoverable is the missing step.

That is the question I want to put to the room today, as part of the conversation on regulation, privacy and digital identity: if government is going to set the rules for how agents behave, should it also be the first sector to make itself properly discoverable by them?

If you are at apidays Australia, [come find us at the roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f). All thirteen government profiles are on [APIs.io](https://apis.io).
