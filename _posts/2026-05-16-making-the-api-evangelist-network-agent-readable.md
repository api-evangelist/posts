---
layout: post
title: "Making the API Evangelist Network Agent-Readable"
date: 2026-05-16
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-banana-subway-stairs.jpeg
category: "Blog"
excerpt: "I spent the day applying the agent-readiness playbook across twenty-two subdomains of the API Evangelist network. The result is end-to-end agent-readable infrastructure — RFC 9264 linksets at /.well-known/api-catalog on every site, a Cloudflare Worker doing markdown content negotiation in front of GitHub Pages, agent skills at /skills/, a JSON-LD context for the API Evangelist vocabulary, and AI consent signals in every robots.txt. Twenty-two sites. One coherent surface."
---
I spent last night applying [my agent-readiness playbook](https://github.com/api-search/network/blob/main/AGENT-READINESS-PLAYBOOK.md), first written and applied to apis.io, and now across twenty-two subdomains of the API Evangelist network. The result is end-to-end agent-readable infrastructure built on RFCs rather than vendor conventions, sitting in front of a network of static Jekyll sites that humans browse the same way they always have.

This is part of my ongoing work to answer to the question: _what does an agent-readable site actually look like, end to end?_

## Every Subdomain Has a Machine-Readable Front Door

Every site under `*.apievangelist.com` now publishes three things at well-known locations that an agent can hit before it parses any HTML:

- **`/.well-known/api-catalog`** — an [RFC 9264](https://www.rfc-editor.org/rfc/rfc9264) linkset, served under [RFC 9727](https://www.rfc-editor.org/rfc/rfc9727)'s well-known URI. Each entry has an `anchor` (the resource's canonical URL), a `title`, `description`, and zero or more of `service-desc` (OpenAPI / AsyncAPI URLs), `service-doc` (human documentation), and `describedby` (JSON Schema / JSON-LD). On `apis.apievangelist.com` the linkset has **6,310 entries** — one per API across the entire network. On `contracts.apievangelist.com` it has **5,280 entries** — one per provider. The smaller sites carry per-resource catalogs of their own.
- **`/apis.json`** — the site's own machine-readable identity in my own [APIs.json](https://apisjson.org) format. Name, description, tags, maintainers, support contact, GitHub repo. The "who are you and what do you offer" file an agent reads instead of crawling.
- **`/robots.txt`** — with explicit AI consent signals. Beyond the usual `Allow: /`, every site now publishes:

```
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Content-Usage: search=y, ai-input=y, ai-train=y
```

Search indexing, AI inference, and AI training are explicitly permitted. The Cloudflare Content Signals and IETF AIPREF formats are both included for coverage--the consent moves from my terms of service into anHTTP header an agent can parse.

That is three machine-readable files times twenty-two sites — **sixty-six new artifacts** that didn't exist this morning. None of them require an agent to scrape HTML to discover what the site offers.

## A Cloudflare Worker Doing What Static Hosting Can't

GitHub Pages does a lot of things well. It does not let you set arbitrary `Content-Type` headers. It does not let you inject `Link` headers. It does not let you content-negotiate on `Accept`. It does not let you read inbound signed bot headers and surface them.

So I shipped a single [Cloudflare Worker](https://github.com/api-evangelist) in front of `*.apievangelist.com` doing four jobs:

1. **Sets `Content-Type: application/linkset+json`** on the `/.well-known/api-catalog` files. Pages serves them as `text/plain` otherwise, which makes the most important machine-readable file on the site look like a blob of unstructured text to a strict client.
2. **Injects [RFC 8288](https://www.rfc-editor.org/rfc/rfc8288.html) `Link` headers** on every HTML response — `rel="api-catalog"`, `rel="agent-skills"`, `rel="sitemap"`, and `rel="alternate"; type="text/markdown"`. Hit any page with `curl -I` and you can find the machine surface without parsing the page body. This is the single highest-leverage change in the whole project. _Every_ HTML page is now self-describing for agents.
3. **Markdown content negotiation.** Send `Accept: text/markdown` to `https://apis.apievangelist.com/store/anthropic-messages-api/` and you get this back, synthesized from the catalog entry:

So when you come across the Anthropic Messages API that has been profiled as part of the API Evangelist network you get:

```markdown
# Anthropic Messages API

**API:** <https://apis.apievangelist.com/store/anthropic-messages-api/>

## Machine-readable descriptions
- [OpenAPI](https://raw.githubusercontent.com/api-evangelist/anthropic/refs/heads/main/openapi/anthropic-messages-api-openapi.yml) — `application/vnd.oai.openapi`

## Documentation
- [Documentation](https://docs.anthropic.com/en/api/messages)

## Schemas & related
- [JSONSchema](https://raw.githubusercontent.com/api-evangelist/anthropic/refs/heads/main/json-schema/anthropic-message-schema.json)
```

One URL, two representations. Humans get the HTML page they have always gotten. Agents get clean structured markdown synthesized from the same catalog data. The HTML response advertises the markdown alternate in its `Link` headers so agents don't have to guess that it exists. This works on every `*.apievangelist.com/store/<slug>/` URL across the network — apis, contracts, standards, policies, rules, strategies, properties, the lot.

4. **Web Bot Auth observability.** The Worker detects [RFC 9421](https://www.rfc-editor.org/rfc/rfc9421.html) HTTP Message Signatures tagged `web-bot-auth` ([draft-meunier](https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/)) and surfaces them in an `x-bot-auth` response header. Cloudflare's edge verdict (`cf-verified-bot: true`) is trusted when present. Full Ed25519 verification is scaffolded for a follow-up; observability today gives me the logs to drive that work.

About 250 lines of JavaScript, sitting in front of a network of static origins. It is the cheapest way I know of to graft an agent-ready edge onto a Jekyll site without rewriting any of the Jekyll. Keeping my static base, but making things dynamic.

## Agent Skills — A Published Operating Manual

I published three [Agent Skills](https://agentskills.io) at `apievangelist.com/skills/`:

- **`discover-apievangelist`** — primes an agent with the network's structure, the discovery endpoints, the content-negotiation conventions. The skill an agent should hit first.
- **`search-apis`** — keyword / provider / tag search against the catalog endpoints. Includes a runnable Python recipe.
- **`fetch-api-spec`** — given an `apis.apievangelist.com` or `contracts.apievangelist.com` URL, pull the OpenAPI / AsyncAPI directly from the provider's GitHub repo.

Skills are publishing the "operating manual" for API Evangelist. They mean agents do not have to infer how to use the site — they read instructions I wrote. The index lives at [`/skills/index.json`](https://apievangelist.com/skills/index.json) with a `$schema` reference to the agentskills.io schema. The Worker advertises this index in every HTML response's `Link: rel="agent-skills"` header.

## JSON-LD Context for the API Evangelist Vocabulary

Published at [`/context.jsonld`](https://apievangelist.com/context.jsonld). It defines the API Evangelist terms — `Provider`, `API`, `Contract`, `Property`, `Spec`, `Capability`, `Policy`, `Rule`, `Standard`, `Strategy`, `Experience`, plus the apis.yml-specific keys (`aid`, `baseURL`, `humanURL`, `specificationVersion`) and the RFC 9264 linkset terms — and maps each to [Schema.org](https://schema.org) where applicable. `Provider` is a `schema:Organization`. `API` is a `schema:WebAPI`. `name` is `schema:name`. The enriched catalogs reference this context so downstream consumers can resolve terms to standard vocabulary.

This is the smallest defensible JSON-LD step. A larger pass — per-resource contexts published as their own dereferenceable IRIs — is on the list, I just didn't have the bandwidth to do today.

## A Source Widget On Every Detail Page

Every API detail page on `apis.apievangelist.com` and every contract page on `contracts.apievangelist.com` now renders the upstream YAML inline, with Prism syntax highlighting, line numbers, search-within-source, a YAML ↔ JSON toggle, and a download button. Humans see exactly what agents see. The structured data is not hidden behind the prose — it _is_ the page, displayed alongside it.

## Why the Edge Layer Is the Hinge

If I had to point at one decision that made all the rest of this work, it is the Cloudflare Worker. Every other piece of the playbook depends on it to make the agentic magic happen.

- The `/.well-known/api-catalog` is useless if the content-type isn't `application/linkset+json`. The Worker fixes that.
- The `Link` headers are how agents discover the catalog, the skills, and the markdown alternates. The Worker injects them.
- Markdown content negotiation is the agent-readable representation of every detail page. The Worker is what does the synthesis.
- Web Bot Auth observability is how I will know which agents are showing up, what they sign as, and whether their signatures verify. The Worker is the only place that signal exists.

Static hosting could not do any of this. Adding a Worker did not require rewriting the static origins. The Worker sits between the agent and pages and grafts on the four things Pages cannot do. Two-hundred-fifty lines of JavaScript. One configuration file. Two-hundred-something subdomains worth of pages becoming meaningfully more agent-readable as a single deploy.

## Where the Web Sits Today

Most public sites still treat agents as a hostile species — gated, rate-limited, crawled apologetically by web archives, and parsed via HTML even when the underlying data is structured. The result is a web that is much harder for agents to read than it should be, and structured data buried under HTML that nobody wants to scrape.

I do not think this is sustainable. The volume of agent traffic is climbing, and the cost of every agent visit re-doing HTML parsing the site already paid to render is a tax the whole ecosystem is paying. The fix is the boring one — publish your data the way you want it consumed, advertise where it lives in `Link` headers an agent can read in one request, and consent explicitly in `robots.txt` about what you do and do not permit.

Twenty-two sites. Sixty-six new machine-readable artifacts. A Worker in front of all of it. The cost was a day of work on top of infrastructure I already had. The cost of _not_ doing this — across the API economy — is going to be hundreds of millions of agent requests scraping HTML they did not need to scrape because the structured data was never published next to the page.

## What I Didn't Do

Here is where I stopped for a variety of reasons, but will likely give some more cycles in a couple f weeks:

- **No `llms.txt`.** The RFC 9264 catalog plus markdown content negotiation cover the same use case using existing standards. I did not want to ship a third overlapping discovery file.
- **No bespoke "agent API."** One URL, two representations, via content negotiation. Splitting the human surface from the agent surface creates two surfaces to maintain. I'd rather keep them coupled.
- **No full Web Bot Auth verification yet.** Observability is in place. Ed25519 signature verification against the agent's published key directory is a follow-up. The scaffolding I shipped gives me the logs to drive that work.
- **No per-resource JSON-LD contexts.** One network-level context for now. Per-resource is the next layer.

## What's Next

- **Verify the Web Bot Auth signatures** rather than just observing them. RFC 9421 over the canonical message, key fetch from the agent's directory, store a verification verdict.
- **Capability-shaped MCP surfaces** in front of the same catalog. Every API in `apis.apievangelist.com` has a description, an OpenAPI, a JSON Schema, and now an agent-readable representation. The next step is to expose them as MCP-callable capabilities — not just _discoverable_ APIs, but _executable_ capabilities, which is what the agent ecosystem actually wants.
- **The same playbook applied to the [Naftiko](https://naftiko.io) network.** Same RFCs, same Worker pattern, same agent skills. The Naftiko surface is younger and more concentrated, so the application should be cleaner.

Most of what is in this playbook is not new technology. RFC 8288 has been around since 2017. RFC 9264 since 2022. RFC 9727 since 2025. Schema.org since 2011. APIs.json since 2014. What is new is treating them as a coherent stack — the catalog is the index, the linkset is the format, the Worker is the edge, the markdown is the alternate representation, the skill is the manual, the JSON-LD is the vocabulary, the robots.txt is the consent. Stack them together and a network of static Jekyll sites starts feeling like a single agent-readable surface, while taking full benefits of a static approach to making my content available to our AI overlords.
