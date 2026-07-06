---
published: true
layout: post
title: Conversational API Governance Your Agent Can Call
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/conversational-api-governance-your-agent-can-call.png
date: 2026-07-21
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Governance
  - MCP
  - Agents
  - Tools
---
This is the next stop in my daily walk through the [governance tools I have been building under API Commons](https://apicommons.org/tools/), and it is a close sibling of the browser validator I wrote up earlier in the series. Where that one is a tab you open, this one is a service your agent talks to. [API Governance MCP](https://github.com/api-commons/api-governance-mcp) is a Model Context Protocol server that lets any AI client lint your API artifacts against the same best-of-breed governance ruleset, conversationally. You install it with `npx @api-common/api-governance-mcp`, wire it into Claude Desktop or whatever MCP client you live in, and then you can just ask: lint this OpenAPI for governance issues and tell me what to fix.

Under the hood it is the exact same engine and the exact same compiled ruleset as the API Validator — Spectral running the `all-rules.yaml` catalog, 769 rules across 12 artifact formats, of which the OpenAPI group alone is 462. The only difference is where it runs. Instead of pasting a document into a page, you hand the agent your OpenAPI, AsyncAPI, Arazzo, APIs.json, JSON Schema, MCP, or one of the other formats, and it comes back with findings you can talk through. Swagger 2.0 gets governed at full parity with OpenAPI 3.x here too, because Spectral auto-detects each document's format and the server maps `swagger` to `openapi`, so your agent can say either word and get the right rules.

The server does not just throw a wall of violations at you and walk away. It exposes a handful of tools the agent can reach for in the course of a conversation: `lint_artifact` to run the ruleset over a document, `list_formats` and `list_rulesets` to see what it governs and which rules apply where, `describe_rule` to look a finding's code up and get the title, description, tags, and a remediation prompt, and `validate_ruleset` to structurally check a custom Spectral ruleset before you lint with it. That last pair matters, because it means the agent can not only tell you what is wrong but explain why the rule exists and hand you the language to fix it.

The philosophy carries straight over from the rest of this tooling. Every rule ships at `info`, because the default posture of governance should be to educate rather than to block, and you raise individual rules to `warn` or `error` with your own custom ruleset for the conventions you actually want to enforce. Nothing about this is locked inside a vendor. It is open, it is Apache-2.0, it is the same Spectral you could run yourself, and it runs on your machine over stdio so your specs and your tokens never leave the room. This is simply the AI surface of the validator — governance that meets your agent where it already works.

That is the whole idea again, just aimed at a different doorway. If your team is moving toward agent-assisted development, the review step that used to be a ticket can now be a sentence you say mid-conversation, grounded in a real ruleset instead of a model's best guess. Go grab it with `npx @api-common/api-governance-mcp`, read the details on [GitHub](https://github.com/api-commons/api-governance-mcp), and see how it fits with the rest of the [API Commons tools](https://apicommons.org/tools/). More of them coming, one a day.
