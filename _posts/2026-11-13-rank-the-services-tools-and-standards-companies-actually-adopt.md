---
published: true
layout: post
title: 'Rank The Services, Tools And Standards Companies Actually Adopt'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/rank-the-services-tools-and-standards-companies-actually-adopt.png
date: 2026-11-13
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Insights
  - Adoption
  - Standards
---
Every API strategy conversation I'm in eventually gets to the same question: what is everyone else actually using? Not what the vendor decks say, not what got the most stars this month, but which services, which tools and which standards show up inside real companies. I usually answer that from memory and gut feel. The `insights_adoption` tool on the API Evangelist MCP server answers it from data, and the REST operation behind it is `GET /insights/adoption`. It ranks services, tools or standards by how many of the companies we've profiled adopt them.

## What I gave it

There's no document to hand it, just a choice of what to rank. I ran it three times, once for each `type`, with the top ten of each:

```json
{"type": "service", "limit": 10}
{"type": "tool", "limit": 10}
{"type": "standard", "limit": 10}
```

Each entry comes back with a `companyCount` (how many companies we can tie to it), a `companyCountJobs` (how many of those show it in their job postings), a `nameableCount`, and the radar ring it sits in.

## What came back

The service ranking covers 658 services across 66 pages. Here's the top of it, trimmed to the counts:

```
Google                  1,964 companies   626 via jobs
Microsoft               1,802             868
GitHub                  1,542             510
Amazon Web Services     1,535             703
Claude                  1,438             429
Microsoft .NET          1,418             673
Microsoft Windows       1,281             634
Microsoft Azure         1,174             664
ChatGPT                 1,056             316
Salesforce              1,003             659
```

The tools ranking (397 total) is led by Python at 1,436 companies, then Kubernetes 1,214, Node.js 1,118, Linux 1,058 and React 1,030, with Git, Docker, PostgreSQL, Spring and Terraform rounding out the ten. The standards ranking (554 total) opens with SQL at 1,342, HTTP 1,175, HTML 1,149, DevOps 1,018 and JSON 991.

A few things stood out to me. Claude sits fifth among services at 1,438 companies, ahead of Azure, and ChatGPT is ninth at 1,056. That is a lot of AI showing up in an adoption list that is otherwise the long-standing infrastructure giants. The gap between `companyCount` and `companyCountJobs` is also worth reading: Claude has 1,438 companies but only 429 through job postings, while Salesforce has 1,003 and 659 through jobs. Salesforce is something companies hire for. Claude is something companies use before they hire for it.

Now the honest part. The standards list has "Agile" and "Agile Methodology" as two separate entries, both at exactly 925 companies and 741 via jobs. That is one thing counted twice, and it pushes a real standard out of the top ten. "DevOps", "Agile" and "SecOps" are also practices, not standards in the sense I'd use for OpenAPI or OAuth, so the standards ranking is really "practices and standards" right now. And the operation description says each response names the corpus and the matcher it was measured with, but the `meta` I got back only carries the paging and the query type. Those are fixes on our side, and I'd rather you hear it from me than find it in your own analysis.

## What that makes possible

- **Prioritize integrations by reach.** If you're deciding which platforms to ship connectors or SDK examples for, the service ranking tells you where the companies already are, page by page, all 658 deep.
- **Pick the defaults in your developer experience.** A tool list led by Python, Kubernetes and Node.js is a pretty direct answer to which languages and runtimes your quick starts should lead with.
- **Separate usage from hiring.** Comparing `companyCount` with `companyCountJobs` shows what's being bought and bolted on versus what teams are staffing up around, which is a different signal for a sales or partnership conversation.
- **Give an agent grounded context.** An agent recommending a stack can call this first and reason from counts instead of from whatever its training data happened to favor.

From here, `insights_dimensions` lets you slice the same company set by other dimensions, and `standard_adoption` goes deep on a single standards body.

## Try it

It's free. On the MCP server at `https://mcp.apievangelist.com/mcp` (or the lighter `https://mcp.apievangelist.com/mcp/insights` toolset), call `insights_adoption` with a `type` of `service`, `tool` or `standard`. Over REST it's one call:

```sh
curl 'https://api.apievangelist.com/v1/insights/adoption?type=standard&limit=10'
```

The operation is documented in the [API reference](https://developer.apievangelist.com/api), the MCP server is in the [MCP docs](https://developer.apievangelist.com/mcp-server), and [getting started](https://developer.apievangelist.com/getting-started) walks you through a key. Walk the pages past the top ten. The long tail is where the interesting adoption stories are.
