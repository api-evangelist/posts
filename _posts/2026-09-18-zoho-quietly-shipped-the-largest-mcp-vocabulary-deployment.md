---
published: true
layout: post
title: 'Zoho Quietly Shipped The Largest MCP Vocabulary Deployment'
date: 2026-09-18
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Zoho
  - MCP
  - Agents
  - APIs.io
  - APIs
---
One key, 342 occurrences, 37 OpenAPI documents. `x-mcp-group` in Zoho Inventory's contracts is the highest-volume agent-facing extension deployment I found anywhere in the catalog, and it is doing something none of the other MCP vocabularies I have written about this week are doing.

It sits on the path, not the operation. And its value is an array:

```
x-mcp-group:
  - Purchase Receives
```

Every other agent extension in this series marks an individual operation — expose this one, name this one, describe this one, hide this one. Zoho's marks the *path*, and assigns it to a named business grouping. "Purchase Receives." Not a tag, not a tool name, not an SDK namespace. The name of a thing the business does.

That difference is worth sitting with, because I think Zoho arrived at it from a different direction than everyone else and ended up somewhere interesting.

The problem every company hits when putting an agent in front of a real API is scale. Zoho Inventory is a full ERP surface — purchase orders, sales orders, receives, invoices, credit notes, packages, shipments, contacts, items, price lists, warehouses. Hundreds of operations. You cannot hand a model hundreds of tools; it degrades badly. So everyone is solving the same problem, and the solutions I have looked at this week mostly solve it by subtraction. Wistia's `x-wistia-mcp-ignore` removes things. Windmill's `x-mcp-tool` opts things in one at a time.

Zoho solved it by grouping. Rather than deciding operation by operation what an agent should see, they partitioned the API into business capabilities and let the grouping carry the decision. A client can then load "Purchase Receives" as a coherent unit — all the operations that belong to that job, together, because they belong together in the business, not because they happen to share a URL prefix.

That is a more durable idea than per-operation exposure flags, and here is why. Exposure flags encode a decision about the agent. Groupings encode a fact about the business. The first goes stale every time somebody changes their mind about what the assistant should do. The second stays true as long as the company still receives purchases. Zoho put the stable thing in the contract.

There is a second thing I like about it. Because `x-mcp-group` takes an array, a path can belong to more than one group. Real business capabilities overlap constantly — a contact lookup belongs to purchasing and to sales and to accounting. A tagging system that forces one home for each operation gets that wrong, and OpenAPI's tags, which were designed for documentation navigation, get used for this and buckle. Zoho added a second axis rather than overloading the first one, which is the right call and one that a lot of teams get wrong.

And I want to note the deployment scale honestly, because it is the argument. Thirty-seven documents. This is not an experiment in one file. Zoho has run this vocabulary across a real product surface, at volume, in production. Whatever the design's flaws, it has been tested in a way that a proposal never is.

Now — the thing that makes this post slightly frustrating to write. I could not find a published definition of `x-mcp-group` anywhere. Not in the registry, which I expected, but also not in documentation I could reach. So the largest agent-vocabulary deployment in my catalog is also one of the least legible ones. I inferred everything above from the shape of the data and the values, which is exactly what I keep saying tools should not have to do.

Zoho is also, of every company in this series, the one where I have the least sense of whether anyone will read this. It is a very large company with an enormous product portfolio and no particular history of participating in API specification work. That is precisely why I wanted to write it up.

The asks.

**Register `x-mcp-group`.** One key, one file. Describe that it attaches to a path item, that the value is an array of business capability names, and that group names are meant to be stable business vocabulary rather than technical grouping. That last sentence is the valuable one, because it is the part nobody would infer, and it is the part that makes the idea reusable.

**Sponsor the OpenAPI Initiative.** Zoho is a large, profitable, independent software company with a very large API surface across dozens of products. The gap between how much Zoho depends on API description formats and how visible Zoho is in maintaining them is one of the widest in this series. Membership would be a rounding error against what Zoho already spends producing these contracts.

**Get involved.** Zoho has something the specification conversation is short of: the perspective of a company running a very large, multi-product, business-application API estate rather than a single developer-facing API. The problems at that scale — capability grouping, cross-product consistency, exposing an ERP to an assistant without exposing all of it — are not the problems the Special Interest Groups usually hear about, and they are going to matter a lot as agents move from developer tools into business software.

Monday, Algolia — the other half of the `x-mcp-tool` collision.
