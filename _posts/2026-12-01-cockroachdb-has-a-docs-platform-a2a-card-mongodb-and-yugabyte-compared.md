---
published: true
layout: post
title: 'CockroachDB Has A Docs Platform A2A Card. MongoDB And Yugabyte Compared.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/cockroachdb-has-a-docs-platform-a2a-card-mongodb-and-yugabyte-compared.png
date: 2026-12-01 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Cockroach Labs
  - MongoDB
  - Yugabyte
---
I am continuing my daily series looking at companies that publish an A2A (Agent2Agent) agent card next to two of their competitors. The overview is in my post on [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and everything is browsable in the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 that page counts 1,279 providers serving a card, with 934 conformant.

Today it is databases. Cockroach Labs and CockroachDB, compared with MongoDB and Yugabyte.

## What Cockroach Labs Publishes

The card lives at [docs.cockroachlabs.com/.well-known/agent-card.json](https://docs.cockroachlabs.com/.well-known/agent-card.json). It is listed on the [Cockroach Labs card page](https://apis.io/a2a/cockroach-labs/) at APIs.io, and it was live when I checked on November 10, 2026.

The details:

- Card name "CockroachDB", no description.
- Protocol version "0.3", preferred transport HTTP+JSON.
- The endpoint is https://docs.cockroachlabs.com/, the root of the docs site.
- One skill, with the id "cockroachlabs". Its description starts "Use when building distributed SQL applications, managing cloud databases, migrating from legacy databases, optimizing query performance, setting up disaster recovery, or configuring multi-region deployments," and goes on to list the kinds of questions where an agent should reach for it.

APIs.io grades it conformant, with one deviation noted: interfaces listed under supportedInterfaces instead of additionalInterfaces. My live probe estimated near-conformant for the same reason. The skill text had shifted a little since APIs.io fetched it in October, which tells me the card is regenerated as the docs change.

## Reading The Card Honestly

This is a documentation platform card. One skill named after the company, a description that begins "Use when...", an endpoint pointing at the docs root, and protocol 0.3. It is the same template I have seen on hundreds of developer sites.

It does its job as a discovery hint. An agent learns that CockroachDB is a distributed SQL database, and the skill description is a decent summary of the topics the docs cover. But the endpoint is a website. There is no agent behind it to hand a task.

The real agent surface is elsewhere. The docs [llms.txt](https://docs.cockroachlabs.com/llms.txt) links to an [MCP Server page](https://docs.cockroachlabs.com/docs/continuum/mcp-server) under the Cockroach Continuum Cloud section, and Cockroach Labs maintains a [CockroachDB MCP server on GitHub](https://github.com/cockroachdb/cockroachdb-mcp-server). Neither shows up in the card.

## MongoDB

I checked mongodb.com, www.mongodb.com and docs.mongodb.com at both /.well-known/agent-card.json and /.well-known/agent.json. Every request returned 404. No agent card.

MongoDB has invested heavily in the agent side otherwise. There is an [llms.txt for the docs](https://www.mongodb.com/docs/llms.txt), [MCP server documentation](https://www.mongodb.com/docs/mcp-server/), and the [MongoDB MCP server on GitHub](https://github.com/mongodb-js/mongodb-mcp-server).

## Yugabyte

I checked yugabyte.com, docs.yugabyte.com and developer.yugabyte.com at both well-known paths. No agent card on any of them.

Yugabyte's [llms.txt](https://docs.yugabyte.com/llms.txt) lists two MCP pieces: a [YugabyteDB MCP Server](https://docs.yugabyte.com/stable/develop/tutorials/ai/mcp-server/) for connecting agents to your database, and a Docs MCP Server for querying the documentation. The database server is also [on GitHub](https://github.com/yugabyte/yugabytedb-mcp-server).

## Side By Side

| | Cockroach Labs | MongoDB | Yugabyte |
|---|---|---|---|
| A2A card found | Yes, docs.cockroachlabs.com | No (3 hosts checked) | No (3 hosts checked) |
| Grade | Conformant (APIs.io), near-conformant (my live probe) | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Endpoint | Docs root | n/a | n/a |
| Skills | 1 generic docs skill | n/a | n/a |
| llms.txt | Yes | Yes | Yes |
| MCP server | Yes | Yes | Yes, plus a docs MCP |

## What This Tells Me

This is a market where all three companies have done the real work. Every one of them has an MCP server and an llms.txt. Databases are one of the first things developers wire into coding agents, so that is not a surprise.

The A2A card is the only difference, and in Cockroach Labs' case it comes from the docs platform rather than a deliberate agent design. That still counts for something. CockroachDB shows up in the A2A catalog and the other two do not. But the card undersells what Cockroach Labs actually offers. An agent reading it would conclude there is a docs site, when there is in fact an MCP server that can work with a cluster.

The fix is small. Add a description, move the interface to the standard field, and point at the MCP server, either with an extension or a second skill. Moving to protocol 1.0 would be a good time to do it.

## The Takeaway

For MongoDB, Yugabyte, and other database vendors, you are already agent-ready in the ways that matter most. The missing piece is discovery. A card at /.well-known/agent-card.json that names your MCP servers and describes two or three things an agent can actually do, like query a database or search the docs, would put you ahead of the generated cards that are filling up the catalog right now. Your APIs.io listings are at [MongoDB](https://apis.io/providers/mongodb/) and [Yugabyte](https://apis.io/providers/yugabyte/).
