---
published: true
layout: post
title: 'Lint An Agent Skill Before You Hand It To An Agent'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/lint-an-agent-skill-before-you-hand-it-to-an-agent.png
date: 2026-11-10
author: Kin Lane
tags:
  - API Evangelist Tools
  - MCP
  - Agent Skills
  - Governance
  - Linting
---

Agent skills are piling up. A SKILL.md is a Markdown file with a little YAML frontmatter on top, and it tells an agent when to pick up a capability and how to use it. Teams are writing them by the dozen, copying them between repositories and handing them to agents with no review at all. We spent fifteen years learning to lint our OpenAPI before we published it, and we're now writing the instructions agents read first with no linting whatsoever.

That's the job `lint_agent_skill` does. It's an MCP tool on the API Evangelist server, and it's also a REST operation, `POST /governance/lint-skill`. You give it a SKILL.md and it checks it against the API Commons skill rules: name, description, structure and metadata.

## What I gave it

I didn't want to test it on something I wrote, so I used two public skills from Anthropic's own [skills repository](https://github.com/anthropics/skills):

- [`pdf/SKILL.md`](https://github.com/anthropics/skills/blob/main/skills/pdf/SKILL.md), 314 lines, the skill for reading, merging, splitting and filling PDFs.
- [`mcp-builder/SKILL.md`](https://github.com/anthropics/skills/blob/main/skills/mcp-builder/SKILL.md), 252 lines, the guide for building MCP servers.

The only argument is `document`, which takes the raw Markdown as a string. I also passed the optional `context` sentence, which the tool only reads if a result turns out to be wrong. That's two calls, one per file.

## What came back

Both skills passed. The tool ran 18 rules against each file and found zero errors and zero warnings. Here's the `mcp-builder` result, trimmed:

```json
{
  "format": "agent-skill",
  "ruleCount": 18,
  "passed": true,
  "summary": { "error": 0, "warning": 0, "info": 6, "hint": 0 },
  "diagnostics": [
    { "code": "skill-has-examples-section", "severity": "info",
      "message": "Skill body should have an \"Examples\" section." },
    { "code": "skill-has-usage-section", "severity": "info",
      "message": "Skill body should have a \"Usage\" section." },
    { "code": "skill-single-title", "severity": "info",
      "message": "Skill body should have at most one level-1 heading." },
    { "code": "skill-require-allowed-tools", "severity": "info",
      "path": ["frontmatter"], "message": "Missing `allowed-tools`." },
    { "code": "skill-require-metadata", "severity": "info",
      "path": ["frontmatter"], "message": "Missing `metadata`." },
    { "code": "skill-require-version", "severity": "info",
      "path": ["frontmatter"], "message": "Missing `version`." }
  ]
}
```

The `pdf` skill got five info notes: the same list without `skill-single-title`.

All of these are info-level, so neither file fails. Both skills have what an agent needs to choose them, which is a name and a description that says when to use it. The PDF description even ends with "If the user mentions a .pdf file or asks to produce one, use this skill." That's a trigger an agent can act on.

The heading note on `mcp-builder` is real. I checked it by hand because I expected a false positive from `#` comments inside code blocks. I was wrong. The file has three level-1 headings outside any code fence: `# MCP Server Development Guide` on line 7, `# Process` on line 15 and `# Reference Files` on line 207. One title with second-level sections would read better for people and for agents.

The other five notes are worth a hard look, and some of that look lands on us. Neither skill has a `version`, a `metadata` block or an `allowed-tools` list in its frontmatter. Neither has a section called "Usage" or "Examples". That doesn't mean the files are thin. The PDF skill is full of worked code, under headings like "Python Libraries" rather than "Examples". So the section rules check for a heading name, not for what the section contains. I think that's the right severity for them, a note and not a failure. But if you run this across a hundred skills, expect those two notes on nearly every one, and don't read them as a sign the content is missing.

The frontmatter notes matter more. A skill with no version can't tell you which copy you're running once it's been copied into five repositories. A skill with no `allowed-tools` list hands the decision about what it may touch to whoever runs it. Two of the best-maintained public skills out there skip both, and that tells me most skills in the wild skip them too.

## What that makes possible

- **Gate skills in CI.** `passed` is a boolean and the summary counts severities, so a pipeline can block on errors and warnings and log the info notes, the same way you already gate an OpenAPI.
- **Inventory a skill library.** Run it over every SKILL.md in a repository and you'll see which ones have no version or no tool limits before an agent loads them.
- **Review a skill before you trust it.** Before you drop a third-party skill into an agent, one call tells you whether it has a usable name and description, and whether it says what tools it expects.
- **Hand the output to an agent.** Each diagnostic has a stable `code` and a `path`, so an agent can add the missing `version` or `allowed-tools` itself and lint again.

The generic `validate_api` tool does the same thing when it detects a skill, so you can point one tool at a mixed folder of OpenAPI, AsyncAPI and SKILL.md files.

## Try it

It's free. On MCP, connect to `https://mcp.apievangelist.com/mcp` (or the lighter governance toolset at `https://mcp.apievangelist.com/mcp/governance`) and call `lint_agent_skill` with `document` set to the Markdown.

Over REST:

```sh
curl -s -X POST https://api.apievangelist.com/v1/governance/lint-skill \
  -H 'Content-Type: application/json' \
  -d "$(jq -Rs '{document: .}' SKILL.md)"
```

The operation is documented in the [Governance API reference](https://developer.apievangelist.com/governance-api), and the [MCP server docs](https://developer.apievangelist.com/mcp-server) cover connecting an agent. If you've got a skill library, run it before the next one gets copied into another repo.
