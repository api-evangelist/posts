---
published: true
layout: post
title: A Universal Install Interface for MCP Servers
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-universal-install-interface-for-mcp-servers.png
date: 2026-07-23
author: Kin Lane
tags:
  - API Commons
  - MCP
  - Model Context Protocol
  - Install
  - Registry
  - Tools
---
I have been walking through the [API Commons tools](https://apicommons.org/tools/) one at a time this month, and today I want to talk about the one that scratches an itch I have had ever since MCP servers started showing up everywhere. Every server author writes their own install instructions, and every set of instructions is different. One README tells you to paste a JSON blob into a config file. Another gives you a `claude mcp add` command. A third assumes you are in Cursor and hands you a deep link. Multiply that by the couple dozen clients now in the wild and you have a mess that nobody signed up to maintain. So I built [MCP Install](https://install.apicommons.org) — the "Run in Postman" button, but for MCP servers. One button, every client.

A provider configures their server once and gets a single button that installs it wherever the visitor happens to be. One-click deep links for the clients that support them like Cursor, VS Code, Visual Studio, LM Studio, and Goose. Ready-to-run CLI commands for Claude Code, Gemini CLI, and Codex CLI. Per-OS config snippets for Claude Desktop, Windsurf, Zed, Cline, Continue, Warp, Kiro, and the rest. Web connector walkthroughs for Claude, ChatGPT, and Copilot. The chooser detects the visitor's operating system and renders the exact path for their client, so the server author stops trying to keep a dozen sets of instructions current in their head.

The button is the part you see, but it is not the part I care most about. Underneath it sits [`clients.json`](https://install.apicommons.org/clients.json), an open, machine-readable registry of *how every MCP client installs a server* — the deep-link builders, the CLI command templates, the config file formats and their per-OS paths, the connector steps. That is the load-bearing knowledge that every server author currently rediscovers by hand, written down once, in the open, validated by a published JSON Schema, under an Apache-2.0 license. This is the whole API Commons argument applied to a new surface. We treat the contract as a commons artifact with OpenAPI and the catalog as a commons artifact with APIs.json, and install mechanics are the same kind of object — shared knowledge about how software interoperates, far more valuable as one canonical forkable file than as a thousand READMEs left to rot. Because it is just data, adding a client is almost always a pure data pull request, no code required unless somebody invents a genuinely new mechanism.

There is a design instinct running through this that I keep coming back to, which is to carry a pointer, not a payload. Whenever it can, the button carries a registry name or a `server.json` URL rather than an inline config, and the chooser resolves that pointer and shows the user exactly what they are about to install from a canonical source at install time. The same instinct behind APIs.json and the MCP Registry: the definition lives in one authoritative place and everything else references it instead of forking a stale copy into a URL. And because install buttons are a natural place to get security wrong, nothing ever executes from the page — every output is a link the user's own client confirms or text the user copies deliberately, and real secrets stay out of the button entirely.

That is the idea. Free, open tooling that turns a fragmented pile of install instructions into a single interface, sitting on top of a registry that anyone can build on. Go [try it](https://install.apicommons.org), drop a button on your docs, and if your client installs servers in a way the registry does not capture yet, send it back — that is exactly how a commons artifact is supposed to grow.
