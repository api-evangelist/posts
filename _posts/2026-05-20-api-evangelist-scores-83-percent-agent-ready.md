---
layout: post
title: "API Evangelist Scores 83% Agent-Ready — And the Last 17% Doesn't Apply"
date: 2026-05-20
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-train-nyc-125th.jpg
category: "Blog"
excerpt: "Cloudflare's new isitagentready.com scanner gave apievangelist.com an 83 — Level 5, 'Agent-Native'. Discoverability, content, and bot access control all came back 100%. The four-out-of-six on API/Auth/MCP/Skill discovery was the only place the score got dinged, and the two misses were the two OAuth checks — which don't apply to a static site with no protected resources. I want to write down what scored, what didn't, and where I think the scoring loses signal."
---
[Cloudflare](https://blog.cloudflare.com/) put out a new tool this week called [isitagentready.com](https://isitagentready.com/). You hand it a URL and it scans for the emerging conventions an agent would look for — `robots.txt` shape, Content Signals, sitemap, RFC 8288 `Link` headers, markdown content negotiation, RFC 9727 API catalogs, MCP server cards, Agent Skills indexes, OAuth discovery, agentic commerce protocols. It gives you a number out of 100 and a level.

I ran it against [apievangelist.com](https://apievangelist.com). The result:

> **83. Level 5. Agent-Native.**

That's the second-highest tier the scanner gives out. It's not nothing — but the more interesting story is _what_ scored and _what_ didn't.

## The Three Categories That Scored 100%

**Discoverability — 3/3.** The scanner pulled my `robots.txt`, validated the structure, extracted the sitemap directive, fetched `sitemap.xml`, parsed the homepage `Link` header, and pulled five RFC 8288 link relations — including the `api-catalog` and `alternate; type="text/markdown"` rels that matter for agents. I [wrote about this last week](https://apievangelist.com/2026/05/16/making-the-api-evangelist-network-agent-readable/) — every HTML response across the network now ships a self-describing `Link` header through the Cloudflare Worker. The scanner saw it.

**Content — 1/1.** Send `Accept: text/markdown` to my homepage and you get `text/markdown; charset=utf-8` back. That's the [Worker doing markdown content negotiation](https://github.com/api-search/network/tree/main/cloudflare-worker) in front of GitHub Pages, which on its own only knows how to serve HTML. This is the single most visible thing the agent-readability work bought me — and the scanner caught it on a 143ms request.

**Bot Access Control — 2/2.** The `robots.txt` has explicit `Allow: /` entries for thirteen named AI bots (GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, CCBot, ByteSpider, PerplexityBot, Cohere-AI, Applebot-Extended, Meta-ExternalAgent, FacebookBot, Diffbot) plus a `Content-Signal: ai-train=yes, search=yes, ai-input=yes` directive declaring consent in the format the [Cloudflare Content Signals draft](https://contentsignals.org/) and IETF AIPREF working group are converging on.

The point of those last two: my position has always been _yes, train on this, yes, ground on this, yes, search this_. I am writing for the web, the agents are the web's new readers. The scanner verified that the consent is published in the right place, in the right shape.

## API, Auth, MCP & Skill Discovery — 4/6

This is where the score got dinged, and where it gets more interesting.

The four passes:

1. **API Catalog at `/.well-known/api-catalog`** — RFC 9727 linkset, `application/linkset+json` content-type, two anchored entries (the contracts API and the agent skills surface). The scanner validated the structure and the type.
2. **MCP Server Card at `/.well-known/mcp/server-card.json`** — and at `/.well-known/mcp/server-cards.json` and at `/.well-known/mcp.json`. I publish it at all three because the convention hasn't stabilized; agents pulling from any of those paths get the same SEP-format card.
3. **Agent Skills index at `/.well-known/agent-skills/index.json`** — three skills published in the v0.2.0 format with a `$schema` field.
4. **WebMCP** — the scanner navigated to the homepage, ran the JavaScript, and found 4 tools registered against `navigator.modelContext` via the imperative WebMCP API. I have not blogged about that yet. It's there, and the scanner saw it.

The two misses are both OAuth checks:

- **OAuth / OIDC discovery** — `/.well-known/openid-configuration` and `/.well-known/oauth-authorization-server` both return 404.
- **OAuth Protected Resource Metadata** — `/.well-known/oauth-protected-resource` returns 404.

The scanner's "how to implement" recommendations on these are exactly right for a site that _has_ protected APIs and wants agents to authenticate against them. They are exactly wrong for apievangelist.com, which is a static Jekyll site served from GitHub Pages with a Cloudflare Worker in front. **There is nothing to authenticate against.** Every catalog, every skill, every MCP card, every blog post, every YouTube transcript, every conversation is intentionally public, intentionally unauthenticated, intentionally consumable without a token.

If I added an `/.well-known/oauth-authorization-server` document, I'd be lying — claiming an authorization endpoint that doesn't exist, scopes that don't apply, an issuer with no key material behind it. That's how you _lower_ the trust signal for agents, not raise it.

## Web Bot Auth — Not Counted Against Me, But Worth Naming

There's a separate check the scanner runs called Web Bot Auth — request signing per `draft-meunier-web-bot-auth-architecture`. It looks for `/.well-known/http-message-signatures-directory`. I publish that path on [apis.io](https://apis.io) with an explicit empty `keys` array and a note explaining apis.io doesn't sign outbound HTTP — the Worker observes inbound RFC 9421 signatures and surfaces them. I have not yet replicated that pattern across `*.apievangelist.com`. So the scanner caught the 404 there, called it out, and (correctly) treated the absence as a finding rather than a score deduction.

That's the next item on the agent-readiness punch list: ship the same explicit "no keys, here's why" directory on every subdomain. Once it's there, this category goes from 2/2 + a footnote to a fully accounted surface.

## Commerce — Not Checked, Which Is Correct

The Commerce category — x402, MPP, Universal Commerce Protocol, ACP — is marked "Not checked" and explicitly does not affect the score. The scanner's note: _"No e-commerce signals were detected on this site."_ Right. apievangelist.com doesn't sell anything; there's no payment surface to declare. If I had a paywalled API endpoint that wanted to participate in agentic commerce, those checks would matter. They don't yet.

## What 83% Actually Reflects

The score system is generous about what counts as "agent-ready" but strict about how the evidence has to be presented. You don't get points for being agent-readable in spirit — you get points for publishing the discovery documents at the canonical well-known paths, in the canonical content-types, returning the canonical 2xx status codes. That's the right call. _Standards exist so agents don't have to guess._

Two of the things I did in the [May 16 agent-readiness push](https://apievangelist.com/2026/05/16/making-the-api-evangelist-network-agent-readable/) are exactly what the scanner was looking for:

- The Cloudflare Worker injecting RFC 8288 `Link` headers on every HTML response.
- The Worker doing markdown content negotiation against `Accept: text/markdown`.

Those two changes together account for at least three of the green checks, including the highest-value one (`Link` headers). The work from last week is independently verifiable in 0–500ms per check. I didn't have to take my own word for it.

## What I'm Doing About the Missing 17%

Here is my honest accounting:

- **OAuth discovery (2 checks, 2 misses):** _Don't apply_. I will not publish OAuth metadata for endpoints that aren't protected. If the scanner one day distinguishes "no protected resources" from "protected resources but no discovery", that distinction would lift these checks off the deduction list. Until then I'd rather have an accurate 83 than a dishonest 100.
- **Web Bot Auth directory:** _Should ship_. I have the pattern from apis.io. Replicating it across `*.apievangelist.com` is a 30-minute Worker change. On the list.
- **Agent Skills v0.2.0 fields:** The scanner found 3 skills in the index but noted "0 with valid v0.2.0 fields". The index uses `$schema` v0.2.0 but the skill entries themselves are still on an older shape. Fixable in the [skills repo](https://github.com/api-evangelist).

A real 100 is reachable on the Web Bot Auth check and the Agent Skills field shape. The OAuth checks shouldn't apply, and if I had to bet, I'd guess Cloudflare iterates the scanner to factor that in.

## Try It on Your Own Site

[isitagentready.com](https://isitagentready.com/) will scan any URL. If you have an API portal, an OpenAPI spec, an MCP server, or anything that wants to be discoverable to agents, I'd recommend running it as a sanity check. The audit details panels give you a _specific path_, a _specific content-type_, and a _specific response code_ that the scanner expected. That's the same surface I'd want an agent to consume — so if the scanner is happy, an agent of comparable strictness will be too.

This is what the agent-readable web should feel like: third-party scanners that read the same well-known paths as the agents they're modeling, finding the same files, reporting the same conclusions. The shape of the web doesn't change. The contracts on top of it do. And those contracts are the work.
