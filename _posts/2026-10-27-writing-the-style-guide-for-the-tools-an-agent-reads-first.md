---
published: true
layout: post
title: 'Writing the Style Guide for the Tools an Agent Reads First'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/writing-the-style-guide-for-the-tools-an-agent-reads-first.png
date: 2026-10-27
author: Kin Lane
tags:
  - MCP
  - Agents
  - API Style Guides
  - API Governance
  - API Design
  - Papers
---

Every mature API has a style guide. Two pages on how to name a path, shape a response and report an error do more for consistency than a hundred lint rules nobody reads. Almost no MCP server has one. I think that is a mistake, and it is a more expensive mistake than it was with APIs.

A developer reads your documentation once and remembers it. An agent reads your tool list every time it connects, in full, and pays for it in tokens on every turn. Every inconsistency in that list is paid for again and again. So I wrote the style guide down. [The MCP Style Guide](https://papers.apievangelist.com/papers/mcp-style-guide/) is the newest API Evangelist paper.

## I started with our own servers

I did not want to write this from first principles, so I started with the two MCP servers we run: APIs.io and API Evangelist. Together they have 212 tools. They were built by the same practice, against the same conventions, within months of each other. I called every tool list, prompt, resource and refused call, and read what came back.

They disagree with each other. Nine tool names exist on both servers, and some of them do not mean the same thing. One of them is free on one server and costs five cents a call on the other. Tier labels are typed by hand and drift from the gates that enforce them. Pagination works two different ways on the same server. A refused call on one server names the plan, the price and a route forward for the agent and the human it works for. The same refusal on the other server returns a bare unauthorized. Neither server declares structured output.

None of that is hard to fix. That is the point. Without a written convention, even one team drifts.

## Then I looked at the catalog

APIs.io tracks every public MCP server it can find. I read the names of 103,737 tools across 4,439 servers, and the full definitions of a sample of 1,227 tools captured live from public endpoints. The catalog shows the same drift, at market scale.

- Seventy-one percent of tool names are snake_case. The rest split across camelCase, PascalCase, kebab-case and a long tail of everything else, and 228 servers mix styles inside a single tool list.
- 2,787 tools across 315 servers are named after an HTTP method. That is what an OpenAPI looks like when it is turned into tools without anyone renaming them.
- A quarter of servers use three or more different verbs to mean "read."
- Half of all input arguments in the sample have no description at all.
- Only about one tool description in eight says when to use the tool instead of its neighbor.
- Fewer than one server in three declares structured output.
- The median server's tool list costs about 4,300 tokens. One in ten costs more than 47,000.

The median server is in decent shape. The long tail is where a style guide earns its place.

## And I read what providers are saying

I also went through what providers in the network have been writing about MCP. Axiom has the most concrete advice I have seen on keeping responses small by default, with numbers behind it. Kong makes the case against one tool per operation at enterprise scale. Atlassian reports that about a third of the five million tool calls its server handles each working day are writes, which means write design is not an edge case. Atlassian also found agents preferred a CLI over its MCP server once both existed, and the lesson they took was to measure the whole task and build every surface from the same handlers.

## What is in the paper

The paper turns all of that into fifty-five numbered rules across naming, descriptions, input schemas, output, errors and refusals, annotations, context budget, prompts and resources, and versioning. Each rule is tied to the evidence that motivated it. There is a list of anti-patterns, a fourteen-question self-assessment, and the full set of rules as a checklist you can turn into a ruleset for your pipeline.

It sits between two earlier papers. [Publishing a Public MCP Server](https://papers.apievangelist.com/papers/publishing-a-public-mcp-server/) covers whether and how to ship one. [MCP Documentation Beyond Reference](https://papers.apievangelist.com/papers/mcp-documentation-beyond-reference/) covers the behavior an agent needs to know about. This one covers how the surface itself should read.

There is no such thing as agentic governance. This is the same style-guide work web, mobile and partner integrations always needed, done well enough that a machine can consume it. The machine just does not forgive what a human would work around.

[The MCP Style Guide](https://papers.apievangelist.com/papers/mcp-style-guide/) is $25 at [papers.apievangelist.com](https://papers.apievangelist.com), PDF and Word. We are already working through the rules against our own two servers. If you want to know how yours measures up, [let's talk](mailto:kin@apievangelist.com).
