---
published: true
layout: post
title: 'Twenty-Four Agent Bundles And Not One MCP Server'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/twenty-four-agent-bundles-and-not-one-mcp-server.png
date: 2026-10-06
author: Kin Lane
tags:
  - Agents
  - MCP
  - SDKs
  - Onboarding
  - Provenance
  - APIs.io
  - APIs
---
APIMatic has been generating SDKs from OpenAPI for eleven years. Last month they put up a public marketplace of agent context bundles at `context.apimatic.io` — twenty-four APIs, MIT licensed, installable with `npx context-plugins install square`.

I pulled their `catalog.json` and counted what is actually in the bundles. Three things came back that I did not expect, and all three are visible to anyone who fetches the same file.

## One: not a single one of them is an MCP server

Every plugin record carries a `runtime` field. Across all twenty-four:

```
runtime: {"mcp": false}   — 24 of 24
contents.mcp: []          — 24 of 24
```

Twenty-four out of twenty-four. Not a majority, not a trend — unanimous. A company whose entire product line now aims at coding agents shipped two dozen integration bundles and put an MCP server in none of them.

What they shipped instead is markdown. Every bundle carries the same eight skill files, and eighteen of the twenty-four carry a ninth:

`getting-started` · `authentication` · `client-initialization` · `calling-endpoints` · `models` · `error-handling` · `configuration-resilience` · `testing` · `integrate`

Plus generated SDKs in three languages — .NET, Python and TypeScript, on all twenty-four, without exception. `worksWith` lists `claude-code` on all twenty-four and `cursor` on seven.

I have been saying for a while that MCP is last-mile plumbing rather than the thing itself, and I have taken some heat for it. This is the first time I have been able to point at a number instead of an argument. Here is a vendor positioned squarely in the agent tooling market, with every commercial reason to put "MCP" on the box, deciding twenty-four consecutive times that the right delivery vehicle was a folder of markdown and a generated client.

That is not a rejection of the protocol. MCP solves a real problem, which is letting an agent call something at runtime. But these bundles are aimed at a different moment — the moment an agent is *writing the integration*, where what it needs is not a callable tool but the knowledge of how the client initializes, what the models look like, which errors are retryable. You cannot serve that over a tool call. You serve it as text the agent reads before it writes a line.

## Two: authentication is in every single bundle

Look at that skill list again. Second item, present in all twenty-four: `authentication`.

I wrote a piece a few weeks back about BoltMCP shipping its installation runbook as an Agent Skill, and I said onboarding was the seam nobody had an artifact for. I was looking in the wrong place. Here is an independent vendor who, without any coordination, concluded that the unit of API context worth shipping has an auth chapter in it — not as an appendix, but as one of eight things that are always present.

Two teams, two different products, both deciding the agent cannot be left to work out authentication from a specification. That is not a coincidence any more. That is the shape of the problem being confirmed twice.

It is worth being precise about what it does and does not cover. An `authentication` skill tells the agent how to *use* a credential — which scheme, which header, how the client wants it, how to refresh. It does not get you the credential. That remains the wall, and I have now watched four separate conversations walk into it. But the half that can be written down is being written down, by everyone who tries this, apparently independently.

## Three: they will only vouch for nine of them

This is the part I did not see coming, and it is the reason I am writing about a competitor's marketplace at all.

`catalog.json` declares a `healthScale` — a five-point ladder, published in the file, in their own words:

| | |
|---|---|
| **1** | Known gaps in output. Read the plugin's open issues first. |
| **2** | Built from the published spec only. |
| **3** | Built from the published spec, and reviewed by hand. |
| **4** | Spot-checked against the live API. |
| **5** | Checked against the live API. |

Then every plugin carries a `health` number against that ladder. Here is the distribution:

- **9 at health 5** — checked against the live API
- **14 at health 2** — built from the published spec only, labeled *"Not verified"* in their own `healthState` map
- **1 with `health: null`** — Plaid, no claim made at all

So a vendor published a marketplace and attached, to each item in it, a machine-readable statement of how much they trust their own work. Fourteen of twenty-four say, in effect, *we generated this from the spec and we have not confirmed it behaves.*

