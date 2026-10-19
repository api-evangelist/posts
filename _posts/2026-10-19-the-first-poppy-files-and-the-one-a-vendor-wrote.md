---
published: true
layout: post
title: 'The First Poppy Files, and the One a Vendor Wrote'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-first-poppy-files-and-the-one-a-vendor-wrote.png
date: 2026-10-19
author: Kin Lane
tags:
  - Personal Agent Protocol
  - Discovery
  - Well-Known URI
  - AI Agents
  - OAuth
  - Adoption
  - APIs
---
Two weeks ago Sierra and Meta [announced the Personal Agent Protocol](https://sierra.ai/blog/introducing-personal-agent-protocol) — "Poppy" — and I [added it to the API Evangelist standards catalog](https://standards.apievangelist.com/store/personal-agent-protocol/). It asks a company to publish `/.well-known/poppy.json`, a document that tells a person's AI agent how to start a session with the company, how to sign the person in, and which of its APIs, MCP servers or company agent the agent may use. This morning I went looking for those files across the [APIs.io](https://apis.io) catalog.

I checked the primary domain of 24,577 API providers. **Five publish a valid `poppy.json`.** None of the launch partners named in the announcement — Sierra, Meta, Genesys, Shopify, Stripe, Walmart, Rocket — serves one yet.

Five is not adoption. It is a baseline, and I'll re-run the same check as the specification moves. But the five are worth looking at, because they already show the three shapes this is going to take — and one of them was not published by the company it describes.

## What a valid file is

A 200 is not adoption. 2,525 of the domains I checked answered `/.well-known/poppy.json` with a 200 and something that wasn't a Poppy document: single-page apps that return their HTML for any path, APIs that answer every URL with a JSON error, and one data provider that serves OAuth protected-resource metadata no matter what you ask for. I only count a JSON document with a `protocol_version` and an `organization.domain` that matches the domain I asked, which is what the specification requires.

## The three shapes

**The full implementation.** [Ticket Fairy](https://www.ticketfairy.com/.well-known/poppy.json) and [lvl X](https://lvlltd.com/.well-known/poppy.json) publish the whole thing: an OAuth issuer for signing people in, and APIs listed by type. Ticket Fairy lists an OpenAPI description and two MCP servers, and a company agent to talk to; lvl X lists an OpenAPI description and an MCP server. This is the version of Poppy I find most interesting — a discovery document that ends at the API contract. An agent that finds the file finds the OpenAPI.

**The minimal file.** [Alpic](https://alpic.ai/.well-known/poppy.json) — already on draft 0.2 — and [SynapticRelay](https://synapticrelay.com/.well-known/poppy.json) publish a name, a domain and an empty `web` object. Under the specification that is a company saying an agent may browse its website as an ordinary visitor, and nothing more. It is a perfectly valid place to start.

**The vendor-hosted file.** The fifth is [Panaya](https://www.panaya.com), and Panaya did not write its own document. Its `/.well-known/poppy.json` redirects to a host belonging to **Salespeak**, an AI sales-agent company, which serves this:

```json
{
  "protocol_version": "0.1",
  "organization": { "name": "Panaya", "domain": "panaya.com" },
  "auth": { "issuer": "https://5edf8a32bd6bdec9.agents.salespeak.ai" },
  "agent": {
    "protocols": [
      { "type": "poppy", "endpoint": "https://5edf8a32bd6bdec9.agents.salespeak.ai/conversations" }
    ]
  }
}
```

## What Salespeak built, in its own words

Salespeak [wrote about it](https://salespeak.ai/blog/personal-agent-protocol-b2b/) on October 10, and it is one of the more honest launch posts I've read. Its argument is that Poppy's examples are all retail and support, but one sentence in the draft is a B2B feature: *"With a signed-out token, the Company Agent can answer general questions."* In B2B, a signed-out agent asking general questions is a buyer's agent doing vendor research — pricing, certifications, integrations — possibly asking four other vendors the same thing in the same hour.

So Salespeak built that part and nothing else: *"We built the signed-out path. Nothing more than that, and we'd rather say so plainly."* No sign-in, no account access, no browser sessions, no APIs listed. A buyer's agent can start a signed-out session and ask the company agent questions, answered from the same company context that runs Salespeak's website agent, and the customer gets a record of which agents showed up and what they asked. Salespeak's own `salespeak.ai/.well-known/poppy.json` works the same way, and customers can switch it on for their own domain — which is what Panaya's file is.

Two details I liked. Salespeak points out that the person behind a Poppy agent is, by design, invisible to the company — a stable but opaque ID that differs at every company — so *"the question 'who was that?' has no answer"* and the questions themselves become the only intent signal. And it says plainly that being a design partner is not shipping support: OpenAI helping shape the draft *"doesn't mean ChatGPT speaks the protocol today."*

## How the specification allows it — and how that just changed

Here is the part that makes this worth a post. The rule that lets a vendor serve the file **changed between drafts**.

**Draft 0.1**, which Panaya's document declares, said the well-known URL *"MAY redirect to where the document is hosted, so a Company can host it somewhere else, such as with a provider. The document still speaks for the domain the Personal Agent requested."* A redirect from panaya.com to a Salespeak host is exactly that.

**[Draft 0.2](https://personalagentprotocol.org/docs/spec)**, dated October 18, turns it around: *"A poppy.json speaks for the host that serves it, after any redirects, so a Company that uses a provider has the provider serve it on the Company's own domain."* And `organization.domain` *"MUST be the host that serves the document, after any redirects,"* compared *"with no other normalization."* Under 0.2, a document served from `5edf8a32bd6bdec9.agents.salespeak.ai` speaks for that host, not for panaya.com.

What makes it interesting is that Salespeak already does the *other* two things 0.2 asks of a provider. Draft 0.2 says a provider hosting several companies *"MUST give each its own issuer,"* because otherwise they would be one company under the protocol, sharing user IDs and tokens — and Salespeak gives every customer its own issuer subdomain (Panaya's and Salespeak's own are different). Draft 0.2 also requires the issuer's OAuth metadata to list, in `poppy_domains`, every domain whose document names it — the issuer vouching back for the company. Salespeak's issuer for Panaya publishes `"poppy_domains": ["panaya.com"]`. Two of three. The remaining step is serving the document on Panaya's own domain instead of redirecting to Salespeak's.

That is a fair amount of protocol design visible in one vendor integration: what a document *speaks for* is the security question, and the draft has moved from "whoever was asked" to "whoever actually served it, confirmed by the issuer." The change also catches one of the five full implementations — Ticket Fairy's file redirects from `ticketfairy.com` to `www.ticketfairy.com` while declaring `ticketfairy.com`, which 0.1 allowed and 0.2's "no other normalization" does not. Both are still correct under the version they declare. Both will need a small change to move to 0.2.

## One more thing the redirect shows

Following Panaya's redirect by hand, I noticed it doesn't go straight to Salespeak. The rule configured on `www.panaya.com` points at a link-protection URL from an email security service, which then forwards to Salespeak. It works today, for a client that follows every redirect. But it is a reminder that a well-known file is infrastructure: every hop in front of it is something an agent has to traverse, something that can log the request, and something that can break. The most likely way a URL like that ends up in a redirect rule is by being copied out of an email. Copy the vendor's URL from the vendor.

## What I'm tracking

I've written a probe that checks every provider in the catalog for `/.well-known/poppy.json`, validates it against the specification, records which version's rules it meets, and always checks the launch partners. I'll re-run it as Poppy moves toward 1.0, and I'll write about it when the first launch partner publishes — or when a vendor like Salespeak switches it on for a lot of customers at once, which is the more likely way this spreads.

If you publish a `poppy.json`, or you're building one for customers, tell me and I'll make sure the probe sees it.
