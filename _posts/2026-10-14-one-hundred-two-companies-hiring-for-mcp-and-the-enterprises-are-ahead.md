---
published: true
layout: post
title: 'One Hundred Two Companies Hiring For MCP And The Enterprises Are Ahead'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/one-hundred-two-companies-hiring-for-mcp-and-the-enterprises-are-ahead.png
date: 2026-10-14
author: Kin Lane
tags:
  - MCP
  - Agents
  - Agent Skills
  - Insights
  - Hiring
  - APIs
---
Last week I looked at how few of the companies we track [name OpenAPI in their job postings](/2026/10/05/nine-hundred-eighty-four-companies-hiring-and-ninety-nine-of-them-say-openapi/). This week it is the protocol everyone in the API space has been arguing about for the last year: the Model Context Protocol.

Same pull, same rules. The Q3 2026 Insights data read 343,299 job postings from 984 companies — 775 in the Fortune 1000 and 209 API providers from the APIs.io catalog. Every number below is a count of **companies whose postings name the term at least once**, not a count of mentions.

## MCP is in one company in ten

| | companies | share of the 984 |
|---|---:|---:|
| Vector Databases | 209 | 21.2% |
| Model Context Protocol | 102 | 10.4% |
| OpenAPI | 99 | 10.1% |
| Agent Skills | 30 | 3.0% |

One hundred two companies write out "Model Context Protocol" somewhere in their postings. That is 234 postings out of 343,299, so it is not a lot of roles. But put it beside last week's number: a protocol that is not yet two years old is named by as many companies as the API description specification this blog has spent most of its life on. Ninety-nine for OpenAPI, one hundred two for MCP.

Agent Skills, the convention for packaging instructions and scripts an agent can pick up, is in thirty companies. Half of those thirty — fifteen — also name MCP.

## The enterprises are ahead of the API companies

This is the part worth sitting with.

| | Fortune 1000 | API providers |
|---|---:|---:|
| Model Context Protocol | 11.0% | 8.1% |
| Agent Skills | 3.0% | 3.3% |
| Vector Databases | 22.2% | 17.7% |

Eighty-five Fortune 1000 companies name MCP, against seventeen API providers. As a share of each group, the banks, insurers, retailers, and manufacturers are ahead of the companies whose business is the API, 11.0% to 8.1%. Agent Skills is about even.

The provider side is the smaller sample, 209 companies against 775, so read that gap as a direction and not a measurement. It is the same direction the OpenAPI numbers pointed last week, though, and it lines up with what API Evangelist keeps finding on the supply side when we profile providers into APIs.io: plenty of API companies talk about agents, and far fewer ship an MCP server, publish tool definitions, or describe their API in a way an agent can use without a human in the loop.

## How MCP shows up in a posting

When we sampled the postings that name the protocol to verify the count, it showed up in two quite different jobs.

One is the builder: "highly effective at leveraging advanced dev tools model context protocol mcp and llms to drastically accelerate ai assisted development", or "familiarity with mcp model context protocol tool calling frameworks and ai workflow automation platforms". The same goes for Agent Skills, which turns up in lists like "applied ai with llms claude code agent skills rag embeddings".

The other is the reviewer: "review the security and privacy posture of ai vendors models and mcp or plugin style extensions before adoption". That is an enterprise treating MCP as something that arrives from the outside and has to be governed before it is let in.

MCP rarely shows up on its own. Ninety-five of the one hundred two companies that name it also name at least one of Claude, Anthropic, ChatGPT, OpenAI, or Gemini. Hiring treats MCP as part of the AI tooling stack, not as a piece of API infrastructure, and next week I will get into what those AI vendor names tell us.

## What I think it means

The easy read is that enterprises are excited about agents. I think the more useful read is that enterprises are where the integration work actually lives. A large company has hundreds of internal systems, a long list of SaaS vendors, and a security team that has to approve anything that touches them. MCP lands right in the middle of that, as something to build with and something to review. That is the kind of work that ends up in a job posting.

An API provider's relationship to MCP is different. For most of them the job is to *publish* an MCP server that sits on top of an API they already run, and that is often a platform feature or a weekend project rather than a role someone gets hired for. So a lower hiring rate on the provider side does not prove providers are behind on MCP.

But it does not let them off the hook. The companies most likely to wire an agent into your API are hiring for it at a higher rate than you are. If your MCP server, your tool descriptions, and your OpenAPI are not in good shape, the people on the other side of that integration are going to notice before you do.

## How to read these numbers

- **This is hiring intent, not production use.** A company can run MCP servers without ever naming the protocol in a posting, and a posting can name something the company never adopts.
- **Q3 2026 is the first point in the series.** Nothing above is rising or falling yet. The Q4 read lands on November 20, and that is the first quarter we can compare against.
- **We count the full name.** The bare letters MCP are also Microsoft Certified Professional, so the 102 is companies that wrote out "Model Context Protocol". Looser counts run higher and are not what is quoted here.
- **"Agents" is not a number we will quote.** The word is everywhere in these postings, but sampling it turns up endpoint security ("using edr agents and custom scripts") and talent agents right beside AI agents. Until it can be separated, it stays out of the headline.

The full Insights data — adoption across services, tools, standards, and regulations, and the per-company profiles behind it — is available through the [APIs.io API and MCP server](https://apis.io/insights/).

One hundred two companies. Three more than OpenAPI. I am curious which of those two numbers moves more when the Q4 read comes in on November 20.
