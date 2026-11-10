---
published: true
layout: post
title: 'Mintlify Serves Agent Cards For Its Customers. ReadMe And GitBook Compared.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/mintlify-serves-agent-cards-for-its-customers-readme-and-gitbook-compared.png
date: 2026-12-14 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Mintlify
  - ReadMe
  - GitBook
---
I have been comparing companies that publish A2A agent cards with two of their competitors each day. The overview is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the cards themselves are in the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 that page counts 1,279 providers serving a card, 934 of them conformant.

Mintlify is a different kind of entry. It has its own card, but the bigger story is that Mintlify is the reason a lot of the other cards in this series exist at all.

## Mintlify's Own Card

The [APIs.io record for Mintlify](https://apis.io/a2a/mintlify/) comes from `https://learn.mintlify.com/.well-known/agent-card.json`, fetched in October. It is named "Mintlify Learn," uses protocol version 0.3, points its endpoint at `https://learn.mintlify.com/`, and has one skill called "learn." The skill says to use it when writing, organizing or improving technical documentation on Mintlify. APIs.io grades it conformant, with one deviation noted: it uses `supportedInterfaces` where the spec expects `additionalInterfaces`.

When I checked on November 10, 2026, the card was still live. Same name, same endpoint, same version, one skill. The skill description wording had been tweaked slightly. My own quick probe flags the same `supportedInterfaces` issue and calls it near-conformant, which is the same finding under a stricter label.

I also checked `mintlify.com` and `www.mintlify.com`, which returned 404s at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. `docs.mintlify.com` returned a 530 at both. So Mintlify's card lives on its learning site, not on its main domain.

## The Bigger Story

Here is what makes Mintlify worth a whole post. When I request the root of `learn.mintlify.com`, the response carries an HTTP `Link` header that advertises a set of agent-facing files: `llms.txt`, `llms-full.txt`, `/.well-known/api-catalog`, `/.well-known/mcp/server-card.json`, `/.well-known/agent-card.json` and `/.well-known/agent-skills/index.json`. I see the exact same header on `developers.kit.com` and `developers.dwolla.com`, both of which are Mintlify-hosted docs sites with cards in the catalog.

In other words, Mintlify generates an agent card for the docs sites it hosts. That card follows a pattern: one skill, a description that starts "Use when...", and an endpoint that is the docs site. I pulled 40 hosts from the cards in my data that use that "Use when" wording, and 34 of them responded with Mintlify markers in their headers. I did not test all of them, but it is clear that a big share of the conformant cards in the catalog come from this one platform.

That is a real contribution. Hundreds of API providers now have a machine-readable entry point for agents without having to do anything. Mintlify also documents its [MCP support](https://www.mintlify.com/docs/ai/model-context-protocol), and its [docs llms.txt](https://www.mintlify.com/docs/llms.txt) includes instructions aimed directly at coding agents.

The limit is the same one I keep coming back to. A docs card describes documentation. It tells an agent where to read. It does not describe the provider's product as something an agent can call. It is a discovery step, not an agent interface.

## ReadMe

ReadMe is the closest competitor. I checked `readme.com`, `www.readme.com` and `readme.io` at both well-known paths and got 404s. `docs.readme.com` returned a 200 HTML page at both paths, not JSON. I found no agent card, and APIs.io has none on record for ReadMe.

ReadMe is investing in the agent surface in other ways. Its [llms.txt](https://docs.readme.com/llms.txt) lists documentation for a [ReadMe MCP server](https://docs.readme.com/main/docs/readme-mcp), MCP metrics and an MCP plugin for Cursor. So ReadMe customers get MCP. They just do not get a generated A2A card the way Mintlify customers do, at least not on any ReadMe host I checked.

## GitBook

I checked `gitbook.com`, `www.gitbook.com` and `docs.gitbook.com` at both well-known paths and got 404s. I found no agent card, and there is none in the APIs.io catalog for GitBook.

GitBook's [llms.txt](https://gitbook.com/docs/llms.txt) points to [GitBook MCP documentation](https://gitbook.com/docs/docs-as-code/gitbook-mcp), pages on agents and MCP in its analytics, and an API reference for getting the MCP server configuration of a published docs site. Like ReadMe, GitBook is giving its customers MCP rather than A2A.

## Side By Side

| | Mintlify | ReadMe | GitBook |
|---|---|---|---|
| Own card found | Yes, learn.mintlify.com | No (hosts checked above) | No (hosts checked above) |
| Grade | Conformant, 1 deviation | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Skills | 1 docs skill | n/a | n/a |
| Generates cards for customers | Yes, advertised in Link header | Not seen | Not seen |
| MCP documented | Yes | Yes | Yes |

## Why It Matters

Docs platforms have become the default way API providers show up to agents. Whatever these three companies ship, thousands of API providers inherit. Mintlify chose to include A2A cards in that bundle, and that single decision accounts for a large part of the A2A footprint in the catalog. ReadMe and GitBook chose MCP first.

None of that is a criticism. A docs card is better than nothing. But I would like to see the platforms take the next step: let customers add real skills to the generated card, point the card at the provider's own MCP server or API when one exists, and move to protocol 1.0.

## Takeaway For Docs Platforms

If you host documentation for API providers, your defaults are their agent strategy. Generating a card is cheap and gets your customers discovered. Making that card editable, so a provider can describe real capabilities and point at a real endpoint, is what turns discovery into something an agent can use. Mintlify is ahead on the first part. Whoever does the second part well will own this layer.
