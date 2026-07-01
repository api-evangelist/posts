---
published: true
layout: post
title: 'OpenAPI Overlays for MCP and AI-Agent Enrichment'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/openapi-overlays-for-mcp-and-ai-agent-enrichment.png
date: 2026-08-11
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - MCP
  - AI
  - Agents
---

I have been picking apart the use cases from my earlier post, [The Many Use Cases for OpenAPI Overlays](https://apievangelist.com/2026/06/26/the-many-use-cases-for-openapi-overlays/), and this is the one that sits closest to my heart right now, because it is where APIs and agents actually meet. Agents and MCP servers do not read your API the way a human does. A developer skims your docs, forms a mental model, and forgives your ambiguity. An agent gets your operation description as a tool definition, takes it literally, and picks the wrong operation when two of them sound alike. So the temptation is to cram all of that extra disambiguation, all of those "use this when, do not use this when" hints, straight into your human-facing spec. Do that and your docs bloat into a lecture nobody wanted to read.

I keep coming back to the same running example, my [Products API teaching template](https://github.com/api-evangelist/products-api). It has the usual shape: `GET`/`POST` on `/products`, `GET`/`PUT`/`DELETE` on `/products/{id}`, and a separate cancel operation. That cancel operation is exactly the kind of thing that trips an agent up. To a machine, "update a product" and "cancel a product" are two verbs with overlapping vocabulary, and without guidance an agent will happily `PUT` a status field when it should have called cancel, or call cancel when the human just wanted a field changed. The fix is not to fork the spec. It is to keep one contract and layer the agent's worldview on top of it with an overlay.

Here is the first overlay, the agent-facing enrichment. It rewrites descriptions in plain imperative language an agent can act on, and it draws a hard line between update and cancel.

```yaml
overlay: 1.1.0
info:
  title: Products API Agent Enrichment
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products/{id}'].put
    update:
      description: >
        Use this to modify the fields of an existing product (name, price,
        description, availability). Do NOT use this to take a product out of
        sale — updating a status field is not the same as cancelling. Prefer
        GET /products over guessing an id; look the product up first, then
        PUT only the fields you intend to change.
  - target: $.paths['/products/{id}/cancel'].post
    update:
      description: >
        Use this to permanently take a product out of sale. This is distinct
        from PUT /products/{id}, which edits fields. Do NOT use this to fix a
        typo or adjust a price. There is no undo; confirm intent before calling.
```

Every sentence there earns its place for an agent and would be noise in a human quickstart. That is the whole point. The overlay is where the agent gets its bedside manner, and the base spec stays lean.

The second overlay does the machine-readable half. My description rewrites help an agent reason, but an MCP generator wants structured signals it can map into a tool definition. So I inject vendor extensions the generator reads at build time when it produces the MCP tool list.

```yaml
overlay: 1.1.0
info:
  title: Products API MCP Metadata
  version: 1.0.0
extends: https://raw.githubusercontent.com/api-evangelist/products-api/main/openapi/products-api-openapi.yml
actions:
  - target: $.paths['/products'].get
    update:
      x-mcp-tool-name: list_products
      x-agent-hint: Safe, read-only. Call this first to discover product ids.
  - target: $.paths['/products/{id}/cancel'].post
    update:
      x-mcp-tool-name: cancel_product
      x-agent-hint: Destructive and irreversible. Require explicit confirmation.
  - target: $.paths['/products/{id}'].put.parameters[0]
    update:
      description: The exact product id from GET /products, not a name or SKU.
```

The `x-` extensions ride through OpenAPI untouched, and my MCP generator picks them up to name tools deterministically instead of mangling `post /products/{id}/cancel` into something unusable, and to flag the destructive operations. The [Overlay specification](https://spec.openapis.org/overlay/latest.html) is built for exactly this: additive, targeted, non-destructive edits applied against a base document.

Two audiences, humans and agents, one spec. I do not maintain a second document that drifts. I maintain a base contract and two overlays, and I apply the agent overlays only in the build step that generates my MCP surface. My human docs render from the base and stay readable.

Here is my strong take. Agent-readiness is not a docs problem and it is not a rewrite-your-API problem. It is an overlay concern. The day you accept that your API has two consumers with genuinely different needs is the day you stop bloating one to serve the other. Keep the contract single, keep the agent context in an overlay, and let the build decide who gets what.
