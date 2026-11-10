---
published: true
layout: post
title: 'Semgrep Serves An A2A Card From Its Docs. Snyk And Sonar Compared.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/semgrep-serves-an-a2a-card-from-its-docs-snyk-and-sonar-compared.png
date: 2026-12-02 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Semgrep
  - Snyk
  - Sonar
---
Each day I am picking one company that publishes an A2A (Agent2Agent) agent card and setting it next to two of its competitors. The background is in my post on [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the data is in the [APIs.io A2A catalog](https://apis.io/a2a/), which as of November 10, 2026 counts 1,279 providers serving a card, with 934 conformant.

Today is code security. Semgrep, compared with Snyk and Sonar.

## What Semgrep Publishes

Semgrep serves a card at [docs.semgrep.dev/.well-known/agent-card.json](https://docs.semgrep.dev/.well-known/agent-card.json). It is on the [Semgrep card page](https://apis.io/a2a/semgrep/) at APIs.io, and it was live when I checked on November 10, 2026.

The details:

- Card name "Semgrep", no description.
- Protocol version "0.3", preferred transport HTTP+JSON.
- The endpoint is https://docs.semgrep.dev/, the docs root.
- One skill, id "semgrep". In the APIs.io snapshot the description reads "Use when scanning code for security vulnerabilities, supply chain risks, and secrets; writing custom detection rules; managing findings and policies; integrating scanning into CI/CD pipelines; or triaging and remediating security issues across repositories."

APIs.io grades it conformant with one deviation, interfaces listed under supportedInterfaces instead of additionalInterfaces. My live probe estimated near-conformant for the same reason. The skill wording had changed slightly since APIs.io fetched it in October, so the card is regenerated as the docs evolve.

## Reading The Card Honestly

This is a documentation platform card. One skill named after the company, "Use when..." phrasing, the docs root as the endpoint, protocol 0.3. Same template as many others in the catalog.

As a discovery hint it is fine. The skill description is a good one-paragraph summary of what Semgrep does. But there is no agent at that endpoint. It is the docs website.

Semgrep's actual agent surfaces are a step away. The docs [llms.txt](https://docs.semgrep.dev/llms.txt) includes setup pages for Semgrep Guardian with Cursor, GitHub Copilot and VS Code, describing configuration of the Semgrep MCP server. There is also a [Semgrep MCP repository on GitHub](https://github.com/semgrep/mcp). The card does not mention either.

## Snyk

I checked snyk.io and docs.snyk.io at both /.well-known/agent-card.json and /.well-known/agent.json. All four requests returned 404. No agent card.

Snyk does serve an [llms.txt on its docs](https://docs.snyk.io/llms.txt), and the docs have [quickstart guides for MCP](https://docs.snyk.io/integrations/developer-guardrails-for-agentic-workflows/quickstart-guides-for-mcp) under a section on developer guardrails for agentic workflows.

## Sonar

I checked sonarsource.com, www.sonarsource.com, docs.sonarsource.com and sonarcloud.io at both well-known paths. The first three returned 404 and sonarcloud.io returned 403. No agent card.

Sonar has an [llms.txt on its docs](https://docs.sonarsource.com/llms.txt), [SonarQube MCP Server documentation](https://docs.sonarsource.com/sonarqube-mcp-server/), and the [SonarQube MCP server on GitHub](https://github.com/SonarSource/sonarqube-mcp-server).

## Side By Side

| | Semgrep | Snyk | Sonar |
|---|---|---|---|
| A2A card found | Yes, docs.semgrep.dev | No (2 hosts checked) | No (4 hosts checked) |
| Grade | Conformant (APIs.io), near-conformant (my live probe) | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Endpoint | Docs root | n/a | n/a |
| Skills | 1 generic docs skill | n/a | n/a |
| llms.txt | Yes | Yes | Yes |
| MCP | Yes | Yes | Yes |

## What This Tells Me

Code security has gone all in on MCP, and that makes sense. These tools live inside the editor, and the editor is now full of coding agents. All three vendors document an MCP server and all three serve llms.txt. On the things that matter for an agent actually doing work, they are close to even.

The A2A card is where Semgrep stands apart, and it is mostly because its docs platform generates one. That is a real benefit for discovery. Semgrep is in the A2A catalog and the other two are not. But the card describes a docs site, not the MCP server that agents actually use to scan code. There is a nice irony there for a security company: the most visible agent-facing document points at the least capable surface.

Cleaning it up would be quick. Add a description, use additionalInterfaces, and declare the MCP server through an extension or a second skill. That is also a good moment to move from 0.3 to 1.0.

## The Takeaway

For Snyk, Sonar, and anyone else selling developer security tools, your agents are already shipping as MCP servers. The cheapest next step is to make them discoverable from a well-known path. A small, hand-written agent card that names your MCP server and lists the handful of things it does, like scanning a repository or explaining a finding, would beat a generated docs card on usefulness. Your APIs.io listings are at [Snyk](https://apis.io/providers/snyk/) and [SonarSource](https://apis.io/providers/sonarsource/).
