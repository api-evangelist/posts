---
published: true
layout: post
title: 'Skills Over MCP Is Final, And Now It Needs Servers'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/skills-over-mcp-is-final-and-now-it-needs-servers.png
date: 2026-09-22
author: Kin Lane
tags:
  - MCP
  - Agent Skills
  - Specifications
  - Agents
  - Discovery
  - APIs.io
  - APIs
---
The Model Context Protocol has a Skills extension now. [SEP-2640](https://modelcontextprotocol.io/seps/2640-skills-extension) was marked Final when its pull request merged on September 13th, and the work lives in [modelcontextprotocol/ext-skills](https://github.com/modelcontextprotocol/ext-skills). The extension is `io.modelcontextprotocol/skills`, the [specification](https://github.com/modelcontextprotocol/ext-skills/blob/main/specification/stable/skills.mdx) is written against base protocol revision `2026-07-28`, and as of last week it has a proper [documentation site](https://modelcontextprotocol.io/extensions/skills/overview) rather than a repo full of design notes. I sat in on the working group's call today. I want to point some attention at this work, because I think it solves a problem I watch play out across the whole catalog every day, and because the part that is left is the part that needs more people.

The idea is simple. An MCP server already hands an agent its tools. What it has not had is a standard way to hand the agent the *instructions* for using those tools: the workflow, the order of operations, the things you should never do. [Agent Skills](https://agentskills.io/specification) already defines that format as a directory with a `SKILL.md` at its root, YAML frontmatter carrying a `name` and `description`, and references, scripts, and examples alongside. The extension does not redefine any of it. It says outright that it is a transport binding and that the payload format belongs to agentskills.io. I think that is the most important design decision in the repo. There is one source of truth for what a skill is, and MCP is one way to deliver it.

The mechanics reuse what MCP already has. Every file in a skill is an ordinary resource, conventionally at `skill://<skill-path>/<file-path>`, read with `resources/read`. On top of that it adds three methods:

- `skills/list` enumerates the skills a server serves, returning each skill's frontmatter verbatim plus a manifest of every file with a digest.
- `skills/get` returns the entry for one skill by URI.
- `resources/directory/read` (optional) lists one directory, so an agent told to "use the template in `templates/`" can actually look.

Two choices in the [rationale](https://github.com/modelcontextprotocol/ext-skills/blob/main/docs/rationale.md) show they thought about real servers. A listing may be empty or partial. A documentation server that turns each endpoint into a skill might have thousands, and a gateway fronting an external index cannot enumerate at all, so hosts must not read an empty list as proof there are no skills. The digests are also per file, not per skill. An earlier draft digested only `SKILL.md`, which meant a server could get a benign skill approved and then swap out a reference file the model reads just as faithfully. Every file is bound now, so a changed or added file shows up as a verification failure. That is the difference between a skill you can trust and a prompt you downloaded once.

## Why this matters for APIs

This is where the apis.io network comes in. I counted what is on disk today.

Of the 27,956 providers in the catalog, **679 publish Agent Skills they wrote themselves**, 2,568 skills in total. That count excludes the skills my own pipeline generates, and it excludes 60 storefronts whose "skills" are an `agents.md` their commerce platform writes for them. Those 679 providers keep them wherever they happened to put them:

- 422 providers point to a GitHub repository.
- 281 serve them from their own website or docs.
- 8 ship them inside an npm package.

That is a lot of scattered places to look. I found 968 skills at a `SKILL.md` URL, 296 behind a `.well-known` path, and 25 by following an `llms.txt`. Every one of them was found by crawling, guessing, or being told. None of it is a protocol.

Now the overlap. **270 of those 679 providers also run a hosted MCP server**, and between them they publish 843 skills. That makes 270 companies that already operate both halves of this extension, the server and the instructions for using it, in two different places. An agent connected to their MCP server cannot learn those skills exist unless someone wires it up by hand.

Then I asked the servers directly. I sent one anonymous MCP `initialize` to every hosted endpoint in the catalog, 1,432 of them. 572 completed the handshake. 699 wanted a credential, and I cannot see what those support. The rest were errors, dead hosts, or not MCP at all. Of the 572 that answered, **two declare `io.modelcontextprotocol/skills`**:

- **[Hugging Face](https://huggingface.co/mcp)**, which the working group's [implementations list](https://github.com/modelcontextprotocol/ext-skills/blob/main/docs/implementations.md) already names as a v1 server.
- **[RenooLab](https://apis.io/providers/renoolab-fr/)**, a French marketplace for building tradespeople. Nobody on the list mentions it. It answers `skills/list` with no credential, pages the listing with a cursor, and returns five skills spanning 33 files, each with a `sha256` digest, exactly the shape the spec describes. A small company in France shipped this the week the SEP went final. I love that.

Two of 572 is not a failure. The SEP has been final for nine days. It tells you precisely where this is in its life: the specification is done and adoption has barely started. The limit of my measurement matters too. More than half the hosted servers would not talk to me without authentication, so the real number could be higher, and I cannot tell you by how much.

## Where the work is now

The repo's [implementations page](https://github.com/modelcontextprotocol/ext-skills/blob/main/docs/implementations.md) tells the rest of the story honestly:

- **SDKs:** the official Go, TypeScript, Python, and C# SDKs all have open pull requests. Go passes the conformance suite. FastMCP has its own pre-v1 `skill://` shape.
- **Hosts:** MCP Inspector has partial support, including CLI skill verification as of 2.6.0. ChatGPT plugins import skills as a static snapshot at submission. Goose is planned.

Adoption now depends on SDKs shipping, conformance tests existing, and hosts deciding to read what servers offer. The stable spec is not edited in place. Changes go through the [decision log](https://github.com/modelcontextprotocol/ext-skills/blob/main/docs/decisions.md) and land in a new release, which is the right discipline for something people are about to build on.

My asks:

**If you run an MCP server and publish skills anywhere else, you are the 270.** Serve them from the server. Your SKILL.md files already exist. The extension asks you to expose them as resources and answer two methods. Once you do, you get digests your users can pin, and an agent that finds your tools also finds how to use them.

**If you build an MCP client or agent harness, read the listing.** The spec is deliberately careful about consent. Skills are approved per skill, content is bound to digests, and files are fetched only when needed. That work has been done for you.

**If you maintain an SDK or care about conformance, this is where help is needed.** The design is done. The SDK pull requests need reviewers, the conformance suite needs scenarios, and the [contributing guide](https://github.com/modelcontextprotocol/ext-skills/blob/main/CONTRIBUTING.md) lists the Discord channel, the GitHub Discussions, and the meeting schedule.

I will keep measuring this across the apis.io network. The number I care about is how many of those 270 providers stop publishing their skills in one place and their server in another.
