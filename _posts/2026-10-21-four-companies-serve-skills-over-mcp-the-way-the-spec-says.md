---
published: true
layout: post
title: 'Four Companies Serve Skills Over MCP The Way The Spec Says'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/four-companies-serve-skills-over-mcp-the-way-the-spec-says.png
date: 2026-10-21
author: Kin Lane
tags:
  - MCP
  - Agent Skills
  - Standards
  - Agents
  - Data
---
On September 13 the Model Context Protocol made skills official. [SEP-2640, the Skills Extension](https://modelcontextprotocol.io/seps/2640-skills-extension), went Final, and the working group behind it published [a docs site](https://skills.extensions.modelcontextprotocol.io/) with the stable specification. Five weeks later I wanted to know who is actually using it, so yesterday I asked every MCP server in our catalog.

Four companies serve skills over MCP the way the spec says to. Five, if you count us, and I am not counting us.

## What the spec actually is

An Agent Skill is a folder with a `SKILL.md` file at its root: a name, a description, and the instructions an agent follows to do a specific kind of work, plus whatever scripts and reference files it needs. Until now, skills mostly lived in a repository or on a local disk, which is fine when an agent has a file system and less fine when it is running in a browser or on a phone.

The Skills Extension puts them on the MCP server. A server says it supports the extension by declaring `io.modelcontextprotocol/skills` in the capabilities it returns from `initialize`. Each skill gets a `skill://` URI, its `SKILL.md` is the entry point, and its supporting files are resources under the same path. A client can list the skills with `skills/list`, and the skill files also show up in an ordinary `resources/list`. A couple of details from the maintainers' review are worth knowing: a skill's identity is the server plus its URI, not its name, and clients are not supposed to download every skill and file up front, which protects the server.

The extension is not part of the core protocol. It is an opt-in, versioned on its own, with a conformance suite in the official MCP conformance repository and SDK work underway in TypeScript, Python and C#.

## How I counted

Our catalog records the MCP servers that providers publish. I took every endpoint we have on file, 9,170 URLs across 3,765 providers, and sent each one an anonymous `initialize` that offered the skills extension. 1,450 endpoints from 1,003 providers answered. The rest want a login, are gone, or are not something you can talk to anonymously. Wherever a server declared the extension, I followed up with `skills/list` and `resources/list` to make sure there were real skills behind the declaration.

So this is a count of public, anonymous MCP servers. A company could support the extension behind authentication and I would not see it.

## The four who implement it

**Hugging Face** — `huggingface.co/mcp`. The deepest implementation I found. The skills are working material for its own platform: `hf-cli`, `hf-mem`, and a set of SageMaker deployment skills covering AWS context discovery, Python environment setup, IAM preflight, serving-image selection, a deployment planner and production defaults. They ship with more than a `SKILL.md`: the environment setup skill carries a `requirements.txt` and two Python scripts as resources. The server negotiated protocol revision 2025-11-25, and it is strict about it. My first follow-up call sent a newer protocol header and Hugging Face rejected it with a clear error naming the mismatch, which is what a server should do.

**Glean** — `developers.glean.com/mcp`. Glean's developer documentation server serves two skills: `docs-research`, for working through its developer docs, and `connect-glean-remote-mcp`, for wiring an agent to Glean's remote MCP server, with a troubleshooting reference shipped alongside it. That is the job I would most like to see skills doing everywhere: teaching the agent how to adopt the product, from the product.

**Renoolab** — `mcp.renoolab.fr/mcp`. A French platform for the building trades, and the most thoroughly packaged of the four. Two skills, one for creating and tuning an artisan's profile and one for growing a contractor's client base and visibility, written in French, with 50 resources between them: references, a document of the platform's actions, and an `agents/openai.yaml` in each skill folder. Renoolab also declares the MCP Apps extension, so it is one of the few servers combining extensions, and it serves the same thing from a Cloudflare Workers mirror.

**BestPrice** — `mcp.bestprice.gr/mcp`. The Greek price-comparison service serves one skill, `bestprice-shopping`, which teaches an agent how to make read-only shopping decisions with its search, offers and price-history tools. One skill, done cleanly, listed in both `skills/list` and `resources/list`, and documented in the repository README.

And for transparency: [APIs.io](https://apis.io/mcp) declares the extension and serves 20 skills. We built that, so it does not belong in a count of who in the market has adopted the spec.

Four out of 1,003 is small. It is also five weeks. The more telling number is the protocol: only 44 of the 1,450 endpoints that answered negotiate the current 2026-07-28 revision. Most are on 2025-11-25 (615) or still on 2024-11-05 (544). The extension that is spreading fastest is MCP Apps, declared by 45 endpoints, and only two declare Tasks.

## Skills over MCP, without the spec

The more interesting finding is how many companies already decided skills belong on their MCP server and built their own way to serve them. Most of these predate the extension, and every one of them is a tool, not a resource, which means the client has to know the tool exists and what it is called.

**Skills that teach the agent the product:**

- **Amazon Web Services.** The AWS MCP server has an `aws___retrieve_skill` tool that returns a skill's `SKILL.md`, or a named file from it. You search the documentation first and pass along the skill name it returns. The same server shows up across eight of AWS's service listings in our catalog.
- **Timescale (TigerData).** A `view_skill` tool whose description lists all 11 skills inline: Postgres and PostGIS table design, finding hypertable candidates, migrating to hypertables, pgvector semantic search, hybrid BM25 search, zero-downtime schema migrations, schema exploration, and TimescaleDB hyperfunctions. A good catalog served in a non-standard way. It is one change away from the spec.
- **Daloopa.** `list_skills` and `get_skill` serve investing workflows: structured analysis, valuation and deliverables, with the caller's inputs substituted into the instructions it returns.
- **MyBotsPro.** `list_skills` and `get_skill` serve the bundled Mira playbooks for UGC, product, ads and cinematic generation. `get_skill` returns a `SKILL.md` router first and individual sections on request, which is progressive disclosure built by hand.
- **Jentic.** It points agents to a `skill://onboard-jentic-one` resource for the move to its self-hosted Jentic One, the right URI scheme, but it does not declare the extension.

**Skills that act:**

- **Browser Use.** `list_skills` and `execute_skill`. Here a skill is a recorded automation that runs in milliseconds without a browser, and the tool description tells the agent to check for a skill before falling back to a full browser task. Same word, different idea, because these skills run instead of instructing.

**Skills the customer brings:**

- **Anthropic.** The Claude platform's MCP surface has `list_skills` and `create_skill` for managing a workspace's custom Agent Skills.
- **Cequence.** A Skill Registry in its AI gateway, with tools to create, list and fetch skills, next to the DLP policies it attaches to agents.
- **Fundamental Research Labs.** `list_skills` across default, personal and team skills.
- **Jedify.** `load_skill` fetches a markdown playbook that a user of the account wrote for the Jedify agent, after `contextualize` lists what is available.
- **Unisson.** `list_skills` lists reusable skills available to its agents.

**Skills as the product:**

- **Wato.** The fullest lifecycle I found: list published skills, fetch one as Markdown, fetch a bundled script or reference by path, save a draft, publish, and distill a conversation's connector actions into a new skill.
- **Skillsync.** Read, install, list and publish skills, for you or the current project.
- **Skills Directory.** Search, download a skill ZIP, read a skill's security grade and findings, and scan the skill you are writing.
- **Knostic.** Search a catalog of agent skills with scan status, and trigger an on-demand security scan of a skill by repository.
- **TARX.** Discover and list TARX skills, with private and local skills held back for a local runtime.
- **lvlltd.** A paid skill catalog: search and preview for free, quote the price over x402, and get sealed files and `SKILL.md` install paths after purchase.

That is seventeen companies serving skills through their own tools, against four through the spec. I left out a few that matched on the word: Cognism, Nobueno, Voygr and Workerbase have `list_skills` tools, but for them a skill is a person's job skill or a call intent, not an Agent Skill.

## What I take from it

The demand was there before the spec. Companies were already putting skills on their MCP servers, and they each invented a tool with a slightly different name and a slightly different shape. That is exactly the problem a standard exists to fix. An agent that has learned `skills/list` can find Glean's skills, Hugging Face's and BestPrice's without being told a tool name. An agent that meets Timescale, Daloopa and AWS has to read three tool descriptions to learn three conventions.

The companies doing the teaching-the-product kind are the easy conversions, because the content is already a `SKILL.md` and they would only need to change how it is served. The marketplaces and registries are harder and more interesting, since the spec covers serving skills, and not buying, scanning, grading or publishing them.

We will start recording the extension in each provider's MCP profile, and it is a strong candidate for the Agent Readiness checks in the Kin Score. If you serve skills over MCP and I missed you, or you are behind authentication and want to be counted, tell me and I will probe again.
