---
published: true
layout: post
title: There is a Lot of Knowledge and Wisdom Packed Into Speakeasy's Agent Skills
date: 2026-02-06T09:00:00.000Z
tags:
  - Agent Skills
  - CLAUDE.md
  - SKILL.md
  - RULES.md
  - GEMINI.md
  - AGENTS.md
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-docks-water-front-ships-containers.jpg
---
[I saw Speakeasy publish their agent skills](https://github.com/speakeasy-api/skills). It caught my attention, not because I care about agents, but because I care deeply about the knowledge expressed in these agent skills. Honestly, I don’t care one bit about what happens with agents, that is y’all’s hustle, but when it comes to codifying the value that exist within enterprise and can be put to use accomplishing things that optimize how the enterprise operates in a digital world—that interests me. 

Speakeasy’s Agent Skills are elegant, and represent for me why [Agent Skills](https://bit.ly/4a7QCmU) matter. Look at that. It is a beautiful list of what matters at the SDK (and more) layer of your operations. It is the knowledge and wisdom I’ve been looking to “discover” with my [APIs.json SDK property](https://apisjson.org/properties/) for a number of years. It just took the AI evolution to give people the vocabulary they need to understand why it is important and express it in such a useful and meaningful way.

- **Start Here** — Get accurate Speakeasy CLI info and provide feedback
- **SDK & Terraform Generation Best Practices** — Comprehensive guide to all generation capabilities, patterns, and customization
- **Start a New SDK Project** — Generate an SDK from an OpenAPI spec
- **Diagnose Generation Failures** — Troubleshoot "Step Failed: Workflow" errors
- **Write OpenAPI Specs** — Author specs from scratch or improve existing ones
- **Manage OpenAPI Overlays** — Create, apply, or fix specs with overlays
- **Improve SDK Naming** — Clean up ugly method names with AI-powered or manual fixes
- **Generate a Terraform Provider** — Build a Terraform provider from an OpenAPI spec
- **Extract OpenAPI from Code** — Pull an OpenAPI spec from existing API code (FastAPI, Flask, Django, etc.)
- **Customize SDK Hooks** — Add custom headers, telemetry, or security hooks to generated SDKs
- **Set Up SDK Testing** — Configure contract tests, Arazzo workflows, or integration tests
- **Generate an MCP Server** — Build an MCP server for AI assistant integration
- **Customize SDK Runtime** — Configure retries, timeouts, pagination, server selection, and error handling

As the system thinker I am, I needed to deconstruct what Speakeasy has done so I can apply it to other work that I am investing in. 

Speakeasy uses CLAUDE.MD.

**CLAUDE.MD** — Created by Anthropic (for Claude Code)
This is a project-level configuration file for Claude Code, Anthropic's command-line coding agent. You place it in your repo's root (or subdirectories), and Claude Code reads it automatically at the start of every session. It typically contains project conventions, preferred tech stack, build/test commands, coding style rules, and anything you'd tell a new developer onboarding to the project. Think of it as a persistent "system prompt" scoped to a codebase.

I’ve aligned this with other conversations I just had with Anna Daugherty of Arnica about RULES.MD.

**RULES.MD** — Created by Cursor (Anysphere, Inc.)
This is the equivalent of CLAUDE.MD but for the Cursor AI code editor. Placed in a .cursor/rules/ directory, it gives Cursor's AI assistant project-specific instructions — style guides, architecture decisions, do's and don'ts. Cursor reads these files to tailor its code suggestions and chat responses to your project's conventions.

Then I wanted to align with further DX experience research I am doing focused on GitHub Copilot and VSCode.

**.github/copilot-instructions.md** — Created by GitHub (for GitHub Copilot)
This is GitHub Copilot's version of the same concept. You place it at .github/copilot-instructions.md in your repository, and Copilot automatically includes its contents as context when generating suggestions or answering chat questions. It's where you define project-specific guidance — preferred libraries, naming conventions, architectural patterns, testing expectations, etc. GitHub also supports more granular instruction files via .github/copilot/ with separate files scoped to specific tasks (like code review or commit messages).

And I needed to align with conversations I am having around including Google Gemini into the Naftiko DX.

**GEMINI.md** — Created by Google (for Gemini CLI / Gemini Code Assist)
This is Google's equivalent of CLAUDE.MD. Placed in your repo root (or ~/.gemini/ for global settings), it gives Gemini CLI persistent, project-scoped instructions — coding conventions, preferred frameworks, build commands, style rules, etc. Gemini reads it automatically at session start. It follows the same pattern: a markdown file that acts as a standing prompt so you don't have to repeat context every time. It works with both the open-source Gemini CLI tool and Gemini Code Assist in IDEs.

Now we get to the gold in this discussion. The skills. And why Speakeasy is so important—because they are API operational level skills.

**SKILL.MD** — Created by Anthropic (for Claude's file-creation capabilities)
These live inside skill folders and teach Claude best practices for specific output types — creating Word docs, PowerPoints, spreadsheets, PDFs, etc. Each SKILL.MD contains condensed, battle-tested instructions (formatting rules, library usage, common pitfalls) that Claude reads before generating a file. They exist in both public (Anthropic-maintained) and user-uploaded varieties. You can see these referenced in Claude.ai's "create files" feature.

Then Speakeasy includes an AGENTS.MD in there to help weave their skulls into multi-agent workflows.

**AGENTS.MD** — Created by Anthropic (for Claude Code)
This extends Claude Code for multi-agent workflows. When Claude Code spawns sub-agents (e.g., a "research agent" and a "coding agent" working in parallel), AGENTS.MD defines roles, responsibilities, and coordination rules for those agents. It's a newer convention that emerged as agentic coding became more common, letting you orchestrate how multiple Claude instances divide labor on complex tasks.

I included RULES.md, GEMINI.md, and Copilot Instructrions because they live at the same level, but I also wanted to contrast the ownership across the levels.

- **CLAUDE.MD** — Claude Code — Anthropic
- **RULES.MD** — Cursor — Anysphere
- **GEMINI.MD** — Gemini CLI / Code Assist — Google
- **.github/copilot-instructions.md** — GitHub Copilot — GitHub/Microsoft
- **SKILL.MD** — Claude.ai (file creation) — Anthropic
- **AGENTS.MD** — Claude Code (multi-agent) — Anthropic

They're all converging on the same idea -- a markdown file in your repo that tells the AI how to behave in your project. The format and location differ by tool, but the pattern is universal now. If you're working across multiple AI tools, you'll likely maintain several of these with overlapping content — or create a shared base doc and adapt it for each tool's conventions.

But then the ways in which Speakeasy is enabling the distribution of their skills, beyond just making it available in a GitHub repository.

**.claude-plugin/plugin.json** — The manifest for an individual plugin. It defines the plugin's name, description, version, author, and what it contains (slash commands, sub-agents, MCP servers, hooks, skills). Think of it like a package.json for a Claude Code plugin.
**.claude-plugin/marketplace.json** — The catalog for a collection of plugins. It lives at the root of a git repo and lists all the plugins available in that marketplace — their names, descriptions, sources (relative paths to each plugin folder), and categories. Users add marketplaces to Claude Code with /plugin marketplace add, then browse and install individual plugins from them.

I feel that it would be irresponsible in the review to leave out these two files.

**LICENSE.md** — A standard file found in virtually every open-source repository that defines the legal terms under which the code can be used, modified, and distributed. It's not AI-specific — it predates all of these tools and is a foundational part of software licensing. Common examples include MIT, Apache 2.0, and GPL. Without one, code is technically "all rights reserved" by default, so this file is what explicitly grants others permission to use your work.
**README.md** — The front door of any software project. It's the first file people see when they land on a repository, and it typically explains what the project does, how to install and use it, and any other context a newcomer would need. Like LICENSE.md, it's a long-standing convention that predates AI tooling entirely. GitHub, GitLab, and similar platforms automatically render it on the repository's homepage, making it the de facto introduction to any codebase.

All of these files work in concert to achieve a specific series of business outcomes. Speakeasy has done an amazing job to distill down their expertise (and their platform offerings) into a meaningful set of skills the occupy once of the most critical stops along the API lifecycle — SDK and code generation. Impressive work. So much to learn from here, and to begin applying across the API lifecycle, from both producer and consumer vantage points.

I am weaving a couple of the other standards into here because I building on what Speakeasy is doing, but also weaving it together with other conversations I’ve had with [Kevin Swiber about MCP and Agent Skills](https://www.linkedin.com/posts/naftiko_naftiko-capabilities-podcast-for-february-activity-7425322670214254592-4VBW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAC2eqYB5Eg-JCzGJxAmnBCGS72UBnYyaA8), with [Patrick Kelly about context engineering at this level](https://www.linkedin.com/posts/kinlane_patrick-kelly-came-by-this-morning-for-a-activity-7424492037191884800-dBNK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAC2eqYB5Eg-JCzGJxAmnBCGS72UBnYyaA8), and with [Anna Daugherty when it comes to application security](https://www.linkedin.com/posts/kinlane_anna-daugherty-cpmm-from-arnica-came-by-activity-7425565130353983488-Zyio?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAC2eqYB5Eg-JCzGJxAmnBCGS72UBnYyaA8), as weel as where I want to take this work when it comes to API governance, from both the producer and consumer vantage points.