I want to be clear about how unusual that is. The normal move — the move every API directory I have ever seen makes, including the ones I have run — is to present every entry with identical confidence and let the reader discover which ones are hollow. Publishing the ladder means a buyer can sort by it. It means the fourteen are visibly weaker than the nine. No marketing department would have signed that off, and it is the single most credible thing on the site.

It is also the argument I have been making about the Kin Score from the other end. A score is only worth reading if the thing being scored can come back low and say so. A catalog that cannot record "we do not know" will quietly record "fine" instead, and then it is not a catalog, it is a brochure.

## What the nine have in common

Now the part that is my reading rather than their statement, and I will flag it as such, because they have not said why any particular plugin sits where it does.

Sort the twenty-four by health and a pattern falls out.

**Checked against the live API (9):** Alpaca, Binance, CoinGecko, Finnhub, SportsData.io, Frankfurter, Firecrawl, Square, Twilio.

**Built from the spec only (14):** PayPal, Adyen, Slack, Notion, Spotify, The New York Times, Verizon, Tesla, Google Maps, Shutterstock, Vimeo, Maxio, Deepgram, Discourse.

Six of the nine verified are market-data and reference feeds — crypto prices, equities, sports, currency rates, a scraper. Read-only APIs where a verification call is free, idempotent, and consequence-free. You can hit CoinGecko a thousand times and nothing happens to anybody.

The exceptions prove it. Square is verified and Square has a genuine sandbox with fake money. Twilio is verified and Twilio has a trial with test credentials. Both are APIs that *do* something, and both are verified precisely because the vendor built a safe place to do it.

Now look at the unverified fourteen. PayPal and Adyen — payments, both unverified, while Square sits at the top of the ladder. Slack, where a test call posts a message into somebody's workspace. Notion, where it creates a page. Tesla, where it sends a command to a car. Verizon. Google Maps, which meters you.

The line is not difficulty and it is not importance. **It is whether a verification call does something real in the world.** You can check a read. You cannot casually check a write.

That is a much more interesting finding than "fourteen bundles are unverified," because it is not a criticism of APIMatic's diligence. It is a structural fact about the whole category, and it applies to everybody who tries to ship verified agent context — me included. The APIs where an agent most needs correct, tested integration knowledge are exactly the APIs nobody can afford to test against. The gap closes only if providers build sandboxes, which is a request that has nothing to do with agents and that we have been making for fifteen years.

Square built one. It shows up in the data.

## The asks

**Publish your health ladder, whoever you are.** If you ship generated artifacts — SDKs, specs, MCP servers, context bundles — attach a machine-readable confidence value to each one and publish the scale alongside it. `catalog.json` is a working template. The cost is admitting some of your output is unverified. The return is that a buyer believes the part you did verify.

**Build the sandbox.** Fourteen unverified bundles is a provider-side problem wearing a vendor-side costume. Every API in that list that does something real could be verified tomorrow if it had what Square has. Sandboxes were a developer-experience nicety for years. In a world where an agent writes the integration, a sandbox is the only mechanism by which anyone — the vendor, the catalog, the customer — can establish that the integration is right before it runs against production.

**Stop treating MCP as the scoreboard.** Twenty-four out of twenty-four is a real signal from a company with no incentive to send it. The protocol answers runtime invocation. It does not answer what an agent needs while it is building, and the teams shipping into that moment keep arriving at markdown plus a typed client. Both layers are going to exist. Counting only one of them will keep producing wrong conclusions about who is ready.

**Serve the catalog document.** One more thing worth noting: `context.apimatic.io/.well-known/api-catalog` returns a real RFC 9727 linkset, `application/linkset+json`, twenty-five anchors, every plugin addressable. Genuine ones are rare enough that I stopped and checked the content-type twice. That file is how a machine finds the other files without scraping a homepage, and almost nobody serves it correctly.

The whole dataset behind this post is four fetches and no permission. That is what a discovery-grade public surface buys you, and it is why I keep asking for one.
