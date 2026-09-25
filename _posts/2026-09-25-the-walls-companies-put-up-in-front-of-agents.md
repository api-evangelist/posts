---
published: true
layout: post
title: 'The Walls Companies Put Up In Front Of Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-walls-companies-put-up-in-front-of-agents.png
date: 2026-09-25
author: Kin Lane
tags:
  - Agents
  - Onboarding
  - Documentation
  - Discovery
  - APIs.io
  - APIs
---
I have spent two days running our profiling pipeline hard against the backlog — a few hundred companies, each one probed the way an agent would probe it: fetch the front door, look for a documentation host, look for a machine-readable contract, look for an MCP server. Everything it hits gets recorded, including the refusals.

So this is not a complaint about the state of the web. It is a tally. 2,567 companies in the catalog now carry a recorded reason for why their profile is thin, and 1,470 module runs from the last two days logged what they ran into. Here is what actually stands between an agent and an API.

## First, the honest part: most of the time there is no API

Of those 2,567 recorded reasons, **59% are simply absence**. No developer program (729), not a software company (497), defunct (265). An agent that cannot find an API at those companies is not being blocked. There is nothing there.

I want that number in front of the rest, because the obstacle story gets overstated. The interesting group is the other quarter — the companies that **have** something and put a wall in front of it.

| what the agent hit | providers |
|---|---|
| gated — a credential before any description | **425 (17%)** |
| unreadable — published, but not machine-readable | **121 (5%)** |
| blocked — refused at the door | **25 (1%)** |

## Gated: the sales call as an API gateway

The largest wall is not technical. It is commercial.

- **customer-only docs — 172 providers.** The documentation exists and is complete. You have to already be a customer to read it.
- **sales gate — 140.** "Contact us for API access." No self-service path at all.
- **partner login — 63.** A partner agreement stands between you and the operation list.

None of these are misconfigurations. Somebody decided them. And each one has the same effect on an agent as a 404: the capability is undiscoverable, so for any automated consumer it does not exist. The company is spending money maintaining documentation that the fastest-growing class of API consumer cannot reach.

## Unreadable: published, and still invisible

This is the category I find most avoidable, because the intent is right and the execution defeats it.

- **JavaScript-rendered docs — 61 providers.** The documentation is public. Fetch the URL and you get an empty shell; the content arrives later, from a client-side framework. A plain `GET` sees nothing.
- **No machine-readable spec — 54.** Beautiful reference pages, no OpenAPI. Every consumer re-types the same operations by hand.
- **PDF-only docs — 4.** The API reference is a PDF.

The JavaScript case deserves emphasis because of how it fails. Our own pipeline hit this 28 times in two days, and the failure is silent: a JavaScript shell returns HTTP 200 with a valid-looking HTML body. Nothing announces that the content is missing. An agent without a browser records "documentation found, no operations" — which reads exactly like a company that documented nothing.

I know precisely how bad that is, because for part of this run our own multi-strategy fetcher was broken and every module fell back to a plain `curl`. Providers with real, rendered documentation came back scoring like empty shells. When I fixed it, mean scores on the same kind of backlog rows went from **3–4 to 8.2**. Half the "thin" providers in that window were not thin. My tooling could not see them.

If your docs need a browser to read, you have made yourself invisible to every consumer that does not run one — and you cannot tell from your own analytics, because the shell returns 200.

## Blocked: refused at the door

- **Bot challenge — 22 providers.** Cloudflare or similar, answering a non-browser user agent with a challenge.
- **403 to our agent — 36 module runs in two days.** Including, I will note, `openai.com`, which returns an anti-bot shell to our user agent while `openai.com/*` subpages answer normally.

Bot protection is legitimate. But it is worth knowing what it costs: an agent trying to learn what your API does, from your own public documentation, is indistinguishable at the WAF from a scraper. You are not turning away a competitor. You are turning away a customer's toolchain.

## The quieter obstacles, which are mostly accidents

Four more patterns, none of them decisions, all of them expensive:

**The contract nobody can find.** Plaid publishes its entire 351-operation OpenAPI on GitHub as `2020-09-14.yml` — named after its API version, not its format. Our GitHub probe looked for "openapi" in filenames and in spec-shaped directories and found neither, so it reported no contract for a provider that publishes 3.16 MB of it. If the only thing declaring the format is your repository name, expect tools to miss it.

**The host that moved.** `docs.anthropic.com` 301s to `platform.claude.com`. Every link still resolves, so liveness checks pass and nothing looks wrong — 56 of 82 pointers on that profile aim at a host that no longer serves them. A permanent redirect is a migration notice that only humans read.

**The trust centre behind a form.** One provider's trust centre orders 280 compliance items and serves 8. The certifications exist; an agent assessing whether you meet its requirements sees almost none of them. "Gated" and "absent" look the same from outside.

**The MCP server that isn't.** 3,450 of 6,661 MCP manifests we hold declare no deployed server — announcements, roadmap entries, and local-only packages, catalogued as if they were endpoints an agent could reach.

## What this costs, concretely

An agent evaluating your API has a budget. Every wall spends it: a challenge page, a login redirect, an empty shell, a PDF, a spec that has to be reconstructed from HTML. Past some threshold the agent does what any consumer does when onboarding is too expensive — it picks a competitor whose contract it could read in one request.

The companies at the top of our ratings are not the ones with the most endpoints. They are the ones an agent can fully understand without asking permission: a contract at a stable URL, documentation that survives a plain `GET`, and a machine-readable answer to "what can I do here".

Five of those walls are commercial decisions and I am not going to argue anyone out of them. The rest — the JavaScript shell, the unnamed spec file, the stale redirect, the gated compliance page — are accidents that nobody meant to build, and every one of them is cheaper to fix than to keep.

Check your own front door with `curl`, no browser, no cookies, and see what an agent sees.
