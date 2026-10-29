---
published: true
layout: post
title: 'Skills Over MCP Is Now Officially Beta'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/skills-over-mcp-is-now-officially-beta.png
date: 2026-10-29
author: Kin Lane
tags:
  - MCP
  - Agent Skills
  - Standards
  - Specifications
  - Governance
---
Today the Skills extension for the Model Context Protocol moved into Beta. [Pull request #161](https://github.com/modelcontextprotocol/ext-skills/pull/161) in the `ext-skills` repository merged today, moving the specification from `specification/stable/` to [`specification/beta/`](https://github.com/modelcontextprotocol/ext-skills/tree/main/specification/beta). Nothing in the specification itself changed. What changed is what the label means, and that's worth understanding if you're building on it.

## This isn't a step backward

When [SEP-2640](https://modelcontextprotocol.io/seps/2640-skills-extension) went Final in September, I wrote that [skills over MCP is final and now it needs servers](https://apievangelist.com/2026/09/22/skills-over-mcp-is-final-and-now-it-needs-servers/), and the working group published its released revision in a folder called `stable`. At the time, "stable" just meant the released version, as opposed to a draft. Every MCP extension used its own words for maturity. One used `stable` and `draft`, another labeled its snapshots "Stable" and "Development." An implementer couldn't tell whether an official extension was settled or still being reworked.

[SEP-3392, Extension Lifecycle](https://modelcontextprotocol.io/seps/3392-extension-lifecycle), fixes that. It's now Final, and it gives every extension one of four stages:

- **Experimental.** Anything can change at any time. Expect nothing.
- **Beta.** Real usage is welcome. Changes are approved by the extension's maintainers, breaking changes are expected to be rare, and each one is documented.
- **Stable.** Behavior is fixed within a core protocol revision, and changes only come with a new revision.
- **Core.** The extension is promoted into the core specification.

The directory an extension's specification sits in is now the marker of its stage, and "stable" became a word with a specific meaning. So the Skills spec moved out of a folder whose name now promises something it never promised. The SEP's transition table classifies Skills, Tasks and Server Cards as Beta, and Apps and Auth as Stable.

## What Beta means if you're building on it

If you're serving skills from your MCP server, or reading them in a client, here's what changes in practice:

- **The identifier and wire behavior stay the same.** Existing implementations keep working. You still declare `io.modelcontextprotocol/skills`, and skills are still served as `skill://` resources.
- **Breaking changes are allowed, but logged.** The repository's [decision log](https://github.com/modelcontextprotocol/ext-skills/blob/main/docs/decisions.md) is now the changelog SEP-3392 requires for Beta breaking changes. Watch it the way you'd watch release notes.
- **There are named maintainers.** The PR adds a `MAINTAINERS.md` that lists the working group leads as Extension Maintainers, so you know who approves changes.
- **The destination isn't decided.** A Beta extension has to say where it's headed, Stable as an extension or promotion into Core. For Skills, the [extensions page](https://modelcontextprotocol.io/extensions/overview) doesn't say yet.

That last one is the question I'll be watching. Skills as a Stable extension means an opt-in that servers and clients choose to support. Skills in Core would make serving and reading skills part of what MCP is.

## Why I like this

I spend a lot of time measuring what providers say against what they ship, and a maturity label that means one specific thing is exactly what makes that possible. It's the same reason I want API providers to publish their versioning and deprecation policies, not just their versions. "Stable" in a folder name told you nothing. Beta, with a defined change process, a changelog and named maintainers, tells you how much to invest and what to watch.

It's also an honest label for where adoption is. A week ago I [counted four companies serving skills over MCP the way the spec says](https://apievangelist.com/2026/10/21/four-companies-serve-skills-over-mcp-the-way-the-spec-says/), out of 1,450 public MCP endpoints that answered. Beta is where an extension should be when that's the number. It's the stage where real usage shapes the final design.

So if you're thinking about serving skills from your MCP server, Beta is an invitation, not a warning. The working group wants real implementations now, while the design can still learn from them. The [Skills extension docs](https://skills.extensions.modelcontextprotocol.io/) are the place to start.
