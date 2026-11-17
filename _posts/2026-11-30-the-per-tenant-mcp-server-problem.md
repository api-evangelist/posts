---
published: true
layout: post
title: 'The Per-Tenant MCP Server Problem'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-per-tenant-mcp-server-problem.png
date: 2026-11-30 13:30:00 +0000
author: Kin Lane
tags:
  - MCP
  - Discovery
  - Multi-Tenant
  - Agents
  - Well-Known
---
I ran into a hosted MCP server recently whose documented address looked like `https://{your-domain}/mcp/...`. It's a perfectly reasonable design. Each customer gets their own server, on their own domain or subdomain, isolated from every other customer. From a security and data-residency standpoint I like it. From a discovery standpoint it is a dead end, and I think it is a pattern a lot of enterprise providers are going to fall into.

## An agent can't fill in the blank

An agent working from public information has no way to know what `{your-domain}` is. The documentation tells a human to go look it up in their account settings. The agent can't log into the account settings. It can find the docs, it can find the template, and then it stops. As far as the agent is concerned, the provider doesn't have an MCP server at all.

That also means it doesn't show up in a catalog in any useful way. Catalogs, registries and well-known files all want a URL. A template isn't a URL.

## What the catalog actually holds

I went looking in the [APIs.io MCP catalog](https://mcp.apis.io/) for this pattern. Of the roughly 5,000 MCP entries recorded with a hosted endpoint, I could only find seven where the endpoint is a tenant placeholder, things like `YOUR_TENANT`, `your-instance`, `your-host.example.com` or a bracketed instance name. Another three put an API key placeholder directly in the URL path or query string, which is its own problem.

Seven is a small number, and I don't read it as a sign that the pattern is rare. I read it as a sign that most per-tenant servers never make it into a catalog at all, because there is nothing public to record. When a provider's only documented address is a template, the profiling either skips it or records the docs page instead. The servers exist. They just aren't addressable, and so they are invisible.

## Isolation and discovery aren't in conflict

The fix isn't to give up per-tenant hosting. The fix is to add one public thing in front of it: a discovery endpoint on a stable, shared host that resolves the tenant.

The pattern looks something like this:

1. **Publish a single public MCP entry point** on your main domain, for example `https://api.provider.com/mcp`, and list it in your well-known API catalog, your llms.txt and your A2A agent card.
2. **Make that entry point authenticate the caller** using OAuth, with protected resource metadata published at the well-known path so an agent can find the authorization server on its own.
3. **Resolve the tenant from the token.** Once the agent has a token, the public endpoint knows which customer it belongs to and can either proxy to the tenant's server or return the tenant's address.
4. **Describe the tools publicly**, even if calling them requires a tenant. An agent should be able to read what your server does before it has credentials, the same way a developer can read your docs before signing up.

This is the same thing we already do with APIs. Plenty of providers run regional or per-customer infrastructure, and they still publish one base URL, one OpenAPI and one auth flow. The routing happens after authentication, not in the documentation.

## Don't put secrets in the address either

While I was looking, the API-key-in-the-URL pattern kept turning up next to the tenant pattern. Putting a key in the path or the query string means it ends up in logs, in browser history and in every place an agent copies the URL. Use a header. Use OAuth. An MCP server is an API, and the same rules about credentials apply.

## Addressable is the minimum

Agent readiness starts with being findable. A beautifully isolated, well-designed per-tenant server that no agent can locate scores the same as no server at all. If you're hosting MCP per customer, give agents a public front door that resolves to the right room. You keep the isolation, and you get to show up when an agent goes looking for what you do.

If your server is templated and you've solved discovery some other way, I'd love to see it. Let me know, and I'll make sure the [APIs.io](https://apis.io) profile reflects it.
