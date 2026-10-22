---
published: true
layout: post
title: 'A Banker Said Finance Does Not Have Enough MCP Servers And They Are Right About The Banks'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-banker-said-finance-does-not-have-enough-mcp-servers-and-they-are-right-about-the-banks.png
date: 2026-10-22
author: Kin Lane
tags:
  - MCP
  - Banking
  - Financial Services
  - Fintech
  - Agents
  - Data
---
I was at a conference in New York yesterday, and someone from the financial industry told me there just aren't enough useful MCP servers in their sector. I didn't want to answer from my gut, so when I got back to the hotel I asked the catalog.

The short answer is that they are right about their part of the industry. They are wrong about the sector as a whole. The difference between those two answers is what this post is about.

## The headline number is misleading

Across the three finance verticals on [APIs.io](https://apis.io/industries/) (Banking, Financial Services and Financial Technology) there are 2,975 companies. 845 of them have at least one MCP row in the catalog. That sounds like a sector that has gone all in on agents. It hasn't.

Of those 845 companies:

- **515 have only a candidate.** A candidate is a tool list we derived from the company's own OpenAPI to show what a server *could* look like. The company did not ship it. Nobody can connect to it. It is a map, not a road.
- **84 ship a server that only searches their documentation.** It is useful for a developer writing an integration, but an agent can't look up an account balance, start a payment or pull a statement through it.
- **245 ship a server that reaches the API itself.** Some of those are gated behind a sales conversation or an OAuth flow, which is fine, and probably correct for money.

So the honest number is 245 out of 2,975, or about 8% of the finance companies we track. Most of them aren't banks.

## Who actually shipped

The servers you can connect to come from fintech infrastructure and data vendors. [Mercury](https://apis.io/providers/mercury/), [Moov](https://apis.io/providers/moov/), [Lead Bank](https://apis.io/providers/lead-bank/), [Lili](https://apis.io/providers/lili/), [Memo Bank](https://apis.io/providers/memo-bank/), [Atlar](https://apis.io/providers/atlar/), [Basiq](https://apis.io/providers/basiq/), [Airwallex](https://apis.io/providers/airwallex/) and [Afterpay](https://apis.io/providers/afterpay/) are moving money and reading accounts. [Alpaca](https://apis.io/providers/alpaca/) does brokerage. [Alpha Vantage](https://apis.io/providers/alpha-vantage/), [Aiera](https://apis.io/providers/aiera/) and [Amberdata](https://apis.io/providers/amberdata/) do market data and research. [Anchorage](https://apis.io/providers/anchorage/) does custody. [Cumbuca](https://apis.io/providers/cumbuca/) connects Brazilian bank accounts to an assistant through Open Finance. [Narmi](https://apis.io/providers/narmi/), with Grasshopper Bank in August 2025, put out what is described as the first MCP server deployed by a U.S. bank.

These are companies that were already API-first. MCP was a short walk for them.

## Who didn't

Then I filtered for the institutions the person I talked to actually works with. There are 133 finance companies in the catalog that we tag Fortune 100, 500 or 1000. **120 of them have no MCP row at all.** [Citi](https://apis.io/providers/citi/), [Barclays](https://apis.io/providers/barclays/), [Deutsche Bank](https://apis.io/providers/deutsche-bank/), [Truist](https://apis.io/providers/truist-financial/), [KeyCorp](https://apis.io/providers/keycorp/), [Groupe BPCE](https://apis.io/providers/groupe-bpce/) and the UK open-banking group ([Halifax](https://apis.io/providers/halifax/), [Bank of Scotland](https://apis.io/providers/bank-of-scotland/), [Metro](https://apis.io/providers/metro-bank/), [Danske UK](https://apis.io/providers/danske-bank-uk/) and the rest) exist in the catalog only as candidates we drew from their published OpenAPI. They have the APIs. They have not put an agent interface in front of them.

At most three of the 133 have something more. [Intuit](https://apis.io/providers/intuit/) has a QuickBooks Online MCP server on GitHub. [CarMax](https://apis.io/providers/carmax/) put its inventory in the ChatGPT app store, which is an agent surface but not really a finance one. [Fifth Third](https://apis.io/providers/fifth-third-bancorp/)'s record points at a sandbox API that I want to re-verify before I count it. The most interesting case isn't on that list: [Apollo Global Management](https://apis.io/providers/apollo-global-management/) runs an auth-gated MCP server on api.apollo.com that isn't mentioned on any public Apollo page. We only found it by probing.

So the big institutions *are* building, but quietly, internally, and behind their own identity providers. That matches what I wrote about [companies hiring for MCP](/2026/10/14/one-hundred-two-companies-hiring-for-mcp-and-the-enterprises-are-ahead/): enterprises are ahead in job postings and behind in what they publish.

## Why the gap is where it is

I don't think the gap is a technology problem. The banks have OpenAPI. Many have FDX, open banking or ISO 20022 APIs that are already strictly regulated. What they don't yet have is an answer to the questions an agent raises the moment it can act on an account:

- Whose consent is the agent operating under, and how is that consent scoped and revoked?
- How do you tell an agent acting for a customer apart from an agent acting for an aggregator?
- What does the audit trail look like when a tool call moves money?
- Which operations are read-only and safe to expose today, and which wait?

The fintechs that shipped answered those questions for their own customers, or limited themselves to read-only tools. The incumbents are waiting for answers that hold up in front of a regulator. That is a reasonable thing to wait for. But it means that the people inside those institutions, like the person I met yesterday, look out at the market and see nothing they can use.

## What I would do with this

If you are at a bank and want to move, don't start with a server. Start with the read-only operations you already publish (product reference data, branch and ATM locators, rates), and expose those first. Our candidate files are a starting point: they are generated from your own contracts, and each one is a list of the tools an agent would expect. That is the cheapest way I know to find out what your institution needs to decide before anything that touches an account goes live.

If you are a fintech that has already shipped, tell the banks you partner with. The best argument for MCP inside a bank is a sponsor-bank partner that already did it safely.

The data is all on APIs.io. Filter [MCP](https://apis.io/mcp/) by the banking or financial services tags, and look at the status on each server. Shipped, gated, docs-only and candidate are four very different answers to the same question.
